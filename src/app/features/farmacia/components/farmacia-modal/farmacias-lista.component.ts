import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { Tag } from 'primeng/tag';
import { FloatLabel } from 'primeng/floatlabel';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { Checkbox } from 'primeng/checkbox';
import { Select } from 'primeng/select';
import { ConfirmationService } from 'primeng/api';
import { FarmaciaService } from '../../services/farmacia.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { Farmacia, CreateFarmaciaDto, EstadoFarmacia, EquipoAsignado } from '../../models/farmacia.models';

@Component({
  selector: 'app-farmacias-lista',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    TableModule, Button, Dialog, InputText, Tag,
    FloatLabel, ConfirmDialog, Checkbox, Select,
  ],
  providers: [ConfirmationService],
  templateUrl: './farmacias-lista.component.html',
})
export class FarmaciasListaComponent implements OnInit {
  private readonly farmaciaService = inject(FarmaciaService);
  private readonly notify          = inject(NotificationService);
  private readonly confirmService  = inject(ConfirmationService);
  private readonly fb              = inject(FormBuilder);

  farmacias  = signal<Farmacia[]>([]);
  isLoading  = signal(true);
  showModal  = signal(false);
  isSaving   = signal(false);
  editingId  = signal<number | null>(null);

  equipos    = signal<EquipoAsignado[]>([]);
  nuevoEquipo = signal('');

  tipoOptions = [
    { label: 'Central',     value: 'CENTRAL' },
    { label: 'Emergencia',  value: 'EMERGENCIA' },
    { label: 'UCI',         value: 'UCI' },
    { label: 'Satélite',    value: 'SATELITE' },
    { label: 'Otro',        value: 'OTRO' },
  ];

  estadoOptions = [
    { label: 'Activa',        value: 'ACTIVA'        },
    { label: 'Inactiva',      value: 'INACTIVA'      },
    { label: 'Mantenimiento', value: 'MANTENIMIENTO' },
  ];

  form: FormGroup = this.fb.group({
    nombre:        ['', [Validators.required, Validators.minLength(3)]],
    codigo:        ['', [Validators.required, Validators.pattern(/^[A-Z0-9\-]+$/)]],
    habilitado:    [true],
    tipo:          ['', Validators.required],
    codigoDigemid: [''],
    direccion:     ['', Validators.required],
    responsable:   ['', Validators.required],
    telefono:      ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
  });

  ngOnInit(): void { this.loadFarmacias(); }

  loadFarmacias(): void {
    this.isLoading.set(true);
    this.farmaciaService.getAll().subscribe({
      next: (res) => { this.farmacias.set(res.data.content); this.isLoading.set(false); },
      error: () => { this.farmacias.set(this.getMock()); this.isLoading.set(false); },
    });
  }

  abrirNueva(): void {
    this.editingId.set(null);
    this.form.reset({ habilitado: true });
    this.equipos.set([]);
    this.nuevoEquipo.set('');
    this.showModal.set(true);
  }

  abrirEditar(f: Farmacia): void {
    this.editingId.set(f.id);
    this.form.patchValue(f);
    this.equipos.set(f.equiposAsignados ? [...f.equiposAsignados] : []);
    this.nuevoEquipo.set('');
    this.showModal.set(true);
  }

  agregarEquipo(): void {
    const nombre = this.nuevoEquipo().trim().toUpperCase();
    if (!nombre) return;
    this.equipos.update(list => [...list, { nombrePc: nombre, estado: true }]);
    this.nuevoEquipo.set('');
  }

  eliminarEquipo(index: number): void {
    this.equipos.update(list => list.filter((_, i) => i !== index));
  }

  toggleEquipoEstado(index: number): void {
    this.equipos.update(list =>
      list.map((e, i) => i === index ? { ...e, estado: !e.estado } : e)
    );
  }

  onNuevoEquipoChange(event: Event): void {
    this.nuevoEquipo.set((event.target as HTMLInputElement).value);
  }

  onNuevoEquipoKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') { event.preventDefault(); this.agregarEquipo(); }
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.isSaving.set(true);
    const dto: CreateFarmaciaDto = { ...this.form.value, equiposAsignados: this.equipos() };
    const id = this.editingId();
    const req$ = id
      ? this.farmaciaService.update(id, dto)
      : this.farmaciaService.create(dto);

    req$.subscribe({
      next: () => {
        this.isSaving.set(false);
        this.showModal.set(false);
        this.notify.success(id ? 'Farmacia actualizada' : 'Farmacia creada');
        this.loadFarmacias();
      },
      error: () => {
        this.isSaving.set(false);
        this.notify.error('Error al guardar farmacia');
      },
    });
  }

  confirmarEliminar(f: Farmacia): void {
    this.confirmService.confirm({
      message: `¿Eliminar la farmacia <strong>${f.nombre}</strong>?`,
      header: 'Confirmar',
      icon: 'pi pi-trash',
      acceptLabel: 'Eliminar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.farmaciaService.delete(f.id).subscribe({
          next: () => { this.notify.success('Farmacia eliminada'); this.loadFarmacias(); },
          error: () => this.notify.error('No se pudo eliminar'),
        });
      },
    });
  }

  getSeveridadEstado(estado: EstadoFarmacia): 'success' | 'warn' | 'danger' {
    return estado === 'ACTIVA' ? 'success' : estado === 'INACTIVA' ? 'danger' : 'warn';
  }

  private getMock(): Farmacia[] {
    return [
      { id: 1, nombre: 'Farmacia Central', codigo: 'FC-01', habilitado: true,
        tipo: 'CENTRAL', codigoDigemid: 'DIG-001',
        direccion: 'Piso 1, Ala Norte', responsable: 'Qf. María López', telefono: '987654321',
        equiposAsignados: [
          { nombrePc: 'PCN_053', estado: true },
          { nombrePc: 'PC_994_16FA', estado: true },
        ],
        estado: 'ACTIVA', createdAt: '', updatedAt: '' },
      { id: 2, nombre: 'Farmacia Emergencia', codigo: 'FE-01', habilitado: true,
        tipo: 'EMERGENCIA', codigoDigemid: 'DIG-002',
        direccion: 'Piso 1, Urgencias', responsable: 'Qf. Carlos Ríos', telefono: '987654322',
        equiposAsignados: [],
        estado: 'ACTIVA', createdAt: '', updatedAt: '' },
    ];
  }
}

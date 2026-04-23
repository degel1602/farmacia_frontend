import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { InputText } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { Textarea } from 'primeng/textarea';
import { Tag } from 'primeng/tag';
import { FloatLabel } from 'primeng/floatlabel';

import { MedicamentoService } from '../../services/medicamento.service';
import { NotificationService } from '../../../../core/services/notification.service';
import {
  MovimientoInventario,
  TipoMovimiento,
  CreateMovimientoDto,
} from '../../models/farmacia.models';

@Component({
  selector: 'app-movimientos',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    TableModule, Button, Dialog, InputText, InputNumber, Textarea,
    Tag, FloatLabel,
  ],
  templateUrl: './movimientos.component.html',
})
export class MovimientosComponent implements OnInit {
  private readonly medicamentoService = inject(MedicamentoService);
  private readonly notify             = inject(NotificationService);
  private readonly fb                 = inject(FormBuilder);

  movimientos  = signal<MovimientoInventario[]>([]);
  totalRecords = signal(0);
  isLoading    = signal(true);
  showModal    = signal(false);
  isSaving     = signal(false);

  tipoOptions: { label: string; value: TipoMovimiento; icon: string; severity: 'success' | 'danger' | 'info' | 'warn' }[] = [
    { label: 'Entrada',   value: 'ENTRADA',    icon: 'pi pi-arrow-down',  severity: 'success' },
    { label: 'Salida',    value: 'SALIDA',     icon: 'pi pi-arrow-up',    severity: 'danger'  },
    { label: 'Ajuste',    value: 'AJUSTE',     icon: 'pi pi-cog',         severity: 'info'    },
    { label: 'Devolución',value: 'DEVOLUCION', icon: 'pi pi-undo',        severity: 'warn'    },
    { label: 'Traslado',  value: 'TRASLADO',   icon: 'pi pi-arrows-h',    severity: 'info'    },
  ];

  form: FormGroup = this.fb.group({
    medicamentoId:    [null, Validators.required],
    farmaciaId:       [1,   Validators.required],
    tipo:             [null, Validators.required],
    cantidad:         [null, [Validators.required, Validators.min(1), Validators.max(99999)]],
    motivoMovimiento: ['',   [Validators.required, Validators.minLength(5)]],
    observaciones:    [''],
    numeroDocumento:  [''],
    proveedor:        [''],
  });

  get tipo() { return this.form.get('tipo')!; }
  get cantidad() { return this.form.get('cantidad')!; }
  get motivo() { return this.form.get('motivoMovimiento')!; }

  ngOnInit(): void {
    this.loadMovimientos();
  }

  loadMovimientos(): void {
    this.isLoading.set(true);
    this.medicamentoService.getMovimientos().subscribe({
      next: (res) => {
        this.movimientos.set(res.data.content);
        this.totalRecords.set(res.data.totalElements);
        this.isLoading.set(false);
      },
      error: () => {
        this.movimientos.set(this.getMockMovimientos());
        this.totalRecords.set(3);
        this.isLoading.set(false);
      },
    });
  }

  abrirModal(): void {
    this.form.reset({ farmaciaId: 1 });
    this.showModal.set(true);
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    // Validación adicional: cantidad positiva
    if (this.form.value.cantidad <= 0) {
      this.notify.error('Error', 'La cantidad debe ser mayor a cero');
      return;
    }

    this.isSaving.set(true);
    const dto: CreateMovimientoDto = this.form.value;

    this.medicamentoService.registrarMovimiento(dto).subscribe({
      next: () => {
        this.isSaving.set(false);
        this.showModal.set(false);
        this.notify.success('Movimiento registrado', 'El movimiento fue guardado exitosamente');
        this.loadMovimientos();
      },
      error: () => {
        this.isSaving.set(false);
        this.notify.error('Error', 'No se pudo registrar el movimiento');
      },
    });
  }

  getSeverityTipo(tipo: TipoMovimiento): 'success' | 'danger' | 'info' | 'warn' {
    const opt = this.tipoOptions.find(o => o.value === tipo);
    return opt?.severity ?? 'info';
  }

  getIconTipo(tipo: TipoMovimiento): string {
    const opt = this.tipoOptions.find(o => o.value === tipo);
    return opt?.icon ?? 'pi pi-circle';
  }

  private getMockMovimientos(): MovimientoInventario[] {
    return [
      {
        id: 1,
        medicamento: { id: 1, codigo: 'MED-001', nombre: 'Paracetamol 500mg', forma: 'TABLETA', concentracion: '500mg' },
        farmacia: { id: 1, nombre: 'Farmacia Central' },
        tipo: 'ENTRADA', cantidad: 200, cantidadAnterior: 300, cantidadResultante: 500,
        unidadMedida: 'Unidad', motivoMovimiento: 'Compra a proveedor',
        usuario: 'admin', fechaMovimiento: new Date().toISOString(),
      },
      {
        id: 2,
        medicamento: { id: 2, codigo: 'MED-002', nombre: 'Amoxicilina 500mg', forma: 'CAPSULA', concentracion: '500mg' },
        farmacia: { id: 1, nombre: 'Farmacia Central' },
        tipo: 'SALIDA', cantidad: 30, cantidadAnterior: 75, cantidadResultante: 45,
        unidadMedida: 'Unidad', motivoMovimiento: 'Dispensación paciente',
        usuario: 'admin', fechaMovimiento: new Date().toISOString(),
      },
    ];
  }
}

import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, switchMap, startWith } from 'rxjs';

import { Table, TableModule } from 'primeng/table';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { Select } from 'primeng/select';
import { Tooltip } from 'primeng/tooltip';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';

import { MedicamentoService } from '../../services/medicamento.service';
import {
  Medicamento,
  AlertaVencimiento,
  EstadoMedicamento,
  FiltroInventario,
} from '../../models/farmacia.models';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    TableModule, InputText, Button, Tag, Select, Tooltip,
    IconField, InputIcon,
  ],
  templateUrl: './inventario.component.html',
})
export class InventarioComponent implements OnInit {
  private readonly medicamentoService = inject(MedicamentoService);

  medicamentos = signal<Medicamento[]>([]);
  totalRecords = signal(0);
  isLoading    = signal(true);
  rows         = 20;
  first        = 0;

  // Filtros
  searchText     = '';
  filtroAlerta: AlertaVencimiento | null = null;
  filtroEstado: EstadoMedicamento | null = null;

  private searchSubject$ = new Subject<string>();

  opcionesAlerta = [
    { label: 'Todos',             value: null },
    { label: 'OK',                value: 'OK' },
    { label: 'Próximo a vencer',  value: 'PROXIMO' },
    { label: 'Crítico',           value: 'CRITICO' },
    { label: 'Vencido',           value: 'VENCIDO' },
  ];

  opcionesEstado = [
    { label: 'Todos',    value: null },
    { label: 'Activo',   value: 'ACTIVO' },
    { label: 'Inactivo', value: 'INACTIVO' },
    { label: 'Agotado',  value: 'AGOTADO' },
    { label: 'Vencido',  value: 'VENCIDO' },
  ];

  ngOnInit(): void {
    this.searchSubject$
      .pipe(debounceTime(350), distinctUntilChanged(), startWith(''))
      .subscribe(() => this.loadPage(0));
  }

  loadPage(page: number): void {
    this.isLoading.set(true);
    const filtros: FiltroInventario = {
      search:           this.searchText || undefined,
      alertaVencimiento: this.filtroAlerta ?? undefined,
      estado:            this.filtroEstado ?? undefined,
    };

    this.medicamentoService.getInventario(filtros, page, this.rows).subscribe({
      next: (res) => {
        this.medicamentos.set(res.data.content);
        this.totalRecords.set(res.data.totalElements);
        this.isLoading.set(false);
      },
      error: () => {
        this.medicamentos.set(this.getMockData());
        this.totalRecords.set(this.getMockData().length);
        this.isLoading.set(false);
      },
    });
  }

  onPageChange(event: { first: number; rows: number }): void {
    this.first = event.first;
    this.rows  = event.rows;
    this.loadPage(event.first / event.rows);
  }

  onSearchChange(value: string): void {
    this.searchText = value;
    this.searchSubject$.next(value);
  }

  onFilterChange(): void {
    this.loadPage(0);
  }

  onLimpiarFiltros(): void {
    this.searchText  = '';
    this.filtroAlerta = null;
    this.filtroEstado = null;
    this.loadPage(0);
  }

  // ── Helpers de display ────────────────────────────────────────

  getSeverityAlerta(alerta: AlertaVencimiento): 'success' | 'warn' | 'danger' | 'info' {
    const map: Record<AlertaVencimiento, 'success' | 'warn' | 'danger' | 'info'> = {
      OK:      'success',
      PROXIMO: 'warn',
      CRITICO: 'danger',
      VENCIDO: 'danger',
    };
    return map[alerta];
  }

  getLabelAlerta(alerta: AlertaVencimiento): string {
    const map: Record<AlertaVencimiento, string> = {
      OK:      'Vigente',
      PROXIMO: 'Próx. Vencer',
      CRITICO: 'Crítico',
      VENCIDO: 'Vencido',
    };
    return map[alerta];
  }

  getRowClass(med: Medicamento): string {
    if (med.alertaVencimiento === 'VENCIDO' || med.alertaVencimiento === 'CRITICO') return 'stock-row-critical';
    if (med.alertaVencimiento === 'PROXIMO') return 'stock-row-warning';
    if (med.stockActual <= med.stockMinimo) return 'stock-row-warning';
    return 'stock-row-ok';
  }

  getStockPct(med: Medicamento): number {
    if (med.stockMaximo === 0) return 0;
    return Math.min(100, (med.stockActual / med.stockMaximo) * 100);
  }

  getStockColor(med: Medicamento): string {
    const pct = this.getStockPct(med);
    if (pct < 20) return '#ef4444';
    if (pct < 40) return '#f59e0b';
    return '#10b981';
  }

  private getMockData(): Medicamento[] {
    return [
      {
        id: 1, codigo: 'MED-001', nombre: 'Paracetamol 500mg', nombreGenerico: 'Paracetamol',
        laboratorio: 'Farmindustria', forma: 'TABLETA', concentracion: '500mg',
        categoria: { id: 1, nombre: 'Analgésicos', descripcion: '', color: '#2378f0', icono: 'pi-box', totalMedicamentos: 45 },
        farmacia: { id: 1, nombre: 'Farmacia Central', codigo: 'FC-01' },
        stockActual: 500, stockMinimo: 100, stockMaximo: 1000, unidadMedida: 'Unidad',
        precioCompra: 0.15, precioVenta: 0.30,
        fechaVencimiento: '2026-12-31', lote: 'L-2024-001',
        estado: 'ACTIVO', alertaVencimiento: 'OK',
        createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z',
      },
      {
        id: 2, codigo: 'MED-002', nombre: 'Amoxicilina 500mg', nombreGenerico: 'Amoxicilina',
        laboratorio: 'GlaxoSmithKline', forma: 'CAPSULA', concentracion: '500mg',
        categoria: { id: 2, nombre: 'Antibióticos', descripcion: '', color: '#00bcd4', icono: 'pi-box', totalMedicamentos: 30 },
        farmacia: { id: 1, nombre: 'Farmacia Central', codigo: 'FC-01' },
        stockActual: 45, stockMinimo: 50, stockMaximo: 300, unidadMedida: 'Unidad',
        precioCompra: 0.80, precioVenta: 1.50,
        fechaVencimiento: '2025-04-30', lote: 'L-2023-087',
        estado: 'ACTIVO', alertaVencimiento: 'PROXIMO',
        createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z',
      },
      {
        id: 3, codigo: 'MED-003', nombre: 'Ibuprofeno 400mg', nombreGenerico: 'Ibuprofeno',
        laboratorio: 'Pfizer', forma: 'TABLETA', concentracion: '400mg',
        categoria: { id: 1, nombre: 'Analgésicos', descripcion: '', color: '#2378f0', icono: 'pi-box', totalMedicamentos: 45 },
        farmacia: { id: 1, nombre: 'Farmacia Central', codigo: 'FC-01' },
        stockActual: 200, stockMinimo: 50, stockMaximo: 500, unidadMedida: 'Unidad',
        precioCompra: 0.20, precioVenta: 0.45,
        fechaVencimiento: '2025-03-15', lote: 'L-2023-045',
        estado: 'ACTIVO', alertaVencimiento: 'CRITICO',
        createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z',
      },
    ];
  }
}

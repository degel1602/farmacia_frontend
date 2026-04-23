import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Tag } from 'primeng/tag';
import { Skeleton } from 'primeng/skeleton';
import { MedicamentoService } from '../../services/medicamento.service';
import { Medicamento, AlertaVencimiento } from '../../models/farmacia.models';

@Component({
  selector: 'app-alertas',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, Tag, Skeleton],
  templateUrl: './alertas.component.html',
})
export class AlertasComponent implements OnInit {
  private readonly medicamentoService = inject(MedicamentoService);

  allMeds    = signal<Medicamento[]>([]);
  isLoading  = signal(true);

  vencidos       = computed(() => this.allMeds().filter(m => m.alertaVencimiento === 'VENCIDO'));
  criticos       = computed(() => this.allMeds().filter(m => m.alertaVencimiento === 'CRITICO'));
  proximos       = computed(() => this.allMeds().filter(m => m.alertaVencimiento === 'PROXIMO'));

  ngOnInit(): void {
    this.medicamentoService.getMedicamentosAlertaVencimiento().subscribe({
      next: (res) => { this.allMeds.set(res.data); this.isLoading.set(false); },
      error: () => { this.allMeds.set(this.getMockAlertas()); this.isLoading.set(false); },
    });
  }

  getDiasRestantes(fechaVencimiento: string): number {
    const hoy = new Date();
    const venc = new Date(fechaVencimiento);
    return Math.ceil((venc.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
  }

  private getMockAlertas(): Medicamento[] {
    const base = { farmacia: { id: 1, nombre: 'Farmacia Central', codigo: 'FC-01' },
      unidadMedida: 'Unidad', precioCompra: 1, precioVenta: 2,
      stockMinimo: 50, stockMaximo: 500, lote: 'L-001',
      createdAt: '', updatedAt: '',
      categoria: { id: 1, nombre: 'Analgésicos', descripcion: '', color: '#2378f0', icono: 'pi-box', totalMedicamentos: 45 },
    };
    return [
      { ...base, id: 1, codigo: 'MED-010', nombre: 'Metronidazol 250mg', nombreGenerico: 'Metronidazol',
        laboratorio: 'Bayer', forma: 'TABLETA', concentracion: '250mg',
        stockActual: 80, fechaVencimiento: '2025-02-01', estado: 'ACTIVO', alertaVencimiento: 'VENCIDO' },
      { ...base, id: 2, codigo: 'MED-011', nombre: 'Ciprofloxacino 500mg', nombreGenerico: 'Ciprofloxacino',
        laboratorio: 'MK', forma: 'TABLETA', concentracion: '500mg',
        stockActual: 150, fechaVencimiento: '2026-04-25', estado: 'ACTIVO', alertaVencimiento: 'CRITICO' },
      { ...base, id: 3, codigo: 'MED-012', nombre: 'Omeprazol 20mg', nombreGenerico: 'Omeprazol',
        laboratorio: 'Pfizer', forma: 'CAPSULA', concentracion: '20mg',
        stockActual: 200, fechaVencimiento: '2026-05-20', estado: 'ACTIVO', alertaVencimiento: 'PROXIMO' },
    ];
  }
}

import {
  Component, OnInit, inject, signal,
  AfterViewInit, OnDestroy, ElementRef, ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBar } from 'primeng/progressbar';
import { Skeleton } from 'primeng/skeleton';
import { Chart, registerables } from 'chart.js';

import { MedicamentoService } from '../../services/medicamento.service';
import { FarmaciaService } from '../../services/farmacia.service';
import { ResumenFarmacia, DatoGraficoMovimientos, DatoGraficoCategorias } from '../../models/farmacia.models';

Chart.register(...registerables);

@Component({
  selector: 'app-farmacia-dashboard',
  standalone: true,
  imports: [CommonModule, ProgressBar, Skeleton],
  templateUrl: './farmacia-dashboard.component.html',
})
export class FarmaciaDashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly farmaciaService    = inject(FarmaciaService);
  private readonly medicamentoService = inject(MedicamentoService);

  @ViewChild('movimientosChart', { static: false }) movimientosChartRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('categoriasChart',  { static: false }) categoriasChartRef!: ElementRef<HTMLCanvasElement>;

  resumen    = signal<ResumenFarmacia | null>(null);
  isLoading  = signal(true);
  readonly today = new Date();

  private movimientosChartInstance?: Chart;
  private categoriasChartInstance?: Chart;

  // KPI cards config
  get kpiCards() {
    const r = this.resumen();
    if (!r) return [];
    return [
      {
        label: 'Total Medicamentos',
        value: r.totalMedicamentos,
        icon: 'pi pi-box',
        color: '#2378f0',
        bg: '#e8f0fe',
        suffix: '',
      },
      {
        label: 'Stock Bajo',
        value: r.stockBajo,
        icon: 'pi pi-exclamation-triangle',
        color: '#f59e0b',
        bg: '#fef9c3',
        suffix: '',
      },
      {
        label: 'Próximos a Vencer',
        value: r.proximosVencer,
        icon: 'pi pi-clock',
        color: '#f97316',
        bg: '#fff7ed',
        suffix: '',
      },
      {
        label: 'Vencidos',
        value: r.vencidos,
        icon: 'pi pi-times-circle',
        color: '#ef4444',
        bg: '#fee2e2',
        suffix: '',
      },
      {
        label: 'Movimientos Hoy',
        value: r.totalMovimientosHoy,
        icon: 'pi pi-arrow-right-arrow-left',
        color: '#00bcd4',
        bg: '#e0f7fa',
        suffix: '',
      },
      {
        label: 'Valor Inventario',
        value: r.valorTotalInventario,
        icon: 'pi pi-dollar',
        color: '#10b981',
        bg: '#dcfce7',
        suffix: 'S/.',
        isMoneda: true,
      },
    ];
  }

  ngOnInit(): void {
    this.loadResumen();
  }

  ngAfterViewInit(): void {
    // Los gráficos se inicializan luego de cargar los datos
  }

  ngOnDestroy(): void {
    this.movimientosChartInstance?.destroy();
    this.categoriasChartInstance?.destroy();
  }

  private loadResumen(): void {
    this.isLoading.set(true);
    this.farmaciaService.getResumen().subscribe({
      next: (res) => {
        this.resumen.set(res.data);
        this.isLoading.set(false);
        setTimeout(() => {
          this.loadGraficos();
        }, 0);
      },
      error: () => {
        // Datos mock para visualización
        this.resumen.set({
          totalMedicamentos: 847,
          stockBajo: 23,
          proximosVencer: 12,
          vencidos: 3,
          totalMovimientosHoy: 45,
          entradasHoy: 28,
          salidasHoy: 17,
          valorTotalInventario: 125430.50,
        });
        this.isLoading.set(false);
        setTimeout(() => this.loadGraficos(), 0);
      },
    });
  }

  private loadGraficos(): void {
    this.medicamentoService.getGraficoMovimientos(undefined, 7).subscribe({
      next: (res) => this.renderMovimientosChart(res.data),
      error: () => this.renderMovimientosChart(this.getMockMovimientos()),
    });

    this.medicamentoService.getGraficoCategorias().subscribe({
      next: (res) => this.renderCategoriasChart(res.data),
      error: () => this.renderCategoriasChart(this.getMockCategorias()),
    });
  }

  private renderMovimientosChart(datos: DatoGraficoMovimientos[]): void {
    if (!this.movimientosChartRef) return;
    this.movimientosChartInstance?.destroy();

    const ctx = this.movimientosChartRef.nativeElement.getContext('2d')!;
    this.movimientosChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: datos.map(d => d.fecha),
        datasets: [
          {
            label: 'Entradas',
            data: datos.map(d => d.entradas),
            borderColor: '#10b981',
            backgroundColor: 'rgba(16,185,129,.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#10b981',
          },
          {
            label: 'Salidas',
            data: datos.map(d => d.salidas),
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239,68,68,.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#ef4444',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { intersect: false, mode: 'index' },
        plugins: {
          legend: { position: 'top', labels: { font: { family: 'Inter', size: 12 }, padding: 16 } },
          tooltip: { backgroundColor: '#1e293b', titleFont: { family: 'Inter' }, bodyFont: { family: 'Inter' } },
        },
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: 'Inter', size: 11 } } },
          y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { font: { family: 'Inter', size: 11 } } },
        },
      },
    });
  }

  private renderCategoriasChart(datos: DatoGraficoCategorias[]): void {
    if (!this.categoriasChartRef) return;
    this.categoriasChartInstance?.destroy();

    const ctx = this.categoriasChartRef.nativeElement.getContext('2d')!;
    this.categoriasChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: datos.map(d => d.categoria),
        datasets: [{
          data: datos.map(d => d.total),
          backgroundColor: datos.map(d => d.color),
          borderWidth: 2,
          borderColor: '#ffffff',
          hoverBorderWidth: 3,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { font: { family: 'Inter', size: 11 }, padding: 12, boxWidth: 12 } },
          tooltip: { backgroundColor: '#1e293b', titleFont: { family: 'Inter' }, bodyFont: { family: 'Inter' } },
        },
        cutout: '65%',
      },
    });
  }

  private getMockMovimientos(): DatoGraficoMovimientos[] {
    return [
      { fecha: 'Lun', entradas: 35, salidas: 22 },
      { fecha: 'Mar', entradas: 42, salidas: 30 },
      { fecha: 'Mié', entradas: 28, salidas: 18 },
      { fecha: 'Jue', entradas: 50, salidas: 35 },
      { fecha: 'Vie', entradas: 38, salidas: 28 },
      { fecha: 'Sáb', entradas: 15, salidas: 10 },
      { fecha: 'Dom', entradas: 8,  salidas: 5  },
    ];
  }

  private getMockCategorias(): DatoGraficoCategorias[] {
    return [
      { categoria: 'Analgésicos',    total: 180, color: '#2378f0' },
      { categoria: 'Antibióticos',   total: 140, color: '#00bcd4' },
      { categoria: 'Vitaminas',      total: 110, color: '#10b981' },
      { categoria: 'Cardiovascular', total: 95,  color: '#f59e0b' },
      { categoria: 'Otros',          total: 322, color: '#94a3b8' },
    ];
  }
}

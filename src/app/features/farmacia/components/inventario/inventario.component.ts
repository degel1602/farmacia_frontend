import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, startWith } from 'rxjs';

import { TableModule } from 'primeng/table';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { Select } from 'primeng/select';
import { Tooltip } from 'primeng/tooltip';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { Dialog } from 'primeng/dialog';

import { MedicamentoService } from '../../services/medicamento.service';
import {
  Medicamento,
  AlertaVencimiento,
  EstadoMedicamento,
  FiltroInventario,
} from '../../models/farmacia.models';

export interface LoteProducto {
  lote: string;
  fechaVencimiento: string;
  tipo: string;
  cantidad: number;
  precio: number;
  total: number;
  registroSanitario: string;
  modificado: boolean;
}

export interface ProductoInventario {
  codigo: string;
  nombreProducto: string;
  cantidad: number;
  precio: number;
  total: number;
  lotes: LoteProducto[];
}

type AlmacenKey = 'FARMACIA_EMERGENCIA' | 'FARMACIA_PRINCIPAL' | 'FARMACIA_PEDIATRIA';

const MOCK_PRODUCTOS: Record<AlmacenKey, ProductoInventario[]> = {
  FARMACIA_EMERGENCIA: [
    { codigo: '00662', nombreProducto: 'AMINOFILINA 10 mL 25 mg/mL INYECTABLE',                          cantidad: 0, precio: 3.45, total: 0,
      lotes: [{ lote: '2040642', fechaVencimiento: '30/04/2024', tipo: 'Ventas', cantidad: 0, precio: 3.45, total: 0.00, registroSanitario: 'EN-05108', modificado: false }] },
    { codigo: '00663', nombreProducto: 'AMIODARONA CLORHIDRATO 3 mL 50 mg/mL INYECTABLE',               cantidad: 0, precio: 8.74, total: 0,
      lotes: [{ lote: '3021540', fechaVencimiento: '15/06/2025', tipo: 'Ventas', cantidad: 0, precio: 8.74, total: 0.00, registroSanitario: 'EN-03421', modificado: false }] },
    { codigo: '00910', nombreProducto: 'ATROPINA SULFATO 1 mL 1 mg/mL INYECTABLE',                      cantidad: 0, precio: 0.69, total: 0,
      lotes: [{ lote: '1987234', fechaVencimiento: '28/02/2026', tipo: 'Ventas', cantidad: 0, precio: 0.69, total: 0.00, registroSanitario: 'EN-00812', modificado: false }] },
    { codigo: '01522', nombreProducto: 'CAPTOPRIL 25 mg TABLETA',                                        cantidad: 0, precio: 0.03, total: 0,
      lotes: [{ lote: '5043100', fechaVencimiento: '31/12/2025', tipo: 'Ventas', cantidad: 0, precio: 0.03, total: 0.00, registroSanitario: 'EN-01205', modificado: false }] },
    { codigo: '02128', nombreProducto: 'CLORFENAMINA MALEATO 1 mL 10 mg/mL INYECTABLE',                 cantidad: 0, precio: 0.17, total: 0,
      lotes: [{ lote: '6012345', fechaVencimiento: '30/09/2025', tipo: 'Ventas', cantidad: 0, precio: 0.17, total: 0.00, registroSanitario: 'EN-02198', modificado: false }] },
    { codigo: '02381', nombreProducto: 'CODEINA FOSFATO 2 mL 30 mg/mL INYECTABLE',                      cantidad: 0, precio: 3.53, total: 0,
      lotes: [{ lote: '7098762', fechaVencimiento: '15/03/2026', tipo: 'Ventas', cantidad: 0, precio: 3.53, total: 0.00, registroSanitario: 'EN-02381', modificado: false }] },
    { codigo: '02642', nombreProducto: 'DEXAMETASONA FOSFATO (COMO SAL SODICA) 2 mL 4 mg/2 mL INYECTABLE', cantidad: 0, precio: 0.14, total: 0,
      lotes: [{ lote: '8001234', fechaVencimiento: '01/08/2026', tipo: 'Ventas', cantidad: 0, precio: 0.14, total: 0.00, registroSanitario: 'EN-02642', modificado: false }] },
    { codigo: '02752', nombreProducto: 'DIAZEPAM 2 mL 5 mg/mL INYECTABLE',                              cantidad: 0, precio: 0.06, total: 0,
      lotes: [{ lote: '9012300', fechaVencimiento: '28/11/2025', tipo: 'Ventas', cantidad: 0, precio: 0.06, total: 0.00, registroSanitario: 'EN-02752', modificado: false }] },
    { codigo: '02862', nombreProducto: 'DIGOXINA 250 ug (0.25 mg) TABLETA',                              cantidad: 0, precio: 0.34, total: 0,
      lotes: [{ lote: '1023456', fechaVencimiento: '20/07/2026', tipo: 'Ventas', cantidad: 0, precio: 0.34, total: 0.00, registroSanitario: 'EN-02862', modificado: false }] },
    { codigo: '03041', nombreProducto: 'DOBUTAMINA CLORHIDRATO 20 mL 250 mg INYECTABLE',                 cantidad: 0, precio: 5.20, total: 0,
      lotes: [{ lote: '2034567', fechaVencimiento: '10/05/2026', tipo: 'Ventas', cantidad: 0, precio: 5.20, total: 0.00, registroSanitario: 'EN-03041', modificado: false }] },
    { codigo: '03105', nombreProducto: 'DOPAMINA CLORHIDRATO 5 mL 200 mg/5 mL INYECTABLE',               cantidad: 0, precio: 4.80, total: 0,
      lotes: [{ lote: '3045678', fechaVencimiento: '30/06/2026', tipo: 'Ventas', cantidad: 0, precio: 4.80, total: 0.00, registroSanitario: 'EN-03105', modificado: false }] },
    { codigo: '04120', nombreProducto: 'EPINEFRINA (ADRENALINA) 1 mL 1 mg/mL INYECTABLE',                cantidad: 0, precio: 1.25, total: 0,
      lotes: [{ lote: '4056789', fechaVencimiento: '15/09/2026', tipo: 'Ventas', cantidad: 0, precio: 1.25, total: 0.00, registroSanitario: 'EN-04120', modificado: false }] },
  ],
  FARMACIA_PRINCIPAL: [
    { codigo: '10001', nombreProducto: 'PARACETAMOL 500 mg TABLETA',                     cantidad: 0, precio: 0.05, total: 0,
      lotes: [{ lote: '5067890', fechaVencimiento: '31/12/2026', tipo: 'Ventas', cantidad: 0, precio: 0.05, total: 0.00, registroSanitario: 'EP-10001', modificado: false }] },
    { codigo: '10002', nombreProducto: 'AMOXICILINA 500 mg CAPSULA',                     cantidad: 0, precio: 0.28, total: 0,
      lotes: [{ lote: '6078901', fechaVencimiento: '30/06/2026', tipo: 'Ventas', cantidad: 0, precio: 0.28, total: 0.00, registroSanitario: 'EP-10002', modificado: false }] },
    { codigo: '10003', nombreProducto: 'IBUPROFENO 400 mg TABLETA',                      cantidad: 0, precio: 0.12, total: 0,
      lotes: [{ lote: '7089012', fechaVencimiento: '28/02/2027', tipo: 'Ventas', cantidad: 0, precio: 0.12, total: 0.00, registroSanitario: 'EP-10003', modificado: false }] },
    { codigo: '10004', nombreProducto: 'METFORMINA CLORHIDRATO 850 mg TABLETA',          cantidad: 0, precio: 0.08, total: 0,
      lotes: [{ lote: '8090123', fechaVencimiento: '31/03/2027', tipo: 'Ventas', cantidad: 0, precio: 0.08, total: 0.00, registroSanitario: 'EP-10004', modificado: false }] },
    { codigo: '10005', nombreProducto: 'ENALAPRIL MALEATO 10 mg TABLETA',                cantidad: 0, precio: 0.06, total: 0,
      lotes: [{ lote: '9001234', fechaVencimiento: '30/09/2026', tipo: 'Ventas', cantidad: 0, precio: 0.06, total: 0.00, registroSanitario: 'EP-10005', modificado: false }] },
    { codigo: '10006', nombreProducto: 'LOSARTAN POTASICO 50 mg TABLETA',                cantidad: 0, precio: 0.09, total: 0,
      lotes: [{ lote: '1012345', fechaVencimiento: '15/11/2026', tipo: 'Ventas', cantidad: 0, precio: 0.09, total: 0.00, registroSanitario: 'EP-10006', modificado: false }] },
    { codigo: '10007', nombreProducto: 'OMEPRAZOL 20 mg CAPSULA',                        cantidad: 0, precio: 0.10, total: 0,
      lotes: [{ lote: '2023456', fechaVencimiento: '28/01/2027', tipo: 'Ventas', cantidad: 0, precio: 0.10, total: 0.00, registroSanitario: 'EP-10007', modificado: false }] },
    { codigo: '10008', nombreProducto: 'CIPROFLOXACINO 500 mg TABLETA',                  cantidad: 0, precio: 0.35, total: 0,
      lotes: [{ lote: '3034567', fechaVencimiento: '30/04/2027', tipo: 'Ventas', cantidad: 0, precio: 0.35, total: 0.00, registroSanitario: 'EP-10008', modificado: false }] },
    { codigo: '10009', nombreProducto: 'AMLODIPINO 5 mg TABLETA',                        cantidad: 0, precio: 0.07, total: 0,
      lotes: [{ lote: '4045678', fechaVencimiento: '31/07/2027', tipo: 'Ventas', cantidad: 0, precio: 0.07, total: 0.00, registroSanitario: 'EP-10009', modificado: false }] },
    { codigo: '10010', nombreProducto: 'AZITROMICINA 500 mg TABLETA',                    cantidad: 0, precio: 0.95, total: 0,
      lotes: [{ lote: '5056789', fechaVencimiento: '31/05/2027', tipo: 'Ventas', cantidad: 0, precio: 0.95, total: 0.00, registroSanitario: 'EP-10010', modificado: false }] },
  ],
  FARMACIA_PEDIATRIA: [
    { codigo: '20001', nombreProducto: 'PARACETAMOL 120 mg/5 mL JARABE',                 cantidad: 0, precio: 2.10, total: 0,
      lotes: [{ lote: '6067890', fechaVencimiento: '30/10/2026', tipo: 'Ventas', cantidad: 0, precio: 2.10, total: 0.00, registroSanitario: 'EJ-20001', modificado: false }] },
    { codigo: '20002', nombreProducto: 'AMOXICILINA 250 mg/5 mL SUSPENSION ORAL',        cantidad: 0, precio: 3.50, total: 0,
      lotes: [{ lote: '7078901', fechaVencimiento: '15/08/2026', tipo: 'Ventas', cantidad: 0, precio: 3.50, total: 0.00, registroSanitario: 'EJ-20002', modificado: false }] },
    { codigo: '20003', nombreProducto: 'IBUPROFENO 100 mg/5 mL SUSPENSION ORAL',         cantidad: 0, precio: 2.80, total: 0,
      lotes: [{ lote: '8089012', fechaVencimiento: '28/11/2026', tipo: 'Ventas', cantidad: 0, precio: 2.80, total: 0.00, registroSanitario: 'EJ-20003', modificado: false }] },
    { codigo: '20004', nombreProducto: 'SALBUTAMOL 100 mcg/dosis INHALADOR',             cantidad: 0, precio: 8.75, total: 0,
      lotes: [{ lote: '9090123', fechaVencimiento: '31/03/2027', tipo: 'Ventas', cantidad: 0, precio: 8.75, total: 0.00, registroSanitario: 'EJ-20004', modificado: false }] },
    { codigo: '20005', nombreProducto: 'CETIRIZINA CLORHIDRATO 5 mg/5 mL JARABE',        cantidad: 0, precio: 3.20, total: 0,
      lotes: [{ lote: '1001234', fechaVencimiento: '30/06/2027', tipo: 'Ventas', cantidad: 0, precio: 3.20, total: 0.00, registroSanitario: 'EJ-20005', modificado: false }] },
    { codigo: '20006', nombreProducto: 'ERITROMICINA 200 mg/5 mL SUSPENSION ORAL',       cantidad: 0, precio: 4.60, total: 0,
      lotes: [{ lote: '2012345', fechaVencimiento: '28/09/2026', tipo: 'Ventas', cantidad: 0, precio: 4.60, total: 0.00, registroSanitario: 'EJ-20006', modificado: false }] },
    { codigo: '20007', nombreProducto: 'VITAMINA A 100000 UI CAPSULA BLANDA',            cantidad: 0, precio: 0.45, total: 0,
      lotes: [{ lote: '3023456', fechaVencimiento: '15/12/2026', tipo: 'Ventas', cantidad: 0, precio: 0.45, total: 0.00, registroSanitario: 'EJ-20007', modificado: false }] },
    { codigo: '20008', nombreProducto: 'ZINC SULFATO 20 mg/5 mL SOLUCION ORAL',          cantidad: 0, precio: 1.90, total: 0,
      lotes: [{ lote: '4034567', fechaVencimiento: '30/04/2027', tipo: 'Ventas', cantidad: 0, precio: 1.90, total: 0.00, registroSanitario: 'EJ-20008', modificado: false }] },
    { codigo: '20009', nombreProducto: 'SUERO DE REHIDRATACION ORAL SOBRES',              cantidad: 0, precio: 0.30, total: 0,
      lotes: [{ lote: '5045678', fechaVencimiento: '31/01/2027', tipo: 'Ventas', cantidad: 0, precio: 0.30, total: 0.00, registroSanitario: 'EJ-20009', modificado: false }] },
    { codigo: '20010', nombreProducto: 'DICLOFENACO SODICO 25 mg/3 mL INYECTABLE',       cantidad: 0, precio: 0.55, total: 0,
      lotes: [{ lote: '6056789', fechaVencimiento: '28/02/2027', tipo: 'Ventas', cantidad: 0, precio: 0.55, total: 0.00, registroSanitario: 'EJ-20010', modificado: false }] },
  ],
};

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    TableModule, InputText, Button, Tag, Select, Tooltip,
    IconField, InputIcon, Dialog,
  ],
  templateUrl: './inventario.component.html',
})
export class InventarioComponent implements OnInit {
  private readonly medicamentoService = inject(MedicamentoService);

  // ── Lista principal ───────────────────────────────────────────
  medicamentos = signal<Medicamento[]>([]);
  totalRecords = signal(0);
  isLoading    = signal(true);
  rows         = 20;
  first        = 0;
  searchText     = '';
  filtroAlerta: AlertaVencimiento | null = null;
  filtroEstado: EstadoMedicamento | null = null;
  private searchSubject$ = new Subject<string>();

  opcionesAlerta = [
    { label: 'Todos',            value: null },
    { label: 'OK',               value: 'OK' },
    { label: 'Próximo a vencer', value: 'PROXIMO' },
    { label: 'Crítico',          value: 'CRITICO' },
    { label: 'Vencido',          value: 'VENCIDO' },
  ];
  opcionesEstado = [
    { label: 'Todos',    value: null },
    { label: 'Activo',   value: 'ACTIVO' },
    { label: 'Inactivo', value: 'INACTIVO' },
    { label: 'Agotado',  value: 'AGOTADO' },
    { label: 'Vencido',  value: 'VENCIDO' },
  ];

  // ── Modal Agregar Inventario ──────────────────────────────────
  showModal = signal(false);

  hoy = new Date().toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });

  cabecera = {
    nroInventario:  '',
    fRegistro:      this.hoy,
    estado:         '',
    almacen:        null as string | null,
    fModificacion:  '',
    tipoInventario: null as string | null,
    fCierre:        '',
  };

  almacenOptions = [
    { label: 'Farmacia Emergencia', value: 'FARMACIA_EMERGENCIA' },
    { label: 'Farmacia Principal',  value: 'FARMACIA_PRINCIPAL'  },
    { label: 'Farmacia Pediatria',  value: 'FARMACIA_PEDIATRIA'  },
  ];
  tipoInventarioOptions = [
    { label: 'Automático', value: 'AUTOMATICO' },
    { label: 'Inicial',    value: 'INICIAL'    },
    { label: 'Periódico',  value: 'PERIODICO'  },
    { label: 'Cierre',     value: 'CIERRE'     },
  ];
  tipoSalidaOptions = [
    { label: 'Ventas',      value: 'VENTAS'     },
    { label: 'Consumo',     value: 'CONSUMO'    },
    { label: 'Devolución',  value: 'DEVOLUCION' },
  ];

  // Tabla de productos del almacén seleccionado
  productosAlmacen  = signal<ProductoInventario[]>([]);
  cargandoProductos = signal(false);

  // Producto y lote seleccionados
  productoSel = signal<ProductoInventario | null>(null);
  loteSel     = signal<LoteProducto | null>(null);

  // Formulario de detalle (panel derecho)
  detalle = {
    regSanitario: '',
    lote:         '',
    fVencimiento: '',
    tipoSalida:   null as string | null,
    cantidad:     null as number | null,
    precioVenta:  null as number | null,
  };

  get totalInventario(): number {
    return this.productosAlmacen().reduce((s, p) => s + p.total, 0);
  }

  // ── Lifecycle ─────────────────────────────────────────────────
  ngOnInit(): void {
    this.searchSubject$
      .pipe(debounceTime(350), distinctUntilChanged(), startWith(''))
      .subscribe(() => this.loadPage(0));
  }

  // ── Modal ─────────────────────────────────────────────────────
  abrirAgregarInventario(): void {
    this.cabecera = { nroInventario: '', fRegistro: this.hoy, estado: '',
                      almacen: null, fModificacion: '', tipoInventario: 'AUTOMATICO', fCierre: '' };
    this.productosAlmacen.set([]);
    this.productoSel.set(null);
    this.loteSel.set(null);
    this.limpiarDetalle();
    this.showModal.set(true);
  }

  onAlmacenChange(): void {
    this.productoSel.set(null);
    this.loteSel.set(null);
    this.limpiarDetalle();
    if (!this.cabecera.almacen) { this.productosAlmacen.set([]); return; }
    this.cargandoProductos.set(true);
    setTimeout(() => {
      const data = MOCK_PRODUCTOS[this.cabecera.almacen as AlmacenKey] ?? [];
      this.productosAlmacen.set(data.map(p => ({ ...p })));
      this.cargandoProductos.set(false);
    }, 400);
  }

  seleccionarProducto(prod: ProductoInventario): void {
    this.productoSel.set(prod);
    this.loteSel.set(null);
    this.limpiarDetalle();
    if (prod.lotes.length > 0) {
      this.seleccionarLote(prod.lotes[0]);
    }
  }

  seleccionarLote(lote: LoteProducto): void {
    this.loteSel.set(lote);
    this.detalle = {
      regSanitario: lote.registroSanitario,
      lote:         lote.lote,
      fVencimiento: lote.fechaVencimiento,
      tipoSalida:   lote.tipo.toUpperCase() === 'VENTAS' ? 'VENTAS' : lote.tipo.toUpperCase(),
      cantidad:     lote.cantidad || null,
      precioVenta:  lote.precio,
    };
  }

  modificarLote(): void {
    const lote = this.loteSel();
    const prod = this.productoSel();
    if (!lote || !prod) return;
    const cant  = this.detalle.cantidad ?? 0;
    const price = this.detalle.precioVenta ?? 0;
    const updated: LoteProducto = {
      ...lote,
      cantidad:          cant,
      precio:            price,
      total:             cant * price,
      registroSanitario: this.detalle.regSanitario,
      fechaVencimiento:  this.detalle.fVencimiento,
      tipo:              this.detalle.tipoSalida ?? lote.tipo,
      modificado:        true,
    };
    this.productosAlmacen.update(list =>
      list.map(p => p === prod
        ? { ...p,
            cantidad: cant,
            total: cant * price,
            lotes: p.lotes.map(l => l === lote ? updated : l) }
        : p)
    );
    this.productoSel.set({ ...prod, cantidad: cant, total: cant * price,
                            lotes: prod.lotes.map(l => l === lote ? updated : l) });
    this.loteSel.set(updated);
  }

  quitarLote(): void {
    const lote = this.loteSel();
    const prod = this.productoSel();
    if (!lote || !prod) return;
    const nuevosLotes = prod.lotes.filter(l => l !== lote);
    this.productosAlmacen.update(list =>
      list.map(p => p === prod ? { ...p, lotes: nuevosLotes } : p)
    );
    this.productoSel.set({ ...prod, lotes: nuevosLotes });
    this.loteSel.set(null);
    this.limpiarDetalle();
  }

  agregarLote(): void {
    const prod = this.productoSel();
    if (!prod) return;
    const cant  = this.detalle.cantidad ?? 0;
    const price = this.detalle.precioVenta ?? 0;
    const nuevo: LoteProducto = {
      lote:              this.detalle.lote,
      fechaVencimiento:  this.detalle.fVencimiento,
      tipo:              this.detalle.tipoSalida ?? 'VENTAS',
      cantidad:          cant,
      precio:            price,
      total:             cant * price,
      registroSanitario: this.detalle.regSanitario,
      modificado:        false,
    };
    const nuevosLotes = [...prod.lotes, nuevo];
    this.productosAlmacen.update(list =>
      list.map(p => p === prod ? { ...p, lotes: nuevosLotes } : p)
    );
    this.productoSel.set({ ...prod, lotes: nuevosLotes });
    this.loteSel.set(nuevo);
  }

  guardarInventario(): void {
    this.showModal.set(false);
  }

  private limpiarDetalle(): void {
    this.detalle = { regSanitario: '', lote: '', fVencimiento: '',
                     tipoSalida: null, cantidad: null, precioVenta: null };
  }

  // ── Tabla principal ───────────────────────────────────────────
  loadPage(page: number): void {
    this.isLoading.set(true);
    const filtros: FiltroInventario = {
      search:            this.searchText || undefined,
      alertaVencimiento: this.filtroAlerta ?? undefined,
      estado:            this.filtroEstado ?? undefined,
    };
    this.medicamentoService.getInventario(filtros, page, this.rows).subscribe({
      next: (res) => { this.medicamentos.set(res.data.content); this.totalRecords.set(res.data.totalElements); this.isLoading.set(false); },
      error: () => { this.medicamentos.set(this.getMockData()); this.totalRecords.set(this.getMockData().length); this.isLoading.set(false); },
    });
  }

  onPageChange(e: { first: number; rows: number }): void { this.first = e.first; this.rows = e.rows; this.loadPage(e.first / e.rows); }
  onSearchChange(v: string): void { this.searchText = v; this.searchSubject$.next(v); }
  onFilterChange(): void { this.loadPage(0); }
  onLimpiarFiltros(): void { this.searchText = ''; this.filtroAlerta = null; this.filtroEstado = null; this.loadPage(0); }

  getSeverityAlerta(a: AlertaVencimiento): 'success' | 'warn' | 'danger' | 'info' {
    return ({ OK: 'success', PROXIMO: 'warn', CRITICO: 'danger', VENCIDO: 'danger' } as const)[a];
  }
  getLabelAlerta(a: AlertaVencimiento): string {
    return ({ OK: 'Vigente', PROXIMO: 'Próx. Vencer', CRITICO: 'Crítico', VENCIDO: 'Vencido' })[a];
  }
  getRowClass(med: Medicamento): string {
    if (med.alertaVencimiento === 'VENCIDO' || med.alertaVencimiento === 'CRITICO') return 'stock-row-critical';
    if (med.alertaVencimiento === 'PROXIMO' || med.stockActual <= med.stockMinimo) return 'stock-row-warning';
    return 'stock-row-ok';
  }
  getStockPct(med: Medicamento): number { return med.stockMaximo === 0 ? 0 : Math.min(100, (med.stockActual / med.stockMaximo) * 100); }
  getStockColor(med: Medicamento): string { const p = this.getStockPct(med); return p < 20 ? '#ef4444' : p < 40 ? '#f59e0b' : '#10b981'; }

  private getMockData(): Medicamento[] {
    return [
      { id: 1, codigo: 'MED-001', nombre: 'Paracetamol 500mg', nombreGenerico: 'Paracetamol', laboratorio: 'Farmindustria',
        forma: 'TABLETA', concentracion: '500mg',
        categoria: { id: 1, nombre: 'Analgésicos', descripcion: '', color: '#2378f0', icono: 'pi-box', totalMedicamentos: 45 },
        farmacia: { id: 1, nombre: 'Farmacia Central', codigo: 'FC-01' },
        stockActual: 500, stockMinimo: 100, stockMaximo: 1000, unidadMedida: 'Unidad',
        precioCompra: 0.15, precioVenta: 0.30, fechaVencimiento: '2026-12-31', lote: 'L-2024-001',
        estado: 'ACTIVO', alertaVencimiento: 'OK', createdAt: '', updatedAt: '' },
      { id: 2, codigo: 'MED-002', nombre: 'Amoxicilina 500mg', nombreGenerico: 'Amoxicilina', laboratorio: 'GlaxoSmithKline',
        forma: 'CAPSULA', concentracion: '500mg',
        categoria: { id: 2, nombre: 'Antibióticos', descripcion: '', color: '#00bcd4', icono: 'pi-box', totalMedicamentos: 30 },
        farmacia: { id: 1, nombre: 'Farmacia Central', codigo: 'FC-01' },
        stockActual: 45, stockMinimo: 50, stockMaximo: 300, unidadMedida: 'Unidad',
        precioCompra: 0.80, precioVenta: 1.50, fechaVencimiento: '2025-04-30', lote: 'L-2023-087',
        estado: 'ACTIVO', alertaVencimiento: 'PROXIMO', createdAt: '', updatedAt: '' },
      { id: 3, codigo: 'MED-003', nombre: 'Ibuprofeno 400mg', nombreGenerico: 'Ibuprofeno', laboratorio: 'Pfizer',
        forma: 'TABLETA', concentracion: '400mg',
        categoria: { id: 1, nombre: 'Analgésicos', descripcion: '', color: '#2378f0', icono: 'pi-box', totalMedicamentos: 45 },
        farmacia: { id: 1, nombre: 'Farmacia Central', codigo: 'FC-01' },
        stockActual: 200, stockMinimo: 50, stockMaximo: 500, unidadMedida: 'Unidad',
        precioCompra: 0.20, precioVenta: 0.45, fechaVencimiento: '2025-03-15', lote: 'L-2023-045',
        estado: 'ACTIVO', alertaVencimiento: 'CRITICO', createdAt: '', updatedAt: '' },
    ];
  }
}

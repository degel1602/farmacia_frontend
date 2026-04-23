// ══════════════════════════════════════════════════════════════
//  Modelos del Módulo Farmacia — Galenos Pro
// ══════════════════════════════════════════════════════════════

export interface EquipoAsignado {
  nombrePc: string;
  estado: boolean;
}

export interface Farmacia {
  id: number;
  nombre: string;
  codigo: string;
  habilitado: boolean;
  tipo: string;
  codigoDigemid: string;
  direccion: string;
  responsable: string;
  telefono: string;
  equiposAsignados: EquipoAsignado[];
  estado: EstadoFarmacia;
  createdAt: string;
  updatedAt: string;
}

export type EstadoFarmacia = 'ACTIVA' | 'INACTIVA' | 'MANTENIMIENTO';

// ── Categoría ───────────────────────────────────────────────
export interface CategoriaMedicamento {
  id: number;
  nombre: string;
  descripcion: string;
  color: string;
  icono: string;
  totalMedicamentos: number;
}

// ── Medicamento ─────────────────────────────────────────────
export interface Medicamento {
  id: number;
  codigo: string;
  nombre: string;
  nombreGenerico: string;
  laboratorio: string;
  forma: FormaMedicamento;
  concentracion: string;
  categoria: CategoriaMedicamento;
  farmacia: Pick<Farmacia, 'id' | 'nombre' | 'codigo'>;
  stockActual: number;
  stockMinimo: number;
  stockMaximo: number;
  unidadMedida: string;
  precioCompra: number;
  precioVenta: number;
  fechaVencimiento: string;       // ISO date YYYY-MM-DD
  lote: string;
  estado: EstadoMedicamento;
  alertaVencimiento: AlertaVencimiento;
  createdAt: string;
  updatedAt: string;
}

export type FormaMedicamento =
  | 'TABLETA'
  | 'CAPSULA'
  | 'JARABE'
  | 'INYECTABLE'
  | 'CREMA'
  | 'SUPOSITORIO'
  | 'GOTAS'
  | 'INHALADOR'
  | 'PARCHE'
  | 'OTRO';

export type EstadoMedicamento = 'ACTIVO' | 'INACTIVO' | 'AGOTADO' | 'VENCIDO';

export type AlertaVencimiento = 'OK' | 'PROXIMO' | 'CRITICO' | 'VENCIDO';

// ── Movimiento ──────────────────────────────────────────────
export interface MovimientoInventario {
  id: number;
  medicamento: Pick<Medicamento, 'id' | 'codigo' | 'nombre' | 'forma' | 'concentracion'>;
  farmacia: Pick<Farmacia, 'id' | 'nombre'>;
  tipo: TipoMovimiento;
  cantidad: number;
  cantidadAnterior: number;
  cantidadResultante: number;
  unidadMedida: string;
  motivoMovimiento: string;
  observaciones?: string;
  numeroDocumento?: string;       // Factura, guía, etc.
  proveedor?: string;
  usuario: string;
  fechaMovimiento: string;        // ISO datetime
}

export type TipoMovimiento = 'ENTRADA' | 'SALIDA' | 'AJUSTE' | 'DEVOLUCION' | 'TRASLADO';

// ── DTOs para formularios ────────────────────────────────────
export interface CreateFarmaciaDto {
  nombre: string;
  codigo: string;
  habilitado: boolean;
  tipo: string;
  codigoDigemid: string;
  direccion: string;
  responsable: string;
  telefono: string;
  equiposAsignados: EquipoAsignado[];
}

export interface CreateMovimientoDto {
  medicamentoId: number;
  farmaciaId: number;
  tipo: TipoMovimiento;
  cantidad: number;
  motivoMovimiento: string;
  observaciones?: string;
  numeroDocumento?: string;
  proveedor?: string;
}

export interface FiltroInventario {
  search?: string;
  categoriaId?: number;
  farmaciaId?: number;
  alertaVencimiento?: AlertaVencimiento;
  estado?: EstadoMedicamento;
  stockBajo?: boolean;
}

// ── Resumen / Dashboard ──────────────────────────────────────
export interface ResumenFarmacia {
  totalMedicamentos: number;
  stockBajo: number;
  proximosVencer: number;
  vencidos: number;
  totalMovimientosHoy: number;
  entradasHoy: number;
  salidasHoy: number;
  valorTotalInventario: number;
}

export interface DatoGraficoMovimientos {
  fecha: string;
  entradas: number;
  salidas: number;
}

export interface DatoGraficoCategorias {
  categoria: string;
  total: number;
  color: string;
}

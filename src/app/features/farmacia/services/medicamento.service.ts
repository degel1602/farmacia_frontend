import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  Medicamento,
  MovimientoInventario,
  CreateMovimientoDto,
  CategoriaMedicamento,
  FiltroInventario,
  DatoGraficoMovimientos,
  DatoGraficoCategorias,
} from '../models/farmacia.models';
import { ApiResponse, PagedResponse } from '../../../shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class MedicamentoService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/medicamento`;

  // ── Inventario ───────────────────────────────────────────────

  getInventario(
    filtros: FiltroInventario = {},
    page = 0,
    size = 20,
  ): Observable<ApiResponse<PagedResponse<Medicamento>>> {
    let params = new HttpParams()
      .set('page', page)
      .set('size', size);

    if (filtros.search)             params = params.set('search', filtros.search);
    if (filtros.categoriaId != null) params = params.set('categoriaId', filtros.categoriaId);
    if (filtros.farmaciaId != null)  params = params.set('farmaciaId', filtros.farmaciaId);
    if (filtros.alertaVencimiento)   params = params.set('alertaVencimiento', filtros.alertaVencimiento);
    if (filtros.estado)              params = params.set('estado', filtros.estado);
    if (filtros.stockBajo != null)   params = params.set('stockBajo', filtros.stockBajo);

    return this.http.get<ApiResponse<PagedResponse<Medicamento>>>(
      `${this.baseUrl}/inventario`,
      { params },
    );
  }

  getById(id: number): Observable<ApiResponse<Medicamento>> {
    return this.http.get<ApiResponse<Medicamento>>(`${this.baseUrl}/${id}`);
  }

  getMedicamentosAlertaVencimiento(): Observable<ApiResponse<Medicamento[]>> {
    return this.http.get<ApiResponse<Medicamento[]>>(`${this.baseUrl}/alertas-vencimiento`);
  }

  // ── Movimientos ──────────────────────────────────────────────

  registrarMovimiento(dto: CreateMovimientoDto): Observable<ApiResponse<MovimientoInventario>> {
    return this.http.post<ApiResponse<MovimientoInventario>>(
      `${environment.apiBaseUrl}/movimiento-inventario`,
      dto,
    );
  }

  getMovimientos(
    farmaciaId?: number,
    medicamentoId?: number,
    page = 0,
    size = 20,
  ): Observable<ApiResponse<PagedResponse<MovimientoInventario>>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (farmaciaId)    params = params.set('farmaciaId', farmaciaId);
    if (medicamentoId) params = params.set('medicamentoId', medicamentoId);
    return this.http.get<ApiResponse<PagedResponse<MovimientoInventario>>>(
      `${environment.apiBaseUrl}/movimiento-inventario`,
      { params },
    );
  }

  // ── Categorías ───────────────────────────────────────────────

  getCategorias(): Observable<ApiResponse<CategoriaMedicamento[]>> {
    return this.http.get<ApiResponse<CategoriaMedicamento[]>>(
      `${environment.apiBaseUrl}/categoria-medicamento`,
    );
  }

  createCategoria(dto: Partial<CategoriaMedicamento>): Observable<ApiResponse<CategoriaMedicamento>> {
    return this.http.post<ApiResponse<CategoriaMedicamento>>(
      `${environment.apiBaseUrl}/categoria-medicamento`,
      dto,
    );
  }

  updateCategoria(id: number, dto: Partial<CategoriaMedicamento>): Observable<ApiResponse<CategoriaMedicamento>> {
    return this.http.put<ApiResponse<CategoriaMedicamento>>(
      `${environment.apiBaseUrl}/categoria-medicamento/${id}`,
      dto,
    );
  }

  deleteCategoria(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(
      `${environment.apiBaseUrl}/categoria-medicamento/${id}`,
    );
  }

  // ── Gráficos ─────────────────────────────────────────────────

  getGraficoMovimientos(
    farmaciaId?: number,
    dias = 7,
  ): Observable<ApiResponse<DatoGraficoMovimientos[]>> {
    let params = new HttpParams().set('dias', dias);
    if (farmaciaId) params = params.set('farmaciaId', farmaciaId);
    return this.http.get<ApiResponse<DatoGraficoMovimientos[]>>(
      `${this.baseUrl}/grafico/movimientos`,
      { params },
    );
  }

  getGraficoCategorias(farmaciaId?: number): Observable<ApiResponse<DatoGraficoCategorias[]>> {
    let params = new HttpParams();
    if (farmaciaId) params = params.set('farmaciaId', farmaciaId);
    return this.http.get<ApiResponse<DatoGraficoCategorias[]>>(
      `${this.baseUrl}/grafico/categorias`,
      { params },
    );
  }
}

import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  Farmacia,
  CreateFarmaciaDto,
  ResumenFarmacia,
} from '../models/farmacia.models';
import { ApiResponse, PagedResponse } from '../../../shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class FarmaciaService {
  private readonly http    = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/farmacia`;

  // ── CRUD Farmacias ──────────────────────────────────────────

  getAll(page = 0, size = 10): Observable<ApiResponse<PagedResponse<Farmacia>>> {
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);
    return this.http.get<ApiResponse<PagedResponse<Farmacia>>>(this.baseUrl, { params });
  }

  getById(id: number): Observable<ApiResponse<Farmacia>> {
    return this.http.get<ApiResponse<Farmacia>>(`${this.baseUrl}/${id}`);
  }

  create(dto: CreateFarmaciaDto): Observable<ApiResponse<Farmacia>> {
    return this.http.post<ApiResponse<Farmacia>>(this.baseUrl, dto);
  }

  update(id: number, dto: Partial<CreateFarmaciaDto>): Observable<ApiResponse<Farmacia>> {
    return this.http.put<ApiResponse<Farmacia>>(`${this.baseUrl}/${id}`, dto);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.baseUrl}/${id}`);
  }

  // ── Dashboard ────────────────────────────────────────────────

  getResumen(farmaciaId?: number): Observable<ApiResponse<ResumenFarmacia>> {
    const params = farmaciaId
      ? new HttpParams().set('farmaciaId', farmaciaId)
      : new HttpParams();
    return this.http.get<ApiResponse<ResumenFarmacia>>(`${this.baseUrl}/resumen`, { params });
  }
}

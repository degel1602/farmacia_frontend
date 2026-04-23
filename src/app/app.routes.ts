import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // Autenticación (acceso público)
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login.component').then(m => m.LoginComponent),
      },
      {
        path: 'change-password',
        loadComponent: () =>
          import('./features/auth/change-password/change-password.component')
            .then(m => m.ChangePasswordComponent),
        canActivate: [authGuard],
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },

  // Layout principal (requiere autenticación)
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/layout/main-layout.component')
        .then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      // Dashboard (home)
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component')
            .then(m => m.DashboardComponent),
      },

      // ─── FARMACIA ────────────────────────────────────────
      {
        path: 'farmacia',
        loadChildren: () =>
          import('./features/farmacia/farmacia.routes').then(m => m.farmaciaRoutes),
      },

      // ─── CONSULTA EXTERNA ─────────────────────────────────
      {
        path: 'consulta-externa',
        loadChildren: () =>
          import('./features/consulta-externa/consulta-externa.routes')
            .then(m => m.consultaExternaRoutes),
      },

      // ─── EMERGENCIA ───────────────────────────────────────
      {
        path: 'emergencia',
        loadChildren: () =>
          import('./features/emergencia/emergencia.routes')
            .then(m => m.emergenciaRoutes),
      },

      // ─── HOSPITALIZACIÓN ──────────────────────────────────
      {
        path: 'hospitalizacion',
        loadChildren: () =>
          import('./features/hospitalizacion/hospitalizacion.routes')
            .then(m => m.hospitalizacionRoutes),
      },

      // ─── PROGRAMACIÓN GENERAL ─────────────────────────────
      {
        path: 'programacion',
        loadChildren: () =>
          import('./features/programacion/programacion.routes')
            .then(m => m.programacionRoutes),
      },

      // ─── CAJA ─────────────────────────────────────────────
      {
        path: 'caja',
        loadChildren: () =>
          import('./features/caja/caja.routes').then(m => m.cajaRoutes),
      },

      // ─── FACTURACIÓN ──────────────────────────────────────
      {
        path: 'facturacion',
        loadChildren: () =>
          import('./features/facturacion/facturacion.routes')
            .then(m => m.facturacionRoutes),
      },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

  // Catch-all
  { path: '**', redirectTo: 'auth/login' },
];

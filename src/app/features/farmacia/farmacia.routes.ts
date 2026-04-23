import { Routes } from '@angular/router';

export const farmaciaRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./farmacia.component').then(m => m.FarmaciaComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/dashboard/farmacia-dashboard.component')
            .then(m => m.FarmaciaDashboardComponent),
      },
      {
        path: 'inventario',
        loadComponent: () =>
          import('./components/inventario/inventario.component')
            .then(m => m.InventarioComponent),
      },
      {
        path: 'movimientos',
        loadComponent: () =>
          import('./components/movimientos/movimientos.component')
            .then(m => m.MovimientosComponent),
      },
      {
        path: 'alertas',
        loadComponent: () =>
          import('./components/alertas/alertas.component')
            .then(m => m.AlertasComponent),
      },
      {
        path: 'categorias',
        loadComponent: () =>
          import('./components/categorias/categorias.component')
            .then(m => m.CategoriasComponent),
      },
      {
        path: 'farmacias',
        loadComponent: () =>
          import('./components/farmacia-modal/farmacias-lista.component')
            .then(m => m.FarmaciasListaComponent),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

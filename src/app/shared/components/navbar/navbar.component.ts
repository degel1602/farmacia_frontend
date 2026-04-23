import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MegaMenu } from 'primeng/megamenu';
import { Menu } from 'primeng/menu';
import { Avatar } from 'primeng/avatar';
import { Ripple } from 'primeng/ripple';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MegaMenu, Menu, Avatar, Ripple],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  private readonly router = inject(Router);
  readonly authService    = inject(AuthService);

  megaMenuItems: MegaMenuItem[] = [];
  profileMenuItems: MenuItem[]  = [];

  ngOnInit(): void {
    this.buildMegaMenu();
    this.buildProfileMenu();
  }

  private buildMegaMenu(): void {
    this.megaMenuItems = [
      {
        label: 'Consulta Externa',
        icon: 'pi pi-users',
        items: [
          [
            {
              label: 'Pacientes',
              items: [
                { label: 'Registro de Pacientes', icon: 'pi pi-user-plus', routerLink: '/consulta-externa/paciente/registro' },
                { label: 'Búsqueda de Pacientes', icon: 'pi pi-search',    routerLink: '/consulta-externa/paciente/busqueda' },
                { label: 'Historia Clínica',       icon: 'pi pi-file',      routerLink: '/consulta-externa/paciente/historia' },
              ],
            },
            {
              label: 'Citas',
              items: [
                { label: 'Nueva Cita',         icon: 'pi pi-calendar-plus', routerLink: '/consulta-externa/citas/nueva' },
                { label: 'Agenda del Día',     icon: 'pi pi-calendar',      routerLink: '/consulta-externa/citas/agenda' },
                { label: 'Reprogramar Cita',   icon: 'pi pi-calendar-times', routerLink: '/consulta-externa/citas/reprogramar' },
              ],
            },
          ],
          [
            {
              label: 'Atención',
              items: [
                { label: 'Triaje',           icon: 'pi pi-heart',          routerLink: '/consulta-externa/triaje' },
                { label: 'Atenciones',       icon: 'pi pi-stethoscope',    routerLink: '/consulta-externa/atenciones' },
                { label: 'Gestor de Colas',  icon: 'pi pi-list',           routerLink: '/consulta-externa/gestor-colas' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Emergencia',
        icon: 'pi pi-bolt',
        items: [
          [
            {
              label: 'Módulo Emergencia',
              items: [
                { label: 'Admisión Emergencia', icon: 'pi pi-sign-in',   routerLink: '/emergencia/admision' },
                { label: 'Triage Emergencia',   icon: 'pi pi-heart-fill', routerLink: '/emergencia/triage' },
                { label: 'Observación',         icon: 'pi pi-eye',        routerLink: '/emergencia/observacion' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Hospitalización',
        icon: 'pi pi-building',
        items: [
          [
            {
              label: 'Gestión de Camas',
              items: [
                { label: 'Mapa de Camas',     icon: 'pi pi-th-large',  routerLink: '/hospitalizacion/mapa-camas' },
                { label: 'Admisión',          icon: 'pi pi-sign-in',   routerLink: '/hospitalizacion/admision' },
                { label: 'Alta de Paciente',  icon: 'pi pi-sign-out',  routerLink: '/hospitalizacion/alta' },
              ],
            },
            {
              label: 'Seguimiento',
              items: [
                { label: 'Evolución',         icon: 'pi pi-chart-line', routerLink: '/hospitalizacion/evolucion' },
                { label: 'Indicaciones',      icon: 'pi pi-file-edit',  routerLink: '/hospitalizacion/indicaciones' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Farmacia',
        icon: 'pi pi-box',
        items: [
          [
            {
              label: 'Gestión',
              items: [
                { label: 'Inventario',          icon: 'pi pi-list',         routerLink: '/farmacia/inventario' },
                { label: 'Movimientos',         icon: 'pi pi-arrow-right-arrow-left', routerLink: '/farmacia/movimientos' },
                { label: 'Alertas Vencimiento', icon: 'pi pi-bell',         routerLink: '/farmacia/alertas' },
              ],
            },
            {
              label: 'Administración',
              items: [
                { label: 'Categorías',      icon: 'pi pi-tag',        routerLink: '/farmacia/categorias' },
                { label: 'Farmacias',       icon: 'pi pi-home',       routerLink: '/farmacia/farmacias' },
                { label: 'Dashboard',       icon: 'pi pi-chart-bar',  routerLink: '/farmacia/dashboard' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Programación',
        icon: 'pi pi-calendar',
        items: [
          [
            {
              label: 'Agenda Médica',
              items: [
                { label: 'Asignación de Médicos', icon: 'pi pi-user-edit',  routerLink: '/programacion/asignacion' },
                { label: 'Calendario General',    icon: 'pi pi-calendar',   routerLink: '/programacion/calendario' },
                { label: 'Horarios',              icon: 'pi pi-clock',      routerLink: '/programacion/horarios' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Finanzas',
        icon: 'pi pi-dollar',
        items: [
          [
            {
              label: 'Caja',
              items: [
                { label: 'Apertura de Caja',  icon: 'pi pi-lock-open',  routerLink: '/caja/apertura' },
                { label: 'Cobros',            icon: 'pi pi-credit-card', routerLink: '/caja/cobros' },
                { label: 'Cierre de Caja',    icon: 'pi pi-lock',       routerLink: '/caja/cierre' },
              ],
            },
            {
              label: 'Facturación',
              items: [
                { label: 'Nueva Factura',       icon: 'pi pi-file-plus',  routerLink: '/facturacion/nueva' },
                { label: 'Facturas Emitidas',   icon: 'pi pi-file',       routerLink: '/facturacion/emitidas' },
                { label: 'Notas de Crédito',    icon: 'pi pi-file-minus', routerLink: '/facturacion/notas-credito' },
              ],
            },
          ],
        ],
      },
    ];
  }

  private buildProfileMenu(): void {
    this.profileMenuItems = [
      {
        label: 'Mi Perfil',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Cambiar Contraseña',
            icon: 'pi pi-key',
            command: () => this.router.navigate(['/auth/change-password']),
          },
          { separator: true },
          {
            label: 'Cerrar Sesión',
            icon: 'pi pi-sign-out',
            command: () => this.authService.logout(),
            styleClass: 'text-red-500',
          },
        ],
      },
    ];
  }
}

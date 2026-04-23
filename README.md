# Galenos Pro

Sistema de Gestión Hospitalaria desarrollado en Angular 21. Centraliza los procesos clínicos y administrativos de un hospital: consulta externa, emergencia, hospitalización, farmacia, programación médica, caja y facturación.

---

## Tabla de contenidos

- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Scripts disponibles](#scripts-disponibles)
- [Entornos](#entornos)
- [Arquitectura del proyecto](#arquitectura-del-proyecto)
- [Módulos funcionales](#módulos-funcionales)
- [Acceso de prueba](#acceso-de-prueba)
- [Variables de entorno](#variables-de-entorno)
- [Convenciones de código](#convenciones-de-código)

---

## Tecnologías

| Tecnología | Versión |
|---|---|
| Angular | 21 |
| PrimeNG | 21.x |
| @primeuix/themes (Aura) | 2.x |
| PrimeIcons | 7.x |
| Tailwind CSS | 3.x |
| Chart.js | 4.x |
| TypeScript | 5.9.x |
| Node.js (requerido) | ≥ 20 |

---

## Requisitos previos

- **Node.js ≥ 20** — Angular CLI 21 no es compatible con versiones anteriores.
- **npm ≥ 10**
- **Angular CLI 21**

```bash
# Verificar versión de Node
node -v

# Instalar Angular CLI globalmente (si no está instalado)
npm install -g @angular/cli@21
```

---

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd galenos-pro

# Instalar dependencias
npm install
```

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm start` | Servidor de desarrollo (`localhost:4200`) |
| `npm run start:qa` | Servidor apuntando al entorno QA |
| `npm run build` | Build de desarrollo |
| `npm run build:qa` | Build para QA |
| `npm run build:prod` | Build de producción (con optimizaciones) |
| `npm test` | Ejecutar tests unitarios con Karma |
| `npm run watch` | Build en modo watch (desarrollo) |

---

## Entornos

El proyecto cuenta con tres configuraciones de entorno:

| Archivo | Entorno | API Base URL |
|---|---|---|
| `environment.ts` | Desarrollo | `http://localhost:8080/api/v1` |
| `environment.qa.ts` | QA | Configurar según infraestructura |
| `environment.prod.ts` | Producción | Configurar según infraestructura |

> Los archivos `environment.qa.ts` y `environment.prod.ts` están excluidos del repositorio por seguridad. Copiar el archivo `environment.ts` como plantilla.

---

## Arquitectura del proyecto

```
src/
└── app/
    ├── core/                        # Servicios y guards globales
    │   ├── guards/
    │   │   └── auth.guard.ts        # Guard de autenticación
    │   ├── interceptors/
    │   │   └── auth.interceptor.ts  # Inyección de Bearer token
    │   └── services/
    │       ├── auth.service.ts      # Autenticación con signals
    │       └── notification.service.ts
    ├── shared/                      # Componentes y modelos reutilizables
    │   ├── components/
    │   │   ├── navbar/              # MegaMenu multinivel horizontal
    │   │   └── layout/              # Main layout con router-outlet
    │   └── models/
    │       └── user.model.ts
    ├── features/                    # Módulos funcionales (lazy loading)
    │   ├── auth/
    │   ├── dashboard/
    │   ├── consulta-externa/
    │   ├── emergencia/
    │   ├── hospitalizacion/
    │   ├── farmacia/
    │   ├── programacion/
    │   ├── caja/
    │   └── facturacion/
    ├── app.config.ts                # Providers raíz (DI, router, PrimeNG)
    ├── app.routes.ts                # Rutas principales con lazy loading
    └── app.component.ts
```

---

## Módulos funcionales

### Dashboard
Vista general con KPIs del hospital: pacientes, citas, emergencias, camas ocupadas, recaudación y stock bajo. Incluye gráfico de barras (Chart.js) con actividad semanal.

### Consulta Externa
- **Pacientes** — Registro y búsqueda de pacientes
- **Citas** — Programación y gestión de citas médicas
- **Triaje** — Clasificación de urgencia
- **Atenciones** — Historial de atenciones
- **Gestor de Colas** — Gestión del orden de atención

### Emergencia
- **Admisión** — Ingreso de pacientes de emergencia
- **Triaje** — Clasificación de severidad (ESI)
- **Observación** — Seguimiento de pacientes en observación

### Hospitalización
- **Mapa de Camas** — Estado visual de camas por piso/área
- **Admisión** — Ingreso a hospitalización
- **Evolución** — Notas de evolución clínica
- **Indicaciones** — Prescripciones e indicaciones médicas
- **Alta** — Gestión del alta del paciente

### Farmacia (módulo completo)
- **Dashboard** — KPIs de inventario + gráficos de movimientos y categorías (Chart.js)
- **Inventario** — DataTable con búsqueda en tiempo real, filtros y alertas de vencimiento
- **Movimientos** — Registro de entradas/salidas con validación de stock
- **Alertas** — Medicamentos vencidos, críticos y próximos a vencer con código de colores
- **Categorías** — CRUD de categorías de medicamentos
- **Farmacias** — CRUD de sucursales/sedes de farmacia

### Programación Médica
- **Calendario** — Asignación de médicos con DatePicker (PrimeNG)
- **Horarios** — Gestión de turnos y horarios por doctor

### Caja
- **Apertura** — Apertura de caja con monto inicial
- **Cobros** — Registro de cobros y pagos
- **Cierre** — Cuadre y cierre de caja

### Facturación
- **Nueva Factura** — Emisión de comprobantes
- **Facturas Emitidas** — Historial y reimpresión
- **Notas de Crédito** — Gestión de devoluciones

---

## Acceso de prueba

La autenticación es client-side (sin backend requerido para desarrollo):

| Campo | Valor |
|---|---|
| Usuario | `admin` |
| Contraseña | `admin123` |

---

## Variables de entorno

Campos disponibles en cada archivo de entorno:

```typescript
export const environment = {
  production: boolean,
  qa: boolean,
  envName: string,          // 'development' | 'qa' | 'production'
  apiBaseUrl: string,       // URL base del backend Java (Spring Boot)
  apiTimeout: number,       // Timeout HTTP en ms
  appVersion: string,
  appName: string,
  features: {
    enableDebugLogs: boolean,
    enableMockData: boolean,
  },
};
```

El interceptor `auth.interceptor.ts` agrega automáticamente el header `Authorization: Bearer <token>` a todas las peticiones HTTP salientes.

---

## Convenciones de código

- **Componentes**: standalone, signals (`signal()`, `computed()`)
- **Servicios**: `providedIn: 'root'`, tipado estricto con interfaces
- **Estilos**: Tailwind CSS con prefijo `tw-` para evitar conflictos con PrimeNG
- **Formularios**: Reactivos (`ReactiveFormsModule`) con validaciones inline
- **Rutas**: Lazy loading con `loadComponent` / `loadChildren` en todas las features
- **Tema**: PrimeNG Aura (`@primeuix/themes/aura`), paleta hospitalaria (azul `#2378f0`, cyan `#00bcd4`)

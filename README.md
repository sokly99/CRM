# CrmFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.19.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

src/
└── app/
    ├── core/                      # App-wide singleton infrastructure (loaded once)
    │   ├── guards/                # Auth, role-based permission guards
    │   ├── interceptors/          # JWT token injection, error handling, caching
    │   ├── services/              # Global app services (AuthService, NotificationService)
    │   └── models/                # Global types (User, ApiResponse, Pagination)
    │
    ├── shared/                    # Reusable, domain-agnostic UI building blocks
    │   ├── components/            # UI primitives (Data-table, modal, card, dropdown)
    │   ├── directives/            # Generic directives (e.g., click-outside, permission-mask)
    │   ├── pipes/                 # Formatting pipes (phone, currency, relative-time)
    │   └── utils/                 # Pure helper functions (date formatters, local storage)
    │
    ├── features/                  # Domain-specific modules (Lazy-loaded route boundaries)
    │   ├── dashboard/             # CRM Analytics, KPI widgets, recent activity feed
    │   ├── contacts/              # Contact directory, detail view, timeline
    │   │   ├── components/        # Contact list table, contact form modal
    │   │   ├── services/          # Contact-specific state (Signals / Facade) or API calls
    │   │   ├── models/            # Contact interfaces & DTOs
    │   │   └── contacts.routes.ts # Feature-local lazy routes
    │   │
    │   ├── leads/                 # Lead qualification workflow
    │   ├── deals/                 # Pipeline Kanban board, deal stages, forecasting
    │   ├── companies/             # Account management & hierarchy
    │   └── settings/              # User management, custom fields, pipeline configurations
    │
    ├── layout/                    # Shell layout components (Sidebar, header, breadcrumbs)
    │
    ├── app.component.ts           # Root layout shell
    ├── app.config.ts              # Global providers, HTTP client, router setup
    └── app.routes.ts              # Root routes mapping to lazy feature bundles

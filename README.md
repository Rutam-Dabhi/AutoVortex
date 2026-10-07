# AutoVortex

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.27.

## Storefront

AutoVortex is a responsive, frontend-only vehicle and spare-parts storefront built with Angular and Bootstrap. Its routes are:

- `/` — home and featured inventory
- `/vehicles` — searchable, filterable vehicle collection
- `/vehicles/:id` — vehicle details and booking action
- `/parts` — searchable parts catalog with category filters
- `/cart` — cart quantity controls and order summary

The sample catalog contains 22 vehicles from recognizable manufacturers and 30 spare parts. Catalog photos are individually assigned without duplicate URLs across the vehicle and parts listings. The responsive storefront uses a black-and-red theme. Catalog data and frontend cart/wishlist state are in `src/app/models/` and `src/app/services/`.

### Source structure

- `src/app/layout/` — shared header, footer and toast components
- `src/app/pages/` — lazy-loaded route page components
- `src/app/shared/` — reusable vehicle and part cards
- `src/app/models/` — catalog data and model types
- `src/app/services/` — shared storefront state
- `src/styles.scss` — shared responsive Bootstrap-based styles

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

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

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

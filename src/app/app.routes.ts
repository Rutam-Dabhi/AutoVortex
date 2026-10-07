import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', title: 'AutoVortex | Find your kind of freedom', loadComponent: () => import('./pages/home/home.component').then(module => module.HomeComponent) },
  { path: 'vehicles', title: 'Vehicles | AutoVortex', loadComponent: () => import('./pages/vehicles/vehicle-list.component').then(module => module.VehicleListComponent) },
  { path: 'vehicles/:id', title: 'Vehicle details | AutoVortex', loadComponent: () => import('./pages/vehicles/vehicle-detail.component').then(module => module.VehicleDetailComponent) },
  { path: 'parts', title: 'Spare parts | AutoVortex', loadComponent: () => import('./pages/parts/parts.component').then(module => module.PartsComponent) },
  { path: 'cart', title: 'Your cart | AutoVortex', loadComponent: () => import('./pages/cart/cart.component').then(module => module.CartComponent) },
  { path: '**', redirectTo: '' }
];

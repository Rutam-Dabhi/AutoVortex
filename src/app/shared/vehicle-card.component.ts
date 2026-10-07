import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Vehicle } from '../models/catalog';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  template: `
    <article class="vehicle-card card">
      <div class="vehicle-card-image">
        <img [src]="vehicle.image" [alt]="vehicle.name" loading="lazy">
        <span class="vehicle-label">{{ vehicle.tag || vehicle.type }}</span>
        <button class="favorite-button" [class.is-saved]="store.isWishlisted(vehicle.id)" (click)="store.toggleWishlist(vehicle.id)" [attr.aria-label]="store.isWishlisted(vehicle.id) ? 'Remove from wishlist' : 'Add to wishlist'">
          <i [class]="store.isWishlisted(vehicle.id) ? 'bi bi-heart-fill' : 'bi bi-heart'"></i>
        </button>
        <a class="image-open" [routerLink]="['/vehicles', vehicle.id]" aria-label="View vehicle details"><i class="bi bi-arrow-up-right"></i></a>
      </div>
      <div class="vehicle-card-body">
        <div class="vehicle-year">{{ vehicle.year }} <span>·</span> {{ vehicle.type }} <span>·</span> {{ vehicle.fuel }}</div>
        <h3>{{ vehicle.name }}</h3>
        <div class="vehicle-card-footer">
          <strong>{{ vehicle.price | currency:'INR':'symbol':'1.0-0':'en-IN' }}</strong>
          <a [routerLink]="['/vehicles', vehicle.id]">View details <i class="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </article>
  `
})
export class VehicleCardComponent {
  @Input({ required: true }) vehicle!: Vehicle;
  readonly store = inject(StoreService);
}

import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Vehicle } from '../../models/catalog';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './vehicle-detail.component.html'
})
export class VehicleDetailComponent {
  readonly store = inject(StoreService);
  private readonly router = inject(Router);
  vehicle?: Vehicle;
  selectedImage = '';
  readonly galleryImages = [
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1100&q=85',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1100&q=85',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1100&q=85'
  ];

  constructor() {
    inject(ActivatedRoute).paramMap.subscribe(params => {
      this.vehicle = this.store.getVehicle(params.get('id') ?? '');
      this.selectedImage = this.vehicle?.image ?? '';
    });
  }

  bookVehicle(): void {
    if (!this.vehicle) return;
    this.store.addToCart(this.vehicle.id, 'vehicle');
    void this.router.navigate(['/cart']);
  }
}

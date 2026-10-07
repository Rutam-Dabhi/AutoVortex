import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Vehicle } from '../../models/catalog';
import { StoreService } from '../../services/store.service';
import { VehicleCardComponent } from '../../shared/vehicle-card.component';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, VehicleCardComponent],
  templateUrl: './vehicle-list.component.html'
})
export class VehicleListComponent {
  readonly store = inject(StoreService);
  searchTerm = inject(ActivatedRoute).snapshot.queryParamMap.get('search') ?? '';
  vehicleCondition = 'All';
  fuelFilter = 'All';
  readonly conditions = ['All', 'New', 'Used'];
  readonly fuels = ['All', 'Petrol', 'Diesel', 'Electric', 'Hybrid'];

  get filteredVehicles(): Vehicle[] {
    const search = this.searchTerm.trim().toLowerCase();
    return this.store.vehicles.filter(vehicle =>
      (this.vehicleCondition === 'All' || vehicle.type === this.vehicleCondition) &&
      (this.fuelFilter === 'All' || vehicle.fuel === this.fuelFilter) &&
      (!search || `${vehicle.name} ${vehicle.fuel} ${vehicle.year} ${vehicle.type}`.toLowerCase().includes(search))
    );
  }

  clearFilters(): void {
    this.vehicleCondition = 'All';
    this.fuelFilter = 'All';
    this.searchTerm = '';
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { PartCardComponent } from '../../shared/part-card.component';
import { VehicleCardComponent } from '../../shared/vehicle-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PartCardComponent, VehicleCardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly store = inject(StoreService);
  searchTerm = '';
}

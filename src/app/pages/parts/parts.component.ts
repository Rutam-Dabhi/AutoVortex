import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Part } from '../../models/catalog';
import { StoreService } from '../../services/store.service';
import { PartCardComponent } from '../../shared/part-card.component';

@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PartCardComponent],
  templateUrl: './parts.component.html'
})
export class PartsComponent {
  readonly store = inject(StoreService);
  searchTerm = '';
  category = 'All';

  get filteredParts(): Part[] {
    const search = this.searchTerm.trim().toLowerCase();
    return this.store.parts.filter(part =>
      (this.category === 'All' || part.category === this.category) &&
      (!search || `${part.name} ${part.compatible} ${part.category}`.toLowerCase().includes(search))
    );
  }
}

import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Part } from '../models/catalog';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-part-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  template: `
    <article class="part-card card">
      <div class="part-image">
        <img [src]="part.image" [alt]="part.name" loading="lazy">
        <span class="part-stock"><span></span> {{ part.stock }} in stock</span>
      </div>
      <div class="part-card-body">
        <span class="part-category">{{ part.category }}</span>
        <h3>{{ part.name }}</h3>
        <p>{{ part.compatible }}</p>
        <div class="part-footer">
          <strong>{{ part.price | currency:'INR':'symbol':'1.0-0':'en-IN' }}</strong>
          <button (click)="store.addToCart(part.id, 'part')" [attr.aria-label]="'Add ' + part.name + ' to cart'"><i class="bi bi-plus-lg"></i></button>
        </div>
      </div>
    </article>
  `
})
export class PartCardComponent {
  @Input({ required: true }) part!: Part;
  readonly store = inject(StoreService);
}

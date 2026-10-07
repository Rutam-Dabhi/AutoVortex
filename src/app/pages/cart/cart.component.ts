import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartLine, StoreService } from '../../services/store.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  readonly store = inject(StoreService);
  private readonly router = inject(Router);

  checkout(): void {
    this.store.notify('Your order is ready for checkout');
  }

  continueShopping(): void {
    void this.router.navigate(['/vehicles']);
  }

  trackLine(_index: number, item: CartLine): string {
    return `${item.type}:${item.id}`;
  }
}

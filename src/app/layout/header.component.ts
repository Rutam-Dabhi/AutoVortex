import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly store = inject(StoreService);
  private readonly router = inject(Router);
  mobileNavOpen = false;

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
  }

  showWishlist(): void {
    this.store.notify(`Your wishlist has ${this.store.wishlistCount} saved item(s)`);
  }

  openVehicles(): void {
    this.closeMobileNav();
    void this.router.navigate(['/vehicles']);
  }
}

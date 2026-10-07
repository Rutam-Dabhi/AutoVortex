import { Injectable, signal } from '@angular/core';
import { CartItem, ItemType, Part, PARTS, Vehicle, VEHICLES } from '../models/catalog';

export interface CartLine extends CartItem {
  name: string;
  image: string;
  price: number;
  detail: string;
}

@Injectable({ providedIn: 'root' })
export class StoreService {
  readonly vehicles = VEHICLES;
  readonly parts = PARTS;
  readonly categories = ['All', ...new Set(PARTS.map(part => part.category))];
  readonly notice = signal('');
  readonly cart: CartItem[] = [
    { id: 'mercedes-amg-gt', type: 'vehicle', quantity: 1 },
    { id: 'alloy-wheel', type: 'part', quantity: 2 }
  ];

  private wishlist = new Set<string>();
  private noticeTimer?: ReturnType<typeof setTimeout>;

  get cartCount(): number {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  get wishlistCount(): number {
    return this.wishlist.size;
  }

  get subtotal(): number {
    return this.cart.reduce((sum, item) => sum + this.productPrice(item) * item.quantity, 0);
  }

  get cartLines(): CartLine[] {
    return this.cart.map(item => {
      const product = this.findProduct(item);
      let detail: string;
      if (item.type === 'vehicle' && 'year' in product) {
        detail = `${product.year} · ${product.type} vehicle`;
      } else if (item.type === 'part' && 'compatible' in product) {
        detail = product.compatible;
      } else {
        throw new Error(`Store product type mismatch: ${item.type} ${item.id}`);
      }
      return {
        ...item,
        name: product.name,
        image: product.image,
        price: product.price,
        detail
      };
    });
  }

  getVehicle(id: string): Vehicle | undefined {
    return this.vehicles.find(vehicle => vehicle.id === id);
  }

  isWishlisted(id: string): boolean {
    return this.wishlist.has(id);
  }

  toggleWishlist(id: string): void {
    if (this.wishlist.has(id)) {
      this.wishlist.delete(id);
      this.notify('Removed from your wishlist');
    } else {
      this.wishlist.add(id);
      this.notify('Saved to your wishlist');
    }
  }

  addToCart(id: string, type: ItemType): void {
    this.findProduct({ id, type });
    const existing = this.cart.find(item => item.id === id && item.type === type);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ id, type, quantity: 1 });
    }
    this.notify('Added to your cart');
  }

  changeQuantity(item: CartItem, change: number): void {
    const cartItem = this.cart.find(entry => entry.id === item.id && entry.type === item.type);
    if (!cartItem) return;
    cartItem.quantity += change;
    if (cartItem.quantity <= 0) this.removeFromCart(item);
  }

  removeFromCart(item: CartItem): void {
    const index = this.cart.findIndex(entry => entry.id === item.id && entry.type === item.type);
    if (index >= 0) this.cart.splice(index, 1);
  }

  productPrice(item: CartItem): number {
    return this.findProduct(item).price;
  }

  notify(message: string): void {
    this.notice.set(message);
    if (this.noticeTimer) clearTimeout(this.noticeTimer);
    this.noticeTimer = setTimeout(() => this.notice.set(''), 2600);
  }

  private findProduct(item: Pick<CartItem, 'id' | 'type'>): Vehicle | Part {
    const product = item.type === 'vehicle'
      ? this.getVehicle(item.id)
      : this.parts.find(part => part.id === item.id);
    if (!product) throw new Error(`Store product not found: ${item.type} ${item.id}`);
    return product;
  }
}

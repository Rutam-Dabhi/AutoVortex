import { TestBed } from '@angular/core/testing';
import { StoreService } from './store.service';

describe('StoreService', () => {
  let store: StoreService;

  beforeEach(() => {
    store = TestBed.configureTestingModule({}).inject(StoreService);
  });

  it('provides at least twenty real-model vehicles and thirty spare parts', () => {
    expect(store.vehicles.length).toBeGreaterThanOrEqual(20);
    expect(store.parts.length).toBeGreaterThanOrEqual(30);
    expect(store.vehicles.some(vehicle => vehicle.name.includes('Porsche 911'))).toBeTrue();
    expect(store.parts.some(part => part.name.includes('Charging Cable'))).toBeTrue();
    expect(new Set(store.vehicles.map(vehicle => vehicle.id)).size).toBe(store.vehicles.length);
    expect(new Set(store.parts.map(part => part.id)).size).toBe(store.parts.length);
    expect(store.vehicles.every(vehicle => !!vehicle.image)).toBeTrue();
    expect(store.parts.every(part => !!part.image)).toBeTrue();
    const catalogImages = [...store.vehicles, ...store.parts].map(item => item.image);
    expect(new Set(catalogImages).size).toBe(catalogImages.length);
  });

  it('updates cart quantities and subtotal', () => {
    const initialSubtotal = store.subtotal;
    store.addToCart('brake-kit', 'part');
    expect(store.subtotal).toBe(initialSubtotal + 32900);
    expect(store.cartCount).toBe(4);
  });
});

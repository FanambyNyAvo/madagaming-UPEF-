import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items = signal<CartItem[]>([]);
  private readonly _isOpen = signal(false);

  readonly items = computed(() => this._items());
  readonly isOpen = computed(() => this._isOpen());

  readonly count = computed(() =>
    this._items().reduce((sum, item) => sum + item.qty, 0)
  );

  readonly subtotal = computed(() =>
    this._items().reduce((sum, item) => sum + item.product.price * item.qty, 0)
  );

  readonly shipping = computed(() => this.subtotal() >= 50000 ? 0 : 5000);

  readonly tax = computed(() => Math.round(this.subtotal() * 0.1));

  readonly total = computed(() => this.subtotal() + this.shipping() + this.tax());

  add(product: Product, platform: string, qty = 1): void {
    const key = `${product.id}-${platform}`;
    const current = this._items();
    const existing = current.find(i => i.key === key);

    if (existing) {
      this._items.update(items =>
        items.map(i => i.key === key ? { ...i, qty: i.qty + qty } : i)
      );
    } else {
      this._items.update(items => [...items, { key, product, platform, qty }]);
    }
  }

  remove(key: string): void {
    this._items.update(items => items.filter(i => i.key !== key));
  }

  clear(): void {
    this._items.set([]);
  }

  togglePanel(): void {
    this._isOpen.update(v => !v);
  }

  openPanel(): void {
    this._isOpen.set(true);
  }

  closePanel(): void {
    this._isOpen.set(false);
  }
}

import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private readonly _ids = signal<Set<number>>(new Set());

  readonly ids = computed(() => this._ids());

  toggle(id: number): void {
    this._ids.update(set => {
      const next = new Set(set);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  has(id: number): boolean {
    return this._ids().has(id);
  }
}

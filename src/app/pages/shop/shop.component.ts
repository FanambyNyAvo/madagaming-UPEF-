import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { ToastService } from '../../core/services/toast.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  private route = inject(ActivatedRoute);
  productService = inject(ProductService);
  private cart = inject(CartService);
  private toast = inject(ToastService);

  currentCategory = signal('Tous');
  currentSort = signal('default');
  searchQuery = signal('');

  filteredProducts = computed(() => {
    const q = this.searchQuery().toLowerCase();
    if (q) {
      return this.productService.getAll().filter((p: Product) =>
        p.name.toLowerCase().includes(q) ||
        p.genre.toLowerCase().includes(q) ||
        p.platform.toLowerCase().includes(q) ||
        p.studio.toLowerCase().includes(q)
      );
    }
    return this.productService.getFiltered(this.currentCategory(), this.currentSort());
  });

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.currentCategory.set(params['category']);
        this.searchQuery.set('');
      }
      if (params['search']) {
        this.searchQuery.set(params['search']);
        this.currentCategory.set('Tous');
      }
    });
  }

  filterBy(cat: string): void {
    this.currentCategory.set(cat);
    this.searchQuery.set('');
  }

  onQuickAdd(product: Product): void {
    this.cart.add(product, product.platform, 1);
    this.toast.show(`${product.name} ajouté au panier ✓`);
  }
}
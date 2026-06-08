import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { ToastService } from '../../core/services/toast.service';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private router = inject(Router);
  productService = inject(ProductService);
  private cart = inject(CartService);
  private toast = inject(ToastService);

  navigateToShop(category?: string): void {
    if (category) {
      this.router.navigate(['/shop'], { queryParams: { category } });
    } else {
      this.router.navigate(['/shop']);
    }
  }

  onQuickAdd(product: Product): void {
    this.cart.add(product, product.platform, 1);
    this.toast.show(`${product.name} ajouté au panier ✓`);
  }
}

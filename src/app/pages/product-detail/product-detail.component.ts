import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CartService } from '../../core/services/cart.service';
import { ToastService } from '../../core/services/toast.service';
import { WishlistService } from '../../core/services/wishlist.service';
import { MgPricePipe } from '../../shared/pipes/mg-price.pipe';
import { StarsPipe } from '../../shared/pipes/stars.pipe';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, MgPricePipe, StarsPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);
  private cart = inject(CartService);
  private toast = inject(ToastService);
  wishlist = inject(WishlistService);

  product = signal<Product | null>(null);
  qty = signal(1);
  activeThumb = signal(0);

  readonly thumbs = ['emoji', '📦', '🎮', '⭐'];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      const p = this.productService.getById(id);
      if (!p) { this.router.navigate(['/shop']); return; }
      this.product.set(p);
      this.qty.set(1);
    });
  }

  changeQty(delta: number): void {
    this.qty.update(q => Math.max(1, q + delta));
  }

  addToCart(): void {
    const p = this.product();
    if (!p) return;
    this.cart.add(p, p.platform, this.qty());
    this.toast.show(`${p.name} ajouté au panier ✓`);
  }
}

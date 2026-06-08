import { Component, input, output, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { WishlistService } from '../../../core/services/wishlist.service';
import { MgPricePipe } from '../../pipes/mg-price.pipe';
import { StarsPipe } from '../../pipes/stars.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, MgPricePipe, StarsPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>();
  quickAdd = output<Product>();
  wishlist = inject(WishlistService);

  getBadgeLabel(badge: string, discount?: number): string {
    if (badge === 'sale') return `-${discount}%`;
    if (badge === 'new') return 'Nouveau';
    return 'Top';
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src =
      `https://placehold.co/400x600/13131a/3b82f6?text=${encodeURIComponent(this.product().name)}`;
  }

  onQuickAdd(event: Event): void {
    event.stopPropagation();
    this.quickAdd.emit(this.product());
  }

  onToggleWish(event: Event): void {
    event.stopPropagation();
    this.wishlist.toggle(this.product().id);
  }
}
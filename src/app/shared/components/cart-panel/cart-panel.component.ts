import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { MgPricePipe } from '../../pipes/mg-price.pipe';

@Component({
  selector: 'app-cart-panel',
  standalone: true,
  imports: [RouterLink, MgPricePipe],
  templateUrl: './cart-panel.component.html',
  styleUrl: './cart-panel.component.scss'
})
export class CartPanelComponent {
  cart = inject(CartService);
}

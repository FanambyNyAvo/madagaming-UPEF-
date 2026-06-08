import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';
import { AuthService } from '../../core/services/auth.service';
import { MgPricePipe } from '../../shared/pipes/mg-price.pipe';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, FormsModule, MgPricePipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  cart = inject(CartService);
  auth = inject(AuthService);
  private router = inject(Router);

  form = {
    firstName: this.auth.currentUser()?.firstName || '',
    lastName: this.auth.currentUser()?.lastName || '',
    email: this.auth.currentUser()?.email || '',
    phone: this.auth.currentUser()?.phone || '',
    address: '', city: '', region: '',
    paymentMethod: 'mvola'
  };

  placeOrder(): void {
    const orderNum = '#MG-' + Math.floor(Math.random() * 900000 + 100000);
    this.auth.saveOrder({
      id: orderNum,
      date: new Date().toISOString(),
      total: this.cart.total(),
      status: 'En cours',
      items: this.cart.items().map(i => ({
        productId: i.product.id,
        name: i.product.name,
        emoji: i.product.emoji,
        platform: i.platform,
        qty: i.qty,
        price: i.product.price
      }))
    });
    this.cart.clear();
    this.router.navigate(['/order-success'], { queryParams: { order: orderNum } });
  }
}

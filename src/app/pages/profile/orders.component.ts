import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { MgPricePipe } from '../../shared/pipes/mg-price.pipe';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [RouterLink, DatePipe, MgPricePipe],
  templateUrl: './orders.component.html',
  styleUrl: './profile.component.scss'
})
export class OrdersComponent {
  auth = inject(AuthService);

  get orders() { return this.auth.getOrders(); }
}

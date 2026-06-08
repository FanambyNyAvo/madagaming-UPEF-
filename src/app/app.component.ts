import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CartPanelComponent } from './shared/components/cart-panel/cart-panel.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ToastComponent } from './shared/components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CartPanelComponent, FooterComponent, ToastComponent],
  template: `
    <app-navbar />
    <app-cart-panel />
    <app-toast />
    <main>
      <router-outlet />
    </main>
    <app-footer />
  `
})
export class AppComponent {}

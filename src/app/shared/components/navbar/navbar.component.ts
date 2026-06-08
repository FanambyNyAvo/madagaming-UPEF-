import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cart = inject(CartService);
  auth = inject(AuthService);
  private router = inject(Router);

  searchQuery = signal('');
  menuOpen = signal(false);

  onSearch(value: string): void {
    this.searchQuery.set(value);
    if (value.trim()) this.router.navigate(['/shop'], { queryParams: { search: value } });
  }

  navigateToShop(platform: string): void {
    this.router.navigate(['/shop'], { queryParams: { category: platform } });
  }

  toggleUserMenu(): void { this.menuOpen.update(v => !v); }

  onLogout(): void {
    this.auth.logout();
    this.menuOpen.set(false);
    this.router.navigate(['/']);
  }
}
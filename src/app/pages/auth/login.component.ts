import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './auth.component.scss'
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  email = signal('');
  password = signal('');
  error = signal('');
  loading = signal(false);

  onSubmit(): void {
    this.error.set('');
    if (!this.email() || !this.password()) {
      this.error.set('Veuillez remplir tous les champs.');
      return;
    }
    this.loading.set(true);
    setTimeout(() => {
      const result = this.auth.login(this.email(), this.password());
      this.loading.set(false);
      if (result.success) {
        this.router.navigate(['/profile']);
      } else {
        this.error.set(result.error || 'Erreur de connexion.');
      }
    }, 600);
  }
}

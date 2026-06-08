import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './auth.component.scss'
})
export class RegisterComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  firstName = signal('');
  lastName = signal('');
  email = signal('');
  phone = signal('');
  password = signal('');
  confirm = signal('');
  error = signal('');
  loading = signal(false);

  onSubmit(): void {
    this.error.set('');
    if (!this.firstName() || !this.lastName() || !this.email() || !this.password()) {
      this.error.set('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    if (this.password() !== this.confirm()) {
      this.error.set('Les mots de passe ne correspondent pas.');
      return;
    }
    if (this.password().length < 6) {
      this.error.set('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }
    this.loading.set(true);
    setTimeout(() => {
      const result = this.auth.register(
        this.firstName(), this.lastName(),
        this.email(), this.phone(), this.password()
      );
      this.loading.set(false);
      if (result.success) {
        this.router.navigate(['/profile']);
      } else {
        this.error.set(result.error || 'Erreur lors de l\'inscription.');
      }
    }, 600);
  }
}

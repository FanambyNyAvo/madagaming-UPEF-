import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, FormsModule, DatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  auth = inject(AuthService);
  private toast = inject(ToastService);

  editing = signal(false);

  form = {
    firstName: this.auth.currentUser()?.firstName || '',
    lastName: this.auth.currentUser()?.lastName || '',
    phone: this.auth.currentUser()?.phone || ''
  };

  startEdit(): void {
    const u = this.auth.currentUser();
    if (u) {
      this.form = { firstName: u.firstName, lastName: u.lastName, phone: u.phone };
    }
    this.editing.set(true);
  }

  saveEdit(): void {
    this.auth.updateProfile(this.form);
    this.editing.set(false);
    this.toast.show('Profil mis à jour ✓');
  }
}
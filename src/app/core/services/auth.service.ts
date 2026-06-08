import { Injectable, signal, computed } from '@angular/core';
import { User, Order } from '../models/user.model';

const USERS_KEY = 'mg_users';
const SESSION_KEY = 'mg_session';
const ORDERS_KEY = 'mg_orders';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _currentUser = signal<User | null>(this.loadSession());

  readonly currentUser = computed(() => this._currentUser());
  readonly isLoggedIn = computed(() => !!this._currentUser());

  private loadSession(): User | null {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  private getUsers(): Record<string, { user: User; password: string }> {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  }

  private saveUsers(users: Record<string, { user: User; password: string }>): void {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  register(firstName: string, lastName: string, email: string, phone: string, password: string): { success: boolean; error?: string } {
    const users = this.getUsers();
    if (users[email]) return { success: false, error: 'Cet email est déjà utilisé.' };

    const user: User = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      email,
      phone,
      createdAt: new Date().toISOString()
    };

    users[email] = { user, password };
    this.saveUsers(users);
    this._currentUser.set(user);
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    return { success: true };
  }

  login(email: string, password: string): { success: boolean; error?: string } {
    const users = this.getUsers();
    const entry = users[email];
    if (!entry) return { success: false, error: 'Email introuvable.' };
    if (entry.password !== password) return { success: false, error: 'Mot de passe incorrect.' };

    this._currentUser.set(entry.user);
    localStorage.setItem(SESSION_KEY, JSON.stringify(entry.user));
    return { success: true };
  }

  logout(): void {
    this._currentUser.set(null);
    localStorage.removeItem(SESSION_KEY);
  }

  updateProfile(data: Partial<User>): void {
    const user = this._currentUser();
    if (!user) return;
    const updated = { ...user, ...data };
    const users = this.getUsers();
    if (users[user.email]) users[user.email].user = updated;
    this.saveUsers(users);
    this._currentUser.set(updated);
    localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
  }

  saveOrder(order: Order): void {
    const user = this._currentUser();
    if (!user) return;
    const key = `${ORDERS_KEY}_${user.id}`;
    const orders = this.getOrders();
    orders.unshift(order);
    localStorage.setItem(key, JSON.stringify(orders));
  }

  getOrders(): Order[] {
    const user = this._currentUser();
    if (!user) return [];
    try {
      const raw = localStorage.getItem(`${ORDERS_KEY}_${user.id}`);
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  }
}

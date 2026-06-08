import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="success-page">
      <div class="success-icon">✅</div>
      <h1 class="success-title">Commande <span style="color:var(--green)">Confirmée</span> !</h1>
      <p class="success-sub">
        Merci pour votre commande. Vous recevrez une confirmation par SMS.<br>
        <strong style="color:var(--white)">{{ orderNum() }}</strong>
      </p>
      <div class="success-actions">
        <a class="btn-primary" routerLink="/shop">Continuer les achats →</a>
        <a class="btn-secondary" routerLink="/">Retour à l'accueil</a>
      </div>
    </div>
  `,
  styles: [`
    .success-page {
      text-align: center;
      padding: 100px 48px;
    }
    .success-icon { font-size: 68px; margin-bottom: 20px; }
    .success-title {
      font-family: 'Rajdhani', sans-serif;
      font-size: 46px;
      font-weight: 700;
      margin-bottom: 14px;
      text-transform: uppercase;
    }
    .success-sub {
      color: var(--text-muted);
      margin-bottom: 36px;
      font-size: 16px;
      line-height: 2;
    }
    .success-actions {
      display: flex;
      gap: 14px;
      justify-content: center;
      flex-wrap: wrap;
    }
  `]
})
export class OrderSuccessComponent implements OnInit {
  private route = inject(ActivatedRoute);
  orderNum = signal('');

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.orderNum.set(params['order'] || '#MG-000000');
    });
  }
}

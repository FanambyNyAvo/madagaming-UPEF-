import { Component, inject } from '@angular/core';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    <div class="toast" [class.show]="toast.visible()">
      {{ toast.message() }}
    </div>
  `,
  styles: [`
    .toast {
      position: fixed;
      bottom: 32px;
      left: 50%;
      transform: translateX(-50%) translateY(120px);
      background: var(--surface);
      border: 1px solid var(--green);
      color: var(--text);
      padding: 14px 28px;
      border-radius: var(--radius);
      font-size: 13px;
      font-weight: 600;
      z-index: 500;
      transition: transform 0.4s cubic-bezier(.175,.885,.32,1.275);
      white-space: nowrap;
      box-shadow: var(--glow-green);

      &.show { transform: translateX(-50%) translateY(0); }
    }
  `]
})
export class ToastComponent {
  toast = inject(ToastService);
}

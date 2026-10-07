import { Component, inject } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  template: `
    <div class="toast-message" [class.toast-visible]="store.notice()" role="status" aria-live="polite">
      <i class="bi bi-check-circle-fill"></i>{{ store.notice() }}
    </div>
  `
})
export class ToastComponent {
  readonly store = inject(StoreService);
}

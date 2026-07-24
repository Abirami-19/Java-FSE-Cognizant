import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  providers: [NotificationService], // Component-level providers create an isolated instance for this component and its children, not the application-wide singleton.
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p class="notification" role="status">{{ message() }}</p>`,
  styles: `.notification { color:#4b5563; font-size:.9rem; }`,
})
export class NotificationComponent {
  readonly message = computed(() => this.notificationService.getMessage());

  constructor(private readonly notificationService: NotificationService) {
    this.notificationService.notify('Notifications are scoped to this component.');
  }
}

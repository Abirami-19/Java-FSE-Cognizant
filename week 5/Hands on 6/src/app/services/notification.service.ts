import { Injectable, signal } from '@angular/core';

@Injectable()
export class NotificationService {
  private readonly latestMessage = signal('No new notifications');

  getMessage(): string {
    return this.latestMessage();
  }

  notify(message: string): void {
    this.latestMessage.set(message);
  }
}

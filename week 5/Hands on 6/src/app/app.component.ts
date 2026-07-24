import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header>
      <a class="brand" routerLink="/">Student Course Portal</a>
      <nav aria-label="Main navigation">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/courses" routerLinkActive="active">Courses</a>
        <a routerLink="/profile" routerLinkActive="active">Profile</a>
      </nav>
    </header>
    <main><router-outlet /></main>
  `,
  styles: `header { display:flex; justify-content:space-between; align-items:center; padding:16px 40px; background:#1e3a8a; color:#fff; } a { color:inherit; text-decoration:none; } .brand { font-weight:700; } nav { display:flex; gap:18px; } nav a { opacity:.8; } nav a.active, nav a:hover { opacity:1; text-decoration:underline; }`,
})
export class AppComponent {}

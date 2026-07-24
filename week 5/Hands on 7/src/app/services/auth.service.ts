import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = true;
  isAuthenticated(): boolean { return this.isLoggedIn; }
}

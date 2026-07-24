import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({ standalone: true, imports: [RouterLink], template: `<section class="not-found"><h2>Page not found</h2><p>The page you requested does not exist.</p><a routerLink="/">Return home</a></section>`, styles: [`.not-found{padding:40px}`] })
export class NotFoundComponent {}

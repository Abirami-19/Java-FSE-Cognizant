import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { GlobalErrorService } from './services/global-error.service';
import { LoadingService } from './services/loading.service';
@Component({ selector: 'app-root', standalone: true, imports: [AsyncPipe, RouterOutlet, HeaderComponent], templateUrl: './app.html', styleUrl: './app.css' })
export class App { readonly loadingService = inject(LoadingService); readonly globalErrorService = inject(GlobalErrorService); }

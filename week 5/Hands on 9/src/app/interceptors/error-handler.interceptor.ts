import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { GlobalErrorService } from '../services/global-error.service';

export const errorHandlerInterceptor: HttpInterceptorFn = (request, next) => {
  const router = inject(Router);
  const globalError = inject(GlobalErrorService);

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        globalError.show('Your session has expired. Please sign in again.');
        void router.navigateByUrl('/');
      }
      if (error.status === 500) {
        console.error('Server error:', error);
        globalError.show('The server encountered an error. Please try again shortly.');
      }
      return throwError(() => error);
    }),
  );
};

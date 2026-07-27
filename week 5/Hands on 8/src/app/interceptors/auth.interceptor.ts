import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) =>
  next(request.clone({ setHeaders: { Authorization: 'Bearer mocktoken-12345' } }));

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { CourseEffects } from './store/course/course.effects';
import { COURSE_FEATURE_KEY, courseReducer } from './store/course/course.reducer';
import { ENROLLMENT_FEATURE_KEY, enrollmentReducer } from './store/enrollment/enrollment.reducer';

export const appConfig: ApplicationConfig = {

  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, errorHandlerInterceptor, loadingInterceptor])),
    provideStore(),
    provideState(COURSE_FEATURE_KEY, courseReducer),
    provideState(ENROLLMENT_FEATURE_KEY, enrollmentReducer),
    provideEffects(CourseEffects),
    provideStoreDevtools({ maxAge: 25 }),
  ],
};

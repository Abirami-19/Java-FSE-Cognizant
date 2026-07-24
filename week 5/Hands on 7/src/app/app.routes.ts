import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CourseDetailComponent } from './components/course-detail.component';
import { CoursesLayoutComponent } from './components/courses-layout.component';
import { NotFoundComponent } from './components/not-found.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HomeComponent } from './components/home/home.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'courses', component: CoursesLayoutComponent, children: [{ path: '', component: CourseListComponent }, { path: ':id', component: CourseDetailComponent }] },
  { path: 'profile', component: StudentProfileComponent, canActivate: [AuthGuard] },
  { path: 'enroll', canActivate: [AuthGuard], loadChildren: () => import('./features/enrollment/enrollment.module').then((m) => m.EnrollmentModule) },
  { path: '**', component: NotFoundComponent },
];

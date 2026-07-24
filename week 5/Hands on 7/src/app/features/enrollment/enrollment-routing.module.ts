import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedChangesGuard } from '../../guards/unsaved-changes.guard';
import { EnrollmentFormComponent } from './enrollment-form.component';
import { ReactiveEnrollmentFormComponent } from './reactive-enrollment-form.component';
const routes: Routes = [{ path: '', component: ReactiveEnrollmentFormComponent, canDeactivate: [UnsavedChangesGuard] }, { path: 'simple', component: EnrollmentFormComponent }];
@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] })
export class EnrollmentRoutingModule {}

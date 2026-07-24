import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

interface EnrollmentFormHost {
  enrollForm: { dirty: boolean };
}

@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<EnrollmentFormHost> {
  canDeactivate(component: EnrollmentFormHost): boolean {
    return !component.enrollForm.dirty || window.confirm('You have unsaved changes. Leave?');
  }
}

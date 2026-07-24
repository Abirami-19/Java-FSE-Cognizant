import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({ standalone: true, imports: [ReactiveFormsModule], template: `<section class="form"><h2>Course Enrollment</h2><form [formGroup]="enrollForm" (ngSubmit)="submit()"><label>Student name<input formControlName="studentName"></label><label>Course<input formControlName="course"></label><button type="submit" [disabled]="enrollForm.invalid">Enroll</button></form>@if(submitted){<p>Your enrollment has been submitted.</p>}</section>`, styles: [`.form{padding:30px;max-width:500px}.form form{display:grid;gap:16px}.form input{display:block;margin-top:6px;padding:8px;width:100%}.form button{width:max-content;padding:8px 14px}`] })
export class ReactiveEnrollmentFormComponent {
  readonly enrollForm = new FormGroup({ studentName: new FormControl('', { nonNullable: true, validators: [Validators.required] }), course: new FormControl('', { nonNullable: true, validators: [Validators.required] }) });
  submitted = false;
  submit(): void { if (this.enrollForm.valid) { this.submitted = true; this.enrollForm.markAsPristine(); } }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({ standalone: true, imports: [FormsModule], template: `<section class="form"><h2>Enrollment Form</h2><label>Course <input [(ngModel)]="courseName" name="courseName"></label><button type="button" (click)="submitted = true">Submit</button>@if(submitted){<p>Enrollment submitted for {{ courseName || 'your selected course' }}.</p>}</section>`, styles: [`.form{padding:30px;display:grid;gap:16px;max-width:500px}.form input{display:block;margin-top:6px;padding:8px;width:100%}.form button{width:max-content;padding:8px 14px}`] })
export class EnrollmentFormComponent { courseName = ''; submitted = false; }

import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list', standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './course-list.component.html', styleUrl: './course-list.component.css',
})
export class CourseListComponent implements OnInit {
  private readonly courseService = inject(CourseService);
  private readonly formBuilder = inject(FormBuilder);
  courses: Course[] = [];
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  editingCourseId: number | null = null;
  readonly courseForm = this.formBuilder.nonNullable.group({
    title: ['', Validators.required], description: ['', Validators.required], credits: [1, [Validators.required, Validators.min(1)]],
  });

  ngOnInit(): void { this.loadCourses(); }
  loadCourses(): void {
    this.isLoading = true; this.errorMessage = '';
    this.courseService.getCourses().subscribe({
      next: (courses) => (this.courses = courses),
      error: (error: Error) => { this.errorMessage = error.message; this.isLoading = false; },
      complete: () => (this.isLoading = false),
    });
  }
  saveCourse(): void {
    if (this.courseForm.invalid) { this.courseForm.markAllAsTouched(); return; }
    const value = this.courseForm.getRawValue();
    const request = this.editingCourseId === null ? this.courseService.createCourse(value) : this.courseService.updateCourse({ id: this.editingCourseId, ...value });
    request.subscribe({ next: () => { this.successMessage = this.editingCourseId === null ? 'Course created successfully.' : 'Course updated successfully.'; this.cancelEdit(); this.loadCourses(); }, error: (error: Error) => (this.errorMessage = error.message) });
  }
  editCourse(course: Course): void { this.editingCourseId = course.id; this.courseForm.setValue({ title: course.title, description: course.description, credits: course.credits }); this.successMessage = ''; }
  cancelEdit(): void { this.editingCourseId = null; this.courseForm.reset({ title: '', description: '', credits: 1 }); }
  deleteCourse(course: Course): void {
    if (!confirm(`Delete ${course.title}?`)) return;
    this.errorMessage = '';
    this.courseService.deleteCourse(course.id).subscribe({ next: () => { this.successMessage = 'Course deleted successfully.'; this.loadCourses(); }, error: (error: Error) => (this.errorMessage = error.message) });
  }
}

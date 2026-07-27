import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course';
import * as CourseActions from '../../store/course/course.actions';
import {
  selectAllCourses,
  selectCoursesError,
  selectCoursesLoading,
  selectCoursesSuccessMessage,
} from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [AsyncPipe, CourseCard, ReactiveFormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  private readonly store = inject(Store);

  readonly courses$ = this.store.select(selectAllCourses);
  readonly loading$ = this.store.select(selectCoursesLoading);
  readonly error$ = this.store.select(selectCoursesError);
  readonly successMessage$ = this.store.select(selectCoursesSuccessMessage);
  editingCourseId: number | null = null;
  readonly courseForm = this.formBuilder.nonNullable.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    credits: [1, [Validators.required, Validators.min(1)]],
  });

  ngOnInit(): void {
    this.store.dispatch(CourseActions.loadCourses());
  }

  saveCourse(): void {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
      return;
    }

    const course = this.courseForm.getRawValue();
    if (this.editingCourseId === null) {
      this.store.dispatch(CourseActions.createCourse({ course }));
    } else {
      this.store.dispatch(CourseActions.updateCourse({ course: { id: this.editingCourseId, ...course } }));
    }
    this.cancelEdit();
  }

  editCourse(course: Course): void {
    this.editingCourseId = course.id;
    this.courseForm.setValue({ title: course.title, description: course.description, credits: course.credits });
  }

  cancelEdit(): void {
    this.editingCourseId = null;
    this.courseForm.reset({ title: '', description: '', credits: 1 });
  }

  deleteCourse(course: Course): void {
    if (confirm(`Delete ${course.title}?`)) {
      this.store.dispatch(CourseActions.deleteCourse({ courseId: course.id }));
    }
  }
}

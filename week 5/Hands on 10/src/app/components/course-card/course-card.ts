import { AsyncPipe } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Course } from '../../models/course';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  imports: [AsyncPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  private readonly store = inject(Store);

  readonly course = input.required<Course>();
  readonly edit = output<Course>();
  readonly remove = output<Course>();
  readonly enrolledIds$ = this.store.select(selectEnrolledIds);

  toggleEnrollment(enrolledCourseIds: number[]): void {
    const courseId = this.course().id;
    this.store.dispatch(enrolledCourseIds.includes(courseId)
      ? unenrollFromCourse({ courseId })
      : enrollInCourse({ courseId }));
  }
}

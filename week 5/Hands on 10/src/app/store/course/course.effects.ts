import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CourseService } from '../../services/course.service';
import * as CourseActions from './course.actions';

@Injectable()
export class CourseEffects {
  private readonly actions$ = inject(Actions);
  private readonly courseService = inject(CourseService);

  readonly loadCourses$ = createEffect(() => this.actions$.pipe(
    ofType(CourseActions.loadCourses),
    switchMap(() => this.courseService.getCourses().pipe(
      map((courses) => CourseActions.loadCoursesSuccess({ courses })),
      catchError((error: unknown) => of(CourseActions.loadCoursesFailure({ error: this.getErrorMessage(error) }))),
    )),
  ));

  readonly createCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CourseActions.createCourse),
    switchMap(({ course }) => this.courseService.createCourse(course).pipe(
      map((createdCourse) => CourseActions.createCourseSuccess({ course: createdCourse })),
      catchError((error: unknown) => of(CourseActions.saveCourseFailure({ error: this.getErrorMessage(error) }))),
    )),
  ));

  readonly updateCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CourseActions.updateCourse),
    switchMap(({ course }) => this.courseService.updateCourse(course).pipe(
      map((updatedCourse) => CourseActions.updateCourseSuccess({ course: updatedCourse })),
      catchError((error: unknown) => of(CourseActions.saveCourseFailure({ error: this.getErrorMessage(error) }))),
    )),
  ));

  readonly deleteCourse$ = createEffect(() => this.actions$.pipe(
    ofType(CourseActions.deleteCourse),
    switchMap(({ courseId }) => this.courseService.deleteCourse(courseId).pipe(
      map(() => CourseActions.deleteCourseSuccess({ courseId })),
      catchError((error: unknown) => of(CourseActions.saveCourseFailure({ error: this.getErrorMessage(error) }))),
    )),
  ));

  private getErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : 'An unexpected error occurred.';
  }
}

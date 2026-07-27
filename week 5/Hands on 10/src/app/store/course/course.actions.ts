import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course';

export const loadCourses = createAction('[Course] Load Courses');
export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>(),
);
export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>(),
);

export const createCourse = createAction(
  '[Course] Create Course',
  props<{ course: Omit<Course, 'id'> }>(),
);
export const createCourseSuccess = createAction(
  '[Course] Create Course Success',
  props<{ course: Course }>(),
);
export const updateCourse = createAction('[Course] Update Course', props<{ course: Course }>());
export const updateCourseSuccess = createAction(
  '[Course] Update Course Success',
  props<{ course: Course }>(),
);
export const deleteCourse = createAction('[Course] Delete Course', props<{ courseId: number }>());
export const deleteCourseSuccess = createAction(
  '[Course] Delete Course Success',
  props<{ courseId: number }>(),
);
export const saveCourseFailure = createAction(
  '[Course] Save Course Failure',
  props<{ error: string }>(),
);

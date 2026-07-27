import { createReducer, on } from '@ngrx/store';
import * as CourseActions from './course.actions';
import { initialCourseState } from './course.state';

export const COURSE_FEATURE_KEY = 'course';

export const courseReducer = createReducer(
  initialCourseState,
  on(CourseActions.loadCourses, (state) => ({ ...state, loading: true, error: null, successMessage: null })),
  on(CourseActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses,
    loading: false,
    error: null,
  })),
  on(CourseActions.loadCoursesFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(CourseActions.createCourse, CourseActions.updateCourse, CourseActions.deleteCourse, (state) => ({
    ...state,
    loading: true,
    error: null,
    successMessage: null,
  })),
  on(CourseActions.createCourseSuccess, (state, { course }) => ({
    ...state,
    courses: [...state.courses, course],
    loading: false,
    successMessage: 'Course created successfully.',
  })),
  on(CourseActions.updateCourseSuccess, (state, { course }) => ({
    ...state,
    courses: state.courses.map((existingCourse) => existingCourse.id === course.id ? course : existingCourse),
    loading: false,
    successMessage: 'Course updated successfully.',
  })),
  on(CourseActions.deleteCourseSuccess, (state, { courseId }) => ({
    ...state,
    courses: state.courses.filter((course) => course.id !== courseId),
    loading: false,
    successMessage: 'Course deleted successfully.',
  })),
  on(CourseActions.saveCourseFailure, (state, { error }) => ({ ...state, loading: false, error })),
);

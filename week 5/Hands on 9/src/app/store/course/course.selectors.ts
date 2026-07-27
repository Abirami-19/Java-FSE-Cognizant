import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COURSE_FEATURE_KEY } from './course.reducer';
import { CourseState } from './course.state';

export const selectCourseState = createFeatureSelector<CourseState>(COURSE_FEATURE_KEY);
export const selectAllCourses = createSelector(selectCourseState, (state) => state.courses);
export const selectCoursesLoading = createSelector(selectCourseState, (state) => state.loading);
export const selectCoursesError = createSelector(selectCourseState, (state) => state.error);
export const selectCoursesSuccessMessage = createSelector(selectCourseState, (state) => state.successMessage);

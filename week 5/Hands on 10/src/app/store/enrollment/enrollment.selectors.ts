import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAllCourses } from '../course/course.selectors';
import { ENROLLMENT_FEATURE_KEY } from './enrollment.reducer';
import { EnrollmentState } from './enrollment.state';

export const selectEnrollmentState = createFeatureSelector<EnrollmentState>(ENROLLMENT_FEATURE_KEY);
export const selectEnrolledIds = createSelector(selectEnrollmentState, (state) => state.enrolledCourseIds);
export const selectEnrolledCourses = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses, enrolledIds) => courses.filter((course) => enrolledIds.includes(course.id)),
);

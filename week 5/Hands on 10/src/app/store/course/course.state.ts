import { Course } from '../../models/course';

export interface CourseState {
  readonly courses: Course[];
  readonly loading: boolean;
  readonly error: string | null;
  readonly successMessage: string | null;
}

export const initialCourseState: CourseState = {
  courses: [],
  loading: false,
  error: null,
  successMessage: null,
};

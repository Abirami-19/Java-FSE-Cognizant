import { Injectable, signal } from '@angular/core';

import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private readonly courses = signal<Course[]>([
    { id: 1, name: 'Angular Fundamentals', code: 'ANG-201', credits: 4, gradeStatus: 'pending' },
    { id: 2, name: 'TypeScript Essentials', code: 'TS-202', credits: 3, gradeStatus: 'passed' },
    { id: 3, name: 'Web Application Design', code: 'WEB-210', credits: 3, gradeStatus: 'pending' },
    { id: 4, name: 'Database Systems', code: 'DB-220', credits: 4, gradeStatus: 'passed' },
    { id: 5, name: 'Software Testing', code: 'ST-230', credits: 3, gradeStatus: 'failed' },
  ]);

  getCourses(): Course[] {
    return this.courses();
  }

  getCourseById(id: number): Course | undefined {
    return this.courses().find((course) => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.update((courses) => [...courses, course]);
  }
}

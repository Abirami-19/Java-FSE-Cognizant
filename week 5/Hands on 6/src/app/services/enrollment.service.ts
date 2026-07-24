import { Injectable, signal } from '@angular/core';

import { Course } from '../models/course.model';
import { CourseService } from './course.service';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly enrolledCourseIds = signal<number[]>([]);

  constructor(private readonly courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId) && this.courseService.getCourseById(courseId)) {
      this.enrolledCourseIds.update((courseIds) => [...courseIds, courseId]);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds.update((courseIds) => courseIds.filter((id) => id !== courseId));
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds().includes(courseId);
  }

  getEnrolledCourses(): Course[] {
    return this.enrolledCourseIds()
      .map((courseId) => this.courseService.getCourseById(courseId))
      .filter((course): course is Course => course !== undefined);
  }
}

import { Injectable, signal } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from './course.service';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly enrolledCourseIds = signal<number[]>([]);
  constructor(private readonly courseService: CourseService) {}
  enroll(courseId: number): void { if (!this.isEnrolled(courseId) && this.courseService.getCourseById(courseId)) this.enrolledCourseIds.update((ids) => [...ids, courseId]); }
  unenroll(courseId: number): void { this.enrolledCourseIds.update((ids) => ids.filter((id) => id !== courseId)); }
  isEnrolled(courseId: number): boolean { return this.enrolledCourseIds().includes(courseId); }
  getEnrolledCourses(): Course[] { return this.enrolledCourseIds().map((id) => this.courseService.getCourseById(id)).filter((course): course is Course => course !== undefined); }
}

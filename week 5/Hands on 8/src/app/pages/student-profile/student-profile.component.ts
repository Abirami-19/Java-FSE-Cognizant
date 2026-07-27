import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { catchError, EMPTY, Subject, switchMap } from 'rxjs';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
@Component({ selector: 'app-student-profile', standalone: true, imports: [AsyncPipe], templateUrl: './student-profile.component.html', styleUrl: './student-profile.component.css' })
export class StudentProfileComponent implements OnInit {
  private readonly courseService = inject(CourseService); private readonly enrollmentService = inject(EnrollmentService);
  readonly selectedCourse$ = new Subject<number>(); courses: Course[] = []; isLoading = false; errorMessage = '';
  // switchMap cancels an earlier student request when the user selects another course.
  readonly students$ = this.selectedCourse$.pipe(switchMap((courseId) => this.enrollmentService.getStudentsByCourse(courseId)), catchError((error: Error) => { this.errorMessage = error.message; return EMPTY; }));
  ngOnInit(): void { this.isLoading = true; this.courseService.getCourses().subscribe({ next: c => this.courses = c, error: (e: Error) => { this.errorMessage = e.message; this.isLoading = false; }, complete: () => this.isLoading = false }); }
  selectCourse(event: Event): void { const id = Number((event.target as HTMLSelectElement).value); if (id) this.selectedCourse$.next(id); }
}

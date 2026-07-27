import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable, of, switchMap } from 'rxjs';
import { Enrollment } from '../models/enrollment';
import { Student } from '../models/student';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000';

  getEnrollments(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/enrollments`);
  }

  getStudentsByCourse(courseId: number): Observable<Student[]> {
    return this.http.get<Enrollment[]>(`${this.apiUrl}/enrollments?courseId=${courseId}`).pipe(
      switchMap((enrollments) => {
        if (!enrollments.length) {
          return of([] as Student[]);
        }

        return forkJoin(
          enrollments.map((enrollment) =>
            this.http.get<Student>(`${this.apiUrl}/students/${enrollment.studentId}`),
          ),
        );
      }),
    );
  }

  createEnrollment(enrollment: Omit<Enrollment, 'id'>): Observable<Enrollment> {
    return this.http.post<Enrollment>(`${this.apiUrl}/enrollments`, enrollment);
  }

  deleteEnrollment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/enrollments/${id}`);
  }
}

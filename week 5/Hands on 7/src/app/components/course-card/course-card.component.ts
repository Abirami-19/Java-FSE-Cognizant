import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { Course } from '../../models/course.model';
import { Router } from '@angular/router';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="course-card" role="link" tabindex="0" (click)="openCourse()" (keydown.enter)="openCourse()">
      <div>
        <h3>{{ course().name }}</h3>
        <p>{{ course().code }} · {{ course().credits }} credits</p>
        <span [class]="'status ' + course().gradeStatus">{{ course().gradeStatus }}</span>
      </div>
      <button type="button" (click)="$event.stopPropagation(); toggleEnrollment()">
        {{ isEnrolled() ? 'Unenroll' : 'Enroll' }}
      </button>
    </article>
  `,
  styles: `
    .course-card { display:flex; align-items:center; justify-content:space-between; gap:16px; border:1px solid lightgray; padding:20px; border-radius:8px; background:#fff; }
    h3 { margin:0 0 6px; } p { margin:0 0 10px; color:#4b5563; } button { border:0; border-radius:6px; padding:9px 14px; cursor:pointer; color:#fff; background:#2563eb; } .status { text-transform:capitalize; font-size:.85rem; } .passed { color:#15803d; } .failed { color:#dc2626; } .pending { color:#b45309; }
  `,
})
export class CourseCardComponent {
  readonly course = input.required<Course>();
  readonly isEnrolled = computed(() => this.enrollmentService.isEnrolled(this.course().id));

  constructor(private readonly enrollmentService: EnrollmentService, private readonly router: Router) {}

  openCourse(): void {
    void this.router.navigate(['courses', this.course().id]);
  }

  toggleEnrollment(): void {
    const courseId = this.course().id;
    if (this.enrollmentService.isEnrolled(courseId)) {
      this.enrollmentService.unenroll(courseId);
      return;
    }

    this.enrollmentService.enroll(courseId);
  }
}

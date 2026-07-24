import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { CourseSummaryWidgetComponent } from '../course-summary-widget/course-summary-widget.component';
import { NotificationComponent } from '../notification/notification.component';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-home',
  imports: [CourseSummaryWidgetComponent, NotificationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="home">
      <h1>Welcome to Student Course Portal</h1>
      <p>Browse available courses and monitor your academic progress.</p>
      <div class="stats">
        <section class="card"><h3>Total Courses</h3><p>{{ totalCourses() }}</p></section>
        <app-course-summary-widget />
        <section class="card"><h3>Enrolled</h3><p>{{ enrolledCourses() }}</p></section>
        <section class="card"><h3>GPA</h3><p>3.8</p></section>
      </div>
      <app-notification />
    </section>
  `,
  styles: `.home { padding:40px; } .stats { display:flex; flex-wrap:wrap; gap:20px; margin-top:30px; } .card { border:1px solid lightgray; padding:20px; width:180px; border-radius:8px; text-align:center; background:#fff; } .card h3 { margin:0; } .card p { margin:10px 0 0; font-size:2rem; font-weight:700; }`,
})
export class HomeComponent {
  readonly totalCourses = computed(() => this.courseService.getCourses().length);
  readonly enrolledCourses = computed(() => this.enrollmentService.getEnrolledCourses().length);

  constructor(
    private readonly courseService: CourseService,
    private readonly enrollmentService: EnrollmentService,
  ) {}
}

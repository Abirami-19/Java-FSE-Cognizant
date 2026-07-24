import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-student-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="profile">
      <h2>Student Profile Page</h2>
      <h3>Enrolled Courses</h3>
      @if (enrolledCourses().length) {
        <ul>
          @for (course of enrolledCourses(); track course.id) {
            <li>{{ course.name }} ({{ course.code }}) — {{ course.credits }} credits</li>
          }
        </ul>
      } @else {
        <p>You are not enrolled in any courses yet.</p>
      }
    </section>
  `,
  styles: `h2 { padding:20px; margin:0; } .profile { padding-bottom:20px; } .profile h3, .profile p, ul { margin-left:20px; } li { margin:8px 0; }`,
})
export class StudentProfileComponent {
  readonly enrolledCourses = computed(() => this.enrollmentService.getEnrolledCourses());

  constructor(private readonly enrollmentService: EnrollmentService) {}
}

import { ChangeDetectionStrategy, Component, computed } from '@angular/core';

import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="summary-card" aria-label="Course summary">
      <h3>Total Courses</h3>
      <p>{{ totalCourses() }}</p>
    </section>
  `,
  styles: `.summary-card { border:1px solid lightgray; padding:20px; width:180px; border-radius:8px; text-align:center; background:#fff; } h3 { margin:0; } p { margin:10px 0 0; font-size:2rem; font-weight:700; }`,
})
export class CourseSummaryWidgetComponent {
  readonly totalCourses = computed(() => this.courseService.getCourses().length);

  constructor(private readonly courseService: CourseService) {}
}

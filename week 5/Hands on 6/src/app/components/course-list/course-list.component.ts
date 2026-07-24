import { ChangeDetectionStrategy, Component, computed, OnInit } from '@angular/core';

import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  imports: [CourseCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="course-list">
      <h2>Course List Page</h2>
      <div class="courses">
        @for (course of courses(); track course.id) {
          <app-course-card [course]="course" />
        }
      </div>
    </section>
  `,
  styles: `h2 { padding:20px; margin:0; } .course-list { padding-bottom:20px; } .courses { display:grid; gap:16px; padding:0 20px; max-width:850px; }`,
})
export class CourseListComponent implements OnInit {
  readonly courses = computed(() => this.courseService.getCourses());

  constructor(private readonly courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses();
  }
}

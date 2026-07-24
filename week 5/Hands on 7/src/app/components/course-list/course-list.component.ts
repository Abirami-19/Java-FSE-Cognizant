import { ChangeDetectionStrategy, Component, computed, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  imports: [CourseCardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="course-list">
      <h2>Course List Page</h2>
      <input aria-label="Search courses" [value]="searchTerm()" (input)="onSearch($any($event.target).value)" placeholder="Search courses" />
      <div class="courses">
        @for (course of filteredCourses(); track course.id) {
          <app-course-card [course]="course" />
        }
      </div>
    </section>
  `,
  styles: `h2 { padding:20px; margin:0; } input { margin:0 20px 16px; padding:10px; width:min(500px, calc(100% - 40px)); } .course-list { padding-bottom:20px; } .courses { display:grid; gap:16px; padding:0 20px; max-width:850px; }`,
})
export class CourseListComponent implements OnInit {
  readonly searchTerm = signal('');
  readonly filteredCourses = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    return this.courseService.getCourses().filter((course) => !term || `${course.name} ${course.code}`.toLowerCase().includes(term));
  });

  constructor(private readonly courseService: CourseService, private readonly router: Router, private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.searchTerm.set(this.route.snapshot.queryParamMap.get('search') ?? '');
  }

  onSearch(searchTerm: string): void {
    this.searchTerm.set(searchTerm);
    void this.router.navigate(['courses'], { queryParams: { search: searchTerm || null } });
  }
}

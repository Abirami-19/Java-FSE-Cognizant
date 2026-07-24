import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../../models/course';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, HighlightDirective],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  isLoading = true;
  hasError = false;
  errorMessage = '';

  courses: Course[] = [
    {
      id: 1,
      title: 'Angular',
      instructor: 'John',
      credits: 3,
      enrolled: true,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      title: 'Java',
      instructor: 'David',
      credits: 4,
      enrolled: false,
      gradeStatus: 'pending'
    },
    {
      id: 3,
      title: 'Python',
      instructor: 'Lisa',
      credits: null,
      enrolled: true,
      gradeStatus: 'failed'
    }
  ];

  ngOnInit(): void {
    try {
      if (!this.courses || this.courses.length === 0) {
        throw new Error('No course data available.');
      }
      // Simulate data loading
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    } catch (error) {
      this.isLoading = false;
      this.hasError = true;
      this.errorMessage = 'Failed to load courses. Please try again later.';
    }
  }

  /**
   * trackBy prevents Angular from recreating every card
   * whenever the array changes. Only changed items are updated.
   */
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

}

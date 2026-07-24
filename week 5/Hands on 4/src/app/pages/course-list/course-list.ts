import { Component, TrackByFunction } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard, HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses = [
    {
      id: 1,
      name: 'Angular',
      code: 'CS101',
      credits: 3,
      gradeStatus: 'passed'
    },
    {
      id: 2,
      name: 'Java',
      code: 'CS102',
      credits: 4,
      gradeStatus: 'failed'
    },
    {
      id: 3,
      name: 'Python',
      code: 'CS103',
      credits: 2,
      gradeStatus: 'pending'
    }
  ];

  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

  onEnroll(id: number) {
    console.log(id);
  }
}
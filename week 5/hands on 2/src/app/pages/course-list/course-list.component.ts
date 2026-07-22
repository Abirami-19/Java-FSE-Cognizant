import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card.component';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  courses = [
    { id: 1, name: 'Angular', code: 'ANG101', credits: 4 },
    { id: 2, name: 'Java', code: 'JAVA102', credits: 4 },
    { id: 3, name: 'Spring Boot', code: 'SPR103', credits: 3 },
    { id: 4, name: 'Python', code: 'PY104', credits: 3 },
    { id: 5, name: 'React', code: 'RE105', credits: 4 }
  ];

  selectedCourseId = 0;

  onEnroll(id: number) {
    console.log('Enrolling in course:', id);
    this.selectedCourseId = id;
  }
}
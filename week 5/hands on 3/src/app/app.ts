import { Component } from '@angular/core';
import { CourseListComponent } from './components/course-list/course-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

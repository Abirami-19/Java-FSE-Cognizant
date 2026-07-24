import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input() course!: Course;

  isExpanded = false;

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  get borderColor(): string {

    switch (this.course.gradeStatus) {

      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      default:
        return 'gray';

    }

  }

  /**
   * Getter keeps the HTML template clean and readable.
   */

  get cardClasses() {

    return {

      'card--enrolled': this.course.enrolled,

      'card--full': (this.course.credits ?? 0) >= 4,

      expanded: this.isExpanded

    };

  }

}
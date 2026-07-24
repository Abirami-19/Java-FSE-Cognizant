import { Component, Output, EventEmitter, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
  CommonModule,
  CreditLabelPipe
],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  readonly course = input.required<{
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: string;
}>();

  @Output() enrollRequested = new EventEmitter<number>();

  isExpanded = false;
  isEnrolled = false;

  enroll() {
    this.isEnrolled = true;
    this.enrollRequested.emit(this.course().id);
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  // Getter keeps the template clean and moves logic into TypeScript.
  get cardClasses() {
    return {
      'card--enrolled': this.isEnrolled,
      'card--full': this.course().credits >= 4,
      'expanded': this.isExpanded
    };
  }

  get borderColor() {
    switch (this.course().gradeStatus) {
      case 'passed':
        return 'green';
      case 'failed':
        return 'red';
      case 'pending':
        return 'gray';
      default:
        return 'black';
    }
  }
}
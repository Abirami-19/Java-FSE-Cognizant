import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { StudentProfileComponent } from './student-profile.component';

describe('StudentProfileComponent', () => {
  let fixture: ComponentFixture<StudentProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentProfileComponent],
      providers: [
        { provide: CourseService, useValue: { getCourses: () => of([]) } },
        { provide: EnrollmentService, useValue: { getStudentsByCourse: () => of([]) } },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(StudentProfileComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});

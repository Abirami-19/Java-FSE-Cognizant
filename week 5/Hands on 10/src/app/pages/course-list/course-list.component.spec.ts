import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Course } from '../../models/course';
import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', () => {
  const mockCourses: Course[] = [
    { id: 1, title: 'Data Structures', description: 'Algorithms and structures.', credits: 4 },
    { id: 2, title: 'Web Development', description: 'Modern web applications.', credits: 3 },
  ];
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [provideMockStore({
        initialState: {
          course: { courses: mockCourses, loading: false, error: null, successMessage: null },
          enrollment: { enrolledCourseIds: [] },
        },
      })],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    store = TestBed.inject(MockStore);
  });

  it('renders one course card for every course in the mock state', () => {
    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('app-course-card')).length).toBe(2);
  });

  it('renders the loading message when the course state is loading', () => {
    store.setState({
      course: { courses: [], loading: true, error: null, successMessage: null },
      enrollment: { enrolledCourseIds: [] },
    });
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.course-page')).nativeElement.textContent).toContain('Loading courses');
  });

  it('renders an error message from the mock state', () => {
    store.setState({
      course: { courses: [], loading: false, error: 'Unable to load courses.', successMessage: null },
      enrollment: { enrolledCourseIds: [] },
    });
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('[role="alert"]')).nativeElement.textContent).toContain('Unable to load courses.');
  });
});

import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { vi } from 'vitest';
import { Course } from '../../models/course';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { CourseCard } from './course-card';

describe('CourseCard', () => {
  const mockCourse: Course = {
    id: 1,
    title: 'Data Structures',
    description: 'Core data structures and algorithms.',
    credits: 4,
  };
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [provideMockStore({ initialState: { enrollment: { enrolledCourseIds: [] } } })],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.componentRef.setInput('course', mockCourse);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the course title supplied through its input', () => {
    const title = fixture.debugElement.query(By.css('h3')).nativeElement as HTMLElement;

    expect(title.textContent).toContain('Data Structures');
  });

  it('dispatches enrollInCourse when Enroll is clicked', () => {
    const dispatchSpy = vi.spyOn(store, 'dispatch');
    const enrollButton = fixture.debugElement.queryAll(By.css('button'))[0];

    enrollButton.triggerEventHandler('click');

    expect(dispatchSpy).toHaveBeenCalledWith(enrollInCourse({ courseId: 1 }));
  });

  it('dispatches unenrollFromCourse when the course is already enrolled', () => {
    store.setState({ enrollment: { enrolledCourseIds: [1] } });
    fixture.detectChanges();
    const dispatchSpy = vi.spyOn(store, 'dispatch');
    const enrollButton = fixture.debugElement.queryAll(By.css('button'))[0];

    expect(enrollButton.nativeElement.textContent).toContain('Unenroll');
    enrollButton.triggerEventHandler('click');

    expect(dispatchSpy).toHaveBeenCalledWith(unenrollFromCourse({ courseId: 1 }));
  });

  it('emits the selected course when Edit is clicked', () => {
    const editSpy = vi.spyOn(component.edit, 'emit');
    const editButton = fixture.debugElement.queryAll(By.css('button'))[1];

    editButton.triggerEventHandler('click');

    expect(editSpy).toHaveBeenCalledWith(mockCourse);
  });
});

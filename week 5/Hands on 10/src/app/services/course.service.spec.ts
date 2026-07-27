import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Course } from '../models/course';
import { CourseService } from './course.service';

describe('CourseService', () => {
  const apiUrl = 'http://localhost:3000/courses';
  const mockCourses: Course[] = [
    { id: 1, title: 'Data Structures', description: 'Algorithms and structures.', credits: 4 },
    { id: 2, title: 'Web Development', description: 'Modern web applications.', credits: 3 },
  ];
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('gets courses with a GET request', () => {
    let receivedCourses: Course[] | undefined;

    service.getCourses().subscribe((courses) => (receivedCourses = courses));
    const request = httpMock.expectOne(apiUrl);
    expect(request.request.method).toBe('GET');
    request.flush(mockCourses);

    expect(receivedCourses?.length).toBe(2);
  });

  it('emits the application error after retrying a failed request', () => {
    let receivedError: Error | undefined;

    service.getCourses().subscribe({ error: (error: Error) => (receivedError = error) });
    for (let attempt = 0; attempt < 3; attempt += 1) {
      httpMock.expectOne(apiUrl).flush('Server error', { status: 500, statusText: 'Internal Server Error' });
    }

    expect(receivedError?.message).toBe('Failed to load courses. Please try again.');
  });
});

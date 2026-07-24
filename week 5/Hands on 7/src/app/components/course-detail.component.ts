import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Course } from '../models/course';
import { CourseService } from '../services/course.service';

@Component({ standalone: true, selector: 'app-course-detail', imports: [RouterLink], template: `<section class="detail">@if (course) { <a routerLink="/courses">← Back to courses</a><h2>{{ course.name }}</h2><dl><dt>Course code</dt><dd>{{ course.code }}</dd><dt>Credits</dt><dd>{{ course.credits }}</dd><dt>Grade status</dt><dd>{{ course.gradeStatus }}</dd></dl> } @else { <h2>Course not found</h2><a routerLink="/courses">Back to courses</a> }</section>`, styles: [`.detail{padding:40px}.detail dl{display:grid;grid-template-columns:140px 1fr;gap:12px;max-width:500px}.detail dt{font-weight:700}.detail dd{margin:0;text-transform:capitalize}`] })
export class CourseDetailComponent { readonly course: Course | undefined; constructor(route: ActivatedRoute, courseService: CourseService) { const id = Number(route.snapshot.paramMap.get('id')); this.course = Number.isInteger(id) ? courseService.getCourseById(id) : undefined; } }

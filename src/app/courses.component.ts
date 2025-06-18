import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  standalone: false,
  // insinde the curly braces you can write any valid ts
  template: `<h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul> `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses;

  // with this service = new CourseService
  // has to be registered as an dependecy in the app.module in "provider"
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}

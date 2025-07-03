import { Component } from '@angular/core';

@Component({
  selector: 'trackBy',
  standalone: false,
  templateUrl: './track-by.component.html',
  styleUrl: './track-by.component.css'
})
export class TrackByComponent {
  courses: any;

  loadCourses() {
    this.courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];
  }

  trackCourse(index: number, course: any) {
    return course ? course.id : undefined
}
}

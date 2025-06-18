import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  standalone: false,
  // insinde the curly braces you can write any valid ts
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  title = 'List of courses';
  courses;
  imageUrl = 'https://tobiasbrasser.com/logo_profile.png';
  colSpan = 2;
  isActive = true;
  email = 'me@example.com';

  onSave($event: Event) {
    // trough this onDivClicked wont be triggered
    $event.stopPropagation();

    console.log('Button was clicked', $event);
  }
  onDivClicked() {
    console.log('Div was clicked');
  }

  onKeyUp() {
    console.log(this.email);
  }

  text =
    "Lorem Ipsum is simply a dummy text of the printing and typeset superset. I don't know what I am writing here but who cares";

  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1),
  };

  // with this service = new CourseService
  // has to be registered as an dependecy in the app.module in "provider"
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}

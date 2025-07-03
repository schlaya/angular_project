import { Component } from '@angular/core';

export interface Course {
  id: number;
  name: string;
}

@Component({
  selector: 'add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
  ];

  onAdd() {
    this.courses.push({
      id: this.courses.length + 1,
      name: `course` + (this.courses.length + 1),
    });
  }

  onChange(course: Course): void {
    course.name = 'UPDATED' 
  }

  /*onRemove(course: Course): void {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }*/
}

import { Component } from '@angular/core';

@Component({
  selector: 'forLoop',
  standalone: false,
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css',
})
export class ForLoopComponent {
  courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
    { id: 5, name: 'course5' },
  ];
}

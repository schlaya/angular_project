import { Component } from '@angular/core';

@Component({
  selector: 'hiddenDisplays',
  standalone: false,
  templateUrl: './hidden-displays.component.html',
  styleUrl: './hidden-displays.component.css',
})
export class HiddenDisplaysComponent {
  courses = [1, 2 ,3];
}

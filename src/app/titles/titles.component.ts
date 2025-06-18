import { Component } from '@angular/core';

@Component({
  selector: 'titles',
  standalone: false,
  templateUrl: './titles.component.html',
  styleUrl: './titles.component.css',
})
export class TitlesComponent {
  title: string = '';
}

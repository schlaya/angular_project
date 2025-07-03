import { Component } from '@angular/core';

@Component({
  selector: 'canSave',
  standalone: false,
  templateUrl: './can-save.component.html',
  styleUrl: './can-save.component.css'
})
export class CanSaveComponent {
  canSave = true;
}

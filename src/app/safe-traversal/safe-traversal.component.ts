import { Component } from '@angular/core';

@Component({
  selector: 'safeTraversal',
  standalone: false,
  templateUrl: './safe-traversal.component.html',
  styleUrl: './safe-traversal.component.css'
})
export class SafeTraversalComponent {
  task = {
    title: 'Review applications',
    assignee: null
  }
}

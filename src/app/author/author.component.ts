import { Component } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'author',
  standalone: false,
  templateUrl: './author.component.html',
  styleUrl: './author.component.css',
})
export class AuthorComponent {
  title = 'Authors';
  authors;

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
  }
}

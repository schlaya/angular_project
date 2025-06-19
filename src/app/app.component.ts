import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorites/favorites.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {


  /*post = {
    title: 'Title',
    isFavorite: true,
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed: ', eventArgs);
  }*/
}

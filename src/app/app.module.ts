import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component'; // ✅ Make sure this is imported
import { CoursesService } from './courses/courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { SummaryPipe } from './summary.pipe';
import { FavoritesComponent } from './favorites/favorites.component';
import { TitlesComponent } from './titles/titles.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent, // ✅ Declare it here
    SummaryPipe,
    FavoritesComponent,
    TitlesComponent,
    TitleCasePipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CoursesService, AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

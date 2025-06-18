import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component'; // ✅ Make sure this is imported
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent, // ✅ Declare it here
  ],
  imports: [BrowserModule],
  providers: [CoursesService, AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

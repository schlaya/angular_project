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
import { PanelComponent } from './panel/panel.component';
import { LikesComponent } from './likes/likes.component';
import { HiddenDisplaysComponent } from './hidden-displays/hidden-displays.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { AddComponent } from './change-detection/add.component';
import { TrackByComponent } from './track-by/track-by.component';
import { CanSaveComponent } from './can-save/can-save.component';
import { SafeTraversalComponent } from './safe-traversal/safe-traversal.component';

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
    PanelComponent,
    LikesComponent,
    HiddenDisplaysComponent,
    SwitchCaseComponent,
    ForLoopComponent,
    AddComponent,
    TrackByComponent,
    CanSaveComponent,
    SafeTraversalComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CoursesService, AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

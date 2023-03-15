import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { HeartComponent } from './shared/icons/heart/heart.component';
import { HeartFillComponent } from './shared/icons/heart-fill/heart-fill.component';
import { TransformGenresPipe } from './components/all-movies/transform-genres.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    AllMoviesComponent,
    HeartComponent,
    HeartFillComponent,
    TransformGenresPipe,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

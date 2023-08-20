import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieComponent,
    AddMovieComponent,
    MovieDetailsComponent,
  ],
  imports: [CommonModule, MoviesRoutingModule, FormsModule],
  exports: [MoviesListComponent, MovieComponent],
})
export class MoviesModule {}

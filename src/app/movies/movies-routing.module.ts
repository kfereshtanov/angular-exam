import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesListComponent,
  },
  {
    path: 'movies',
    component: MoviesListComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forChild(routes)]],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}

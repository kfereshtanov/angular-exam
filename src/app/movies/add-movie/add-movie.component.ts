import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})
export class AddMovieComponent {
  movie!: Movie;
  constructor(
    private movieService: MoviesService,
    private authService: AuthenticationService
  ) {}

  addMovie(form: NgForm) {
    const movie: Movie = form.value;

    if (form.invalid) {
      return;
    }

    this.movieService.addMovieToDatabase(movie);

    form.resetForm();
  }
}

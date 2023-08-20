import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/types/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent {
  @Input() movie!: Movie;
  isVisible: boolean = false;

  constructor(
    private movieService: MoviesService,
    public authService: AuthenticationService
  ) {}

  openPopup() {
    this.isVisible = !this.isVisible;
  }

  closePopup() {
    this.isVisible = false;
  }

  updateMovie(id: string | undefined, form: NgForm) {
    const movie: Movie = form.value;

    if (id !== undefined) {
      this.movieService.updateMovie(id, movie);
      this.isVisible = false;
    }
  }

  deleteMovie(id: string | undefined) {
    if (id !== undefined) {
      this.movieService.deleteMovie(id);
    }
  }
}

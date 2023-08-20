import { Component, OnInit } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { MoviesService } from 'src/app/services/movies.service';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/types/movie';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies?: Movie[];
  currentMovie?: Movie;
  moviesLoaded: boolean = false;

  constructor(
    private movieService: MoviesService,
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    return this.movieService
      .getAllMovies()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((movie) => ({
            id: movie.payload.doc.id,
            ...movie.payload.doc.data(),
          }))
        )
      )
      .subscribe((data) => {
        this.movies = data;
        this.moviesLoaded = true;
      });
  }
}

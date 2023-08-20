import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../types/movie';
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private moviesPath = '/movies';
  moviesCollection!: AngularFirestoreCollection<Movie>;

  constructor(private moviesdb: AngularFirestore) {
    this.moviesCollection = moviesdb.collection<Movie>(this.moviesPath);
  }

  addMovieToDatabase(movie: Movie): any {
    return this.moviesCollection.add({ ...movie });
  }

  // Fetch Movie List

  getAllMovies() {
    return this.moviesCollection;
  }

  // Fetch Single Movie

  getSingleMovie(id: string) {
    return this.moviesCollection
      .doc<Movie>(id)
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          const data = snapshot.payload.data();
          const id = snapshot.payload.id;
          return { id, ...data };
        })
      );
  }

  // Update Movie Object

  updateMovie(id: string, data: any): Promise<void> {
    return this.moviesCollection.doc<Movie>(id).update(data);
  }

  // Delete Movie Object

  deleteMovie(id: string): Promise<void> {
    return this.moviesCollection.doc<Movie>(id).delete();
  }
}

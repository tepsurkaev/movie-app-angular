import { Movie } from '../shared/models/response-model/Movie.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [];
  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('../../assets/data.json');
  }

  addToFavorite(movieId: number): void {
    localStorage.setItem('favoriteMovie', JSON.stringify(movieId));
  }

  getMovieIdFromLocalStorage(): number | null {
    const movieId = Number(localStorage.getItem('favoriteMovie'));

    return movieId;
  }

  removeFromFavorite(): void {
    localStorage.clear();
  }
}

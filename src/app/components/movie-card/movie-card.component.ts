import { Component, Input } from '@angular/core';

import { Movie } from '../../shared/models/response-model/Movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Input() favoriteMovieId!: number | null;
  @Input() arrayOfGenres!: string[];

  constructor(private movieService: MoviesService) {}

  addToFavorite(movieId: number): void {
    this.movieService.addToFavorite(movieId);
  }

  getMovieIdFromLocalStorage(): number | null {
    return this.movieService.getMovieIdFromLocalStorage();
  }

  removeFromFavorite(): void {
    this.movieService.removeFromFavorite();
  }
}

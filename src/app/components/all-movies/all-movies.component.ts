import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { Movie, Genre } from '../../shared/models/response-model/Movie.model';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
})
export class AllMoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getAllMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
      this.movies.forEach((movie: Movie) => {
        movie.poster = `../../../assets/posters/${movie.id}.jpeg`;
      });
    });
  }
}

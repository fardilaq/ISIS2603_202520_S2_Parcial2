import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { movieData } from '../movieData';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Array<Movie> = movieData;
  isLoading: boolean = true;
  selectedMovie!: Movie;
  selected: boolean = false;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMoviesList();
  }

  getMoviesList(): void {
    this.isLoading = true;
    this.movieService.getMovies();
  }

  onSelected(movie: Movie): void {
    this.selected = true;
    this.selectedMovie = movie;
  }


}

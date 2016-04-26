import {Component, OnInit} from 'angular2/core';
import {MovieService} from '../SERVICES/MovieService';
import {Movie, } from '../MODELS/Movie.model';

@Component({
    selector: 'movies-component',
    templateUrl: 'app/components/movie.component.html',
    providers: [MovieService]
})
export class MovieComponent {
    constructor(private movieService: MovieService) { }
    
    gogo: string;
    movies: Movie;
    comeAtMe() {
        this.gogo = 'Loading Movies!';
        this.movies = this.movieService.getTopMovies(1).then(movies => {
            console.log(movies);
        });

    }
    goAway() {
        this.gogo = 'gadget';
    }
}
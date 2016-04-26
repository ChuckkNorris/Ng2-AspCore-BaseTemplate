import { Injectable } from 'angular2/core';
import { RestService, RestRequest } from 'ng2rest/ng2rest';
import { MovieResults, MovieResponse, Movie } from '../MODELS/movie.model';

const POSTER_BASEURL: string = 'http://image.tmdb.org/t/p/w500';
const API_KEY: string = '1d24f7e213bcc3fc22382ffbf01e4cb2'; http://localhost:61502/
const API_BASEURL: string = 'https://api.themoviedb.org/3';

@Injectable()
export class MovieService {
    constructor(private _restService: RestService) { this.onInit(); }
    onInit() {
        this._restService.baseUrl = API_BASEURL;
        this._restService.globalParameters['api_key'] = API_KEY;
    }

    public getTopMovies(pageNumber: number): Promise<Movie[]> {
        var request = new RestRequest();
        request.endPoint = '/movie/top_rated';
        request.parameters['page'] = pageNumber.toString();

        var promiseToReturn = new Promise<Movie[]>(resolve => {

            this._restService.executeRequest<MovieResults>(request).then(movieResults => {
                window.console.log(movieResults);
                var toResolve: Movie[] = [];
                movieResults.results.forEach(movieResponse => {
                    toResolve.push(this.convertToMovie(movieResponse));
                });
                resolve(toResolve);
            });
        });
        return promiseToReturn;
    }

    private convertToMovie(movieResponse: MovieResponse): Movie {
        var toReturn: Movie = {
            title: movieResponse.title,
            posterUrl: POSTER_BASEURL + movieResponse.poster_path,
            rating: movieResponse.vote_average
        };
        return toReturn;
    }

}
// Our ViewModel
export interface Movie {
    title: string;
    posterUrl: string; // PosterBaseUrl + PosterPath
    rating: number;
}

// API's Movie JSON Response
export interface MovieResponse {
    id: number;
    imdb_id: string;
    title: string;
    backdrop_path: string;
    poster_path: string;
    overview: string;
    popularity: number;
    release_date: string;
    vote_average: number;
    vote_count: number;
}

// API's Collection JSON Response
export interface MovieResults {
    results: MovieResponse[];
}
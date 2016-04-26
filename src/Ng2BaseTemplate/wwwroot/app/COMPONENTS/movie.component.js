System.register(['angular2/core', '../SERVICES/MovieService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, MovieService_1;
    var MovieComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MovieService_1_1) {
                MovieService_1 = MovieService_1_1;
            }],
        execute: function() {
            MovieComponent = (function () {
                function MovieComponent(movieService) {
                    this.movieService = movieService;
                }
                MovieComponent.prototype.comeAtMe = function () {
                    this.gogo = 'Loading Movies!';
                    this.movies = this.movieService.getTopMovies(1).then(function (movies) {
                        console.log(movies);
                    });
                };
                MovieComponent.prototype.goAway = function () {
                    this.gogo = 'gadget';
                };
                MovieComponent = __decorate([
                    core_1.Component({
                        selector: 'movies-component',
                        templateUrl: 'app/components/movie.component.html',
                        providers: [MovieService_1.MovieService]
                    }), 
                    __metadata('design:paramtypes', [MovieService_1.MovieService])
                ], MovieComponent);
                return MovieComponent;
            }());
            exports_1("MovieComponent", MovieComponent);
        }
    }
});
//# sourceMappingURL=movie.component.js.map
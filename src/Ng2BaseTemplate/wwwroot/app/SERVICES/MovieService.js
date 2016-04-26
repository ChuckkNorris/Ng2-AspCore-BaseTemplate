System.register(['angular2/core', 'ng2rest/ng2rest'], function(exports_1, context_1) {
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
    var core_1, ng2rest_1;
    var POSTER_BASEURL, API_KEY, API_BASEURL, MovieService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2rest_1_1) {
                ng2rest_1 = ng2rest_1_1;
            }],
        execute: function() {
            POSTER_BASEURL = 'http://image.tmdb.org/t/p/w500';
            API_KEY = '1d24f7e213bcc3fc22382ffbf01e4cb2';
            http: API_BASEURL = 'https://api.themoviedb.org/3';
            MovieService = (function () {
                function MovieService(_restService) {
                    this._restService = _restService;
                    this.onInit();
                }
                MovieService.prototype.onInit = function () {
                    this._restService.baseUrl = API_BASEURL;
                    this._restService.globalParameters['api_key'] = API_KEY;
                };
                MovieService.prototype.getTopMovies = function (pageNumber) {
                    var _this = this;
                    var request = new ng2rest_1.RestRequest();
                    request.endPoint = '/movie/top_rated';
                    request.parameters['page'] = pageNumber.toString();
                    var promiseToReturn = new Promise(function (resolve) {
                        _this._restService.executeRequest(request).then(function (movieResults) {
                            window.console.log(movieResults);
                            var toResolve = [];
                            movieResults.results.forEach(function (movieResponse) {
                                toResolve.push(_this.convertToMovie(movieResponse));
                            });
                            resolve(toResolve);
                        });
                    });
                    return promiseToReturn;
                };
                MovieService.prototype.convertToMovie = function (movieResponse) {
                    var toReturn = {
                        title: movieResponse.title,
                        posterUrl: POSTER_BASEURL + movieResponse.poster_path,
                        rating: movieResponse.vote_average
                    };
                    return toReturn;
                };
                MovieService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [ng2rest_1.RestService])
                ], MovieService);
                return MovieService;
            }());
            exports_1("MovieService", MovieService);
        }
    }
});
//# sourceMappingURL=MovieService.js.map
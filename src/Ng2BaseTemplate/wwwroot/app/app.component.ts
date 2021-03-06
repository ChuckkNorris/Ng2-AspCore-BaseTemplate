﻿import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomeComponent} from './COMPONENTS/home.component';
import {MovieComponent} from './COMPONENTS/movie.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
        { name: 'Home', path: '/', useAsDefault: true, component: HomeComponent },
         { name: 'Movie', path: '/Movie', component: MovieComponent }
])
export class AppComponent {
    nyName: string;
}
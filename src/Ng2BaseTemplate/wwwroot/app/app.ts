import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomeComponent} from './COMPONENTS/home.component';

@Component({
    selector: 'my-app',
    template: `
        <a [routerLink]="['Home']">Home</a>
        <div>hello there, bro!</div>
<input [(ngModel)]="myName" /> {{myName}} is great!
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
        {name: 'Home', path:'/home', useAsDefault: true, component: HomeComponent}
    ])
export class AppComponent {
    nyName: string;
}
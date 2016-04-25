import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div>hello there, ng2!</div>
<input [(ngModel)]="myName" /> {{myName}}
    `
})
export class AppComponent {
    nyName: string;
}
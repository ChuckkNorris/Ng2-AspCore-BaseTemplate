import {Component, OnInit} from 'angular2/core';

//import {MdCheckbox} from '@angular2-material/checkbox';
//import {MdInput} from '@angular2-material/input';
//import {MdButton} from '@angular2-material/button';

@Component({
    selector: 'home-component',
    templateUrl: 'app/components/home.component.html'
})
export class HomeComponent {
    gogo: string;
    comeAtMe() {
        this.gogo = "Comin' your way bosses";
    }
    goAway() {
        this.gogo = 'Fine, be that way';
    }
}
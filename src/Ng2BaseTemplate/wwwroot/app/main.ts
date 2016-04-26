import {bootstrap} from 'angular2/platform/browser';
import { PLATFORM_DIRECTIVES, provide } from 'angular2/core';

import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RestService} from 'ng2rest/ng2rest';

import {AppComponent} from './app.component';

// Import ng2Materials as global providers
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdButton} from '@angular2-material/button';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS, RestService,
    provide(PLATFORM_DIRECTIVES, { useValue: MdCheckbox, multi: true }),
    provide(PLATFORM_DIRECTIVES, { useValue: MdButton, multi: true })
]);
import {Component} from "@angular/core";
import {SignUpComponent} from "./signup.component";
import {Routes,ROUTER_DIRECTIVES} from "@angular/router";
import {SigninComponent} from "./signin.component";
import {LogoutComponent} from "./logout.component";
import {Router} from '@angular/router';
import {AuthServiceComponent} from "./auth-service.component";

@Component({
    selector: 'my-auth',
    template: `
    <header class="row spacing">
        <nav class="nav nav-tab col-md-8 col-md-offset-2">
            <ul class="nav nav-tabs">
            <li><a [routerLink]="['./signup']">Signup</a></li>
            <li><a [routerLink]="['./signin']" *ngIf="!isLoggedIn()">Signin</a></li>
            <li><a [routerLink]="['./logout']" *ngIf="isLoggedIn()">Logout</a></li>
            </ul>
        </nav>
    </header>
    <div class="row spacing">
        <router-outlet></router-outlet>
    </div>
    `
    , directives: [ROUTER_DIRECTIVES]
    , styles: [`
        .router-link-active{
            color:#555;
            cursor: default;
            background-color: #fff;
            border: 1px solid,transparent;
            }
    `]
})

@Routes([
    {path: '/signin', component: SigninComponent}
    , {path: '/signup', component: SignUpComponent}
    , {path: '/logout', component: LogoutComponent}
])
export class AuthenticationComponent {
    constructor(private _authService:AuthServiceComponent) {
    }

    isLoggedIn() {
        return this._authService.isLoggedIn();
    }

}
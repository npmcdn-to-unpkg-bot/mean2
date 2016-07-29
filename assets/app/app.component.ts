import { Component } from '@angular/core';
import {MessagesComponent} from "./messages/messages.component";
import {Routes,ROUTER_DIRECTIVES} from "@angular/router";
import {AuthenticationComponent} from "./auth/authentication.component";

@Component({
    selector: 'my-app',
    styleUrls: ['js/app/app.component.css'],
    templateUrl: 'js/app/app.template.html',
    directives:[MessagesComponent,ROUTER_DIRECTIVES]
})
@Routes([
    {path:'/',component:MessagesComponent},
    {path:'/auth',component:AuthenticationComponent}
])
export class AppComponent {

}
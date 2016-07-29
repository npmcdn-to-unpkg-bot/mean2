import { Component } from '@angular/core';
import {MessagesComponent} from "./messages/messages.component";

@Component({
    selector: 'my-app',
    styleUrls: ['js/app/app.component.css'],
    templateUrl: 'js/app/app.template.html',
    directives:[MessagesComponent]
})
export class AppComponent {

}
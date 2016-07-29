import { Component } from '@angular/core';
import {MessageListComponent} from "./messages/message-list.component";
import {MessageInputComponent} from "./messages/message-input.component";

@Component({
    selector: 'my-app',
    styleUrls: ['js/app/app.component.css'],
    templateUrl: 'js/app/app.template.html',
    directives: [MessageListComponent,MessageInputComponent]

})
export class AppComponent {

}
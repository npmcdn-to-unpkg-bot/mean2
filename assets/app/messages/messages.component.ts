import {Component} from '@angular/core'
import {MessageListComponent} from "./message-list.component";
import {MessageInputComponent} from "./message-input.component";

@Component({
    selector:'my-messages',
    templateUrl:'js/app/messages/messages.component.html'
    ,directives:[MessageListComponent,MessageInputComponent]
})
export class MessagesComponent{

}
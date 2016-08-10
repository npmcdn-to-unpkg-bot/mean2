import {Component,OnInit} from '@angular/core';
import {Message} from "./message";
import {MessageComponent} from "./message.component";
import {MessageServiceComponent} from "./message-service.component";

@Component({
    selector: 'my-message-list'
    , templateUrl: 'js/app/messages/message-list.component.html'
    , directives: [MessageComponent]
})
export class MessageListComponent implements OnInit {
    messages:Message[] = [];

    constructor(private _messageServiceComponent:MessageServiceComponent) {
    }

    ngOnInit() {
        this._messageServiceComponent.getMessage()
            .subscribe(
                messages => {
                    this.messages = messages;
                    this._messageServiceComponent.messages = messages;
                },
                error => console.warn(error)
            );
    }
}
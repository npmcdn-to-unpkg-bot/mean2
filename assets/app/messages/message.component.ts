import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Message} from './message';
import {MessageServiceComponent} from "./message-service.component";

@Component({
    selector: 'my-message'
    , styleUrls: ['js/app/messages/message.component.css']
    , templateUrl: 'js/app/messages/message.component.html'
})
export class MessageComponent {
    @Input() message:Message;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private _messageServiceComponent:MessageServiceComponent) {
    }

    onEdit(message:Message) {
        this._messageServiceComponent.editMessage(message);
    }

    onDelete(message:Message) {
        this._messageServiceComponent.deleteMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.warn(error)
            )
    }

    belongsToUser(){
        return localStorage.getItem('userId') == this.message.userId;
    }
}

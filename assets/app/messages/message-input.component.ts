import {Component} from '@angular/core';
import {Message} from "./message";
import {MessageServiceComponent} from "./message-service.component";
@Component({
    selector: 'my-message-input'
    , templateUrl: 'js/app/messages/message-input.template.html'

})
export class MessageInputComponent {
    constructor(private _messageService:MessageServiceComponent) {
    }

    onSubmit(form:any) {
        const message:Message = new Message(form.content, null, 'Dummy');
        this._messageService.addMessage(message)
            .subscribe(
                data=>console.log(data),
                error=>console.warn(error)
            );
    }
}
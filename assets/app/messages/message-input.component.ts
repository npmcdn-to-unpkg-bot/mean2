import {Component, OnInit} from '@angular/core';
import {Message} from "./message";
import {MessageServiceComponent} from "./message-service.component";

@Component({
    selector: 'my-message-input'
    , templateUrl: 'js/app/messages/message-input.template.html'

})
export class MessageInputComponent implements OnInit {
    message:Message = null;

    constructor(private _messageService:MessageServiceComponent) {
    }

    onSubmit(form:any) {

        if (this.message) {
            this.message.content = form.content;
            this._messageService.updateMessage(this.message)
                .subscribe(
                    data=>console.log(data),
                    error=>console.warn(error)
                );
            this.message = null;
        } else {
            const message:Message = new Message(form.content, null, 'Dummy');
            this._messageService.addMessage(message)
                .subscribe(
                    data=>console.log(data),
                    error=>console.warn(error)
                );
        }
    }

    onCancel() {
        this.message = null;
    }

    ngOnInit() {
        this._messageService.messageIsEdit.subscribe(
            message=> {
                this.message = message;
            });
    }
}
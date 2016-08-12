import {Message} from "./message";
import  {Http,Headers} from '@angular/http';
import {Injectable,EventEmitter} from '@angular/core';
import  'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageServiceComponent {
    messages:Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private _http:Http) {
    }


    addMessage(message:Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post("http://localhost:3000/message", body, {headers: headers})
            .map(response => {
                this.messages.push(message);
            })
            .catch(error => Observable.throw(error.json()));

    }

    updateMessage(message:Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.patch("http://localhost:3000/message/" + message.messageId, body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    getMessage() {
        return this._http.get("http://localhost:3000/message")
            .map(response => {
                const data = response.json().obj;
                let objs:any[] = [];
                for (var i = 0; i < data.length; i++) {
                    let msg = new Message(data[i].content, data[i]._id, 'Dummy', null);
                    objs.push(msg);
                }
                console.log(objs);
                return objs;
            })
            .catch(error => Observable.throw(error.json()));
    }

    editMessage(message:Message) {
        this.messageIsEdit.emit(message);
    }

    deleteMessage(message:Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this._http.delete("http://localhost:3000/message/" + message.messageId)
            .map(response=>response.json())
            .catch(error=>Observable.throw(error.json()));
    }
}

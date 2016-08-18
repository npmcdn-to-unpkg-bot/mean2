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
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

        return this._http.post("http://localhost:3000/message" + token, body, {headers: headers})
            .map(response => {
                const data = response.json().obj;
                let newmessage = new Message(data.content, data._id, data.user.firstName, data.user._id);
                this.messages.push(newmessage);
                return newmessage;
            })
            .catch(error => Observable.throw(error.json()));

    }

    updateMessage(message:Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

        return this._http.patch("http://localhost:3000/message/" + message.messageId + token, body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    getMessage() {
        return this._http.get("http://localhost:3000/message")
            .map(response => {
                const data = response.json().obj;
                let objs:any[] = [];
                for (var i = 0; i < data.length; i++) {
                    let msg = new Message(data[i].content, data[i]._id, data[i].user.firstName, data[i].user._id);
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
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.delete("http://localhost:3000/message/" + message.messageId + token)
            .map(response=>response.json())
            .catch(error=>Observable.throw(error.json()));
    }
}

import {Message} from "./message";
import  {Http,Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import  'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageServiceComponent {
    messages:Message[] = [];

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
        this.messages[this.messages.indexOf(message)] = new Message('Editied', null, 'Dummy');
    }

    deleteMessage(message:Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}

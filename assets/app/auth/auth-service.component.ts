import {User} from './user';
import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthServiceComponent {
    constructor(private _http:Http) {
    }

    SignUp(user:User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});

        return this._http.post("http://localhost:3000/user", body, {headers: headers})
            .map(response=>response.json())
            .catch(error => Observable.throw(error.json()));
    }

}
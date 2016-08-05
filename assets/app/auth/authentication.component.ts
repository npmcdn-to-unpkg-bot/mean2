import {Component} from "@angular/core";
import {SignUpComponent} from "./signup.component";
@Component({
    selector:'my-auth',
    template:`<h1>Auth</h1>
               <my-signup></my-signup>
        ~        `
    ,directives:[SignUpComponent]
})
export class AuthenticationComponent{

}
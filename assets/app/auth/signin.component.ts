import {Component,OnInit} from "@angular/core"
import {Control,FormBuilder, ControlGroup,Validators} from "@angular/common";
import {AuthServiceComponent} from "./auth-service.component";
import {User} from "./user";
import {Router} from '@angular/router';

@Component({
    selector: 'my-signin'
    , template: `
    <section class="col-md-8 col-md-offset-2">
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
                <label for="email">Email</label>
                <input [ngFormControl]="myForm.find('email')" type="email" class="form-control" id="email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input [ngFormControl]="myForm.find('password')" type="password" class="form-control" id="password">
            </div>
            <button class="btn btn-primary" type="submit" [disabled]="!myForm.valid" >Sign Up</button>
        </form>
    </section>
    `
})
export class SigninComponent implements OnInit {
    myForm:ControlGroup;

    constructor(private _fb:FormBuilder, private _AuthService:AuthServiceComponent, private _router:Router) {
    }

    onSubmit() {
        var user = new User(this.myForm.value.email, this.myForm.value.password);
        this._AuthService.signIn(user)
            .subscribe(
                data=> {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this._router.navigateByUrl("/");
                },
                error=>console.error(error)
            )
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            email: ['', Validators.compose(
                [Validators.required, this.isEmail]
            )],
            password: ['', Validators.required],
        })
    }

    private isEmail(control:Control):{[s:string]:boolean} {
        if (!control.value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"))
            return {invalidMail: true};
    }
}
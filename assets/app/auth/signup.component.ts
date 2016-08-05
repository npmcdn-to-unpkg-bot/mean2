import {Component,OnInit} from "@angular/core"
import {FormBuilder, ControlGroup,Validators} from "@angular/common";

@Component({
    selector:'my-signup'
    ,template:`
    <section class="col-md-8 col-md-offset-2">
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input [ngFormControl]="myForm.find('firstName')" type="text" class="form-control" id="firstName">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input [ngFormControl]="myForm.find('lastName')" type="text" class="form-control" id="lastName">
            </div>
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
export class SignUpComponent implements OnInit{
    myForm:ControlGroup;
    constructor(private _fb:FormBuilder){}
    onSubmit(){
        console.log(this.myForm.value);
    }
    ngOnInit(){
        this.myForm=this._fb.group({
            firstName:['',Validators.required],
            lastName:['',Validators.required],
            email:['',Validators.required],
            password:['',Validators.required],
        })
    }
}

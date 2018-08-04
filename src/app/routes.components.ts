import { Component } from '@angular/core'
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
// import { ReversePipe } from './shopping/reverse.pipe';

@Component({
    selector: "app-about",
    template: `<h3> Welcome to Sanrio </h3>
    <!--<p>{{"hello" | reverseText}}</p>-->
    `
})

export class AboutComponent { }

@Component({
    selector: "app-cart",
    template: `
    <div class="row">
    <div class="col-sm-7">
    <app-products></app-products>
    </div>
    <div class="col-sm-5">
    <app-cartitems></app-cartitems>
    </div>
    </div>
    `
})


export class CartComponent { }



@Component({
    selector: "app-SignIn",
    template: `
    <h2 style="margin-left: 14px; margin-bottom: 30px;"> Welcome {{userName}} </h2> 
    <my-sign [greeting] = "Sign_In" (myEvent)="handleMyEvent($event)"></my-sign>
    `
})


export class SignInComponent {

    userName = "Guest";
    Sign_In = "Sign In";
    handleMyEvent(obj) {
        this.userName = obj.usr
        if (this.lsvc.isValidUser(obj.usr, obj.pwd))
            this.router.navigate(["/manage"])
        else
            this.router.navigate(["/error"])

    }

    constructor(private lsvc: LoginService, private router: Router) { }
}

@Component({
    template: `
    <h3> Signed Out Successfully </h3>
    `
})


export class SignOutComponent { }

@Component({
    template: `
    <h3> Invalid credentials </h3>
    `
})


export class ErrorComponent { }


@Component({
    selector: "app-SignUp",
    template: `<my-sign [greeting]="Sign_Up"></my-sign>`
})


export class SignUpComponent {
    Sign_Up = "Sign Up";
}

@Component({
    // selector: "app-404", not needed because component activated by hyperlink
    template: `<h3> Not Found.. </h3>`
})


export class NotFoundComponent { }
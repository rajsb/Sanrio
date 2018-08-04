import { Component, Input, Output, EventEmitter, OnDestroy, OnInit, OnChanges } from '@angular/core'


@Component({
    selector: 'my-sign',
    template: ` 
    <form class="form-group"> 
    <h3 style="margin-left: 14px; margin-bottom: 30px;"> {{greeting}} </h3>
    <div class="form-row col-8">
        <div class="col-sm-2">
            <label for="UserName">User Name </label>
        </div>
        <div class="col-md-4">
            <input type="text" placeholder="Enter User name" class="form-control" #frmUser> <br>
        </div>
    </div> 
    <div class="form-row col-8">
        <div class="col-sm-2">
            <label for="Password"> Password </label>  
        </div>
        <div class="col-md-4">
            <input type="password" placeholder="Enter password" class="form-control" #frmPwd> <br>
        </div>

    </div>
    <button type="submit" class="changeButton" (click)="handleButtonClick(frmUser.value, frmPwd.value)">{{greeting}}</button>

    </form>
    `
})

export class MySignComponent implements OnDestroy, OnChanges, OnInit {
    @Input() greeting: string;
    @Output() myEvent = new EventEmitter()
    handleButtonClick(usr, pwd): void {
        console.log("Button clicked  userName: ", usr, "Password: ", pwd)
        this.myEvent.emit({ usr, pwd })
    }
    constructor() {
        console.log("Constructor created", this.greeting)
    }

    ngOnDestroy() {
        // console.log("Destroyed")
    }

    ngOnChanges() {
        //  console.log("Changed", this.greeting)
    }

    ngOnInit() {
        //  console.log("Init", this.greeting)
    }
}

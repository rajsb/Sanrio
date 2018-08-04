import { Component } from '@angular/core'
import { LoginService } from './services/login.service';


@Component({
    //like a property of an object in json. Specify tag name for component
    //Display component content
    // template:
    //     `<h1> Hello World! </h1>
    // <h2> Blah, Blah </h2>
    // `
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    appHeading: string;
    constructor(private ls: LoginService) {
        this.appHeading = "Sanrio"
    }
    todaysDate: Date = new Date()

    isUserLoggedIn() {
        return this.ls.getIsLoggedIn()
    }

    doSignOut() {
        this.ls.setIsLoggedIn(false)
    }
}
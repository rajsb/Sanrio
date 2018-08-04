import { Injectable } from '@angular/core'

@Injectable()
export class LoginService {

    private isLoggedIn: boolean = false;
    setIsLoggedIn(newval: boolean) {
        this.isLoggedIn = newval;
    }

    getIsLoggedIn() {
        return this.isLoggedIn
    }

    isValidUser(username: string, password: string) {
        if (username == 'admin') {
            this.setIsLoggedIn(true);
            return true;
        }
        else {
            this.setIsLoggedIn(false);
            return false;
        }

    }
}
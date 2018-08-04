import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private ls: LoginService) { }
    canActivate() {
        return this.ls.getIsLoggedIn();
    }
}
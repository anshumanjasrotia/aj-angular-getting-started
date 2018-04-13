import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float:right;padding-left:10px; color:#E05c65; }
    `]
})
export class LoginComponent {

    constructor(private _auth: AuthService, private _router: Router) {

    }
    mouseOverLogin: boolean = false;
    userName:string;
    password:string;

    login(values): void {
        this._auth.login(values.userName, values.password);
        this._router.navigate(['/events']);
        
    }

    cancel() {
        this._router.navigate(['/events']);
    }
}
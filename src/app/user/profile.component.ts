import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service'

@Component({
    templateUrl: './profile.component.html',
    styles: [`
        em { float:right; color: #E05C65;padding-left:10px }
        .error input { background-color : #E3C3C5 }
        .error ::-webkit-input-placeholder { color : #999 }
        .error ::-moz-placeholder { color : #999 }
        .error :-moz-placeholder{ color : #999 }
        .error :ms-input-placeholder { color : #999 }
    `]
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;

    constructor(private _auth: AuthService, private _router: Router) {

    }

    ngOnInit() {
        this.firstName = new FormControl(this._auth.currentUser.firstName,
            [Validators.required, Validators.pattern('[a-zA-z].*')]);
        this.lastName = new FormControl(this._auth.currentUser.lastName, Validators.required);

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this._auth.updateUserProfile(formValues.firstName, formValues.lastName);
            this._router.navigate(['/events']);
        }
    }

    cancel() {
        this._router.navigate(['/events']);
    }

    validateFirstName() {
        return (this.firstName.valid || this.firstName.untouched)
    }

    validateLastName() {
        return (this.lastName.valid || this.lastName.untouched)
    }
}

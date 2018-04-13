import { Injectable } from '@angular/core';
import { IUserModel } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUserModel;

    

    login(username: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: username,
            firstName: 'Anshuman',
            lastName : 'Jasrotia'
        }

    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    updateUserProfile(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
    
}

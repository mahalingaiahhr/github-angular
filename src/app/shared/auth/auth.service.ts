import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
    private currentUser = null;
    private currentUserSource = new Subject();
    currentUser$ = this.currentUserSource.asObservable();

    login(currentUser) {
        this.currentUser = currentUser;
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        this.currentUserSource.next(currentUser);
    }
    logout() {
        this.currentUser = null;
        sessionStorage.removeItem('currentUser');
        this.currentUserSource.next(null);
    }
    getCurrentUser() {
        return this.currentUser;
    }
    isLoggedIn() {
        if (!this.currentUser) {
            const user = sessionStorage.getItem('currentUser');
            if (user) {
                this.currentUser = JSON.parse(user);
            }
        }
        return this.currentUser;
    }
}

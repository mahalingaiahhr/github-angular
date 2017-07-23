import { Component } from '@angular/core';

import { AuthService } from '../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './layout-header.component.html',
    styleUrls: ['./layout-header.component.css']
})
export class HeaderComponent {
    user;
    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        this.authService.currentUser$.subscribe((user) => {
            console.log(`Received currentUser`, user);
            this.user = user;
        });
        this.user = this.authService.getCurrentUser();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/search']);
    }
}

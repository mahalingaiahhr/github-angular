import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RepoService } from '../repo/repo.service';
import { AuthService } from '../shared/auth/auth.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    data;
    query;
    message = {};
    constructor(
        private repoService: RepoService,
        private router: Router,
        private authService: AuthService
    ) {
        this.repoService = repoService;
        this.data = {};
        this.router = router;
    }

    submit() {
        this.repoService.searchUsers(this.query)
            .subscribe(user => {
                if (!user['total_count']) {
                    this.message = {
                        type: 'warning',
                        message: 'There are no User or Organization found with that name'
                    };
                } else {
                    this.authService.login(user['items'][0]);
                    this.router.navigate(['/repo']);
                }
            }, () => {
                this.message = {
                    type: 'danger',
                    message: 'There was problem searching record'
                }
            });
    }
}

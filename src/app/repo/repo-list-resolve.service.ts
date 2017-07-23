import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { RepoService } from './repo.service';

@Injectable()
export class RepoListResolver implements Resolve<Object> {
    constructor(private repoService: RepoService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.repoService.fetchUserRepos();
    }
}

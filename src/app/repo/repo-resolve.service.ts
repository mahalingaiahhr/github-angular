import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { RepoService } from './repo.service';

@Injectable()
export class RepoResolver implements Resolve<Object> {
    constructor(private repoService: RepoService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.paramMap.get('id');
        this.repoService.setUserRepos(route.parent.data.repos);
        const repo = this.repoService.findRepoById(id);
        if (repo) {
            this.repoService.setCurrentRepo(repo);
            return repo;
        } else { // id not found
          // this.router.navigate(['/repo']);
          return null;
        }
    }
}

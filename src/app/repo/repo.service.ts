import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AuthService } from '../shared/auth/auth.service';

@Injectable()
export class RepoService {
    private basePath = 'https://api.github.com';
    private currentRepo = null;
    private userRepos = [] ;

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {
        this.http = http;
    }
    private getUrl(path) {
        return `${this.basePath}/${path}`;
    }
    setCurrentRepo(currentRepo) {
        this.currentRepo = currentRepo;
    }
    searchUsers(user) {
        const params = new HttpParams().set('q', user);
        return this.http.get(this.getUrl('search/users'), {params});
    }
    fetchUserRepos() {
        return this.http.get(this.authService.getCurrentUser().repos_url);
    }

    setUserRepos(userRepos) {
        this.userRepos = userRepos;
    }

    findRepoById(id) {
        const filtered = this.userRepos.filter(repo => repo.id === Number.parseInt(id));
        return filtered[0];
    }

    fetchRepoIssues() {
        return this.http.get(this.getUrl(`repos/${this.authService.getCurrentUser().login}/${this.currentRepo.name}/issues`));
    }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RepoService } from './repo.service';

@Component({
    selector: 'app-select-user',
    templateUrl: './repo.component.html',
    styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
    repos: [Object];
    constructor(
        private repoService: RepoService,
        private router: Router,
        private route: ActivatedRoute
    ) {

    }
    ngOnInit() {
        this.repos = this.route.snapshot.data['repos'];
        this.repoService.setUserRepos(this.repos);
    }

}

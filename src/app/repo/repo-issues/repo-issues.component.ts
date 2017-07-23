import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RepoService } from '../repo.service';

@Component({
    selector: 'app-repo-issues',
    templateUrl: './repo-issues.component.html',
    styleUrls: ['./repo-issues.component.css']
})
export class RepoIssuesComponent implements OnInit {
    issues;
    repo;
    constructor(private repoService: RepoService, private route: ActivatedRoute) {}
    ngOnInit() {
        this.route.parent.data
            .subscribe((data) => {
              this.repo = data.repo;
            });
        this.repoService.fetchRepoIssues()
            .subscribe(issues => (this.issues = issues));
    }
}

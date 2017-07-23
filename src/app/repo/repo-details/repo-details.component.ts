import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-repo-details',
    templateUrl: './repo-details.component.html',
    styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

    repo;
    constructor(private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.route.parent.data
            .subscribe((data) => {
              this.repo = data.repo;
            });
    }
}

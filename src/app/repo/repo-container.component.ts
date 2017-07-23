import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './repo-container.component.html',
})

export class RepoContainerComponent implements OnInit {
    repo;
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {

    }
    ngOnInit() {
        this.router.navigate(['details'], {relativeTo: this.route});
    }

}

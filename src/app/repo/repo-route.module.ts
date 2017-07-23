import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepoComponent } from './repo.component';
import { RepoContainerComponent } from './repo-container.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { RepoIssuesComponent } from './repo-issues/repo-issues.component';
import { RepoGuard } from './repo-guard.service';
import { RepoResolver } from './repo-resolve.service';
import { RepoListResolver } from './repo-list-resolve.service';

const routes: Routes = [
    {
        path: 'repo',
        component: RepoComponent,
        canActivate: [RepoGuard],
        resolve: {
            repos: RepoListResolver
        },
        children: [
            {
                path: ':id',
                canActivateChild: [RepoGuard],
                component: RepoContainerComponent,
                resolve: {
                  repo: RepoResolver
                },
                children: [
                    {
                        path: 'details',
                        component: RepoDetailsComponent
                    },
                    {
                        path: 'issues',
                        component: RepoIssuesComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        RepoGuard,
        RepoResolver,
        RepoListResolver
    ]
})
export class RepoRouteModule { }

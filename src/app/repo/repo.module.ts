import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { RepoComponent } from './repo.component';
import { RepoContainerComponent } from './repo-container.component';
import { RepoRouteModule } from './repo-route.module';
import { RepoService } from './repo.service';
import { RepoListModule } from './repo-list/repo-list.module';
import { RepoDetailsModule } from './repo-details/repo-details.module';
import { RepoIssuesModule } from './repo-issues/repo-issues.module';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RepoDetailsModule,
        RepoIssuesModule,
        RepoRouteModule,
        RepoListModule
    ],
    declarations: [
        RepoComponent,
        RepoContainerComponent
    ],
    providers: [
        RepoService
    ],
    exports: [
        RepoComponent
    ]
})
export class RepoModule { }

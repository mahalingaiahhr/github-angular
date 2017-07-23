import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { RepoIssuesComponent } from './repo-issues.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        RepoIssuesComponent
    ],
    exports: [
        RepoIssuesComponent
    ]
})
export class RepoIssuesModule { }

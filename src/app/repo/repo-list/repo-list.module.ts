import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoListComponent } from './repo-list.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RepoListComponent
    ],
    exports: [
        RepoListComponent
    ]
})
export class RepoListModule { }

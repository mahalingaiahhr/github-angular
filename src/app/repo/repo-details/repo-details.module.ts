import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepoDetailsComponent } from './repo-details.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RepoDetailsComponent
    ],
    exports: [
        RepoDetailsComponent
    ]
})
export class RepoDetailsModule { }

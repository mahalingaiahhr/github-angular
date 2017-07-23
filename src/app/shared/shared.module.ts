import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { AvatarComponent } from './avatar.component';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
    imports: [
        AuthModule,
    ],
    declarations: [
        AvatarComponent,
        EllipsisPipe
    ],
    exports: [
        AvatarComponent,
        EllipsisPipe
    ]
})
export class SharedModule { }

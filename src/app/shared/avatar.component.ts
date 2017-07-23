import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-avatar',
    template: `<img [src]="user.avatar_url" class="avatar"/>`,
    styles: ['.avatar {display: inline-block;vertical-align: middle;border-radius: 4px; height:30px; width:30px;}']
})
export class AvatarComponent {
    @Input() user;
}

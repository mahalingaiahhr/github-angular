import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'ellipsis'})
export class EllipsisPipe implements PipeTransform {
    transform(str: string, limit: number = 100): string {
        if (!str) {
            return '';
        }
        return str.substring(0, limit) + (str.length > limit ? ' ...' : '');
    }
}

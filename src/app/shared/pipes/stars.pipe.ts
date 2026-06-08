import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stars', standalone: true })
export class StarsPipe implements PipeTransform {
  transform(rating: number): string {
    const full = '★'.repeat(Math.floor(rating));
    const half = rating % 1 ? '½' : '';
    return full + half;
  }
}

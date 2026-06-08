import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mgPrice', standalone: true })
export class MgPricePipe implements PipeTransform {
  transform(value: number | undefined): string {
    if (value == null) return '';
    return value.toLocaleString('fr-MG') + ' Ar';
  }
}
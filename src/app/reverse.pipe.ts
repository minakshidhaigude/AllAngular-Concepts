import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  revName: string = '';
  transform(value: any, ...args: unknown[]): any {
    this.revName = value.split('').reverse().join('');
    return this.revName;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  pure: true,
})
export class CustomPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
    //return value.substr(0, 5) + '...';
    /*if (value.length > 7) {
      return value.substr(0, limit) + '...';
    } else {
      return value;
    }*/
    return value.join('');
  }
}

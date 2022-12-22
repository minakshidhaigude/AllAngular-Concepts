import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: any): any {
    console.log('DOB value:', value);
    //getting present year
    let currentYear: any = new Date().getFullYear();
    let userBirthYear: any = new Date(value).getFullYear();
    console.log(userBirthYear);
    let userAge = currentYear - userBirthYear;
    return userAge;
  }
}

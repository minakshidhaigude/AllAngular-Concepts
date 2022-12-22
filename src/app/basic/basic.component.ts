import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent implements OnInit {
  constructor() {}
  userObject: Object = {
    name: 'MinakshiD',
    email: 'minakshi@gmail.com',
    additionalInfo: {
      age: 25,
      phone: [123456781, 9988776655],
    },
  };
  employees = ['Nikhil', 'Minakshi', 'Soham', 'Rugved'];
  ngOnInit(): void {}
  addEmp(value: any) {
    this.employees.push(value);
    console.log('employees', this.employees);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  todayDate: string = '';
  name: string = '';
  date: string = '';
  constructor() {}

  ngOnInit(): void {
    this.date = new Date('6 / 24 / 1993').toDateString();
    console.log('birthdate', this.date);
    this.todayDate = new Date().toDateString();
    console.log('date', this.todayDate);
    this.name = 'Minakshi';
  }
}

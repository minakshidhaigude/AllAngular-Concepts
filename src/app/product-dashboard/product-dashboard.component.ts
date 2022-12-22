import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css'],
})
export class ProductDashboardComponent implements OnInit {
  public salesProduct = [
    { id: 1, name: 'phone', price: 100 },
    { id: 2, name: 'phone2', price: 1000 },
    { id: 3, name: 'phone3', price: 10000 },
    { id: 4, name: 'phone4', price: 100000 },
  ];
  public topProduct = [
    { id: 1, name: 'iphone', price: 100 },
    { id: 2, name: 'tablet', price: 1000 },
    { id: 3, name: 'laptop', price: 10000 },
    { id: 4, name: 'pc', price: 100000 },
  ];
  constructor() {}

  ngOnInit(): void {}
}

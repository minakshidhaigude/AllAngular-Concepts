import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  constructor() {}
  courses: string[] = ['Angular', 'React', 'Mongodb', 'Fullstack'];

  DellAvailable() {
    return false;
  }
  HpAvailable() {
    return true;
  }
  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black',
  };
  hp = {
    brand: 'Hp',
    hardDisk: '2 TB',
    color: 'Silver',
  };

  promiseVal: any;
  ngOnInit(): void {
    // let buyLaptop = new Promise(function (resolve, reject) {
    //   resolve('promise is resolved');
    // });
    // buyLaptop.then();

    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('promise is resolved');
      // reject('promise is rejected');
      if (this.DellAvailable()) {
        setTimeout(() => {
          //resolve('Dell is purchased');
          resolve(this.dell);
        }, 3000);
      } else if (this.HpAvailable()) {
        setTimeout(() => {
          //resolve('Hp is purchased');
          resolve(this.hp);
        }, 3000);
      } else {
        reject('Laptop is not available on store');
      }
    });
    buyLaptop
      .then((res) => {
        console.log('resolved data...', res);
        this.promiseVal = res;
      })
      .catch((res) => {
        console.log('catch code=>', res);
        this.promiseVal = res;
      });

    //////
    console.log(this.getData());
    this.getData().then((data) => {
      console.log('using .then() get promise data', data);
    });
  }
  async getData() {
    return 'data received';
  }
}

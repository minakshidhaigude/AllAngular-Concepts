import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  pageTitle: string = 'Data Binding in Angular';
  imageUrl: any = 'assets/Images/Profile-01.jpg';
  btnStatus: boolean = false;
  username: string = 'Nikhil';
  users: string[] = ['Minakshi', 'Madhuri', 'Soham'];
  isUserLoggedIn: boolean = false;
  selectedValue: string = '';
  userObj: any[] = [];
  usersData: any;
  errMsg: any;
  @Input() pData!: string;
  @Output() notify: EventEmitter<any> = new EventEmitter();
  userName: string = '';
  message: string = '';
  constructor(private usersvc: UserService) {}

  ngOnInit(): void {
    this.userObj = this.usersvc.getAllUsers();
    this.usersvc.usersData().subscribe(
      (data) => {
        console.log('fakeapi data', data);
        this.usersData = data;
      },
      (error) => {
        console.log('error+++', error);
        this.errMsg = error;
      }
    );
  }

  // userObj: any[] = [
  //   {
  //     id: 101,
  //     name: 'Minakshi',
  //     city: 'Pune',
  //     salary: 50,
  //     dob: new Date('06 / 24 / 1993'),
  //   },
  //   {
  //     id: 102,
  //     name: 'Madhuri',
  //     city: 'Mumbai',
  //     salary: 45,
  //     dob: new Date('10 / 06 / 1991'),
  //   },
  //   {
  //     id: 103,
  //     name: 'Soham',
  //     city: 'Mumbai',
  //     salary: 50,
  //     dob: new Date('04 / 13 / 2018'),
  //   },
  // ];
  countries: any[] = [
    { code: 'Ind', country: 'India' },
    { code: 'Us', country: 'America' },
    { code: 'Jap', country: 'Japan' },
  ];
  changeTitle() {
    this.pageTitle = 'event binding ';
  }
  choice(event: any) {
    console.log(event.target.value);
    this.selectedValue = event.target.value;
  }
  passData() {
    this.notify.emit('This data coming from child component');
  }
}

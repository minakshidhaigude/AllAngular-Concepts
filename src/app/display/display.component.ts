import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  user: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.usersData().subscribe((data) => {
      console.log('userapi data', data);
      this.user = data;
    });
  }
}

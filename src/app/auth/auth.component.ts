import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginMode: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  onModeswitch() {
    this.loginMode = !this.loginMode;
  }
}

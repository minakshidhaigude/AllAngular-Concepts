import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(4),
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl(''),
    gender: new FormControl(''),
    pwd: new FormControl(''),
    rpwd: new FormControl(''),
  });

  registerSubmitted() {
    //to check validators is working correctly
    console.log(this.registerForm.get('firstName'));
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  // get f() {
  //   return this.registerForm.controls;
  // }
  // //for accessing form input values
  // get FirstName(): FormControl {
  //   return this.registerForm.get('firstName') as FormControl;
  // }
  // get LastName(): FormControl {
  //   return this.registerForm.get('lastName') as FormControl;
  // }
  // get Email(): FormControl {
  //   return this.registerForm.get('email') as FormControl;
  // }
  // get MobileNumber(): FormControl {
  //   return this.registerForm.get('mobile') as FormControl;
  // }
  // get Gender(): FormControl {
  //   return this.registerForm.get('gender') as FormControl;
  // }
  // get Pwd(): FormControl {
  //   return this.registerForm.get('pwd') as FormControl;
  // }
  // get Rpwd(): FormControl {
  //   return this.registerForm.get('rpwd') as FormControl;
  // }
}

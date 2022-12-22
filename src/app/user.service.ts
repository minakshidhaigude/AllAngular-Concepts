import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getAllUsers() {
    return [
      {
        id: 101,
        name: 'Minakshi',
        city: 'Pune',
        salary: 50,
        dob: new Date('06 / 24 / 1993'),
      },
      {
        id: 102,
        name: 'Madhuri',
        city: 'Mumbai',
        salary: 45,
        dob: new Date('10 / 06 / 1991'),
      },
      {
        id: 103,
        name: 'Soham',
        city: 'Mumbai',
        salary: 50,
        dob: new Date('04 / 13 / 2018'),
      },
    ];
  }
  usersData() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(retry(1), catchError(this.errorHandle));
  }
  errorHandle(error: HttpErrorResponse) {
    //console.log('---', error);
    return throwError(error.message || 'server error');
  }
  getUser(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoronaService {
  constructor(private http: HttpClient) {}
  getCountries(): Observable<any> {
    const url = 'https://api.covid19api.com/countries';
    return this.http.get<any>(url);
  }
  getCoronaRealData(country: any): Observable<any> {
    return this.http.get<any>(
      'https://api.covid19api.com/total/dayone/country/' + country
    );
  }
}

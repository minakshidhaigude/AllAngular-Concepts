import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../corona.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css'],
})
export class Covid19Component implements OnInit {
  countries: any;
  Confirmed!: number;
  Recovered!: number;
  Deaths!: number;
  coronadata: any;
  selectedValue: any;
  constructor(private coronaservice: CoronaService) {}

  ngOnInit(): void {
    this.coronaservice.getCountries().subscribe((res) => {
      console.log('corona', res);
      this.countries = res;
    });
  }
  getCoronaData() {
    this.coronaservice
      .getCoronaRealData(this.selectedValue)
      .subscribe((res) => {
        console.log('coronadata', res);
        this.coronadata = res;
        var index = res.length - 1;
        console.log('index val', index);
        this.Confirmed = res[index].Confirmed;
        this.Recovered = res[index].Recovered;
        this.Deaths = res[index].Deaths;
      });
  }
  countrySelect(event: any) {
    console.log('countrySelect', event.target.value);
    this.selectedValue = event.target.value;
  }
}

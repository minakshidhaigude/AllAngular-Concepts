import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  childToParent: any;
  parentData: string = 'This data from parent';
  fromChildData(data: any) {
    this.childToParent = data;
  }
}

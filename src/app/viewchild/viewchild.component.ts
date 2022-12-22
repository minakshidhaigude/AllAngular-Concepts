import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css'],
})
export class ViewchildComponent implements OnInit, AfterViewInit {
  @ViewChild('my') marker!: ElementRef;
  @ViewChildren('my1') mark!: QueryList<any>;
  @ViewChild('counterChildView') child!: CounterComponent;
  result: any = [];
  people: any[] = [
    { name: 'John', Country: 'United States' },
    { name: 'Joel', Country: 'UK' },
    { name: 'Mitali', Country: 'India' },
    { name: 'Soham', Country: 'Japan' },
  ];
  constructor() {
    //before initialize viewchild so get undefined value
    console.log(' Intial Value of viewchild', this.marker);
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log('html ele', this.marker);
    this.marker.nativeElement.style.color = 'red';
    console.log('array', this.mark);
    this.mark.first.nativeElement.style.color = 'green';
    this.mark.last.nativeElement.style.color = 'blue';

    this.result = this.mark.toArray();
    this.result[1].nativeElement.style.color = 'yellow';

    //this.mark._results[1].nativeElement.style.color = 'pink';
  }
  inc() {
    this.child.increment();
  }
  dec() {
    this.child.decrement();
  }
}

import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styles: [],
})
export class ProductWidgetComponent implements OnInit, AfterContentInit {
  @Input() products: any = [];
  @ContentChild('head') contentChild!: ElementRef;
  @ContentChildren('link') children!: QueryList<any>;
  constructor() {}

  ngOnInit(): void {}
  ngAfterContentInit(): void {
    console.log('ng-content @ access', this.contentChild);
    this.contentChild.nativeElement.setAttribute('style', 'color:red');
    console.log('children', this.children);
    this.children.first.nativeElement.setAttribute('style', 'color:yellow');
  }
}

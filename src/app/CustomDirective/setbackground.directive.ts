import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetbackground]',
})
export class SetbackgroundDirective implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'cyan';
  }
}

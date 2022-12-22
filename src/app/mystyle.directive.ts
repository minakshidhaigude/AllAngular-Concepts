import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMystyle]',
})
export class MystyleDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gray';
  }
}

import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green'
    );
    this.renderer.addClass(this.element.nativeElement, 'myclass');
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'Minakshi');
    // this.renderer.setStyle(this.element.nativeElement, 'margin', '10px,20px');
    // this.renderer.setStyle(this.element.nativeElement, 'padding', '150px,20px');
  }
}

import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {}
  @HostListener('mouseenter') onmouseover() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'yellow'
    );
    this.renderer.setStyle(this.element.nativeElement, 'margin', '30px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
  @HostListener('mouseleave') onmouseout() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      'purple'
    );
    this.renderer.setStyle(this.element.nativeElement, 'margin', '5px 10px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '30px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'transition', '0.5s');
  }
}

import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  //chcemy cos pzekazac do pola input
  @Input()
  private date: String;
  //tworzymy element html - p
  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
      this.paragraph = this.renderer.createElement('p')
   }

  @HostListener('mouseenter')
    mouseenter(eventDate: Event) {
      this.paragraph.innerHTML = this.date;
      this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
    mouseleave(eventDate: Event) {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}

import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective  implements OnInit {

  //wstrzykujemy potrzebne nam klasy
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    let li = this.el.nativeElement;
    //przekazujemy jaki element i jaki styl chcemy zmienic i wlasciwosc dla tego stylu
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/checked.png)')
    this.renderer.setStyle(li, 'background', '#5be589')
  }

}

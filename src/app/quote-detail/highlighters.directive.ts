import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighters]'
})
export class HighlightersDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.background = "red";
   }

}

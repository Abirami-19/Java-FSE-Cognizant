import {
Directive,
ElementRef,
HostListener,
Input
} from '@angular/core';

@Directive({

selector:'[appHighlight]'

})

export class HighlightDirective {

@Input()

appHighlight='yellow';

constructor(

private element:ElementRef

){}

@HostListener('mouseenter')

mouseenter(){

this.element.nativeElement.style.backgroundColor=this.appHighlight;

}

@HostListener('mouseleave')

mouseleave(){

this.element.nativeElement.style.backgroundColor='';

}

}
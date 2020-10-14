import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective implements OnInit {

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit()
  {
    //this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor','blue');
    this.backgroundColor = this.defaultColor;
  }
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor:string;
  

  @HostListener('mouseenter') mouseover(eventData: Event)
  {
    //this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor','blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event)
  {
    //this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor','transparent');
    this.backgroundColor = this.defaultColor;
  }
}

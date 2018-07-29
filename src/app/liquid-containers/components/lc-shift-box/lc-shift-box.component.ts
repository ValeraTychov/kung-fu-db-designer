import { Component, ElementRef, Input, OnInit } from '@angular/core';

export class AbstractElement {

  nativeElement: HTMLElement;

  public left: number = 0;
  public top: number = 0;
  public width: number;
  public height: number;

  
  constructor(nativeElement: HTMLElement){
    this.nativeElement = nativeElement;
    this.getPositionFromElement();
    this.getSizeFromElement();
  }

  getPositionFromElement(){
    if (!this.nativeElement.style.transform){
      return;
    }

    let transform: string = this.nativeElement.style.transform;
    
    let translate: RegExpMatchArray = transform.match(/translate.+?\)/);
    
    if (!translate){ 
      return;
    }

    let position: RegExpMatchArray = translate[0].match(/[-\d\.]+/g);

    this.left = parseInt(position[0]);
    this.top = parseInt(position[1]);
  } 

  getSizeFromElement(){
    this.width = this.nativeElement.offsetWidth;
    this.height = this.nativeElement.offsetHeight;
  }

  setElementPosition( position : {left: number, top: number} ){
    this.left = position.left;
    this.top = position.top;
    this.nativeElement.style.transform = `translate(${position.left}px,${position.top}px)`;
  }

}

@Component({
  selector: 'lc-shift-box',
  templateUrl: './lc-shift-box.component.html',
  styleUrls: ['./lc-shift-box.component.css'],
  host:{
    '(pointerdown)':'onPointerDown($event)',
    '(pointermove)': 'onPointerMove($event)',
    '(pointerup)':'onPointerEnd($event)',
    '(pointerleave)':'onPointerLeave($event)'
  }

})
export class LcShiftBox implements OnInit {

  @Input() options: any;

  containerElement: AbstractElement;

  movableElement: AbstractElement;
  
  pointerOffset : { fromLeft: number, fromTop: number } = { fromLeft: 0, fromTop: 0 };

  allowMove: boolean = false;

  constructor(private elementRef: ElementRef) {}
  
  ngOnInit() {
    this.containerElement = new AbstractElement(this.elementRef.nativeElement);
    this.containerElement.nativeElement.ontouchmove = this.onTouchMove.bind(this);
  }

  onPointerDown(event: PointerEvent){
    let target = event.target as HTMLElement;

    // Moveable container can cover other elements, like buttons or other containers.
    // If pointerdown event is made directly on movecontainer, we return.
    // It needs to continue propagation of event to other elements.
    if (target == this.containerElement.nativeElement) {
      return;
    }
    
    if ( target.classList.contains("lc-shift-hook") ) {
      let element = this.FindMovableElement(target);
      
      this.movableElement = new AbstractElement(element);
      
      // Moves element on the foreground.
      this.containerElement.nativeElement.appendChild(element);

      this.setPointerOffset({x: event.clientX, y: event.clientY});

      this.setMovedStyle();
      
      this.allowMove = true;
    }

    event.stopPropagation();
  }

  private FindMovableElement (element: HTMLElement): HTMLElement {
    while (element.parentElement != this.containerElement.nativeElement) {
      element = element.parentElement;
    }
    return element;
  }

  public setPointerOffset(pointerPosition: { x: number, y: number }) {
    this.pointerOffset.fromLeft = pointerPosition.x - this.movableElement.left;
    this.pointerOffset.fromTop = pointerPosition.y - this.movableElement.top;
  }

  public setMovedStyle() {
    this.movableElement.nativeElement.classList.add("lc-shift-moved");
  }

  public removeMovedStyle() {
    if (this.movableElement) {
      this.movableElement.nativeElement.classList.remove("lc-shift-moved");
    }
  }

  onPointerMove(event: PointerEvent){
    if (!this.allowMove) return;
    
    this.setElementPosition({ x: event.clientX, y: event.clientY });
    
    event.preventDefault();
  }

  public setElementPosition(pointerPosition: { x: number, y: number }) {
    let left = pointerPosition.x - this.pointerOffset.fromLeft;
    let top = pointerPosition.y - this.pointerOffset.fromTop;
    this.movableElement.setElementPosition({left: left, top: top});
  }

  onPointerEnd(event: PointerEvent){
    this.allowMove = false;
    this.removeMovedStyle();
  }

  onPointerLeave(event: PointerEvent){
    if (this.allowMove){
      this.allowMove = false;
      this.removeMovedStyle();
      window.getSelection().removeAllRanges();
    }
  }

  onTouchMove(event: TouchEvent){
    if (this.allowMove) {
      event.preventDefault();
    }
  }

}

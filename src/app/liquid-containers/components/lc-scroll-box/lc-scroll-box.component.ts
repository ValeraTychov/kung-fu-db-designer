import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';

export class ElementPosition{
  left:number;
  top:number;
}

@Component({
  selector: 'lc-scroll-box',
  templateUrl: './lc-scroll-box.component.html',
  styleUrls: ['./lc-scroll-box.component.css'],
  host: {
    '(pointerdown)':'onPointerDown($event)',
    '(pointermove)': 'onPointerMove($event)',
    '(pointerup)':'onPointerEnd($event)',
    '(pointerleave)':'onPointerLeave($event)',
    '(touchmove)':'onTouchMove($event)',
    '[scrollLeft]':'scrollPosition.left',
    '[scrollTop]':'scrollPosition.top'

  }
})
export class LcScrollBox implements OnInit {

  // Scroll shift to cursor shift ratio. 
  @Input () sensitivity: number = 1;
  
  @Output() scrollChanged = new EventEmitter<ElementPosition>();

  allowMove: boolean = false;

  containerElement: HTMLElement;

  scrollPosition: ElementPosition = { left: 0, top: 0 }

  private startCursorPosition: { x: number, y: number } = { x: 0, y: 0 };

  private startScrollPosition: ElementPosition = { left: 0, top: 0 };

  constructor(private elementRef: ElementRef) {
    this.containerElement = elementRef.nativeElement;
  }

  ngOnInit() {
  }
   
  getScrollPositionFromElement(): ElementPosition {
    let left = this.containerElement.scrollLeft;
    let top = this.containerElement.scrollTop;

    return { left: left, top: top }
  };

  onPointerDown(event: PointerEvent){
    window.getSelection().removeAllRanges();
    
    let target = event.target as HTMLElement;

    while (target != this.containerElement){
      if ( target.classList.contains("lc-no-scroll") ) {
        event.stopPropagation();
        return;
      }
      target = target.parentElement;
    }
    // In Mozilla
    // It prevents our event handling when the pointer is on scrollbars of the element.
    if (event.clientX >= this.getVerticalScrollBarOffsetLeft() ||
        event.clientY >= this.getHorizontalScrollBarOffsetTop() ) {

      return; 
    }

    this.startScrollPosition = this.getScrollPositionFromElement();
    this.startCursorPosition = { x: event.clientX, y: event.clientY }

    this.allowMove = true;

    event.stopPropagation();
  }

  getVerticalScrollBarOffsetLeft(): number {
    let elemRect: ClientRect = this.containerElement.getBoundingClientRect();

    return elemRect.left + this.containerElement.clientWidth;
  }

  getHorizontalScrollBarOffsetTop(): number {
    let elemRect: ClientRect = this.containerElement.getBoundingClientRect();
    return elemRect.top + this.containerElement.clientHeight;
  }

/*   onMoveStart(event: PointerEvent){
    if (!this.allowMove) return;

    this.isMoving = true;

    this.startScrollPosition = this.getScrollPositionFromElement();
    this.startCursorPosition = { x: event.center.x, y: event.center.y }

  } */

  onPointerMove(event: PointerEvent){
    if (!this.allowMove) return;

    this.updateScrollPosition({ x: event.clientX, y: event.clientY });



  }

  updateScrollPosition(cursorPosition: { x: number, y: number }) {
    // Quickmath 
    // scrollPosition - startScrollPosition = sensitivity * (cursorPosition - startCursorPosition);
    let deltaX = this.sensitivity * (this.startCursorPosition.x - cursorPosition.x);
    let deltaY = this.sensitivity * (this.startCursorPosition.y - cursorPosition.y);
    let left = this.startScrollPosition.left + deltaX;
    let top = this.startScrollPosition.top + deltaY;
    
    this.scrollPosition = { left: left, top: top };
  }

  onPointerEnd(event: PointerEvent){
    this.allowMove = false;
    this.emitCurentScroll();
  }

  onPointerLeave(event: PointerEvent){
    if (this.allowMove){
      this.allowMove = false;
      window.getSelection().removeAllRanges();
      this.emitCurentScroll();
    }
  }

  emitCurentScroll(){
    this.scrollChanged.emit(this.getScrollPositionFromElement());
  }

  onTouchMove(event: TouchEvent){
    if (this.allowMove) {
      event.preventDefault();
    }
  }

}

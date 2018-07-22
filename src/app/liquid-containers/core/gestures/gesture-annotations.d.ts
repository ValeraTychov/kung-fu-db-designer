/** 
 * The MIT License
 *  
 * @license
 * Copyright (c) 2014-2018 Google, Inc.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
/** @docs-private */
export interface HammerInput {
    preventDefault: () => {};
    deltaX: number;
    deltaY: number;
    center: {
        x: number;
        y: number;
    };
}
/** @docs-private */
export interface HammerStatic {
    new (element: HTMLElement | SVGElement, options?: any): HammerManager;
    Pan: Recognizer;
    Swipe: Recognizer;
    Press: Recognizer;
}
/** @docs-private */
export interface Recognizer {
    new (options?: any): Recognizer;
    recognizeWith(otherRecognizer: Recognizer | string): Recognizer;
}
/** @docs-private */
export interface RecognizerStatic {
    new (options?: any): Recognizer;
}
/** @docs-private */
export interface HammerInstance {
    on(eventName: string, callback: Function): void;
    off(eventName: string, callback: Function): void;
}
/** @docs-private */
export interface HammerManager {
    add(recogniser: Recognizer | Recognizer[]): Recognizer;
    set(options: any): HammerManager;
    emit(event: string, data: any): void;
    off(events: string, handler?: Function): void;
    on(events: string, handler: Function): void;
}
/** @docs-private */
export interface HammerOptions {
    cssProps?: {
        [key: string]: string;
    };
    domEvents?: boolean;
    enable?: boolean | ((manager: HammerManager) => boolean);
    preset?: any[];
    touchAction?: string;
    recognizers?: any[];
    inputClass?: HammerInput;
    inputTarget?: EventTarget;
}

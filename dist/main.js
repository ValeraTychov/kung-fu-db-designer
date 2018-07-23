(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-header {\r\n    position: absolute;\r\n    height: 48px;\r\n    left: 0px;\r\n    right: 0px;\r\n    z-index: 1;\r\n    box-shadow: 0px 2px 5px rgba(0,0,0,0.6);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-body>\r\n    <app-scheme-editor></app-scheme-editor>\r\n</app-body>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _liquid_containers_liquid_containers_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./liquid-containers/liquid-containers.module */ "./src/app/liquid-containers/liquid-containers.module.ts");
/* harmony import */ var _scheme_editor_scheme_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheme-editor/scheme-editor.component */ "./src/app/scheme-editor/scheme-editor.component.ts");
/* harmony import */ var _tables_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tables/table/table.component */ "./src/app/tables/table/table.component.ts");
/* harmony import */ var _tables_field_list_field_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tables/field-list/field-list.component */ "./src/app/tables/field-list/field-list.component.ts");
/* harmony import */ var _tables_field_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tables/field/field.component */ "./src/app/tables/field/field.component.ts");
/* harmony import */ var _tables_table_options_table_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tables/table-options/table-options.component */ "./src/app/tables/table-options/table-options.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _body_body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"],
                _scheme_editor_scheme_editor_component__WEBPACK_IMPORTED_MODULE_6__["SchemeEditorComponent"],
                _tables_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"],
                _tables_field_list_field_list_component__WEBPACK_IMPORTED_MODULE_8__["FieldListComponent"],
                _tables_field_field_component__WEBPACK_IMPORTED_MODULE_9__["FieldComponent"],
                _tables_table_options_table_options_component__WEBPACK_IMPORTED_MODULE_10__["TableOptionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _liquid_containers_liquid_containers_module__WEBPACK_IMPORTED_MODULE_5__["LiquidContainersModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    position: absolute;\r\n    top: 48px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;    \r\n}"

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyComponent = /** @class */ (function () {
    function BodyComponent() {
    }
    BodyComponent.prototype.ngOnInit = function () {
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-row {\r\n    display: flex;\r\n    background-color: #1976d2;\r\n    align-items: center;\r\n    height: 48px;\r\n}\r\n\r\n.label {\r\n    margin-left: 20px;\r\n    color: white;\r\n    font-size: 20px;\r\n    min-width: 200px;\r\n}\r\n\r\n.icon-container {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    width: 100%;\r\n}\r\n\r\n.icon-container img {\r\n    height: 32px;\r\n    margin-right: 20px;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-row\">\r\n  <div class=\"label\">\r\n    <p>Kung Fu Db Designer</p>\r\n  </div>\r\n  <div class=\"icon-container\">\r\n    <a href=\"https://github.com/ValeraTychov/kung-fu-db-designer\">\r\n      <img src=\"assets/github-icon.svg\" alt=\"GitHub\">\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/liquid-containers/components/lc-scroll-box/lc-scroll-box.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/liquid-containers/components/lc-scroll-box/lc-scroll-box.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    position: relative;\r\n    display: block;\r\n    overflow: scroll;\r\n}\r\n\r\n:host(.ondrag) {\r\n    cursor: move;\r\n}\r\n\r\n:host /deep/ .lc-no-scroll{\r\n    -webkit-user-select: text;\r\n       -moz-user-select: text;\r\n        -ms-user-select: text;\r\n            user-select: text;\r\n}\r\n"

/***/ }),

/***/ "./src/app/liquid-containers/components/lc-scroll-box/lc-scroll-box.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/liquid-containers/components/lc-scroll-box/lc-scroll-box.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),

/***/ "./src/app/liquid-containers/components/lc-scroll-box/lc-scroll-box.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/liquid-containers/components/lc-scroll-box/lc-scroll-box.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LcScrollBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcScrollBox", function() { return LcScrollBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LcScrollBox = /** @class */ (function () {
    function LcScrollBox(elementRef) {
        this.elementRef = elementRef;
        // Scroll shift to cursor shift ratio. 
        this.sensitivity = 1;
        this.allowMove = false;
        this.scrollPosition = { left: 0, top: 0 };
        this.startCursorPosition = { x: 0, y: 0 };
        this.startScrollPosition = { left: 0, top: 0 };
        this.containerElement = elementRef.nativeElement;
    }
    LcScrollBox.prototype.getScrollPositionFromElement = function () {
        var left = this.containerElement.scrollLeft;
        var top = this.containerElement.scrollTop;
        return { left: left, top: top };
    };
    ;
    LcScrollBox.prototype.ngOnInit = function () {
    };
    LcScrollBox.prototype.onPointerDown = function (event) {
        window.getSelection().removeAllRanges();
        var target = event.target;
        while (target != this.containerElement) {
            if (target.classList.contains("lc-no-scroll")) {
                event.stopPropagation();
                return;
            }
            target = target.parentElement;
        }
        // In Mozilla
        // It prevents our event handling when the pointer is on scrollbars of the element.
        if (event.clientX >= this.getVerticalScrollBarOffsetLeft() ||
            event.clientY >= this.getHorizontalScrollBarOffsetTop()) {
            return;
        }
        this.startScrollPosition = this.getScrollPositionFromElement();
        this.startCursorPosition = { x: event.clientX, y: event.clientY };
        this.allowMove = true;
        event.stopPropagation();
    };
    LcScrollBox.prototype.getVerticalScrollBarOffsetLeft = function () {
        var elemRect = this.containerElement.getBoundingClientRect();
        return elemRect.left + this.containerElement.clientWidth;
    };
    LcScrollBox.prototype.getHorizontalScrollBarOffsetTop = function () {
        var elemRect = this.containerElement.getBoundingClientRect();
        return elemRect.top + this.containerElement.clientHeight;
    };
    /*   onMoveStart(event: PointerEvent){
        if (!this.allowMove) return;
    
        this.isMoving = true;
    
        this.startScrollPosition = this.getScrollPositionFromElement();
        this.startCursorPosition = { x: event.center.x, y: event.center.y }
    
      } */
    LcScrollBox.prototype.onPointerMove = function (event) {
        if (!this.allowMove)
            return;
        this.updateScrollPosition({ x: event.clientX, y: event.clientY });
    };
    LcScrollBox.prototype.updateScrollPosition = function (cursorPosition) {
        // Quickmath 
        // scrollPosition - startScrollPosition = sensitivity * (cursorPosition - startCursorPosition);
        var deltaX = this.sensitivity * (this.startCursorPosition.x - cursorPosition.x);
        var deltaY = this.sensitivity * (this.startCursorPosition.y - cursorPosition.y);
        var left = this.startScrollPosition.left + deltaX;
        var top = this.startScrollPosition.top + deltaY;
        this.scrollPosition = { left: left, top: top };
    };
    LcScrollBox.prototype.onPointerEnd = function (event) {
        this.allowMove = false;
    };
    LcScrollBox.prototype.onPointerLeave = function (event) {
        if (this.allowMove) {
            this.allowMove = false;
            window.getSelection().removeAllRanges();
        }
    };
    LcScrollBox.prototype.onTouchMove = function (event) {
        if (this.allowMove) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LcScrollBox.prototype, "sensitivity", void 0);
    LcScrollBox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lc-scroll-box',
            template: __webpack_require__(/*! ./lc-scroll-box.component.html */ "./src/app/liquid-containers/components/lc-scroll-box/lc-scroll-box.component.html"),
            styles: [__webpack_require__(/*! ./lc-scroll-box.component.css */ "./src/app/liquid-containers/components/lc-scroll-box/lc-scroll-box.component.css")],
            host: {
                '(pointerdown)': 'onPointerDown($event)',
                '(pointermove)': 'onPointerMove($event)',
                '(pointerup)': 'onPointerEnd($event)',
                '(pointerleave)': 'onPointerLeave($event)',
                '(touchmove)': 'onTouchMove($event)',
                '[scrollLeft]': 'scrollPosition.left',
                '[scrollTop]': 'scrollPosition.top',
                '[class.ondrag]': 'isMoving'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LcScrollBox);
    return LcScrollBox;
}());



/***/ }),

/***/ "./src/app/liquid-containers/components/lc-shift-box/lc-shift-box.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/liquid-containers/components/lc-shift-box/lc-shift-box.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    position: relative;\r\n    overflow: hidden;\r\n}"

/***/ }),

/***/ "./src/app/liquid-containers/components/lc-shift-box/lc-shift-box.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/liquid-containers/components/lc-shift-box/lc-shift-box.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),

/***/ "./src/app/liquid-containers/components/lc-shift-box/lc-shift-box.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/liquid-containers/components/lc-shift-box/lc-shift-box.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AbstractElement, LcShiftBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractElement", function() { return AbstractElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LcShiftBox", function() { return LcShiftBox; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AbstractElement = /** @class */ (function () {
    function AbstractElement(nativeElement) {
        this.left = 0;
        this.top = 0;
        this.nativeElement = nativeElement;
        this.getPositionFromElement();
        this.getSizeFromElement();
    }
    AbstractElement.prototype.getPositionFromElement = function () {
        if (!this.nativeElement.style.transform) {
            return;
        }
        var transform = this.nativeElement.style.transform;
        var translate = transform.match(/translate.+?\)/);
        if (!translate) {
            return;
        }
        var position = translate[0].match(/[-\d\.]+/g);
        this.left = parseInt(position[0]);
        this.top = parseInt(position[1]);
    };
    AbstractElement.prototype.getSizeFromElement = function () {
        this.width = this.nativeElement.offsetWidth;
        this.height = this.nativeElement.offsetHeight;
    };
    AbstractElement.prototype.setElementPosition = function (position) {
        this.left = position.left;
        this.top = position.top;
        this.nativeElement.style.transform = "translate(" + position.left + "px," + position.top + "px)";
    };
    return AbstractElement;
}());

var LcShiftBox = /** @class */ (function () {
    function LcShiftBox(elementRef) {
        this.elementRef = elementRef;
        this.pointerOffset = { fromLeft: 0, fromTop: 0 };
        this.allowMove = false;
    }
    LcShiftBox.prototype.ngOnInit = function () {
        this.containerElement = new AbstractElement(this.elementRef.nativeElement);
        this.containerElement.nativeElement.ontouchmove = this.onTouchMove.bind(this);
    };
    LcShiftBox.prototype.onPointerDown = function (event) {
        var target = event.target;
        // Moveable container can cover other elements, like buttons or other containers.
        // If pointerdown event is made directly on movecontainer, we return.
        // It needs to continue propagation of event to other elements.
        if (target == this.containerElement.nativeElement) {
            return;
        }
        if (target.classList.contains("lc-shift-hook")) {
            var element = this.FindMovableElement(target);
            this.movableElement = new AbstractElement(element);
            // Moves element on the foreground.
            this.containerElement.nativeElement.appendChild(element);
            this.setPointerOffset({ x: event.clientX, y: event.clientY });
            this.allowMove = true;
        }
        event.stopPropagation();
    };
    LcShiftBox.prototype.FindMovableElement = function (element) {
        while (element.parentElement != this.containerElement.nativeElement) {
            element = element.parentElement;
        }
        return element;
    };
    LcShiftBox.prototype.setPointerOffset = function (pointerPosition) {
        this.pointerOffset.fromLeft = pointerPosition.x - this.movableElement.left;
        this.pointerOffset.fromTop = pointerPosition.y - this.movableElement.top;
    };
    LcShiftBox.prototype.onPointerMove = function (event) {
        if (!this.allowMove)
            return;
        this.setElementPosition({ x: event.clientX, y: event.clientY });
        event.preventDefault();
    };
    LcShiftBox.prototype.setElementPosition = function (pointerPosition) {
        var left = pointerPosition.x - this.pointerOffset.fromLeft;
        var top = pointerPosition.y - this.pointerOffset.fromTop;
        this.movableElement.setElementPosition({ left: left, top: top });
    };
    LcShiftBox.prototype.onPointerEnd = function (event) {
        this.allowMove = false;
    };
    LcShiftBox.prototype.onPointerLeave = function (event) {
        if (this.allowMove) {
            this.allowMove = false;
            window.getSelection().removeAllRanges();
        }
    };
    LcShiftBox.prototype.onTouchMove = function (event) {
        if (this.allowMove) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LcShiftBox.prototype, "options", void 0);
    LcShiftBox = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lc-shift-box',
            template: __webpack_require__(/*! ./lc-shift-box.component.html */ "./src/app/liquid-containers/components/lc-shift-box/lc-shift-box.component.html"),
            styles: [__webpack_require__(/*! ./lc-shift-box.component.css */ "./src/app/liquid-containers/components/lc-shift-box/lc-shift-box.component.css")],
            host: {
                '(pointerdown)': 'onPointerDown($event)',
                '(pointermove)': 'onPointerMove($event)',
                '(pointerup)': 'onPointerEnd($event)',
                '(pointerleave)': 'onPointerLeave($event)'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LcShiftBox);
    return LcShiftBox;
}());



/***/ }),

/***/ "./src/app/liquid-containers/liquid-containers.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/liquid-containers/liquid-containers.module.ts ***!
  \***************************************************************/
/*! exports provided: LiquidContainersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiquidContainersModule", function() { return LiquidContainersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_lc_scroll_box_lc_scroll_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/lc-scroll-box/lc-scroll-box.component */ "./src/app/liquid-containers/components/lc-scroll-box/lc-scroll-box.component.ts");
/* harmony import */ var _components_lc_shift_box_lc_shift_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/lc-shift-box/lc-shift-box.component */ "./src/app/liquid-containers/components/lc-shift-box/lc-shift-box.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LiquidContainersModule = /** @class */ (function () {
    function LiquidContainersModule() {
    }
    LiquidContainersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_lc_scroll_box_lc_scroll_box_component__WEBPACK_IMPORTED_MODULE_1__["LcScrollBox"],
                _components_lc_shift_box_lc_shift_box_component__WEBPACK_IMPORTED_MODULE_2__["LcShiftBox"]
            ],
            imports: [],
            exports: [
                _components_lc_scroll_box_lc_scroll_box_component__WEBPACK_IMPORTED_MODULE_1__["LcScrollBox"],
                _components_lc_shift_box_lc_shift_box_component__WEBPACK_IMPORTED_MODULE_2__["LcShiftBox"]
            ],
            providers: [],
            bootstrap: []
        })
    ], LiquidContainersModule);
    return LiquidContainersModule;
}());



/***/ }),

/***/ "./src/app/scheme-editor/scheme-editor.component.css":
/*!***********************************************************!*\
  !*** ./src/app/scheme-editor/scheme-editor.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\nlc-scroll-box {\r\n    flex: 1 0 auto;\r\n    margin: 0px;\r\n}\r\n\r\n.work-area {\r\n    position: absolute; \r\n    width: 5000px; \r\n    height: 5000px; \r\n    background-image: url('/kung-fu-db-designer/assets/grid.png');\r\n}\r\n\r\n.work-area-shift-box {\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n}\r\n\r\n.add-button {\r\n    position: absolute;\r\n    left: 50px;\r\n    bottom: 50px;\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    text-decoration: none;\r\n    outline: none;\r\n    background-color: #1976d2;\r\n    font-size: 50px;\r\n    color: white;\r\n    border: none;\r\n    box-shadow: 2px 2px 10px black;\r\n    opacity: 0.6;\r\n}\r\n\r\n.add-button:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.add-button:active {\r\n    opacity: 1;\r\n    left: 52px;\r\n    bottom: 48px;\r\n    box-shadow: 0px 0px 10px black;\r\n}\r\n\r\n/* @media (max-height: 169px){\r\n    .add-button {\r\n        display: none;\r\n    }\r\n} */"

/***/ }),

/***/ "./src/app/scheme-editor/scheme-editor.component.html":
/*!************************************************************!*\
  !*** ./src/app/scheme-editor/scheme-editor.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n  <lc-scroll-box [sensitivity]=\"2\">\r\n    <div class=\"work-area\">\r\n      <lc-shift-box class=\"work-area-shift-box\">\r\n        <app-table *ngFor=\"let table of tables\" [tableId]=\"table.id\" style=\"transform: translate(50px,50px)\"></app-table>\r\n      </lc-shift-box>\r\n    </div>\r\n  </lc-scroll-box>\r\n\r\n</div>\r\n\r\n<button class=\"add-button\" (click)=\"addTable()\">+</button>"

/***/ }),

/***/ "./src/app/scheme-editor/scheme-editor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/scheme-editor/scheme-editor.component.ts ***!
  \**********************************************************/
/*! exports provided: SchemeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemeEditorComponent", function() { return SchemeEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tables_table_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tables/table-data.service */ "./src/app/tables/table-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SchemeEditorComponent = /** @class */ (function () {
    function SchemeEditorComponent(tableDataService) {
        this.tableDataService = tableDataService;
        this.tables = [];
    }
    SchemeEditorComponent.prototype.ngOnInit = function () {
        //this.tables = this.tableDataService.getTables();
    };
    SchemeEditorComponent.prototype.addTable = function () {
        this.tableDataService.createTable();
        this.tables = this.tableDataService.getTables();
        //console.log(newName);
    };
    SchemeEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scheme-editor',
            template: __webpack_require__(/*! ./scheme-editor.component.html */ "./src/app/scheme-editor/scheme-editor.component.html"),
            styles: [__webpack_require__(/*! ./scheme-editor.component.css */ "./src/app/scheme-editor/scheme-editor.component.css")],
            providers: [_tables_table_data_service__WEBPACK_IMPORTED_MODULE_1__["TableDataService"]]
        }),
        __metadata("design:paramtypes", [_tables_table_data_service__WEBPACK_IMPORTED_MODULE_1__["TableDataService"]])
    ], SchemeEditorComponent);
    return SchemeEditorComponent;
}());



/***/ }),

/***/ "./src/app/tables/field-list/field-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/tables/field-list/field-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tables/field-list/field-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/tables/field-list/field-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  field-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/tables/field-list/field-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/tables/field-list/field-list.component.ts ***!
  \***********************************************************/
/*! exports provided: FieldListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldListComponent", function() { return FieldListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldListComponent = /** @class */ (function () {
    function FieldListComponent() {
    }
    FieldListComponent.prototype.ngOnInit = function () {
    };
    FieldListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field-list',
            template: __webpack_require__(/*! ./field-list.component.html */ "./src/app/tables/field-list/field-list.component.html"),
            styles: [__webpack_require__(/*! ./field-list.component.css */ "./src/app/tables/field-list/field-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FieldListComponent);
    return FieldListComponent;
}());



/***/ }),

/***/ "./src/app/tables/field/field.component.css":
/*!**************************************************!*\
  !*** ./src/app/tables/field/field.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tables/field/field.component.html":
/*!***************************************************!*\
  !*** ./src/app/tables/field/field.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  field works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/tables/field/field.component.ts":
/*!*************************************************!*\
  !*** ./src/app/tables/field/field.component.ts ***!
  \*************************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldComponent = /** @class */ (function () {
    function FieldComponent() {
    }
    FieldComponent.prototype.ngOnInit = function () {
    };
    FieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field',
            template: __webpack_require__(/*! ./field.component.html */ "./src/app/tables/field/field.component.html"),
            styles: [__webpack_require__(/*! ./field.component.css */ "./src/app/tables/field/field.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/tables/table-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/tables/table-data.service.ts ***!
  \**********************************************/
/*! exports provided: TableDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDataService", function() { return TableDataService; });
/* harmony import */ var _tables_table_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tables/table.model */ "./src/app/tables/table.model.ts");
/* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TableDataService = /** @class */ (function () {
    function TableDataService() {
        this.tables = [];
        this._uniqueId = 0;
    }
    Object.defineProperty(TableDataService.prototype, "uniqueId", {
        get: function () {
            return this._uniqueId++;
        },
        enumerable: true,
        configurable: true
    });
    TableDataService.prototype.getTables = function () {
        return this.tables;
    };
    TableDataService.prototype.getTable = function (id) {
        var index = this.tables.findIndex(function (value, index, array) { return value.id === id; });
        if (index > -1) {
            return this.tables[index];
        }
    };
    TableDataService.prototype.createTable = function () {
        var uniqueId = this.uniqueId;
        var table = new _tables_table_model__WEBPACK_IMPORTED_MODULE_0__["Table"](uniqueId);
        table.name = 'Untitled' + uniqueId;
        this.tables.push(table);
    };
    TableDataService.prototype.deleteTable = function (id) {
        var index = this.tables.findIndex(function (value, index, array) { return value.id === id; });
        if (index > -1) {
            this.tables.splice(index, 1);
        }
    };
    //I think this method may become a sourse of type errors.
    //But it looks good instead explicit properties assignment.
    TableDataService.prototype.setTableProperties = function (id, properties) {
        var index = this.tables.findIndex(function (value, index, array) { return value.id === id; });
        if (index > -1) {
            var table = this.tables[index];
            for (var property in properties) {
                table[property] = properties[property];
            }
        }
    };
    TableDataService = __decorate([
        Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TableDataService);
    return TableDataService;
}());



/***/ }),

/***/ "./src/app/tables/table-options/table-options.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tables/table-options/table-options.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".options-container {\r\n    background-color: lightgray;\r\n    border: 1px solid black;  \r\n    margin: -1px;\r\n}"

/***/ }),

/***/ "./src/app/tables/table-options/table-options.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/tables/table-options/table-options.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"options-container\">\r\n  <input type=\"text\" /><br/>\r\n  <textarea></textarea><br/>\r\n  <button (click)=\"save()\">Save</button>\r\n  <button (click)=\"cancel()\">Cancel</button>\r\n  <button (click)=\"delete()\">Delete table</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tables/table-options/table-options.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/table-options/table-options.component.ts ***!
  \*****************************************************************/
/*! exports provided: TableOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableOptionsComponent", function() { return TableOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table-data.service */ "./src/app/tables/table-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableOptionsComponent = /** @class */ (function () {
    function TableOptionsComponent(tableDataServise) {
        this.tableDataServise = tableDataServise;
        this.canceled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TableOptionsComponent.prototype.ngOnInit = function () {
    };
    TableOptionsComponent.prototype.save = function () {
        var properties = {
            name: "test1",
            headerColor: "test2",
            comment: "test3"
        };
        this.tableDataServise.setTableProperties(this.tableId, properties);
        this.cancel();
    };
    TableOptionsComponent.prototype.cancel = function () {
        this.canceled.emit();
    };
    TableOptionsComponent.prototype.delete = function () {
        this.tableDataServise.deleteTable(this.tableId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TableOptionsComponent.prototype, "tableId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TableOptionsComponent.prototype, "canceled", void 0);
    TableOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-options',
            template: __webpack_require__(/*! ./table-options.component.html */ "./src/app/tables/table-options/table-options.component.html"),
            styles: [__webpack_require__(/*! ./table-options.component.css */ "./src/app/tables/table-options/table-options.component.css")]
        }),
        __metadata("design:paramtypes", [_table_data_service__WEBPACK_IMPORTED_MODULE_1__["TableDataService"]])
    ], TableOptionsComponent);
    return TableOptionsComponent;
}());



/***/ }),

/***/ "./src/app/tables/table.model.ts":
/*!***************************************!*\
  !*** ./src/app/tables/table.model.ts ***!
  \***************************************/
/*! exports provided: Table, Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
var Table = /** @class */ (function () {
    function Table(id) {
        this.id = id;
        this.name = "";
        this.headerColor = "";
        this.comment = "";
        this.fields = [];
    }
    return Table;
}());

var Field = /** @class */ (function () {
    function Field() {
    }
    return Field;
}());



/***/ }),

/***/ "./src/app/tables/table/table.component.css":
/*!**************************************************!*\
  !*** ./src/app/tables/table/table.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    position: absolute;\r\n}\r\n\r\n.table {\r\n    background-color: white;\r\n    border: 1px solid black;  \r\n    \r\n}\r\n\r\n.table-header {\r\n    display: flex;\r\n    align-self: center;\r\n    justify-content: space-between;\r\n    background-color: lightgray;\r\n    border: 1px solid black;  \r\n    margin: -1px;\r\n    height: 24px;\r\n}\r\n\r\np {\r\n    margin: 5px;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    line-height: 14px;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n}\r\n\r\n.options-button {\r\n    margin: 0px;\r\n    margin-right: 1px;\r\n    height: 24px;\r\n}\r\n\r\n.options-button img {\r\n    height: 18px;\r\n    margin: 3px;\r\n\r\n}\r\n\r\na {\r\n    margin: 5px;\r\n}\r\n\r\n.lc-shift-hook {\r\n    cursor: move;\r\n}"

/***/ }),

/***/ "./src/app/tables/table/table.component.html":
/*!***************************************************!*\
  !*** ./src/app/tables/table/table.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\r\n  <div class=\"table-header lc-shift-hook\">\r\n    <p class=\"lc-shift-hook\">{{table.name}}</p>\r\n    <button class=\"options-button\" (click)=\"tableOptionsOpen()\">\r\n      <img src=\"assets/options-icon.svg\" alt=\"\">\r\n    </button>\r\n  </div>\r\n  <div class=\"table-comment\">{{table.comment}}</div>\r\n  <app-table-options \r\n    *ngIf=\"isTableOptionsActive\"\r\n    [tableId]=\"tableId\"\r\n    (canceled)=\"onCanceled($event)\"  \r\n  >\r\n  </app-table-options>\r\n\r\n  <app-field-list>\r\n\r\n  </app-field-list>\r\n\r\n  <div class=\"footer\">\r\n    <a href=\"#\">Add Field</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/tables/table/table.component.ts":
/*!*************************************************!*\
  !*** ./src/app/tables/table/table.component.ts ***!
  \*************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../table-data.service */ "./src/app/tables/table-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponent = /** @class */ (function () {
    function TableComponent(tableDataServise) {
        this.tableDataServise = tableDataServise;
        this.isTableOptionsActive = false;
    }
    TableComponent.prototype.ngOnInit = function () {
        this.table = this.tableDataServise.getTable(this.tableId);
    };
    TableComponent.prototype.onCanceled = function () {
        this.tableOptionsClose();
    };
    TableComponent.prototype.tableOptionsOpen = function () {
        this.isTableOptionsActive = true;
    };
    TableComponent.prototype.tableOptionsClose = function () {
        this.isTableOptionsActive = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TableComponent.prototype, "tableId", void 0);
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/tables/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/tables/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [_table_data_service__WEBPACK_IMPORTED_MODULE_1__["TableDataService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Github\kung-fu-db-designer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
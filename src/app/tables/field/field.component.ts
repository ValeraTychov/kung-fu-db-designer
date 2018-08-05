import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { Field } from '../field.model';
import { FieldDataService } from '../field-data.service';
import { ConnectionLinesService } from '../../connection-lines/connection-lines.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  
  @Input() currentField: Field;
  
  isFieldOptionsActive: boolean = false;

  constructor(private elementRef: ElementRef,
              private fieldDataService: FieldDataService,
              private connectionLinesService: ConnectionLinesService) { }

  ngOnInit() {
    let nativeElement: HTMLElement = this.elementRef.nativeElement;
    this.fieldDataService.setFieldProperties(this.currentField.id, {nativeElement: nativeElement})
  }

  ngDoCheck(){

  }

  public onCanceled(){
    this.fieldOptionsClose();
  }

  public fieldOptionsToggle(){
    this.isFieldOptionsActive = !this.isFieldOptionsActive;
  }

  public fieldOptionsOpen(){
    this.isFieldOptionsActive = true;
  }

  public fieldOptionsClose(){
    this.isFieldOptionsActive = false;
  }

  public getArgumentsString(){
    return ""
  }
}

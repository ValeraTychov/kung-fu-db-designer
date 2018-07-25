import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FieldDataService } from '../field-data.service';

class CustomProperties {
  public name: string;
  public type: string;
  public size: number;
  public default: any;

  public isPrimaryKey: boolean;
  public isAllowNulls: boolean;
  public isUnique: boolean;
  public isAutoIncrement: boolean;
  public isForeignKey: boolean;
}

@Component({
  selector: 'app-field-options',
  templateUrl: './field-options.component.html',
  styleUrls: ['./field-options.component.css']
})
export class FieldOptionsComponent implements OnInit {

  @Input() fieldId: number;

  @Output() canceled = new EventEmitter<void>();  
  
  customProperties: CustomProperties;

  constructor(private fieldDataServise: FieldDataService) { }

  ngOnInit() {
    this.initialCustomProperties();
  }

  initialCustomProperties(){
    let field = this.fieldDataServise.getField(this.fieldId);
    this.customProperties = new CustomProperties();
    
    for (var property in field){
      this.customProperties[property] = field[property];
    }
  }

  public save() {
    this.fieldDataServise.setFieldProperties(this.fieldId, this.customProperties);
    
    this.cancel();
  }

  public cancel() {
    this.canceled.emit();
  }

  public delete() {
    this.fieldDataServise.deleteField(this.fieldId);
  }

}

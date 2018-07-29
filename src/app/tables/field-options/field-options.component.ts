import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

import { SqlTypeDefinition, SqlType } from '../sql-types.model';
import { Table } from '../table.model';
import { Field } from '../field.model';
import { FieldDataService } from '../field-data.service';
import { TableDataService } from '../table-data.service';

export class CustomProperties {
  public name: string;
  public type: SqlType;
  public default: string;

  public isPrimaryKey: boolean;
  public isAllowNulls: boolean;
  public isUnique: boolean;
  public isAutoIncrement: boolean;
  public isForeignKey: boolean;

  public foreignTable: Table;
  public foreignField: Field;
}

@Component({
  selector: 'app-field-options',
  templateUrl: './field-options.component.html',
  styleUrls: ['./field-options.component.css']
})
export class FieldOptionsComponent implements OnInit {

  @Input() currentField: Field;

  @Output() canceled = new EventEmitter<void>(); 

  public customProperties: CustomProperties;

  public sqlTypesDefinitionList: SqlTypeDefinition[];

  public tableList: Table[];

  public foreignFieldList: Field[];

  public currentTable: Table;

  constructor(private fieldDataServise: FieldDataService,
    private tableDataServise: TableDataService,
    @Inject('sqlTypeDefinitionList') public sqlTypeDefinitionList: Array<SqlTypeDefinition>) {}

  ngOnInit() {
    this.setInitialCustomProperties();

    this.setTableList();
    this.setFieldList();
  }

  setInitialCustomProperties(){
    let customProperties = new CustomProperties();
    
    for (var property in this.currentField){
      customProperties[property] = this.currentField[property];
    }
    this.customProperties = customProperties;
  }

  setTableList(){
    this.tableList = this.tableDataServise.getTables();
    this.currentTable = this.currentField.table;
  }

  setFieldList(){
    if (this.customProperties.foreignTable){
      this.foreignFieldList = this.customProperties.foreignTable.fields;
      return;
    }
    this.foreignFieldList = [];
  }

  public onForeignTableChange() {
    let selectedTable = this.customProperties.foreignTable;
    this.foreignFieldList = selectedTable.fields;
  }

  public save() {
    this.fieldDataServise.setFieldProperties(this.currentField.id, this.customProperties);
    this.cancel();
  }

  public cancel() {
    this.canceled.emit();
  }

  public delete() {
    this.fieldDataServise.deleteField(this.currentField.id);
  }

}

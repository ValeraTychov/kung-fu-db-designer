import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FieldOptionsService, FieldOptionsFormModel } from './field-options.service';
import { SqlTypeDefinition } from '../sql-types.model';
import { Table } from '../table.model';
import { Field } from '../field.model';

@Component({
  selector: 'app-field-options',
  templateUrl: './field-options.component.html',
  styleUrls: ['./field-options.component.css'],
  providers: [FieldOptionsService]
})
export class FieldOptionsComponent implements OnInit {

  @Input() fieldId: number;

  @Output() canceled = new EventEmitter<void>();  
  
  public formModel: FieldOptionsFormModel;

  public sqlTypesDefinitionList: SqlTypeDefinition[];

  public selectedTypeDefinition: SqlTypeDefinition; 

  public foreignTableList: Table[] = [];

  public selectedTable: Table;

  public foreignFieldList: Field[];

  constructor(private fieldOptionsService: FieldOptionsService) {}

  ngOnInit() {
    this.formModel = this.fieldOptionsService.getFormModel(this.fieldId);
    this.sqlTypesDefinitionList = this.fieldOptionsService.getSqlTypesDefinitionList();
    this.onTypeSelectorChange();
    this.onForeignTableChange();
  }

  public onTypeSelectorChange() {
    let typeName = this.formModel.type.name;
    this.selectedTypeDefinition = this.fieldOptionsService.getSqlTypeDefinitionByName(typeName);
    this.formModel.type.arguments = [];
  }

  public onForeignTableChange() {
    this.getForeignTableList();//говно не возвращает значения ... переделать
    let table = this.foreignTableList.find ( ( val ) => { return val.id == this.formModel.foreignTableId; } );
    this.foreignFieldList = table.fields;
    console.log(this.foreignTableList);
  }

  public save() {
    this.fieldOptionsService.save(this.fieldId, this.formModel);
    this.cancel();
  }

  public cancel() {
    this.canceled.emit();
  }

  public delete() {
    this.fieldOptionsService.deleteField(this.fieldId);
  }

  public checkSelectedTypeHasArguments(){
    return this.selectedTypeDefinition.arguments;
  }

  public getForeignTableList(){
    this.foreignTableList = this.fieldOptionsService.getForeignTableList(this.fieldId);
  }

}

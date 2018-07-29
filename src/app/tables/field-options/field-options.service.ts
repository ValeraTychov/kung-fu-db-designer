import { Injectable, Inject } from '@angular/core';

import { TableDataService } from '../table-data.service';
import { FieldDataService } from '../field-data.service';
import { SqlType, SqlTypeDefinition } from '../sql-types.model';
import { Table } from '../table.model';
import { Field } from '../field.model';

export class FieldOptionsFormModel {
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

@Injectable()
export class FieldOptionsService {

  constructor (private fieldDataServise: FieldDataService,
                private tableDataServise: TableDataService,
                @Inject('sqlTypeDefinitionList') private sqlTypeDefinitionList: Array<SqlTypeDefinition>) {}

  public getFormModel(fieldId: number): FieldOptionsFormModel {
    let formModel = new FieldOptionsFormModel();
    
    let field = this.fieldDataServise.getField(fieldId);
    for (var property in field){
      formModel[property] = field[property];
    }


    return formModel;
  }

  public save(fieldId: number, formModel: FieldOptionsFormModel){
    let field = this.fieldDataServise.getField(fieldId);
    field.name = formModel.name;
    field.type = formModel.type;
    field.default = formModel.default;
    field.isPrimaryKey = formModel.isPrimaryKey;
    field.isAllowNulls = formModel.isAllowNulls;
    field.isUnique = formModel.isUnique;
    field.isAutoIncrement = formModel.isAutoIncrement;
    field.isForeignKey = formModel.isForeignKey;
    field.foreignTable = formModel.foreignTable;
    field.foreignField = formModel.foreignField;

  }

  public deleteField(fieldId: number){
    this.fieldDataServise.deleteField(fieldId);
  }

  public getSqlTypesDefinitionList(){
    return this.sqlTypeDefinitionList;
  }

  public getSqlTypeDefinitionByName(typeName: string): SqlTypeDefinition{
    let sqlTypeDefinition = this.sqlTypeDefinitionList.find( (value) => {return value.name === typeName} )
    if (sqlTypeDefinition) return sqlTypeDefinition;
    return null;
  }

  public getTables(){
    return this.tableDataServise.getTables();
  }

  public getField(fieldId: number){
    return this.fieldDataServise.getField(fieldId);
  }

}
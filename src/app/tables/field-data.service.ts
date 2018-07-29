import { Field } from './field.model';
import { Injectable } from '@angular/core';

import { Repository } from './repository.generic';
import { SqlType } from './sql-types.model';
import { Table } from './table.model';

@Injectable()
export class FieldDataService {
  
  private repository: Repository<Field>;

  constructor (){
    this.repository = new Repository<Field>();
  }

  public getFields(){
    return this.repository.getAll();
  }

  public getField(id: number): Field {
    return this.repository.get(id);
  }

  public createField(table: Table){
    let newFieldId = this.repository.create(Field);
    let initialProperties = {table: table, name: 'Untitled' + newFieldId, type: new SqlType("binary")};
    this.repository.setProperties(newFieldId, initialProperties);
  }

  public deleteField(id: number){
    this.repository.delete(id);
  }

  //I think this method may become a sourse of type errors.
  //But it looks good instead explicit properties assignment.
  public setFieldProperties(id: number, properties: any){
    this.repository.setProperties(id, properties);
  }

}

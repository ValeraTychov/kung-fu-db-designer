import { Field } from '../tables/field.model';
import { Injectable } from '@angular/core';

@Injectable()
export class FieldDataService {

  private fields: Field[] = [];

  private _uniqueId = 0;
  private get uniqueId() {
    return this._uniqueId++;
  }

  public getFields(){
    return this.fields;
  }

  public getField(id: number): Field {
    let index = this.fields.findIndex((value, index, array) => {return value.id === id});
    if (index > -1){
      return this.fields[index];
    }
  }

  public createField(){
    let uniqueId = this.uniqueId;
    let field = new Field(uniqueId);
    field.name = 'Untitled' + uniqueId;
    this.fields.push(field);
  }

  public deleteField(id: number){
    let index = this.fields.findIndex((value, index, array) => {return value.id === id});
    if (index > -1){
      this.fields.splice(index, 1);
    }
  }

  //I think this method may become a sourse of type errors.
  //But it looks good instead explicit properties assignment.
  public setFieldProperties(id: number, properties: any){
    let index = this.fields.findIndex((value, index, array) => {return value.id === id});
    if (index > -1){
      let field = this.fields[index];
      
      for (var property in properties){
        field[property] = properties[property];
      }
    }
  }

}

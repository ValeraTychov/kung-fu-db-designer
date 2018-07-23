import { Table } from '../tables/table.model';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class TableDataService {

  private tables: Table[] = [];

  private _uniqueId = 0;
  private get uniqueId() {
    return this._uniqueId++;
  }

  public getTables(){
    return this.tables;
  }

  public getTable(id: number): Table {
    let index = this.tables.findIndex((value, index, array) => {return value.id === id});
    if (index > -1){
      return this.tables[index];
    }
  }

  public createTable(){
    let uniqueId = this.uniqueId;
    let table = new Table(uniqueId);
    table.name = 'Untitled' + uniqueId;
    this.tables.push(table);
  }

  public deleteTable(id: number){
    let index = this.tables.findIndex((value, index, array) => {return value.id === id});
    if (index > -1){
      this.tables.splice(index, 1);
    }
  }

  //I think this method may become a sourse of type errors.
  //But it looks good instead explicit properties assignment.
  public setTableProperties(id: number, properties: any){
    let index = this.tables.findIndex((value, index, array) => {return value.id === id});
    if (index > -1){
      let table = this.tables[index];
      
      for (var property in properties){
        table[property] = properties[property];
      }
    }
  }

}

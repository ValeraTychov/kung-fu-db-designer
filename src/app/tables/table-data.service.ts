import { Table } from './table.model';
import { Injectable } from '@angular/core';

import { Repository } from './repository.generic';

@Injectable()
export class TableDataService {

  private repository: Repository<Table>;

  public initStyles: [{style: string, value: string}];

  constructor (){
    this.repository = new Repository<Table>();
  }

  public getTables(){
    return this.repository.getAll();
  }

  public getTable(id: number): Table {
    return this.repository.get(id);
  }

  public createTable(styles?: any){
    let newTableId = this.repository.create(Table);
    let name = {name: 'Untitled' + newTableId};
    this.repository.setProperties(newTableId, name);
    
    this.initStyles = styles;
  }

  public deleteTable(id: number){
    this.repository.delete(id);
  }

  //I think this method may become a sourse of type errors.
  //But it looks good instead explicit properties assignment.
  public setTableProperties(id: number, properties: any){
    this.repository.setProperties(id, properties);
  }

}

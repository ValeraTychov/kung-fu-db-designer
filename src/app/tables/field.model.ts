import { SqlType } from "./sql-types.model";
import { Table } from "./table.model";

export class Field {

  public name: string;
  public type: SqlType;
  public default: any;

  public isPrimaryKey: boolean;

  private _isAllowNulls: boolean = false;
  public get isAllowNulls(): boolean{
    return this._isAllowNulls;
  }
  public set isAllowNulls(value: boolean){
    this._isAllowNulls = value && !this.isPrimaryKey;
  }

  public isUnique: boolean;
  public isAutoIncrement: boolean;
  public isForeignKey: boolean;
  public foreignTable: Table;
  public foreignField: Field;

  public table: Table;

  constructor(public id: number) {}

}
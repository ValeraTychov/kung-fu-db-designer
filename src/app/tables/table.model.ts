export class Table {
  
  public name: string = "";
  public headerColor: string = "";
  public comment: string = "";

  public fields: Field[] = [];

  constructor(public id: number) {}

}

export class Field {

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
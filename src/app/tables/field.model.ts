export class Field {

  public name: string;
  public type: string;
  public size: number;
  public default: any;

  public isPrimaryKey: boolean;

  private _isAllowNulls: boolean;
  public get isAllowNulls(): boolean{
    return this._isAllowNulls;
  }
  public set isAllowNulls(value: boolean){
    this._isAllowNulls = value && !this.isPrimaryKey;
  }

  public isUnique: boolean;
  public isAutoIncrement: boolean;
  public isForeignKey: boolean;

  constructor(public id: number) {}

}
import { Field } from './field.model';

export class Table {
  
  public name: string = "";
  public headerColor: string = "";
  public comment: string = "";

  public fields: Field[] = [];

  constructor(public id: number) {}

}
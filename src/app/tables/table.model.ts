import { Field } from './field.model';

export class Table {
  
  public name: string = "";
  public headerColor: string = "";
  public comment: string = "";

  public fields: Field[] = [];

  public initStyles: any;

  public nativeElement: HTMLElement;

  constructor(public id: number) {}

}
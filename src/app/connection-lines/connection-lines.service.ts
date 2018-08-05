import { Injectable } from "../../../node_modules/@angular/core";
import { Field } from "../tables/field.model";
import { ElementPosition } from "../core/app-interfaces";
import { SchemeEditorService } from "../scheme-editor/scheme-editor.service";
import { Table } from "../tables/table.model";

class CLTable {
  lineList: {connectionLine: ConnectionLine, connectionPoint: ConnectionPoint}[] = [];

  constructor (public table: Table){}
}

class FieldJoints {
  constructor (public leftJoint: ElementPosition, public rightJoint: ElementPosition){};
}

class ConnectionPoint{
  public fieldJoints: FieldJoints;
  constructor(public field: Field) {}
}

class ConnectionLine{
  public pathDString: string;
  
  constructor(public parent: ConnectionPoint, public child: ConnectionPoint){
    this.createPathDString();
  }

  public createPathDString() {
    let joints = this.chooseJoints();
    let x1 = joints.parent.left;
    let y1 = joints.parent.top;
    let x2 = joints.child.left;
    let y2 = joints.child.top;
    let xM = (x1+x2)/2;
    this.pathDString = `M${x1} ${y1} C ${xM} ${y1}, ${xM} ${y2}, ${x2} ${y2}`;
  }

  chooseJoints(): {parent: ElementPosition, child: ElementPosition}{
    let parentJoint = this.parent.fieldJoints.rightJoint;
    let childJoint = this.child.fieldJoints.leftJoint;
    return {parent: parentJoint, child: childJoint}
  }

}

@Injectable()
export class ConnectionLinesService{

  private tableList: CLTable[] = [];

  public lineList: ConnectionLine[] = [];

  constructor (private schemeEditorService: SchemeEditorService){}
  
  public addLine(parent: Field, child: Field){
    let parentPoint = new ConnectionPoint(parent);
    let childPoint = new ConnectionPoint(child);
    parentPoint.fieldJoints = this.getFieldJoints(parent.nativeElement);
    childPoint.fieldJoints = this.getFieldJoints(child.nativeElement);

    let newLine = new ConnectionLine(parentPoint, childPoint);
    newLine.createPathDString();
    
    this.lineList.push(newLine);

    let table1 = this.getTable(parent.table.id);
    table1.lineList.push({connectionLine: newLine, connectionPoint: parentPoint});

    let table2 = this.getTable(child.table.id);
    table2.lineList.push({connectionLine: newLine, connectionPoint: childPoint});
  }

  public changeLine(){
    
  }

/*   public updateLine(field: Field) {
    let line: ConnectionLine = this.lineList.
      .find(val => {return (val.parent.field === field)});
    line.parent.fieldJoints = this.getFieldJoints(field.nativeElement);
    line.createPathDString();
  } */

  public addTable(table: Table){
    let clTable: CLTable = new CLTable(table);
    this.tableList.push(clTable);
    console.log(this.tableList);
  }
  
  public getTable(id: number) {
    let clTable: CLTable = this.tableList.find((value, index, array) => {return value.table.id === id});
    if (clTable){
      return clTable;
    }
  }

  public deleteTable(id: number){
    let index = this.tableList.findIndex((value, index, array) => {return value.table.id === id});
    if (index > -1){
      this.tableList.splice(index, 1);
    }
    //TODO: Delete all bound lines there
  }

  public emit(table: Table){
    let lineList = this.getTable(table.id).lineList;
    for (let i=0; i < lineList.length ; i++){
      let fieldNativeElement = lineList[i].connectionPoint.field.nativeElement;
      let fj = this.getFieldJoints(fieldNativeElement);
      lineList[i].connectionPoint.fieldJoints = fj;
      lineList[i].connectionLine.createPathDString();
    }
    
  }

  public getFieldJoints(nativeElement: HTMLElement) {
    let fieldElementRect: ClientRect = nativeElement.getBoundingClientRect();
    let editorElementRect: ClientRect = this.schemeEditorService.editorRect;
    let editorScrollPosition = this.schemeEditorService.editorScrollPosition;

    let left = Math.floor(editorScrollPosition.left + fieldElementRect.left - editorElementRect.left);
    let right = Math.floor(left + fieldElementRect.width);
    let top = Math.floor(editorScrollPosition.top + fieldElementRect.top - editorElementRect.top + fieldElementRect.height / 2);
    
    let leftJoint = {left: left, top: top};
    let rightJoint = {left: right, top: top};
        
    return new FieldJoints(leftJoint, rightJoint);
  }



}
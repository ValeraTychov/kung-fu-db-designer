import { Component, OnInit, ElementRef } from '@angular/core';

import { Table } from '../tables/table.model';
import { TableDataService } from '../tables/table-data.service';
import { sqlTypeDefinitionList } from '../tables/sql-types.model';
import { ElementPosition } from '../liquid-containers/components/lc-scroll-box/lc-scroll-box.component';
import { SchemeEditorService } from './scheme-editor.service';
import { ConnectionLinesService } from '../connection-lines/connection-lines.service';

@Component({
  selector: 'app-scheme-editor',
  templateUrl: './scheme-editor.component.html',
  styleUrls: ['./scheme-editor.component.css'],
  providers: [TableDataService,
              SchemeEditorService,
              ConnectionLinesService,
              {provide: 'sqlTypeDefinitionList', useValue: sqlTypeDefinitionList}]
})
export class SchemeEditorComponent implements OnInit {

  tableList: Table[];
  
  constructor(private tableDataService: TableDataService,
              private schemeEditorService: SchemeEditorService,
              private connectionLinesService: ConnectionLinesService,
              private elementRef: ElementRef) {}

  ngOnInit() {
    this.tableList = this.tableDataService.getTables();
    this.setEditorInitialProperties();
  }

  setEditorInitialProperties() {
    let nativeElement: HTMLElement = this.elementRef.nativeElement;
    let editorRect: ClientRect = nativeElement.getBoundingClientRect();
    this.schemeEditorService.editorRect = editorRect; 
    
    this.schemeEditorService.editorScrollPosition = {left: 0, top: 0};
  }

  addTable(){
    let initPosition = this.getInitPosition();
    let styles = new Array<any>();
    styles.push(initPosition);
    this.tableDataService.createTable(styles);
  }

  onScrollChanged(scrollPosition: ElementPosition){
    this.schemeEditorService.editorScrollPosition = scrollPosition;
  }

  getInitPosition() {
    let left = this.schemeEditorService.editorScrollPosition.left + 50;
    let top = this.schemeEditorService.editorScrollPosition.top + 50;
    let style = "transform";
    let value = `translate(${left}px, ${top}px)`;
    return {style, value}
  }

  public onNewPosition(event: any){
    let element = event.element;
    let table: Table = this.tableList.find((value) => {return value.nativeElement === element});
    this.connectionLinesService.emit(table);
    //console.log(event.detail.top);
  }

}
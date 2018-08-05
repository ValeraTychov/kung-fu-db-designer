import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

import { Table } from '../table.model';
import { TableDataService } from '../table-data.service';
import { ConnectionLinesService } from '../../connection-lines/connection-lines.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() currentTable: Table;

  isTableOptionsActive: boolean = false;

  constructor(private tableDataService: TableDataService,
              private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    let nativeElement = this.elementRef.nativeElement;
    let initStyles = this.tableDataService.initStyles;
    for (let i = 0; i < initStyles.length; i++){
      let style = initStyles[i].style;
      let value = initStyles[i].value;
      this.renderer.setStyle(nativeElement, style, value);
    }
    this.tableDataService.setTableProperties(this.currentTable.id, {nativeElement: nativeElement});
  }

  public tableOptionsToggle(){
    this.isTableOptionsActive = !this.isTableOptionsActive;
  }

  public tableOptionsOpen(){
    this.isTableOptionsActive = true;
  }

  public tableOptionsClose(){
    this.isTableOptionsActive = false;
  }

}

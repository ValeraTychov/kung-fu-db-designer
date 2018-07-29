import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';

import { Table } from '../table.model';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableId: number;

  table: Table;

  isTableOptionsActive: boolean = false;

  constructor(private tableDataService: TableDataService,
              private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.table = this.tableDataService.getTable(this.tableId);
    let htmlElement = this.elementRef.nativeElement;
    let initStyles = this.tableDataService.initStyles;
    for (let i = 0; i < initStyles.length; i++){
      let style = initStyles[i].style;
      let value = initStyles[i].value;
      this.renderer.setStyle(htmlElement, style, value);
    }    
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

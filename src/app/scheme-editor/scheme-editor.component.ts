import { Component, OnInit } from '@angular/core';

import { Table } from '../tables/table.model';
import { TableDataService } from '../tables/table-data.service';
import { sqlTypeDefinitionList } from '../tables/sql-types.model';
import { ElementPosition } from '../liquid-containers/components/lc-scroll-box/lc-scroll-box.component';

@Component({
  selector: 'app-scheme-editor',
  templateUrl: './scheme-editor.component.html',
  styleUrls: ['./scheme-editor.component.css'],
  providers: [TableDataService, 
              {provide: 'sqlTypeDefinitionList', useValue: sqlTypeDefinitionList}]
})
export class SchemeEditorComponent implements OnInit {

  scrollPosition: ElementPosition = {left: 0, top: 0};

  tableList: Table[];
  
  constructor(private tableDataService: TableDataService) {}

  ngOnInit() {
    this.tableList = this.tableDataService.getTables();
  }

  addTable(){
    let initPosition = this.getInitPosition();
    let styles = new Array<any>();
    styles.push(initPosition);
    this.tableDataService.createTable(styles);
  }

  onScrollChanged(scrollPosition: ElementPosition){
    this.scrollPosition = scrollPosition;
  }

  getInitPosition() {
    let left = this.scrollPosition.left + 50;
    let top = this.scrollPosition.top + 50;
    let style = "transform";
    let value = `translate(${left}px, ${top}px)`;
    return {style, value}
  }

}
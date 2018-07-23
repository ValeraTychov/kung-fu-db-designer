import { Component, OnInit } from '@angular/core';

import { Table } from '../tables/table.model';
import { TableDataService } from '../tables/table-data.service';

@Component({
  selector: 'app-scheme-editor',
  templateUrl: './scheme-editor.component.html',
  styleUrls: ['./scheme-editor.component.css'],
  providers: [TableDataService]
})
export class SchemeEditorComponent implements OnInit {

  tables: Table[] = [];
  
  constructor(private tableDataService: TableDataService) {

  }

  ngOnInit() {
    //this.tables = this.tableDataService.getTables();
  }

  addTable(){
    this.tableDataService.createTable();
    this.tables = this.tableDataService.getTables();

    //console.log(newName);
  }

}

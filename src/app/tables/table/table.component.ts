import { Component, OnInit, Input } from '@angular/core';

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

  isFieldOptionsActive: boolean;

  constructor(private tableDataServise: TableDataService) {
  }

  ngOnInit() {
    this.table = this.tableDataServise.getTable(this.tableId);
  }

  public onCanceled(){
    this.tableOptionsClose();
  }

  public tableOptionsOpen(){
    this.isTableOptionsActive = true;
  }

  public tableOptionsClose(){
    this.isTableOptionsActive = false;
  }

}

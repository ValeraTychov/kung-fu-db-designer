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

  constructor(private tableDataService: TableDataService) {
  }

  ngOnInit() {
    this.table = this.tableDataService.getTable(this.tableId);
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

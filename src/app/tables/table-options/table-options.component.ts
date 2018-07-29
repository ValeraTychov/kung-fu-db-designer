import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TableDataService } from '../table-data.service';
import { Table } from '../table.model';

class CustomProperties {
  name: string;
  headerColor: string;
  comment: string;
}

@Component({
  selector: 'app-table-options',
  templateUrl: './table-options.component.html',
  styleUrls: ['./table-options.component.css']
})
export class TableOptionsComponent implements OnInit {

  @Input() currentTable: Table;

  @Output() canceled = new EventEmitter<void>();  

  customProperties: CustomProperties;

  constructor(private tableDataServise: TableDataService) { }

  ngOnInit() {
    this.setInitialCustomProperties();
  }

  setInitialCustomProperties(){
    this.customProperties = new CustomProperties();
    this.customProperties.name = this.currentTable.name;
    this.customProperties.headerColor = this.currentTable.headerColor;
    this.customProperties.comment = this.currentTable.comment;
  }

  public save() {
    this.tableDataServise.setTableProperties(this.currentTable.id, this.customProperties);
    
    this.cancel();
  }

  public cancel() {
    this.canceled.emit();
  }

  public delete() {
    this.tableDataServise.deleteTable(this.currentTable.id);
  }

}

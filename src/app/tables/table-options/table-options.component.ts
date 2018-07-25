import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TableDataService } from '../table-data.service';

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

  @Input() tableId: number;

  @Output() canceled = new EventEmitter<void>();  

  customProperties: CustomProperties;

  constructor(private tableDataServise: TableDataService) { }

  ngOnInit() {
    this.initialCustomProperties();
  }

  initialCustomProperties(){
    let table = this.tableDataServise.getTable(this.tableId);
    this.customProperties = new CustomProperties();
    this.customProperties.name = table.name;
    this.customProperties.headerColor = table.headerColor;
    this.customProperties.comment = table.comment;
  }

  public save() {
    this.tableDataServise.setTableProperties(this.tableId, this.customProperties);
    
    this.cancel();
  }

  public cancel() {
    this.canceled.emit();
  }

  public delete() {
    this.tableDataServise.deleteTable(this.tableId);
  }

}

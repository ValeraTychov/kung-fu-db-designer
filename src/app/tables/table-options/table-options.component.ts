import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-table-options',
  templateUrl: './table-options.component.html',
  styleUrls: ['./table-options.component.css']
})
export class TableOptionsComponent implements OnInit {
  
  constructor(private tableDataServise: TableDataService) { }

  ngOnInit() {
  }

  @Input() tableId: number;

  @Output() canceled = new EventEmitter<void>();

  public save() {
    let properties = {
      name: "test1",
      headerColor: "test2",
      comment: "test3"
    }
    this.tableDataServise.setTableProperties(this.tableId, properties);
    
    this.cancel();
  }

  public cancel() {
    this.canceled.emit();
  }

  public delete() {
    this.tableDataServise.deleteTable(this.tableId);
  }

}

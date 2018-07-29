import { Component, OnInit, Input } from '@angular/core';
import { Field } from '../field.model';
import { FieldDataService } from '../field-data.service';
import { Table } from '../table.model';
import { TableDataService } from '../table-data.service';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css'],
  providers: [ FieldDataService ]
})
export class FieldListComponent implements OnInit {

  @Input() tableId: number;

  fields: Field[] = [];

  table: Table;

  constructor(private fieldDataService: FieldDataService, private tableDataService: TableDataService) { }

  ngOnInit() {
    this.fields = this.fieldDataService.getFields();
    this.table = this.tableDataService.getTable(this.tableId);
    this.table.fields = this.fields;
  }

  addField(){
    this.fieldDataService.createField(this.table);
  }

}
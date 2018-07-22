import { Component, OnInit, Input } from '@angular/core';

import { Table } from '../table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() model:Table;

  constructor() { }

  ngOnInit() {
    console.log(this.model.name);
  }

}

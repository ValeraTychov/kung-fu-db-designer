import { Component, OnInit } from '@angular/core';

import { Table } from '../tables/table.model';

@Component({
  selector: 'app-scheme-editor',
  templateUrl: './scheme-editor.component.html',
  styleUrls: ['./scheme-editor.component.css']
})
export class SchemeEditorComponent implements OnInit {

  tables: Table[];
  
  constructor() {
    this.tables = [];
    for (let i = 0; i < 10; i++){
      this.tables.push(new Table(i.toString()));
    }
  }

  ngOnInit() {
  }

  addTable(){
    let newName: string = (parseInt(this.tables[this.tables.length - 1].name) + 1).toString();
    
    this.tables.push(new Table(newName));
    console.log(newName);
  }

}

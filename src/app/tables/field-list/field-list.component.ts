import { Component, OnInit, ElementRef } from '@angular/core';
import { Field } from '../field.model';
import { FieldDataService } from '../field-data.service';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.css'],
  providers: [ FieldDataService ]
})
export class FieldListComponent implements OnInit {

  fields: Field[] = [];

  constructor(private fieldDataService: FieldDataService) { }

  ngOnInit() {
    this.fields = this.fieldDataService.getFields();
  }

  addField(){
    this.fieldDataService.createField();
  }

}
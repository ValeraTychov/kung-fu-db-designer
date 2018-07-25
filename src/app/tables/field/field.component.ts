import { Component, OnInit, Input } from '@angular/core';
import { FieldDataService } from '../field-data.service';
import { Field } from '../field.model';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  
  @Input() fieldId: number;

  private field: Field;
  
  isFieldOptionsActive: boolean = false;

  constructor(private fieldDataService: FieldDataService) { }

  ngOnInit() {
    this.field = this.fieldDataService.getField(this.fieldId);
  }

  public onCanceled(){
    this.fieldOptionsClose();
  }

  public fieldOptionsToggle(){
    this.isFieldOptionsActive = !this.isFieldOptionsActive;
  }

  public fieldOptionsOpen(){
    this.isFieldOptionsActive = true;
  }

  public fieldOptionsClose(){
    this.isFieldOptionsActive = false;
  }

}

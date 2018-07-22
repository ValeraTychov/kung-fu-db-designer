import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeEditorComponent } from './scheme-editor.component';

describe('SchemeEditorComponent', () => {
  let component: SchemeEditorComponent;
  let fixture: ComponentFixture<SchemeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

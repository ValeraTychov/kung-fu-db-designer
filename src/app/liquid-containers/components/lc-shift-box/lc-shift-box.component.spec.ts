import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcShiftBox } from './lc-shift-box.component';

describe('LcShiftBox', () => {
  let component: LcShiftBox;
  let fixture: ComponentFixture<LcShiftBox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcShiftBox ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcShiftBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

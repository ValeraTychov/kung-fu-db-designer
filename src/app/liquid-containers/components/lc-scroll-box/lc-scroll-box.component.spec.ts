import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcScrollBox } from './lc-scroll-box.component';

describe('LcScrollBoxComponent', () => {
  let component: LcScrollBox;
  let fixture: ComponentFixture<LcScrollBox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcScrollBox ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcScrollBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

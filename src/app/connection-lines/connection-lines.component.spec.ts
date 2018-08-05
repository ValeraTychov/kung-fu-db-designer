import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionLinesComponent } from './connection-lines.component';

describe('ConnectionLinesContainerComponent', () => {
  let component: ConnectionLinesComponent;
  let fixture: ComponentFixture<ConnectionLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

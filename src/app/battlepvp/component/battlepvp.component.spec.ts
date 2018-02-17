import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlepvpComponent } from './battlepvp.component';

describe('BattlepvpComponent', () => {
  let component: BattlepvpComponent;
  let fixture: ComponentFixture<BattlepvpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattlepvpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlepvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterflyUnitComponent } from './butterfly-unit.component';

describe('ButterflyUnitComponent', () => {
  let component: ButterflyUnitComponent;
  let fixture: ComponentFixture<ButterflyUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButterflyUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterflyUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

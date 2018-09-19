import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButterflyLibComponent } from './butterfly-lib.component';

describe('ButterflyLibComponent', () => {
  let component: ButterflyLibComponent;
  let fixture: ComponentFixture<ButterflyLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButterflyLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButterflyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

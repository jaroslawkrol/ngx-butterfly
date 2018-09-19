import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs/index';

export interface ButterflyUnit {
  id?: string;
  src?: string;
  alt?: string;
  title?: string;
}

@Component({
  selector: 'ngx-butterfly-unit',
  templateUrl: './butterfly-unit.component.html',
  styleUrls: ['./butterfly-unit.component.scss']
})
export class ButterflyUnitComponent implements OnInit {

  @Input('unit')
  set setUnit(unit: ButterflyUnit) {
    this.unitSubject.next(unit);
  }

  private unitSubject = new Subject<ButterflyUnit>();
  public unit$: Observable<ButterflyUnit>;

  constructor() {
    this.unit$ = this.unitSubject.asObservable();
  }

}

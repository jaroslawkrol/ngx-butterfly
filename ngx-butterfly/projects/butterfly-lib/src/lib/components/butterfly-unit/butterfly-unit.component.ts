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
export class ButterflyUnitComponent {

  @Input('unit') unit: ButterflyUnit;

}

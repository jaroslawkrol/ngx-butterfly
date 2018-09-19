import {NgModule} from '@angular/core';
import {ButterflyLibComponent} from './butterfly-lib.component';
import {ButterflyUnitComponent} from './components/butterfly-unit/butterfly-unit.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButterflyLibComponent, ButterflyUnitComponent],
  exports: [ButterflyLibComponent]
})
export class ButterflyLibModule {
}

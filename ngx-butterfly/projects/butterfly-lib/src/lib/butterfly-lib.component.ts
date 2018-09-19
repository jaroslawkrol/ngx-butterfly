import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButterflyUnit} from './components/butterfly-unit/butterfly-unit.component';

@Component({
  selector: 'ngx-butterfly-lib',
  template: `
    <div class="columns is-multiline">
      <ngx-butterfly-unit
        class="column is-one-quarter-desktop is-half-tablet"
        *ngFor="let image of images"
        [unit]="image">
      </ngx-butterfly-unit>
    </div>
  `,
  styles: []
})
export class ButterflyLibComponent implements OnInit {

  @Input() images: ButterflyUnit[];
  @Output() selected = new EventEmitter<ButterflyUnit>();

  selectedImageId: string | number;

  constructor() {
  }

  ngOnInit() {
  }

  selectImage(image: ButterflyUnit) {
    console.log('glr-ngx-gallery-lib.component:');
    console.log('selectImage', image);
    this.selectedImageId = image.id;
    this.selected.emit(image);
  }

}

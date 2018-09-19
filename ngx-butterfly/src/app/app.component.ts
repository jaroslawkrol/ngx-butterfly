import {Component} from '@angular/core';
import {GetImagesInitAction} from './store/images/images.action';
import {select, Store} from '@ngrx/store';
import * as fromRoot from './store/app-store.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-butterfly-app';

  images$ = this.store.pipe(
    select(fromRoot.getImagesList)
  );

  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetImagesInitAction());
  }
}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButterflyLibModule} from '../../projects/butterfly-lib/src/lib/butterfly-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButterflyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers} from './app-store.reducer';
import {ImagesEffects} from './images/images.effects';
import {SharedModule} from '../shared/shared.module';

const EFFECTS_MODULES = [
  ImagesEffects
];

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    SharedModule,
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(EFFECTS_MODULES),
  ],
})
export class AppStoreModule {
}

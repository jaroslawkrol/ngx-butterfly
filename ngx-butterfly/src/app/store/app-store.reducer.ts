import {ActionReducer, combineReducers, createSelector} from '@ngrx/store';
import * as fromImages from './images/images.reducer';
import {environment} from '../../environments/environment';

export interface State {
  images: fromImages.State;
}

export const reducers = {
  images: fromImages.reducer,
};

const developmentReducer: ActionReducer<State> = combineReducers(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

/**
 * Images state
 */
export const getImagesState = (state: State) => state.images;
export const getImagesList = createSelector(getImagesState, fromImages.getImages);
export const getImagesSpinner = createSelector(getImagesState, fromImages.getSpinner);

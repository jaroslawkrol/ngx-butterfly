import {Action} from '@ngrx/store';
import {ButterflyUnit} from '../../../../projects/butterfly-lib/src/lib/components/butterfly-unit/butterfly-unit.component';

export const ActionTypes = {
  GET_IMAGES__LOAD: 'GET_IMAGES__LOAD',
  GET_IMAGES__SUCCESS: 'GET_IMAGES__SUCCESS',
  GET_IMAGES__FAIL: 'GET_IMAGES__FAIL',
};

export class GetImagesInitAction implements Action {
  readonly type: string = ActionTypes.GET_IMAGES__LOAD;

  constructor(public payload?: any) {
  }
}

export class GetImagesSuccessAction implements Action {
  readonly type: string = ActionTypes.GET_IMAGES__SUCCESS;

  constructor(public payload: ButterflyUnit[]) {
    console.log('app-store.action');
    console.log('payload', payload);
  }
}

export class GetImagesFailAction implements Action {
  readonly type: string = ActionTypes.GET_IMAGES__FAIL;

  constructor(public payload?: any) {
  }
}

export type Actions = GetImagesInitAction
  | GetImagesSuccessAction
  | GetImagesFailAction;

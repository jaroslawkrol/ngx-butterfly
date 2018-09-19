import * as ImagesAction from './images.action';
import {ActionTypes} from './images.action';
import {ButterflyUnit} from '../../../../projects/butterfly-lib/src/lib/components/butterfly-unit/butterfly-unit.component';

export interface State {
  spinner: boolean;
  images: ButterflyUnit[];
}

const initialState: State = {
  spinner: true,
  images: []
};

export function reducer(state: any = initialState,
                        action: ImagesAction.Actions): State {
  switch (action.type) {
    case ActionTypes.GET_IMAGES__LOAD: {
      return {
        ...state,
        spinner: true
      };
    }

    case ActionTypes.GET_IMAGES__SUCCESS: {
      const images = action.payload;
      return {
        ...state,
        images,
        spinner: false
      };
    }

    case ActionTypes.GET_IMAGES__FAIL: {
      return {
        ...state,
        spinner: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getImages = (state: State) => state.images;
export const getSpinner = (state: State) => state.spinner;

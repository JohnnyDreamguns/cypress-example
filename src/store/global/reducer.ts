import produce from 'immer';
import { GlobalState, GlobalAction } from './types';
import { SET_STEP } from '../../constants';

const initialState: GlobalState = {
  step: 1
};

const globalReducer = produce((draft = initialState, action: GlobalAction) => {
  switch (action.type) {
    case SET_STEP:
      draft.step = action.payload;
      break;

    default:
      return draft;
  }
});

export default globalReducer;

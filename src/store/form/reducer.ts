import produce from 'immer';
import { FormState, FormAction } from './types';
import { SET_FORM, SET_FORM_FIELD } from '../../constants';

const initialState: FormState = {};

const formReducer = produce((draft = initialState, action: FormAction) => {
  switch (action.type) {
    case SET_FORM:
      draft[action.payload.formName] = action.payload.initialFieldValues;
      break;

    case SET_FORM_FIELD:
      draft[action.payload.formName] = {
        ...draft[action.payload.formName],
        [action.payload.field]: action.payload.value
      };
      break;
    default:
      return draft;
  }
});

export default formReducer;

import { SET_FORM, SET_FORM_FIELD } from '../../constants';
import { FormAction, SetFormPayload, SetFormFieldPayload } from './types';

export const setForm = (payload: SetFormPayload): FormAction => ({
  type: SET_FORM,
  payload
});

export const setFormField = (payload: SetFormFieldPayload): FormAction => ({
  type: SET_FORM_FIELD,
  payload
});

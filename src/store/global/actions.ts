import { SET_STEP } from '../../constants';
import { GlobalAction } from './types';

export const setStep = (payload: number): GlobalAction => ({
  type: SET_STEP,
  payload
});

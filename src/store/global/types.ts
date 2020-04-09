export interface GlobalState {
  step: number;
}

export type GlobalAction = {
  type: '[action]/SET_STEP';
  payload: number;
};

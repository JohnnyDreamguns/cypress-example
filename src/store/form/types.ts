import { SyntheticEvent } from 'react';

export interface FormState {
  [formName: string]: Fields;
}

export interface Fields {
  [fieldName: string]: string;
}

export interface FormProps {
  fields: { [x: string]: string };
  onChange: (e: SyntheticEvent) => void;
}

export type FormAction =
  | {
      type: '[action]/SET_FORM';
      payload: {
        formName: string;
        initialFieldValues: Fields;
      };
    }
  | {
      type: '[action]/SET_FORM_FIELD';
      payload: {
        formName: string;
        field: string;
        value: string;
      };
    };

export interface SetFormPayload {
  formName: string;
  initialFieldValues: Fields;
}

export interface SetFormFieldPayload {
  formName: string;
  field: string;
  value: string;
}

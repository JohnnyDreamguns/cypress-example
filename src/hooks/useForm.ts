/* eslint-disable react-hooks/exhaustive-deps */
import produce from 'immer';
import { useCallback, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { setForm, setFormField } from '../store/form/actions';

const useForm = (formName: string, initialFieldValues: any) => {
  const reduxDispatch = useDispatch();

  const reducer = produce((draft, action: any) => {
    switch (action.type) {
      case 'setField':
        draft[action.payload.field] = action.payload.value;
        break;
      default:
        return draft;
    }
  });

  const [fieldValues, dispatch] = useReducer(reducer, initialFieldValues);

  const onChange = useCallback(
    e => {
      const payload = { field: e.target.name, value: e.target.value };
      dispatch({ type: 'setField', payload });
    },
    [dispatch]
  );

  const saveToStore = useCallback(() => {
    reduxDispatch(setForm({ formName, initialFieldValues }));

    Object.keys(fieldValues).forEach(key => {
      const payload = { formName, field: key, value: fieldValues[key] };
      reduxDispatch(setFormField(payload));
    });
  }, [reduxDispatch, setForm, formName, initialFieldValues, fieldValues]);

  const fields = {
    ...initialFieldValues,
    ...fieldValues
  };

  const exported = {
    fields,
    onChange,
    saveToStore
  };

  return exported;
};

export default useForm;

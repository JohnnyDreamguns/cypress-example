/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStep } from '../store/global/actions';

const useGlobal = () => {
  const dispatch = useDispatch();

  const step: number = useSelector((state: any) => state.global.step);

  const nextStep = useCallback(() => {
    dispatch(setStep(step + 1));
  }, [dispatch, setStep, step]);

  const exported = {
    step,
    nextStep
  };

  return exported;
};

export default useGlobal;

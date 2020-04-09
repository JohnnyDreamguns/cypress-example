import React from 'react';
import Results from '../components/Results';
import { useSelector } from 'react-redux';
import { FormState } from '../store/form/types';

const ResultsContainer = () => {
  const signUpDetails: any = useSelector(
    (state: FormState) => state.form.signUp
  );

  const props = {
    signUpDetails
  };

  return React.createElement(Results, props);
};

export default ResultsContainer;

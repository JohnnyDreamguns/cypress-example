import React from 'react';
import MasterForm from '../components/MasterForm';
import useGlobal from '../hooks/useGlobal';

const MasterFormContainer = () => {
  const { step } = useGlobal();

  return React.createElement(MasterForm, { step });
};

export default MasterFormContainer;

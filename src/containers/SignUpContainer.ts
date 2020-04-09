import React, { useState } from 'react';
import SignUp from '../components/SignUp';
import useForm from '../hooks/useForm';
import useGlobal from '../hooks/useGlobal';

interface Props {
  className?: string;
}

const SignUpContainer = ({ className }: Props) => {
  const { nextStep } = useGlobal();

  let [loading, setLoading] = useState(false);
  let [error, setError] = useState('');

  const { fields, onChange, saveToStore } = useForm('signUp', {
    firstName: '',
    lastName: '',
    email: ''
  });

  const getError = () => {
    let missingField;

    if (!fields.firstName) missingField = 'first name';
    else if (!fields.lastName) missingField = 'last name';
    else if (!fields.email) missingField = 'email';

    const error = missingField ? `Please enter your ${missingField}` : '';
    setError(error);
    return error;
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const error = getError();

    if (error) {
      return false;
    }

    setLoading(true);

    const response = await fetch('http://localhost:3001/signup', {
      method: 'POST'
    });

    response.json().then(data => {
      if (response.ok && data.result === 'success') {
        saveToStore();
        setLoading(false);
        nextStep();
      } else {
        setLoading(false);
        console.error(data.error || 'Error');
      }
    });
  };

  const props = {
    fields,
    onChange,
    className,
    onSubmit,
    loading,
    error
  };

  return React.createElement(SignUp, props);
};

export default SignUpContainer;

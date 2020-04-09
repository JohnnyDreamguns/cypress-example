import React from 'react';
import { Fields } from '../store/form/types';

interface Props {
  signUpDetails: Fields;
  className?: string;
}

const Results = ({ signUpDetails, className }: Props) => (
  <div className={className}>
    <h2 className="mb-3 text-gray-700 text-3xl font-light">Thanks</h2>

    <p className="confirm-text">
      Thanks for signing up {signUpDetails.firstName} : )
    </p>
  </div>
);

export default React.memo(Results);

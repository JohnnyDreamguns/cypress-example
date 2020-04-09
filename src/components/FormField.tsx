import React from 'react';
import classnames from 'classnames';

interface Props {
  type?: string;
  name?: string;
  id?: string;
  value?: string;
  onChange?: (e: any) => void;
  className?: string;
}

const FormField = ({ className = '', ...props }: Props) => (
  <input className={classnames('form-field', className)} {...props} />
);

export default React.memo(FormField);

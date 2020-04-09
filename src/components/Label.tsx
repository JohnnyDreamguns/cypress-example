import React from 'react';
import classnames from 'classnames';

interface Props {
  children: any;
  className?: string;
  htmlFor: string;
}

const Label = ({ children, className, htmlFor }: Props) => (
  <label className={classnames(className, 'text-base')} htmlFor={htmlFor}>
    {children}
  </label>
);

export default React.memo(Label);

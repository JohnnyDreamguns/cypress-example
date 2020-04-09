import React from 'react';
import classnames from 'classnames';
import styles from './scss/Spinner.module.scss';

interface Props {
  className: string;
}

const Spinner = ({ className }: Props) => (
  <div className={classnames(className, styles.spinner)}></div>
);

export default Spinner;

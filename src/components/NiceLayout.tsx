import React from 'react';
import styles from './scss/NiceLayout.module.scss';
import classnames from 'classnames';

interface Props {
  children: any;
  className?: string;
}

const NiceLayout = ({ children, className }: Props) => (
  <div className={classnames(styles.niceLayout, className)}>{children}</div>
);

export default NiceLayout;

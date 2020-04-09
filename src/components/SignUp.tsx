import React, { SyntheticEvent } from 'react';
import classnames from 'classnames';
import FormField from './FormField';
import Label from './Label';
import Spinner from './Spinner';
import styles from './scss/SignUp.module.scss';

interface Props {
  fields: { [fieldName: string]: string };
  className?: string;
  loading: boolean;
  error: string;
  onChange?: (e: SyntheticEvent) => void;
  onSubmit: (e: any) => void;
}

const SignUp = ({
  fields,
  className,
  loading,
  error,
  onChange,
  onSubmit
}: Props) => (
  <div className={classnames(className, 'relative')}>
    {loading && <Spinner className={styles.spinner} />}

    <h2 className="mb-3 text-gray-700 text-3xl font-light">Sign up now</h2>

    {error && <p className="error text-red-700 mb-3">{error}</p>}

    <form onSubmit={onSubmit} className="flex flex-col">
      <Label htmlFor="firstName" className="text-gray-700">
        First Name
      </Label>
      <FormField
        type="text"
        name="firstName"
        id="firstName"
        value={fields.firstName}
        onChange={onChange}
        className="mb-5"
      />

      <Label htmlFor="lastName" className="text-gray-700">
        Last Name
      </Label>
      <FormField
        type="text"
        name="lastName"
        id="lastName"
        value={fields.lastName}
        onChange={onChange}
        className="mb-5"
      />

      <Label htmlFor="lastName" className="text-gray-700">
        Email
      </Label>
      <FormField
        type="text"
        name="email"
        id="email"
        value={fields.email}
        onChange={onChange}
        className="mb-5"
      />

      <button className="btn self-end" type="submit">
        Sign Up
      </button>
    </form>
  </div>
);

export default React.memo(SignUp);

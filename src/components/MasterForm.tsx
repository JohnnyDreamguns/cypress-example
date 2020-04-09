import React from 'react';
import SignUpContainer from '../containers/SignUpContainer';
import ResultsContainer from '../containers/ResultsContainer';
import NiceLayout from './NiceLayout';
import styles from './scss/MasterForm.module.scss';

interface Props {
  step: number;
}

const MasterForm = ({ step }: Props) => (
  <NiceLayout className="md:flex justify-around p-6 pt-20 pb-40">
    <div className="pt-6 md:mr-3 mb-10 md:mb-0 max-w-md">
      <h1 className="text-white text-6xl font-thin leading-none mb-6">
        The Cards team
      </h1>
      <p className="text-white text-lg">
        Who are they? What do they do? Why do they never all work on the same
        project?
      </p>
    </div>

    <div className={`bg-white rounded md:ml-3 p-6 ${styles.sidePanel}`}>
      {step === 1 && <SignUpContainer />}
      {step === 2 && <ResultsContainer />}
    </div>
  </NiceLayout>
);

export default React.memo(MasterForm);

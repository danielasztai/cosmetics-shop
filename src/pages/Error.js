import { Fragment } from 'react';
import ErrorElement from '../components/ErrorElement';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <ErrorElement />
    </Fragment>
  );
};

export default ErrorPage;

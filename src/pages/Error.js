import { Fragment } from 'react';
import ErrorElement from '../components/Error/ErrorElement';
import MainNavigation from '../components/Nav/MainNavigation';

const ErrorPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <ErrorElement />
    </Fragment>
  );
};

export default ErrorPage;

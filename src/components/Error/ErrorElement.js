import { Fragment } from 'react';

import classes from './ErrorElement.module.css';

const ErrorElement = () => {
  return (
    <Fragment>
      <div className={classes['error-container']}>
        <h1>Page Not Found - 404</h1>
        <p>The given URL is not accessible! Please navigate to another page!</p>
      </div>
    </Fragment>
  );
};

export default ErrorElement;

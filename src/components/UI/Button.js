import { Fragment } from 'react';

import classes from './Button.module.css';

const Button = props => {
  return (
    <Fragment>
      <button type={props.type} className={classes.button}>
        {props.title}
      </button>
    </Fragment>
  );
};

export default Button;

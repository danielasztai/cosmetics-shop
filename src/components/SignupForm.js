import { Form, Link } from 'react-router-dom';

import classes from './InputForm.module.css';
import Button from './UI/Button';

const Signup = () => {
  return (
    <div className={classes.container}>
      <div className={classes['form-container']}>
        <h2>Regisztrálj és fedezd fel a kollekciónkat!</h2>
        <Form method="post" className={classes.form}>
          <h3 className={classes.title}>CosmeticShop</h3>
          <div className={classes.line}>
            <label htmlFor="firstName">Keresztnév</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              autoFocus
              required
            ></input>
          </div>
          <div className={classes.line}>
            <label htmlFor="lastName">Vezetéknév</label>
            <input type="text" id="lastName" name="lastName" required></input>
          </div>
          <div className={classes.line}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required></input>
          </div>
          <div className={classes.line}>
            <label htmlFor="password">Jelszó</label>
            <input type="password" id="password" name="password"></input>
          </div>
          <div className={classes.line}>
            <label htmlFor="password">Jelszó újra</label>
            <input type="password" id="password" name="password"></input>
          </div>
          <div className={classes.confirm}>
            <Button type="submit" title="Regisztrálok" />
            <p>
              Már regisztráltál?
              <Link to="/login" className={classes.switch}>
                Jelentkezz be!
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;

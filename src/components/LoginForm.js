import { Link } from 'react-router-dom';

import Button from './UI/Button';

import classes from './InputForm.module.css';

const Login = props => {
  return (
    <div className={classes.container}>
      <div className={classes['form-container']}>
        <h2>Jelentkezz be és fedezd fel a kollekciónkat!</h2>
        <form className={classes.form}>
          <h3 className={classes.title}>CosmeticShop</h3>
          <div className={classes.line}>
            <label htmlFor="username">Felhasználónév</label>
            <input
              type="text"
              id="username"
              name="username"
              autoFocus
              required
            ></input>
          </div>
          <div className={classes.line}>
            <label htmlFor="password">Jelszó</label>
            <input type="password" id="password" name="password"></input>
          </div>
          <div className={classes.confirm}>
            <Button type="submit" title="Bejelentkezés" />
            <p>
              Még nincs felhasználói fiókod?
              <Link to="/signup" className={classes.switch}>
                Regisztrálj!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

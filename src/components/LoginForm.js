import { Link } from 'react-router-dom';
import classes from './LoginForm.module.css';

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes['form-container']}>
        <h2>Sign in and Explore Our Collection</h2>
        <form className={classes.form}>
          <h3 className={classes.title}>CosmeticShop</h3>
          <div className={classes.line}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required></input>
          </div>
          <div className={classes.line}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"></input>
          </div>
          <button type="submit">Login</button>
          <p>
            <Link to="/signup">Doesn't have an account yet?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

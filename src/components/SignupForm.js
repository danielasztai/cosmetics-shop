import { Link } from 'react-router-dom';
import classes from './LoginForm.module.css';

const Signup = () => {
  return (
    <div className={classes.container}>
      <div className={classes['form-container']}>
        <h2>Sign up and Explore Our Collection</h2>
        <form className={classes.form}>
          <h3 className={classes.title}>CosmeticShop</h3>
          <div className={classes.line}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" required></input>
          </div>
          <div className={classes.line}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" required></input>
          </div>
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
            <Link to="/login">Already registered?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

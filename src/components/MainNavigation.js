import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRightToBracket,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

const MainNavigation = () => {
  return (
    <header>
      <nav className={classes.container}>
        <Link to="/" className={classes.brand}>
          CosmeticShop
        </Link>
        <ul className={classes.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={classes['cart-icon']}>
            <div className={classes['cart-icon-dot']}>3</div>
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </li>
          <li className={classes.login}>
            <Link to="/login">
              <FontAwesomeIcon icon={faRightToBracket} size="xl" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

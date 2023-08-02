import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { CartContext } from '../../store/cart-context';

import classes from './MainNavigation.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRightToBracket,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

const MainNavigation = () => {
  const cart = useContext(CartContext);
  const productQuantity = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <header>
      <nav className={classes.container}>
        <Link to="/" className={classes.brand}>
          CosmeticShop
        </Link>
        <ul className={classes.nav}>
          <li>
            <Link to="/">Főoldal</Link>
          </li>
          <li>
            <Link to="/products">Termékek</Link>
          </li>
          <li>
            <Link to="/contact">Kapcsolat</Link>
          </li>
          <li className={classes['cart-icon']}>
            <div className={classes['cart-icon-dot']}>{productQuantity}</div>
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

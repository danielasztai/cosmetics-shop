import { useContext, useState } from 'react';

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
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const openHamburgerHandler = () => {
    setIsHamburgerClicked(!isHamburgerClicked);
  };

  const otherPageHandler = () => {
    setIsHamburgerClicked(false);
  };

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
        <div onClick={openHamburgerHandler} className={classes.hamburger}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
      </nav>
      {isHamburgerClicked && (
        <nav className={classes['mobile-menu']}>
          <ul className={classes['mobile-nav']}>
            <li>
              <Link onClick={otherPageHandler} to="/">
                Főoldal
              </Link>
            </li>
            <li>
              <Link onClick={otherPageHandler} to="/products">
                Termékek
              </Link>
            </li>
            <li>
              <Link onClick={otherPageHandler} to="/contact">
                Kapcsolat
              </Link>
            </li>
            <li className={classes['cart-icon']}>
              <div className={classes['mobile-cart-icon-dot']}>
                {productQuantity}
              </div>
              <Link onClick={otherPageHandler} to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
            <li className={classes.login}>
              <Link onClick={otherPageHandler} to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MainNavigation;

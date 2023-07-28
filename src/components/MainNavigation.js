import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const MainNavigation = () => {
  return (
    <header>
      <nav className={classes.container}>
        <Link to="/home" className={classes.brand}>
          CosmeticShop
        </Link>
        <ul className={classes.nav}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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

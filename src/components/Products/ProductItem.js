import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import Button from '../UI/Button';

import classes from './ProductItem.module.css';
import { CartContext } from '../../store/cart-context';

const ProductItem = props => {
  const cart = useContext(CartContext);
  const { pathname } = useLocation();

  const products = (Object.entries = props.products);

  return products.map(item => (
    <li key={item.id} className={classes.box}>
      <Link to={pathname === '/products' ? `${item.id}` : ''}>
        <img src={item.img} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.price}$</p>
      </Link>
      <Button
        type="button"
        title="Kosárba"
        onClick={() => cart.addOneToCart(item)}
      />
    </li>
  ));
};

export default ProductItem;

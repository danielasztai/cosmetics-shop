import { useContext } from 'react';

import { CartContext } from '../../store/cart-context';

import classes from './CartItem.module.css';

const CartItem = props => {
  const cart = useContext(CartContext);

  return (
    <li className={classes['product-container']}>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <div className={classes.quantity}>
        <div className={`${classes.box} ${classes['minus-box']}`}>
          <button
            onClick={() => cart.removeOneFromCart(props.id)}
            className={classes['minus-button']}
          >
            -
          </button>
        </div>
        <div className={`${classes.box} ${classes['quantity-box']}`}>
          <h3>{props.quantity}</h3>
        </div>
        <div className={`${classes.box} ${classes['plus-box']}`}>
          <button
            onClick={() => cart.addOneToCart(props.item)}
            className={classes['plus-button']}
          >
            +
          </button>
        </div>
      </div>
      <h3>{props.price}$</h3>
    </li>
  );
};

export default CartItem;

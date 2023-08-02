import { useContext, useState } from 'react';

import CartItem from './CartItem';

import { CartContext } from '../../store/cart-context';

import classes from './CartContent.module.css';

const CartContent = props => {
  const cart = useContext(CartContext);
  const [isItemExisting, setIsItemExisting] = useState(false);

  const cartSum = cart.items
    ?.reduce((sum, item) => {
      return sum + item.quantity * item.item.price;
    }, 0)
    .toFixed(2);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <ul className={classes['items-container']}>
          {cart.items.map(item => (
            <CartItem
              key={item.id}
              title={item.item.title}
              img={item.item.img}
              price={(item.item.price * item.quantity).toFixed(2)}
              quantity={cart.getProductQuantity(item.id)}
              id={item.id}
              item={item}
            />
          ))}
        </ul>
        <div className={classes['price-container']}>
          <h2>Fizetendő összesen</h2>
          <h3>{cartSum}$</h3>
        </div>
      </div>
    </div>
  );
};

export default CartContent;

import CartItem from './CartItem';

import classes from './CartContent.module.css';

const CartContent = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes['items-container']}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className={classes['price-container']}>
          <h2>Fizetendő összesen</h2>
          <h3>1875,89$</h3>
        </div>
      </div>
    </div>
  );
};

export default CartContent;

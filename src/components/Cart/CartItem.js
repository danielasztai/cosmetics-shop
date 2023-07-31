import classes from './CartItem.module.css';

const CartItem = () => {
  return (
    <div className={classes['product-container']}>
      <img src="" alt="" />
      <h3>Garnier Krém</h3>
      <h3>128.99$</h3>
    </div>
  );
};

export default CartItem;

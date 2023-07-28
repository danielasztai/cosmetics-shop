import { Fragment } from 'react';
import ProductItem from './ProductItem';
import classes from './ProductsList.module.css';

const ProductsList = () => {
  return (
    <Fragment>
      <h2 className={classes['product-title']}>Products</h2>
      <div className={classes.container}>
        <ul className={classes['list-container']}>
          <ProductItem />
        </ul>
      </div>
    </Fragment>
  );
};

export default ProductsList;

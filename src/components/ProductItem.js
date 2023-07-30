import classes from './ProductItem.module.css';

import { Link } from 'react-router-dom';
import Button from './UI/Button';

const ProductItem = props => {
  const products = (Object.entries = props.products);

  return products.map(item => (
    <li key={item.id} className={classes.box}>
      <Link to={`${item.id}`}>
        <img src={item.img} />
        <h3>{item.title}</h3>
        <p>{item.price}$</p>
      </Link>
      <Button type="button" title="Kosárba" />
    </li>
  ));
};

export default ProductItem;

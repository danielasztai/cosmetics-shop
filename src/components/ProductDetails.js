import { useParams } from 'react-router-dom';
import classes from './ProductDetails.module.css';

const ProductDetails = props => {
  const params = useParams();
  const product = props.products.filter(item => item.id === params.productId);

  return (
    <div className={classes.container}>
      <img src={product[0].img} />
      <h1>{product[0].title}</h1>
      <h3>{product[0].price}</h3>
      <p>{product[0].description}</p>
    </div>
  );
};

export default ProductDetails;

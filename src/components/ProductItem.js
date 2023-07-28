import classes from './ProductItem.module.css';

import productImg_1 from '../assets/products/product_1.webp';
import productImg_2 from '../assets/products/product_2.webp';
import productImg_4 from '../assets/products/product_4.webp';
import productImg_6 from '../assets/products/product_6.webp';
import productImg_7 from '../assets/products/product_7.webp';
import productImg_8 from '../assets/products/product_8.webp';
import productImg_10 from '../assets/products/product_10.webp';
import productImg_11 from '../assets/products/product_11.webp';

const Products = [
  {
    title: 'Product 1',
    img: productImg_1,
    price: 68.99,
    description: 'Some description for the Product 1',
  },
  {
    title: 'Product 2',
    img: productImg_2,
    price: 120.99,
    description: 'Some description for the Product 2',
  },
  {
    title: 'Product 4',
    img: productImg_4,
    price: 24.99,
    description: 'Some description for the Product 4',
  },
  {
    title: 'Product 6',
    img: productImg_6,
    price: 41.99,
    description: 'Some description for the Product 6',
  },
  {
    title: 'Product 7',
    img: productImg_7,
    price: 49.99,
    description: 'Some description for the Product 7',
  },
  {
    title: 'Product 8',
    img: productImg_8,
    price: 124.99,
    description: 'Some description for the Product 8',
  },
  {
    title: 'Product 10',
    img: productImg_10,
    price: 94.99,
    description: 'Some description for the Product 10',
  },
  {
    title: 'Product 11',
    img: productImg_11,
    price: 67.99,
    description: 'Some description for the Product 11',
  },
];

const ProductItem = () => {
  return Products.map(item => (
    <li key={item.title} className={classes.box}>
      <img src={item.img} />
      <h3>{item.title}</h3>
      <p>{item.price}$</p>
      <button>Add to cart</button>
    </li>
  ));
};

export default ProductItem;

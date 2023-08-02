import { json, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import CartContent from '../components/Cart/CartContent';

const CartPage = () => {
  const products = useLoaderData();
  // const products = useRouteLoaderData('products');

  return <CartContent products={products} />;
};

export default CartPage;

export const loader = async () => {
  const response = await fetch(
    'https://cosmeticshop-ce6b5-default-rtdb.europe-west1.firebasedatabase.app/Products.json'
  );

  if (!response.ok) {
    throw json({ message: 'Could not add item to the cart.' }, { status: 500 });
  }

  return response;
};

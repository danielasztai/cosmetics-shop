import { useLoaderData } from 'react-router-dom';
import ProductsList from '../components/Products/ProductsList';

const ProductsPage = () => {
  const products = useLoaderData();

  return <ProductsList products={products} />;
};

export default ProductsPage;

export const loader = async () => {
  const response = await fetch(
    'https://cosmeticshop-ce6b5-default-rtdb.europe-west1.firebasedatabase.app/Products.json'
  );

  if (!response.ok) {
    // TODO
  } else {
    return response;
  }
};

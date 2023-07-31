import { useLoaderData } from 'react-router-dom';
import ProductDetails from '../components/Products/ProductDetails';

const DetailsPage = () => {
  const products = useLoaderData();

  return <ProductDetails products={products} />;
};

export default DetailsPage;

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

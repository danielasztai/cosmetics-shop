import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './pages/Login';
import SignupPage from './components/Auth/SignupForm';
import NavLayout from './pages/NavLayout';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ErrorPage from './pages/Error';
import DetailsPage from './pages/Details';
import ContactPage from './pages/Contact';
import CartPage from './pages/Cart';

import CartProvider from './store/cart-context';

import { loader as productsLoader } from './pages/Products';
import { loader as productDetailsLoader } from './pages/Details';
import { loader as cartLoader } from './pages/Cart';
import { action as registerUserAction } from './pages/Signup';
import { action as contactDataAction } from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage />, action: registerUserAction },
      {
        path: 'products',
        id: 'products',
        element: <ProductsPage />,
        loader: productsLoader,
      },
      {
        path: 'products/:productId',
        element: <DetailsPage />,
        loader: productDetailsLoader,
      },
      { path: 'contact', element: <ContactPage />, action: contactDataAction },
      { path: 'cart', element: <CartPage />, loader: cartLoader },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;

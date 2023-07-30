import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './pages/Login';
import SignupPage from './components/SignupForm';
import NavLayout from './pages/NavLayout';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ErrorPage from './pages/Error';
import DetailsPage from './pages/Details';

import { loader as productsLoader } from './pages/Products';
import { loader as productDetailsLoader } from './pages/Details';
import { loader as loginUserLoader } from './pages/Login';
import { action as registerUserAction } from './pages/Signup';
import ContactPage from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      { path: 'login', element: <LoginPage />, loader: loginUserLoader },
      { path: 'signup', element: <SignupPage />, action: registerUserAction },
      { path: 'products', element: <ProductsPage />, loader: productsLoader },
      {
        path: 'products/:productId',
        element: <DetailsPage />,
        loader: productDetailsLoader,
      },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

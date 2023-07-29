import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './pages/Login';
import SignupPage from './components/SignupForm';
import NavLayout from './pages/NavLayout';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import ErrorPage from './pages/Error';
import DetailsPage from './pages/Details';

import { loader as ProductsLoader } from './pages/Products';
import { loader as ProductDetailsLoader } from './pages/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'products', element: <ProductsPage />, loader: ProductsLoader },
      {
        path: 'products/:productId',
        element: <DetailsPage />,
        loader: ProductDetailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

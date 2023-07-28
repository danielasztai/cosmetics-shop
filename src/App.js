import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from './pages/Login';
import SignupPage from './components/SignupForm';
import NavLayout from './pages/NavLayout';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavLayout />,
    children: [
      { path: 'home', element: <HomePage /> },

      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'products', element: <ProductsPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

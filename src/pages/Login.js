import { json, useLoaderData } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const users = useLoaderData();

  return <LoginForm users={users} />;
};

export default LoginPage;

export const loader = async () => {
  const response = await fetch(
    'https://cosmeticshop-ce6b5-default-rtdb.europe-west1.firebasedatabase.app/Users.json'
  );

  if (!response.ok) {
    throw json({ message: 'Account not found.' }, { status: 404 });
  } else {
    return response;
  }
};

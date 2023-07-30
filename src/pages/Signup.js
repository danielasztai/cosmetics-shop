import { json, redirect } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  return <SignupForm />;
};

export default SignupPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const userData = {
    firstName: data.get('firstName'),
    lastName: data.get('lastName'),
    email: data.get('email'),
    username: data.get('username'),
    password: data.get('password'),
  };

  const response = await fetch(
    'https://cosmeticshop-ce6b5-default-rtdb.europe-west1.firebasedatabase.app/Users.json',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    }
  );

  if (!response.ok) {
    throw json({ message: 'Could not register user.' }, { status: 500 });
  }

  return redirect('/login');
};

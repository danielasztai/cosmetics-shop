import { json, redirect } from 'react-router-dom';
import ContactForm from '../components/Contact/ContactForm';

const ContactPage = () => {
  return <ContactForm />;
};

export default ContactPage;

export const action = async ({ request }) => {
  const data = await request.formData();

  const contactData = {
    firstName: data.get('firstname'),
    lastName: data.get('lastname'),
    email: data.get('email'),
    message: data.get('message'),
  };

  const response = await fetch(
    'https://cosmeticshop-ce6b5-default-rtdb.europe-west1.firebasedatabase.app/Messages.json',
    {
      method: 'POST',
      headers: { 'Content-Type': 'json/application' },
      body: JSON.stringify(contactData),
    }
  );

  if (!response.ok) {
    throw json({ message: 'Could not send the message.' }, { status: 500 });
  }

  return redirect('/');
};

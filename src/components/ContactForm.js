import { Form } from 'react-router-dom';

import Button from './UI/Button';

import classes from './InputForm.module.css';

const ContactForm = () => {
  return (
    <div className={classes.container}>
      <div className={classes['form-container']}>
        <h1>Kapcsolat</h1>
        <Form method="post" className={classes.form}>
          <h3 className={classes.title}>Vedd fel velünk a kapcsolatot!</h3>
          <div className={classes.line}>
            <label htmlFor="firstname">Keresztnév</label>
            <input type="text" id="firstname" name="firstname"></input>
          </div>
          <div className={classes.line}>
            <label htmlFor="lastname">Vezetéknév</label>
            <input type="text" id="lastname" name="lastname"></input>
          </div>
          <div className={classes.line}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"></input>
          </div>
          <div className={classes.line}>
            <label htmlFor="message">Üzenet</label>
            <textarea
              type="text"
              id="message"
              name="message"
              maxLength={3000}
              className={classes.message}
            ></textarea>
          </div>
          <Button type="submit" title="Küldés" />
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;

import { Link } from 'react-router-dom';

import classes from './HomeContent.module.css';

import designImg_3 from '../assets/design/design_3.jpeg';
import designImg_4 from '../assets/design/design_4.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomeContent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.upper}>
        <img src={designImg_3} />
        <div>
          <div className={classes[`text-upper`]}>
            <h1>Európa legexklúzívabb minőségű smink termékei</h1>
            <p>Hozza ki magából a maximumot!</p>
          </div>
          <Link to="/products">
            Szétnézek
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes['text-bottom']}>
          <h1>Európa legelismertebb minőségű gyártójától</h1>
          <p>Csakis BIO összetevőket tartalmaznak termékeink.</p>
        </div>
        <img src={designImg_4}></img>
      </div>
    </div>
  );
};

export default HomeContent;

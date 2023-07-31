import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/Nav/MainNavigation';
import { Fragment } from 'react';

const NavLayout = () => {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
    </Fragment>
  );
};

export default NavLayout;

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default Layout;

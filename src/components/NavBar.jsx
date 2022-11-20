import '../styles/NavBar.css';

import * as React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar-container">
      <img src="/images/LOGO.png" alt="Logo Kasa" />
      <nav>
        <NavLink to="/" className="link">
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className="link">
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => (
  <div id="layoutSidenav_nav">
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Core</div>
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
          <Link to="/commands/" className="nav-link">
            Commands
          </Link>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  </div>
);

export default Sidenav;

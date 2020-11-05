import React from 'react';
import { Link } from 'react-router-dom';
import OnlineStatus from './OnlineStatus';

const Sidenav = () => (
  <div id="layoutSidenav_nav">
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">General</div>
          <Link to="/" className="nav-link">
            Dashboard
          </Link>
          <div className="sb-sidenav-menu-heading">Configuration</div>
          <Link to="/commands" className="nav-link">
            Commands
          </Link>
          <Link to="/settings" className="nav-link">
            Settings
          </Link>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Webcord status:</div>
        <OnlineStatus />
      </div>
    </nav>
  </div>
);

export default Sidenav;

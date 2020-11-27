import React from 'react';
import logo from '../../assets/img/logo.png';

const Nav = () => (
  <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <p className="navbar-brand">
      <img src={logo} alt="logo" className="img-fluid" style={{ width: '60px' }} />
      Webcord
    </p>
    <button type="button" className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#">
      <i className="fas fa-bars" />
    </button>
  </nav>
);

export default Nav;

import React from 'react';
import Nav from '../../components/common/Nav';
import Sidenav from '../../components/common/Sidenav';
import Panel from '../../components/Settings/Panel';
import Footer from '../../components/common/Footer';

const Settings = () => (
  <>
    <Nav />
    <div id="layoutSidenav">
      <Sidenav />
      <div id="layoutSidenav_content">
        <Panel />
        <Footer />
      </div>
    </div>
  </>
);

export default Settings;

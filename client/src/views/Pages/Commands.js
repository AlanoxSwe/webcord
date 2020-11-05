import React from 'react';
import Nav from '../../components/common/Nav';
import Sidenav from '../../components/common/Sidenav';
import Panel from '../../components/Commands/Panel';
import Footer from '../../components/common/Footer';

const Commands = () => (
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

export default Commands;

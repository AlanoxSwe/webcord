import React from 'react';
import Nav from '../../components/common/Nav';
import Sidenav from '../../components/common/Sidenav';
import Panel from '../../components/Dashboard/Panel';
import Footer from '../../components/common/Footer';

const Dashboard = () => (
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

export default Dashboard;

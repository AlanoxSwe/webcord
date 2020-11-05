import React from 'react';
import ReactDOM from 'react-dom';
import './styles/custom.css';
import './styles/bootstrap.min.css';
// import './styles/now-ui-kit.min.css';
import './assets/scripts';
import App from './views/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

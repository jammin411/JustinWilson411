import './css/App.css';
import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'leaflet/dist/leaflet.css';
import './assets/css/index.css';
import 'aos/dist/aos.css';

const browserHistory = createBrowserHistory();

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL} history={browserHistory}>
      <Routes />
    </Router>    
  );
}

export default App;
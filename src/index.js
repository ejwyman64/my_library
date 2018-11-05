// import ReactBootstrap from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import './Styles/App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App className="app" />, document.getElementById('root'));
registerServiceWorker();

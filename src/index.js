// import ReactBootstrap from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Admin from 'firebase-admin';
// import Functions from 'firebase-functions';

// //Initialization for Cloud Firestore
// const admin = require('firebase-admin');
// const functions = require('firebase-functions');

// admin.initializeApp(functions.config().firebase);

// var db = admin.firestore();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // If you have a global stylesheet
import App from './App';
import './index.css';  // Ensure styles are linked

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

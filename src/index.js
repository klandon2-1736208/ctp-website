import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Attaches App component to 'root' div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
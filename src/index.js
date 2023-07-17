import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppClass from './Appclass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppClass />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
document.documentElement.style.overflowX = 'hidden';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

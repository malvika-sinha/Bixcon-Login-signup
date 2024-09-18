import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import App from './App';
import './styles.css'; // Import your global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // For React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
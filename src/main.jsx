import React from 'react'; // Importing React library
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering the app
import App from './App'; // Importing the main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Creating a root for the React app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

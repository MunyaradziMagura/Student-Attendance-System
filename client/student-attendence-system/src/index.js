
import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/login.css'
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// create root varible for root div
const root = ReactDOM.createRoot(document.getElementById('root'));
// render root div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

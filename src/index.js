import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
    <h1>Calculadora</h1>
    <Calculator />
  </React.Fragment>
  ,document.getElementById('root')
);

reportWebVitals();

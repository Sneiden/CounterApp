import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOMClient from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#app');

// ReactDOM.render(<PrimeraApp saludo="Hola Mundo"/>, divRoot);
// const root = ReactDOMClient.createRoot(divRoot);
// root.render( <PrimeraApp saludo="Hola Mundo"/> );

ReactDOM.render(<CounterApp />, divRoot);
// const root = ReactDOMClient.createRoot(divRoot);
// root.render( <CounterApp value={5}/> );


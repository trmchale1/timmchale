import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cat from './Cat';
import Image from './Image';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Cat name="Jungle" />
    <Image />
  </React.StrictMode>
,
  document.getElementById('root')
);

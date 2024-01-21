import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Image_mountain from './Image_Mountain';
import Image_arcadia from './Image_arcadia'
import Image_arcadia_2 from './Image_arcadia_2'
import Image_canyon from './Image_canyon'
import Image_desert from './Image_desert'
import Image_turner from './Image_turner'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Image_mountain />
    <Image_arcadia />
    <Image_mountain />
    <Image_desert />
    <Image_turner />
    <Image_arcadia_2 />
    <Image_canyon />
  </React.StrictMode>
,
  document.getElementById('root')
);

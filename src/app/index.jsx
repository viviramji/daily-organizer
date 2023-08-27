import React from 'react';
import ReactDOM from 'react-dom';


import { store } from './store';
import { Main } from './features/main/main';

ReactDOM.render(
  <Main />,
  document.getElementById('app'),
);

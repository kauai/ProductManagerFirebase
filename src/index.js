import React from 'react';
import {render} from 'react-dom';
import App from './App';
import base, { auth, providers } from './base'

render(
  <App base={base} auth={auth} providers={providers} />,
  document.getElementById('root')
)

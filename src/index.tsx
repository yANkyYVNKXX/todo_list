import {ThemeProvider} from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {theme} from 'presentation/config';

import App from './App';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

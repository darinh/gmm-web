import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@fluentui/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import './index.css';
import { store } from './store';

ReactDOM.render(
  <ThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,

  document.getElementById('root')
);

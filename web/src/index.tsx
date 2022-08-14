import React from 'react';
import ReactDOM from 'react-dom';
import { loadTheme, ThemeProvider } from '@fluentui/react';
import { CoherenceCustomizations, CoherenceTheme } from '@coherence-design-system/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import './index.css';
import { store } from './store';

loadTheme(CoherenceTheme);

ReactDOM.render(
  <ThemeProvider {...CoherenceCustomizations}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,

  document.getElementById('root')
);

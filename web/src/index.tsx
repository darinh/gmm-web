import React from 'react';
import ReactDOM from 'react-dom';
import { loadTheme, ThemeProvider } from '@fluentui/react';
import { CoherenceCustomizations, CoherenceTheme } from '@coherence-design-system/styles';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { App } from './App';
import './index.css';
import app, { groupSaga } from './store';

// create and configure reduxer middleware ( saga is a middleware )
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: app,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(groupSaga);

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

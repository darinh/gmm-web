import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons, ThemeProvider } from '@fluentui/react';
import { Provider } from 'react-redux';

import { App } from './App';
import './index.css';
import { store } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GroupMemberships, GroupsOwned, Home } from './pages';

initializeIcons(undefined, { disableWarnings: true });

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="/groups/memberOf" element={<GroupMemberships />} />
              <Route path="/groups/owned" element={<GroupsOwned />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,

  document.getElementById('root')
);

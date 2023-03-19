import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';
import { UserDataContextProvider } from './context/UserDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserDataContextProvider>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </UserDataContextProvider>,
);

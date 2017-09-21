import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import {Main} from 'main'
import {Header} from 'header'

render( <AppContainer>
     <BrowserRouter >
        <App />
     </BrowserRouter>
   </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}

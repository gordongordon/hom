import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

///import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'
///mport {MatchPanelViewWrapper} from 'matchPanelView'
//import {ListOfPropertysView} from 'ListOfPropertysView'
// render(
//     <App />,
//   document.getElementById('root')
// );
//
// let Router = BrowserRouter;


render( <AppContainer>
     <App />
   </AppContainer>,
  document.getElementById('root')
);

// render(
//   <AppContainer>
//     <App />
//
//   </AppContainer>,
//   document.getElementById('root')
// );

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

import React, { Component } from 'react';
//import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Button, Icon, List } from 'antd-mobile';
import {FormSalePropertyAntMobileWrapper} from 'formSalePropertyAntMobile'
import {PropertysView} from 'propertysView'
import {FrontPapePanelView} from 'frontPagePanelView'
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'
import {ListTestingWrapper } from 'listTesting'
import {MatchPanelViewWrapper} from 'matchPanelView'
import {ListOfPropertysView} from 'ListOfPropertysView'
import {Link, Route, Router} from 'react-router';


@observer
class App extends Component {

  render() {
    return (
      <div style={{ margin: 5 }}>
        <ListOfPropertysView />
      <FrontPapePanelViewSegment />
        <DevTools />
      </div>

    );
  }
};

// ,
//
// <div style={{ margin: 5 }}>
//   <ListOfPropertysView />
// <FrontPapePanelViewSegment />
//   <DevTools />
// </div>

export default App;
// <FrontPapePanelViewSegment />
//<MatchPanelViewWrapper  />
// <FrontPapePanelViewSegment />

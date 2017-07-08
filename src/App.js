import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Button, Icon, List } from 'antd-mobile';
import {FormSalePropertyAntMobileWrapper} from 'formSalePropertyAntMobile'
import {PropertysView} from 'propertysView'
import {FrontPapePanelView} from 'frontPagePanelView'
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'
import {ListTestingWrapper } from 'listTesting'
import {MatchPanelViewWrapper} from 'matchPanelView'

@observer
class App extends Component {

  render() {
    return (
      <div style={{ margin: 5 }}>
        <MatchPanelViewWrapper  />
        <DevTools />
      </div>
    );
  }
};


export default App;
// <FrontPapePanelViewSegment />
// <FrontPapePanelViewSegment />

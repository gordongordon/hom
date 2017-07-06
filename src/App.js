import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Button, Icon, List } from 'antd-mobile';
import {FormSalePropertyAntMobileWrapper} from 'formSalePropertyAntMobile'
import {PropertysView} from 'propertysView'
import {FrontPapePanelView} from 'frontPagePanelView'
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'

@observer
class App extends Component {

  render() {
    return (
      <div style={{ margin: 5 }}>
        <FrontPapePanelViewSegment />
        <PropertysView />
        <DevTools />
      </div>
    );
  }
};

export default App;

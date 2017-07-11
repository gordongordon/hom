import React from 'react';

//models
//import {Route} from 'mobx-router';

//components
//import {MatchPanelViewWrapper} from 'matchPanelView'
//import {ListOfPropertysView} from 'ListOfPropertysView'
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'
import NavigationBar from 'navigationBar'
import MobxStore from 'mobxStore';

const FrontPage = () => (
  <div>
   <NavigationBar title={MobxStore.app.title} />
   <FrontPapePanelViewSegment />
  </div>
);

export default FrontPage;

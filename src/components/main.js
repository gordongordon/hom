import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {MatchPanelViewWrapper} from 'matchPanelView'
import {ListOfPropertysView} from 'ListOfPropertysView'
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={FrontPapePanelViewSegment}/>
      <Route path='/list' component={ListOfPropertysView}/>
      <Route path='/front' component={FrontPapePanelViewSegment}/>
    </Switch>
  </main>
)

export {Main}

import { Switch, Route } from 'react-router-dom'
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'
import {MatchPanelViewWrapper} from 'matchPanelView'
import {ListOfPropertysView} from 'ListOfPropertysView'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={FrontPapePanelViewSegment}/>
      <Route path='/list' component={ListOfPropertysView}/>
      <Route path='/match' component={MatchPanelViewWrapper}/>
    </Switch>
  </main>
)

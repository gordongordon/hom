// import {MatchPanelViewWrapper} from 'matchPanelView'
// import {ListOfPropertysView} from 'ListOfPropertysView'
// import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'

const routes = [
  { path: '/list', action: () => <ListOfPropertysView /> },
  { path: '/', action: () => <FrontPapePanelViewSegment /> },
  { path: '/Match', action: () => <MatchPanelViewWrapper /> }
];



// export { routes }

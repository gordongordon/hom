import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import {MatchPanelViewWrapper} from 'matchPanelView'
import {ListOfPropertysView} from 'ListOfPropertysView'
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'
import MobxStore from 'mobxStore';
import FrontPage from 'frontPage'
import {MobxRouter} from 'mobx-router';

const views = {
  first: new Route({
    path: '/',
    component: <FrontPage />,
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
  }),
  second: new Route({
    path: '/second',
    component: <ListOfPropertysView />,
    onEnter: () => {
      console.log('entering ListOfPropertysView!');
      MobxStore.app.title = "List"
    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
      MobxStore.app.params = params;
    },
    onParamsChange: (route, params) => {
      console.log('params changed to', params);
    }}),
  third: new Route({
      path: '/third/:keyID',
      component: <MatchPanelViewWrapper/>,
      onEnter: (route, params, store, queryParams) => {
      	console.log('third.current query params are -> ', queryParams);
        console.log('third.current params are -> ', params);
        MobxStore.app.setTitle( 'Match');
        console.log('route', route)
      },
      beforeExit: (route, params) => {
        console.log('exiting user profile!');
        console.log('third. params', params);
        MobxStore.app.previousView = route;
        MobxStore.app.params = params;
      },
      onParamsChange: (route, params) => {
        console.log('params changed to', params);
      }
  })
};
export default views;

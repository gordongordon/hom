import React from 'react';

//models
import {Route} from 'mobx-router';

//components
import {MatchPanelViewWrapper} from 'matchPanelView'
import {ListOfPropertysView} from 'ListOfPropertysView'
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'
import {FrontPageView} from 'frontPageView'
import MobxStore from 'mobxStore';
import FrontPage from 'frontPage'
import {MobxRouter} from 'mobx-router';

import {FormSalePropertyAntMobileWrapper} from 'formSalePropertyAntMobile';
import {FormLeasePropertyAntMobileWrapper} from 'formLeasePropertyAntMobile';
import {FormBuyPropertyAntMobileWrapper} from 'formBuyPropertyAntMobile';
import {FormRentPropertyAntMobileWrapper} from 'formRentPropertyAntMobile';


var save = false;

const views = {
  first: new Route({
    path: '/',
    component: <FrontPageView />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( '好 .. Matching');

    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
  }),
  second: new Route({
    path: '/second',
    component: <ListOfPropertysView />,
  onEnter: ( route, params, store, queryParams ) => {

      console.log('entering ListOfPropertysView!');
      MobxStore.app.title = "你的儲存樓盤"
      if ( save )
      {
      MobxStore.app.previousView = MobxStore.app.viewHistory.get( 'second')
      }
      if ( !save )
      { MobxStore.app.viewHistory.set( 'second', MobxStore.app.previousView  )
        save = true
      }
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
        MobxStore.app.setTitle( '最新鮮配對');
        console.log('route', route)
        MobxStore.app.viewHistory.set( 'third', MobxStore.app.previousView  )
      },
      beforeExit: (route, params) => {
        console.log('exiting user profile!');
        console.log('third. params', params);
        //MobxStore.app.previousView = route;
        MobxStore.app.params = params;
      },
      onParamsChange: (route, params) => {
        console.log('params changed to', params);
      }
  }),
  lease : new Route({
    path: '/lease',
    component: <FormLeasePropertyAntMobileWrapper />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( '放 租');

    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
  }),
  rent : new Route({
    path: '/rent',
    component: <FormRentPropertyAntMobileWrapper />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( '租 屋');

    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
  }),
  buy : new Route({
    path: '/buy',
    component: <FormBuyPropertyAntMobileWrapper />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( '賣 樓');

    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
  }),
  sale : new Route({
    path: '/sale',
    component: <FormSalePropertyAntMobileWrapper />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( '買 樓');

    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
  })
};
export default views;

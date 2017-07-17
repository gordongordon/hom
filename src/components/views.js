import React from 'react';

//models
import {Route} from 'mobx-router';

//components
//import {MatchPanelViewWrapper} from 'matchPanelView'
import {ListOfPropertysView} from 'ListOfPropertysView'
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'
import {FrontPageView} from 'frontPageView'
import MobxStore from 'mobxStore';
//import FrontPage from 'frontPage'
import {MobxRouter} from 'mobx-router';

// Form
import {FormSalePropertyAntMobileWrapper} from 'form/formSalePropertyAntMobile';
import {FormLeasePropertyAntMobileWrapper} from 'form/formLeasePropertyAntMobile';
import {FormBuyPropertyAntMobileWrapper} from 'form/formBuyPropertyAntMobile';
import {FormRentPropertyAntMobileWrapper} from 'form/formRentPropertyAntMobile';

// Match Panel views
import {MatchLeasePanelViewWrapper} from 'matchPanel/matchLeasePanelView'
import {MatchRentPanelViewWrapper} from 'matchPanel/matchRentPanelView'
import {MatchSalePanelViewWrapper} from 'matchPanel/matchSalePanelView'
import {MatchBuyPanelViewWrapper} from 'matchPanel/matchBuyPanelView'

// testing
// import TestListView from 'testListView'

var save = false;

const views = {
  home: new Route({
    path: '/',
    component: <FrontPageView/>,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( '好 .. Matching');

    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
  }),
  list: new Route({
    path: '/list',
    component: <ListOfPropertysView />,
  onEnter: ( route, params, store, queryParams ) => {

      console.log('entering ListOfPropertysView!');
      MobxStore.app.title = "你的儲存樓盤"
      if ( save )
      {
      MobxStore.app.previousView = MobxStore.app.viewHistory.get( 'second')
      }
      if ( !save )
      { MobxStore.app.viewHistory.set( 'list', MobxStore.app.previousView  )
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
  matchLease: new Route({
      path: '/matchLease/:keyID',
      component: <MatchLeasePanelViewWrapper />,
      onEnter: (route, params, store, queryParams) => {
      	console.log('third.current query params are -> ', queryParams);
        console.log('third.current params are -> ', params);
        MobxStore.app.setTitle( '最新鮮配對 Lease');
        console.log('route', route)
        MobxStore.app.viewHistory.set( 'matchLease', MobxStore.app.previousView  )
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
  matchRent: new Route({
      path: '/matchRent/:keyID',
      component: <MatchRentPanelViewWrapper />,
      onEnter: (route, params, store, queryParams) => {
      	console.log('third.current query params are -> ', queryParams);
        console.log('third.current params are -> ', params);
        MobxStore.app.setTitle( '最新鮮配對 Rent');
        console.log('route', route)
        MobxStore.app.viewHistory.set( 'matchRent', MobxStore.app.previousView  )
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
  matchSale: new Route({
      path: '/matchSale/:keyID',
      component: <MatchSalePanelViewWrapper />,
      onEnter: (route, params, store, queryParams) => {
      	console.log('third.current query params are -> ', queryParams);
        console.log('third.current params are -> ', params);
        MobxStore.app.setTitle( '最新鮮配對 Sale');
        console.log('route', route)
        MobxStore.app.viewHistory.set( 'matchSale', MobxStore.app.previousView  )
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
  matchBuy: new Route({
      path: '/matchBuy/:keyID',
      component: <MatchBuyPanelViewWrapper />,
      onEnter: (route, params, store, queryParams) => {
      	console.log('third.current query params are -> ', queryParams);
        console.log('third.current params are -> ', params);
        MobxStore.app.setTitle( '最新鮮配對 buy');
        console.log('route', route)
        MobxStore.app.viewHistory.set( 'matchBuy', MobxStore.app.previousView  )
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
      MobxStore.app.setTitle( '放a 租');

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
      MobxStore.app.setTitle( '租b 屋');

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
      MobxStore.app.setTitle( '買 dd樓');

    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
  })
};
export default views;

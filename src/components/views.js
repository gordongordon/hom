import React from 'react';

//models
import {Route} from 'mobx-router';

//components
//import {MatchPanelViewWrapper} from 'matchPanelView'
//import {ListOfPropertysView} from 'listOfPropertysView'
//import ListOfAgentPropertysView from 'listOfMatch/listOfAgentPropertysView'

//import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'
import {FrontPageView} from 'frontPageView';
import MobxStore from 'mobxStore';
//import FrontPage from 'frontPage'
//import {MobxRouter} from 'mobx-router';
//import moment from 'moment';


// Form
import {FormSalePropertyAntMobileWrapper} from 'form/formSalePropertyAntMobile';
import {FormLeasePropertyAntMobileWrapper} from 'form/formLeasePropertyAntMobile';
import {FormBuyPropertyAntMobileWrapper} from 'form/formBuyPropertyAntMobile';
import {FormRentPropertyAntMobileWrapper} from 'form/formRentPropertyAntMobile';
// From for agents
import {FormBuyAgentPropertyAntMobileWrapper} from 'form/formBuyAgentPropertyAntMobile';
import {FormSaleAgentPropertyAntMobileWrapper} from 'form/formSaleAgentPropertyAntMobile';
import {FormRentAgentPropertyAntMobileWrapper} from 'form/formRentAgentPropertyAntMobile';
import {FormLeaseAgentPropertyAntMobileWrapper} from 'form/formLeaseAgentPropertyAntMobile';
import {FormAgentFilterWrapper} from 'form/formAgentFilter';

// Match Panel views
//import {MatchLeasePanelViewWrapper} from 'matchPanel/matchLeasePanelView';
//import {MatchRentPanelViewWrapper} from 'matchPanel/matchRentPanelView';
//import {MatchSalePanelViewWrapper} from 'matchPanel/matchSalePanelView';
//import {MatchBuyPanelViewWrapper} from 'matchPanel/matchBuyPanelView';
import {MatchAgentPanelViewWrapper} from 'matchPanel/matchAgentPanelView';

// import {AgentAppView} from 'agentAppView'

// From chatbot
//import FormSaleChatbot from 'chatbot/formSaleChatbot'
//import BMIChatbot from 'chatbot/bmiChatbot'

// testing
// import TestListView from 'testListView'

import Loadable from 'react-loadable';
//import Loading from  'loading'

function MyLoadingComponent(props) {
  if (props.isLoading) {
    // While our other component is loading...
    if (props.timedOut) {
      // In case we've timed out loading our other component.
      return <div>Loader timed out!</div>;
    } else if (props.pastDelay) {
      // Display a loading screen after a set delay.
      return <div>Loading...</div>;
    } else {
      // Don't flash "Loading..." when we don't need to.
      return null;
    }
  } else if (props.error) {
    // If we aren't loading, maybe
    return <div>Error! Component failed to load</div>;
  } else {
    // This case shouldn't happen... but we'll return null anyways.
    return null;
  }
}

const ListOfPropertysViewLoader = Loadable({
 loader: () => import('listOfPropertysView'),
 loading: MyLoadingComponent,
});

const ListOfAgentPropertysViewLoader = Loadable({
  loader: () => import('listOfMatch/listOfAgentPropertysView'),
  loading: MyLoadingComponent,
 });

 const MatchBuyPanelViewLoader= Loadable({
  loader: () => import('matchPanel/matchBuyPanelView'),
  loading: MyLoadingComponent,
 });
 
 const MatchSalePanelViewLoader= Loadable({
  loader: () => import('matchPanel/matchSalePanelView'),
  loading: MyLoadingComponent,
 });

 const MatchLeasePanelViewLoader= Loadable({
  loader: () => import('matchPanel/matchLeasePanelView'),
  loading: MyLoadingComponent,
 });
 
 const MatchRentPanelViewLoader= Loadable({
  loader: () => import('matchPanel/matchRentPanelView'),
  loading: MyLoadingComponent,
 });


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
  // agent: new Route({
  //   path: '/agent',
  //   component: <AgentAppView/>,
  //   onEnter: (route, params, store, queryParams) => {
  //     MobxStore.app.setTitle( 'Agent App View');
  //   },
  //   beforeExit: (route, params) => {
  //     console.log('exiting ListOfPRoperysView!');
  //     console.log('params changed to', params);
  //     MobxStore.app.previousView = route;
  //   }
  // }),
  list: new Route({
    path: '/list',
    component: <ListOfPropertysViewLoader />,
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
    beforeEnter: (route, params, store) => {
      const userIsLoggedIn = MobxStore.app.user;
      if (!userIsLoggedIn) {
        alert('Only logged in users can enter this route!');
        return false;
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
      // timeEnter for matching iktems only that time and after
      component: <MatchLeasePanelViewLoader/>,
      onEnter: (route, params, store, queryParams) => {
      	console.log('third.current query params are -> ', queryParams);
        console.log('third.current params are -> ', params);
        MobxStore.app.setTitle( '最新鮮配對 房東');
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
      component: <MatchRentPanelViewLoader/>,
      onEnter: (route, params, store, queryParams) => {
      	console.log('third.current query params are -> ', queryParams);
        console.log('third.current params are -> ', params);
        MobxStore.app.setTitle( '最新鮮配對 租客');
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
      component: <MatchSalePanelViewLoader/>,
      onEnter: (route, params, store, queryParams) => {
      	console.log('third.current query params are -> ', queryParams);
        console.log('third.current params are -> ', params);
        MobxStore.app.setTitle( '最新鮮配對 業主');
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
      component: <MatchBuyPanelViewLoader />,
      onEnter: (route, params, store, queryParams) => {
      	console.log('third.current query params are -> ', queryParams);
        console.log('third.current params are -> ', params);
        MobxStore.app.setTitle( '最新鮮配對 買家');
        console.log('route', route)
        MobxStore.app.viewHistory.set( 'matchBuy', MobxStore.app.previousView  )
        //console.log( 'timeEnter from view', moment().format('YYYY-MM-DD HH:mm:ss'))
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
  matchAgent: new Route({
      path: '/matchAgent/:selectedSegmentIndex/:keyID/:typeTo',
      component: <MatchAgentPanelViewWrapper />,
      onEnter: (route, params, store, queryParams) => {
      	console.log('third.current query params are -> ', queryParams);
        console.log('third.current params are -> ', params);
        MobxStore.app.setTitle( 'Agent');
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
      MobxStore.app.setTitle( '房東');

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
      MobxStore.app.setTitle( '租客');

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
      MobxStore.app.setTitle( '買家');
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
      MobxStore.app.setTitle( '業主');

    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
  }),
  createAgentFilter : new Route({
    path: '/createAgentFilter',
    component: <FormAgentFilterWrapper />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( 'Filter');

    },
    beforeExit: (route, params) => {
      console.log('exiting createAgentFilter!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
  }),
  listAgent: new Route({
    path: '/listAgent',
    component: <ListOfAgentPropertysViewLoader />,
    onEnter: ( route, params, store, queryParams ) => {

      console.log('entering ListOfAgentPropertysView!');
      MobxStore.app.title = "你的地產代理儲存樓盤"
      if ( save )
      {
      MobxStore.app.previousView = MobxStore.app.viewHistory.get( 'second')
      }
      if ( !save )
      { MobxStore.app.viewHistory.set( 'list', MobxStore.app.previousView  )
        save = true
      }
    },
    beforeEnter: (route, params, store) => {
      const userIsLoggedIn = MobxStore.app.user;
      if (!userIsLoggedIn) {
        alert('Only logged in users can enter this route!');
        return false;
      }
    },
    beforeExit: (route, params, store, queryParams) => {
      console.log('exiting ListOfAgentProperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
      MobxStore.app.params = params;
      // debugger
      // MobxStore.app.masterKeyID = queryParams.keyID;
    },
    onParamsChange: (route, params) => {
      console.log('params changed to', params);
    }}),
buyAgentForm : new Route({
  path: '/BuyAgentForm/keyID/:keyID/:typeTo/filterID/:filterID',
  component: <FormBuyAgentPropertyAntMobileWrapper />,
  onEnter: (route, params, store, queryParams) => {
    MobxStore.app.setTitle( '地產代理回復 業主');

  },
  beforeExit: (route, params) => {
    console.log('exiting ListOfPRoperysView!');
    console.log('params changed to', params);
    MobxStore.app.previousView = route;
  }
}),
saleAgentForm : new Route({
  path: '/SaleAgentForm/keyID/:keyID/:typeTo/filterID/:filterID',
  component: <FormSaleAgentPropertyAntMobileWrapper />,
  onEnter: (route, params, store, queryParams) => {
    MobxStore.app.setTitle( '地產代理回復 買家');

  },
  beforeExit: (route, params) => {
    console.log('exiting ListOfPRoperysView!');
    console.log('params changed to', params);
    MobxStore.app.previousView = route;
  }
}),
rentAgentForm : new Route({
  path: '/RentAgentForm/keyID/:keyID/:typeTo/filterID/:filterID',
  component: <FormRentAgentPropertyAntMobileWrapper />,
  onEnter: (route, params, store, queryParams) => {
    MobxStore.app.setTitle( '地產代理回復 租客');

  },
  beforeExit: (route, params) => {
    console.log('exiting ListOfPRoperysView!');
    console.log('params changed to', params);
    MobxStore.app.previousView = route;
  }
}),
leaseAgentForm : new Route({
  path: '/LeaseAgentForm/keyID/:keyID/:typeTo/filterID/:filterID',
  component: <FormLeaseAgentPropertyAntMobileWrapper />,
  onEnter: (route, params, store, queryParams) => {
    MobxStore.app.setTitle( '地產代理回復 房東');

  },
  beforeExit: (route, params) => {
    console.log('exiting ListOfPRoperysView!');
    console.log('params changed to', params);
    MobxStore.app.previousView = route;
  }
}),
  // For Chat bot example
  // formSaleChatbot : new Route({
  //   path: '/FormSaleChatbox',
  //   component: <FormSaleChatbot />,
  //   onEnter: (route, params, store, queryParams) => {
  //     MobxStore.app.setTitle( 'Chat Bot 賣 樓');
  //   },
  //   beforeExit: (route, params) => {
  //     console.log('exiting ListOfPRoperysView!');
  //     console.log('params changed to', params);
  //     MobxStore.app.previousView = route;
  //   }
  // }),
  // bmi : new Route({
  //   path: '/bmi',
  //   component: <BMIChatbot />,
  //   onEnter: (route, params, store, queryParams) => {
  //     MobxStore.app.setTitle( 'Chat Bot 賣 樓');
  //
  //   },
  //   beforeExit: (route, params) => {
  //     console.log('exiting ListOfPRoperysView!');
  //     console.log('params changed to', params);
  //     MobxStore.app.previousView = route;
  //   }
  // })


};
export default views;

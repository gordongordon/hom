import React from 'react';
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
//import {FormSalePropertyAntMobileWrapper} from 'form/formSalePropertyAntMobile';
// import {FormLeasePropertyAntMobileWrapper} from 'form/formLeasePropertyAntMobile';
// import {FormBuyPropertyAntMobileWrapper} from 'form/formBuyPropertyAntMobile';
// import {FormRentPropertyAntMobileWrapper} from 'form/formRentPropertyAntMobile';
// From for agents
//import FormBuyAgentPropertyAntMobile from 'form/formBuyAgentPropertyAntMobile';
//import {FormSaleAgentPropertyAntMobileWrapper} from 'form/formSaleAgentPropertyAntMobile';
//import {FormRentAgentPropertyAntMobileWrapper} from 'form/formRentAgentPropertyAntMobile';
//import {FormLeaseAgentPropertyAntMobileWrapper} from 'form/formLeaseAgentPropertyAntMobile';
//import FormAgentFilter from 'form/formAgentFilter';

// Match Panel views
//import {MatchLeasePanelViewWrapper} from 'matchPanel/matchLeasePanelView';
//import {MatchRentPanelViewWrapper} from 'matchPanel/matchRentPanelView';
//import {MatchSalePanelViewWrapper} from 'matchPanel/matchSalePanelView';
//import {MatchBuyPanelViewWrapper} from 'matchPanel/matchBuyPanelView';
import {MatchAgentPanelViewWrapper} from 'matchPanel/matchAgentPanelView';

// import {AgentAppView} from 'agentAppView'

// From chatbot
//import FormSaleChatbot from 'chatbot/formSaleChatbot';
import BMIChatbot from 'chatbot/bmiChatbot';
import ActionSheetExample from 'chatbot/actionSheetExample';

// testing
// import TestListView from 'testListView'
import FrontPageFilter from 'frontPageFilter';
import MrHouse from 'chatbot/mrHouse';
import ChatMatching from 'chatbot/chatMatching';
import ChatAgentBuyRespond from 'chatbot/chatAgentBuyRespond';
import ChatAgentSaleRespond from 'chatbot/chatAgentSaleRespond';
import ChatAgentRentRespond from 'chatbot/chatAgentRentRespond';
import ChatAgentLeaseRespond from 'chatbot/chatAgentLeaseRespond';
import BuyAgentBot from 'chatbot/buyAgentBot';
import AskChatbotBuy from 'chatbot/AskChatbotBuy';
import AskChatbotSale from 'chatbot/AskChatbotSale';
import AskChatbotRent from 'chatbot/AskChatbotRent';
import AskChatbotLease from 'chatbot/AskChatbotLease';


import Loadable from 'react-loadable';
//import Loading from  'loading'
//import LoadableVisibility from 'react-loadable-visibility/react-loadable'

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

 const FormAgentFilterLoader = Loadable({
  loader: () => import('form/formAgentFilter'),
  loading: MyLoadingComponent,
 });

 const FormSalePropertyAntMobileLoader = Loadable({
  loader: () => import('form/formSalePropertyAntMobile'),
  loading: MyLoadingComponent,
 });

 const FormBuyPropertyAntMobileLoader = Loadable({
  loader: () => import('form/formBuyPropertyAntMobile'),
  loading: MyLoadingComponent,
 });

 const FormLeasePropertyAntMobileLoader = Loadable({
  loader: () => import('form/formLeasePropertyAntMobile'),
  loading: MyLoadingComponent,
 });

 const FormRentPropertyAntMobileLoader = Loadable({
  loader: () => import('form/formRentPropertyAntMobile'),
  loading: MyLoadingComponent,
 });


 const FormBuyAgentPropertyAntMobileLoader = Loadable({
  loader: () => import('form/formBuyAgentPropertyAntMobile'),
  loading: MyLoadingComponent,
 });

 const FormSaleAgentPropertyAntMobileLoader = Loadable({
  loader: () => import('form/formSaleAgentPropertyAntMobile'),
  loading: MyLoadingComponent,
 });

 const FormLeaseAgentPropertyAntMobileLoader = Loadable({
  loader: () => import('form/formLeaseAgentPropertyAntMobile'),
  loading: MyLoadingComponent,
 });

 const FormRentAgentPropertyAntMobileLoader = Loadable({
  loader: () => import('form/formRentAgentPropertyAntMobile'),
  loading: MyLoadingComponent,
 });

var save = false;

const views = {
  home: new Route({
    path: '/',
    component: <FrontPageView/>,

    //component: <MrHouse />,
    // component: <ChatMatching />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( '好 .. Matching');
      // debugger
    },
    beforeExit: (route, params) => {
      console.log('exiting home /!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
      MatchBuyPanelViewLoader.preload();
      MatchSalePanelViewLoader.preload();
      MatchRentPanelViewLoader.preload();
      MatchLeasePanelViewLoader.preload();
      FormSalePropertyAntMobileLoader.preload();
      FormBuyPropertyAntMobileLoader.preload();
      FormLeasePropertyAntMobileLoader.preload();
      FormRentPropertyAntMobileLoader.preload();
      FormAgentFilterLoader.preload();
      ListOfPropertysViewLoader.preload();
      ListOfAgentPropertysViewLoader.preload();
      ListOfPropertysViewLoader.preload();
      MatchLeasePanelViewLoader.preload();
      FormBuyAgentPropertyAntMobileLoader.preload();
      FormSaleAgentPropertyAntMobileLoader.preload();
      FormLeaseAgentPropertyAntMobileLoader.preload();
      FormRentAgentPropertyAntMobileLoader.preload();
      //      debugger
  }}),
  filter : new Route({
    path: '/filter',
    component: <FrontPageFilter/>,
    onEnter: ( route, params, store, queryParams ) => {
    },
    beforeEnter: (route, params, store) => {
    },
    beforeExit: (route, params) => {
    },
    onParamsChange: (route, params) => {
    }}),



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
    component: <FormLeasePropertyAntMobileLoader />,
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
    component: <FormRentPropertyAntMobileLoader />,
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
    component: <FormBuyPropertyAntMobileLoader/>,
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
    component: <FormSalePropertyAntMobileLoader />,
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
    component: <FormAgentFilterLoader />,
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
  component: <FormBuyAgentPropertyAntMobileLoader />,
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
  component: <FormSaleAgentPropertyAntMobileLoader />,
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
  component: <FormRentAgentPropertyAntMobileLoader />,
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
  component: <FormLeaseAgentPropertyAntMobileLoader />,
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
  mrHouse : new Route({
    path: '/MrHouse',
    component: <MrHouse />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( 'Chat Bot 賣 樓');
    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.pre1viousView = route;
    }
  }),
  // For Chat bot example
  chatMatching : new Route({
      path: '/chatMatching',
      component: <ChatMatching />,
      onEnter: (route, params, store, queryParams) => {
        MobxStore.app.setTitle( 'CBUY_Matching');
      },
      beforeExit: (route, params) => {
        console.log('exiting ListOfPRoperysView!');
        console.log('params changed to', params);
        MobxStore.app.previousView = route;
      }
  }),
  // For Chat bot example
  chatAgentBuyRespond : new Route({
    path: '/chatAgentBuyRespond',
    component: <ChatAgentBuyRespond />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( 'CBUY_Matching');
    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
}),
  // For Chat bot example
chatAgentSaleRespond : new Route({
    path: '/chatAgentSaleRespond',
    component: <ChatAgentSaleRespond />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( 'CSALE_Matching');
    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
}),
  // For Chat bot example
  chatAgentRentRespond : new Route({
    path: '/chatAgentRentRespond',
    component: <ChatAgentRentRespond />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( 'CSALE_Matching');
    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
}),
  // For Chat bot example
  chatAgentLeaseRespond : new Route({
    path: '/chatAgentLeaseRespond',
    component: <ChatAgentLeaseRespond />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( 'CSALE_Matching');
    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
}),

// Buy, Sale, Rent, Lease Chatbot
  // For Chat bot example
askChatbotBuy : new Route({
    path: '/askChatbotBuy',
    component: <AskChatbotBuy />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( 'CSALE_Matching');
    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
}),
askChatbotSale : new Route({
  path: '/askChatbotSale',
  component: <AskChatbotSale />,
  onEnter: (route, params, store, queryParams) => {
    MobxStore.app.setTitle( 'CSALE_Matching');
  },
  beforeExit: (route, params) => {
    console.log('exiting ListOfPRoperysView!');
    console.log('params changed to', params);
    MobxStore.app.previousView = route;
  }
}),
askChatbotRent : new Route({
  path: '/askChatbotRent',
  component: <AskChatbotRent />,
  onEnter: (route, params, store, queryParams) => {
    MobxStore.app.setTitle( 'CSALE_Matching');
  },
  beforeExit: (route, params) => {
    console.log('exiting ListOfPRoperysView!');
    console.log('params changed to', params);
    MobxStore.app.previousView = route;
  }
}),
askChatbotLease : new Route({
  path: '/askChatbotLease', 
  component: <AskChatbotLease />,
  onEnter: (route, params, store, queryParams) => {
    MobxStore.app.setTitle( 'CSALE_Matching');
  },
  beforeExit: (route, params) => {
    console.log('exiting ListOfPRoperysView!');
    console.log('params changed to', params);
    MobxStore.app.previousView = route;
  }
}),

actionSheetExample : new Route({
    path: '/ActionSheetExample',
    component: <ActionSheetExample />,
    onEnter: (route, params, store, queryParams) => {
    },
    beforeExit: (route, params) => {
    }
  }),  
  bmi : new Route({
    path: '/bmi',
    component: <BMIChatbot />,
    onEnter: (route, params, store, queryParams) => {
      MobxStore.app.setTitle( 'Chat Bot 賣 樓');
  
    },
    beforeExit: (route, params) => {
      console.log('exiting ListOfPRoperysView!');
      console.log('params changed to', params);
      MobxStore.app.previousView = route;
    }
  })


};
export default views;

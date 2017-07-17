import React from 'react';
import ReactDOM from 'react-dom';
import {MobxRouter, startRouter} from 'mobx-router';
import {FrontPageTabBar} from 'frontPageTabBar';

//mobx
import {Provider} from 'mobx-react';
import MobxStore from 'mobxStore';
import NavigationBar from 'navigationBar'

//router
import views from 'views';

import initReactFastclick from 'react-fastclick';
// For Touch display
initReactFastclick();

startRouter(views, MobxStore);

ReactDOM.render(
  <Provider store={MobxStore}>
    <div>
         <NavigationBar/>
         <MobxRouter/>
    </div>
  </Provider>, document.getElementById('root')
)

//<button onClick={() => MobxStore.router.goTo(views.second)}>Go First</button>
//MobxStore.app.title

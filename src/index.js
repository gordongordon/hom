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
//import firebase from 'firebase'

import initReactFastclick from 'react-fastclick';
// For Touch display
initReactFastclick();

startRouter(views, MobxStore);

// firebase.auth().onAuthStateChanged( (user) => {
//   if (user) {
//     MobxStore.router.goTo( views.list )
//   } else {
//     MobxStore.router.goTo( views.home )
//   }
// })

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

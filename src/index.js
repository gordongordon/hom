import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import {MobxRouter, startRouter} from 'mobx-router';
//import {FrontPageTabBar} from 'frontPageTabBar';
//import DevTools from 'mobx-react-devtools';
//mobx
import {Provider} from 'mobx-react';
//router 
import views from 'views';

import MobxStore from 'mobxStore';
import firebase from 'firebase'
import NavigationBar from 'navigationBar';
//import { NoticeBar } from 'antd-mobile';
import initReactFastclick from 'react-fastclick';
import {Fb} from 'firebase-store';
// import ChatBot from 'react-simple-chatbot';
// import {FormSaleChatbot} from 'chatbot/formSaleChatbot'

//import DevTools, { setLogEnabled, setUpdatesEnabled, setGraphEnabled } from 'mobx-react-devtools';
//import FormSaleChatbot from 'chatbot/formSaleChatbot'
//import FormSaleChatbot from './components/chatbot/formSaleChatbot';
import MrHouse from './components/chatbot/mrHouse';
// import { AppContainer } from 'react-hot-loader';
// import App from 'app';
// import { BrowserRouter } from 'react-router-dom';


// setLogEnabled(false); // same as configureDevtool({ logEnabled: true });
// setUpdatesEnabled(false); // same as configureDevtool({ updatesEnabled: false });
// setGraphEnabled(true); // same as configureDevtool({ graphEnabled: false });

startRouter(views, MobxStore);

// For Touch display
initReactFastclick();


// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault)
//       e.preventDefault();
//   e.returnValue = false;
// }
//
// function preventDefaultForScrollKeys(e) {
//     if (keys[e.keyCode]) {
//         preventDefault(e);
//         return false;
//     }
// }
//
// function disableScroll() {
//   if (window.addEventListener) // older FF
//       window.addEventListener('DOMMouseScroll', preventDefault, false);
//   window.onwheel = preventDefault; // modern standard
//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
//   window.ontouchmove  = preventDefault; // mobile
//   document.onkeydown  = preventDefaultForScrollKeys;
// }
//
// function enableScroll() {
//     if (window.removeEventListener)
//         window.removeEventListener('DOMMouseScroll', preventDefault, false);
//     window.onmousewheel = document.onmousewheel = null;
//     window.onwheel = null;
//     window.ontouchmove = null;
//     document.onkeydown = null;
// }
//
// function preventZoom(e) {
//   var t2 = e.timeStamp;
//   var t1 = e.currentTarget.dataset.lastTouch || t2;
//   var dt = t2 - t1;
//   var fingers = e.touches.length;
//   e.currentTarget.dataset.lastTouch = t2;
//
//   if (!dt || dt > 500 || fingers > 1) return; // not double-tap
//
//   e.preventDefault();
//   e.target.click();
// }
//
// //preventZoom();
// //disableScroll();


firebase.auth().onAuthStateChanged( (user) => {

   // update currentUser login or not
   MobxStore.app.user = firebase.auth().currentUser;
   // MobxStore.app.user = true;
   // User is signed in.

  if ( user)  {
    var isAnonymous = user.isAnonymous;
    //var uid = user.uid;

     console.log( 'user signed', user)
     // Redirect to member page!
     //MobxStore.app.startLogin();
     //Fb.startLogin();
     MobxStore.app.uid = user.uid;
     if ( isAnonymous ) {
     MobxStore.app.displayName = 'anonymous';
     MobxStore.app.email = 'anonymous';
     MobxStore.app.providerId = 'anonymous'
   } else {
     MobxStore.app.displayName = user.displayName;
     MobxStore.app.email = user.email;
     MobxStore.app.providerId = user.providerData[0].providerId;
     // user.emailVerified.

   }
     //MobxStore.app.setTitle( user.displayName )

     console.log( 'displayName', user.displayName)

     // Think over before remove this like, may cause matchedPropertys = null
     Fb.app.updateUid();
     MobxStore.router.goTo( views.home , {}, MobxStore )
  } else {
       console.log( 'user donot sign')
       //MobxStore.app.startLogout();
       Fb.startLogout();

       MobxStore.app.uid = null;
       MobxStore.app.displayName = 'none'
       MobxStore.app.email = 'none'
       MobxStore.app.providerId = 'none'

       MobxStore.router.goTo( views.home , {}, MobxStore )

  }
})

//<MobxRouter/>

// ReactDOM.render(
//  <App/>
//  , document.getElementById('root')
// )

//  ReactDOM.render(
//    <MrHouse />
//    , document.getElementById('root')
//  )

ReactDOM.render(
  <Provider store={MobxStore}>
    <div>
      <NavigationBar/>
      <MobxRouter/>
    </div>
  </Provider>, document.getElementById('root')
)

  // <Provider store={MobxStore}>
  //   <div>
  //     <NavigationBar/>
  //     <MobxRouter/>
  //   </div>
  // </Provider>, document.getElementById('root')



// ReactDOM.render(
// <AppContainer>
//      <App />
// </AppContainer>,
// document.getElementById('root')
// );

// if (module.hot) {
// module.hot.accept('app', () => {
//  const NextApp = require('app').default;

//  ReactDOM.render(
//    <AppContainer>
//      <NextApp />
//    </AppContainer>,
//    document.getElementById('root')
//  );
// });
// }

// render( <AppContainer>
//      <BrowserRouter >
//      <App />
//     </BrowserRouter>
//     </AppContainer>, document.getElementById('root') 
// );

// if (module.hot) {
// module.hot.accept('app', () => {
//  const NextApp = require('app').default;

//  render( <AppContainer>
//          <NextApp />
//          </AppContainer>,
//          document.getElementById('root')
//  );
// });
// }


//<button onClick={() => MobxStore.router.goTo(views.second)}>Go First</button>
//MobxStore.app.title

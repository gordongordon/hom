import React from 'react';
import ReactDOM from 'react-dom';
import {MobxRouter, startRouter} from 'mobx-router';
//import {FrontPageTabBar} from 'frontPageTabBar';

//mobx
import {Provider} from 'mobx-react';
import MobxStore from 'mobxStore';
import firebase from 'firebase'
import NavigationBar from 'navigationBar'

//router
import views from 'views';

import initReactFastclick from 'react-fastclick';
import {Fb} from 'firebase-store'
// import ChatBot from 'react-simple-chatbot';
// import {FormSaleChatbot} from 'chatbot/formSaleChatbot'

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

  if ( user)  {
     console.log( 'user signed')
     // Redirect to member page!
     //MobxStore.app.startLogin();
     // Fb.startLogin();
     MobxStore.app.uid = user.uid;
     Fb.app.updateUid();
     MobxStore.router.goTo( views.list , {}, MobxStore )
  } else {
       console.log( 'user donot sign')
       //MobxStore.app.startLogout();
       Fb.startLogout();

       MobxStore.app.uid = undefined;
       MobxStore.router.goTo( views.home , {}, MobxStore )

  }
})

//<MobxRouter/>

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

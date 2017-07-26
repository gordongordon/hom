import {extendObservable, action} from 'mobx';
// import firebase from 'firebase';
// import {githubProvider} from 'firebase-store'

class AppStore {
  constructor() {
    extendObservable(this, {
      title: 'HoMatching',
      user: false,
      previousView : undefined,
      viewHistory  : new Map(),
      nextView : undefined,
      params : undefined,
    });
    uid : null // User Id


    console.log( 'creating MobxStore.app')
  }

  // startLogin = () => {
  //   return firebase.auth().signInWithPopup( githubProvider ).then( (result) => {
  //      //this.user = true;
  //      console.log( 'Auth Worked', result )
  //   }, () => {
  //     console.log( 'unable to login' );
  //   }
  //   );
  // }
  //
  // startLogout = () => {
  //   return firebase.auth().signOut().then( ()=> {
  //     console.log( 'Logged out!')
  //   }) ;
  // }

  setTitle = action(title => {
    this.title = title;
  });
}

export default AppStore;

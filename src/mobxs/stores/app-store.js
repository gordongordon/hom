import {extendObservable, action} from 'mobx';
// import firebase from 'firebase';
// import {githubProvider} from 'firebase-store'

class AppStore {
  constructor() {
    extendObservable(this, {
      title: 'HoMatching',
      user: false,
      previousView : undefined, 
      // User to remember previous page, but no use while in browser! 
      viewHistory  : new Map(),
      nextView : undefined,
      params : undefined,
      displayName : 'none',
      providerId : 'none'
    });

    uid : null // User Id
    userEmail : 'none'
    /**
     * pass by refernce, most likely will be use and all single {sale, buy, .. } property. 
     * must be passed before goto, since, goto can't pass any object by reference
     */
    passByRef: null; 
    //masterKeyID : null // Current Property Id which is working on. 

//    console.log( 'creating MobxStore.app')
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

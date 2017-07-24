import firebase from 'firebase';
import MobxStore from 'mobxStore'
import {propertys} from 'propertysViewModel'


export default class AppStore {
    constructor() {
      this.propertysRef = undefined;
      this.matchedPropertysRef = undefined;
    }

    // Catch user login before assign any database reference
    updateUid = () => {
       const uid = MobxStore.app.uid;
       console.log( 'MobxStore.app.uid ', uid)
       this.propertysRef = firebase.database().ref(`users/${uid}/propertys`);
       this.matchedPropertysRef = firebase.database().ref(`users/${uid}/matchedPropertys`);
       // init propertysViewModel, for mobx,
       // can't be used inside constructor
       // when app start will call an empty constructor
       propertys.init();
    }
}

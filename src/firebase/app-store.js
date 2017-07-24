import firebase from 'firebase';
import MobxStore from 'mobxStore'
import {propertys} from 'propertysViewModel'
import {propertysAgent} from 'propertysAgentViewModel'


export default class AppStore {
    constructor() {
      this.usersRef = undefined;
      this.matchedPropertysRef = undefined;
      this.agentsRef = undefined;
    }

    // Catch user login before assign any database reference
    updateUid = () => {
       const uid = MobxStore.app.uid;
       console.log( 'MobxStore.app.uid ', uid)

       // users database
       this.usersRef = firebase.database().ref(`users/${uid}/propertys`);
       this.matchedPropertysRef = firebase.database().ref(`users/${uid}/matchedPropertys`);
       // agents database
       this.agentsRef = firebase.database().ref(`agents/${uid}/propertys`);

       // init propertysViewModel, for mobx,
       // can't be used inside constructor
       // when app start will call an empty constructor
       propertys.init();
       // Agent only
       propertysAgent.init();
    }
}

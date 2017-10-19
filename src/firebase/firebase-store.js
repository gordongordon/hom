import firebase from 'firebase';
import MobxStore from 'mobxStore'
import AppStore from 'app-store'
import {propertys as userModelView} from 'userModelView'
import {agentModel} from 'agentModelView'
import {action, observable} from 'mobx';


try {

var config = {
  apiKey: 'AIzaSyD_SHmOwRUywGbWf9rRwP-MKSI3d0cYJu8',
  authDomain: 'todo-app-a2b7c.firebaseapp.com',
  databaseURL: 'https://todo-app-a2b7c.firebaseio.com',
  storageBucket: 'todo-app-a2b7c.appspot.com',
};

firebase.initializeApp(config);
} catch (e) {}

const startLogin = () => {
  return firebase.auth().signInWithPopup( githubProvider ).then( (result) => {
    // Fb.app.updateUid();

     console.log( 'Auth Worked', result )
  }, () => {
    console.log( 'unable to login' );
  }
  );
}

const startLoginGoogle = () => {

  return firebase.auth().signInWithPopup(googleProvider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  //Fb.app.updateUid();

  console.log( 'Auth Worked', result )
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log( 'unable to login' );
  // ...
});

}

const startLoginFacebook = () => {
  return firebase.auth().signInWithPopup( facebookProvider).then( (result) => {
     //this.user = true;
     //Fb.app.updateUid();
     console.log( 'Auth Worked', result )
  }, () => {
    console.log( 'unable to login' );
  }
  );
}

const startLoginAnonyhmously = () => {

firebase.auth().signInAnonymously().then(function(snapshot) {
  // The callback succeeded; do something with the final result.
  console.log( 'signInAnonymously completed')

  //Fb.app.updateUid();

  return true;
}, function(error) {
  return false;
  // The callback failed.
  console.error(error);
});

// .catch(function(error) {
//   // Handle Errors here.
//   console.log( 'sing in anonymously error', errorMessage )
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log( 'sing in anonymously error', errorMessage )
//   // ...
// });

}


// // Plain object syntax
// const a = observable({
// 	act: action(() => {
// 		// unbounded, cannot be bound
// 	}),
// 	act: action(function() {
// 		// unbounded. Bind in MobX 3?
// 	})
// })

// const startLogout = observable( {
//    act: action( () => {
//   return firebase.auth().signOut().then( ()=> {
//     console.log( 'Logged out!')
//     //propertys.clear();
//     // agentModel.clear();

//     MobxStore.app.user = false;
//     userModelView.clear();
//     MobxStore.app.uid = null;
//     agentModel.clear();
//   });
// }
//    ) });

const startLogout = () => {
  return firebase.auth().signOut().then( ()=> {
    console.log( 'Logged out!')
    //propertys.clear();
    // agentModel.clear();

    MobxStore.app.user = false;
    userModelView.clear();
    MobxStore.app.uid = null;
    agentModel.clear();
  }) ;
}

//console.log( 'MobxStore.app', MobxStore)
//var uid =  MobxStore.app.uid;
//console.log('uid', MobxStore.app.uid)
const root = firebase.database();
const propertys = firebase.database().ref('propertys');
// Testing for different type
const sale = firebase.database().ref('propertys/sale');
const saleIndirectCallRef = firebase.database().ref('propertys/sale/inDirectCall');
const buyIndirectCallRef = firebase.database().ref('propertys/buy/inDirectCall');
const lease = firebase.database().ref('propertys/lease');
const buy = firebase.database().ref('propertys/buy');
const rent = firebase.database().ref('propertys/rent');
const agentPropertys = firebase.database().ref('agentPropertys');
//const propertysForRent = firebase.database().ref('propertysForRent');
//const propertysForSale = firebase.database().ref('propertysForSale');
//const propertysForLease = firebase.database().ref('propertysForLease');
//const property = firebase.database().ref('property');
const matchedPropertys = firebase.database().ref('matchedPropertys');

// const mbsdk = () => {
//   var uid = MobxStore.app.uid;
// }


const Fb = {
  app : new AppStore(),
  root,
  propertys,
  sale,
  lease,
  buy,
  rent,
  agentPropertys,
  startLogin,
  startLogout,
  startLoginAnonyhmously,
  startLoginFacebook,
  startLoginGoogle,
  saleIndirectCallRef,
  buyIndirectCallRef,
  //propertysForRent,
  //propertysForSale,
  //propertysForLease,
  //property,
  matchedPropertys
};

var githubProvider = new firebase.auth.GithubAuthProvider();
var facebookProvider = new firebase.auth.FacebookAuthProvider();
var googleProvider = new firebase.auth.GoogleAuthProvider();
export { Fb };

//  How to handle incremental
// var errId = 0;
// // creates a new, incremental record
// function incId() {
//     // increment the counter
//     fb.child('counter').transaction(function(currentValue) {
//         return (currentValue||0) + 1
//     }, function(err, committed, ss) {
//         if( err ) {
//            setError(err);
//         }
//         else if( committed ) {
//            // if counter update succeeds, then create record
//            // probably want a recourse for failures too
//            addRecord(ss.val());
//         }
//     });
// }
//
// // creates new incremental record
// function addRecord(id) {
//     setTimeout(function() {
//        fb.child('records').child('rec'+id).set('record #'+id, function(err) {
//           err && setError(err);
//        });
//     });
// }

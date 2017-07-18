import firebase from 'firebase';
import {MobxStore} from 'mobxStore'
//import views from 'views'

try {
var config = {
  apiKey: 'AIzaSyD_SHmOwRUywGbWf9rRwP-MKSI3d0cYJu8',
  authDomain: 'todo-app-a2b7c.firebaseapp.com',
  databaseURL: 'https://todo-app-a2b7c.firebaseio.com',
  storageBucket: 'todo-app-a2b7c.appspot.com',
};

firebase.initializeApp(config);
} catch (e) {}

// firebase.auth().onAuthStateChanged( (user) => {
//   if (user) {
//     MobxStore.router.goTo( views.list )
//   } else {
//     MobxStore.router.goTo( views.home )
//   }
// })

const root = firebase.database().ref();
const propertys = firebase.database().ref('propertys');
const propertysForRent = firebase.database().ref('propertysForRent');
const propertysForSale = firebase.database().ref('propertysForSale');
const propertysForLease = firebase.database().ref('propertysForLease');
const property = firebase.database().ref('property');
const matchedPropertys = firebase.database().ref('matchedPropertys');

const Fb = {
  root,
  propertys,
  propertysForRent,
  propertysForSale,
  propertysForLease,
  property,
  matchedPropertys
};

var githubProvider = new firebase.auth.GithubAuthProvider();
export { Fb, githubProvider };

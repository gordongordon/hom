import firebase from 'firebase';


var config = {
  apiKey: 'AIzaSyD_SHmOwRUywGbWf9rRwP-MKSI3d0cYJu8',
  authDomain: 'todo-app-a2b7c.firebaseapp.com',
  databaseURL: 'https://todo-app-a2b7c.firebaseio.com',
  storageBucket: 'todo-app-a2b7c.appspot.com',
};

firebase.initializeApp(config);

const root = firebase.database().ref();
const propertys = firebase.database().ref('propertys');
const property = firebase.database().ref('property');
const matchedPropertys = firebase.database().ref('matchedPropertys');

const Fb = {
  root,
  propertys,
  property,
  matchedPropertys
};
export { Fb };

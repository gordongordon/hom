webpackHotUpdate(0,{

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.githubProvider = exports.Fb = undefined;\n\nvar _firebase = __webpack_require__(443);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _appStore = __webpack_require__(778);\n\nvar _appStore2 = _interopRequireDefault(_appStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//import views from 'views'\n\ntry {\n\n  var config = {\n    apiKey: 'AIzaSyD_SHmOwRUywGbWf9rRwP-MKSI3d0cYJu8',\n    authDomain: 'todo-app-a2b7c.firebaseapp.com',\n    databaseURL: 'https://todo-app-a2b7c.firebaseio.com',\n    storageBucket: 'todo-app-a2b7c.appspot.com'\n  };\n\n  _firebase2.default.initializeApp(config);\n} catch (e) {}\n\n// firebase.auth().onAuthStateChanged( (user) => {\n//   if (user) {\n//     MobxStore.router.goTo( views.list )\n//   } else {\n//     MobxStore.router.goTo( views.home )\n//   }\n// })\n\nvar startLogin = function startLogin() {\n  return _firebase2.default.auth().signInWithPopup(githubProvider).then(function (result) {\n    //this.user = true;\n    console.log('Auth Worked', result);\n  }, function () {\n    console.log('unable to login');\n  });\n};\n\nvar startLoginAnonyhmously = function startLoginAnonyhmously() {\n\n  _firebase2.default.auth().signInAnonymously().catch(function (error) {\n    // Handle Errors here.\n    console.log('sing in anonymously error', errorMessage);\n    var errorCode = error.code;\n    var errorMessage = error.message;\n    console.log('sing in anonymously error', errorMessage);\n    // ...\n  });\n};\nvar startLogout = function startLogout() {\n  return _firebase2.default.auth().signOut().then(function () {\n    console.log('Logged out!');\n  });\n};\n\n//console.log( 'MobxStore.app', MobxStore)\nvar uid = _mobxStore2.default.app.uid;\nconsole.log('uid', _mobxStore2.default.app.uid);\nvar root = _firebase2.default.database().ref();\nvar propertys = _firebase2.default.database().ref('users');\n//const propertysForRent = firebase.database().ref('propertysForRent');\n//const propertysForSale = firebase.database().ref('propertysForSale');\n//const propertysForLease = firebase.database().ref('propertysForLease');\n//const property = firebase.database().ref('property');\nvar matchedPropertys = _firebase2.default.database().ref('matchedPropertys');\n\n// const mbsdk = () => {\n//   var uid = MobxStore.app.uid;\n// }\n\n\nvar Fb = {\n  app: new _appStore2.default(),\n  root: root,\n  propertys: propertys,\n  startLogin: startLogin,\n  startLogout: startLogout,\n  //propertysForRent,\n  //propertysForSale,\n  //propertysForLease,\n  //property,\n  matchedPropertys: matchedPropertys\n};\n\nvar githubProvider = new _firebase2.default.auth.GithubAuthProvider();\nexports.Fb = Fb;\nexports.githubProvider = githubProvider;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzc3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9maXJlYmFzZS9maXJlYmFzZS1zdG9yZS5qcz9lM2I1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJ1xyXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnYXBwLXN0b3JlJ1xyXG4vL2ltcG9ydCB2aWV3cyBmcm9tICd2aWV3cydcclxuXHJcbnRyeSB7XHJcblxyXG52YXIgY29uZmlnID0ge1xyXG4gIGFwaUtleTogJ0FJemFTeURfU0htT3dSVXl3R2JXZjlyUndQLU1LU0kzZDBjWUp1OCcsXHJcbiAgYXV0aERvbWFpbjogJ3RvZG8tYXBwLWEyYjdjLmZpcmViYXNlYXBwLmNvbScsXHJcbiAgZGF0YWJhc2VVUkw6ICdodHRwczovL3RvZG8tYXBwLWEyYjdjLmZpcmViYXNlaW8uY29tJyxcclxuICBzdG9yYWdlQnVja2V0OiAndG9kby1hcHAtYTJiN2MuYXBwc3BvdC5jb20nLFxyXG59O1xyXG5cclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59IGNhdGNoIChlKSB7fVxyXG5cclxuLy8gZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCggKHVzZXIpID0+IHtcclxuLy8gICBpZiAodXNlcikge1xyXG4vLyAgICAgTW9ieFN0b3JlLnJvdXRlci5nb1RvKCB2aWV3cy5saXN0IClcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgTW9ieFN0b3JlLnJvdXRlci5nb1RvKCB2aWV3cy5ob21lIClcclxuLy8gICB9XHJcbi8vIH0pXHJcblxyXG5jb25zdCBzdGFydExvZ2luID0gKCkgPT4ge1xyXG4gIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aFBvcHVwKCBnaXRodWJQcm92aWRlciApLnRoZW4oIChyZXN1bHQpID0+IHtcclxuICAgICAvL3RoaXMudXNlciA9IHRydWU7XHJcbiAgICAgY29uc29sZS5sb2coICdBdXRoIFdvcmtlZCcsIHJlc3VsdCApXHJcbiAgfSwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coICd1bmFibGUgdG8gbG9naW4nICk7XHJcbiAgfVxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0YXJ0TG9naW5Bbm9ueWhtb3VzbHkgPSAoKSA9PiB7XHJcblxyXG5maXJlYmFzZS5hdXRoKCkuc2lnbkluQW5vbnltb3VzbHkoKS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICBjb25zb2xlLmxvZyggJ3NpbmcgaW4gYW5vbnltb3VzbHkgZXJyb3InLCBlcnJvck1lc3NhZ2UgKVxyXG4gIHZhciBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gIGNvbnNvbGUubG9nKCAnc2luZyBpbiBhbm9ueW1vdXNseSBlcnJvcicsIGVycm9yTWVzc2FnZSApXHJcbiAgLy8gLi4uXHJcbn0pO1xyXG5cclxufVxyXG5jb25zdCBzdGFydExvZ291dCA9ICgpID0+IHtcclxuICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKS50aGVuKCAoKT0+IHtcclxuICAgIGNvbnNvbGUubG9nKCAnTG9nZ2VkIG91dCEnKVxyXG4gIH0pIDtcclxufVxyXG5cclxuXHJcblxyXG4vL2NvbnNvbGUubG9nKCAnTW9ieFN0b3JlLmFwcCcsIE1vYnhTdG9yZSlcclxudmFyIHVpZCA9ICBNb2J4U3RvcmUuYXBwLnVpZDtcclxuY29uc29sZS5sb2coJ3VpZCcsIE1vYnhTdG9yZS5hcHAudWlkKVxyXG5jb25zdCByb290ID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcclxuY29uc3QgcHJvcGVydHlzID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoYHVzZXJzYCk7XHJcbi8vY29uc3QgcHJvcGVydHlzRm9yUmVudCA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcm9wZXJ0eXNGb3JSZW50Jyk7XHJcbi8vY29uc3QgcHJvcGVydHlzRm9yU2FsZSA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcm9wZXJ0eXNGb3JTYWxlJyk7XHJcbi8vY29uc3QgcHJvcGVydHlzRm9yTGVhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHlzRm9yTGVhc2UnKTtcclxuLy9jb25zdCBwcm9wZXJ0eSA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdwcm9wZXJ0eScpO1xyXG5jb25zdCBtYXRjaGVkUHJvcGVydHlzID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ21hdGNoZWRQcm9wZXJ0eXMnKTtcclxuXHJcbi8vIGNvbnN0IG1ic2RrID0gKCkgPT4ge1xyXG4vLyAgIHZhciB1aWQgPSBNb2J4U3RvcmUuYXBwLnVpZDtcclxuLy8gfVxyXG5cclxuXHJcbmNvbnN0IEZiID0ge1xyXG4gIGFwcCA6IG5ldyBBcHBTdG9yZSgpLFxyXG4gIHJvb3QsXHJcbiAgcHJvcGVydHlzLFxyXG4gIHN0YXJ0TG9naW4sXHJcbiAgc3RhcnRMb2dvdXQsXHJcbiAgLy9wcm9wZXJ0eXNGb3JSZW50LFxyXG4gIC8vcHJvcGVydHlzRm9yU2FsZSxcclxuICAvL3Byb3BlcnR5c0ZvckxlYXNlLFxyXG4gIC8vcHJvcGVydHksXHJcbiAgbWF0Y2hlZFByb3BlcnR5c1xyXG59O1xyXG5cclxudmFyIGdpdGh1YlByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyKCk7XHJcbmV4cG9ydCB7IEZiLCBnaXRodWJQcm92aWRlciB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZpcmViYXNlL2ZpcmViYXNlLXN0b3JlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
webpackHotUpdate(0,{

/***/ 882:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Fb = undefined;\n\nvar _firebase = __webpack_require__(297);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nvar _mobxStore = __webpack_require__(295);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _appStore = __webpack_require__(883);\n\nvar _appStore2 = _interopRequireDefault(_appStore);\n\nvar _propertysViewModel = __webpack_require__(881);\n\nvar _agentModelView = __webpack_require__(1102);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ntry {\n\n  var config = {\n    apiKey: 'AIzaSyD_SHmOwRUywGbWf9rRwP-MKSI3d0cYJu8',\n    authDomain: 'todo-app-a2b7c.firebaseapp.com',\n    databaseURL: 'https://todo-app-a2b7c.firebaseio.com',\n    storageBucket: 'todo-app-a2b7c.appspot.com'\n  };\n\n  _firebase2.default.initializeApp(config);\n} catch (e) {}\n\nvar startLogin = function startLogin() {\n  return _firebase2.default.auth().signInWithPopup(githubProvider).then(function (result) {\n    console.log('Auth Worked', result);\n  }, function () {\n    console.log('unable to login');\n  });\n};\n\nvar startLoginGoogle = function startLoginGoogle() {\n\n  return _firebase2.default.auth().signInWithPopup(googleProvider).then(function (result) {\n    // This gives you a Google Access Token. You can use it to access the Google API.\n    var token = result.credential.accessToken;\n    // The signed-in user info.\n    var user = result.user;\n    // ...\n    console.log('Auth Worked', result);\n  }).catch(function (error) {\n    // Handle Errors here.\n    var errorCode = error.code;\n    var errorMessage = error.message;\n    // The email of the user's account used.\n    var email = error.email;\n    // The firebase.auth.AuthCredential type that was used.\n    var credential = error.credential;\n    console.log('unable to login');\n    // ...\n  });\n};\n\nvar startLoginFacebook = function startLoginFacebook() {\n  return _firebase2.default.auth().signInWithPopup(facebookProvider).then(function (result) {\n    //this.user = true;\n    console.log('Auth Worked', result);\n  }, function () {\n    console.log('unable to login');\n  });\n};\n\nvar startLoginAnonyhmously = function startLoginAnonyhmously() {\n\n  _firebase2.default.auth().signInAnonymously().then(function (snapshot) {\n    // The callback succeeded; do something with the final result.\n    console.log('signInAnonymously completed');\n    Fb.app.updateUid();\n\n    return true;\n  }, function (error) {\n    return false;\n    // The callback failed.\n    console.error(error);\n  });\n\n  // .catch(function(error) {\n  //   // Handle Errors here.\n  //   console.log( 'sing in anonymously error', errorMessage )\n  //   var errorCode = error.code;\n  //   var errorMessage = error.message;\n  //   console.log( 'sing in anonymously error', errorMessage )\n  //   // ...\n  // });\n};\n\nvar startLogout = function startLogout() {\n  return _firebase2.default.auth().signOut().then(function () {\n    console.log('Logged out!');\n    //propertys.clear();\n    // agentModel.clear();\n    _mobxStore2.default.app.user = false;\n    _propertysViewModel.propertys.clear();\n    _agentModelView.agentModel.clear();\n  });\n};\n\n//console.log( 'MobxStore.app', MobxStore)\n//var uid =  MobxStore.app.uid;\n//console.log('uid', MobxStore.app.uid)\nvar root = _firebase2.default.database().ref();\nvar propertys = _firebase2.default.database().ref('propertys');\n//const propertysForRent = firebase.database().ref('propertysForRent');\n//const propertysForSale = firebase.database().ref('propertysForSale');\n//const propertysForLease = firebase.database().ref('propertysForLease');\n//const property = firebase.database().ref('property');\nvar matchedPropertys = _firebase2.default.database().ref('matchedPropertys');\n\n// const mbsdk = () => {\n//   var uid = MobxStore.app.uid;\n// }\n\n\nvar Fb = {\n  app: new _appStore2.default(),\n  root: root,\n  propertys: propertys,\n  startLogin: startLogin,\n  startLogout: startLogout,\n  startLoginAnonyhmously: startLoginAnonyhmously,\n  startLoginFacebook: startLoginFacebook,\n  startLoginGoogle: startLoginGoogle,\n  //propertysForRent,\n  //propertysForSale,\n  //propertysForLease,\n  //property,\n  matchedPropertys: matchedPropertys\n};\n\nvar githubProvider = new _firebase2.default.auth.GithubAuthProvider();\nvar facebookProvider = new _firebase2.default.auth.FacebookAuthProvider();\nvar googleProvider = new _firebase2.default.auth.GoogleAuthProvider();\nexports.Fb = Fb;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODgyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9maXJlYmFzZS9maXJlYmFzZS1zdG9yZS5qcz9lM2I1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJ1xyXG5pbXBvcnQgQXBwU3RvcmUgZnJvbSAnYXBwLXN0b3JlJ1xyXG5pbXBvcnQge3Byb3BlcnR5cyBhcyB1c2VyUHJvcGVydHlzTW9kZWx9IGZyb20gJ3Byb3BlcnR5c1ZpZXdNb2RlbCdcclxuaW1wb3J0IHthZ2VudE1vZGVsfSBmcm9tICdhZ2VudE1vZGVsVmlldydcclxuXHJcblxyXG50cnkge1xyXG5cclxudmFyIGNvbmZpZyA9IHtcclxuICBhcGlLZXk6ICdBSXphU3lEX1NIbU93UlV5d0diV2Y5clJ3UC1NS1NJM2QwY1lKdTgnLFxyXG4gIGF1dGhEb21haW46ICd0b2RvLWFwcC1hMmI3Yy5maXJlYmFzZWFwcC5jb20nLFxyXG4gIGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly90b2RvLWFwcC1hMmI3Yy5maXJlYmFzZWlvLmNvbScsXHJcbiAgc3RvcmFnZUJ1Y2tldDogJ3RvZG8tYXBwLWEyYjdjLmFwcHNwb3QuY29tJyxcclxufTtcclxuXHJcbmZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcclxufSBjYXRjaCAoZSkge31cclxuXHJcbmNvbnN0IHN0YXJ0TG9naW4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAoIGdpdGh1YlByb3ZpZGVyICkudGhlbiggKHJlc3VsdCkgPT4ge1xyXG4gICAgIGNvbnNvbGUubG9nKCAnQXV0aCBXb3JrZWQnLCByZXN1bHQgKVxyXG4gIH0sICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCAndW5hYmxlIHRvIGxvZ2luJyApO1xyXG4gIH1cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdGFydExvZ2luR29vZ2xlID0gKCkgPT4ge1xyXG5cclxuICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cChnb29nbGVQcm92aWRlcikudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAvLyBUaGlzIGdpdmVzIHlvdSBhIEdvb2dsZSBBY2Nlc3MgVG9rZW4uIFlvdSBjYW4gdXNlIGl0IHRvIGFjY2VzcyB0aGUgR29vZ2xlIEFQSS5cclxuICB2YXIgdG9rZW4gPSByZXN1bHQuY3JlZGVudGlhbC5hY2Nlc3NUb2tlbjtcclxuICAvLyBUaGUgc2lnbmVkLWluIHVzZXIgaW5mby5cclxuICB2YXIgdXNlciA9IHJlc3VsdC51c2VyO1xyXG4gIC8vIC4uLlxyXG4gIGNvbnNvbGUubG9nKCAnQXV0aCBXb3JrZWQnLCByZXN1bHQgKVxyXG59KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gIC8vIEhhbmRsZSBFcnJvcnMgaGVyZS5cclxuICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAvLyBUaGUgZW1haWwgb2YgdGhlIHVzZXIncyBhY2NvdW50IHVzZWQuXHJcbiAgdmFyIGVtYWlsID0gZXJyb3IuZW1haWw7XHJcbiAgLy8gVGhlIGZpcmViYXNlLmF1dGguQXV0aENyZWRlbnRpYWwgdHlwZSB0aGF0IHdhcyB1c2VkLlxyXG4gIHZhciBjcmVkZW50aWFsID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICBjb25zb2xlLmxvZyggJ3VuYWJsZSB0byBsb2dpbicgKTtcclxuICAvLyAuLi5cclxufSk7XHJcblxyXG59XHJcblxyXG5jb25zdCBzdGFydExvZ2luRmFjZWJvb2sgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoUG9wdXAoIGZhY2Vib29rUHJvdmlkZXIpLnRoZW4oIChyZXN1bHQpID0+IHtcclxuICAgICAvL3RoaXMudXNlciA9IHRydWU7XHJcbiAgICAgY29uc29sZS5sb2coICdBdXRoIFdvcmtlZCcsIHJlc3VsdCApXHJcbiAgfSwgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coICd1bmFibGUgdG8gbG9naW4nICk7XHJcbiAgfVxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0YXJ0TG9naW5Bbm9ueWhtb3VzbHkgPSAoKSA9PiB7XHJcblxyXG5maXJlYmFzZS5hdXRoKCkuc2lnbkluQW5vbnltb3VzbHkoKS50aGVuKGZ1bmN0aW9uKHNuYXBzaG90KSB7XHJcbiAgLy8gVGhlIGNhbGxiYWNrIHN1Y2NlZWRlZDsgZG8gc29tZXRoaW5nIHdpdGggdGhlIGZpbmFsIHJlc3VsdC5cclxuICBjb25zb2xlLmxvZyggJ3NpZ25JbkFub255bW91c2x5IGNvbXBsZXRlZCcpXHJcbiAgRmIuYXBwLnVwZGF0ZVVpZCgpO1xyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICByZXR1cm4gZmFsc2U7XHJcbiAgLy8gVGhlIGNhbGxiYWNrIGZhaWxlZC5cclxuICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxufSk7XHJcblxyXG4vLyAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuLy8gICAvLyBIYW5kbGUgRXJyb3JzIGhlcmUuXHJcbi8vICAgY29uc29sZS5sb2coICdzaW5nIGluIGFub255bW91c2x5IGVycm9yJywgZXJyb3JNZXNzYWdlIClcclxuLy8gICB2YXIgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuLy8gICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuLy8gICBjb25zb2xlLmxvZyggJ3NpbmcgaW4gYW5vbnltb3VzbHkgZXJyb3InLCBlcnJvck1lc3NhZ2UgKVxyXG4vLyAgIC8vIC4uLlxyXG4vLyB9KTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IHN0YXJ0TG9nb3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpLnRoZW4oICgpPT4ge1xyXG4gICAgY29uc29sZS5sb2coICdMb2dnZWQgb3V0IScpXHJcbiAgICAvL3Byb3BlcnR5cy5jbGVhcigpO1xyXG4gICAgLy8gYWdlbnRNb2RlbC5jbGVhcigpO1xyXG4gICAgTW9ieFN0b3JlLmFwcC51c2VyID0gZmFsc2U7XHJcbiAgICB1c2VyUHJvcGVydHlzTW9kZWwuY2xlYXIoKTtcclxuICAgIGFnZW50TW9kZWwuY2xlYXIoKTtcclxuICB9KSA7XHJcbn1cclxuXHJcbi8vY29uc29sZS5sb2coICdNb2J4U3RvcmUuYXBwJywgTW9ieFN0b3JlKVxyXG4vL3ZhciB1aWQgPSAgTW9ieFN0b3JlLmFwcC51aWQ7XHJcbi8vY29uc29sZS5sb2coJ3VpZCcsIE1vYnhTdG9yZS5hcHAudWlkKVxyXG5jb25zdCByb290ID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoKTtcclxuY29uc3QgcHJvcGVydHlzID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3Byb3BlcnR5cycpO1xyXG4vL2NvbnN0IHByb3BlcnR5c0ZvclJlbnQgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHlzRm9yUmVudCcpO1xyXG4vL2NvbnN0IHByb3BlcnR5c0ZvclNhbGUgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHlzRm9yU2FsZScpO1xyXG4vL2NvbnN0IHByb3BlcnR5c0ZvckxlYXNlID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3Byb3BlcnR5c0ZvckxlYXNlJyk7XHJcbi8vY29uc3QgcHJvcGVydHkgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHknKTtcclxuY29uc3QgbWF0Y2hlZFByb3BlcnR5cyA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdtYXRjaGVkUHJvcGVydHlzJyk7XHJcblxyXG4vLyBjb25zdCBtYnNkayA9ICgpID0+IHtcclxuLy8gICB2YXIgdWlkID0gTW9ieFN0b3JlLmFwcC51aWQ7XHJcbi8vIH1cclxuXHJcblxyXG5jb25zdCBGYiA9IHtcclxuICBhcHAgOiBuZXcgQXBwU3RvcmUoKSxcclxuICByb290LFxyXG4gIHByb3BlcnR5cyxcclxuICBzdGFydExvZ2luLFxyXG4gIHN0YXJ0TG9nb3V0LFxyXG4gIHN0YXJ0TG9naW5Bbm9ueWhtb3VzbHksXHJcbiAgc3RhcnRMb2dpbkZhY2Vib29rLFxyXG4gIHN0YXJ0TG9naW5Hb29nbGUsXHJcbiAgLy9wcm9wZXJ0eXNGb3JSZW50LFxyXG4gIC8vcHJvcGVydHlzRm9yU2FsZSxcclxuICAvL3Byb3BlcnR5c0ZvckxlYXNlLFxyXG4gIC8vcHJvcGVydHksXHJcbiAgbWF0Y2hlZFByb3BlcnR5c1xyXG59O1xyXG5cclxudmFyIGdpdGh1YlByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyKCk7XHJcbnZhciBmYWNlYm9va1Byb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIoKTtcclxudmFyIGdvb2dsZVByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcbmV4cG9ydCB7IEZiIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmlyZWJhc2UvZmlyZWJhc2Utc3RvcmUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
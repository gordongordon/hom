webpackHotUpdate(0,{

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.githubProvider = exports.Fb = undefined;\n\nvar _firebase = __webpack_require__(443);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _views = __webpack_require__(500);\n\nvar _views2 = _interopRequireDefault(_views);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ntry {\n  var config = {\n    apiKey: 'AIzaSyD_SHmOwRUywGbWf9rRwP-MKSI3d0cYJu8',\n    authDomain: 'todo-app-a2b7c.firebaseapp.com',\n    databaseURL: 'https://todo-app-a2b7c.firebaseio.com',\n    storageBucket: 'todo-app-a2b7c.appspot.com'\n  };\n\n  _firebase2.default.initializeApp(config);\n} catch (e) {}\n\n_firebase2.default.auth().onAuthStateChanged(function (user) {\n  if (user) {\n    _mobxStore.MobxStore.router.goTo(_views2.default.list);\n  } else {\n    _mobxStore.MobxStore.router.goTo(_views2.default.home);\n  }\n});\n\nvar root = _firebase2.default.database().ref();\nvar propertys = _firebase2.default.database().ref('propertys');\nvar propertysForRent = _firebase2.default.database().ref('propertysForRent');\nvar propertysForSale = _firebase2.default.database().ref('propertysForSale');\nvar propertysForLease = _firebase2.default.database().ref('propertysForLease');\nvar property = _firebase2.default.database().ref('property');\nvar matchedPropertys = _firebase2.default.database().ref('matchedPropertys');\n\nvar Fb = {\n  root: root,\n  propertys: propertys,\n  propertysForRent: propertysForRent,\n  propertysForSale: propertysForSale,\n  propertysForLease: propertysForLease,\n  property: property,\n  matchedPropertys: matchedPropertys\n};\n\nvar githubProvider = new _firebase2.default.auth.GithubAuthProvider();\nexports.Fb = Fb;\nexports.githubProvider = githubProvider;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9maXJlYmFzZS9maXJlYmFzZS1zdG9yZS5qcz9lM2I1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcbmltcG9ydCB7TW9ieFN0b3JlfSBmcm9tICdtb2J4U3RvcmUnXHJcbmltcG9ydCB2aWV3cyBmcm9tICd2aWV3cydcclxuXHJcbnRyeSB7XHJcbnZhciBjb25maWcgPSB7XHJcbiAgYXBpS2V5OiAnQUl6YVN5RF9TSG1Pd1JVeXdHYldmOXJSd1AtTUtTSTNkMGNZSnU4JyxcclxuICBhdXRoRG9tYWluOiAndG9kby1hcHAtYTJiN2MuZmlyZWJhc2VhcHAuY29tJyxcclxuICBkYXRhYmFzZVVSTDogJ2h0dHBzOi8vdG9kby1hcHAtYTJiN2MuZmlyZWJhc2Vpby5jb20nLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6ICd0b2RvLWFwcC1hMmI3Yy5hcHBzcG90LmNvbScsXHJcbn07XHJcblxyXG5maXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbn0gY2F0Y2ggKGUpIHt9XHJcblxyXG5maXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCAodXNlcikgPT4ge1xyXG4gIGlmICh1c2VyKSB7XHJcbiAgICBNb2J4U3RvcmUucm91dGVyLmdvVG8oIHZpZXdzLmxpc3QgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBNb2J4U3RvcmUucm91dGVyLmdvVG8oIHZpZXdzLmhvbWUgKVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IHJvb3QgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpO1xyXG5jb25zdCBwcm9wZXJ0eXMgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHlzJyk7XHJcbmNvbnN0IHByb3BlcnR5c0ZvclJlbnQgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHlzRm9yUmVudCcpO1xyXG5jb25zdCBwcm9wZXJ0eXNGb3JTYWxlID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3Byb3BlcnR5c0ZvclNhbGUnKTtcclxuY29uc3QgcHJvcGVydHlzRm9yTGVhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHlzRm9yTGVhc2UnKTtcclxuY29uc3QgcHJvcGVydHkgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHknKTtcclxuY29uc3QgbWF0Y2hlZFByb3BlcnR5cyA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdtYXRjaGVkUHJvcGVydHlzJyk7XHJcblxyXG5jb25zdCBGYiA9IHtcclxuICByb290LFxyXG4gIHByb3BlcnR5cyxcclxuICBwcm9wZXJ0eXNGb3JSZW50LFxyXG4gIHByb3BlcnR5c0ZvclNhbGUsXHJcbiAgcHJvcGVydHlzRm9yTGVhc2UsXHJcbiAgcHJvcGVydHksXHJcbiAgbWF0Y2hlZFByb3BlcnR5c1xyXG59O1xyXG5cclxudmFyIGdpdGh1YlByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyKCk7XHJcbmV4cG9ydCB7IEZiLCBnaXRodWJQcm92aWRlciB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZpcmViYXNlL2ZpcmViYXNlLXN0b3JlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
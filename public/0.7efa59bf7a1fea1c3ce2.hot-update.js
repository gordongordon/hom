webpackHotUpdate(0,{

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.githubProvider = exports.Fb = undefined;\n\nvar _firebase = __webpack_require__(443);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ntry {\n  var config = {\n    apiKey: 'AIzaSyD_SHmOwRUywGbWf9rRwP-MKSI3d0cYJu8',\n    authDomain: 'todo-app-a2b7c.firebaseapp.com',\n    databaseURL: 'https://todo-app-a2b7c.firebaseio.com',\n    storageBucket: 'todo-app-a2b7c.appspot.com'\n  };\n\n  _firebase2.default.initializeApp(config);\n} catch (e) {}\n\nvar root = _firebase2.default.database().ref();\nvar propertys = _firebase2.default.database().ref('propertys');\nvar propertysForRent = _firebase2.default.database().ref('propertysForRent');\nvar propertysForSale = _firebase2.default.database().ref('propertysForSale');\nvar propertysForLease = _firebase2.default.database().ref('propertysForLease');\nvar property = _firebase2.default.database().ref('property');\nvar matchedPropertys = _firebase2.default.database().ref('matchedPropertys');\n\nvar Fb = {\n  root: root,\n  propertys: propertys,\n  propertysForRent: propertysForRent,\n  propertysForSale: propertysForSale,\n  propertysForLease: propertysForLease,\n  property: property,\n  matchedPropertys: matchedPropertys\n};\n\nvar githubProvider = new _firebase2.default.auth.GithubAuthProvider();\nexports.Fb = Fb;\nexports.githubProvider = githubProvider;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9maXJlYmFzZS9maXJlYmFzZS1zdG9yZS5qcz9lM2I1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcblxyXG50cnkge1xyXG52YXIgY29uZmlnID0ge1xyXG4gIGFwaUtleTogJ0FJemFTeURfU0htT3dSVXl3R2JXZjlyUndQLU1LU0kzZDBjWUp1OCcsXHJcbiAgYXV0aERvbWFpbjogJ3RvZG8tYXBwLWEyYjdjLmZpcmViYXNlYXBwLmNvbScsXHJcbiAgZGF0YWJhc2VVUkw6ICdodHRwczovL3RvZG8tYXBwLWEyYjdjLmZpcmViYXNlaW8uY29tJyxcclxuICBzdG9yYWdlQnVja2V0OiAndG9kby1hcHAtYTJiN2MuYXBwc3BvdC5jb20nLFxyXG59O1xyXG5cclxuZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpO1xyXG59IGNhdGNoIChlKSB7fVxyXG5cclxuXHJcbmNvbnN0IHJvb3QgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpO1xyXG5jb25zdCBwcm9wZXJ0eXMgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHlzJyk7XHJcbmNvbnN0IHByb3BlcnR5c0ZvclJlbnQgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHlzRm9yUmVudCcpO1xyXG5jb25zdCBwcm9wZXJ0eXNGb3JTYWxlID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3Byb3BlcnR5c0ZvclNhbGUnKTtcclxuY29uc3QgcHJvcGVydHlzRm9yTGVhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHlzRm9yTGVhc2UnKTtcclxuY29uc3QgcHJvcGVydHkgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigncHJvcGVydHknKTtcclxuY29uc3QgbWF0Y2hlZFByb3BlcnR5cyA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdtYXRjaGVkUHJvcGVydHlzJyk7XHJcblxyXG5jb25zdCBGYiA9IHtcclxuICByb290LFxyXG4gIHByb3BlcnR5cyxcclxuICBwcm9wZXJ0eXNGb3JSZW50LFxyXG4gIHByb3BlcnR5c0ZvclNhbGUsXHJcbiAgcHJvcGVydHlzRm9yTGVhc2UsXHJcbiAgcHJvcGVydHksXHJcbiAgbWF0Y2hlZFByb3BlcnR5c1xyXG59O1xyXG5cclxudmFyIGdpdGh1YlByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyKCk7XHJcbmV4cG9ydCB7IEZiLCBnaXRodWJQcm92aWRlciB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZpcmViYXNlL2ZpcmViYXNlLXN0b3JlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
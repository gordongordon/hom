webpackHotUpdate(0,{

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mobx = __webpack_require__(440);\n\nvar _firebase = __webpack_require__(443);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nvar _firebaseStore = __webpack_require__(499);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AppStore = function AppStore() {\n  var _this = this;\n\n  _classCallCheck(this, AppStore);\n\n  this.startLogin = function () {\n    return _firebase2.default.auth().signInWithPopup(_firebaseStore.githubProvider).then(function (result) {\n      _this.user = true;\n      console.log('Auth Worked', result);\n    });\n  };\n\n  this.startLogout = function () {\n    return _firebase2.default.auth().signOut().then(function () {\n      console.log('Logged out!');\n    });\n  };\n\n  this.setTitle = (0, _mobx.action)(function (title) {\n    _this.title = title;\n  });\n\n  (0, _mobx.extendObservable)(this, {\n    title: 'HoMatching',\n    user: undefined,\n    previousView: undefined,\n    viewHistory: new Map(),\n    nextView: undefined,\n    params: undefined\n  });\n};\n\nexports.default = AppStore;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDQyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9tb2J4cy9zdG9yZXMvYXBwLXN0b3JlLmpzPzU1ZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtleHRlbmRPYnNlcnZhYmxlLCBhY3Rpb259IGZyb20gJ21vYngnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQge2dpdGh1YlByb3ZpZGVyfSBmcm9tICdmaXJlYmFzZS1zdG9yZSdcclxuXHJcbmNsYXNzIEFwcFN0b3JlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGV4dGVuZE9ic2VydmFibGUodGhpcywge1xyXG4gICAgICB0aXRsZTogJ0hvTWF0Y2hpbmcnLFxyXG4gICAgICB1c2VyOiB1bmRlZmluZWQsXHJcbiAgICAgIHByZXZpb3VzVmlldyA6IHVuZGVmaW5lZCxcclxuICAgICAgdmlld0hpc3RvcnkgIDogbmV3IE1hcCgpLFxyXG4gICAgICBuZXh0VmlldyA6IHVuZGVmaW5lZCxcclxuICAgICAgcGFyYW1zIDogdW5kZWZpbmVkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0TG9naW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhQb3B1cCggZ2l0aHViUHJvdmlkZXIgKS50aGVuKCAocmVzdWx0KSA9PiB7XHJcbiAgICAgICB0aGlzLnVzZXIgPSB0cnVlO1xyXG4gICAgICAgY29uc29sZS5sb2coICdBdXRoIFdvcmtlZCcsIHJlc3VsdCApXHJcbiAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKS50aGVuKCAoKT0+IHtcclxuICAgICAgY29uc29sZS5sb2coICdMb2dnZWQgb3V0IScpXHJcbiAgICB9KSA7XHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZSA9IGFjdGlvbih0aXRsZSA9PiB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFN0b3JlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL21vYnhzL3N0b3Jlcy9hcHAtc3RvcmUuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQWxCQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBMEJBO0FBQ0E7QUFDQTtBQTNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQW9CQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
webpackHotUpdate(0,{

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _firebase = __webpack_require__(443);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _propertysViewModel = __webpack_require__(807);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AppStore = function AppStore() {\n    var _this = this;\n\n    _classCallCheck(this, AppStore);\n\n    this.updateUid = function () {\n        var uid = _mobxStore2.default.app.uid;\n        console.log('MobxStore.app.uid ', uid);\n        _this.propertysRef = _firebase2.default.database().ref('users/' + uid + '/propertys');\n        _this.matchedPropertysRef = _firebase2.default.database().ref('users/' + uid + '/matchedPropertys');\n        // init propertysViewModel, for mobx,\n        // can't be used inside constructor\n        // when app start will call an empty constructor\n        _propertysViewModel.propertys.init();\n    };\n\n    this.propertysRef = undefined;\n    this.matchedPropertysRef = undefined;\n    this.propertysAgentRef = undefined;\n}\n\n// Catch user login before assign any database reference\n;\n\nexports.default = AppStore;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODA5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9maXJlYmFzZS9hcHAtc3RvcmUuanM/ODMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgTW9ieFN0b3JlIGZyb20gJ21vYnhTdG9yZSdcclxuaW1wb3J0IHtwcm9wZXJ0eXN9IGZyb20gJ3Byb3BlcnR5c1ZpZXdNb2RlbCdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBTdG9yZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgdGhpcy5wcm9wZXJ0eXNSZWYgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMubWF0Y2hlZFByb3BlcnR5c1JlZiA9IHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5wcm9wZXJ0eXNBZ2VudFJlZiA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYXRjaCB1c2VyIGxvZ2luIGJlZm9yZSBhc3NpZ24gYW55IGRhdGFiYXNlIHJlZmVyZW5jZVxyXG4gICAgdXBkYXRlVWlkID0gKCkgPT4ge1xyXG4gICAgICAgY29uc3QgdWlkID0gTW9ieFN0b3JlLmFwcC51aWQ7XHJcbiAgICAgICBjb25zb2xlLmxvZyggJ01vYnhTdG9yZS5hcHAudWlkICcsIHVpZClcclxuICAgICAgIHRoaXMucHJvcGVydHlzUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoYHVzZXJzLyR7dWlkfS9wcm9wZXJ0eXNgKTtcclxuICAgICAgIHRoaXMubWF0Y2hlZFByb3BlcnR5c1JlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKGB1c2Vycy8ke3VpZH0vbWF0Y2hlZFByb3BlcnR5c2ApO1xyXG4gICAgICAgLy8gaW5pdCBwcm9wZXJ0eXNWaWV3TW9kZWwsIGZvciBtb2J4LFxyXG4gICAgICAgLy8gY2FuJ3QgYmUgdXNlZCBpbnNpZGUgY29uc3RydWN0b3JcclxuICAgICAgIC8vIHdoZW4gYXBwIHN0YXJ0IHdpbGwgY2FsbCBhbiBlbXB0eSBjb25zdHJ1Y3RvclxyXG4gICAgICAgcHJvcGVydHlzLmluaXQoKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZpcmViYXNlL2FwcC1zdG9yZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFQQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
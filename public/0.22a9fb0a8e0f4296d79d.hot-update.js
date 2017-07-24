webpackHotUpdate(0,{

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = undefined;\n\nvar _firebase = __webpack_require__(443);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _propertysViewModel = __webpack_require__(807);\n\nvar _propertysAgentViewModel = __webpack_require__(1003);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar AppStore = function AppStore() {\n    var _this = this;\n\n    _classCallCheck(this, AppStore);\n\n    this.updateUid = function () {\n        var uid = _mobxStore2.default.app.uid;\n        console.log('MobxStore.app.uid ', uid);\n\n        _this.propertysRef = _firebase2.default.database().ref('users/' + uid + '/propertys');\n        _this.matchedPropertysRef = _firebase2.default.database().ref('users/' + uid + '/matchedPropertys');\n        _this.agentsRef = _firebase2.default.database().ref('agents/' + uid + '/propertys');\n\n        // init propertysViewModel, for mobx,\n        // can't be used inside constructor\n        // when app start will call an empty constructor\n        _propertysViewModel.propertys.init();\n        // Agent only\n        _propertysAgentViewModel.propertysAgent.init();\n    };\n\n    this.propertysRef = undefined;\n    this.matchedPropertysRef = undefined;\n    this.agentsRef = undefined;\n}\n\n// Catch user login before assign any database reference\n;\n\nexports.default = AppStore;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODA5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9maXJlYmFzZS9hcHAtc3RvcmUuanM/ODMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xyXG5pbXBvcnQgTW9ieFN0b3JlIGZyb20gJ21vYnhTdG9yZSdcclxuaW1wb3J0IHtwcm9wZXJ0eXN9IGZyb20gJ3Byb3BlcnR5c1ZpZXdNb2RlbCdcclxuaW1wb3J0IHtwcm9wZXJ0eXNBZ2VudH0gZnJvbSAncHJvcGVydHlzQWdlbnRWaWV3TW9kZWwnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHRoaXMucHJvcGVydHlzUmVmID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLm1hdGNoZWRQcm9wZXJ0eXNSZWYgPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuYWdlbnRzUmVmID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhdGNoIHVzZXIgbG9naW4gYmVmb3JlIGFzc2lnbiBhbnkgZGF0YWJhc2UgcmVmZXJlbmNlXHJcbiAgICB1cGRhdGVVaWQgPSAoKSA9PiB7XHJcbiAgICAgICBjb25zdCB1aWQgPSBNb2J4U3RvcmUuYXBwLnVpZDtcclxuICAgICAgIGNvbnNvbGUubG9nKCAnTW9ieFN0b3JlLmFwcC51aWQgJywgdWlkKVxyXG5cclxuICAgICAgIHRoaXMucHJvcGVydHlzUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoYHVzZXJzLyR7dWlkfS9wcm9wZXJ0eXNgKTtcclxuICAgICAgIHRoaXMubWF0Y2hlZFByb3BlcnR5c1JlZiA9IGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKGB1c2Vycy8ke3VpZH0vbWF0Y2hlZFByb3BlcnR5c2ApO1xyXG4gICAgICAgdGhpcy5hZ2VudHNSZWYgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihgYWdlbnRzLyR7dWlkfS9wcm9wZXJ0eXNgKTtcclxuXHJcbiAgICAgICAvLyBpbml0IHByb3BlcnR5c1ZpZXdNb2RlbCwgZm9yIG1vYngsXHJcbiAgICAgICAvLyBjYW4ndCBiZSB1c2VkIGluc2lkZSBjb25zdHJ1Y3RvclxyXG4gICAgICAgLy8gd2hlbiBhcHAgc3RhcnQgd2lsbCBjYWxsIGFuIGVtcHR5IGNvbnN0cnVjdG9yXHJcbiAgICAgICBwcm9wZXJ0eXMuaW5pdCgpO1xyXG4gICAgICAgLy8gQWdlbnQgb25seVxyXG4gICAgICAgcHJvcGVydHlzQWdlbnQuaW5pdCgpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmlyZWJhc2UvYXBwLXN0b3JlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBUEEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
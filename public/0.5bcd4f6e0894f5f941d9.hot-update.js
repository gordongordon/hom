webpackHotUpdate(0,{

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(113);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _mobxRouter = __webpack_require__(260);\n\nvar _frontPageTabBar = __webpack_require__(293);\n\nvar _mobxReact = __webpack_require__(439);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _navigationBar = __webpack_require__(500);\n\nvar _navigationBar2 = _interopRequireDefault(_navigationBar);\n\nvar _views = __webpack_require__(505);\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _firebase = __webpack_require__(443);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nvar _reactFastclick = __webpack_require__(988);\n\nvar _reactFastclick2 = _interopRequireDefault(_reactFastclick);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// For Touch display\n\n\n//mobx\n(0, _reactFastclick2.default)();\n\n//router\n\n\n(0, _mobxRouter.startRouter)(_views2.default, _mobxStore2.default);\n\ncallFirebase = _firebase2.default.auth().onAuthStateChanged(function (user) {\n  if (user) {\n    _mobxStore2.default.router.goTo(_views2.default.list);\n  } else {\n\n    _mobxStore2.default.router.goTo(_views2.default.home);\n  }\n});\n\n_reactDom2.default.render(_react2.default.createElement(\n  _mobxReact.Provider,\n  { store: _mobxStore2.default },\n  _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_navigationBar2.default, null),\n    _react2.default.createElement(_mobxRouter.MobxRouter, null)\n  )\n), document.getElementById('root'));\n\n//<button onClick={() => MobxStore.router.goTo(views.second)}>Go First</button>\n//MobxStore.app.title//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzFmZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7TW9ieFJvdXRlciwgc3RhcnRSb3V0ZXJ9IGZyb20gJ21vYngtcm91dGVyJztcclxuaW1wb3J0IHtGcm9udFBhZ2VUYWJCYXJ9IGZyb20gJ2Zyb250UGFnZVRhYkJhcic7XHJcblxyXG4vL21vYnhcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnbmF2aWdhdGlvbkJhcidcclxuXHJcbi8vcm91dGVyXHJcbmltcG9ydCB2aWV3cyBmcm9tICd2aWV3cyc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcclxuXHJcbmltcG9ydCBpbml0UmVhY3RGYXN0Y2xpY2sgZnJvbSAncmVhY3QtZmFzdGNsaWNrJztcclxuLy8gRm9yIFRvdWNoIGRpc3BsYXlcclxuaW5pdFJlYWN0RmFzdGNsaWNrKCk7XHJcblxyXG5zdGFydFJvdXRlcih2aWV3cywgTW9ieFN0b3JlKTtcclxuXHJcbmNhbGxGaXJlYmFzZSA9IGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoICh1c2VyKSA9PiB7XHJcbiAgaWYgKHVzZXIpIHtcclxuICAgIE1vYnhTdG9yZS5yb3V0ZXIuZ29Ubyggdmlld3MubGlzdCApXHJcbiAgfSBlbHNlIHtcclxuXHJcbiAgICBNb2J4U3RvcmUucm91dGVyLmdvVG8oIHZpZXdzLmhvbWUgKVxyXG4gIH1cclxufSlcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8UHJvdmlkZXIgc3RvcmU9e01vYnhTdG9yZX0+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgICA8TmF2aWdhdGlvbkJhci8+XHJcbiAgICAgICAgIDxNb2J4Um91dGVyLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbilcclxuXHJcbi8vPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBNb2J4U3RvcmUucm91dGVyLmdvVG8odmlld3Muc2Vjb25kKX0+R28gRmlyc3Q8L2J1dHRvbj5cclxuLy9Nb2J4U3RvcmUuYXBwLnRpdGxlXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFaQTtBQVdBO0FBQ0E7QUFQQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU9BOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
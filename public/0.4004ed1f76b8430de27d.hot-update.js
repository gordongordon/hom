webpackHotUpdate(0,{

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(113);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _mobxRouter = __webpack_require__(260);\n\nvar _frontPageTabBar = __webpack_require__(293);\n\nvar _mobxReact = __webpack_require__(439);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _navigationBar = __webpack_require__(500);\n\nvar _navigationBar2 = _interopRequireDefault(_navigationBar);\n\nvar _views = __webpack_require__(505);\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _firebase = __webpack_require__(443);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nvar _reactFastclick = __webpack_require__(988);\n\nvar _reactFastclick2 = _interopRequireDefault(_reactFastclick);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// For Touch display\n\n\n//mobx\n(0, _reactFastclick2.default)();\n\n//router\n\n\n(0, _mobxRouter.startRouter)(_views2.default, _mobxStore2.default);\n\n_firebase2.default.auth().onAuthStateChanged(function (user) {\n\n  // update currentUser login or not\n  _mobxStore2.default.app.user = _firebase2.default.auth().currentUser;\n  // MobxStore.app.user = true;\n\n  if (user) {\n    console.log('user signed');\n    // Redirect to member page!\n    _mobxStore2.default.router.goTo(_views2.default.list, {}, _mobxStore2.default);\n  } else {\n    console.log('user donot sign');\n    _mobxStore2.default.router.goTo(_views2.default.home, {}, _mobxStore2.default);\n  }\n});\n\n_reactDom2.default.render(_react2.default.createElement(\n  _mobxReact.Provider,\n  { store: _mobxStore2.default },\n  _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_navigationBar2.default, null),\n    _react2.default.createElement(_mobxRouter.MobxRouter, null)\n  )\n), document.getElementById('root'));\n\n//<button onClick={() => MobxStore.router.goTo(views.second)}>Go First</button>\n//MobxStore.app.title//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzFmZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7TW9ieFJvdXRlciwgc3RhcnRSb3V0ZXJ9IGZyb20gJ21vYngtcm91dGVyJztcclxuaW1wb3J0IHtGcm9udFBhZ2VUYWJCYXJ9IGZyb20gJ2Zyb250UGFnZVRhYkJhcic7XHJcblxyXG4vL21vYnhcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnbmF2aWdhdGlvbkJhcidcclxuXHJcbi8vcm91dGVyXHJcbmltcG9ydCB2aWV3cyBmcm9tICd2aWV3cyc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcclxuXHJcbmltcG9ydCBpbml0UmVhY3RGYXN0Y2xpY2sgZnJvbSAncmVhY3QtZmFzdGNsaWNrJztcclxuLy8gRm9yIFRvdWNoIGRpc3BsYXlcclxuaW5pdFJlYWN0RmFzdGNsaWNrKCk7XHJcblxyXG5zdGFydFJvdXRlcih2aWV3cywgTW9ieFN0b3JlKTtcclxuXHJcbmZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoICh1c2VyKSA9PiB7XHJcblxyXG4gICAvLyB1cGRhdGUgY3VycmVudFVzZXIgbG9naW4gb3Igbm90XHJcbiAgIE1vYnhTdG9yZS5hcHAudXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcclxuICAgLy8gTW9ieFN0b3JlLmFwcC51c2VyID0gdHJ1ZTtcclxuXHJcbiAgaWYgKCB1c2VyKSAge1xyXG4gICAgIGNvbnNvbGUubG9nKCAndXNlciBzaWduZWQnKVxyXG4gICAgIC8vIFJlZGlyZWN0IHRvIG1lbWJlciBwYWdlIVxyXG4gICAgIE1vYnhTdG9yZS5yb3V0ZXIuZ29Ubyggdmlld3MubGlzdCAsIHt9LCBNb2J4U3RvcmUgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyggJ3VzZXIgZG9ub3Qgc2lnbicpXHJcbiAgICAgICBNb2J4U3RvcmUucm91dGVyLmdvVG8oIHZpZXdzLmhvbWUgLCB7fSwgTW9ieFN0b3JlIClcclxuICB9XHJcbn0pXHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxQcm92aWRlciBzdG9yZT17TW9ieFN0b3JlfT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgIDxOYXZpZ2F0aW9uQmFyLz5cclxuICAgICAgICAgPE1vYnhSb3V0ZXIvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9Qcm92aWRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JylcclxuKVxyXG5cclxuXHJcblxyXG4vLzxidXR0b24gb25DbGljaz17KCkgPT4gTW9ieFN0b3JlLnJvdXRlci5nb1RvKHZpZXdzLnNlY29uZCl9PkdvIEZpcnN0PC9idXR0b24+XHJcbi8vTW9ieFN0b3JlLmFwcC50aXRsZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBWkE7QUFXQTtBQUNBO0FBUEE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQVNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
webpackHotUpdate(0,{

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(113);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _mobxRouter = __webpack_require__(260);\n\nvar _frontPageTabBar = __webpack_require__(293);\n\nvar _mobxReact = __webpack_require__(439);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _navigationBar = __webpack_require__(500);\n\nvar _navigationBar2 = _interopRequireDefault(_navigationBar);\n\nvar _views = __webpack_require__(505);\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _firebase = __webpack_require__(443);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nvar _reactFastclick = __webpack_require__(993);\n\nvar _reactFastclick2 = _interopRequireDefault(_reactFastclick);\n\nvar _reactSimpleChatbot = __webpack_require__(927);\n\nvar _reactSimpleChatbot2 = _interopRequireDefault(_reactSimpleChatbot);\n\nvar _formSaleChatbot = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"../chatbot/formSaleChatbot\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// For Touch display\n\n\n//mobx\n(0, _reactFastclick2.default)();\n\n//router\n\n\n(0, _mobxRouter.startRouter)(_views2.default, _mobxStore2.default);\n\nfunction preventDefault(e) {\n    e = e || window.event;\n    if (e.preventDefault) e.preventDefault();\n    e.returnValue = false;\n}\n\nfunction preventDefaultForScrollKeys(e) {\n    if (keys[e.keyCode]) {\n        preventDefault(e);\n        return false;\n    }\n}\n\nfunction disableScroll() {\n    if (window.addEventListener) // older FF\n        window.addEventListener('DOMMouseScroll', preventDefault, false);\n    window.onwheel = preventDefault; // modern standard\n    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE\n    window.ontouchmove = preventDefault; // mobile\n    document.onkeydown = preventDefaultForScrollKeys;\n}\n\nfunction enableScroll() {\n    if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);\n    window.onmousewheel = document.onmousewheel = null;\n    window.onwheel = null;\n    window.ontouchmove = null;\n    document.onkeydown = null;\n}\n\n//disableScroll();\n\n\n_firebase2.default.auth().onAuthStateChanged(function (user) {\n\n    // update currentUser login or not\n    _mobxStore2.default.app.user = _firebase2.default.auth().currentUser;\n    // MobxStore.app.user = true;\n\n    if (user) {\n        console.log('user signed');\n        // Redirect to member page!\n        Mobx;\n        _mobxStore2.default.router.goTo(_views2.default.list, {}, _mobxStore2.default);\n    } else {\n        console.log('user donot sign');\n        _mobxStore2.default.router.goTo(_views2.default.home, {}, _mobxStore2.default);\n    }\n});\n\n_reactDom2.default.render(_react2.default.createElement(\n    _mobxReact.Provider,\n    { store: _mobxStore2.default },\n    _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_mobxRouter.MobxRouter, null),\n        _react2.default.createElement(_reactSimpleChatbot2.default, { steps: _formSaleChatbot.FormSaleChatbot }),\n        ';'\n    )\n), document.getElementById('root'));\n//<NavigationBar/>\n\n\n//<button onClick={() => MobxStore.router.goTo(views.second)}>Go First</button>\n//MobxStore.app.title//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzFmZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7TW9ieFJvdXRlciwgc3RhcnRSb3V0ZXJ9IGZyb20gJ21vYngtcm91dGVyJztcclxuaW1wb3J0IHtGcm9udFBhZ2VUYWJCYXJ9IGZyb20gJ2Zyb250UGFnZVRhYkJhcic7XHJcblxyXG4vL21vYnhcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnbmF2aWdhdGlvbkJhcidcclxuXHJcbi8vcm91dGVyXHJcbmltcG9ydCB2aWV3cyBmcm9tICd2aWV3cyc7XHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSdcclxuXHJcbmltcG9ydCBpbml0UmVhY3RGYXN0Y2xpY2sgZnJvbSAncmVhY3QtZmFzdGNsaWNrJztcclxuaW1wb3J0IENoYXRCb3QgZnJvbSAncmVhY3Qtc2ltcGxlLWNoYXRib3QnO1xyXG5pbXBvcnQge0Zvcm1TYWxlQ2hhdGJvdH0gZnJvbSAnLi4vY2hhdGJvdC9mb3JtU2FsZUNoYXRib3QnXHJcblxyXG5cclxuLy8gRm9yIFRvdWNoIGRpc3BsYXlcclxuaW5pdFJlYWN0RmFzdGNsaWNrKCk7XHJcblxyXG5zdGFydFJvdXRlcih2aWV3cywgTW9ieFN0b3JlKTtcclxuXHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGUpIHtcclxuICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgaWYgKGUucHJldmVudERlZmF1bHQpXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICBlLnJldHVyblZhbHVlID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XHJcbiAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XHJcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xyXG4gIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgcHJldmVudERlZmF1bHQsIGZhbHNlKTtcclxuICB3aW5kb3cub253aGVlbCA9IHByZXZlbnREZWZhdWx0OyAvLyBtb2Rlcm4gc3RhbmRhcmRcclxuICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gcHJldmVudERlZmF1bHQ7IC8vIG9sZGVyIGJyb3dzZXJzLCBJRVxyXG4gIHdpbmRvdy5vbnRvdWNobW92ZSAgPSBwcmV2ZW50RGVmYXVsdDsgLy8gbW9iaWxlXHJcbiAgZG9jdW1lbnQub25rZXlkb3duICA9IHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cztcclxufVxyXG5cclxuZnVuY3Rpb24gZW5hYmxlU2Nyb2xsKCkge1xyXG4gICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKVxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHByZXZlbnREZWZhdWx0LCBmYWxzZSk7XHJcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gbnVsbDtcclxuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDtcclxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XHJcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xyXG59XHJcblxyXG4vL2Rpc2FibGVTY3JvbGwoKTtcclxuXHJcblxyXG5maXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCAodXNlcikgPT4ge1xyXG5cclxuICAgLy8gdXBkYXRlIGN1cnJlbnRVc2VyIGxvZ2luIG9yIG5vdFxyXG4gICBNb2J4U3RvcmUuYXBwLnVzZXIgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgIC8vIE1vYnhTdG9yZS5hcHAudXNlciA9IHRydWU7XHJcblxyXG4gIGlmICggdXNlcikgIHtcclxuICAgICBjb25zb2xlLmxvZyggJ3VzZXIgc2lnbmVkJylcclxuICAgICAvLyBSZWRpcmVjdCB0byBtZW1iZXIgcGFnZSFcclxuICAgICBNb2J4XHJcbiAgICAgTW9ieFN0b3JlLnJvdXRlci5nb1RvKCB2aWV3cy5saXN0ICwge30sIE1vYnhTdG9yZSApXHJcbiAgfSBlbHNlIHtcclxuICAgICAgIGNvbnNvbGUubG9nKCAndXNlciBkb25vdCBzaWduJylcclxuICAgICAgIE1vYnhTdG9yZS5yb3V0ZXIuZ29Ubyggdmlld3MuaG9tZSAsIHt9LCBNb2J4U3RvcmUgKVxyXG4gIH1cclxufSlcclxuXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFByb3ZpZGVyIHN0b3JlPXtNb2J4U3RvcmV9PlxyXG4gICAgPGRpdj5cclxuICAgICAgICAgPE1vYnhSb3V0ZXIvPlxyXG4gICAgICAgICA8Q2hhdEJvdCBzdGVwcz17Rm9ybVNhbGVDaGF0Ym90fSAvPjtcclxuICAgIDwvZGl2PlxyXG4gIDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbilcclxuLy88TmF2aWdhdGlvbkJhci8+XHJcblxyXG5cclxuXHJcbi8vPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBNb2J4U3RvcmUucm91dGVyLmdvVG8odmlld3Muc2Vjb25kKX0+R28gRmlyc3Q8L2J1dHRvbj5cclxuLy9Nb2J4U3RvcmUuYXBwLnRpdGxlXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBaEJBO0FBZUE7QUFDQTtBQVhBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
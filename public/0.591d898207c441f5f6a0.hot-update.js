webpackHotUpdate(0,{

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(113);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _mobxRouter = __webpack_require__(260);\n\nvar _mobxReact = __webpack_require__(293);\n\nvar _mobxStore = __webpack_require__(295);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _firebase = __webpack_require__(297);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nvar _navigationBar = __webpack_require__(353);\n\nvar _navigationBar2 = _interopRequireDefault(_navigationBar);\n\nvar _views = __webpack_require__(527);\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _reactFastclick = __webpack_require__(1015);\n\nvar _reactFastclick2 = _interopRequireDefault(_reactFastclick);\n\nvar _firebaseStore = __webpack_require__(789);\n\nvar _mobxReactDevtools = __webpack_require__(1016);\n\nvar _mobxReactDevtools2 = _interopRequireDefault(_mobxReactDevtools);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//router\n\n//import {FrontPageTabBar} from 'frontPageTabBar';\n//import DevTools from 'mobx-react-devtools';\n//mobx\n(0, _mobxReactDevtools.setLogEnabled)(false); // same as configureDevtool({ logEnabled: true });\n\n// import ChatBot from 'react-simple-chatbot';\n// import {FormSaleChatbot} from 'chatbot/formSaleChatbot'\n\n(0, _mobxReactDevtools.setUpdatesEnabled)(false); // same as configureDevtool({ updatesEnabled: false });\n(0, _mobxReactDevtools.setGraphEnabled)(true); // same as configureDevtool({ graphEnabled: false });\n\n(0, _mobxRouter.startRouter)(_views2.default, _mobxStore2.default);\n\n// For Touch display\n(0, _reactFastclick2.default)();\n\n// function preventDefault(e) {\n//   e = e || window.event;\n//   if (e.preventDefault)\n//       e.preventDefault();\n//   e.returnValue = false;\n// }\n//\n// function preventDefaultForScrollKeys(e) {\n//     if (keys[e.keyCode]) {\n//         preventDefault(e);\n//         return false;\n//     }\n// }\n//\n// function disableScroll() {\n//   if (window.addEventListener) // older FF\n//       window.addEventListener('DOMMouseScroll', preventDefault, false);\n//   window.onwheel = preventDefault; // modern standard\n//   window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE\n//   window.ontouchmove  = preventDefault; // mobile\n//   document.onkeydown  = preventDefaultForScrollKeys;\n// }\n//\n// function enableScroll() {\n//     if (window.removeEventListener)\n//         window.removeEventListener('DOMMouseScroll', preventDefault, false);\n//     window.onmousewheel = document.onmousewheel = null;\n//     window.onwheel = null;\n//     window.ontouchmove = null;\n//     document.onkeydown = null;\n// }\n//\n// function preventZoom(e) {\n//   var t2 = e.timeStamp;\n//   var t1 = e.currentTarget.dataset.lastTouch || t2;\n//   var dt = t2 - t1;\n//   var fingers = e.touches.length;\n//   e.currentTarget.dataset.lastTouch = t2;\n//\n//   if (!dt || dt > 500 || fingers > 1) return; // not double-tap\n//\n//   e.preventDefault();\n//   e.target.click();\n// }\n//\n// //preventZoom();\n// //disableScroll();\n\n\n_firebase2.default.auth().onAuthStateChanged(function (user) {\n\n  // update currentUser login or not\n  _mobxStore2.default.app.user = _firebase2.default.auth().currentUser;\n  // MobxStore.app.user = true;\n  // User is signed in.\n\n  if (user) {\n    //var isAnonymous = user.isAnonymous;\n    //var uid = user.uid;\n\n    console.log('user signed', user);\n    // Redirect to member page!\n    //MobxStore.app.startLogin();\n    //Fb.startLogin();\n    _mobxStore2.default.app.uid = user.uid;\n    _mobxStore2.default.app.displayName = user.displayName;\n    _mobxStore2.default.app.email = user.email;\n    _mobxStore2.default.app.providerId = user.providerData[0].providerId;\n    //MobxStore.app.setTitle( user.displayName )\n\n    console.log('displayName', user.displayName);\n\n    // Think over before remove this like, may cause matchedPropertys = null\n    _firebaseStore.Fb.app.updateUid();\n    _mobxStore2.default.router.goTo(_views2.default.list, {}, _mobxStore2.default);\n  } else {\n    console.log('user donot sign');\n    //MobxStore.app.startLogout();\n    _firebaseStore.Fb.startLogout();\n\n    _mobxStore2.default.app.uid = null;\n    _mobxStore2.default.router.goTo(_views2.default.home, {}, _mobxStore2.default);\n  }\n});\n\n//<MobxRouter/>\n\n_reactDom2.default.render(_react2.default.createElement(\n  _mobxReact.Provider,\n  { store: _mobxStore2.default },\n  _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_navigationBar2.default, null),\n    _react2.default.createElement(_mobxRouter.MobxRouter, null)\n  )\n), document.getElementById('root'));\n\n//<button onClick={() => MobxStore.router.goTo(views.second)}>Go First</button>\n//MobxStore.app.title//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzPzFmZGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7TW9ieFJvdXRlciwgc3RhcnRSb3V0ZXJ9IGZyb20gJ21vYngtcm91dGVyJztcclxuLy9pbXBvcnQge0Zyb250UGFnZVRhYkJhcn0gZnJvbSAnZnJvbnRQYWdlVGFiQmFyJztcclxuLy9pbXBvcnQgRGV2VG9vbHMgZnJvbSAnbW9ieC1yZWFjdC1kZXZ0b29scyc7XHJcbi8vbW9ieFxyXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IE1vYnhTdG9yZSBmcm9tICdtb2J4U3RvcmUnO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnXHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJ25hdmlnYXRpb25CYXInXHJcblxyXG4vL3JvdXRlclxyXG5pbXBvcnQgdmlld3MgZnJvbSAndmlld3MnO1xyXG5cclxuaW1wb3J0IGluaXRSZWFjdEZhc3RjbGljayBmcm9tICdyZWFjdC1mYXN0Y2xpY2snO1xyXG5pbXBvcnQge0ZifSBmcm9tICdmaXJlYmFzZS1zdG9yZSdcclxuLy8gaW1wb3J0IENoYXRCb3QgZnJvbSAncmVhY3Qtc2ltcGxlLWNoYXRib3QnO1xyXG4vLyBpbXBvcnQge0Zvcm1TYWxlQ2hhdGJvdH0gZnJvbSAnY2hhdGJvdC9mb3JtU2FsZUNoYXRib3QnXHJcblxyXG5pbXBvcnQgRGV2VG9vbHMsIHsgc2V0TG9nRW5hYmxlZCwgc2V0VXBkYXRlc0VuYWJsZWQsIHNldEdyYXBoRW5hYmxlZCB9IGZyb20gJ21vYngtcmVhY3QtZGV2dG9vbHMnO1xyXG5cclxuc2V0TG9nRW5hYmxlZChmYWxzZSk7IC8vIHNhbWUgYXMgY29uZmlndXJlRGV2dG9vbCh7IGxvZ0VuYWJsZWQ6IHRydWUgfSk7XHJcbnNldFVwZGF0ZXNFbmFibGVkKGZhbHNlKTsgLy8gc2FtZSBhcyBjb25maWd1cmVEZXZ0b29sKHsgdXBkYXRlc0VuYWJsZWQ6IGZhbHNlIH0pO1xyXG5zZXRHcmFwaEVuYWJsZWQodHJ1ZSk7IC8vIHNhbWUgYXMgY29uZmlndXJlRGV2dG9vbCh7IGdyYXBoRW5hYmxlZDogZmFsc2UgfSk7XHJcblxyXG5zdGFydFJvdXRlcih2aWV3cywgTW9ieFN0b3JlKTtcclxuXHJcbi8vIEZvciBUb3VjaCBkaXNwbGF5XHJcbmluaXRSZWFjdEZhc3RjbGljaygpO1xyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChlKSB7XHJcbi8vICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4vLyAgIGlmIChlLnByZXZlbnREZWZhdWx0KVxyXG4vLyAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XHJcbi8vICAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XHJcbi8vICAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XHJcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XHJcbi8vICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxyXG4vLyAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xyXG4vLyAgIHdpbmRvdy5vbndoZWVsID0gcHJldmVudERlZmF1bHQ7IC8vIG1vZGVybiBzdGFuZGFyZFxyXG4vLyAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBwcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXHJcbi8vICAgd2luZG93Lm9udG91Y2htb3ZlICA9IHByZXZlbnREZWZhdWx0OyAvLyBtb2JpbGVcclxuLy8gICBkb2N1bWVudC5vbmtleWRvd24gID0gcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcclxuLy8gICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcilcclxuLy8gICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBwcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xyXG4vLyAgICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG51bGw7XHJcbi8vICAgICB3aW5kb3cub253aGVlbCA9IG51bGw7XHJcbi8vICAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xyXG4vLyAgICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuLy8gfVxyXG4vL1xyXG4vLyBmdW5jdGlvbiBwcmV2ZW50Wm9vbShlKSB7XHJcbi8vICAgdmFyIHQyID0gZS50aW1lU3RhbXA7XHJcbi8vICAgdmFyIHQxID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGFzdFRvdWNoIHx8IHQyO1xyXG4vLyAgIHZhciBkdCA9IHQyIC0gdDE7XHJcbi8vICAgdmFyIGZpbmdlcnMgPSBlLnRvdWNoZXMubGVuZ3RoO1xyXG4vLyAgIGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lmxhc3RUb3VjaCA9IHQyO1xyXG4vL1xyXG4vLyAgIGlmICghZHQgfHwgZHQgPiA1MDAgfHwgZmluZ2VycyA+IDEpIHJldHVybjsgLy8gbm90IGRvdWJsZS10YXBcclxuLy9cclxuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgZS50YXJnZXQuY2xpY2soKTtcclxuLy8gfVxyXG4vL1xyXG4vLyAvL3ByZXZlbnRab29tKCk7XHJcbi8vIC8vZGlzYWJsZVNjcm9sbCgpO1xyXG5cclxuXHJcbmZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoICh1c2VyKSA9PiB7XHJcblxyXG4gICAvLyB1cGRhdGUgY3VycmVudFVzZXIgbG9naW4gb3Igbm90XHJcbiAgIE1vYnhTdG9yZS5hcHAudXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcclxuICAgLy8gTW9ieFN0b3JlLmFwcC51c2VyID0gdHJ1ZTtcclxuICAgLy8gVXNlciBpcyBzaWduZWQgaW4uXHJcblxyXG4gIGlmICggdXNlcikgIHtcclxuICAgIC8vdmFyIGlzQW5vbnltb3VzID0gdXNlci5pc0Fub255bW91cztcclxuICAgIC8vdmFyIHVpZCA9IHVzZXIudWlkO1xyXG5cclxuICAgICBjb25zb2xlLmxvZyggJ3VzZXIgc2lnbmVkJywgdXNlcilcclxuICAgICAvLyBSZWRpcmVjdCB0byBtZW1iZXIgcGFnZSFcclxuICAgICAvL01vYnhTdG9yZS5hcHAuc3RhcnRMb2dpbigpO1xyXG4gICAgIC8vRmIuc3RhcnRMb2dpbigpO1xyXG4gICAgIE1vYnhTdG9yZS5hcHAudWlkID0gdXNlci51aWQ7XHJcbiAgICAgTW9ieFN0b3JlLmFwcC5kaXNwbGF5TmFtZSA9IHVzZXIuZGlzcGxheU5hbWU7XHJcbiAgICAgTW9ieFN0b3JlLmFwcC5lbWFpbCA9IHVzZXIuZW1haWw7XHJcbiAgICAgTW9ieFN0b3JlLmFwcC5wcm92aWRlcklkID0gdXNlci5wcm92aWRlckRhdGFbMF0ucHJvdmlkZXJJZDtcclxuICAgICAvL01vYnhTdG9yZS5hcHAuc2V0VGl0bGUoIHVzZXIuZGlzcGxheU5hbWUgKVxyXG5cclxuICAgICBjb25zb2xlLmxvZyggJ2Rpc3BsYXlOYW1lJywgdXNlci5kaXNwbGF5TmFtZSlcclxuXHJcbiAgICAgLy8gVGhpbmsgb3ZlciBiZWZvcmUgcmVtb3ZlIHRoaXMgbGlrZSwgbWF5IGNhdXNlIG1hdGNoZWRQcm9wZXJ0eXMgPSBudWxsXHJcbiAgICAgRmIuYXBwLnVwZGF0ZVVpZCgpO1xyXG4gICAgIE1vYnhTdG9yZS5yb3V0ZXIuZ29Ubyggdmlld3MubGlzdCAsIHt9LCBNb2J4U3RvcmUgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyggJ3VzZXIgZG9ub3Qgc2lnbicpXHJcbiAgICAgICAvL01vYnhTdG9yZS5hcHAuc3RhcnRMb2dvdXQoKTtcclxuICAgICAgIEZiLnN0YXJ0TG9nb3V0KCk7XHJcblxyXG4gICAgICAgTW9ieFN0b3JlLmFwcC51aWQgPSBudWxsO1xyXG4gICAgICAgTW9ieFN0b3JlLnJvdXRlci5nb1RvKCB2aWV3cy5ob21lICwge30sIE1vYnhTdG9yZSApXHJcblxyXG4gIH1cclxufSlcclxuXHJcbi8vPE1vYnhSb3V0ZXIvPlxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxQcm92aWRlciBzdG9yZT17TW9ieFN0b3JlfT5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uQmFyLz5cclxuICAgICAgPE1vYnhSb3V0ZXIvPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbilcclxuXHJcblxyXG5cclxuLy88YnV0dG9uIG9uQ2xpY2s9eygpID0+IE1vYnhTdG9yZS5yb3V0ZXIuZ29Ubyh2aWV3cy5zZWNvbmQpfT5HbyBGaXJzdDwvYnV0dG9uPlxyXG4vL01vYnhTdG9yZS5hcHAudGl0bGVcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7OztBQVRBO0FBQ0E7QUFUQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBVUE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
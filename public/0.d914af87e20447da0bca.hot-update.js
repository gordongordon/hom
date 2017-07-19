webpackHotUpdate(0,{

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\nexports.default = undefined;\n\nvar _css = __webpack_require__(501);\n\nvar _navBar = __webpack_require__(504);\n\nvar _navBar2 = _interopRequireDefault(_navBar);\n\nvar _css2 = __webpack_require__(294);\n\nvar _icon = __webpack_require__(299);\n\nvar _icon2 = _interopRequireDefault(_icon);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class;\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mobxReact = __webpack_require__(439);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _views = __webpack_require__(505);\n\nvar _views2 = _interopRequireDefault(_views);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NavigationBar = (0, _mobxReact.observer)(_class = function (_React$Component) {\n   _inherits(NavigationBar, _React$Component);\n\n   function NavigationBar(props) {\n      _classCallCheck(this, NavigationBar);\n\n      var _this = _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this, props));\n\n      _this.onLogin = function (e) {\n         e.preventDefault();\n         console.log('onLogin ... ');\n         _mobxStore2.default.app.startLogin();\n      };\n\n      _this.onLogout = function (e) {\n         e.preventDefault();\n         console.log('onLogin ... ');\n         _mobxStore2.default.app.startLogout();\n      };\n\n      _this.state = {\n         isLeftIcon: false\n      };\n      return _this;\n   }\n\n   _createClass(NavigationBar, [{\n      key: 'render',\n      value: function render() {\n         var title = this.props.title;\n         var leftContentLabel = \"上一頁\";\n         //    var flag = false;\n         //\n         //    if ( MobxStore.app.previousView !== undefined )\n         //    {\n         // //      this.setState( { isLeftIcon : true })\n         //        flag = true;\n         //    }\n         if (title === \"好 .. Matching\") {\n            leftContentLabel = \"\";\n         } else {\n            leftContentLabel = \"上一頁\";\n         }\n\n         return _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n               _navBar2.default,\n               { leftContent: '\\u4E0A\\u4E00\\u9801',\n\n                  mode: 'light',\n                  onLeftClick: this.onLogout,\n                  rightContent: [_react2.default.createElement(_icon2.default, { key: '0', type: 'search', style: { marginRight: '0.32rem' }, onClick: this.onLogin })]\n               },\n               _mobxStore2.default.app.title\n            )\n         );\n      }\n   }]);\n\n   return NavigationBar;\n}(_react2.default.Component)) || _class;\n\n//onLeftClick={ () => MobxStore.router.goTo( MobxStore.app.previousView, MobxStore.app.params, MobxStore ) }\n\n// onLeftClick={ () => MobxStore.router.goTo( views.first ) }\n\n\nexports.default = NavigationBar;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb25CYXIuanM/ZTUzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7b2JzZXJ2ZXJ9IGZyb20gJ21vYngtcmVhY3QnXHJcbmltcG9ydCB7IE5hdkJhciwgSWNvbiwgQnV0dG9ufSBmcm9tICdhbnRkLW1vYmlsZSc7XHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJ1xyXG5pbXBvcnQgdmlld3MgZnJvbSAndmlld3MnXHJcblxyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcclxuICAgICBzdXBlciggcHJvcHMgKVxyXG4gICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICBpc0xlZnRJY29uIDogZmFsc2VcclxuICAgICB9XHJcbiAgIH1cclxuXHJcblxyXG4gICBvbkxvZ2luID0gKCBlICkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCAnb25Mb2dpbiAuLi4gJylcclxuICAgICAgTW9ieFN0b3JlLmFwcC5zdGFydExvZ2luKCk7XHJcbiAgIH1cclxuXHJcblxyXG4gICBvbkxvZ291dCA9ICggZSApID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyggJ29uTG9naW4gLi4uICcpXHJcbiAgICAgIE1vYnhTdG9yZS5hcHAuc3RhcnRMb2dvdXQoKTtcclxuICAgfVxyXG5cclxucmVuZGVyKCkge1xyXG4gICB2YXIgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlO1xyXG4gICB2YXIgbGVmdENvbnRlbnRMYWJlbCA9IFwi5LiK5LiA6aCBXCI7XHJcbi8vICAgIHZhciBmbGFnID0gZmFsc2U7XHJcbi8vXHJcbi8vICAgIGlmICggTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgIT09IHVuZGVmaW5lZCApXHJcbi8vICAgIHtcclxuLy8gLy8gICAgICB0aGlzLnNldFN0YXRlKCB7IGlzTGVmdEljb24gOiB0cnVlIH0pXHJcbi8vICAgICAgICBmbGFnID0gdHJ1ZTtcclxuLy8gICAgfVxyXG4gICBpZiAoIHRpdGxlID09PSBcIuWlvSAuLiBNYXRjaGluZ1wiKVxyXG4gICB7XHJcbiAgICAgICBsZWZ0Q29udGVudExhYmVsID0gXCJcIlxyXG4gICB9IGVsc2Uge1xyXG4gICAgIGxlZnRDb250ZW50TGFiZWwgPSBcIuS4iuS4gOmggVwiXHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPGRpdj5cclxuICAgICAgIDxOYXZCYXIgbGVmdENvbnRlbnQ9XCLkuIrkuIDpoIFcIlxyXG5cclxuICAgICAgICAgbW9kZT1cImxpZ2h0XCJcclxuICAgICAgICAgb25MZWZ0Q2xpY2s9eyB0aGlzLm9uTG9nb3V0IH1cclxuICAgICAgICAgcmlnaHRDb250ZW50PXtbXHJcbiAgICAgICAgICAgPEljb24ga2V5PVwiMFwiIHR5cGU9XCJzZWFyY2hcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuMzJyZW0nIH19IG9uQ2xpY2s9eyAgdGhpcy5vbkxvZ2luIH0vPlxyXG5cclxuICAgICAgICAgXX1cclxuICAgICAgID57TW9ieFN0b3JlLmFwcC50aXRsZX08L05hdkJhcj5cclxuICAgICA8L2Rpdj5cclxuICAgKVxyXG5cclxuICB9XHJcbn1cclxuXHJcbi8vb25MZWZ0Q2xpY2s9eyAoKSA9PiBNb2J4U3RvcmUucm91dGVyLmdvVG8oIE1vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3LCBNb2J4U3RvcmUuYXBwLnBhcmFtcywgTW9ieFN0b3JlICkgfVxyXG5cclxuLy8gb25MZWZ0Q2xpY2s9eyAoKSA9PiBNb2J4U3RvcmUucm91dGVyLmdvVG8oIHZpZXdzLmZpcnN0ICkgfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbkJhci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQVJBO0FBREE7QUFhQTs7OztBQXREQTtBQUNBO0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3REEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
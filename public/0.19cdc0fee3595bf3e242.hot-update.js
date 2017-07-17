webpackHotUpdate(0,{

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _css = __webpack_require__(501);\n\nvar _navBar = __webpack_require__(504);\n\nvar _navBar2 = _interopRequireDefault(_navBar);\n\nvar _css2 = __webpack_require__(294);\n\nvar _icon = __webpack_require__(299);\n\nvar _icon2 = _interopRequireDefault(_icon);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class;\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mobxReact = __webpack_require__(439);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _views = __webpack_require__(505);\n\nvar _views2 = _interopRequireDefault(_views);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NavigationBar = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(NavigationBar, _React$Component);\n\n  function NavigationBar(props) {\n    _classCallCheck(this, NavigationBar);\n\n    var _this = _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this, props));\n\n    _this.onLogin = function (e) {\n\n      console.log('onLogin ... ');\n      _mobxStore2.default.app.startLogin();\n    };\n\n    _this.state = {\n      isLeftIcon: false\n    };\n    return _this;\n  }\n\n  _createClass(NavigationBar, [{\n    key: 'render',\n    value: function render() {\n      var title = this.props.title;\n      var leftContentLabel = \"上一頁\";\n      //    var flag = false;\n      //\n      //    if ( MobxStore.app.previousView !== undefined )\n      //    {\n      // //      this.setState( { isLeftIcon : true })\n      //        flag = true;\n      //    }\n      if (title === \"好 .. Matching\") {\n        leftContentLabel = \"\";\n      } else {\n        leftContentLabel = \"上一頁\";\n      }\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _navBar2.default,\n          { leftContent: '\\u4E0A\\u4E00\\u9801',\n\n            mode: 'light',\n            onLeftClick: function onLeftClick() {\n              return _mobxStore2.default.router.goTo(_mobxStore2.default.app.previousView, _mobxStore2.default.app.params);\n            },\n            rightContent: [_react2.default.createElement(_icon2.default, { key: '0', type: 'search', style: { marginRight: '0.32rem' }, onClick: this.onLogin })]\n          },\n          _mobxStore2.default.app.title\n        )\n      );\n    }\n  }]);\n\n  return NavigationBar;\n}(_react2.default.Component)) || _class;\n\n// onLeftClick={ () => MobxStore.router.goTo( views.first ) }\n\n\nexports.default = NavigationBar;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb25CYXIuanM/ZTUzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7b2JzZXJ2ZXJ9IGZyb20gJ21vYngtcmVhY3QnXHJcbmltcG9ydCB7IE5hdkJhciwgSWNvbiwgQnV0dG9ufSBmcm9tICdhbnRkLW1vYmlsZSc7XHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJ1xyXG5pbXBvcnQgdmlld3MgZnJvbSAndmlld3MnXHJcblxyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcclxuICAgICBzdXBlciggcHJvcHMgKVxyXG4gICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICBpc0xlZnRJY29uIDogZmFsc2VcclxuICAgICB9XHJcbiAgIH1cclxuXHJcblxyXG4gICBvbkxvZ2luID0gKCBlICkgPT4ge1xyXG5cclxuICAgICAgY29uc29sZS5sb2coICdvbkxvZ2luIC4uLiAnKVxyXG4gICAgICBNb2J4U3RvcmUuYXBwLnN0YXJ0TG9naW4oKTtcclxuICAgfVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuICAgdmFyIHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZTtcclxuICAgdmFyIGxlZnRDb250ZW50TGFiZWwgPSBcIuS4iuS4gOmggVwiO1xyXG4vLyAgICB2YXIgZmxhZyA9IGZhbHNlO1xyXG4vL1xyXG4vLyAgICBpZiAoIE1vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ICE9PSB1bmRlZmluZWQgKVxyXG4vLyAgICB7XHJcbi8vIC8vICAgICAgdGhpcy5zZXRTdGF0ZSggeyBpc0xlZnRJY29uIDogdHJ1ZSB9KVxyXG4vLyAgICAgICAgZmxhZyA9IHRydWU7XHJcbi8vICAgIH1cclxuICAgaWYgKCB0aXRsZSA9PT0gXCLlpb0gLi4gTWF0Y2hpbmdcIilcclxuICAge1xyXG4gICAgICAgbGVmdENvbnRlbnRMYWJlbCA9IFwiXCJcclxuICAgfSBlbHNlIHtcclxuICAgICBsZWZ0Q29udGVudExhYmVsID0gXCLkuIrkuIDpoIFcIlxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgIDxkaXY+XHJcbiAgICAgICA8TmF2QmFyIGxlZnRDb250ZW50PVwi5LiK5LiA6aCBXCJcclxuXHJcbiAgICAgICAgIG1vZGU9XCJsaWdodFwiXHJcbiAgICAgICAgIG9uTGVmdENsaWNrPXsgKCkgPT4gTW9ieFN0b3JlLnJvdXRlci5nb1RvKCBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldywgTW9ieFN0b3JlLmFwcC5wYXJhbXMgKSB9XHJcbiAgICAgICAgIHJpZ2h0Q29udGVudD17W1xyXG4gICAgICAgICAgIDxJY29uIGtleT1cIjBcIiB0eXBlPVwic2VhcmNoXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcwLjMycmVtJyB9fSBvbkNsaWNrPXsgIHRoaXMub25Mb2dpbiB9Lz5cclxuXHJcbiAgICAgICAgIF19XHJcbiAgICAgICA+e01vYnhTdG9yZS5hcHAudGl0bGV9PC9OYXZCYXI+XHJcbiAgICAgPC9kaXY+XHJcbiAgIClcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLyBvbkxlZnRDbGljaz17ICgpID0+IE1vYnhTdG9yZS5yb3V0ZXIuZ29Ubyggdmlld3MuZmlyc3QgKSB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uQmFyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBUUE7QUFSQTtBQURBO0FBYUE7Ozs7QUFoREE7QUFDQTtBQWtEQTtBQUNBO0FBQ0E7QUFyREEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
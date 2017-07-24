webpackHotUpdate(0,{

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _css = __webpack_require__(500);\n\nvar _navBar = __webpack_require__(503);\n\nvar _navBar2 = _interopRequireDefault(_navBar);\n\nvar _css2 = __webpack_require__(504);\n\nvar _popover = __webpack_require__(507);\n\nvar _popover2 = _interopRequireDefault(_popover);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class;\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mobxReact = __webpack_require__(439);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _views = __webpack_require__(547);\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _firebaseStore = __webpack_require__(808);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Item = _popover2.default.Item;\n\nvar NavigationBar = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(NavigationBar, _React$Component);\n\n  function NavigationBar(props) {\n    _classCallCheck(this, NavigationBar);\n\n    var _this = _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this, props));\n\n    _this.onSelect = function (opt) {\n      console.log(opt.props.value);\n\n      if (opt.props.value === 'google') {\n        _firebaseStore.Fb.startLoginGoogle();\n        _this.setState({\n          loginName: 'google'\n        });\n      }\n      if (opt.props.value === 'github') {\n        _firebaseStore.Fb.startLogin();\n        _this.setState({\n          loginName: 'github'\n        });\n      }\n      if (opt.props.value === 'facebook') {\n        _firebaseStore.Fb.startLoginFacebook();\n        _this.setState({\n          loginName: 'fb'\n        });\n      }\n      if (opt.props.value === 'Anonymous') {\n        _firebaseStore.Fb.startLoginAnonyhmously();\n        _this.setState({\n          loginName: 'Guest'\n        });\n      }\n\n      _this.setState({\n        visible: false,\n        selected: opt.props.value\n      });\n    };\n\n    _this.handleVisibleChange = function (visible) {\n      _this.setState({\n        visible: visible\n      });\n    };\n\n    _this.onLogin = function (e) {\n      e.preventDefault();\n      console.log('onLogin ... ');\n      _firebaseStore.Fb.startLogin();\n    };\n\n    _this.onLogout = function (e) {\n      e.preventDefault();\n      console.log('onLogin ... ');\n      _firebaseStore.Fb.startLogout();\n    };\n\n    _this.loginItem = function () {\n\n      var isLogin = _mobxStore2.default.app.user;\n      var offsetX = -10; // just for pc demo\n      if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {\n        offsetX = -26;\n      }\n\n      if (isLogin) {\n        return _react2.default.createElement(\n          'span',\n          { key: '2', onClick: _this.onLogout },\n          'logout'\n        );\n      } else {\n        // For different user login\n        return _react2.default.createElement(\n          _popover2.default,\n          { mask: true,\n            overlayClassName: 'fortest',\n            overlayStyle: { color: 'currentColor' },\n            visible: _this.state.visible,\n            overlay: [_react2.default.createElement(\n              Item,\n              { key: '3', value: 'google', 'data-seed': 'logId' },\n              'google'\n            ), _react2.default.createElement(\n              Item,\n              { key: '4', value: 'github', 'data-seed': 'logId' },\n              'Github'\n            ), _react2.default.createElement(\n              Item,\n              { key: '5', value: 'facebook', style: { whiteSpace: 'nowrap' } },\n              'Facebook'\n            ), _react2.default.createElement(\n              Item,\n              { key: '6', value: 'Anonymous' },\n              _react2.default.createElement(\n                'span',\n                { style: { marginRight: 5 } },\n                'Anonymous'\n              )\n            )],\n            align: {\n              overflow: { adjustY: 0, adjustX: 0 },\n              offset: [offsetX, 15]\n            },\n            onVisibleChange: _this.handleVisibleChange,\n            onSelect: _this.onSelect\n          },\n          _react2.default.createElement(\n            'div',\n            { style: {\n                height: '100%',\n                padding: '0 0.3rem',\n                marginRight: '-0.3rem',\n                display: 'flex',\n                alignItems: 'center'\n              }\n            },\n            _react2.default.createElement(\n              'span',\n              null,\n              'login'\n            )\n          )\n        );\n      }\n    };\n\n    _this.state = {\n      loginName: 'none',\n      isLeftIcon: false,\n      visible: false,\n      selected: ''\n    };\n    return _this;\n  }\n\n  _createClass(NavigationBar, [{\n    key: 'render',\n    value: function render() {\n      var title = this.props.title;\n\n      var leftContentLabel = \"上一頁\";\n      //  let offsetX = -10; // just for pc demo\n      //  if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {\n      //    offsetX = -26;\n      //  }\n      //   const that = this;\n\n      if (title === \"好 .. Matching\") {\n        leftContentLabel = \"\";\n      } else {\n        leftContentLabel = \"上一頁\";\n      }\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _navBar2.default,\n          { iconName: 'false',\n            mode: 'light',\n            rightContent: [_react2.default.createElement(\n              'div',\n              { key: '1' },\n              this.loginItem()\n            )]\n          },\n          this.state.loginName,\n          _mobxStore2.default.app.title\n        )\n      );\n    }\n  }]);\n\n  return NavigationBar;\n}(_react2.default.Component)) || _class;\n\n//<Icon key=\"0\" type=\"plus\" style={{ marginRight: '0.32rem' }} onClick={  this.onLogin }/>,\n//onLeftClick={ () => MobxStore.router.goTo( MobxStore.app.previousView, MobxStore.app.params, MobxStore ) }\n\n// onLeftClick={ () => MobxStore.router.goTo( views.first ) }\n\n\nexports.default = NavigationBar;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb25CYXIuanM/ZTUzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7b2JzZXJ2ZXJ9IGZyb20gJ21vYngtcmVhY3QnXHJcbmltcG9ydCB7ICBQb3BvdmVyLCBOYXZCYXIsIEljb24sIEJ1dHRvbn0gZnJvbSAnYW50ZC1tb2JpbGUnO1xyXG5pbXBvcnQgTW9ieFN0b3JlIGZyb20gJ21vYnhTdG9yZSdcclxuaW1wb3J0IHZpZXdzIGZyb20gJ3ZpZXdzJ1xyXG5pbXBvcnQge0ZifSBmcm9tICdmaXJlYmFzZS1zdG9yZSdcclxuXHJcbmNvbnN0IEl0ZW0gPSBQb3BvdmVyLkl0ZW07XHJcblxyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcclxuICAgICBzdXBlciggcHJvcHMgKVxyXG4gICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICBsb2dpbk5hbWUgOiAnbm9uZScsXHJcbiAgICAgICBpc0xlZnRJY29uIDogZmFsc2UsXHJcbiAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgIHNlbGVjdGVkOiAnJ1xyXG4gICAgIH1cclxuICAgfVxyXG5cclxuICAgb25TZWxlY3QgPSAob3B0KSA9PiB7XHJcbiAgICAgY29uc29sZS5sb2cob3B0LnByb3BzLnZhbHVlKTtcclxuXHJcbiAgICAgaWYgKCBvcHQucHJvcHMudmFsdWUgPT09ICdnb29nbGUnKSB7XHJcbiAgICAgICBGYi5zdGFydExvZ2luR29vZ2xlKCk7XHJcbiAgICAgICB0aGlzLnNldFN0YXRlKCB7XHJcbiAgICAgICAgIGxvZ2luTmFtZSAgOiAnZ29vZ2xlJ1xyXG4gICAgICAgfSlcclxuICAgICB9XHJcbiAgICAgaWYgKCBvcHQucHJvcHMudmFsdWUgPT09ICdnaXRodWInKSB7XHJcbiAgICAgICBGYi5zdGFydExvZ2luKCk7XHJcbiAgICAgICB0aGlzLnNldFN0YXRlKCB7XHJcbiAgICAgICAgIGxvZ2luTmFtZSAgOiAnZ2l0aHViJ1xyXG4gICAgICAgfSlcclxuICAgICB9XHJcbiAgICAgaWYgKCBvcHQucHJvcHMudmFsdWUgPT09ICdmYWNlYm9vaycpIHtcclxuICAgICAgIEZiLnN0YXJ0TG9naW5GYWNlYm9vaygpO1xyXG4gICAgICAgdGhpcy5zZXRTdGF0ZSgge1xyXG4gICAgICAgICBsb2dpbk5hbWUgIDogJ2ZiJ1xyXG4gICAgICAgfSlcclxuICAgICB9XHJcbiAgICAgaWYgKCBvcHQucHJvcHMudmFsdWUgPT09ICdBbm9ueW1vdXMnKSB7XHJcbiAgICAgICBGYi5zdGFydExvZ2luQW5vbnlobW91c2x5KClcclxuICAgICAgIHRoaXMuc2V0U3RhdGUoIHtcclxuICAgICAgICAgbG9naW5OYW1lICA6ICdHdWVzdCdcclxuICAgICAgIH0pXHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgIHNlbGVjdGVkOiBvcHQucHJvcHMudmFsdWUsXHJcbiAgICAgfSk7XHJcbiAgIH07XHJcbiAgIGhhbmRsZVZpc2libGVDaGFuZ2UgPSAodmlzaWJsZSkgPT4ge1xyXG4gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgdmlzaWJsZSxcclxuICAgICB9KTtcclxuICAgfTtcclxuXHJcblxyXG4gICBvbkxvZ2luID0gKCBlICkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCAnb25Mb2dpbiAuLi4gJylcclxuICAgICAgRmIuc3RhcnRMb2dpbigpO1xyXG4gICB9XHJcblxyXG5cclxuICAgb25Mb2dvdXQgPSAoIGUgKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc29sZS5sb2coICdvbkxvZ2luIC4uLiAnKVxyXG4gICAgICBGYi5zdGFydExvZ291dCgpO1xyXG4gICB9XHJcblxyXG4gICBsb2dpbkl0ZW0gID0gKCkgPT4ge1xyXG5cclxuICAgICBjb25zdCBpc0xvZ2luID0gTW9ieFN0b3JlLmFwcC51c2VyO1xyXG4gICAgIGxldCBvZmZzZXRYID0gLTEwOyAvLyBqdXN0IGZvciBwYyBkZW1vXHJcbiAgICAgaWYgKC8oaVBob25lfGlQYWR8aVBvZHxpT1N8QW5kcm9pZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcbiAgICAgICBvZmZzZXRYID0gLTI2O1xyXG4gICAgIH1cclxuXHJcbiAgICAgaWYgKCBpc0xvZ2luICkge1xyXG4gICAgICAgcmV0dXJuIDxzcGFuIGtleT1cIjJcIiBvbkNsaWNrPXsgdGhpcy5vbkxvZ291dCB9PmxvZ291dDwvc3Bhbj47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgLy8gRm9yIGRpZmZlcmVudCB1c2VyIGxvZ2luXHJcbiAgICAgICByZXR1cm4gIDxQb3BvdmVyIG1hc2tcclxuICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJmb3J0ZXN0XCJcclxuICAgICAgICAgIG92ZXJsYXlTdHlsZT17eyBjb2xvcjogJ2N1cnJlbnRDb2xvcicgfX1cclxuICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX1cclxuICAgICAgICAgIG92ZXJsYXk9e1tcclxuICAgICAgICAgICAgKDxJdGVtIGtleT1cIjNcIiB2YWx1ZT1cImdvb2dsZVwiIGRhdGEtc2VlZD1cImxvZ0lkXCI+Z29vZ2xlPC9JdGVtPiksXHJcbiAgICAgICAgICAgICg8SXRlbSBrZXk9XCI0XCIgdmFsdWU9XCJnaXRodWJcIiBkYXRhLXNlZWQ9XCJsb2dJZFwiPkdpdGh1YjwvSXRlbT4pLFxyXG4gICAgICAgICAgICAoPEl0ZW0ga2V5PVwiNVwiIHZhbHVlPVwiZmFjZWJvb2tcIiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9fT5GYWNlYm9vazwvSXRlbT4pLFxyXG4gICAgICAgICAgICAoPEl0ZW0ga2V5PVwiNlwiIHZhbHVlPVwiQW5vbnltb3VzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0+QW5vbnltb3VzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L0l0ZW0+KSxcclxuICAgICAgICAgIF19XHJcbiAgICAgICAgICBhbGlnbj17e1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogeyBhZGp1c3RZOiAwLCBhZGp1c3RYOiAwIH0sXHJcbiAgICAgICAgICAgIG9mZnNldDogW29mZnNldFgsIDE1XSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e3RoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZX1cclxuICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcwIDAuM3JlbScsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnLTAuM3JlbScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3Bhbj5sb2dpbjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUG9wb3Zlcj47XHJcbiAgICAgfVxyXG4gICB9XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG4gICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGU7XHJcblxyXG4gICB2YXIgbGVmdENvbnRlbnRMYWJlbCA9IFwi5LiK5LiA6aCBXCI7XHJcbiAgLy8gIGxldCBvZmZzZXRYID0gLTEwOyAvLyBqdXN0IGZvciBwYyBkZW1vXHJcbiAgLy8gIGlmICgvKGlQaG9uZXxpUGFkfGlQb2R8aU9TfEFuZHJvaWQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gIC8vICAgIG9mZnNldFggPSAtMjY7XHJcbiAgLy8gIH1cclxuLy8gICBjb25zdCB0aGF0ID0gdGhpcztcclxuXHJcbiAgIGlmICggdGl0bGUgPT09IFwi5aW9IC4uIE1hdGNoaW5nXCIpXHJcbiAgIHtcclxuICAgICAgIGxlZnRDb250ZW50TGFiZWwgPSBcIlwiXHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgbGVmdENvbnRlbnRMYWJlbCA9IFwi5LiK5LiA6aCBXCJcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIChcclxuICAgICA8ZGl2PlxyXG4gICAgICAgPE5hdkJhciBpY29uTmFtZT1cImZhbHNlXCJcclxuICAgICAgICAgbW9kZT1cImxpZ2h0XCJcclxuICAgICAgICAgcmlnaHRDb250ZW50PXtbXHJcbiAgICAgICAgICAgPGRpdiBrZXk9XCIxXCI+e3RoaXMubG9naW5JdGVtKCl9PC9kaXY+XHJcbiAgICAgICAgIF19XHJcbiAgICAgICA+e3RoaXMuc3RhdGUubG9naW5OYW1lfXtNb2J4U3RvcmUuYXBwLnRpdGxlfTwvTmF2QmFyPlxyXG4gICAgIDwvZGl2PlxyXG4gICApXHJcblxyXG4gIH1cclxufVxyXG5cclxuLy88SWNvbiBrZXk9XCIwXCIgdHlwZT1cInBsdXNcIiBzdHlsZT17eyBtYXJnaW5SaWdodDogJzAuMzJyZW0nIH19IG9uQ2xpY2s9eyAgdGhpcy5vbkxvZ2luIH0vPixcclxuLy9vbkxlZnRDbGljaz17ICgpID0+IE1vYnhTdG9yZS5yb3V0ZXIuZ29UbyggTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcsIE1vYnhTdG9yZS5hcHAucGFyYW1zLCBNb2J4U3RvcmUgKSB9XHJcblxyXG4vLyBvbkxlZnRDbGljaz17ICgpID0+IE1vYnhTdG9yZS5yb3V0ZXIuZ29Ubyggdmlld3MuZmlyc3QgKSB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uQmFyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQTVDQTtBQTZDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBakRBO0FBb0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4REE7QUEyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9EQTtBQUNBO0FBaUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFqQkE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFuQkE7QUE4QkE7QUFDQTtBQUNBO0FBMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBUUE7QUFDQTs7O0FBcUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUFBO0FBTEE7QUFEQTtBQVVBOzs7O0FBNUlBO0FBQ0E7QUE4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEpBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
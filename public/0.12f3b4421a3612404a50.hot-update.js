webpackHotUpdate(0,{

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _css = __webpack_require__(500);\n\nvar _navBar = __webpack_require__(503);\n\nvar _navBar2 = _interopRequireDefault(_navBar);\n\nvar _css2 = __webpack_require__(973);\n\nvar _popover = __webpack_require__(976);\n\nvar _popover2 = _interopRequireDefault(_popover);\n\nvar _css3 = __webpack_require__(294);\n\nvar _icon = __webpack_require__(299);\n\nvar _icon2 = _interopRequireDefault(_icon);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class;\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mobxReact = __webpack_require__(439);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _views = __webpack_require__(504);\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _firebaseStore = __webpack_require__(777);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NavigationBar = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(NavigationBar, _React$Component);\n\n  function NavigationBar(props) {\n    _classCallCheck(this, NavigationBar);\n\n    var _this = _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this, props));\n\n    _this.onSelect = function (opt) {\n      // console.log(opt.props.value);\n      _this.setState({\n        visible: false,\n        selected: opt.props.value\n      });\n    };\n\n    _this.handleVisibleChange = function (visible) {\n      _this.setState({\n        visible: visible\n      });\n    };\n\n    _this.onLogin = function (e) {\n      e.preventDefault();\n      console.log('onLogin ... ');\n      _firebaseStore.Fb.startLogin();\n    };\n\n    _this.onLogout = function (e) {\n      e.preventDefault();\n      console.log('onLogin ... ');\n      _firebaseStore.Fb.startLogout();\n    };\n\n    _this.loginItem = function () {\n\n      var isLogin = _mobxStore2.default.app.user;\n\n      if (isLogin) {\n        return _react2.default.createElement(\n          'span',\n          { key: '2', onClick: _this.onLogout },\n          'logout'\n        );\n      } else {\n        return _react2.default.createElement(\n          'span',\n          { key: '2', onClick: _this.onLogin },\n          'login'\n        );\n      }\n    };\n\n    _this.state = {\n      isLeftIcon: false,\n      visible: true,\n      selected: ''\n    };\n    return _this;\n  }\n\n  _createClass(NavigationBar, [{\n    key: 'render',\n    value: function render() {\n      var title = this.props.title;\n      var leftContentLabel = \"上一頁\";\n      var offsetX = -10; // just for pc demo\n      if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {\n        offsetX = -26;\n      }\n      //   const that = this;\n\n      if (title === \"好 .. Matching\") {\n        leftContentLabel = \"\";\n      } else {\n        leftContentLabel = \"上一頁\";\n      }\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _navBar2.default,\n          { iconName: 'false',\n            mode: 'light',\n            rightContent: _react2.default.createElement(\n              _popover2.default,\n              { mask: true,\n                overlayClassName: 'fortest',\n                overlayStyle: { color: 'currentColor' },\n                visible: this.state.visible,\n                overlay: [_react2.default.createElement(\n                  Item,\n                  { key: '4', value: 'scan', 'data-seed': 'logId' },\n                  '\\u626B\\u4E00\\u626B'\n                ), _react2.default.createElement(\n                  Item,\n                  { key: '5', value: 'special', style: { whiteSpace: 'nowrap' } },\n                  '\\u6211\\u7684\\u4E8C\\u7EF4\\u7801'\n                ), _react2.default.createElement(\n                  Item,\n                  { key: '6', value: 'button ct' },\n                  _react2.default.createElement(\n                    'span',\n                    { style: { marginRight: 5 } },\n                    '\\u5E2E\\u52A9'\n                  )\n                )],\n                align: {\n                  overflow: { adjustY: 0, adjustX: 0 },\n                  offset: [offsetX, 15]\n                },\n                onVisibleChange: this.handleVisibleChange,\n                onSelect: this.onSelect\n              },\n              _react2.default.createElement(\n                'div',\n                { style: {\n                    height: '100%',\n                    padding: '0 0.3rem',\n                    marginRight: '-0.3rem',\n                    display: 'flex',\n                    alignItems: 'center'\n                  }\n                },\n                _react2.default.createElement(_icon2.default, { type: 'ellipsis' })\n              )\n            )\n          },\n          _mobxStore2.default.app.title\n        )\n      );\n    }\n  }]);\n\n  return NavigationBar;\n}(_react2.default.Component)) || _class;\n\n//<Icon key=\"0\" type=\"plus\" style={{ marginRight: '0.32rem' }} onClick={  this.onLogin }/>,\n//onLeftClick={ () => MobxStore.router.goTo( MobxStore.app.previousView, MobxStore.app.params, MobxStore ) }\n\n// onLeftClick={ () => MobxStore.router.goTo( views.first ) }\n\n\nexports.default = NavigationBar;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb25CYXIuanM/ZTUzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7b2JzZXJ2ZXJ9IGZyb20gJ21vYngtcmVhY3QnXHJcbmltcG9ydCB7ICBQb3BvdmVyLCBOYXZCYXIsIEljb24sIEJ1dHRvbn0gZnJvbSAnYW50ZC1tb2JpbGUnO1xyXG5pbXBvcnQgTW9ieFN0b3JlIGZyb20gJ21vYnhTdG9yZSdcclxuaW1wb3J0IHZpZXdzIGZyb20gJ3ZpZXdzJ1xyXG5pbXBvcnQge0ZifSBmcm9tICdmaXJlYmFzZS1zdG9yZSdcclxuXHJcbkBvYnNlcnZlclxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCBwcm9wcyApe1xyXG4gICAgIHN1cGVyKCBwcm9wcyApXHJcbiAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgIGlzTGVmdEljb24gOiBmYWxzZSxcclxuICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICBzZWxlY3RlZDogJydcclxuICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIG9uU2VsZWN0ID0gKG9wdCkgPT4ge1xyXG4gICAgIC8vIGNvbnNvbGUubG9nKG9wdC5wcm9wcy52YWx1ZSk7XHJcbiAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgIHNlbGVjdGVkOiBvcHQucHJvcHMudmFsdWUsXHJcbiAgICAgfSk7XHJcbiAgIH07XHJcbiAgIGhhbmRsZVZpc2libGVDaGFuZ2UgPSAodmlzaWJsZSkgPT4ge1xyXG4gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgdmlzaWJsZSxcclxuICAgICB9KTtcclxuICAgfTtcclxuXHJcblxyXG4gICBvbkxvZ2luID0gKCBlICkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCAnb25Mb2dpbiAuLi4gJylcclxuICAgICAgRmIuc3RhcnRMb2dpbigpO1xyXG4gICB9XHJcblxyXG5cclxuICAgb25Mb2dvdXQgPSAoIGUgKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc29sZS5sb2coICdvbkxvZ2luIC4uLiAnKVxyXG4gICAgICBGYi5zdGFydExvZ291dCgpO1xyXG4gICB9XHJcblxyXG4gICBsb2dpbkl0ZW0gID0gKCkgPT4ge1xyXG5cclxuICAgICBjb25zdCBpc0xvZ2luID0gTW9ieFN0b3JlLmFwcC51c2VyO1xyXG5cclxuICAgICBpZiAoIGlzTG9naW4gKSB7XHJcbiAgICAgICByZXR1cm4gPHNwYW4ga2V5PVwiMlwiIG9uQ2xpY2s9eyB0aGlzLm9uTG9nb3V0IH0+bG9nb3V0PC9zcGFuPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICByZXR1cm4gPHNwYW4ga2V5PVwiMlwiIG9uQ2xpY2s9eyB0aGlzLm9uTG9naW4gfT5sb2dpbjwvc3Bhbj47XHJcbiAgICAgfVxyXG4gICB9XHJcblxyXG5cclxucmVuZGVyKCkge1xyXG4gICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGU7XHJcbiAgIHZhciBsZWZ0Q29udGVudExhYmVsID0gXCLkuIrkuIDpoIFcIjtcclxuICAgbGV0IG9mZnNldFggPSAtMTA7IC8vIGp1c3QgZm9yIHBjIGRlbW9cclxuICAgaWYgKC8oaVBob25lfGlQYWR8aVBvZHxpT1N8QW5kcm9pZCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XHJcbiAgICAgb2Zmc2V0WCA9IC0yNjtcclxuICAgfVxyXG4vLyAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgaWYgKCB0aXRsZSA9PT0gXCLlpb0gLi4gTWF0Y2hpbmdcIilcclxuICAge1xyXG4gICAgICAgbGVmdENvbnRlbnRMYWJlbCA9IFwiXCJcclxuICAgfSBlbHNlIHtcclxuICAgICBsZWZ0Q29udGVudExhYmVsID0gXCLkuIrkuIDpoIFcIlxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgIDxkaXY+XHJcbiAgICAgICA8TmF2QmFyIGljb25OYW1lPVwiZmFsc2VcIlxyXG4gICAgICAgICBtb2RlPVwibGlnaHRcIlxyXG4gICAgICAgICByaWdodENvbnRlbnQ9e1xyXG4gICAgICAgICAgIDxQb3BvdmVyIG1hc2tcclxuICAgICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJmb3J0ZXN0XCJcclxuICAgICAgICAgICAgIG92ZXJsYXlTdHlsZT17eyBjb2xvcjogJ2N1cnJlbnRDb2xvcicgfX1cclxuICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX1cclxuICAgICAgICAgICAgIG92ZXJsYXk9e1tcclxuICAgICAgICAgICAgICAgKDxJdGVtIGtleT1cIjRcIiB2YWx1ZT1cInNjYW5cIiBkYXRhLXNlZWQ9XCJsb2dJZFwiPuaJq+S4gOaJqzwvSXRlbT4pLFxyXG4gICAgICAgICAgICAgICAoPEl0ZW0ga2V5PVwiNVwiIHZhbHVlPVwic3BlY2lhbFwiIHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PuaIkeeahOS6jOe7tOeggTwvSXRlbT4pLFxyXG4gICAgICAgICAgICAgICAoPEl0ZW0ga2V5PVwiNlwiIHZhbHVlPVwiYnV0dG9uIGN0XCI+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUgfX0+5biu5YqpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICA8L0l0ZW0+KSxcclxuICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICBhbGlnbj17e1xyXG4gICAgICAgICAgICAgICBvdmVyZmxvdzogeyBhZGp1c3RZOiAwLCBhZGp1c3RYOiAwIH0sXHJcbiAgICAgICAgICAgICAgIG9mZnNldDogW29mZnNldFgsIDE1XSxcclxuICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICBvblZpc2libGVDaGFuZ2U9e3RoaXMuaGFuZGxlVmlzaWJsZUNoYW5nZX1cclxuICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uU2VsZWN0fVxyXG4gICAgICAgICAgID5cclxuICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDAuM3JlbScsXHJcbiAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnLTAuM3JlbScsXHJcbiAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICA8SWNvbiB0eXBlPVwiZWxsaXBzaXNcIiAvPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICB9XHJcbiAgICAgICA+e01vYnhTdG9yZS5hcHAudGl0bGV9PC9OYXZCYXI+XHJcbiAgICAgPC9kaXY+XHJcbiAgIClcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLzxJY29uIGtleT1cIjBcIiB0eXBlPVwicGx1c1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC4zMnJlbScgfX0gb25DbGljaz17ICB0aGlzLm9uTG9naW4gfS8+LFxyXG4vL29uTGVmdENsaWNrPXsgKCkgPT4gTW9ieFN0b3JlLnJvdXRlci5nb1RvKCBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldywgTW9ieFN0b3JlLmFwcC5wYXJhbXMsIE1vYnhTdG9yZSApIH1cclxuXHJcbi8vIG9uTGVmdENsaWNrPXsgKCkgPT4gTW9ieFN0b3JlLnJvdXRlci5nb1RvKCB2aWV3cy5maXJzdCApIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL25hdmlnYXRpb25CYXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWhCQTtBQWlCQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBckJBO0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1QkE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQTtBQUNBO0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTs7O0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWhCQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQVFBO0FBUkE7QUFsQkE7QUFIQTtBQWlDQTtBQWpDQTtBQURBO0FBc0NBOzs7O0FBekdBO0FBQ0E7QUEyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakhBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
webpackHotUpdate(0,{

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _css = __webpack_require__(500);\n\nvar _navBar = __webpack_require__(503);\n\nvar _navBar2 = _interopRequireDefault(_navBar);\n\nvar _css2 = __webpack_require__(294);\n\nvar _icon = __webpack_require__(299);\n\nvar _icon2 = _interopRequireDefault(_icon);\n\nvar _css3 = __webpack_require__(973);\n\nvar _popover = __webpack_require__(976);\n\nvar _popover2 = _interopRequireDefault(_popover);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class;\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mobxReact = __webpack_require__(439);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _views = __webpack_require__(504);\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _firebaseStore = __webpack_require__(777);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Item = _popover2.default.Item;\n\nvar NavigationBar = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(NavigationBar, _React$Component);\n\n  function NavigationBar(props) {\n    _classCallCheck(this, NavigationBar);\n\n    var _this = _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).call(this, props));\n\n    _this.onSelect = function (opt) {\n      console.log(opt.props.value);\n\n      if (opt.props.value === 'github') {\n        //Fb.startLogin();\n      }\n      if (opt.props.value === '') {\n        //Fb.startLogin();\n      }\n      if (opt.props.value === 'Anonymous') {\n        _firebaseStore.Fb.startLoginAnonyhmously();\n      }\n\n      _this.setState({\n        visible: false,\n        selected: opt.props.value\n      });\n    };\n\n    _this.handleVisibleChange = function (visible) {\n      _this.setState({\n        visible: visible\n      });\n    };\n\n    _this.onLogin = function (e) {\n      e.preventDefault();\n      console.log('onLogin ... ');\n      _firebaseStore.Fb.startLogin();\n    };\n\n    _this.onLogout = function (e) {\n      e.preventDefault();\n      console.log('onLogin ... ');\n      _firebaseStore.Fb.startLogout();\n    };\n\n    _this.loginItem = function () {\n\n      var isLogin = _mobxStore2.default.app.user;\n      var offsetX = -10; // just for pc demo\n      if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {\n        offsetX = -26;\n      }\n\n      if (isLogin) {\n        return _react2.default.createElement(\n          'span',\n          { key: '2', onClick: _this.onLogout },\n          'logout'\n        );\n      } else {\n        return _react2.default.createElement(\n          _popover2.default,\n          { mask: true,\n            overlayClassName: 'fortest',\n            overlayStyle: { color: 'currentColor' },\n            visible: _this.state.visible,\n            overlay: [_react2.default.createElement(\n              Item,\n              { key: '4', value: 'github', 'data-seed': 'logId' },\n              'Github'\n            ), _react2.default.createElement(\n              Item,\n              { key: '5', value: 'facebook', style: { whiteSpace: 'nowrap' } },\n              'Facebook'\n            ), _react2.default.createElement(\n              Item,\n              { key: '6', value: 'Anonymous' },\n              _react2.default.createElement(\n                'span',\n                { style: { marginRight: 5 } },\n                'Anonymous'\n              )\n            )],\n            align: {\n              overflow: { adjustY: 0, adjustX: 0 },\n              offset: [offsetX, 15]\n            },\n            onVisibleChange: _this.handleVisibleChange,\n            onSelect: _this.onSelect\n          },\n          _react2.default.createElement(\n            'div',\n            { style: {\n                height: '100%',\n                padding: '0 0.3rem',\n                marginRight: '-0.3rem',\n                display: 'flex',\n                alignItems: 'center'\n              }\n            },\n            _react2.default.createElement(_icon2.default, { type: 'ellipsis' })\n          )\n        );\n      }\n    };\n\n    _this.state = {\n      isLeftIcon: false,\n      visible: false,\n      selected: ''\n    };\n    return _this;\n  }\n\n  _createClass(NavigationBar, [{\n    key: 'render',\n    value: function render() {\n      var title = this.props.title;\n      var leftContentLabel = \"上一頁\";\n      //  let offsetX = -10; // just for pc demo\n      //  if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {\n      //    offsetX = -26;\n      //  }\n      //   const that = this;\n\n      if (title === \"好 .. Matching\") {\n        leftContentLabel = \"\";\n      } else {\n        leftContentLabel = \"上一頁\";\n      }\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _navBar2.default,\n          { iconName: 'false',\n            mode: 'light',\n            rightContent: [_react2.default.createElement(\n              'div',\n              { key: '1' },\n              this.loginItem()\n            )]\n          },\n          _mobxStore2.default.app.title\n        )\n      );\n    }\n  }]);\n\n  return NavigationBar;\n}(_react2.default.Component)) || _class;\n\n//<Icon key=\"0\" type=\"plus\" style={{ marginRight: '0.32rem' }} onClick={  this.onLogin }/>,\n//onLeftClick={ () => MobxStore.router.goTo( MobxStore.app.previousView, MobxStore.app.params, MobxStore ) }\n\n// onLeftClick={ () => MobxStore.router.goTo( views.first ) }\n\n\nexports.default = NavigationBar;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb25CYXIuanM/ZTUzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7b2JzZXJ2ZXJ9IGZyb20gJ21vYngtcmVhY3QnXHJcbmltcG9ydCB7ICBQb3BvdmVyLCBOYXZCYXIsIEljb24sIEJ1dHRvbn0gZnJvbSAnYW50ZC1tb2JpbGUnO1xyXG5pbXBvcnQgTW9ieFN0b3JlIGZyb20gJ21vYnhTdG9yZSdcclxuaW1wb3J0IHZpZXdzIGZyb20gJ3ZpZXdzJ1xyXG5pbXBvcnQge0ZifSBmcm9tICdmaXJlYmFzZS1zdG9yZSdcclxuXHJcbmNvbnN0IEl0ZW0gPSBQb3BvdmVyLkl0ZW07XHJcblxyXG5Ab2JzZXJ2ZXJcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICBjb25zdHJ1Y3RvciggcHJvcHMgKXtcclxuICAgICBzdXBlciggcHJvcHMgKVxyXG4gICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICBpc0xlZnRJY29uIDogZmFsc2UsXHJcbiAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgIHNlbGVjdGVkOiAnJ1xyXG4gICAgIH1cclxuICAgfVxyXG5cclxuICAgb25TZWxlY3QgPSAob3B0KSA9PiB7XHJcbiAgICAgY29uc29sZS5sb2cob3B0LnByb3BzLnZhbHVlKTtcclxuXHJcbiAgICAgaWYgKCBvcHQucHJvcHMudmFsdWUgPT09ICdnaXRodWInKSB7XHJcbiAgICAgICAvL0ZiLnN0YXJ0TG9naW4oKTtcclxuICAgICB9XHJcbiAgICAgaWYgKCBvcHQucHJvcHMudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAvL0ZiLnN0YXJ0TG9naW4oKTtcclxuICAgICB9XHJcbiAgICAgaWYgKCBvcHQucHJvcHMudmFsdWUgPT09ICdBbm9ueW1vdXMnKSB7XHJcbiAgICAgICBGYi5zdGFydExvZ2luQW5vbnlobW91c2x5KClcclxuICAgICB9XHJcblxyXG5cclxuICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgc2VsZWN0ZWQ6IG9wdC5wcm9wcy52YWx1ZSxcclxuICAgICB9KTtcclxuICAgfTtcclxuICAgaGFuZGxlVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlKSA9PiB7XHJcbiAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICB2aXNpYmxlLFxyXG4gICAgIH0pO1xyXG4gICB9O1xyXG5cclxuXHJcbiAgIG9uTG9naW4gPSAoIGUgKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc29sZS5sb2coICdvbkxvZ2luIC4uLiAnKVxyXG4gICAgICBGYi5zdGFydExvZ2luKCk7XHJcbiAgIH1cclxuXHJcblxyXG4gICBvbkxvZ291dCA9ICggZSApID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zb2xlLmxvZyggJ29uTG9naW4gLi4uICcpXHJcbiAgICAgIEZiLnN0YXJ0TG9nb3V0KCk7XHJcbiAgIH1cclxuXHJcbiAgIGxvZ2luSXRlbSAgPSAoKSA9PiB7XHJcblxyXG4gICAgIGNvbnN0IGlzTG9naW4gPSBNb2J4U3RvcmUuYXBwLnVzZXI7XHJcbiAgICAgbGV0IG9mZnNldFggPSAtMTA7IC8vIGp1c3QgZm9yIHBjIGRlbW9cclxuICAgICBpZiAoLyhpUGhvbmV8aVBhZHxpUG9kfGlPU3xBbmRyb2lkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcclxuICAgICAgIG9mZnNldFggPSAtMjY7XHJcbiAgICAgfVxyXG5cclxuICAgICBpZiAoIGlzTG9naW4gKSB7XHJcbiAgICAgICByZXR1cm4gPHNwYW4ga2V5PVwiMlwiIG9uQ2xpY2s9eyB0aGlzLm9uTG9nb3V0IH0+bG9nb3V0PC9zcGFuPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICByZXR1cm4gIDxQb3BvdmVyIG1hc2tcclxuICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJmb3J0ZXN0XCJcclxuICAgICAgICAgIG92ZXJsYXlTdHlsZT17eyBjb2xvcjogJ2N1cnJlbnRDb2xvcicgfX1cclxuICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX1cclxuICAgICAgICAgIG92ZXJsYXk9e1tcclxuICAgICAgICAgICAgKDxJdGVtIGtleT1cIjRcIiB2YWx1ZT1cImdpdGh1YlwiIGRhdGEtc2VlZD1cImxvZ0lkXCI+R2l0aHViPC9JdGVtPiksXHJcbiAgICAgICAgICAgICg8SXRlbSBrZXk9XCI1XCIgdmFsdWU9XCJmYWNlYm9va1wiIHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdub3dyYXAnIH19PkZhY2Vib29rPC9JdGVtPiksXHJcbiAgICAgICAgICAgICg8SXRlbSBrZXk9XCI2XCIgdmFsdWU9XCJBbm9ueW1vdXNcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5SaWdodDogNSB9fT5Bbm9ueW1vdXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvSXRlbT4pLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAgIGFsaWduPXt7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiB7IGFkanVzdFk6IDAsIGFkanVzdFg6IDAgfSxcclxuICAgICAgICAgICAgb2Zmc2V0OiBbb2Zmc2V0WCwgMTVdLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZT17dGhpcy5oYW5kbGVWaXNpYmxlQ2hhbmdlfVxyXG4gICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25TZWxlY3R9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzAgMC4zcmVtJyxcclxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICctMC4zcmVtJyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uIHR5cGU9XCJlbGxpcHNpc1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1BvcG92ZXI+O1xyXG4gICAgIH1cclxuICAgfVxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuICAgY29uc3QgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlO1xyXG4gICB2YXIgbGVmdENvbnRlbnRMYWJlbCA9IFwi5LiK5LiA6aCBXCI7XHJcbiAgLy8gIGxldCBvZmZzZXRYID0gLTEwOyAvLyBqdXN0IGZvciBwYyBkZW1vXHJcbiAgLy8gIGlmICgvKGlQaG9uZXxpUGFkfGlQb2R8aU9TfEFuZHJvaWQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gIC8vICAgIG9mZnNldFggPSAtMjY7XHJcbiAgLy8gIH1cclxuLy8gICBjb25zdCB0aGF0ID0gdGhpcztcclxuXHJcbiAgIGlmICggdGl0bGUgPT09IFwi5aW9IC4uIE1hdGNoaW5nXCIpXHJcbiAgIHtcclxuICAgICAgIGxlZnRDb250ZW50TGFiZWwgPSBcIlwiXHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgbGVmdENvbnRlbnRMYWJlbCA9IFwi5LiK5LiA6aCBXCJcclxuICAgfVxyXG5cclxuICAgcmV0dXJuIChcclxuICAgICA8ZGl2PlxyXG4gICAgICAgPE5hdkJhciBpY29uTmFtZT1cImZhbHNlXCJcclxuICAgICAgICAgbW9kZT1cImxpZ2h0XCJcclxuICAgICAgICAgcmlnaHRDb250ZW50PXtbXHJcbiAgICAgICAgICAgPGRpdiBrZXk9XCIxXCI+e3RoaXMubG9naW5JdGVtKCl9PC9kaXY+XHJcbiAgICAgICAgIF19XHJcbiAgICAgICA+e01vYnhTdG9yZS5hcHAudGl0bGV9PC9OYXZCYXI+XHJcbiAgICAgPC9kaXY+XHJcbiAgIClcclxuXHJcbiAgfVxyXG59XHJcblxyXG4vLzxJY29uIGtleT1cIjBcIiB0eXBlPVwicGx1c1wiIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMC4zMnJlbScgfX0gb25DbGljaz17ICB0aGlzLm9uTG9naW4gfS8+LFxyXG4vL29uTGVmdENsaWNrPXsgKCkgPT4gTW9ieFN0b3JlLnJvdXRlci5nb1RvKCBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldywgTW9ieFN0b3JlLmFwcC5wYXJhbXMsIE1vYnhTdG9yZSApIH1cclxuXHJcbi8vIG9uTGVmdENsaWNrPXsgKCkgPT4gTW9ieFN0b3JlLnJvdXRlci5nb1RvKCB2aWV3cy5maXJzdCApIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL25hdmlnYXRpb25CYXIuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBNUJBO0FBNkJBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFqQ0E7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhDQTtBQTJDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0NBO0FBQ0E7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBaEJBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBUUE7QUFSQTtBQWxCQTtBQTZCQTtBQUNBO0FBQ0E7QUF4RkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBT0E7QUFDQTs7O0FBb0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFMQTtBQURBO0FBVUE7Ozs7QUF6SEE7QUFDQTtBQTJIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqSUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
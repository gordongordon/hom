webpackHotUpdate(0,{

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FrontPageView = undefined;\n\nvar _css = __webpack_require__(946);\n\nvar _wingBlank = __webpack_require__(949);\n\nvar _wingBlank2 = _interopRequireDefault(_wingBlank);\n\nvar _css2 = __webpack_require__(950);\n\nvar _button = __webpack_require__(953);\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _css3 = __webpack_require__(954);\n\nvar _whiteSpace = __webpack_require__(957);\n\nvar _whiteSpace2 = _interopRequireDefault(_whiteSpace);\n\nvar _css4 = __webpack_require__(641);\n\nvar _toast = __webpack_require__(644);\n\nvar _toast2 = _interopRequireDefault(_toast);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n// import MobxStore from 'mobxStore'\n\n//import FrontPageDisplay from 'frontPageDisplay'\n\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _views = __webpack_require__(620);\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _frontPageTabBar = __webpack_require__(958);\n\nvar _mobxReact = __webpack_require__(293);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FrontPageView = exports.FrontPageView = (_dec = (0, _mobxReact.inject)(\"store\"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(FrontPageView, _React$Component);\n\n  function FrontPageView(props) {\n    _classCallCheck(this, FrontPageView);\n\n    var _this = _possibleConstructorReturn(this, (FrontPageView.__proto__ || Object.getPrototypeOf(FrontPageView)).call(this, props));\n\n    _this.showToast = function () {\n      _toast2.default.info('This is a toast tips !!!', 1);\n    };\n\n    _this.showToastNoMask = function () {\n      _toast2.default.info('Toast without mask !!!', 2, null, false);\n    };\n\n    _this.successToast = function () {\n      _toast2.default.success('Load success !!!', 1);\n    };\n\n    _this.failToast = function () {\n      _toast2.default.fail('Load failed !!!', 1);\n    };\n\n    _this.offline = function () {\n      _toast2.default.offline('Network connection failed !!!', 1);\n    };\n\n    _this.loadingToast = function (store, goTo) {\n      _toast2.default.loading('Loading...', 1, function () {\n        console.log('Load complete !!!');\n        goTo(_views2.default.buy, store.app.params);\n      });\n    };\n\n    _this.onLogin = function (store) {\n      console.log('onLogin ... ');\n      store.app.startLogin();\n    };\n\n    _this.renderHistoryButton = function (store) {\n      if (store.app.user) {\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(\n            _button2.default,\n            { type: 'ghost', onClick: function onClick() {\n                return store.router.goTo(_views2.default.list, store.app.params, store);\n              } },\n            '\\u904E\\u5F80\\u914D\\u5C0D\\u5982\\u6709>'\n          )\n        );\n      }\n    };\n\n    return _this;\n  }\n\n  _createClass(FrontPageView, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var store = this.props.store;\n      var goTo = store.router.goTo;\n\n      //console.log( 'store', store)\n      /* eslint global-require: 0 */\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _wingBlank2.default,\n          null,\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(\n            _button2.default,\n            { type: 'primary', onClick: function onClick() {\n                return goTo(_views2.default.lease, store.app.params, store);\n              } },\n            '\\u653E \\u79DF'\n          ),\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(\n            _button2.default,\n            { type: 'primary', onClick: function onClick() {\n                return goTo(_views2.default.rent, store.app.params, store);\n              } },\n            '\\u79DF \\u5C4B'\n          ),\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(\n            _button2.default,\n            { type: 'primary', onClick: function onClick() {\n                return goTo(_views2.default.sale, store.app.params, store);\n              } },\n            '\\u8CE3 \\u6A13'\n          ),\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(\n            _button2.default,\n            { type: 'primary', onClick: function onClick() {\n                return _this2.loadingToast(store, goTo);\n              } },\n            '\\u8CB7 \\u6A13'\n          ),\n          this.renderHistoryButton(store),\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(\n            _button2.default,\n            { type: 'ghost', onClick: function onClick() {\n                return goTo(_views2.default.matchAgent, store.app.params, store);\n              } },\n            ' Agent '\n          ),\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(_whiteSpace2.default, null),\n          _react2.default.createElement(_whiteSpace2.default, null)\n        )\n      );\n    } // End of Render\n\n  }]);\n\n  return FrontPageView;\n}(_react2.default.Component)) || _class) || _class);\n\n//<FrontPageTabBar/>\n\n//<Button type=\"ghost\" onClick={ this.onLogin( store ) }>Log in </Button>//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTQ1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2Zyb250UGFnZVZpZXcuanM/ODQ3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgIFRvYXN0LFxyXG4gICAgIFdoaXRlU3BhY2UsXHJcbiAgICAgIFdpbmdCbGFuayxcclxuICAgICAgQnV0dG9uIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJ1xyXG5pbXBvcnQgdmlld3MgZnJvbSAndmlld3MnXHJcbi8vaW1wb3J0IEZyb250UGFnZURpc3BsYXkgZnJvbSAnZnJvbnRQYWdlRGlzcGxheSdcclxuaW1wb3J0IHtGcm9udFBhZ2VUYWJCYXJ9IGZyb20gJ2Zyb250UGFnZVRhYkJhcidcclxuaW1wb3J0IHtpbmplY3QsIG9ic2VydmVyfSBmcm9tICdtb2J4LXJlYWN0JztcclxuXHJcbkBpbmplY3QoXCJzdG9yZVwiKSBAb2JzZXJ2ZXJcclxuZXhwb3J0IGNsYXNzIEZyb250UGFnZVZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcbiAgICBzdXBlciggcHJvcHMgKVxyXG4gIH1cclxuXHJcbnNob3dUb2FzdCA9ICgpID0+IHtcclxuICBUb2FzdC5pbmZvKCdUaGlzIGlzIGEgdG9hc3QgdGlwcyAhISEnLCAxKTtcclxufVxyXG5cclxuc2hvd1RvYXN0Tm9NYXNrID0gKCkgPT4ge1xyXG4gIFRvYXN0LmluZm8oJ1RvYXN0IHdpdGhvdXQgbWFzayAhISEnLCAyLCBudWxsLCBmYWxzZSk7XHJcbn1cclxuXHJcbnN1Y2Nlc3NUb2FzdCA9ICgpID0+IHtcclxuICBUb2FzdC5zdWNjZXNzKCdMb2FkIHN1Y2Nlc3MgISEhJywgMSk7XHJcbn1cclxuXHJcbmZhaWxUb2FzdCA9ICgpID0+ICB7XHJcbiAgVG9hc3QuZmFpbCgnTG9hZCBmYWlsZWQgISEhJywgMSk7XHJcbn1cclxuXHJcbm9mZmxpbmUgPSAoKSA9PiB7XHJcbiAgVG9hc3Qub2ZmbGluZSgnTmV0d29yayBjb25uZWN0aW9uIGZhaWxlZCAhISEnLCAxKTtcclxufVxyXG5cclxubG9hZGluZ1RvYXN0ID0gKHN0b3JlLCBnb1RvKSA9PiB7XHJcbiAgVG9hc3QubG9hZGluZygnTG9hZGluZy4uLicsIDEsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdMb2FkIGNvbXBsZXRlICEhIScpO1xyXG4gICAgZ29Ubyggdmlld3MuYnV5ICwgIHN0b3JlLmFwcC5wYXJhbXMpXHJcbiAgfSk7XHJcbn1cclxuXHJcbm9uTG9naW4gPSAoIHN0b3JlICkgPT4ge1xyXG4gICBjb25zb2xlLmxvZyggJ29uTG9naW4gLi4uICcpXHJcbiAgIHN0b3JlLmFwcC5zdGFydExvZ2luKCk7XHJcbn1cclxuXHJcbnJlbmRlckhpc3RvcnlCdXR0b24gPSAoIHN0b3JlICkgPT4ge1xyXG4gIGlmICggc3RvcmUuYXBwLnVzZXIgKSB7XHJcbiAgICByZXR1cm4gKDxkaXY+XHJcbiAgICAgICAgICAgIDxXaGl0ZVNwYWNlIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImdob3N0XCIgb25DbGljaz17ICgpID0+IHN0b3JlLnJvdXRlci5nb1RvKCB2aWV3cy5saXN0LCBzdG9yZS5hcHAucGFyYW1zLCBzdG9yZSApfT7pgY7lvoDphY3lsI3lpoLmnIk+PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICkgfVxyXG59XHJcblxyXG5cclxucmVuZGVyICgpICB7XHJcbiAgY29uc3Qge3N0b3JlfSA9IHRoaXMucHJvcHM7XHJcbiAgY29uc3Qge3JvdXRlcjoge2dvVG99fSA9IHN0b3JlO1xyXG5cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKCAnc3RvcmUnLCBzdG9yZSlcclxuLyogZXNsaW50IGdsb2JhbC1yZXF1aXJlOiAwICovXHJcbiAgcmV0dXJuICAoXHJcbiAgICA8ZGl2PlxyXG4gIDxXaW5nQmxhbms+XHJcbiAgICA8V2hpdGVTcGFjZSAvPlxyXG4gICAgPFdoaXRlU3BhY2UgLz5cclxuICAgIDxXaGl0ZVNwYWNlIC8+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsgKCkgPT4gZ29Ubyggdmlld3MubGVhc2UsIHN0b3JlLmFwcC5wYXJhbXMsIHN0b3JlICl9PuaUviDnp588L0J1dHRvbj5cclxuICAgIDxXaGl0ZVNwYWNlIC8+XHJcbiAgICA8V2hpdGVTcGFjZSAvPlxyXG4gICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17ICgpID0+IGdvVG8oIHZpZXdzLnJlbnQsICBzdG9yZS5hcHAucGFyYW1zLCBzdG9yZSApfT7np58g5bGLPC9CdXR0b24+XHJcbiAgICA8V2hpdGVTcGFjZSAvPlxyXG4gICAgPFdoaXRlU3BhY2UgLz5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eyAoKSA9PiBnb1RvKCB2aWV3cy5zYWxlLCBzdG9yZS5hcHAucGFyYW1zLCBzdG9yZSApfT7os6Mg5qiTPC9CdXR0b24+XHJcbiAgICA8V2hpdGVTcGFjZSAvPlxyXG4gICAgPFdoaXRlU3BhY2UgLz5cclxuICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLmxvYWRpbmdUb2FzdCggc3RvcmUsIGdvVG8gKSB9PuiytyDmqJM8L0J1dHRvbj5cclxuICAgICAgeyB0aGlzLnJlbmRlckhpc3RvcnlCdXR0b24oIHN0b3JlICkgIH1cclxuICAgIDxXaGl0ZVNwYWNlIC8+XHJcbiAgICAgIDxCdXR0b24gdHlwZT1cImdob3N0XCIgb25DbGljaz17ICgpID0+IGdvVG8oIHZpZXdzLm1hdGNoQWdlbnQsIHN0b3JlLmFwcC5wYXJhbXMsIHN0b3JlICl9PiBBZ2VudCA8L0J1dHRvbj5cclxuICAgIDxXaGl0ZVNwYWNlIC8+XHJcbiAgICA8V2hpdGVTcGFjZSAvPlxyXG4gICAgPFdoaXRlU3BhY2UgLz5cclxuICAgIDwvV2luZ0JsYW5rPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICk7XHJcbn0gLy8gRW5kIG9mIFJlbmRlclxyXG5cclxufVxyXG5cclxuLy88RnJvbnRQYWdlVGFiQmFyLz5cclxuXHJcbi8vPEJ1dHRvbiB0eXBlPVwiZ2hvc3RcIiBvbkNsaWNrPXsgdGhpcy5vbkxvZ2luKCBzdG9yZSApIH0+TG9nIGluIDwvQnV0dG9uPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvZnJvbnRQYWdlVmlldy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQ0E7QUFuQkE7QUFxQkE7QUFDQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQTtBQXFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQTVDQTtBQUVBO0FBQ0E7OztBQTJDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQURBO0FBeUJBO0FBQ0E7Ozs7QUFsRkE7QUFDQTtBQW9GQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
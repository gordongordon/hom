webpackHotUpdate(0,{

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(426);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactSimpleChatbot = __webpack_require__(992);\n\nvar _reactSimpleChatbot2 = _interopRequireDefault(_reactSimpleChatbot);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Review = function (_Component) {\n  _inherits(Review, _Component);\n\n  function Review(props) {\n    _classCallCheck(this, Review);\n\n    var _this = _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).call(this, props));\n\n    _this.state = {\n      name: '',\n      gender: '',\n      age: ''\n    };\n    return _this;\n  }\n\n  _createClass(Review, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var steps = this.props.steps;\n      var name = steps.name,\n          gender = steps.gender,\n          age = steps.age;\n\n\n      this.setState({ name: name, gender: gender, age: age });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          name = _state.name,\n          gender = _state.gender,\n          age = _state.age;\n\n      return _react2.default.createElement(\n        'div',\n        { style: { width: '100%', fontSize: 34 } },\n        _react2.default.createElement(\n          'h3',\n          null,\n          'Summary'\n        ),\n        '\\u6A13\\u76E4: ',\n        name.value,\n        ' ',\n        _react2.default.createElement('br', null),\n        gender.value,\n        _react2.default.createElement('br', null),\n        '\\u60F3\\u8CB7 ',\n        age.value,\n        ' \\u842C ',\n        _react2.default.createElement('br', null),\n        _react2.default.createElement(\n          'table',\n          null,\n          _react2.default.createElement(\n            'tbody',\n            null,\n            _react2.default.createElement(\n              'tr',\n              null,\n              _react2.default.createElement(\n                'td',\n                null,\n                _react2.default.createElement(\n                  'h5',\n                  null,\n                  'Name'\n                )\n              ),\n              _react2.default.createElement(\n                'td',\n                null,\n                name.value\n              )\n            ),\n            _react2.default.createElement(\n              'tr',\n              null,\n              _react2.default.createElement(\n                'td',\n                null,\n                'Gender'\n              ),\n              _react2.default.createElement(\n                'td',\n                null,\n                gender.value\n              )\n            ),\n            _react2.default.createElement(\n              'tr',\n              null,\n              _react2.default.createElement(\n                'td',\n                null,\n                'Age'\n              ),\n              _react2.default.createElement(\n                'td',\n                null,\n                age.value\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Review;\n}(_react.Component);\n\nReview.propTypes = {\n  steps: _propTypes2.default.object\n};\n\nReview.defaultProps = {\n  steps: undefined\n};\n\nvar FormSaleChatbot = function (_Component2) {\n  _inherits(FormSaleChatbot, _Component2);\n\n  function FormSaleChatbot() {\n    _classCallCheck(this, FormSaleChatbot);\n\n    return _possibleConstructorReturn(this, (FormSaleChatbot.__proto__ || Object.getPrototypeOf(FormSaleChatbot)).apply(this, arguments));\n  }\n\n  _createClass(FormSaleChatbot, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(_reactSimpleChatbot2.default, {\n        steps: [{\n          id: '1',\n          message: '請輸入樓盤?',\n          trigger: 'name'\n        }, {\n          id: 'name',\n          user: true,\n          trigger: '3'\n        }, {\n          id: '3',\n          message: 'Hi {previousValue}! 買盤 or 盤賣?',\n          trigger: 'gender'\n        }, {\n          id: 'gender',\n          options: [{ value: 'male', label: '買盤', trigger: '5' }, { value: 'female', label: ' 盤賣', trigger: '5' }]\n        }, {\n          id: '5',\n          message: '想買多少萬?',\n          trigger: 'age'\n        }, {\n          id: 'age',\n          user: true,\n          trigger: '7',\n          validator: function validator(value) {\n            if (isNaN(value)) {\n              return 'value must be a number';\n            } else if (value < 0) {\n              return 'value must be positive';\n            } else if (value > 10000) {\n              return value + '? Come on!';\n            }\n\n            return true;\n          }\n        }, {\n          id: '7',\n          message: 'Great! Check out your summary',\n          trigger: 'review'\n        }, {\n          id: 'review',\n          component: _react2.default.createElement(Review, null),\n          asMessage: true,\n          trigger: 'update'\n        }, {\n          id: 'update',\n          message: 'Would you like to update some field?',\n          trigger: 'update-question'\n        }, {\n          id: 'update-question',\n          options: [{ value: 'yes', label: 'Yes', trigger: 'update-yes' }, { value: 'no', label: 'No', trigger: 'end-message' }]\n        }, {\n          id: 'update-yes',\n          message: 'What field would you like to update?',\n          trigger: 'update-fields'\n        }, {\n          id: 'update-fields',\n          options: [{ value: 'name', label: 'Name', trigger: 'update-name' }, { value: 'gender', label: 'Gender', trigger: 'update-gender' }, { value: 'age', label: 'Age', trigger: 'update-age' }]\n        }, {\n          id: 'update-name',\n          update: 'name',\n          trigger: '7'\n        }, {\n          id: 'update-gender',\n          update: 'gender',\n          trigger: '7'\n        }, {\n          id: 'update-age',\n          update: 'age',\n          trigger: '7'\n        }, {\n          id: 'end-message',\n          message: 'Thanks! Your data was submitted successfully!',\n          end: true\n        }]\n      });\n    }\n  }]);\n\n  return FormSaleChatbot;\n}(_react.Component);\n\nexports.default = FormSaleChatbot;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2NoYXRib3QvZm9ybVNhbGVDaGF0Ym90LmpzPzk3N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENoYXRCb3QgZnJvbSAncmVhY3Qtc2ltcGxlLWNoYXRib3QnO1xyXG5cclxuY2xhc3MgUmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBnZW5kZXI6ICcnLFxyXG4gICAgICBhZ2U6ICcnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgc3RlcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IG5hbWUsIGdlbmRlciwgYWdlIH0gPSBzdGVwcztcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbmFtZSwgZ2VuZGVyLCBhZ2UgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGdlbmRlciwgYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogMzR9fT5cclxuICAgICAgICA8aDM+U3VtbWFyeTwvaDM+XHJcbiAgICAgICAg5qiT55ukOiB7bmFtZS52YWx1ZX0gPGJyIC8+XHJcbiAgICAgICAge2dlbmRlci52YWx1ZX08YnIgLz5cclxuICAgICAgICDmg7Posrcge2FnZS52YWx1ZX0g6JCsIDxiciAvPlxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD48aDU+TmFtZTwvaDU+PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e25hbWUudmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD5HZW5kZXI8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57Z2VuZGVyLnZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8dGQ+QWdlPC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2FnZS52YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5SZXZpZXcucHJvcFR5cGVzID0ge1xyXG4gIHN0ZXBzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuUmV2aWV3LmRlZmF1bHRQcm9wcyA9IHtcclxuICBzdGVwczogdW5kZWZpbmVkLFxyXG59O1xyXG5cclxuY2xhc3MgRm9ybVNhbGVDaGF0Ym90IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2hhdEJvdFxyXG4gICAgICAgIHN0ZXBzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnMScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfoq4vovLjlhaXmqJPnm6Q/JyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJ25hbWUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICduYW1lJyxcclxuICAgICAgICAgICAgdXNlcjogdHJ1ZSxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJzMnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICczJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0hpIHtwcmV2aW91c1ZhbHVlfSEg6LK355ukIG9yIOebpOizoz8nLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnZ2VuZGVyJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZ2VuZGVyJyxcclxuICAgICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICdtYWxlJywgbGFiZWw6ICfosrfnm6QnLCB0cmlnZ2VyOiAnNScgfSxcclxuICAgICAgICAgICAgICB7IHZhbHVlOiAnZmVtYWxlJywgbGFiZWw6ICcg55uk6LOjJywgdHJpZ2dlcjogJzUnIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJzUnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn5oOz6LK35aSa5bCR6JCsPycsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICdhZ2UnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdhZ2UnLFxyXG4gICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnNycsXHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd2YWx1ZSBtdXN0IGJlIGEgbnVtYmVyJztcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd2YWx1ZSBtdXN0IGJlIHBvc2l0aXZlJztcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gMTAwMDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBgJHt2YWx1ZX0/IENvbWUgb24hYDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICc3JyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0dyZWF0ISBDaGVjayBvdXQgeW91ciBzdW1tYXJ5JyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJ3JldmlldycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3JldmlldycsXHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogPFJldmlldyAvPixcclxuICAgICAgICAgICAgYXNNZXNzYWdlOiB0cnVlLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAndXBkYXRlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndXBkYXRlJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1dvdWxkIHlvdSBsaWtlIHRvIHVwZGF0ZSBzb21lIGZpZWxkPycsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICd1cGRhdGUtcXVlc3Rpb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd1cGRhdGUtcXVlc3Rpb24nLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ3llcycsIGxhYmVsOiAnWWVzJywgdHJpZ2dlcjogJ3VwZGF0ZS15ZXMnIH0sXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ25vJywgbGFiZWw6ICdObycsIHRyaWdnZXI6ICdlbmQtbWVzc2FnZScgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndXBkYXRlLXllcycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdXaGF0IGZpZWxkIHdvdWxkIHlvdSBsaWtlIHRvIHVwZGF0ZT8nLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAndXBkYXRlLWZpZWxkcycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3VwZGF0ZS1maWVsZHMnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ25hbWUnLCBsYWJlbDogJ05hbWUnLCB0cmlnZ2VyOiAndXBkYXRlLW5hbWUnIH0sXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ2dlbmRlcicsIGxhYmVsOiAnR2VuZGVyJywgdHJpZ2dlcjogJ3VwZGF0ZS1nZW5kZXInIH0sXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ2FnZScsIGxhYmVsOiAnQWdlJywgdHJpZ2dlcjogJ3VwZGF0ZS1hZ2UnIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3VwZGF0ZS1uYW1lJyxcclxuICAgICAgICAgICAgdXBkYXRlOiAnbmFtZScsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICc3JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndXBkYXRlLWdlbmRlcicsXHJcbiAgICAgICAgICAgIHVwZGF0ZTogJ2dlbmRlcicsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICc3JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndXBkYXRlLWFnZScsXHJcbiAgICAgICAgICAgIHVwZGF0ZTogJ2FnZScsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICc3JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZW5kLW1lc3NhZ2UnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhhbmtzISBZb3VyIGRhdGEgd2FzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhJyxcclxuICAgICAgICAgICAgZW5kOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1TYWxlQ2hhdGJvdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2NoYXRib3QvZm9ybVNhbGVDaGF0Ym90LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBQUE7QUFIQTtBQUlBO0FBSkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBVEE7QUFEQTtBQUxBO0FBdUJBOzs7Ozs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFpQkE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBaEdBO0FBd0dBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
webpackHotUpdate(0,{

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(426);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactSimpleChatbot = __webpack_require__(992);\n\nvar _reactSimpleChatbot2 = _interopRequireDefault(_reactSimpleChatbot);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Review = function (_Component) {\n  _inherits(Review, _Component);\n\n  function Review(props) {\n    _classCallCheck(this, Review);\n\n    var _this = _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).call(this, props));\n\n    _this.state = {\n      name: '',\n      gender: '',\n      age: ''\n    };\n    return _this;\n  }\n\n  _createClass(Review, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var steps = this.props.steps;\n      var name = steps.name,\n          gender = steps.gender,\n          age = steps.age;\n\n\n      this.setState({ name: name, gender: gender, age: age });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          name = _state.name,\n          gender = _state.gender,\n          age = _state.age;\n\n      return _react2.default.createElement(\n        'div',\n        { style: { width: '100%', fontSize: 34 } },\n        _react2.default.createElement(\n          'h3',\n          null,\n          'Summary'\n        ),\n        'Name, ',\n        name.value,\n        _react2.default.createElement(\n          'table',\n          null,\n          _react2.default.createElement(\n            'tbody',\n            null,\n            _react2.default.createElement(\n              'tr',\n              null,\n              _react2.default.createElement(\n                'td',\n                null,\n                _react2.default.createElement(\n                  'h5',\n                  null,\n                  'Name'\n                )\n              ),\n              _react2.default.createElement(\n                'td',\n                null,\n                name.value\n              )\n            ),\n            _react2.default.createElement(\n              'tr',\n              null,\n              _react2.default.createElement(\n                'td',\n                null,\n                'Gender'\n              ),\n              _react2.default.createElement(\n                'td',\n                null,\n                gender.value\n              )\n            ),\n            _react2.default.createElement(\n              'tr',\n              null,\n              _react2.default.createElement(\n                'td',\n                null,\n                'Age'\n              ),\n              _react2.default.createElement(\n                'td',\n                null,\n                age.value\n              )\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Review;\n}(_react.Component);\n\nReview.propTypes = {\n  steps: _propTypes2.default.object\n};\n\nReview.defaultProps = {\n  steps: undefined\n};\n\nvar FormSaleChatbot = function (_Component2) {\n  _inherits(FormSaleChatbot, _Component2);\n\n  function FormSaleChatbot() {\n    _classCallCheck(this, FormSaleChatbot);\n\n    return _possibleConstructorReturn(this, (FormSaleChatbot.__proto__ || Object.getPrototypeOf(FormSaleChatbot)).apply(this, arguments));\n  }\n\n  _createClass(FormSaleChatbot, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(_reactSimpleChatbot2.default, {\n        steps: [{\n          id: '1',\n          message: 'What is your name?',\n          trigger: 'name'\n        }, {\n          id: 'name',\n          user: true,\n          trigger: '3'\n        }, {\n          id: '3',\n          message: 'Hi {previousValue}! What is your gender?',\n          trigger: 'gender'\n        }, {\n          id: 'gender',\n          options: [{ value: 'male', label: 'Male', trigger: '5' }, { value: 'female', label: 'Female', trigger: '5' }]\n        }, {\n          id: '5',\n          message: 'How old are you?',\n          trigger: 'age'\n        }, {\n          id: 'age',\n          user: true,\n          trigger: '7',\n          validator: function validator(value) {\n            if (isNaN(value)) {\n              return 'value must be a number';\n            } else if (value < 0) {\n              return 'value must be positive';\n            } else if (value > 120) {\n              return value + '? Come on!';\n            }\n\n            return true;\n          }\n        }, {\n          id: '7',\n          message: 'Great! Check out your summary',\n          trigger: 'review'\n        }, {\n          id: 'review',\n          component: _react2.default.createElement(Review, null),\n          asMessage: true,\n          trigger: 'update'\n        }, {\n          id: 'update',\n          message: 'Would you like to update some field?',\n          trigger: 'update-question'\n        }, {\n          id: 'update-question',\n          options: [{ value: 'yes', label: 'Yes', trigger: 'update-yes' }, { value: 'no', label: 'No', trigger: 'end-message' }]\n        }, {\n          id: 'update-yes',\n          message: 'What field would you like to update?',\n          trigger: 'update-fields'\n        }, {\n          id: 'update-fields',\n          options: [{ value: 'name', label: 'Name', trigger: 'update-name' }, { value: 'gender', label: 'Gender', trigger: 'update-gender' }, { value: 'age', label: 'Age', trigger: 'update-age' }]\n        }, {\n          id: 'update-name',\n          update: 'name',\n          trigger: '7'\n        }, {\n          id: 'update-gender',\n          update: 'gender',\n          trigger: '7'\n        }, {\n          id: 'update-age',\n          update: 'age',\n          trigger: '7'\n        }, {\n          id: 'end-message',\n          message: 'Thanks! Your data was submitted successfully!',\n          end: true\n        }]\n      });\n    }\n  }]);\n\n  return FormSaleChatbot;\n}(_react.Component);\n\nexports.default = FormSaleChatbot;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2NoYXRib3QvZm9ybVNhbGVDaGF0Ym90LmpzPzk3N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENoYXRCb3QgZnJvbSAncmVhY3Qtc2ltcGxlLWNoYXRib3QnO1xyXG5cclxuY2xhc3MgUmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBnZW5kZXI6ICcnLFxyXG4gICAgICBhZ2U6ICcnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgc3RlcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IG5hbWUsIGdlbmRlciwgYWdlIH0gPSBzdGVwcztcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbmFtZSwgZ2VuZGVyLCBhZ2UgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGdlbmRlciwgYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogMzR9fT5cclxuICAgICAgICA8aDM+U3VtbWFyeTwvaDM+XHJcbiAgICAgICAgTmFtZSwge25hbWUudmFsdWV9XHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPjxoNT5OYW1lPC9oNT48L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57bmFtZS52YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRkPkdlbmRlcjwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntnZW5kZXIudmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0ZD5BZ2U8L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57YWdlLnZhbHVlfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblJldmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgc3RlcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5SZXZpZXcuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0ZXBzOiB1bmRlZmluZWQsXHJcbn07XHJcblxyXG5jbGFzcyBGb3JtU2FsZUNoYXRib3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDaGF0Qm90XHJcbiAgICAgICAgc3RlcHM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1doYXQgaXMgeW91ciBuYW1lPycsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICduYW1lJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnbmFtZScsXHJcbiAgICAgICAgICAgIHVzZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICczJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnMycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdIaSB7cHJldmlvdXNWYWx1ZX0hIFdoYXQgaXMgeW91ciBnZW5kZXI/JyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJ2dlbmRlcicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2dlbmRlcicsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICB7IHZhbHVlOiAnbWFsZScsIGxhYmVsOiAnTWFsZScsIHRyaWdnZXI6ICc1JyB9LFxyXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICdmZW1hbGUnLCBsYWJlbDogJ0ZlbWFsZScsIHRyaWdnZXI6ICc1JyB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICc1JyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ0hvdyBvbGQgYXJlIHlvdT8nLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnYWdlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnYWdlJyxcclxuICAgICAgICAgICAgdXNlcjogdHJ1ZSxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJzcnLFxyXG4gICAgICAgICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmFsdWUgbXVzdCBiZSBhIG51bWJlcic7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmFsdWUgbXVzdCBiZSBwb3NpdGl2ZSc7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IDEyMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZhbHVlfT8gQ29tZSBvbiFgO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJzcnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnR3JlYXQhIENoZWNrIG91dCB5b3VyIHN1bW1hcnknLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAncmV2aWV3JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAncmV2aWV3JyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiA8UmV2aWV3IC8+LFxyXG4gICAgICAgICAgICBhc01lc3NhZ2U6IHRydWUsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICd1cGRhdGUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd1cGRhdGUnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnV291bGQgeW91IGxpa2UgdG8gdXBkYXRlIHNvbWUgZmllbGQ/JyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJ3VwZGF0ZS1xdWVzdGlvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3VwZGF0ZS1xdWVzdGlvbicsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICB7IHZhbHVlOiAneWVzJywgbGFiZWw6ICdZZXMnLCB0cmlnZ2VyOiAndXBkYXRlLXllcycgfSxcclxuICAgICAgICAgICAgICB7IHZhbHVlOiAnbm8nLCBsYWJlbDogJ05vJywgdHJpZ2dlcjogJ2VuZC1tZXNzYWdlJyB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd1cGRhdGUteWVzJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1doYXQgZmllbGQgd291bGQgeW91IGxpa2UgdG8gdXBkYXRlPycsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICd1cGRhdGUtZmllbGRzJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndXBkYXRlLWZpZWxkcycsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICB7IHZhbHVlOiAnbmFtZScsIGxhYmVsOiAnTmFtZScsIHRyaWdnZXI6ICd1cGRhdGUtbmFtZScgfSxcclxuICAgICAgICAgICAgICB7IHZhbHVlOiAnZ2VuZGVyJywgbGFiZWw6ICdHZW5kZXInLCB0cmlnZ2VyOiAndXBkYXRlLWdlbmRlcicgfSxcclxuICAgICAgICAgICAgICB7IHZhbHVlOiAnYWdlJywgbGFiZWw6ICdBZ2UnLCB0cmlnZ2VyOiAndXBkYXRlLWFnZScgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndXBkYXRlLW5hbWUnLFxyXG4gICAgICAgICAgICB1cGRhdGU6ICduYW1lJyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJzcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd1cGRhdGUtZ2VuZGVyJyxcclxuICAgICAgICAgICAgdXBkYXRlOiAnZ2VuZGVyJyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJzcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd1cGRhdGUtYWdlJyxcclxuICAgICAgICAgICAgdXBkYXRlOiAnYWdlJyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJzcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdlbmQtbWVzc2FnZScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGFua3MhIFlvdXIgZGF0YSB3YXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseSEnLFxyXG4gICAgICAgICAgICBlbmQ6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF19XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVNhbGVDaGF0Ym90O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY2hhdGJvdC9mb3JtU2FsZUNoYXRib3QuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQVRBO0FBREE7QUFIQTtBQXFCQTs7Ozs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBaUJBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQWhHQTtBQXdHQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
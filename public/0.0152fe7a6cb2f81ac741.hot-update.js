webpackHotUpdate(0,{

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(426);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactSimpleChatbot = __webpack_require__(992);\n\nvar _reactSimpleChatbot2 = _interopRequireDefault(_reactSimpleChatbot);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Review = function (_Component) {\n  _inherits(Review, _Component);\n\n  function Review(props) {\n    _classCallCheck(this, Review);\n\n    var _this = _possibleConstructorReturn(this, (Review.__proto__ || Object.getPrototypeOf(Review)).call(this, props));\n\n    _this.state = {\n      name: '',\n      gender: '',\n      age: ''\n    };\n    return _this;\n  }\n\n  _createClass(Review, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var steps = this.props.steps;\n      var name = steps.name,\n          gender = steps.gender,\n          age = steps.age;\n\n\n      this.setState({ name: name, gender: gender, age: age });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state = this.state,\n          name = _state.name,\n          gender = _state.gender,\n          age = _state.age;\n\n      return _react2.default.createElement(\n        'div',\n        { style: { width: '100%', fontSize: 34 } },\n        _react2.default.createElement(\n          'h3',\n          null,\n          '\\u8CC7\\u6599\\u5C07\\u56DE\\u8986\\u5BA2\\u4EBA'\n        ),\n        '\\u6A13\\u76E4: ',\n        name.value,\n        ' ',\n        _react2.default.createElement('br', null),\n        gender.value,\n        _react2.default.createElement('br', null),\n        '\\u60F3\\u8CB7 ',\n        age.value,\n        ' \\u842C ',\n        _react2.default.createElement('br', null)\n      );\n    }\n  }]);\n\n  return Review;\n}(_react.Component);\n\nReview.propTypes = {\n  steps: _propTypes2.default.object\n};\n\nReview.defaultProps = {\n  steps: undefined\n};\n\nvar FormSaleChatbot = function (_Component2) {\n  _inherits(FormSaleChatbot, _Component2);\n\n  function FormSaleChatbot() {\n    _classCallCheck(this, FormSaleChatbot);\n\n    return _possibleConstructorReturn(this, (FormSaleChatbot.__proto__ || Object.getPrototypeOf(FormSaleChatbot)).apply(this, arguments));\n  }\n\n  _createClass(FormSaleChatbot, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(_reactSimpleChatbot2.default, {\n        steps: [{\n          id: '1',\n          message: '請輸入樓盤?',\n          trigger: 'name'\n        }, {\n          id: 'name',\n          user: true,\n          trigger: '3'\n        }, {\n          id: '3',\n          message: 'Hi {previousValue}! 買or賣 盤?',\n          trigger: 'gender'\n        }, {\n          id: 'gender',\n          options: [{ value: 'male', label: '買盤', trigger: '5' }, { value: 'female', label: ' 盤賣', trigger: '5' }]\n        }, {\n          id: '5',\n          message: '想買多少萬?',\n          trigger: 'age'\n        }, {\n          id: 'age',\n          user: true,\n          trigger: '7',\n          validator: function validator(value) {\n            if (isNaN(value)) {\n              return 'value must be a number';\n            } else if (value < 0) {\n              return 'value must be positive';\n            } else if (value > 10000) {\n              return value + '? Come on!';\n            }\n\n            return true;\n          }\n        }, {\n          id: '7',\n          message: '以下是你的輸入請確認',\n          trigger: 'review'\n        }, {\n          id: 'review',\n          component: _react2.default.createElement(Review, null),\n          asMessage: true,\n          trigger: 'update'\n        }, {\n          id: 'update',\n          message: '請確認傳送?',\n          trigger: 'update-question'\n        }, {\n          id: 'update-question',\n          options: [{ value: 'yes', label: 'Yes', trigger: 'update-yes' }, { value: 'no', label: 'No', trigger: 'end-message' }]\n        }, {\n          id: 'update-yes',\n          message: 'What field would you like to update?',\n          trigger: 'update-fields'\n        }, {\n          id: 'update-fields',\n          options: [{ value: 'name', label: 'Name', trigger: 'update-name' }, { value: 'gender', label: 'Gender', trigger: 'update-gender' }, { value: 'age', label: 'Age', trigger: 'update-age' }]\n        }, {\n          id: 'update-name',\n          update: 'name',\n          trigger: '7'\n        }, {\n          id: 'update-gender',\n          update: 'gender',\n          trigger: '7'\n        }, {\n          id: 'update-age',\n          update: 'age',\n          trigger: '7'\n        }, {\n          id: 'end-message',\n          message: 'Thanks! Your data was submitted successfully!',\n          end: true\n        }]\n      });\n    }\n  }]);\n\n  return FormSaleChatbot;\n}(_react.Component);\n\nexports.default = FormSaleChatbot;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2NoYXRib3QvZm9ybVNhbGVDaGF0Ym90LmpzPzk3N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENoYXRCb3QgZnJvbSAncmVhY3Qtc2ltcGxlLWNoYXRib3QnO1xyXG5cclxuY2xhc3MgUmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBnZW5kZXI6ICcnLFxyXG4gICAgICBhZ2U6ICcnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIGNvbnN0IHsgc3RlcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IG5hbWUsIGdlbmRlciwgYWdlIH0gPSBzdGVwcztcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbmFtZSwgZ2VuZGVyLCBhZ2UgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGdlbmRlciwgYWdlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogMzR9fT5cclxuICAgICAgICA8aDM+6LOH5paZ5bCH5Zue6KaG5a6i5Lq6PC9oMz5cclxuICAgICAgICDmqJPnm6Q6IHtuYW1lLnZhbHVlfSA8YnIgLz5cclxuICAgICAgICB7Z2VuZGVyLnZhbHVlfTxiciAvPlxyXG4gICAgICAgIOaDs+iytyB7YWdlLnZhbHVlfSDokKwgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblJldmlldy5wcm9wVHlwZXMgPSB7XHJcbiAgc3RlcHM6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcblxyXG5SZXZpZXcuZGVmYXVsdFByb3BzID0ge1xyXG4gIHN0ZXBzOiB1bmRlZmluZWQsXHJcbn07XHJcblxyXG5jbGFzcyBGb3JtU2FsZUNoYXRib3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDaGF0Qm90XHJcbiAgICAgICAgc3RlcHM9e1tcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICcxJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+iri+i8uOWFpeaok+ebpD8nLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnbmFtZScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ25hbWUnLFxyXG4gICAgICAgICAgICB1c2VyOiB0cnVlLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnMycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJzMnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnSGkge3ByZXZpb3VzVmFsdWV9ISDosrdvcuizoyDnm6Q/JyxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJ2dlbmRlcicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ2dlbmRlcicsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICB7IHZhbHVlOiAnbWFsZScsIGxhYmVsOiAn6LK355ukJywgdHJpZ2dlcjogJzUnIH0sXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ2ZlbWFsZScsIGxhYmVsOiAnIOebpOizoycsIHRyaWdnZXI6ICc1JyB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICc1JyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+aDs+iyt+WkmuWwkeiQrD8nLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnYWdlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnYWdlJyxcclxuICAgICAgICAgICAgdXNlcjogdHJ1ZSxcclxuICAgICAgICAgICAgdHJpZ2dlcjogJzcnLFxyXG4gICAgICAgICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmFsdWUgbXVzdCBiZSBhIG51bWJlcic7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndmFsdWUgbXVzdCBiZSBwb3NpdGl2ZSc7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IDEwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dmFsdWV9PyBDb21lIG9uIWA7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnNycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfku6XkuIvmmK/kvaDnmoTovLjlhaXoq4vnorroqo0nLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAncmV2aWV3JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAncmV2aWV3JyxcclxuICAgICAgICAgICAgY29tcG9uZW50OiA8UmV2aWV3IC8+LFxyXG4gICAgICAgICAgICBhc01lc3NhZ2U6IHRydWUsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICd1cGRhdGUnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd1cGRhdGUnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAn6KuL56K66KqN5YKz6YCBPycsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICd1cGRhdGUtcXVlc3Rpb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICd1cGRhdGUtcXVlc3Rpb24nLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ3llcycsIGxhYmVsOiAnWWVzJywgdHJpZ2dlcjogJ3VwZGF0ZS15ZXMnIH0sXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ25vJywgbGFiZWw6ICdObycsIHRyaWdnZXI6ICdlbmQtbWVzc2FnZScgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndXBkYXRlLXllcycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdXaGF0IGZpZWxkIHdvdWxkIHlvdSBsaWtlIHRvIHVwZGF0ZT8nLFxyXG4gICAgICAgICAgICB0cmlnZ2VyOiAndXBkYXRlLWZpZWxkcycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3VwZGF0ZS1maWVsZHMnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ25hbWUnLCBsYWJlbDogJ05hbWUnLCB0cmlnZ2VyOiAndXBkYXRlLW5hbWUnIH0sXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ2dlbmRlcicsIGxhYmVsOiAnR2VuZGVyJywgdHJpZ2dlcjogJ3VwZGF0ZS1nZW5kZXInIH0sXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ2FnZScsIGxhYmVsOiAnQWdlJywgdHJpZ2dlcjogJ3VwZGF0ZS1hZ2UnIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogJ3VwZGF0ZS1uYW1lJyxcclxuICAgICAgICAgICAgdXBkYXRlOiAnbmFtZScsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICc3JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndXBkYXRlLWdlbmRlcicsXHJcbiAgICAgICAgICAgIHVwZGF0ZTogJ2dlbmRlcicsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICc3JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAndXBkYXRlLWFnZScsXHJcbiAgICAgICAgICAgIHVwZGF0ZTogJ2FnZScsXHJcbiAgICAgICAgICAgIHRyaWdnZXI6ICc3JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAnZW5kLW1lc3NhZ2UnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhhbmtzISBZb3VyIGRhdGEgd2FzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHkhJyxcclxuICAgICAgICAgICAgZW5kOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1TYWxlQ2hhdGJvdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2NoYXRib3QvZm9ybVNhbGVDaGF0Ym90LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBQUE7QUFIQTtBQUlBO0FBSkE7QUFJQTtBQUpBO0FBT0E7Ozs7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWlCQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFoR0E7QUF3R0E7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
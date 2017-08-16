webpackHotUpdate(0,{

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ControlLeaseViewWrapper = undefined;\n\nvar _css = __webpack_require__(783);\n\nvar _whiteSpace = __webpack_require__(786);\n\nvar _whiteSpace2 = _interopRequireDefault(_whiteSpace);\n\nvar _css2 = __webpack_require__(812);\n\nvar _datePicker = __webpack_require__(819);\n\nvar _datePicker2 = _interopRequireDefault(_datePicker);\n\nvar _css3 = __webpack_require__(937);\n\nvar _stepper = __webpack_require__(940);\n\nvar _stepper2 = _interopRequireDefault(_stepper);\n\nvar _css4 = __webpack_require__(954);\n\nvar _segmentedControl = __webpack_require__(957);\n\nvar _segmentedControl2 = _interopRequireDefault(_segmentedControl);\n\nvar _css5 = __webpack_require__(539);\n\nvar _list = __webpack_require__(542);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(74);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _rcForm = __webpack_require__(545);\n\nvar _moment = __webpack_require__(651);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\n__webpack_require__(765);\n\nvar _firebaseStore = __webpack_require__(769);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//import {propertys} from 'propertysViewModel'\n\nvar Item = _list2.default.Item;\nvar Brief = Item.Brief;\n\n// const NameOfBuilding = [\n//   { value: 'MOSDBC', label: '迎海' },\n//   { value: 'MOSCTO', label: '第一城' },\n//   { value: 'MOSSSC', label: '新港城' },\n// ];\n\nvar ControlLeaseView = function (_React$Component) {\n  _inherits(ControlLeaseView, _React$Component);\n\n  function ControlLeaseView(props) {\n    _classCallCheck(this, ControlLeaseView);\n\n    // property = propertys.propertys.get(this.props.keyID);\n    // console.log('p', property)\n    // console.log('p.nameOfBuilding', property.nameOfBuilding)\n\n\n    var _this = _possibleConstructorReturn(this, (ControlLeaseView.__proto__ || Object.getPrototypeOf(ControlLeaseView)).call(this, props));\n\n    _this.onChangeLeasePrice = function (val) {\n\n      var id = _this.state.id;\n\n      //Fb.app.usersRef.child( id ).update( { leasePrice : parseInt( val )  } );\n      _firebaseStore.Fb.propertys.child(id).update({ leasePrice: parseInt(val) });\n    };\n\n    _this.onChangeEarlyTimeToView = function (id) {\n\n      var v = _this.props.form.getFieldsValue();\n\n      //// debugger\n      _firebaseStore.Fb.app.usersRef.child(id).update({ earlyTimeToView: v.earlyTimeToView.toJSON() });\n      _firebaseStore.Fb.propertys.child(id).update({ earlyTimeToView: v.earlyTimeToView.toJSON() });\n    };\n\n    _this.state = {\n      disabled: false,\n      selectedSegmentIndex: 0,\n      id: _this.props.property.fbid\n    };\n\n    return _this;\n  }\n\n  _createClass(ControlLeaseView, [{\n    key: 'render',\n    value: function render() {\n      var property = this.props.property;\n\n\n      var that = this;\n      var getFieldProps = this.props.form.getFieldProps;\n      // For DatePicker\n\n      var minDate = (0, _moment2.default)().locale('zh-cn').utcOffset(8);\n      var maxDate = (0, _moment2.default)(minDate).add(6, 'M');\n\n      // console.log( 'SingleLeaseProperty property', this.props.property )\n\n      console.log('SingleLeaseProperty property', property);\n      var selectedIndex = this.props.selectedIndex;\n      var onChange = this.props.onChange;\n\n      // <Picker data={NameOfBuilding} cols={1} {...getFieldProps('nameOfBuilding', {\n      //     initialValue: [property.nameOfBuilding],\n      //   })} className=\"forss\" title=\"請選擇大廈/屋苑\" extra=\"請選擇大廈/屋苑\">\n      //   <List.Item arrow=\"horizontal\">出租物業</List.Item>\n      // </Picker>\n\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_segmentedControl2.default, { values: ['超新鮮 即時回覆', '全部配對'], selectedIndex: this.selectedIndex, onChange: onChange }),\n        _react2.default.createElement(\n          _list2.default,\n          null,\n          _react2.default.createElement(\n            _list2.default.Item,\n            { arrow: 'empty', extra: property.nameOfBuildingLabel },\n            '\\u79DF\\u7269\\u696D'\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            { extra: _react2.default.createElement(_stepper2.default, {\n                style: { width: '100%', minWidth: '2rem' },\n                value: property.leasePrice,\n                showNumber: true,\n                max: 100000,\n                min: 1000,\n                defaultValue: 8000,\n                step: 500,\n                onChange: that.onChangeLeasePrice\n              })\n            },\n            '\\u79DF\\u91D1/\\u5143'\n          ),\n          _react2.default.createElement(\n            _datePicker2.default,\n            _extends({\n              mode: 'date',\n              title: '\\u9078\\u64C7\\u65E5\\u671F',\n              extra: '\\u9078\\u64C7\\u65E5\\u671F,\\u6700\\u9577\\u534A\\u5E74\\u4F86'\n            }, getFieldProps('earlyTimeToView', {\n              initialValue: (0, _moment2.default)(property.earlyTimeToView)\n            }), {\n              minDate: minDate,\n              maxDate: maxDate,\n              onOk: that.onChangeEarlyTimeToView(property.fbid)\n            }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: 'horizontal' },\n              '\\u6700\\u5FEB\\u5E7E\\u6642\\u6709\\u6A13\\u7747'\n            )\n          )\n        ),\n        _react2.default.createElement(_whiteSpace2.default, { size: 'sm' })\n      );\n    }\n  }]);\n\n  return ControlLeaseView;\n}(_react2.default.Component);\n//       <SegmentedControl tintColor={'#ff0000'} values={['最貴', '最平', '最快', '最滿意']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />\n\nvar ControlLeaseViewWrapper = exports.ControlLeaseViewWrapper = (0, _rcForm.createForm)()(ControlLeaseView);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTUzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2NvbnRyb2wvY29udHJvbExlYXNlVmlldy5qcz80Yjk2Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpc3QgLCBDYXJkLCBTdGVwcGVyLCBQaWNrZXIsIFN3aXBlQWN0aW9uLCBEYXRlUGlja2VyLCBCYWRnZSwgRmxleCwgSW5wdXRJdGVtLCBCdXR0b24sIFdoaXRlU3BhY2UsIFNlZ21lbnRlZENvbnRyb2x9IGZyb20gJ2FudGQtbW9iaWxlJztcclxuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJ3JjLWZvcm0nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS96aC1jbic7XHJcbmltcG9ydCB7RmJ9IGZyb20gJ2ZpcmViYXNlLXN0b3JlJ1xyXG5cclxuLy9pbXBvcnQge3Byb3BlcnR5c30gZnJvbSAncHJvcGVydHlzVmlld01vZGVsJ1xyXG5cclxuY29uc3QgSXRlbSA9IExpc3QuSXRlbTtcclxuY29uc3QgQnJpZWYgPSBJdGVtLkJyaWVmO1xyXG5cclxuLy8gY29uc3QgTmFtZU9mQnVpbGRpbmcgPSBbXHJcbi8vICAgeyB2YWx1ZTogJ01PU0RCQycsIGxhYmVsOiAn6L+O5rW3JyB9LFxyXG4vLyAgIHsgdmFsdWU6ICdNT1NDVE8nLCBsYWJlbDogJ+esrOS4gOWfjicgfSxcclxuLy8gICB7IHZhbHVlOiAnTU9TU1NDJywgbGFiZWw6ICfmlrDmuK/ln44nIH0sXHJcbi8vIF07XHJcblxyXG5jbGFzcyBDb250cm9sTGVhc2VWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgIC8vIHByb3BlcnR5ID0gcHJvcGVydHlzLnByb3BlcnR5cy5nZXQodGhpcy5wcm9wcy5rZXlJRCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncCcsIHByb3BlcnR5KVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3AubmFtZU9mQnVpbGRpbmcnLCBwcm9wZXJ0eS5uYW1lT2ZCdWlsZGluZylcclxuXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICBzZWxlY3RlZFNlZ21lbnRJbmRleDogMCxcclxuICAgICAgaWQgOiB0aGlzLnByb3BzLnByb3BlcnR5LmZiaWRcclxuICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VMZWFzZVByaWNlID0gKCB2YWwgKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCBpZCA9IHRoaXMuc3RhdGUuaWQ7XHJcblxyXG4gICAgICAvL0ZiLmFwcC51c2Vyc1JlZi5jaGlsZCggaWQgKS51cGRhdGUoIHsgbGVhc2VQcmljZSA6IHBhcnNlSW50KCB2YWwgKSAgfSApO1xyXG4gICAgICAgRmIucHJvcGVydHlzLmNoaWxkKCBpZCApLnVwZGF0ZSggeyBsZWFzZVByaWNlIDogcGFyc2VJbnQoIHZhbCkgfSApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZUVhcmx5VGltZVRvVmlldyA9ICggaWQgICkgPT5cclxuICAgIHtcclxuXHJcbiAgICAgIGNvbnN0IHYgPSB0aGlzLnByb3BzLmZvcm0uZ2V0RmllbGRzVmFsdWUoKTtcclxuXHJcbiAgICAgIC8vLy8gZGVidWdnZXJcclxuICAgICAgRmIuYXBwLnVzZXJzUmVmLmNoaWxkKCBpZCApLnVwZGF0ZSggeyBlYXJseVRpbWVUb1ZpZXcgOiB2LmVhcmx5VGltZVRvVmlldy50b0pTT04oKSB9ICk7XHJcbiAgICAgIEZiLnByb3BlcnR5cy5jaGlsZCggaWQgKS51cGRhdGUoIHsgZWFybHlUaW1lVG9WaWV3IDogdi5lYXJseVRpbWVUb1ZpZXcudG9KU09OKCkgfSApO1xyXG4gICAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3Byb3BlcnR5fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHsgZ2V0RmllbGRQcm9wcyB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIC8vIEZvciBEYXRlUGlja2VyXHJcbiAgICAgICAgY29uc3QgbWluRGF0ZSA9IG1vbWVudCgpLmxvY2FsZSgnemgtY24nKS51dGNPZmZzZXQoOCk7XHJcbiAgICAgICAgY29uc3QgbWF4RGF0ZSA9IG1vbWVudChtaW5EYXRlKS5hZGQoNiwgJ00nKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coICdTaW5nbGVMZWFzZVByb3BlcnR5IHByb3BlcnR5JywgdGhpcy5wcm9wcy5wcm9wZXJ0eSApXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCAnU2luZ2xlTGVhc2VQcm9wZXJ0eSBwcm9wZXJ0eScsIHByb3BlcnR5IClcclxuICAgICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICBjb25zdCBvbkNoYW5nZSA9IHRoaXMucHJvcHMub25DaGFuZ2U7XHJcblxyXG4gICAgICAgIC8vIDxQaWNrZXIgZGF0YT17TmFtZU9mQnVpbGRpbmd9IGNvbHM9ezF9IHsuLi5nZXRGaWVsZFByb3BzKCduYW1lT2ZCdWlsZGluZycsIHtcclxuICAgICAgICAvLyAgICAgaW5pdGlhbFZhbHVlOiBbcHJvcGVydHkubmFtZU9mQnVpbGRpbmddLFxyXG4gICAgICAgIC8vICAgfSl9IGNsYXNzTmFtZT1cImZvcnNzXCIgdGl0bGU9XCLoq4vpgbjmk4flpKflu4gv5bGL6IuRXCIgZXh0cmE9XCLoq4vpgbjmk4flpKflu4gv5bGL6IuRXCI+XHJcbiAgICAgICAgLy8gICA8TGlzdC5JdGVtIGFycm93PVwiaG9yaXpvbnRhbFwiPuWHuuenn+eJqealrTwvTGlzdC5JdGVtPlxyXG4gICAgICAgIC8vIDwvUGlja2VyPlxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgPGRpdj5cclxuXHJcbiAgICAgIDxTZWdtZW50ZWRDb250cm9sIHZhbHVlcz17WyfotoXmlrDprq4g5Y2z5pmC5Zue6KaGJywgJ+WFqOmDqOmFjeWwjSddfSAgc2VsZWN0ZWRJbmRleD17dGhpcy5zZWxlY3RlZEluZGV4fSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XHJcbjxMaXN0PlxyXG5cclxuICAgICAgPExpc3QuSXRlbSBhcnJvdz1cImVtcHR5XCIgZXh0cmE9e3Byb3BlcnR5Lm5hbWVPZkJ1aWxkaW5nTGFiZWx9Puenn+eJqealrTwvTGlzdC5JdGVtPlxyXG5cclxuXHJcbiAgICAgIDxMaXN0Lkl0ZW0gZXh0cmE9e1xyXG4gICAgICAgPFN0ZXBwZXJcclxuICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWluV2lkdGg6ICcycmVtJyB9fVxyXG4gICAgICAgICB2YWx1ZT17cHJvcGVydHkubGVhc2VQcmljZX1cclxuICAgICAgICAgc2hvd051bWJlclxyXG4gICAgICAgICBtYXg9ezEwMDAwMH1cclxuICAgICAgICAgbWluPXsxMDAwfVxyXG4gICAgICAgICBkZWZhdWx0VmFsdWU9ezgwMDB9XHJcbiAgICAgICAgIHN0ZXA9ezUwMH1cclxuICAgICAgICAgb25DaGFuZ2U9e3RoYXQub25DaGFuZ2VMZWFzZVByaWNlfVxyXG4gICAgICAgLz59XHJcbiAgICAgPlxyXG4gICAgIOenn+mHkS/lhYNcclxuICAgICA8L0xpc3QuSXRlbT5cclxuXHJcbiAgICAgPERhdGVQaWNrZXJcclxuICAgICAgIG1vZGU9XCJkYXRlXCJcclxuICAgICAgIHRpdGxlPVwi6YG45pOH5pel5pyfXCJcclxuICAgICAgIGV4dHJhPVwi6YG45pOH5pel5pyfLOacgOmVt+WNiuW5tOS+hlwiXHJcbiAgICAgICB7Li4uZ2V0RmllbGRQcm9wcygnZWFybHlUaW1lVG9WaWV3Jywge1xyXG4gICAgICAgICBpbml0aWFsVmFsdWUgOiBtb21lbnQoIHByb3BlcnR5LmVhcmx5VGltZVRvVmlldyApLFxyXG4gICAgICAgfSl9XHJcbiAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxyXG4gICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cclxuICAgICAgIG9uT2s9eyB0aGF0Lm9uQ2hhbmdlRWFybHlUaW1lVG9WaWV3KCBwcm9wZXJ0eS5mYmlkICl9XHJcbiAgICAgPlxyXG4gICAgICA8TGlzdC5JdGVtIGFycm93PVwiaG9yaXpvbnRhbFwiPuacgOW/q+W5vuaZguacieaok+edhzwvTGlzdC5JdGVtPlxyXG4gICAgICA8L0RhdGVQaWNrZXI+XHJcbiAgICA8L0xpc3Q+XHJcbiAgICAgIDxXaGl0ZVNwYWNlIHNpemU9XCJzbVwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuLy8gICAgICAgPFNlZ21lbnRlZENvbnRyb2wgdGludENvbG9yPXsnI2ZmMDAwMCd9IHZhbHVlcz17WyfmnIDosrQnLCAn5pyA5bmzJywgJ+acgOW/qycsICfmnIDmu7/mhI8nXX0gIHNlbGVjdGVkSW5kZXg9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTZWdtZW50SW5kZXh9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPlxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRyb2xMZWFzZVZpZXdXcmFwcGVyID0gY3JlYXRlRm9ybSgpKENvbnRyb2xMZWFzZVZpZXcpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29udHJvbC9jb250cm9sTGVhc2VWaWV3LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQURBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBeEJBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBVEE7QUFjQTtBQUNBOzs7QUFvQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBREE7QUFBQTtBQUFBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEE7QUFwQkE7QUFrQ0E7QUFyQ0E7QUF5Q0E7Ozs7QUF0R0E7QUF3R0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
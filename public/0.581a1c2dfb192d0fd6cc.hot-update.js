webpackHotUpdate(0,{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.ControlAgentViewWrapper = undefined;\n\nvar _css = __webpack_require__(879);\n\nvar _whiteSpace = __webpack_require__(882);\n\nvar _whiteSpace2 = _interopRequireDefault(_whiteSpace);\n\nvar _css2 = __webpack_require__(968);\n\nvar _segmentedControl = __webpack_require__(971);\n\nvar _segmentedControl2 = _interopRequireDefault(_segmentedControl);\n\nvar _css3 = __webpack_require__(579);\n\nvar _list = __webpack_require__(582);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _rcForm = __webpack_require__(585);\n\nvar _moment = __webpack_require__(690);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\n__webpack_require__(804);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//import {propertys} from 'propertysViewModel'\n\nvar Item = _list2.default.Item;\nvar Brief = Item.Brief;\n\nvar NameOfBuilding = [{ value: 'MOSDBC', label: '迎海' }, { value: 'MOSCTO', label: '第一城' }, { value: 'MOSSSC', label: '新港城' }];\n\nvar ControlAgentView = function (_React$Component) {\n    _inherits(ControlAgentView, _React$Component);\n\n    function ControlAgentView(props) {\n        _classCallCheck(this, ControlAgentView);\n\n        // property = propertys.propertys.get(this.props.keyID);\n        // console.log('p', property)\n        // console.log('p.nameOfBuilding', property.nameOfBuilding)\n\n        var _this = _possibleConstructorReturn(this, (ControlAgentView.__proto__ || Object.getPrototypeOf(ControlAgentView)).call(this, props));\n\n        _this.state = {\n            disabled: false,\n            selectedSegmentIndex: 0\n        };\n\n        return _this;\n    }\n\n    _createClass(ControlAgentView, [{\n        key: 'render',\n        value: function render() {\n            var property = this.props.property;\n\n\n            var that = this;\n            var getFieldProps = this.props.form.getFieldProps;\n            // // For DatePicker\n            // const minDate = moment().locale('zh-cn').utcOffset(8);\n            // const maxDate = moment(minDate).add(6, 'M');\n\n            // console.log( 'SingleLeaseProperty property', this.props.property )\n\n            console.log('SingleLeaseProperty property', property);\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_segmentedControl2.default, { values: ['等待回覆樓盤', '已跟進'], selectedIndex: this.state.selectedSegmentIndex, onChange: this.onChange }),\n                _react2.default.createElement(_whiteSpace2.default, { size: 'sm' })\n            );\n        }\n    }]);\n\n    return ControlAgentView;\n}(_react2.default.Component);\n//       <SegmentedControl tintColor={'#ff0000'} values={['最貴', '最平', '最快', '最滿意']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />\n\nvar ControlAgentViewWrapper = exports.ControlAgentViewWrapper = (0, _rcForm.createForm)()(ControlAgentView);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9jb250cm9sL2NvbnRyb2xBZ2VudFZpZXcuanM/MmYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpc3QgLCBDYXJkLCBTdGVwcGVyLCBQaWNrZXIsIFN3aXBlQWN0aW9uLCBEYXRlUGlja2VyLCBCYWRnZSwgRmxleCwgSW5wdXRJdGVtLCBCdXR0b24sIFdoaXRlU3BhY2UsIFNlZ21lbnRlZENvbnRyb2x9IGZyb20gJ2FudGQtbW9iaWxlJztcclxuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJ3JjLWZvcm0nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS96aC1jbic7XHJcbi8vaW1wb3J0IHtwcm9wZXJ0eXN9IGZyb20gJ3Byb3BlcnR5c1ZpZXdNb2RlbCdcclxuXHJcbmNvbnN0IEl0ZW0gPSBMaXN0Lkl0ZW07XHJcbmNvbnN0IEJyaWVmID0gSXRlbS5CcmllZjtcclxuXHJcbmNvbnN0IE5hbWVPZkJ1aWxkaW5nID0gW1xyXG4gIHsgdmFsdWU6ICdNT1NEQkMnLCBsYWJlbDogJ+i/jua1tycgfSxcclxuICB7IHZhbHVlOiAnTU9TQ1RPJywgbGFiZWw6ICfnrKzkuIDln44nIH0sXHJcbiAgeyB2YWx1ZTogJ01PU1NTQycsIGxhYmVsOiAn5paw5riv5Z+OJyB9LFxyXG5dO1xyXG5cclxuY2xhc3MgQ29udHJvbEFnZW50VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAvLyBwcm9wZXJ0eSA9IHByb3BlcnR5cy5wcm9wZXJ0eXMuZ2V0KHRoaXMucHJvcHMua2V5SUQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3AnLCBwcm9wZXJ0eSlcclxuICAgIC8vIGNvbnNvbGUubG9nKCdwLm5hbWVPZkJ1aWxkaW5nJywgcHJvcGVydHkubmFtZU9mQnVpbGRpbmcpXHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgICBzZWxlY3RlZFNlZ21lbnRJbmRleDogMCxcclxuICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7cHJvcGVydHl9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgY29uc3QgeyBnZXRGaWVsZFByb3BzIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgLy8gLy8gRm9yIERhdGVQaWNrZXJcclxuICAgICAgICAvLyBjb25zdCBtaW5EYXRlID0gbW9tZW50KCkubG9jYWxlKCd6aC1jbicpLnV0Y09mZnNldCg4KTtcclxuICAgICAgICAvLyBjb25zdCBtYXhEYXRlID0gbW9tZW50KG1pbkRhdGUpLmFkZCg2LCAnTScpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggJ1NpbmdsZUxlYXNlUHJvcGVydHkgcHJvcGVydHknLCB0aGlzLnByb3BzLnByb3BlcnR5IClcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coICdTaW5nbGVMZWFzZVByb3BlcnR5IHByb3BlcnR5JywgcHJvcGVydHkgKVxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxTZWdtZW50ZWRDb250cm9sIHZhbHVlcz17WyfnrYnlvoXlm57opobmqJPnm6QnLCflt7Lot5/pgLInXX0gIHNlbGVjdGVkSW5kZXg9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTZWdtZW50SW5kZXh9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPlxyXG4gICAgICA8V2hpdGVTcGFjZSBzaXplPVwic21cIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuLy8gICAgICAgPFNlZ21lbnRlZENvbnRyb2wgdGludENvbG9yPXsnI2ZmMDAwMCd9IHZhbHVlcz17WyfmnIDosrQnLCAn5pyA5bmzJywgJ+acgOW/qycsICfmnIDmu7/mhI8nXX0gIHNlbGVjdGVkSW5kZXg9e3RoaXMuc3RhdGUuc2VsZWN0ZWRTZWdtZW50SW5kZXh9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPlxyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRyb2xBZ2VudFZpZXdXcmFwcGVyID0gY3JlYXRlRm9ybSgpKENvbnRyb2xBZ2VudFZpZXcpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29udHJvbC9jb250cm9sQWdlbnRWaWV3LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTs7O0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQVJBO0FBWUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTs7OztBQW5DQTtBQXFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
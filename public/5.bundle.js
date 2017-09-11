webpackJsonp([5],{1287:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _css = __webpack_require__(34);\n\nvar _whiteSpace = __webpack_require__(33);\n\nvar _whiteSpace2 = _interopRequireDefault(_whiteSpace);\n\nvar _css2 = __webpack_require__(41);\n\nvar _badge = __webpack_require__(40);\n\nvar _badge2 = _interopRequireDefault(_badge);\n\nvar _css3 = __webpack_require__(56);\n\nvar _actionSheet = __webpack_require__(55);\n\nvar _actionSheet2 = _interopRequireDefault(_actionSheet);\n\nvar _css4 = __webpack_require__(17);\n\nvar _list = __webpack_require__(18);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _userModelView = __webpack_require__(29);\n\nvar _mobxStore = __webpack_require__(14);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _views = __webpack_require__(15);\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _antd = __webpack_require__(281);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n//import { createForm } from \"rc-form\";\n//import moment from 'moment';\n//import 'moment/locale/zh-cn';\n\n//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'\n\n\nvar Item = _list2.default.Item;\nvar Brief = Item.Brief;\n\n// fix touch to scroll background page on iOS\n// https://github.com/ant-design/ant-design-mobile/issues/307\n// https://github.com/ant-design/ant-design-mobile/issues/163\nvar isIPhone = new RegExp('\\\\biPhone\\\\b|\\\\biPod\\\\b', 'i').test(window.navigator.userAgent);\nvar wrapProps = void 0;\nif (isIPhone) {\n  wrapProps = {\n    onTouchStart: function onTouchStart(e) {\n      return e.preventDefault();\n    }\n  };\n}\n// const NameOfBuilding = [\n//   { value: 'MOSDBC', label: '迎海' },\n//   { value: 'MOSCTO', label: '第一城' },\n//   { value: 'MOSSSC', label: '新港城' },\n// ];\n//\n// const BUILDING_NAME = {\n//    'MOSDBC' : '迎海',\n//    'MOSCTO' : '第一城',\n//    'MOSSSC' : '新港城'\n// }\n\nvar SingleSaleAgentFitlerView = function (_React$Component) {\n  _inherits(SingleSaleAgentFitlerView, _React$Component);\n\n  function SingleSaleAgentFitlerView(props) {\n    _classCallCheck(this, SingleSaleAgentFitlerView);\n\n    var _this = _possibleConstructorReturn(this, (SingleSaleAgentFitlerView.__proto__ || Object.getPrototypeOf(SingleSaleAgentFitlerView)).call(this, props));\n\n    _this.showActionSheet = function () {\n      var p = _this.props.property;\n      var BUTTONS = ['容許對方打俾你', 'Call' + p.contactPhone, 'Go saleAgentForm', '取消'];\n      _actionSheet2.default.showActionSheetWithOptions({\n        options: BUTTONS,\n        cancelButtonIndex: BUTTONS.length - 1,\n        destructiveButtonIndex: BUTTONS.length - 2,\n        // title: '标题',\n        message: '請選擇其中一項',\n        maskClosable: true,\n        'data-seed': 'logId',\n        wrapProps: wrapProps\n      }, function (buttonIndex) {\n        _this.setState({ clicked: BUTTONS[buttonIndex] });\n        if (buttonIndex === 0) {\n          p.setBuyInDirectCallForSaleAgent(p.fbid, p.relatedFbid);\n        }\n        if (buttonIndex === 1) {\n          window.location.href = \"tel://\" + 66896696;\n        }\n        if (buttonIndex === 2) {\n          _this.props.store.app.passByRef = p;\n          _this.props.store.router.goTo(_views2.default.buyAgentForm, {\n            keyID: p.fbid,\n            typeTo: p.typeTo,\n            filterID: _this.props.filterID\n          });\n        }\n      });\n    };\n\n    _this.state = {\n      disabled: false,\n      selectedSegmentIndex: 0\n    };\n    return _this;\n  }\n\n  _createClass(SingleSaleAgentFitlerView, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      //const p = this.props;\n      //    const t = moment().format('YYYY-MM-DD HH:mm:ss');\n      //  this.props.property.realTime = moment( t );\n      this.props.property.setTimeStamp();\n\n      //    console.log( 'realTime will mount', this.props.property.realTime)\n    }\n\n    /**\r\n     * Implement ActionSheet which to handle multi actions\r\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var property = this.props.property;\n\n      var that = this;\n      //        const { getFieldProps } = this.props.form;\n\n      //onClick={() => MobxStore.router.goTo(views.leaseAgentForm, { keyID : property.fbid, typeTo : property.typeTo})}\n\n      // repair goTo by passing property\n      //MobxStore.app.lastProperty = property;\n\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          Item,\n          {\n            extra: _react2.default.createElement(_badge2.default, { text: property.typeByFollowUpLabel }),\n            arrow: \"horizontal\",\n            onClick: function onClick() {\n              _mobxStore2.default.app.passByRef = property;\n\n              _mobxStore2.default.router.goTo(_views2.default.buyAgentForm, {\n                keyID: property.fbid,\n                typeTo: property.typeTo,\n                filterID: _this2.props.filterID\n              });\n            },\n\n            thumb: \"http://hair.losstreatment.com/icons/rent-up.svg\",\n            multipleLine: true\n          },\n          property.addressLocationLabel,\n          \"/\",\n          property.nameOfBuildingLabel,\n          \"/\",\n          property.contactNameLabel,\n          _react2.default.createElement(\n            Brief,\n            null,\n            property.partitionLabel,\n            property.salePriceLabel,\n            _react2.default.createElement(\"br\", null),\n            _react2.default.createElement(_badge2.default, {\n              text: property.isPetAllowedLabel,\n              style: {\n                marginLeft: 12,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 2\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.isViewAbleLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.levelLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByRoleName,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.roleName,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByRoleName,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.howFresh,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(\"br\", null),\n            _react2.default.createElement(_badge2.default, {\n              text: property.netSizeLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.dayListed,\n              style: {\n                marginLeft: 12,\n                padding: \"0 0.06rem\",\n                backgroundColor: \"#fff\",\n                borderRadius: 2,\n                color: \"#f19736\",\n                border: \"1px solid #f19736\"\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.isSaleWithLeaseLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(\"br\", null),\n            _react2.default.createElement(_badge2.default, {\n              text: property.dueDayLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.earlyTimeToViewLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            })\n          ),\n          \"f:\",\n          property.fbid,\n          \" \",\n          _react2.default.createElement(\"br\", null),\n          \"r:\",\n          property.relatedFbid\n        ),\n        _react2.default.createElement(_whiteSpace2.default, { size: \"sm\" })\n      );\n    }\n  }]);\n\n  return SingleSaleAgentFitlerView;\n}(_react2.default.Component);\n\n// {/* <div>\n// <SwipeAction\n//   style={{ backgroundColor: 'gray' }}\n//   autoClose\n//   right={[\n//     {\n//       text: 'Cancel',\n//       onPress: () => console.log('cancel'),\n//       style: { backgroundColor: '#ddd', color: 'white' },\n//     },\n//     {\n//       text: 'Delete',\n//       onPress: () => console.log('delete'),\n//       style: { backgroundColor: '#F4333C', color: 'white' },\n//     },\n//   ]}\n//   left={[\n//     {\n//       text: 'Reply',\n//       onPress: () => console.log('reply'),\n//       style: { backgroundColor: '#108ee9', color: 'white' },\n//     },\n//     {\n//       text: 'Cancel',\n//       onPress: () => console.log('cancel'),\n//       style: { backgroundColor: '#ddd', color: 'white' },\n//     },\n//   ]}\n//   onOpen={() => console.log('global open')}\n//   onClose={() => console.log('global close')}\n// >\n// <Card full>\n//  <Badge text={'平'} corner>\n//   <Card.Header\n//     title={ property.contactNameLabel }\n//     thumb=\"http://via.placeholder.com/140x100\"\n//     extra={<div>尋找:{property.nameOfBuildingLabel}</div>}\n//   />\n//   </Badge>\n//   <Card.Body>\n//       <div>{property.leasePriceLabel}{property.isFreeForSevenDayLabel}{property.dueDayLabel}{property.hasHomeHardwareLabel}\n//       </div>\n//   </Card.Body>\n//   <Card.Footer content={<div><Button type=\"ghost\" inline size=\"small\">請打俾我</Button>\n//   <Button type=\"ghost\" inline size=\"small\">直接聯絡</Button></div>} extra={          <Flex style={{ marginBottom: '1rem' }}>\n//             <Badge text={property.roleName} style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: property.colorByRoleName, borderRadius: 2 }} />\n//             <Badge text={property.howFresh}  style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: property.colorByFresh, borderRadius: 2 }} />\n//             <Badge text={property.dayListed}\n//               style={{\n//                 marginLeft: 12,\n//                 padding: '0 0.06rem',\n//                 backgroundColor: '#fff',\n//                 borderRadius: 2,\n//                 color: '#f19736',\n//                 border: '1px solid #f19736',\n//               }}\n//             />\n//           </Flex>} />\n// </Card>\n// </SwipeAction>\n// <WhiteSpace size=\"sm\" />\n// </div> */}\n\n\nexports.default = SingleSaleAgentFitlerView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI4Ny5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9zaW5nbGVQcm9wZXJ0eVZpZXcvc2luZ2xlU2FsZUFnZW50RmlsdGVyVmlldy5qcz9kMGMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBMaXN0LFxyXG4gIENhcmQsXHJcbiAgU3RlcHBlcixcclxuICBQaWNrZXIsXHJcbiAgU3dpcGVBY3Rpb24sXHJcbiAgRGF0ZVBpY2tlcixcclxuICBCYWRnZSxcclxuICBGbGV4LFxyXG4gIElucHV0SXRlbSxcclxuICBXaGl0ZVNwYWNlLFxyXG4gIEJ1dHRvbixcclxuICBTZWdtZW50ZWRDb250cm9sLFxyXG4gIEFjdGlvblNoZWV0XHJcbn0gZnJvbSBcImFudGQtbW9iaWxlXCI7XHJcbi8vaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gXCJyYy1mb3JtXCI7XHJcbi8vaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG4vL2ltcG9ydCAnbW9tZW50L2xvY2FsZS96aC1jbic7XHJcbmltcG9ydCB7IHByb3BlcnR5cyB9IGZyb20gXCJ1c2VyTW9kZWxWaWV3XCI7XHJcbi8vaW1wb3J0IHtTaW5nbGVMZWFzZVByb3BlcnR5Rm9yTWF0Y2hWaWV3V3JhcHBlcn0gZnJvbSAnc2luZ2xlTGVhc2VQcm9wZXJ0eUZvck1hdGNoVmlldydcclxuaW1wb3J0IE1vYnhTdG9yZSBmcm9tIFwibW9ieFN0b3JlXCI7XHJcbmltcG9ydCB2aWV3cyBmcm9tIFwidmlld3NcIjtcclxuaW1wb3J0IHtNb2RhbH0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBJdGVtID0gTGlzdC5JdGVtO1xyXG5jb25zdCBCcmllZiA9IEl0ZW0uQnJpZWY7XHJcblxyXG4vLyBmaXggdG91Y2ggdG8gc2Nyb2xsIGJhY2tncm91bmQgcGFnZSBvbiBpT1NcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi1tb2JpbGUvaXNzdWVzLzMwN1xyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduLW1vYmlsZS9pc3N1ZXMvMTYzXHJcbmNvbnN0IGlzSVBob25lID0gbmV3IFJlZ0V4cCgnXFxcXGJpUGhvbmVcXFxcYnxcXFxcYmlQb2RcXFxcYicsICdpJykudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbmxldCB3cmFwUHJvcHM7XHJcbmlmIChpc0lQaG9uZSkge1xyXG4gIHdyYXBQcm9wcyA9IHtcclxuICAgIG9uVG91Y2hTdGFydDogZSA9PiBlLnByZXZlbnREZWZhdWx0KCksXHJcbiAgfTtcclxufVxyXG4vLyBjb25zdCBOYW1lT2ZCdWlsZGluZyA9IFtcclxuLy8gICB7IHZhbHVlOiAnTU9TREJDJywgbGFiZWw6ICfov47mtbcnIH0sXHJcbi8vICAgeyB2YWx1ZTogJ01PU0NUTycsIGxhYmVsOiAn56ys5LiA5Z+OJyB9LFxyXG4vLyAgIHsgdmFsdWU6ICdNT1NTU0MnLCBsYWJlbDogJ+aWsOa4r+WfjicgfSxcclxuLy8gXTtcclxuLy9cclxuLy8gY29uc3QgQlVJTERJTkdfTkFNRSA9IHtcclxuLy8gICAgJ01PU0RCQycgOiAn6L+O5rW3JyxcclxuLy8gICAgJ01PU0NUTycgOiAn56ys5LiA5Z+OJyxcclxuLy8gICAgJ01PU1NTQycgOiAn5paw5riv5Z+OJ1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGVTYWxlQWdlbnRGaXRsZXJWaWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcclxuICAgICAgc2VsZWN0ZWRTZWdtZW50SW5kZXg6IDBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICAvL2NvbnN0IHAgPSB0aGlzLnByb3BzO1xyXG4gICAgLy8gICAgY29uc3QgdCA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG4gICAgLy8gIHRoaXMucHJvcHMucHJvcGVydHkucmVhbFRpbWUgPSBtb21lbnQoIHQgKTtcclxuICAgIHRoaXMucHJvcHMucHJvcGVydHkuc2V0VGltZVN0YW1wKCk7XHJcblxyXG4gICAgLy8gICAgY29uc29sZS5sb2coICdyZWFsVGltZSB3aWxsIG1vdW50JywgdGhpcy5wcm9wcy5wcm9wZXJ0eS5yZWFsVGltZSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEltcGxlbWVudCBBY3Rpb25TaGVldCB3aGljaCB0byBoYW5kbGUgbXVsdGkgYWN0aW9uc1xyXG4gICAqL1xyXG4gIHNob3dBY3Rpb25TaGVldCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHAgPSB0aGlzLnByb3BzLnByb3BlcnR5O1xyXG4gICAgY29uc3QgQlVUVE9OUyA9IFsn5a656Kix5bCN5pa55omT5L++5L2gJywgJ0NhbGwnICsgcC5jb250YWN0UGhvbmUsICdHbyBzYWxlQWdlbnRGb3JtJywgJ+WPlua2iCddO1xyXG4gICAgQWN0aW9uU2hlZXQuc2hvd0FjdGlvblNoZWV0V2l0aE9wdGlvbnMoe1xyXG4gICAgICBvcHRpb25zOiBCVVRUT05TLFxyXG4gICAgICBjYW5jZWxCdXR0b25JbmRleDogQlVUVE9OUy5sZW5ndGggLSAxLFxyXG4gICAgICBkZXN0cnVjdGl2ZUJ1dHRvbkluZGV4OiBCVVRUT05TLmxlbmd0aCAtIDIsXHJcbiAgICAgIC8vIHRpdGxlOiAn5qCH6aKYJyxcclxuICAgICAgbWVzc2FnZTogJ+iri+mBuOaTh+WFtuS4reS4gOmghScsXHJcbiAgICAgIG1hc2tDbG9zYWJsZTogdHJ1ZSxcclxuICAgICAgJ2RhdGEtc2VlZCc6ICdsb2dJZCcsXHJcbiAgICAgIHdyYXBQcm9wcyxcclxuICAgIH0sXHJcbiAgICAoYnV0dG9uSW5kZXgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNsaWNrZWQ6IEJVVFRPTlNbYnV0dG9uSW5kZXhdIH0pO1xyXG4gICAgICBpZiAoIGJ1dHRvbkluZGV4ID09PSAwICkge1xyXG4gICAgICAgIHAuc2V0QnV5SW5EaXJlY3RDYWxsRm9yU2FsZUFnZW50KCBwLmZiaWQsIHAucmVsYXRlZEZiaWQgKTsgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBpZiAoIGJ1dHRvbkluZGV4ID09PSAxICkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPVwidGVsOi8vXCIrIDY2ODk2Njk2O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICggYnV0dG9uSW5kZXggPT09IDIgKSB7XHJcbiAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUuYXBwLnBhc3NCeVJlZiA9IHA7XHJcbiAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUucm91dGVyLmdvVG8odmlld3MuYnV5QWdlbnRGb3JtLCB7XHJcbiAgICAgICAgICAga2V5SUQ6IHAuZmJpZCxcclxuICAgICAgICAgICB0eXBlVG86IHAudHlwZVRvLFxyXG4gICAgICAgICAgIGZpbHRlcklEOiB0aGlzLnByb3BzLmZpbHRlcklEXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgLy8gICAgICAgIGNvbnN0IHsgZ2V0RmllbGRQcm9wcyB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG5cclxuICAgIC8vb25DbGljaz17KCkgPT4gTW9ieFN0b3JlLnJvdXRlci5nb1RvKHZpZXdzLmxlYXNlQWdlbnRGb3JtLCB7IGtleUlEIDogcHJvcGVydHkuZmJpZCwgdHlwZVRvIDogcHJvcGVydHkudHlwZVRvfSl9XHJcblxyXG4gICAgLy8gcmVwYWlyIGdvVG8gYnkgcGFzc2luZyBwcm9wZXJ0eVxyXG4gICAgLy9Nb2J4U3RvcmUuYXBwLmxhc3RQcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJdGVtXHJcbiAgICAgICAgZXh0cmE9ezxCYWRnZSB0ZXh0PXtwcm9wZXJ0eS50eXBlQnlGb2xsb3dVcExhYmVsfSAvPn1cclxuICAgICAgICBhcnJvdz1cImhvcml6b250YWxcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgTW9ieFN0b3JlLmFwcC5wYXNzQnlSZWYgPSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgTW9ieFN0b3JlLnJvdXRlci5nb1RvKHZpZXdzLmJ1eUFnZW50Rm9ybSwge1xyXG4gICAgICAgICAgICAgIGtleUlEOiBwcm9wZXJ0eS5mYmlkLFxyXG4gICAgICAgICAgICAgIHR5cGVUbzogcHJvcGVydHkudHlwZVRvLFxyXG4gICAgICAgICAgICAgIGZpbHRlcklEOiB0aGlzLnByb3BzLmZpbHRlcklEXHJcbiAgICAgICAgICAgIH0pfSB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICB0aHVtYj1cImh0dHA6Ly9oYWlyLmxvc3N0cmVhdG1lbnQuY29tL2ljb25zL3JlbnQtdXAuc3ZnXCJcclxuICAgICAgICAgIG11bHRpcGxlTGluZVxyXG4gICAgICAgID5cclxuICAgICAgIHtwcm9wZXJ0eS5hZGRyZXNzTG9jYXRpb25MYWJlbH0ve3Byb3BlcnR5Lm5hbWVPZkJ1aWxkaW5nTGFiZWx9L3twcm9wZXJ0eS5jb250YWN0TmFtZUxhYmVsfVxyXG4gICAgICAgICAgPEJyaWVmPlxyXG4gICAgICAgICAgICB7cHJvcGVydHkucGFydGl0aW9uTGFiZWx9XHJcbiAgICAgICAgICAgIHtwcm9wZXJ0eS5zYWxlUHJpY2VMYWJlbH1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICB0ZXh0PXtwcm9wZXJ0eS5pc1BldEFsbG93ZWRMYWJlbH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMC4wNnJlbVwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcGVydHkuY29sb3JCeUZyZXNoLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMlxyXG4gICAgICAgICAgICB9fSAgICAgIFxyXG4gICAgICAgICAgICAvPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgdGV4dD17cHJvcGVydHkuaXNWaWV3QWJsZUxhYmVsfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDYsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDAuMDZyZW1cIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BlcnR5LmNvbG9yQnlGcmVzaCxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDVcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgdGV4dD17cHJvcGVydHkubGV2ZWxMYWJlbH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA2LFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAwLjA2cmVtXCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wZXJ0eS5jb2xvckJ5Um9sZU5hbWUsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgICAgICB0ZXh0PXtwcm9wZXJ0eS5yb2xlTmFtZX1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAwLjA2cmVtXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BlcnR5LmNvbG9yQnlSb2xlTmFtZSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgIHRleHQ9e3Byb3BlcnR5Lmhvd0ZyZXNofVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA2LFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDAuMDZyZW1cIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcGVydHkuY29sb3JCeUZyZXNoLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICB0ZXh0PXtwcm9wZXJ0eS5uZXRTaXplTGFiZWx9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMC4wNnJlbVwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcGVydHkuY29sb3JCeUZyZXNoLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCYWRnZVxyXG4gICAgICAgICAgICAgIHRleHQ9e3Byb3BlcnR5LmRheUxpc3RlZH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjAgMC4wNnJlbVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmMTk3MzZcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2YxOTczNlwiXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8QmFkZ2VcclxuICAgICAgICAgIHRleHQ9e3Byb3BlcnR5LmlzU2FsZVdpdGhMZWFzZUxhYmVsfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogNixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIwIDAuMDZyZW1cIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwcm9wZXJ0eS5jb2xvckJ5RnJlc2gsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogNVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxCYWRnZVxyXG4gICAgICAgIHRleHQ9e3Byb3BlcnR5LmR1ZURheUxhYmVsfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBtYXJnaW5MZWZ0OiA2LFxyXG4gICAgICAgICAgcGFkZGluZzogXCIwIDAuMDZyZW1cIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJvcGVydHkuY29sb3JCeUZyZXNoLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA1XHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgPEJhZGdlXHJcbiAgICAgIHRleHQ9e3Byb3BlcnR5LmVhcmx5VGltZVRvVmlld0xhYmVsfVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIG1hcmdpbkxlZnQ6IDYsXHJcbiAgICAgICAgcGFkZGluZzogXCIwIDAuMDZyZW1cIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHByb3BlcnR5LmNvbG9yQnlGcmVzaCxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDVcclxuICAgICAgfX1cclxuICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8L0JyaWVmPmY6e3Byb3BlcnR5LmZiaWR9IDxiciAvPnI6e3Byb3BlcnR5LnJlbGF0ZWRGYmlkfVxyXG4gICAgICAgICAgICA8L0l0ZW0+XHJcbiAgICAgICAgPFdoaXRlU3BhY2Ugc2l6ZT1cInNtXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gey8qIDxkaXY+XHJcbi8vIDxTd2lwZUFjdGlvblxyXG4vLyAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyYXknIH19XHJcbi8vICAgYXV0b0Nsb3NlXHJcbi8vICAgcmlnaHQ9e1tcclxuLy8gICAgIHtcclxuLy8gICAgICAgdGV4dDogJ0NhbmNlbCcsXHJcbi8vICAgICAgIG9uUHJlc3M6ICgpID0+IGNvbnNvbGUubG9nKCdjYW5jZWwnKSxcclxuLy8gICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiAnI2RkZCcsIGNvbG9yOiAnd2hpdGUnIH0sXHJcbi8vICAgICB9LFxyXG4vLyAgICAge1xyXG4vLyAgICAgICB0ZXh0OiAnRGVsZXRlJyxcclxuLy8gICAgICAgb25QcmVzczogKCkgPT4gY29uc29sZS5sb2coJ2RlbGV0ZScpLFxyXG4vLyAgICAgICBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjRjQzMzNDJywgY29sb3I6ICd3aGl0ZScgfSxcclxuLy8gICAgIH0sXHJcbi8vICAgXX1cclxuLy8gICBsZWZ0PXtbXHJcbi8vICAgICB7XHJcbi8vICAgICAgIHRleHQ6ICdSZXBseScsXHJcbi8vICAgICAgIG9uUHJlc3M6ICgpID0+IGNvbnNvbGUubG9nKCdyZXBseScpLFxyXG4vLyAgICAgICBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjMTA4ZWU5JywgY29sb3I6ICd3aGl0ZScgfSxcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgIHRleHQ6ICdDYW5jZWwnLFxyXG4vLyAgICAgICBvblByZXNzOiAoKSA9PiBjb25zb2xlLmxvZygnY2FuY2VsJyksXHJcbi8vICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogJyNkZGQnLCBjb2xvcjogJ3doaXRlJyB9LFxyXG4vLyAgICAgfSxcclxuLy8gICBdfVxyXG4vLyAgIG9uT3Blbj17KCkgPT4gY29uc29sZS5sb2coJ2dsb2JhbCBvcGVuJyl9XHJcbi8vICAgb25DbG9zZT17KCkgPT4gY29uc29sZS5sb2coJ2dsb2JhbCBjbG9zZScpfVxyXG4vLyA+XHJcbi8vIDxDYXJkIGZ1bGw+XHJcbi8vICA8QmFkZ2UgdGV4dD17J+W5syd9IGNvcm5lcj5cclxuLy8gICA8Q2FyZC5IZWFkZXJcclxuLy8gICAgIHRpdGxlPXsgcHJvcGVydHkuY29udGFjdE5hbWVMYWJlbCB9XHJcbi8vICAgICB0aHVtYj1cImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE0MHgxMDBcIlxyXG4vLyAgICAgZXh0cmE9ezxkaXY+5bCL5om+Ontwcm9wZXJ0eS5uYW1lT2ZCdWlsZGluZ0xhYmVsfTwvZGl2Pn1cclxuLy8gICAvPlxyXG4vLyAgIDwvQmFkZ2U+XHJcbi8vICAgPENhcmQuQm9keT5cclxuLy8gICAgICAgPGRpdj57cHJvcGVydHkubGVhc2VQcmljZUxhYmVsfXtwcm9wZXJ0eS5pc0ZyZWVGb3JTZXZlbkRheUxhYmVsfXtwcm9wZXJ0eS5kdWVEYXlMYWJlbH17cHJvcGVydHkuaGFzSG9tZUhhcmR3YXJlTGFiZWx9XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgIDxDYXJkLkZvb3RlciBjb250ZW50PXs8ZGl2PjxCdXR0b24gdHlwZT1cImdob3N0XCIgaW5saW5lIHNpemU9XCJzbWFsbFwiPuiri+aJk+S/vuaIkTwvQnV0dG9uPlxyXG4vLyAgIDxCdXR0b24gdHlwZT1cImdob3N0XCIgaW5saW5lIHNpemU9XCJzbWFsbFwiPuebtOaOpeiBr+e1oTwvQnV0dG9uPjwvZGl2Pn0gZXh0cmE9eyAgICAgICAgICA8RmxleCBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxcmVtJyB9fT5cclxuLy8gICAgICAgICAgICAgPEJhZGdlIHRleHQ9e3Byb3BlcnR5LnJvbGVOYW1lfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxMiwgcGFkZGluZzogJzAgMC4wNnJlbScsIGJhY2tncm91bmRDb2xvcjogcHJvcGVydHkuY29sb3JCeVJvbGVOYW1lLCBib3JkZXJSYWRpdXM6IDIgfX0gLz5cclxuLy8gICAgICAgICAgICAgPEJhZGdlIHRleHQ9e3Byb3BlcnR5Lmhvd0ZyZXNofSAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTIsIHBhZGRpbmc6ICcwIDAuMDZyZW0nLCBiYWNrZ3JvdW5kQ29sb3I6IHByb3BlcnR5LmNvbG9yQnlGcmVzaCwgYm9yZGVyUmFkaXVzOiAyIH19IC8+XHJcbi8vICAgICAgICAgICAgIDxCYWRnZSB0ZXh0PXtwcm9wZXJ0eS5kYXlMaXN0ZWR9XHJcbi8vICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuLy8gICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDEyLFxyXG4vLyAgICAgICAgICAgICAgICAgcGFkZGluZzogJzAgMC4wNnJlbScsXHJcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuLy8gICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcclxuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiAnI2YxOTczNicsXHJcbi8vICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2YxOTczNicsXHJcbi8vICAgICAgICAgICAgICAgfX1cclxuLy8gICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgIDwvRmxleD59IC8+XHJcbi8vIDwvQ2FyZD5cclxuLy8gPC9Td2lwZUFjdGlvbj5cclxuLy8gPFdoaXRlU3BhY2Ugc2l6ZT1cInNtXCIgLz5cclxuLy8gPC9kaXY+ICovfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvc2luZ2xlUHJvcGVydHlWaWV3L3NpbmdsZVNhbGVBZ2VudEZpbHRlclZpZXcuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQWtCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBbERBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFPQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBb0NBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQWZBO0FBaUJBO0FBakJBO0FBaUJBO0FBakJBO0FBaUJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUEzRkE7QUFsQkE7QUF1SEE7QUF2SEE7QUF1SEE7QUF2SEE7QUF1SEE7QUF2SEE7QUF5SEE7QUExSEE7QUE2SEE7Ozs7QUEvTEE7QUFDQTtBQWlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpRQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1287\n")}});
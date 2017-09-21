webpackJsonp([8],{764:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _css = __webpack_require__(25);\n\nvar _whiteSpace = __webpack_require__(24);\n\nvar _whiteSpace2 = _interopRequireDefault(_whiteSpace);\n\nvar _css2 = __webpack_require__(29);\n\nvar _badge = __webpack_require__(28);\n\nvar _badge2 = _interopRequireDefault(_badge);\n\nvar _css3 = __webpack_require__(36);\n\nvar _actionSheet = __webpack_require__(35);\n\nvar _actionSheet2 = _interopRequireDefault(_actionSheet);\n\nvar _css4 = __webpack_require__(21);\n\nvar _list = __webpack_require__(23);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _userModelView = __webpack_require__(27);\n\nvar _mobxStore = __webpack_require__(13);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _views = __webpack_require__(15);\n\nvar _views2 = _interopRequireDefault(_views);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n//import { createForm } from \"rc-form\";\n//import moment from 'moment';\n//import 'moment/locale/zh-cn';\n\n//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'\n\n\n//import {Modal} from 'antd';\n\nvar Item = _list2.default.Item;\nvar Brief = Item.Brief;\n\n// fix touch to scroll background page on iOS\n// https://github.com/ant-design/ant-design-mobile/issues/307\n// https://github.com/ant-design/ant-design-mobile/issues/163\nvar isIPhone = new RegExp('\\\\biPhone\\\\b|\\\\biPod\\\\b', 'i').test(window.navigator.userAgent);\nvar wrapProps = void 0;\nif (isIPhone) {\n  wrapProps = {\n    onTouchStart: function onTouchStart(e) {\n      return e.preventDefault();\n    }\n  };\n}\n// const NameOfBuilding = [\n//   { value: 'MOSDBC', label: '迎海' },\n//   { value: 'MOSCTO', label: '第一城' },\n//   { value: 'MOSSSC', label: '新港城' },\n// ];\n//\n// const BUILDING_NAME = {\n//    'MOSDBC' : '迎海',\n//    'MOSCTO' : '第一城',\n//    'MOSSSC' : '新港城'\n// }\n\nvar SingleSaleAgentFitlerView = function (_React$Component) {\n  _inherits(SingleSaleAgentFitlerView, _React$Component);\n\n  function SingleSaleAgentFitlerView(props) {\n    _classCallCheck(this, SingleSaleAgentFitlerView);\n\n    var _this = _possibleConstructorReturn(this, (SingleSaleAgentFitlerView.__proto__ || Object.getPrototypeOf(SingleSaleAgentFitlerView)).call(this, props));\n\n    _this.showActionSheet = function () {\n      var p = _this.props.property;\n      var BUTTONS = ['容許對方打俾你', 'Call' + p.contactPhone, 'Go saleAgentForm', '取消'];\n      _actionSheet2.default.showActionSheetWithOptions({\n        options: BUTTONS,\n        cancelButtonIndex: BUTTONS.length - 1,\n        destructiveButtonIndex: BUTTONS.length - 2,\n        // title: '标题',\n        message: '請選擇其中一項',\n        maskClosable: true,\n        'data-seed': 'logId',\n        wrapProps: wrapProps\n      }, function (buttonIndex) {\n        _this.setState({ clicked: BUTTONS[buttonIndex] });\n        if (buttonIndex === 0) {\n          p.setBuyInDirectCallForSaleAgent(p.fbid, p.relatedFbid);\n        }\n        if (buttonIndex === 1) {\n          window.location.href = \"tel://\" + 66896696;\n        }\n        if (buttonIndex === 2) {\n          _this.props.store.app.passByRef = p;\n          _this.props.store.router.goTo(_views2.default.buyAgentForm, {\n            keyID: p.fbid,\n            typeTo: p.typeTo,\n            filterID: _this.props.filterID\n          });\n        }\n      });\n    };\n\n    _this.state = {\n      disabled: false,\n      selectedSegmentIndex: 0\n    };\n    return _this;\n  }\n\n  _createClass(SingleSaleAgentFitlerView, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      //const p = this.props;\n      //    const t = moment().format('YYYY-MM-DD HH:mm:ss');\n      //  this.props.property.realTime = moment( t );\n      this.props.property.setTimeStamp();\n\n      //    console.log( 'realTime will mount', this.props.property.realTime)\n    }\n\n    /**\r\n     * Implement ActionSheet which to handle multi actions\r\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var property = this.props.property;\n\n      var that = this;\n      //        const { getFieldProps } = this.props.form;\n\n      //onClick={() => MobxStore.router.goTo(views.leaseAgentForm, { keyID : property.fbid, typeTo : property.typeTo})}\n\n      // repair goTo by passing property\n      //MobxStore.app.lastProperty = property;\n\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(\n          Item,\n          {\n            extra: _react2.default.createElement(_badge2.default, { text: property.typeByFollowUpLabel }),\n            arrow: \"horizontal\",\n            onClick: function onClick() {\n              _mobxStore2.default.app.passByRef = property;\n\n              _mobxStore2.default.router.goTo(_views2.default.buyAgentForm, {\n                keyID: property.fbid,\n                typeTo: property.typeTo,\n                filterID: _this2.props.filterID\n              });\n            },\n\n            thumb: \"http://hair.losstreatment.com/icons/rent-up.svg\",\n            multipleLine: true\n          },\n          property.addressLocationLabel,\n          \"/\",\n          property.nameOfBuildingLabel,\n          \"/\",\n          property.contactNameLabel,\n          _react2.default.createElement(\n            Brief,\n            null,\n            property.partitionLabel,\n            property.salePriceLabel,\n            _react2.default.createElement(\"br\", null),\n            _react2.default.createElement(_badge2.default, {\n              text: property.isPetAllowedLabel,\n              style: {\n                marginLeft: 12,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 2\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.isViewAbleLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.levelLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByRoleName,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.roleName,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByRoleName,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.howFresh,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(\"br\", null),\n            _react2.default.createElement(_badge2.default, {\n              text: property.netSizeLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.dayListed,\n              style: {\n                marginLeft: 12,\n                padding: \"0 0.06rem\",\n                backgroundColor: \"#fff\",\n                borderRadius: 2,\n                color: \"#f19736\",\n                border: \"1px solid #f19736\"\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.isSaleWithLeaseLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(\"br\", null),\n            _react2.default.createElement(_badge2.default, {\n              text: property.dueDayLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            }),\n            _react2.default.createElement(_badge2.default, {\n              text: property.earlyTimeToViewLabel,\n              style: {\n                marginLeft: 6,\n                padding: \"0 0.06rem\",\n                backgroundColor: property.colorByFresh,\n                borderRadius: 5\n              }\n            })\n          ),\n          \"f:\",\n          property.fbid,\n          \" \",\n          _react2.default.createElement(\"br\", null),\n          \"r:\",\n          property.relatedFbid\n        ),\n        _react2.default.createElement(_whiteSpace2.default, { size: \"sm\" })\n      );\n    }\n  }]);\n\n  return SingleSaleAgentFitlerView;\n}(_react2.default.Component);\n\n// {/* <div>\n// <SwipeAction\n//   style={{ backgroundColor: 'gray' }}\n//   autoClose\n//   right={[\n//     {\n//       text: 'Cancel',\n//       onPress: () => console.log('cancel'),\n//       style: { backgroundColor: '#ddd', color: 'white' },\n//     },\n//     {\n//       text: 'Delete',\n//       onPress: () => console.log('delete'),\n//       style: { backgroundColor: '#F4333C', color: 'white' },\n//     },\n//   ]}\n//   left={[\n//     {\n//       text: 'Reply',\n//       onPress: () => console.log('reply'),\n//       style: { backgroundColor: '#108ee9', color: 'white' },\n//     },\n//     {\n//       text: 'Cancel',\n//       onPress: () => console.log('cancel'),\n//       style: { backgroundColor: '#ddd', color: 'white' },\n//     },\n//   ]}\n//   onOpen={() => console.log('global open')}\n//   onClose={() => console.log('global close')}\n// >\n// <Card full>\n//  <Badge text={'平'} corner>\n//   <Card.Header\n//     title={ property.contactNameLabel }\n//     thumb=\"http://via.placeholder.com/140x100\"\n//     extra={<div>尋找:{property.nameOfBuildingLabel}</div>}\n//   />\n//   </Badge>\n//   <Card.Body>\n//       <div>{property.leasePriceLabel}{property.isFreeForSevenDayLabel}{property.dueDayLabel}{property.hasHomeHardwareLabel}\n//       </div>\n//   </Card.Body>\n//   <Card.Footer content={<div><Button type=\"ghost\" inline size=\"small\">請打俾我</Button>\n//   <Button type=\"ghost\" inline size=\"small\">直接聯絡</Button></div>} extra={          <Flex style={{ marginBottom: '1rem' }}>\n//             <Badge text={property.roleName} style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: property.colorByRoleName, borderRadius: 2 }} />\n//             <Badge text={property.howFresh}  style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: property.colorByFresh, borderRadius: 2 }} />\n//             <Badge text={property.dayListed}\n//               style={{\n//                 marginLeft: 12,\n//                 padding: '0 0.06rem',\n//                 backgroundColor: '#fff',\n//                 borderRadius: 2,\n//                 color: '#f19736',\n//                 border: '1px solid #f19736',\n//               }}\n//             />\n//           </Flex>} />\n// </Card>\n// </SwipeAction>\n// <WhiteSpace size=\"sm\" />\n// </div> */}\n\n\nexports.default = SingleSaleAgentFitlerView;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/singlePropertyView/singleSaleAgentFilterView.js\n// module id = 764\n// module chunks = 8\n\n//# sourceURL=webpack:///./src/components/singlePropertyView/singleSaleAgentFilterView.js?")}});
webpackJsonp([3],{1282:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _css = __webpack_require__(34);\n\nvar _whiteSpace = __webpack_require__(33);\n\nvar _whiteSpace2 = _interopRequireDefault(_whiteSpace);\n\nvar _css2 = __webpack_require__(183);\n\nvar _noticeBar = __webpack_require__(182);\n\nvar _noticeBar2 = _interopRequireDefault(_noticeBar);\n\nvar _css3 = __webpack_require__(65);\n\nvar _icon = __webpack_require__(64);\n\nvar _icon2 = _interopRequireDefault(_icon);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class;\n// import moment from 'moment';\n// import 'moment/locale/zh-cn';\n\n//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'\n//import {SingleRentPropertyForMatchViewWrapper} from 'singleRentPropertyForMatchView'\n\n\n//import {ListOfMatchSalePropertys} from '../listOfMatch/listOfMatchSalePropertys'\n\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _rcForm = __webpack_require__(30);\n\nvar _userModelView = __webpack_require__(28);\n\nvar _agentModelView = __webpack_require__(122);\n\nvar _controlBuyView = __webpack_require__(1288);\n\nvar _listOfMatchOldSalePropertys = __webpack_require__(1295);\n\nvar _listOfMatchAgentSalePropertys = __webpack_require__(478);\n\nvar _listOfMatchAgentSalePropertys2 = _interopRequireDefault(_listOfMatchAgentSalePropertys);\n\nvar _mobxReact = __webpack_require__(21);\n\nvar _mobxStore = __webpack_require__(14);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// const Item = List.Item;\n// const Brief = Item.Brief;\n\n// const NameOfBuilding = [\n//   { value: 'MOSDBC', label: '迎海' },\n//   { value: 'MOSCTO', label: '第一城' },\n//   { value: 'MOSSSC', label: '新港城' },\n// ];\n\nvar MatchBuyPanelView = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(MatchBuyPanelView, _React$Component);\n\n  function MatchBuyPanelView(props) {\n    _classCallCheck(this, MatchBuyPanelView);\n\n    var _this = _possibleConstructorReturn(this, (MatchBuyPanelView.__proto__ || Object.getPrototypeOf(MatchBuyPanelView)).call(this, props));\n\n    _this.onChange = function (e) {\n      console.log('onChange in matchSalePanelView');\n      console.log('selectedIndex:' + e.nativeEvent.selectedSegmentIndex);\n      _this.setState({\n        selectedSegmentIndex: e.nativeEvent.selectedSegmentIndex\n      });\n    };\n\n    _this.renderList = function (property) {\n      if (_this.state.selectedSegmentIndex === 0) {\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(_listOfMatchAgentSalePropertys2.default, { segment: 'response', filter: property, propertys: property.responsedPropertys })\n        );\n      } else {\n        return _react2.default.createElement(_listOfMatchOldSalePropertys.ListOfMatchOldSalePropertys, { filter: property, inDirectCall: property.inDirectCall, propertys: property.matchedPropertys });\n      }\n    };\n\n    _this.renderNoticeBarMessage = function () {\n      if (_this.state.selectedSegmentIndex === 0) {\n        return _react2.default.createElement(\n          'div',\n          null,\n          '\\u7FA4\\u767C\\u4FE1\\u606F\\u73FE\\u6B63\\u958B\\u59CB: \\u4EE5\\u4E0B\\u662F HoMatching ... \\u8D85\\u65B0\\u9BAE\\u56DE\\u8986\\u8ACB\\u7B49\\u5F85!'\n        );\n      } else {\n        return _react2.default.createElement(\n          'div',\n          null,\n          '  \\u4EE5\\u4E0B\\u662F HoMatching \\u70BA\\u4F60\\u914D\\u5C0D\\u5605\\u5BA2!'\n        );\n      }\n    };\n\n    _this.state = {\n      disabled: false,\n      selectedSegmentIndex: 0\n    };\n    return _this;\n  }\n\n  // onValueChange = (value) => {\n  //   console.log(value);\n  // }\n  //  <ListOfMatchSalePropertys propertys={property.matchedPropertys} timeEnter={this.props.timeEnter}/>\n\n  _createClass(MatchBuyPanelView, [{\n    key: 'render',\n    value: function render() {\n      //        var property = propertys.propertys.get(this.props.keyID);\n      //        var property = propertys.propertys.get(\"-Kof2Ki5bbvt5MS2QJMG\");\n      var property = _userModelView.propertys.propertys.get(_mobxStore2.default.router.params.keyID);\n\n      //console.log( 'keyID', this.props.keyID )\n      // console.log( 'store.queryParams.keyID', store.router.queryParams.keyID )\n      console.log('store.params.keyID', _mobxStore2.default.router.params.keyID);\n\n      console.log('matchPanelView property', property);\n      // console.log( 'matchPanelView propertys.size', propertys.propertys.size )\n      // console.log( 'matchPanelView matched propertys', property.matchedPropertys.size)\n      // const that = this;\n      // const { getFieldProps } = this.props.form;\n      // const minDate = moment().locale('zh-cn').utcOffset(8);\n      // const maxDate = moment(minDate).add(6, 'M');\n      if (_userModelView.propertys === undefined) {\n        console.log('check error in userModelView without reference after has been modified');\n      }\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_controlBuyView.ControlBuyViewWrapper, { property: property, selectedIndex: this.state.selectedSegmentIndex, onChange: this.onChange.bind(this) }),\n        _react2.default.createElement(\n          _noticeBar2.default,\n          { mode: 'closable', icon: _react2.default.createElement(_icon2.default, { type: 'check-circle-o', size: 'xxs' }) },\n          this.renderNoticeBarMessage()\n        ),\n        _react2.default.createElement(\n          _noticeBar2.default,\n          { mode: 'closable', icon: _react2.default.createElement(_icon2.default, { type: 'check-circle-o', size: 'xxs' }) },\n          '\\u6240\\u6709\\u67E5\\u8A62\\u5373\\u6642\\u56DE\\u8986! \\u4FDD\\u8B49\\u6700\\u65B0\\u9BAE...'\n        ),\n        _react2.default.createElement(_whiteSpace2.default, { size: 'sm' }),\n        this.renderList(property)\n      );\n    }\n  }]);\n\n  return MatchBuyPanelView;\n}(_react2.default.Component)) || _class;\n// <ListOfMatchPropertys propertys={property.matchedPropertys} />\n// export const MatchBuyPanelViewWrapper = createForm()(MatchBuyPanelView);\n\n\nexports.default = MatchBuyPanelView;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/matchPanel/matchBuyPanelView.js\n// module id = 1282\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/components/matchPanel/matchBuyPanelView.js?")},1288:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.ControlBuyViewWrapper = undefined;\n\nvar _css = __webpack_require__(34);\n\nvar _whiteSpace = __webpack_require__(33);\n\nvar _whiteSpace2 = _interopRequireDefault(_whiteSpace);\n\nvar _css2 = __webpack_require__(84);\n\nvar _datePicker = __webpack_require__(83);\n\nvar _datePicker2 = _interopRequireDefault(_datePicker);\n\nvar _css3 = __webpack_require__(146);\n\nvar _stepper = __webpack_require__(145);\n\nvar _stepper2 = _interopRequireDefault(_stepper);\n\nvar _css4 = __webpack_require__(474);\n\nvar _segmentedControl = __webpack_require__(473);\n\nvar _segmentedControl2 = _interopRequireDefault(_segmentedControl);\n\nvar _css5 = __webpack_require__(18);\n\nvar _list = __webpack_require__(22);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class;\n//import {propertys} from \'userModelView\'\n\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _rcForm = __webpack_require__(30);\n\nvar _moment = __webpack_require__(23);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\n__webpack_require__(70);\n\nvar _firebaseStore = __webpack_require__(41);\n\nvar _mobxReact = __webpack_require__(21);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Item = _list2.default.Item;\nvar Brief = Item.Brief;\n\n// const NameOfBuilding = [\n//   { value: \'MOSDBC\', label: \'迎海\' },\n//   { value: \'MOSCTO\', label: \'第一城\' },\n//   { value: \'MOSSSC\', label: \'新港城\' },\n// ];\n\nvar ControlBuyView = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(ControlBuyView, _React$Component);\n\n  function ControlBuyView(props) {\n    _classCallCheck(this, ControlBuyView);\n\n    // property = propertys.propertys.get(this.props.keyID);\n    // console.log(\'p\', property)\n    // console.log(\'p.nameOfBuilding\', property.nameOfBuilding)\n\n    var _this = _possibleConstructorReturn(this, (ControlBuyView.__proto__ || Object.getPrototypeOf(ControlBuyView)).call(this, props));\n\n    _this.state = {\n      disabled: false,\n      selectedSegmentIndex: 0\n    };\n    return _this;\n  }\n\n  _createClass(ControlBuyView, [{\n    key: "render",\n    value: function render() {\n      var property = this.props.property;\n\n\n      var that = this;\n      var getFieldProps = this.props.form.getFieldProps;\n      // For DatePicker\n\n      var minDate = (0, _moment2.default)().locale("zh-cn").utcOffset(8);\n      var maxDate = (0, _moment2.default)(minDate).add(6, "M");\n\n      // console.log( \'SingleLeaseProperty property\', this.props.property )\n\n      console.log("ControlBuyView fbid " + property.fbid + ", matched.size " + property.matchedPropertys.size);\n      var selectedIndex = this.props.selectedIndex;\n      var onChange = this.props.onChange;\n\n      // <Picker data={NameOfBuilding} cols={1} {...getFieldProps(\'nameOfBuilding\', {\n      //     initialValue: [property.nameOfBuilding],\n      //   })} className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑">\n      //   <List.Item arrow="horizontal">購買物業</List.Item>\n      // </Picker>\n\n      return _react2.default.createElement(\n        "div",\n        null,\n        _react2.default.createElement(_segmentedControl2.default, {\n          values: ["地產經紀-即時回覆", "業主-配對"],\n          selectedIndex: this.props.selectedIndex,\n          onChange: onChange\n        }),\n        _react2.default.createElement(\n          _list2.default,\n          null,\n          _react2.default.createElement(\n            _list2.default.Item,\n            { arrow: "empty", extra: property.nameOfBuildingLabel },\n            "\\u8CB7\\u7269\\u696D"\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(_stepper2.default, _extends({\n                style: { width: "100%", minWidth: "2rem" }\n              }, getFieldProps("buyBudgetMax", {\n                initialValue: property.buyBudgetMax\n              }), {\n                showNumber: true,\n                max: 100000,\n                min: 100,\n                step: 5\n              }))\n            },\n            "\\u9810\\u7B97\\u4E0A\\u9650/\\u842C"\n          ),\n          _react2.default.createElement(\n            _datePicker2.default,\n            _extends({\n              mode: "date",\n              title: "\\u9078\\u64C7\\u65E5\\u671F",\n              extra: "\\u9078\\u64C7\\u65E5\\u671F,\\u6700\\u9577\\u534A\\u5E74\\u4F86"\n            }, getFieldProps("earlyTimeToView", {\n              initialValue: (0, _moment2.default)(property.earlyTimeToView)\n            }), {\n              minDate: minDate,\n              maxDate: maxDate\n            }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: "horizontal" },\n              "\\u6700\\u5FEB\\u5E7E\\u6642\\u6709\\u6A13\\u7747"\n            )\n          )\n        ),\n        _react2.default.createElement(_whiteSpace2.default, { size: "sm" })\n      );\n    }\n  }]);\n\n  return ControlBuyView;\n}(_react2.default.Component)) || _class;\n//       <SegmentedControl tintColor={\'#ff0000\'} values={[\'最貴\', \'最平\', \'最快\', \'最滿意\']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />\n\nvar ControlBuyViewWrapper = exports.ControlBuyViewWrapper = (0, _rcForm.createForm)()(ControlBuyView);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/control/controlBuyView.js\n// module id = 1288\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/components/control/controlBuyView.js?')},1295:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.ListOfMatchOldSalePropertys = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dec, _class;\n//import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from \'antd-mobile\';\n//import { createForm } from \'rc-form\';\n//import moment from "moment";\n//import \'moment/locale/zh-cn\';\n//import {propertys} from \'userModelView\'\n//import SingleSalePropertyForMatchView from \'../singlePropertyView/singleSalePropertyForMatchView\'\n\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _singleSaleUserMatchView = __webpack_require__(482);\n\nvar _mobxReact = __webpack_require__(21);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//const Item = List.Item;\n//const Brief = Item.Brief;\n\n\nvar ListOfMatchOldSalePropertys = exports.ListOfMatchOldSalePropertys = (_dec = (0, _mobxReact.inject)("store"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(ListOfMatchOldSalePropertys, _React$Component);\n\n  function ListOfMatchOldSalePropertys(props) {\n    _classCallCheck(this, ListOfMatchOldSalePropertys);\n\n    var _this = _possibleConstructorReturn(this, (ListOfMatchOldSalePropertys.__proto__ || Object.getPrototypeOf(ListOfMatchOldSalePropertys)).call(this, props));\n\n    _this.display = function (propertys) {\n      var list = propertys;\n      // Catched empty list, don\'t do anything!\n      if (list.size === 0) {\n        return null;\n      }\n\n      //const timeEnter = this.props.timeEnter;\n      // Try to show most uptoday item only\n      var element = [];\n      //           <SingleSalePropertyForMatchView property={property} key={keyID} timeEnter={timeEnter}/>\n      //           <SingleSaleAgentPropertyForRespondView property={property} key={keyID} timeEnter={timeEnter}/>\n\n      list.forEach(function (property, keyID) {\n        var status = _this.props.inDirectCall.get(keyID);\n        // console.log( \'this.props.store.router.params.keyID\',this.props.store.router.params.keyID )\n        // let showPhone = false;\n        // if (status) {\n        //   console.log("call ", status.isShowPhone);\n        //   showPhone = status.isShowPhone;\n        // }\n        // if ( status === undefined ) {\n        //    status = new Status( this., 0, false)\n        // }\n\n        //     debugger\n        element.push(_react2.default.createElement(_singleSaleUserMatchView.SingleSaleUserMatchViewWrapper, {\n          filter: _this.props.filter,\n          status: status,\n          property: property,\n          key: keyID\n        }));\n      });\n\n      return _react2.default.createElement(\n        "div",\n        null,\n        element.reverse()\n      );\n    };\n\n    return _this;\n  }\n\n  _createClass(ListOfMatchOldSalePropertys, [{\n    key: "render",\n    value: function render() {\n      var propertys = this.props.propertys;\n\n      var that = this;\n\n      return _react2.default.createElement(\n        "div",\n        null,\n        that.display(propertys)\n      );\n    }\n\n    // render() {\n    //   const { propertys } = this.props;\n    //   const that = this;\n\n    //   return <div>{that.display(propertys)}</div>;\n    // }\n\n  }]);\n\n  return ListOfMatchOldSalePropertys;\n}(_react2.default.Component)) || _class) || _class);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/listOfMatch/listOfMatchOldSalePropertys.js\n// module id = 1295\n// module chunks = 3\n\n//# sourceURL=webpack:///./src/components/listOfMatch/listOfMatchOldSalePropertys.js?')}});
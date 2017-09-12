webpackJsonp([7],{1280:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _css = __webpack_require__(72);\n\nvar _button = __webpack_require__(71);\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _css2 = __webpack_require__(43);\n\nvar _switch = __webpack_require__(42);\n\nvar _switch2 = _interopRequireDefault(_switch);\n\nvar _css3 = __webpack_require__(84);\n\nvar _datePicker = __webpack_require__(83);\n\nvar _datePicker2 = _interopRequireDefault(_datePicker);\n\nvar _css4 = __webpack_require__(88);\n\nvar _inputItem = __webpack_require__(87);\n\nvar _inputItem2 = _interopRequireDefault(_inputItem);\n\nvar _css5 = __webpack_require__(66);\n\nvar _picker = __webpack_require__(73);\n\nvar _picker2 = _interopRequireDefault(_picker);\n\nvar _css6 = __webpack_require__(18);\n\nvar _list = __webpack_require__(22);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _css7 = __webpack_require__(86);\n\nvar _checkbox = __webpack_require__(85);\n\nvar _checkbox2 = _interopRequireDefault(_checkbox);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _rcForm = __webpack_require__(30);\n\nvar _MTR = __webpack_require__(89);\n\nvar _PARTITION = __webpack_require__(90);\n\nvar _DISTRICK = __webpack_require__(59);\n\nvar _firebaseStore = __webpack_require__(41);\n\nvar _property = __webpack_require__(60);\n\nvar _moment = __webpack_require__(23);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\n__webpack_require__(70);\n\nvar _mobxStore = __webpack_require__(14);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _views = __webpack_require__(16);\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _LEVEL = __webpack_require__(281);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// 如果不是使用 List.Item 作为 children\nvar CustomChildren = function CustomChildren(props) {\n  return _react2.default.createElement(\n    "div",\n    {\n      onClick: props.onClick,\n      style: { backgroundColor: "#fff", padding: "0 0.3rem" }\n    },\n    _react2.default.createElement(\n      "div",\n      { style: { display: "flex", height: "0.9rem", lineHeight: "0.9rem" } },\n      _react2.default.createElement(\n        "div",\n        {\n          style: {\n            flex: 1,\n            overflow: "hidden",\n            textOverflow: "ellipsis",\n            whiteSpace: "nowrap"\n          }\n        },\n        props.children\n      ),\n      _react2.default.createElement(\n        "div",\n        { style: { textAlign: "right", color: "#888" } },\n        props.extra\n      )\n    )\n  );\n};\n\n// const NameOfBuilding = [\n//   { value: \'MOSDBC\', label: \'迎海\' },\n//   { value: \'MOSCTO\', label: \'第一城\' },\n//   { value: \'MOSSSC\', label: \'新港城\' },\n// ];\n\nvar CheckboxItem = _checkbox2.default.CheckboxItem;\n\nvar roomKey = {\n  "0": "開放式",\n  "1": "1房",\n  "2": "2房",\n  "3": "3房",\n  "4": "4房",\n  "5": "5房"\n};\n\nvar FormSalePropertyAntMobile = function (_React$Component) {\n  _inherits(FormSalePropertyAntMobile, _React$Component);\n\n  function FormSalePropertyAntMobile() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, FormSalePropertyAntMobile);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormSalePropertyAntMobile.__proto__ || Object.getPrototypeOf(FormSalePropertyAntMobile)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      data: [],\n      cols: 1,\n      //pickerValue: [],\n      asyncValue: [],\n      sValue: ["2001", "3001"],\n\n      // input net size\n      netSizefocused: false\n    }, _this.onClick = function () {\n      setTimeout(function () {\n        _this.setState({\n          data: province\n        });\n      }, 120);\n    }, _this.addPropertyForSale = function (v) {\n      var p = new _property.Property();\n      var id;\n      // p.nearByMtrLine = nearByMtrLine;\n      // p.nearByMtrStop = nearByMtrStop;\n      //p.uid = MobxStore.app.uid;\n\n      p.addressRegion = v.districk[0];\n      p.addressLocation = v.districk[1];\n      p.nameOfBuilding = v.districk[2];\n\n      // p.dueDay = v.dueDay.toJSON();\n      p.earlyTimeToView = v.earlyTimeToView.toJSON();\n      //p.leasePrice = parseInt(v.leasePrice);\n      p.netSize = parseInt(v.netSize);\n      p.salePrice = parseInt(v.salePrice);\n      p.numOfRoom = parseInt(v.partition[0]);\n      p.numOfBathroom = parseInt(v.partition[1]);\n      p.numOfLivingroom = parseInt(v.partition[2]);\n      p.isSaleWithLease = v.isSaleWithLease;\n      // p.isNegotiable = v.isNegotiable;\n      p.isViewAble = v.isViewAble;\n\n      //p.isPreferPayAnnually = v.isPreferPayAnnually;\n      //p.isRentAbleNow = v.isRentAbleNow;\n      //p.isFreeForSevenDay = v.isFreeForSevenDay;\n\n      // p.hasHomeHardware = v.hasHomeHardware;\n      p.contactName = v.contactName;\n      p.contactPhone = parseInt(v.contactPhone);\n      p.contactEmail = v.contactEmail;\n\n      p.level = v.level[0];\n      p.isPetAllowed = v.isPetAllowed;\n\n      // Catch none user syn method wait to be true\n      if (_mobxStore2.default.app.uid === null) {\n        if (_firebaseStore.Fb.startLoginAnonyhmously()) {\n          id = _firebaseStore.Fb.app.usersRef.push().key;\n        }\n      } else {\n        id = _firebaseStore.Fb.app.usersRef.push().key;\n      }\n      p.uid = _mobxStore2.default.app.uid;\n      p.typeFor = "buy";\n      p.typeTo = "sale";\n      p.fbid = id;\n      _firebaseStore.Fb.app.usersRef.update(_defineProperty({}, id, p.serialize()));\n\n      //    const id2 = Fb.propertys.push().key;\n      _firebaseStore.Fb.propertys.child(id).set(p.serialize());\n\n      _firebaseStore.Fb.sale.child(id).set(p.serialize());\n\n      _mobxStore2.default.router.goTo(_views2.default.matchSale, { keyID: id });\n    }, _this.submit = function (e) {\n      var value = _this.props.form.getFieldsValue();\n\n      e.preventDefault();\n      //  console.log( \'地鐵線\', value.MTR )\n      //  console.log( \'呎\', value.netSize)\n      //  console.log( \'售價\', value.salePrice )\n      //  console.log( \'Name\', value.contactName )\n      //  console.log( \'email\', value.contactEmail )\n      //  console.log( \'手 機\', value.contactPhone )\n      //  console.log( \'間隔\', roomKey[value.room[0]] )\n\n      _this.addPropertyForSale(value);\n      //   MobxStore.router.goTo( views.second )\n\n      //   console.log(this.props.form.getFieldsValue());\n    }, _this.sale = function () {}, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n  //\n  // onPickerChange = (val) => {\n  //   console.log(val);\n  //   let colNum = 1;\n  //   const d = [...this.state.data];\n  //   const asyncValue = [...val];\n  //   if (val[0] === \'zj\') {\n  //     d.forEach((i) => {\n  //       if (i.value === \'zj\') {\n  //         colNum = 2;\n  //         if (!i.children) {\n  //           i.children = [{\n  //             value: \'zj-nb\',\n  //             label: \'宁波\',\n  //           }, {\n  //             value: \'zj-hz\',\n  //             label: \'杭州\',\n  //           }];\n  //           asyncValue.push(\'zj-nb\');\n  //         } else if (val[1] === \'zj-hz\') {\n  //           i.children.forEach((j) => {\n  //             if (j.value === \'zj-hz\') {\n  //               j.children = [{\n  //                 value: \'zj-hz-xh\',\n  //                 label: \'西湖区\',\n  //               }];\n  //               asyncValue.push(\'zj-hz-xh\');\n  //             }\n  //           });\n  //           colNum = 3;\n  //         }\n  //       }\n  //     });\n  //   } else {\n  //     colNum = 1;\n  //   }\n  //   this.setState({\n  //     data: d,\n  //     cols: colNum,\n  //     asyncValue,\n  //   });\n  // };\n\n  _createClass(FormSalePropertyAntMobile, [{\n    key: "render",\n\n\n    // \'房東\', \'租人\',\'賣家\',\'買家\'\n    value: function render() {\n      var _this2 = this;\n\n      var getFieldProps = this.props.form.getFieldProps;\n\n      // For DatePicker\n\n      var minDate = (0, _moment2.default)().locale("zh-cn").utcOffset(8);\n      var maxDate = (0, _moment2.default)(minDate).add(6, "M");\n\n      return _react2.default.createElement(\n        "div",\n        null,\n        _react2.default.createElement(\n          _list2.default,\n          { style: { backgroundColor: "white" }, className: "picker-list" },\n          _react2.default.createElement(\n            _picker2.default,\n            _extends({\n              data: _DISTRICK.DISTRICK,\n              cols: 3\n            }, getFieldProps("districk", {\n              initialValue: ["NTTV", "MOS", "MOS0001"]\n            }), {\n              className: "forss",\n              title: "\\u8ACB\\u9078\\u64C7\\u5927\\u5EC8/\\u5C4B\\u82D1",\n              extra: "\\u8ACB\\u9078\\u64C7\\u5927\\u5EC8/\\u5C4B\\u82D1"\n            }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: "horizontal" },\n              "\\u5927\\u5EC8/\\u5C4B\\u82D1"\n            )\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps("netSize", {\n              initialValue: 300,\n              normalize: function normalize(v, prev) {\n                if (v && !/^(([1-9]\\d*)|0)(\\.\\d{0,2}?)?$/.test(v)) {\n                  if (v === ".") {\n                    return "0.";\n                  }\n                  return prev;\n                }\n                return v;\n              }\n            }), {\n              type: "number",\n              placeholder: "0",\n              onFocus: function onFocus() {\n                _this2.setState({\n                  netSizefocused: false\n                });\n              },\n              focused: this.state.netSizefocused,\n              clear: true,\n              extra: "\\u544E"\n            }),\n            "\\u5BE6\\u7528 \\u9762 \\u7A4D"\n          ),\n          _react2.default.createElement(\n            _datePicker2.default,\n            _extends({\n              mode: "date",\n              title: "\\u9078\\u64C7\\u65E5\\u671F",\n              extra: "\\u9078\\u64C7\\u65E5\\u671F,\\u6700\\u9577\\u534A\\u5E74\\u4F86"\n            }, getFieldProps("earlyTimeToView", {\n              initialValue: minDate\n            }), {\n              minDate: minDate,\n              maxDate: maxDate\n            }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: "horizontal" },\n              "\\u6700\\u5FEB\\u5E7E\\u6642\\u6709\\u6A13\\u7747"\n            )\n          ),\n          _react2.default.createElement(\n            _picker2.default,\n            _extends({\n              data: _PARTITION.PARTITION,\n              cols: 3,\n              title: "\\u9078\\u64C7\\u9593\\u9694",\n              cascade: false\n            }, getFieldProps("partition", {\n              initialValue: ["0", "1", "1"]\n            }), {\n              extra: "\\u9078\\u64C7\\u9593\\u9694",\n              onOk: function onOk(e) {\n                return console.log("ok", e);\n              },\n              onDismiss: function onDismiss(e) {\n                return console.log("dismiss", e);\n              }\n            }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: "horizontal" },\n              "\\u9593\\u9694"\n            )\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(_switch2.default, _extends({}, getFieldProps("isPetAllowed", {\n                initialValue: false,\n                valuePropName: "checked"\n              }), {\n                onClick: function onClick(checked) {\n                  console.log(checked);\n                }\n              }))\n            },\n            "\\u53EF\\u990A\\u5BF5\\u7269"\n          ),\n          _react2.default.createElement(\n            _picker2.default,\n            _extends({ data: _LEVEL.LEVEL,\n              cols: 1,\n              title: "\\u9078\\u64C7\\u5C64\\u6578",\n              cascade: false\n            }, getFieldProps(\'level\', {\n              initialValue: [\'1\']\n            }), {\n              extra: "\\u9078\\u64C7\\u5C64\\u6578",\n              onOk: function onOk(e) {\n                return console.log(\'ok\', e);\n              },\n              onDismiss: function onDismiss(e) {\n                return console.log(\'dismiss\', e);\n              }\n            }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: "horizontal" },\n              "\\u5C64\\u6578"\n            )\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps("salePrice", {\n              initialValue: 350,\n              normalize: function normalize(v, prev) {\n                if (v && !/^(([1-9]\\d*)|0)(\\.\\d{0,2}?)?$/.test(v)) {\n                  if (v === ".") {\n                    return "0.";\n                  }\n                  return prev;\n                }\n                return v;\n              }\n            }), {\n              type: "number",\n              placeholder: "\\u8ACB\\u6C42\\u5165\\u5834\\u50F9\\u683C/\\u6BCF\\u842C",\n              onFocus: function onFocus() {\n                _this2.setState({\n                  netSizefocused: false\n                });\n              },\n              focused: this.state.netSizefocused,\n              clear: true,\n              extra: "\\u842C\\u5143"\n            }),\n            "\\u552E\\u50F9"\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(_switch2.default, _extends({}, getFieldProps("isSaleWithLease", {\n                initialValue: false,\n                valuePropName: "checked"\n              }), {\n                onClick: function onClick(checked) {\n                  console.log(checked);\n                }\n              }))\n            },\n            "\\u51FA\\u552E\\u9023\\u79DF\\u8CC3"\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(_switch2.default, _extends({}, getFieldProps("isViewAble", {\n                initialValue: true,\n                valuePropName: "checked"\n              }), {\n                onClick: function onClick(checked) {\n                  console.log(checked);\n                }\n              }))\n            },\n            "\\u6709\\u6A13\\u7747"\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps("contactName", {\n              initialValue: "Jeff Chan"\n            }), {\n              type: "text",\n              placeholder: "\\u8ACB\\u8F38\\u5165\\u59D3\\u540D",\n              clear: true\n            }),\n            "\\u59D3\\u540D"\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({\n              clear: true\n            }, getFieldProps("contactPhone", {\n              initialValue: "66958844"\n            }), {\n              type: "phone",\n              placeholder: "\\u8ACB\\u8F38\\u5165\\u96FB\\u8A71"\n            }),\n            "\\u806F\\u7D61\\u624B\\u6A5F"\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps("contactEmail", {\n              initialValue: "h004@ymatchx.com"\n            }), {\n              clear: true,\n              placeholder: "\\u8ACB\\u8F38\\u5165\\u96FB\\u90F5\\u5730\\u5740"\n            }),\n            "\\u806F\\u7D61\\u96FB\\u90F5"\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(\n                _button2.default,\n                { type: "ghost", size: "large", inline: true, onClick: this.submit },\n                "\\u7372\\u5F97\\u5339\\u914D"\n              ),\n              multipleLine: true\n            },\n            "HoMatching",\n            _react2.default.createElement(\n              _list2.default.Item.Brief,\n              null,\n              "\\u5C0A\\u91CD\\u60A8\\u7684\\u79C1\\u96B1\\u548C\\u4FE1\\u606F\\uFF0C\\u4E0D\\u6703\\u88AB\\u5171\\u4EAB\\u3002"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return FormSalePropertyAntMobile;\n}(_react2.default.Component);\n\nexports.default = (0, _rcForm.createForm)()(FormSalePropertyAntMobile);\n\n// ReactDOM.render(<TestWrapper />, mountNode);\n// .picker-list .am-list-item .am-list-line .am-list-extra {\n//   flex-basis: initial;\n// }\n\n// <Card>\n//    <Button type="primary"></Button>\n//    <Card.Header\n//      title="Doube Cove"\n//      thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"\n//      extra={<span>Ask Price</span>}\n//    />\n//    <Card.Body>\n//\n//       <img src="http://semantic-ui.com/images/wireframe/image.png" style={{ width: \'200px\', float : \'left\' , align : \'left\'}} alt="double cove"/>\n//       <List renderHeader={() => \'基本样式\'} className="my-list">\n// <List.Item extra={\'内容内容\'}>标题文字</List.Item>\n// </List>\n// <br style={{ clear: \'both\' }} />\n//\n//    </Card.Body>\n//    <Card.Footer content={<Button type="ghost" inline size="small">Hello</Button>} extra={<h3>$300萬元</h3>} />\n//  </Card>\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/form/formSalePropertyAntMobile.js\n// module id = 1280\n// module chunks = 7\n\n//# sourceURL=webpack:///./src/components/form/formSalePropertyAntMobile.js?')}});
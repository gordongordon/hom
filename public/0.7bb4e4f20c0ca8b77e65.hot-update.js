webpackHotUpdate(0,{

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FormSalePropertyAntMobileWrapper = undefined;\n\nvar _css = __webpack_require__(857);\n\nvar _button = __webpack_require__(860);\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _css2 = __webpack_require__(885);\n\nvar _switch = __webpack_require__(888);\n\nvar _switch2 = _interopRequireDefault(_switch);\n\nvar _css3 = __webpack_require__(889);\n\nvar _datePicker = __webpack_require__(896);\n\nvar _datePicker2 = _interopRequireDefault(_datePicker);\n\nvar _css4 = __webpack_require__(921);\n\nvar _inputItem = __webpack_require__(924);\n\nvar _inputItem2 = _interopRequireDefault(_inputItem);\n\nvar _css5 = __webpack_require__(890);\n\nvar _picker = __webpack_require__(929);\n\nvar _picker2 = _interopRequireDefault(_picker);\n\nvar _css6 = __webpack_require__(559);\n\nvar _list = __webpack_require__(562);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _css7 = __webpack_require__(935);\n\nvar _checkbox = __webpack_require__(938);\n\nvar _checkbox2 = _interopRequireDefault(_checkbox);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _rcForm = __webpack_require__(565);\n\nvar _MTR = __webpack_require__(950);\n\nvar _PARTITION = __webpack_require__(951);\n\nvar _DISTRICK = __webpack_require__(953);\n\nvar _firebaseStore = __webpack_require__(789);\n\nvar _property = __webpack_require__(793);\n\nvar _moment = __webpack_require__(671);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\n__webpack_require__(785);\n\nvar _mobxStore = __webpack_require__(295);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _views = __webpack_require__(527);\n\nvar _views2 = _interopRequireDefault(_views);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// 如果不是使用 List.Item 作为 children\nvar CustomChildren = function CustomChildren(props) {\n  return _react2.default.createElement(\n    'div',\n    {\n      onClick: props.onClick,\n      style: { backgroundColor: '#fff', padding: '0 0.3rem' }\n    },\n    _react2.default.createElement(\n      'div',\n      { style: { display: 'flex', height: '0.9rem', lineHeight: '0.9rem' } },\n      _react2.default.createElement(\n        'div',\n        { style: { flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },\n        props.children\n      ),\n      _react2.default.createElement(\n        'div',\n        { style: { textAlign: 'right', color: '#888' } },\n        props.extra\n      )\n    )\n  );\n};\n\nvar NameOfBuilding = [{ value: 'MOSDBC', label: '迎海' }, { value: 'MOSCTO', label: '第一城' }, { value: 'MOSSSC', label: '新港城' }];\n\nvar CheckboxItem = _checkbox2.default.CheckboxItem;\n\nvar roomKey = {\n  '0': '開放式',\n  '1': '1房',\n  '2': '2房',\n  '3': '3房',\n  '4': '4房',\n  '5': '5房'\n};\n\nvar FormSalePropertyAntMobile = function (_React$Component) {\n  _inherits(FormSalePropertyAntMobile, _React$Component);\n\n  function FormSalePropertyAntMobile() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, FormSalePropertyAntMobile);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormSalePropertyAntMobile.__proto__ || Object.getPrototypeOf(FormSalePropertyAntMobile)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      data: [],\n      cols: 1,\n      //pickerValue: [],\n      asyncValue: [],\n      sValue: ['2001', '3001'],\n\n      // input net size\n      netSizefocused: false\n    }, _this.onClick = function () {\n      setTimeout(function () {\n        _this.setState({\n          data: province\n        });\n      }, 120);\n    }, _this.onPickerChange = function (val) {\n      console.log(val);\n      var colNum = 1;\n      var d = [].concat(_toConsumableArray(_this.state.data));\n      var asyncValue = [].concat(_toConsumableArray(val));\n      if (val[0] === 'zj') {\n        d.forEach(function (i) {\n          if (i.value === 'zj') {\n            colNum = 2;\n            if (!i.children) {\n              i.children = [{\n                value: 'zj-nb',\n                label: '宁波'\n              }, {\n                value: 'zj-hz',\n                label: '杭州'\n              }];\n              asyncValue.push('zj-nb');\n            } else if (val[1] === 'zj-hz') {\n              i.children.forEach(function (j) {\n                if (j.value === 'zj-hz') {\n                  j.children = [{\n                    value: 'zj-hz-xh',\n                    label: '西湖区'\n                  }];\n                  asyncValue.push('zj-hz-xh');\n                }\n              });\n              colNum = 3;\n            }\n          }\n        });\n      } else {\n        colNum = 1;\n      }\n      _this.setState({\n        data: d,\n        cols: colNum,\n        asyncValue: asyncValue\n      });\n    }, _this.addPropertyForSale = function (v) {\n      var p = new _property.Property();\n      var id;\n      // p.nearByMtrLine = nearByMtrLine;\n      // p.nearByMtrStop = nearByMtrStop;\n      //p.uid = MobxStore.app.uid;\n\n      p.nameOfBuilding = v.nameOfBuilding[0];\n      // p.dueDay = v.dueDay.toJSON();\n      p.earlyTimeToView = v.earlyTimeToView.toJSON();\n      //p.leasePrice = parseInt(v.leasePrice);\n      p.netSize = parseInt(v.netSize);\n      p.salePrice = parseInt(v.salePrice);\n      p.numOfRoom = parseInt(v.partition[0]);\n      p.numOfBathroom = parseInt(v.partition[1]);\n      p.numOfLivingroom = parseInt(v.partition[2]);\n      p.isSaleWIthLease = v.isSaleWIthLease;\n      p.isNegotiable = v.isNegotiable;\n      p.isViewAble = v.isViewAble;\n\n      //p.isPreferPayAnnually = v.isPreferPayAnnually;\n      //p.isRentAbleNow = v.isRentAbleNow;\n      //p.isFreeForSevenDay = v.isFreeForSevenDay;\n\n      // p.hasHomeHardware = v.hasHomeHardware;\n      p.contactName = v.contactName;\n      p.contactPhone = parseInt(v.contactPhone);\n      p.contactEmail = v.contactEmail;\n\n      // Catch none user syn method wait to be true\n      if (_mobxStore2.default.app.uid === null) {\n        if (_firebaseStore.Fb.startLoginAnonyhmously()) {\n          id = _firebaseStore.Fb.app.usersRef.push().key;\n        }\n      } else {\n        id = _firebaseStore.Fb.app.usersRef.push().key;\n      }\n      p.uid = _mobxStore2.default.app.uid;\n      p.typeFor = \"buy\";\n      p.typeTo = \"sale\";\n      p.fbid = id;\n      _firebaseStore.Fb.app.usersRef.update(_defineProperty({}, id, p.serialize()));\n\n      //    const id2 = Fb.propertys.push().key;\n      _firebaseStore.Fb.propertys.child(id).set(p.serialize());\n\n      _mobxStore2.default.router.goTo(_views2.default.matchSale, { keyID: id });\n    }, _this.submit = function (e) {\n      var value = _this.props.form.getFieldsValue();\n\n      e.preventDefault();\n      //  console.log( '地鐵線', value.MTR )\n      //  console.log( '呎', value.netSize)\n      //  console.log( '售價', value.salePrice )\n      //  console.log( 'Name', value.contactName )\n      //  console.log( 'email', value.contactEmail )\n      //  console.log( '手 機', value.contactPhone )\n      //  console.log( '間隔', roomKey[value.room[0]] )\n\n      _this.addPropertyForSale(value);\n      //   MobxStore.router.goTo( views.second )\n\n      //   console.log(this.props.form.getFieldsValue());\n    }, _this.sale = function () {}, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(FormSalePropertyAntMobile, [{\n    key: 'render',\n\n\n    // '房東', '租人','賣家','買家'\n    value: function render() {\n      var _this2 = this;\n\n      var getFieldProps = this.props.form.getFieldProps;\n\n      // For DatePicker\n\n      var minDate = (0, _moment2.default)().locale('zh-cn').utcOffset(8);\n      var maxDate = (0, _moment2.default)(minDate).add(6, 'M');\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _list2.default,\n          { style: { backgroundColor: 'white' }, className: 'picker-list' },\n          _react2.default.createElement(\n            _picker2.default,\n            _extends({ data: _DISTRICK.DISTRICK, cols: 3 }, getFieldProps('districk', {\n              initialValue: ['NTTV', 'MOS', 'MOS0001']\n            }), { className: 'forss', title: '\\u8ACB\\u9078\\u64C7\\u5927\\u5EC8/\\u5C4B\\u82D1', extra: '\\u8ACB\\u9078\\u64C7\\u5927\\u5EC8/\\u5C4B\\u82D1' }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: 'horizontal' },\n              '\\u5927\\u5EC8/\\u5C4B\\u82D1'\n            )\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps('netSize', {\n              initialValue: 300,\n              normalize: function normalize(v, prev) {\n                if (v && !/^(([1-9]\\d*)|0)(\\.\\d{0,2}?)?$/.test(v)) {\n                  if (v === '.') {\n                    return '0.';\n                  }\n                  return prev;\n                }\n                return v;\n              }\n            }), {\n              type: 'number',\n              placeholder: '0',\n              onFocus: function onFocus() {\n                _this2.setState({\n                  netSizefocused: false\n                });\n              },\n              focused: this.state.netSizefocused,\n              clear: true,\n              extra: '\\u544E'\n            }),\n            '\\u5BE6\\u7528 \\u9762 \\u7A4D'\n          ),\n          _react2.default.createElement(\n            _datePicker2.default,\n            _extends({\n              mode: 'date',\n              title: '\\u9078\\u64C7\\u65E5\\u671F',\n              extra: '\\u9078\\u64C7\\u65E5\\u671F,\\u6700\\u9577\\u534A\\u5E74\\u4F86'\n            }, getFieldProps('earlyTimeToView', {\n              initialValue: minDate\n            }), {\n              minDate: minDate,\n              maxDate: maxDate\n            }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: 'horizontal' },\n              '\\u6700\\u5FEB\\u5E7E\\u6642\\u6709\\u6A13\\u7747'\n            )\n          ),\n          _react2.default.createElement(\n            _picker2.default,\n            _extends({ data: _PARTITION.PARTITION,\n              cols: 3,\n              title: '\\u9078\\u64C7\\u9593\\u9694',\n              cascade: false\n            }, getFieldProps('partition', {\n              initialValue: ['0', '1', '1']\n            }), {\n              extra: '\\u9078\\u64C7\\u9593\\u9694',\n              onOk: function onOk(e) {\n                return console.log('ok', e);\n              },\n              onDismiss: function onDismiss(e) {\n                return console.log('dismiss', e);\n              }\n            }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: 'horizontal' },\n              '\\u9593\\u9694'\n            )\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps('salePrice', {\n              initialValue: 350,\n              normalize: function normalize(v, prev) {\n                if (v && !/^(([1-9]\\d*)|0)(\\.\\d{0,2}?)?$/.test(v)) {\n                  if (v === '.') {\n                    return '0.';\n                  }\n                  return prev;\n                }\n                return v;\n              }\n            }), {\n              type: 'number',\n              placeholder: '\\u8ACB\\u6C42\\u5165\\u5834\\u50F9\\u683C/\\u6BCF\\u842C',\n              onFocus: function onFocus() {\n                _this2.setState({\n                  netSizefocused: false\n                });\n              },\n              focused: this.state.netSizefocused,\n              clear: true,\n              extra: '\\u842C\\u5143'\n            }),\n            '\\u552E\\u50F9'\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(_switch2.default, _extends({}, getFieldProps('isSaleWIthLease', {\n                initialValue: true,\n                valuePropName: 'checked'\n              }), {\n                onClick: function onClick(checked) {\n                  console.log(checked);\n                }\n              }))\n\n            },\n            '\\u51FA\\u552E\\u9023\\u79DF\\u8CC3'\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(_switch2.default, _extends({}, getFieldProps('isNegotiable', {\n                initialValue: true,\n                valuePropName: 'checked'\n              }), {\n                onClick: function onClick(checked) {\n                  console.log(checked);\n                }\n              }))\n\n            },\n            '\\u53EF\\u8B70\\u50F9'\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(_switch2.default, _extends({}, getFieldProps('isViewAble', {\n                initialValue: true,\n                valuePropName: 'checked'\n              }), {\n                onClick: function onClick(checked) {\n                  console.log(checked);\n                }\n              }))\n\n            },\n            '\\u6709\\u6A13\\u7747'\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps('contactName', {\n              initialValue: 'Jeff Chan'\n            }), {\n              type: 'text',\n              placeholder: '\\u8ACB\\u8F38\\u5165\\u59D3\\u540D',\n              clear: true\n            }),\n            '\\u59D3\\u540D'\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({\n              clear: true\n            }, getFieldProps('contactPhone', {\n              initialValue: '66958844'\n            }), {\n              type: 'phone',\n              placeholder: '\\u8ACB\\u8F38\\u5165\\u96FB\\u8A71'\n            }),\n            '\\u806F\\u7D61\\u624B\\u6A5F'\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps('contactEmail', {\n              initialValue: 'h004@ymatchx.com'\n            }), {\n              clear: true,\n              placeholder: '\\u8ACB\\u8F38\\u5165\\u96FB\\u90F5\\u5730\\u5740'\n            }),\n            '\\u806F\\u7D61\\u96FB\\u90F5'\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(\n                _button2.default,\n                { type: 'ghost', size: 'large', inline: true, onClick: this.submit },\n                '\\u7372\\u5F97\\u5339\\u914D'\n              ),\n              multipleLine: true\n            },\n            'HoMatching',\n            _react2.default.createElement(\n              _list2.default.Item.Brief,\n              null,\n              '\\u5C0A\\u91CD\\u60A8\\u7684\\u79C1\\u96B1\\u548C\\u4FE1\\u606F\\uFF0C\\u4E0D\\u6703\\u88AB\\u5171\\u4EAB\\u3002'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return FormSalePropertyAntMobile;\n}(_react2.default.Component);\n\nvar FormSalePropertyAntMobileWrapper = exports.FormSalePropertyAntMobileWrapper = (0, _rcForm.createForm)()(FormSalePropertyAntMobile);\n\n// ReactDOM.render(<TestWrapper />, mountNode);\n// .picker-list .am-list-item .am-list-line .am-list-extra {\n//   flex-basis: initial;\n// }\n\n\n// <Card>\n//    <Button type=\"primary\"></Button>\n//    <Card.Header\n//      title=\"Doube Cove\"\n//      thumb=\"https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png\"\n//      extra={<span>Ask Price</span>}\n//    />\n//    <Card.Body>\n//\n//       <img src=\"http://semantic-ui.com/images/wireframe/image.png\" style={{ width: '200px', float : 'left' , align : 'left'}} alt=\"double cove\"/>\n//       <List renderHeader={() => '基本样式'} className=\"my-list\">\n// <List.Item extra={'内容内容'}>标题文字</List.Item>\n// </List>\n// <br style={{ clear: 'both' }} />\n//\n//    </Card.Body>\n//    <Card.Footer content={<Button type=\"ghost\" inline size=\"small\">Hello</Button>} extra={<h3>$300萬元</h3>} />\n//  </Card>//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2Zvcm0vZm9ybVNhbGVQcm9wZXJ0eUFudE1vYmlsZS5qcz8yZTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2FyZCwgUGlja2VyLCBMaXN0LCBXaGl0ZVNwYWNlLCBJbnB1dEl0ZW0sXHJcbiAgICAgICAgIEJ1dHRvbixcclxuICAgICAgICAgU2VnbWVudGVkQ29udHJvbCxcclxuICAgICAgICAgQ2hlY2tib3gsXHJcbiAgICAgICAgIFN3aXRjaCxcclxuICAgICAgICAgRGF0ZVBpY2tlcixcclxuICAgICAgIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAncmMtZm9ybSc7XHJcbmltcG9ydCB7IE1UUiB9IGZyb20gJ01UUic7XHJcbmltcG9ydCB7UEFSVElUSU9OfSBmcm9tICdQQVJUSVRJT04nO1xyXG5pbXBvcnQge0RJU1RSSUNLfSBmcm9tICdESVNUUklDSyc7XHJcblxyXG5pbXBvcnQge0ZifSBmcm9tICdmaXJlYmFzZS1zdG9yZSdcclxuaW1wb3J0IHtQcm9wZXJ0eX0gZnJvbSAncHJvcGVydHknXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL3poLWNuJztcclxuaW1wb3J0IE1vYnhTdG9yZSBmcm9tICdtb2J4U3RvcmUnXHJcbmltcG9ydCB2aWV3cyBmcm9tICd2aWV3cydcclxuXHJcbi8vIOWmguaenOS4jeaYr+S9v+eUqCBMaXN0Lkl0ZW0g5L2c5Li6IGNoaWxkcmVuXHJcbmNvbnN0IEN1c3RvbUNoaWxkcmVuID0gcHJvcHMgPT4gKFxyXG4gIDxkaXZcclxuICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgcGFkZGluZzogJzAgMC4zcmVtJyB9fVxyXG4gID5cclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6ICcwLjlyZW0nLCBsaW5lSGVpZ2h0OiAnMC45cmVtJyB9fT5cclxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBvdmVyZmxvdzogJ2hpZGRlbicsIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgY29sb3I6ICcjODg4JyB9fT57cHJvcHMuZXh0cmF9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IE5hbWVPZkJ1aWxkaW5nID0gW1xyXG4gIHsgdmFsdWU6ICdNT1NEQkMnLCBsYWJlbDogJ+i/jua1tycgfSxcclxuICB7IHZhbHVlOiAnTU9TQ1RPJywgbGFiZWw6ICfnrKzkuIDln44nIH0sXHJcbiAgeyB2YWx1ZTogJ01PU1NTQycsIGxhYmVsOiAn5paw5riv5Z+OJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgQ2hlY2tib3hJdGVtID0gQ2hlY2tib3guQ2hlY2tib3hJdGVtO1xyXG5cclxuY29uc3Qgcm9vbUtleSA9IHtcclxuICAnMCcgOiAn6ZaL5pS+5byPJyxcclxuICAnMScgOiAnMeaIvycsXHJcbiAgJzInIDogJzLmiL8nLFxyXG4gICczJyA6ICcz5oi/JyxcclxuICAnNCcgOiAnNOaIvycsXHJcbiAgJzUnIDogJzXmiL8nLFxyXG59XHJcblxyXG5cclxuY2xhc3MgRm9ybVNhbGVQcm9wZXJ0eUFudE1vYmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXSxcclxuICAgIGNvbHM6IDEsXHJcbiAgICAvL3BpY2tlclZhbHVlOiBbXSxcclxuICAgIGFzeW5jVmFsdWU6IFtdLFxyXG4gICAgc1ZhbHVlOiBbJzIwMDEnLCAnMzAwMSddLFxyXG5cclxuICAgIC8vIGlucHV0IG5ldCBzaXplXHJcbiAgICBuZXRTaXplZm9jdXNlZDogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgb25DbGljayA9ICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBwcm92aW5jZSxcclxuICAgICAgfSk7XHJcbiAgICB9LCAxMjApO1xyXG4gIH07XHJcblxyXG4gIG9uUGlja2VyQ2hhbmdlID0gKHZhbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsKTtcclxuICAgIGxldCBjb2xOdW0gPSAxO1xyXG4gICAgY29uc3QgZCA9IFsuLi50aGlzLnN0YXRlLmRhdGFdO1xyXG4gICAgY29uc3QgYXN5bmNWYWx1ZSA9IFsuLi52YWxdO1xyXG4gICAgaWYgKHZhbFswXSA9PT0gJ3pqJykge1xyXG4gICAgICBkLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICBpZiAoaS52YWx1ZSA9PT0gJ3pqJykge1xyXG4gICAgICAgICAgY29sTnVtID0gMjtcclxuICAgICAgICAgIGlmICghaS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpLmNoaWxkcmVuID0gW3tcclxuICAgICAgICAgICAgICB2YWx1ZTogJ3pqLW5iJyxcclxuICAgICAgICAgICAgICBsYWJlbDogJ+WugeazoicsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ3pqLWh6JyxcclxuICAgICAgICAgICAgICBsYWJlbDogJ+adreW3nicsXHJcbiAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICBhc3luY1ZhbHVlLnB1c2goJ3pqLW5iJyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbFsxXSA9PT0gJ3pqLWh6Jykge1xyXG4gICAgICAgICAgICBpLmNoaWxkcmVuLmZvckVhY2goKGopID0+IHtcclxuICAgICAgICAgICAgICBpZiAoai52YWx1ZSA9PT0gJ3pqLWh6Jykge1xyXG4gICAgICAgICAgICAgICAgai5jaGlsZHJlbiA9IFt7XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnemotaHoteGgnLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ+ilv+a5luWMuicsXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgICAgIGFzeW5jVmFsdWUucHVzaCgnemotaHoteGgnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb2xOdW0gPSAzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb2xOdW0gPSAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRhdGE6IGQsXHJcbiAgICAgIGNvbHM6IGNvbE51bSxcclxuICAgICAgYXN5bmNWYWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxuICBhZGRQcm9wZXJ0eUZvclNhbGUgPSAoIHYgKSA9PlxyXG4gIHtcclxuICAgIHZhciBwID0gbmV3IFByb3BlcnR5KCk7XHJcbiAgICB2YXIgaWQ7XHJcbiAgICAvLyBwLm5lYXJCeU10ckxpbmUgPSBuZWFyQnlNdHJMaW5lO1xyXG4gICAgLy8gcC5uZWFyQnlNdHJTdG9wID0gbmVhckJ5TXRyU3RvcDtcclxuICAgIC8vcC51aWQgPSBNb2J4U3RvcmUuYXBwLnVpZDtcclxuXHJcbiAgICBwLm5hbWVPZkJ1aWxkaW5nID0gdi5uYW1lT2ZCdWlsZGluZ1swXVxyXG4gICAgLy8gcC5kdWVEYXkgPSB2LmR1ZURheS50b0pTT04oKTtcclxuICAgIHAuZWFybHlUaW1lVG9WaWV3ID0gdi5lYXJseVRpbWVUb1ZpZXcudG9KU09OKCk7XHJcbiAgICAvL3AubGVhc2VQcmljZSA9IHBhcnNlSW50KHYubGVhc2VQcmljZSk7XHJcbiAgICBwLm5ldFNpemUgPSBwYXJzZUludCh2Lm5ldFNpemUpO1xyXG4gICAgcC5zYWxlUHJpY2UgPSBwYXJzZUludCh2LnNhbGVQcmljZSk7XHJcbiAgICBwLm51bU9mUm9vbSA9IHBhcnNlSW50KCB2LnBhcnRpdGlvblswXSk7XHJcbiAgICBwLm51bU9mQmF0aHJvb20gPSBwYXJzZUludCh2LnBhcnRpdGlvblsxXSk7XHJcbiAgICBwLm51bU9mTGl2aW5ncm9vbSA9IHBhcnNlSW50KHYucGFydGl0aW9uWzJdKTtcclxuICAgIHAuaXNTYWxlV0l0aExlYXNlID0gdi5pc1NhbGVXSXRoTGVhc2U7XHJcbiAgICBwLmlzTmVnb3RpYWJsZSA9IHYuaXNOZWdvdGlhYmxlO1xyXG4gICAgcC5pc1ZpZXdBYmxlID0gdi5pc1ZpZXdBYmxlO1xyXG5cclxuICAgIC8vcC5pc1ByZWZlclBheUFubnVhbGx5ID0gdi5pc1ByZWZlclBheUFubnVhbGx5O1xyXG4gICAgLy9wLmlzUmVudEFibGVOb3cgPSB2LmlzUmVudEFibGVOb3c7XHJcbiAgICAvL3AuaXNGcmVlRm9yU2V2ZW5EYXkgPSB2LmlzRnJlZUZvclNldmVuRGF5O1xyXG5cclxuICAgIC8vIHAuaGFzSG9tZUhhcmR3YXJlID0gdi5oYXNIb21lSGFyZHdhcmU7XHJcbiAgICBwLmNvbnRhY3ROYW1lID0gdi5jb250YWN0TmFtZTtcclxuICAgIHAuY29udGFjdFBob25lID0gcGFyc2VJbnQodi5jb250YWN0UGhvbmUpO1xyXG4gICAgcC5jb250YWN0RW1haWwgPSB2LmNvbnRhY3RFbWFpbDtcclxuXHJcblxyXG4gICAgLy8gQ2F0Y2ggbm9uZSB1c2VyIHN5biBtZXRob2Qgd2FpdCB0byBiZSB0cnVlXHJcbiAgICBpZiAoIE1vYnhTdG9yZS5hcHAudWlkID09PSBudWxsKSB7XHJcbiAgICAgIGlmICggRmIuc3RhcnRMb2dpbkFub255aG1vdXNseSgpICkge1xyXG4gICAgICAgICBpZCA9IEZiLmFwcC51c2Vyc1JlZi5wdXNoKCkua2V5O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICBpZCA9IEZiLmFwcC51c2Vyc1JlZi5wdXNoKCkua2V5O1xyXG4gICAgfVxyXG4gICAgcC51aWQgPSBNb2J4U3RvcmUuYXBwLnVpZDtcclxuICAgIHAudHlwZUZvciA9IFwiYnV5XCJcclxuICAgIHAudHlwZVRvID0gXCJzYWxlXCJcclxuICAgIHAuZmJpZCA9IGlkO1xyXG4gICAgRmIuYXBwLnVzZXJzUmVmLnVwZGF0ZSgge1tpZF06ICBwLnNlcmlhbGl6ZSgpIH0pO1xyXG5cclxuLy8gICAgY29uc3QgaWQyID0gRmIucHJvcGVydHlzLnB1c2goKS5rZXk7XHJcbiAgICBGYi5wcm9wZXJ0eXMuY2hpbGQoIGlkICkuc2V0KCBwLnNlcmlhbGl6ZSgpICk7XHJcblxyXG4gICAgTW9ieFN0b3JlLnJvdXRlci5nb1RvKCB2aWV3cy5tYXRjaFNhbGUsIHsga2V5SUQgOiBpZCAgfSApXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy5mb3JtLmdldEZpZWxkc1ZhbHVlKCk7XHJcblxyXG4gICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgLy8gIGNvbnNvbGUubG9nKCAn5Zyw6ZC157eaJywgdmFsdWUuTVRSIClcclxuICAvLyAgY29uc29sZS5sb2coICflkY4nLCB2YWx1ZS5uZXRTaXplKVxyXG4gIC8vICBjb25zb2xlLmxvZyggJ+WUruWDuScsIHZhbHVlLnNhbGVQcmljZSApXHJcbiAgLy8gIGNvbnNvbGUubG9nKCAnTmFtZScsIHZhbHVlLmNvbnRhY3ROYW1lIClcclxuICAvLyAgY29uc29sZS5sb2coICdlbWFpbCcsIHZhbHVlLmNvbnRhY3RFbWFpbCApXHJcbiAgLy8gIGNvbnNvbGUubG9nKCAn5omLIOapnycsIHZhbHVlLmNvbnRhY3RQaG9uZSApXHJcbiAgLy8gIGNvbnNvbGUubG9nKCAn6ZaT6ZqUJywgcm9vbUtleVt2YWx1ZS5yb29tWzBdXSApXHJcblxyXG4gICB0aGlzLmFkZFByb3BlcnR5Rm9yU2FsZSggdmFsdWUgKVxyXG4vLyAgIE1vYnhTdG9yZS5yb3V0ZXIuZ29Ubyggdmlld3Muc2Vjb25kIClcclxuXHJcbi8vICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5mb3JtLmdldEZpZWxkc1ZhbHVlKCkpO1xyXG4gIH1cclxuXHJcbiAgc2FsZSA9ICgpID0+IHtcclxuXHJcbiAgfVxyXG5cclxuLy8gJ+aIv+adsScsICfnp5/kuronLCfos6PlrrYnLCfosrflrrYnXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBnZXRGaWVsZFByb3BzIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcblxyXG4gICAgLy8gRm9yIERhdGVQaWNrZXJcclxuICAgIGNvbnN0IG1pbkRhdGUgPSBtb21lbnQoKS5sb2NhbGUoJ3poLWNuJykudXRjT2Zmc2V0KDgpO1xyXG4gICAgY29uc3QgbWF4RGF0ZSA9IG1vbWVudChtaW5EYXRlKS5hZGQoNiwgJ00nKTtcclxuXHJcbiAgICByZXR1cm4gKCA8ZGl2PlxyXG4gICAgICA8TGlzdCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gY2xhc3NOYW1lPVwicGlja2VyLWxpc3RcIj5cclxuXHJcbiAgICAgICAgPFBpY2tlciBkYXRhPXtESVNUUklDS30gY29scz17M30gey4uLmdldEZpZWxkUHJvcHMoJ2Rpc3RyaWNrJywge1xyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU6IFsnTlRUVicsJ01PUycsJ01PUzAwMDEnXSxcclxuICAgICAgICAgIH0pfSBjbGFzc05hbWU9XCJmb3Jzc1wiIHRpdGxlPVwi6KuL6YG45pOH5aSn5buIL+Wxi+iLkVwiIGV4dHJhPVwi6KuL6YG45pOH5aSn5buIL+Wxi+iLkVwiPlxyXG4gICAgICAgICAgPExpc3QuSXRlbSBhcnJvdz1cImhvcml6b250YWxcIj7lpKflu4gv5bGL6IuRPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9QaWNrZXI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRJdGVtXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5nZXRGaWVsZFByb3BzKCduZXRTaXplJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemU6ICh2LCBwcmV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodiAmJiAhL14oKFsxLTldXFxkKil8MCkoXFwuXFxkezAsMn0/KT8kLy50ZXN0KHYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ID09PSAnLicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzAuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwXCJcclxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmV0U2l6ZWZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBmb2N1c2VkPXt0aGlzLnN0YXRlLm5ldFNpemVmb2N1c2VkfVxyXG4gICAgICAgICAgICAgICAgICBjbGVhclxyXG4gICAgICAgICAgICAgICAgICBleHRyYT1cIuWRjlwiXHJcbiAgICAgICAgICAgICAgICA+5a+m55SoIOmdoiDnqY08L0lucHV0SXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICBtb2RlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwi6YG45pOH5pel5pyfXCJcclxuICAgICAgICAgICAgICAgICAgZXh0cmE9XCLpgbjmk4fml6XmnJ8s5pyA6ZW35Y2K5bm05L6GXCJcclxuICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoJ2Vhcmx5VGltZVRvVmlldycsIHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgOiBtaW5EYXRlLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgbWluRGF0ZT17bWluRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgbWF4RGF0ZT17bWF4RGF0ZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXJyb3c9XCJob3Jpem9udGFsXCI+5pyA5b+r5bm+5pmC5pyJ5qiT552HPC9MaXN0Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9EYXRlUGlja2VyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQaWNrZXIgIGRhdGE9e1BBUlRJVElPTn1cclxuICAgICAgICAgICAgICAgICAgY29scz17M31cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCLpgbjmk4fplpPpmpRcIlxyXG4gICAgICAgICAgICAgICAgICBjYXNjYWRlPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoJ3BhcnRpdGlvbicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogWycwJywgJzEnLCcxJ10sXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICBleHRyYT1cIumBuOaTh+mWk+malFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uT2s9e2UgPT4gY29uc29sZS5sb2coJ29rJywgZSl9XHJcbiAgICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17ZSA9PiBjb25zb2xlLmxvZygnZGlzbWlzcycsIGUpfVxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGFycm93PVwiaG9yaXpvbnRhbFwiPumWk+malDwvTGlzdC5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvUGlja2VyPlxyXG4gICAgICAgICAgICAgICAgPElucHV0SXRlbVxyXG4gICAgICAgICAgICAgICAgICB7Li4uZ2V0RmllbGRQcm9wcygnc2FsZVByaWNlJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA6IDM1MCxcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemU6ICh2LCBwcmV2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodiAmJiAhL14oKFsxLTldXFxkKil8MCkoXFwuXFxkezAsMn0/KT8kLy50ZXN0KHYpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ID09PSAnLicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzAuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLoq4vmsYLlhaXloLTlg7nmoLwv5q+P6JCsXCJcclxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmV0U2l6ZWZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBmb2N1c2VkPXt0aGlzLnN0YXRlLm5ldFNpemVmb2N1c2VkfVxyXG4gICAgICAgICAgICAgICAgICBjbGVhclxyXG4gICAgICAgICAgICAgICAgICBleHRyYT1cIuiQrOWFg1wiXHJcbiAgICAgICAgICAgICAgICA+5ZSu5YO5PC9JbnB1dEl0ZW0+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICBleHRyYT17PFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRGaWVsZFByb3BzKCdpc1NhbGVXSXRoTGVhc2UnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lOiAnY2hlY2tlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGNoZWNrZWQpID0+IHsgY29uc29sZS5sb2coY2hlY2tlZCk7IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG5cclxuICAgICAgICAgICAgICAgID7lh7rllK7pgKPnp5/os4M8L0xpc3QuSXRlbT5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgIGV4dHJhPXs8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoJ2lzTmVnb3RpYWJsZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU6ICdjaGVja2VkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY2hlY2tlZCkgPT4geyBjb25zb2xlLmxvZyhjaGVja2VkKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcblxyXG4gICAgICAgICAgICAgICAgPuWPr+itsOWDuTwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgZXh0cmE9ezxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0RmllbGRQcm9wcygnaXNWaWV3QWJsZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU6ICdjaGVja2VkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY2hlY2tlZCkgPT4geyBjb25zb2xlLmxvZyhjaGVja2VkKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcblxyXG4gICAgICAgICAgICAgICAgPuacieaok+edhzwvTGlzdC5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEl0ZW1cclxuICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoJ2NvbnRhY3ROYW1lJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA6ICdKZWZmIENoYW4nLFxyXG4gICAgICAgICAgICAgICAgICB9KSB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLoq4vovLjlhaXlp5PlkI1cIlxyXG4gICAgICAgICAgICAgICAgICBjbGVhclxyXG4gICAgICAgICAgICAgICAgPuWnk+WQjTwvSW5wdXRJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEl0ZW1cclxuICAgICAgICAgICAgICAgICAgY2xlYXJcclxuICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoJ2NvbnRhY3RQaG9uZScsIHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWUgOiAnNjY5NTg4NDQnXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuiri+i8uOWFpembu+ipsVwiXHJcbiAgICAgICAgICAgICAgICA+6IGv57Wh5omL5qmfPC9JbnB1dEl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0SXRlbVxyXG4gICAgICAgICAgICAgICAgICB7Li4uZ2V0RmllbGRQcm9wcygnY29udGFjdEVtYWlsJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA6ICdoMDA0QHltYXRjaHguY29tJyxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGNsZWFyXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6KuL6Ly45YWl6Zu76YO15Zyw5Z2AXCJcclxuICAgICAgICAgICAgICAgID7oga/ntaHpm7vpg7U8L0lucHV0SXRlbT5cclxuXHJcblxyXG4gICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICBleHRyYT17PEJ1dHRvbiB0eXBlPVwiZ2hvc3RcIiBzaXplPVwibGFyZ2VcIiBpbmxpbmUgb25DbGljaz17dGhpcy5zdWJtaXR9PueNsuW+l+WMuemFjTwvQnV0dG9uPn1cclxuICAgICAgICAgICAgICBtdWx0aXBsZUxpbmVcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEhvTWF0Y2hpbmdcclxuICAgICAgICAgICAgICA8TGlzdC5JdGVtLkJyaWVmPlxyXG4gICAgICAgICAgICAgIOWwiumHjeaCqOeahOengemaseWSjOS/oeaBr++8jOS4jeacg+iiq+WFseS6q+OAglxyXG4gICAgICAgICAgICAgIDwvTGlzdC5JdGVtLkJyaWVmPlxyXG4gICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpc3Q+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybVNhbGVQcm9wZXJ0eUFudE1vYmlsZVdyYXBwZXIgPSBjcmVhdGVGb3JtKCkoRm9ybVNhbGVQcm9wZXJ0eUFudE1vYmlsZSk7XHJcblxyXG4vLyBSZWFjdERPTS5yZW5kZXIoPFRlc3RXcmFwcGVyIC8+LCBtb3VudE5vZGUpO1xyXG4vLyAucGlja2VyLWxpc3QgLmFtLWxpc3QtaXRlbSAuYW0tbGlzdC1saW5lIC5hbS1saXN0LWV4dHJhIHtcclxuLy8gICBmbGV4LWJhc2lzOiBpbml0aWFsO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gPENhcmQ+XHJcbi8vICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj48L0J1dHRvbj5cclxuLy8gICAgPENhcmQuSGVhZGVyXHJcbi8vICAgICAgdGl0bGU9XCJEb3ViZSBDb3ZlXCJcclxuLy8gICAgICB0aHVtYj1cImh0dHBzOi8vY2xvdWQuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fzc2V0cy8xNjk4MTg1LzE4MDM5OTE2L2YwMjVjMDkwLTZkZDktMTFlNi05ZDg2LWE0ZDQ4YTFiZjA0OS5wbmdcIlxyXG4vLyAgICAgIGV4dHJhPXs8c3Bhbj5Bc2sgUHJpY2U8L3NwYW4+fVxyXG4vLyAgICAvPlxyXG4vLyAgICA8Q2FyZC5Cb2R5PlxyXG4vL1xyXG4vLyAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9zZW1hbnRpYy11aS5jb20vaW1hZ2VzL3dpcmVmcmFtZS9pbWFnZS5wbmdcIiBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgZmxvYXQgOiAnbGVmdCcgLCBhbGlnbiA6ICdsZWZ0J319IGFsdD1cImRvdWJsZSBjb3ZlXCIvPlxyXG4vLyAgICAgICA8TGlzdCByZW5kZXJIZWFkZXI9eygpID0+ICfln7rmnKzmoLflvI8nfSBjbGFzc05hbWU9XCJteS1saXN0XCI+XHJcbi8vIDxMaXN0Lkl0ZW0gZXh0cmE9eyflhoXlrrnlhoXlrrknfT7moIfpopjmloflrZc8L0xpc3QuSXRlbT5cclxuLy8gPC9MaXN0PlxyXG4vLyA8YnIgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fSAvPlxyXG4vL1xyXG4vLyAgICA8L0NhcmQuQm9keT5cclxuLy8gICAgPENhcmQuRm9vdGVyIGNvbnRlbnQ9ezxCdXR0b24gdHlwZT1cImdob3N0XCIgaW5saW5lIHNpemU9XCJzbWFsbFwiPkhlbGxvPC9CdXR0b24+fSBleHRyYT17PGgzPiQzMDDokKzlhYM8L2gzPn0gLz5cclxuLy8gIDwvQ2FyZD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2Zvcm0vZm9ybVNhbGVQcm9wZXJ0eUFudE1vYmlsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFKQTtBQURBO0FBQ0E7QUFXQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBWUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUFBO0FBQUE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQURBO0FBR0E7QUFDQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUFBO0FBQUE7QUEyQkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFMQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBRUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQURBO0FBR0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQXBKQTtBQURBO0FBa0tBOzs7O0FBcFRBO0FBQ0E7QUFzVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
webpackHotUpdate(0,{

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FormSalePropertyAntMobileWrapper = undefined;\n\nvar _css = __webpack_require__(875);\n\nvar _button = __webpack_require__(878);\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _css2 = __webpack_require__(884);\n\nvar _switch = __webpack_require__(887);\n\nvar _switch2 = _interopRequireDefault(_switch);\n\nvar _css3 = __webpack_require__(888);\n\nvar _datePicker = __webpack_require__(895);\n\nvar _datePicker2 = _interopRequireDefault(_datePicker);\n\nvar _css4 = __webpack_require__(920);\n\nvar _inputItem = __webpack_require__(923);\n\nvar _inputItem2 = _interopRequireDefault(_inputItem);\n\nvar _css5 = __webpack_require__(889);\n\nvar _picker = __webpack_require__(928);\n\nvar _picker2 = _interopRequireDefault(_picker);\n\nvar _css6 = __webpack_require__(579);\n\nvar _list = __webpack_require__(582);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _css7 = __webpack_require__(934);\n\nvar _checkbox = __webpack_require__(937);\n\nvar _checkbox2 = _interopRequireDefault(_checkbox);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _rcForm = __webpack_require__(585);\n\nvar _MTR = __webpack_require__(949);\n\nvar _PARTITION = __webpack_require__(950);\n\nvar _firebaseStore = __webpack_require__(808);\n\nvar _property = __webpack_require__(811);\n\nvar _moment = __webpack_require__(690);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\n__webpack_require__(804);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _views = __webpack_require__(547);\n\nvar _views2 = _interopRequireDefault(_views);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// 如果不是使用 List.Item 作为 children\nvar CustomChildren = function CustomChildren(props) {\n  return _react2.default.createElement(\n    'div',\n    {\n      onClick: props.onClick,\n      style: { backgroundColor: '#fff', padding: '0 0.3rem' }\n    },\n    _react2.default.createElement(\n      'div',\n      { style: { display: 'flex', height: '0.9rem', lineHeight: '0.9rem' } },\n      _react2.default.createElement(\n        'div',\n        { style: { flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } },\n        props.children\n      ),\n      _react2.default.createElement(\n        'div',\n        { style: { textAlign: 'right', color: '#888' } },\n        props.extra\n      )\n    )\n  );\n};\n\nvar NameOfBuilding = [{ value: 'MOSDBC', label: '迎海' }, { value: 'MOSCTO', label: '第一城' }, { value: 'MOSSSC', label: '新港城' }];\n\nvar CheckboxItem = _checkbox2.default.CheckboxItem;\n\nvar roomKey = {\n  '0': '開放式',\n  '1': '1房',\n  '2': '2房',\n  '3': '3房',\n  '4': '4房',\n  '5': '5房'\n};\n\nvar FormSalePropertyAntMobile = function (_React$Component) {\n  _inherits(FormSalePropertyAntMobile, _React$Component);\n\n  function FormSalePropertyAntMobile() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, FormSalePropertyAntMobile);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormSalePropertyAntMobile.__proto__ || Object.getPrototypeOf(FormSalePropertyAntMobile)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      data: [],\n      cols: 1,\n      //pickerValue: [],\n      asyncValue: [],\n      sValue: ['2001', '3001'],\n\n      // input net size\n      netSizefocused: false\n    }, _this.onClick = function () {\n      setTimeout(function () {\n        _this.setState({\n          data: province\n        });\n      }, 120);\n    }, _this.onPickerChange = function (val) {\n      console.log(val);\n      var colNum = 1;\n      var d = [].concat(_toConsumableArray(_this.state.data));\n      var asyncValue = [].concat(_toConsumableArray(val));\n      if (val[0] === 'zj') {\n        d.forEach(function (i) {\n          if (i.value === 'zj') {\n            colNum = 2;\n            if (!i.children) {\n              i.children = [{\n                value: 'zj-nb',\n                label: '宁波'\n              }, {\n                value: 'zj-hz',\n                label: '杭州'\n              }];\n              asyncValue.push('zj-nb');\n            } else if (val[1] === 'zj-hz') {\n              i.children.forEach(function (j) {\n                if (j.value === 'zj-hz') {\n                  j.children = [{\n                    value: 'zj-hz-xh',\n                    label: '西湖区'\n                  }];\n                  asyncValue.push('zj-hz-xh');\n                }\n              });\n              colNum = 3;\n            }\n          }\n        });\n      } else {\n        colNum = 1;\n      }\n      _this.setState({\n        data: d,\n        cols: colNum,\n        asyncValue: asyncValue\n      });\n    }, _this.addPropertyForSale = function (v) {\n      var p = new _property.Property();\n\n      // p.nearByMtrLine = nearByMtrLine;\n      // p.nearByMtrStop = nearByMtrStop;\n\n      p.nameOfBuilding = v.nameOfBuilding[0];\n      // p.dueDay = v.dueDay.toJSON();\n      p.earlyTimeToView = v.earlyTimeToView.toJSON();\n      //p.leasePrice = parseInt(v.leasePrice);\n      p.netSize = parseInt(v.netSize);\n      p.salePrice = parseInt(v.salePrice);\n      p.numOfRoom = parseInt(v.partition[0]);\n      p.numofBathroom = parseInt(v.partition[1]);\n      p.numofLivingroom = parseInt(v.partition[2]);\n      p.isSaleWIthLease = v.isSaleWIthLease;\n      p.isNegotiable = v.isNegotiable;\n      p.isViewAble = v.isViewAble;\n\n      //p.isPreferPayAnnually = v.isPreferPayAnnually;\n      //p.isRentAbleNow = v.isRentAbleNow;\n      //p.isFreeForSevenDay = v.isFreeForSevenDay;\n\n      // p.hasHomeHardware = v.hasHomeHardware;\n      p.contactName = v.contactName;\n      p.contactPhone = parseInt(v.contactPhone);\n      p.contactEmail = v.contactEmail;\n\n      var id = _firebaseStore.Fb.app.propertysRef.push().key;\n      p.typeFor = \"buy\";\n      p.typeTo = \"sale\";\n      _firebaseStore.Fb.app.propertysRef.update(_defineProperty({}, id, p.serialize()));\n      _mobxStore2.default.router.goTo(_views2.default.matchSale, { keyID: id });\n    }, _this.submit = function (e) {\n      var value = _this.props.form.getFieldsValue();\n\n      e.preventDefault();\n      //  console.log( '地鐵線', value.MTR )\n      //  console.log( '呎', value.netSize)\n      //  console.log( '售價', value.salePrice )\n      //  console.log( 'Name', value.contactName )\n      //  console.log( 'email', value.contactEmail )\n      //  console.log( '手 機', value.contactPhone )\n      //  console.log( '間隔', roomKey[value.room[0]] )\n\n      _this.addPropertyForSale(value);\n      //   MobxStore.router.goTo( views.second )\n\n      //   console.log(this.props.form.getFieldsValue());\n    }, _this.sale = function () {}, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(FormSalePropertyAntMobile, [{\n    key: 'render',\n\n\n    // '房東', '租人','賣家','買家'\n    value: function render() {\n      var _this2 = this;\n\n      var getFieldProps = this.props.form.getFieldProps;\n\n      // For DatePicker\n\n      var minDate = (0, _moment2.default)().locale('zh-cn').utcOffset(8);\n      var maxDate = (0, _moment2.default)(minDate).add(6, 'M');\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _list2.default,\n          { style: { backgroundColor: 'white' }, className: 'picker-list' },\n          _react2.default.createElement(\n            _picker2.default,\n            _extends({ data: NameOfBuilding, cols: 1 }, getFieldProps('nameOfBuilding', {\n              initialValue: ['MOSDBC']\n            }), { className: 'forss', title: '\\u8ACB\\u9078\\u64C7\\u5927\\u5EC8/\\u5C4B\\u82D1', extra: '\\u8ACB\\u9078\\u64C7\\u5927\\u5EC8/\\u5C4B\\u82D1' }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: 'horizontal' },\n              '\\u5927\\u5EC8/\\u5C4B\\u82D1'\n            )\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps('netSize', {\n              initialValue: 300,\n              normalize: function normalize(v, prev) {\n                if (v && !/^(([1-9]\\d*)|0)(\\.\\d{0,2}?)?$/.test(v)) {\n                  if (v === '.') {\n                    return '0.';\n                  }\n                  return prev;\n                }\n                return v;\n              }\n            }), {\n              type: 'number',\n              placeholder: '0',\n              onFocus: function onFocus() {\n                _this2.setState({\n                  netSizefocused: false\n                });\n              },\n              focused: this.state.netSizefocused,\n              clear: true,\n              extra: '\\u544E'\n            }),\n            '\\u5BE6\\u7528 \\u9762 \\u7A4D'\n          ),\n          _react2.default.createElement(\n            _datePicker2.default,\n            _extends({\n              mode: 'date',\n              title: '\\u9078\\u64C7\\u65E5\\u671F',\n              extra: '\\u9078\\u64C7\\u65E5\\u671F,\\u6700\\u9577\\u534A\\u5E74\\u4F86'\n            }, getFieldProps('earlyTimeToView', {\n              initialValue: minDate\n            }), {\n              minDate: minDate,\n              maxDate: maxDate\n            }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: 'horizontal' },\n              '\\u6700\\u5FEB\\u5E7E\\u6642\\u6709\\u6A13\\u7747'\n            )\n          ),\n          _react2.default.createElement(\n            _picker2.default,\n            _extends({ data: _PARTITION.PARTITION,\n              cols: 3,\n              title: '\\u9078\\u64C7\\u9593\\u9694',\n              cascade: false\n            }, getFieldProps('partition', {\n              initialValue: ['0', '1', '1']\n            }), {\n              extra: '\\u9078\\u64C7\\u9593\\u9694',\n              onOk: function onOk(e) {\n                return console.log('ok', e);\n              },\n              onDismiss: function onDismiss(e) {\n                return console.log('dismiss', e);\n              }\n            }),\n            _react2.default.createElement(\n              _list2.default.Item,\n              { arrow: 'horizontal' },\n              '\\u9593\\u9694'\n            )\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps('salePrice', {\n              initialValue: 350,\n              normalize: function normalize(v, prev) {\n                if (v && !/^(([1-9]\\d*)|0)(\\.\\d{0,2}?)?$/.test(v)) {\n                  if (v === '.') {\n                    return '0.';\n                  }\n                  return prev;\n                }\n                return v;\n              }\n            }), {\n              type: 'number',\n              placeholder: '\\u8ACB\\u6C42\\u5165\\u5834\\u50F9\\u683C/\\u6BCF\\u842C',\n              onFocus: function onFocus() {\n                _this2.setState({\n                  netSizefocused: false\n                });\n              },\n              focused: this.state.netSizefocused,\n              clear: true,\n              extra: '\\u842C\\u5143'\n            }),\n            '\\u552E\\u50F9'\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(_switch2.default, _extends({}, getFieldProps('isSaleWIthLease', {\n                initialValue: true,\n                valuePropName: 'checked'\n              }), {\n                onClick: function onClick(checked) {\n                  console.log(checked);\n                }\n              }))\n\n            },\n            '\\u51FA\\u552E\\u9023\\u79DF\\u8CC3'\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(_switch2.default, _extends({}, getFieldProps('isNegotiable', {\n                initialValue: true,\n                valuePropName: 'checked'\n              }), {\n                onClick: function onClick(checked) {\n                  console.log(checked);\n                }\n              }))\n\n            },\n            '\\u53EF\\u8B70\\u50F9'\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(_switch2.default, _extends({}, getFieldProps('isViewAble', {\n                initialValue: true,\n                valuePropName: 'checked'\n              }), {\n                onClick: function onClick(checked) {\n                  console.log(checked);\n                }\n              }))\n\n            },\n            '\\u6709\\u6A13\\u7747'\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps('contactName', {\n              initialValue: 'Jeff Chan'\n            }), {\n              type: 'text',\n              placeholder: '\\u8ACB\\u8F38\\u5165\\u59D3\\u540D',\n              clear: true\n            }),\n            '\\u59D3\\u540D'\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({\n              clear: true\n            }, getFieldProps('contactPhone', {\n              initialValue: '66958844'\n            }), {\n              type: 'phone',\n              placeholder: '\\u8ACB\\u8F38\\u5165\\u96FB\\u8A71'\n            }),\n            '\\u806F\\u7D61\\u624B\\u6A5F'\n          ),\n          _react2.default.createElement(\n            _inputItem2.default,\n            _extends({}, getFieldProps('contactEmail', {\n              initialValue: 'h004@ymatchx.com'\n            }), {\n              clear: true,\n              placeholder: '\\u8ACB\\u8F38\\u5165\\u96FB\\u90F5\\u5730\\u5740'\n            }),\n            '\\u806F\\u7D61\\u96FB\\u90F5'\n          ),\n          _react2.default.createElement(\n            _list2.default.Item,\n            {\n              extra: _react2.default.createElement(\n                _button2.default,\n                { type: 'ghost', size: 'large', inline: true, onClick: this.submit },\n                '\\u7372\\u5F97\\u5339\\u914D'\n              ),\n              multipleLine: true\n            },\n            'HoMatching',\n            _react2.default.createElement(\n              _list2.default.Item.Brief,\n              null,\n              '\\u5C0A\\u91CD\\u60A8\\u7684\\u79C1\\u96B1\\u548C\\u4FE1\\u606F\\uFF0C\\u4E0D\\u6703\\u88AB\\u5171\\u4EAB\\u3002'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return FormSalePropertyAntMobile;\n}(_react2.default.Component);\n\nvar FormSalePropertyAntMobileWrapper = exports.FormSalePropertyAntMobileWrapper = (0, _rcForm.createForm)()(FormSalePropertyAntMobile);\n\n// ReactDOM.render(<TestWrapper />, mountNode);\n// .picker-list .am-list-item .am-list-line .am-list-extra {\n//   flex-basis: initial;\n// }\n\n\n// <Card>\n//    <Button type=\"primary\"></Button>\n//    <Card.Header\n//      title=\"Doube Cove\"\n//      thumb=\"https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png\"\n//      extra={<span>Ask Price</span>}\n//    />\n//    <Card.Body>\n//\n//       <img src=\"http://semantic-ui.com/images/wireframe/image.png\" style={{ width: '200px', float : 'left' , align : 'left'}} alt=\"double cove\"/>\n//       <List renderHeader={() => '基本样式'} className=\"my-list\">\n// <List.Item extra={'内容内容'}>标题文字</List.Item>\n// </List>\n// <br style={{ clear: 'both' }} />\n//\n//    </Card.Body>\n//    <Card.Footer content={<Button type=\"ghost\" inline size=\"small\">Hello</Button>} extra={<h3>$300萬元</h3>} />\n//  </Card>//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODgzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2Zvcm0vZm9ybVNhbGVQcm9wZXJ0eUFudE1vYmlsZS5qcz8yZTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2FyZCwgUGlja2VyLCBMaXN0LCBXaGl0ZVNwYWNlLCBJbnB1dEl0ZW0sXHJcbiAgICAgICAgIEJ1dHRvbixcclxuICAgICAgICAgU2VnbWVudGVkQ29udHJvbCxcclxuICAgICAgICAgQ2hlY2tib3gsXHJcbiAgICAgICAgIFN3aXRjaCxcclxuICAgICAgICAgRGF0ZVBpY2tlcixcclxuICAgICAgIH0gZnJvbSAnYW50ZC1tb2JpbGUnO1xyXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAncmMtZm9ybSc7XHJcbmltcG9ydCB7IE1UUiB9IGZyb20gJ01UUic7XHJcbmltcG9ydCB7UEFSVElUSU9OfSBmcm9tICdQQVJUSVRJT04nO1xyXG5pbXBvcnQge0ZifSBmcm9tICdmaXJlYmFzZS1zdG9yZSdcclxuaW1wb3J0IHtQcm9wZXJ0eX0gZnJvbSAncHJvcGVydHknXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL3poLWNuJztcclxuaW1wb3J0IE1vYnhTdG9yZSBmcm9tICdtb2J4U3RvcmUnXHJcbmltcG9ydCB2aWV3cyBmcm9tICd2aWV3cydcclxuXHJcbi8vIOWmguaenOS4jeaYr+S9v+eUqCBMaXN0Lkl0ZW0g5L2c5Li6IGNoaWxkcmVuXHJcbmNvbnN0IEN1c3RvbUNoaWxkcmVuID0gcHJvcHMgPT4gKFxyXG4gIDxkaXZcclxuICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJywgcGFkZGluZzogJzAgMC4zcmVtJyB9fVxyXG4gID5cclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBoZWlnaHQ6ICcwLjlyZW0nLCBsaW5lSGVpZ2h0OiAnMC45cmVtJyB9fT5cclxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBvdmVyZmxvdzogJ2hpZGRlbicsIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ3JpZ2h0JywgY29sb3I6ICcjODg4JyB9fT57cHJvcHMuZXh0cmF9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IE5hbWVPZkJ1aWxkaW5nID0gW1xyXG4gIHsgdmFsdWU6ICdNT1NEQkMnLCBsYWJlbDogJ+i/jua1tycgfSxcclxuICB7IHZhbHVlOiAnTU9TQ1RPJywgbGFiZWw6ICfnrKzkuIDln44nIH0sXHJcbiAgeyB2YWx1ZTogJ01PU1NTQycsIGxhYmVsOiAn5paw5riv5Z+OJyB9LFxyXG5dO1xyXG5cclxuY29uc3QgQ2hlY2tib3hJdGVtID0gQ2hlY2tib3guQ2hlY2tib3hJdGVtO1xyXG5cclxuY29uc3Qgcm9vbUtleSA9IHtcclxuICAnMCcgOiAn6ZaL5pS+5byPJyxcclxuICAnMScgOiAnMeaIvycsXHJcbiAgJzInIDogJzLmiL8nLFxyXG4gICczJyA6ICcz5oi/JyxcclxuICAnNCcgOiAnNOaIvycsXHJcbiAgJzUnIDogJzXmiL8nLFxyXG59XHJcblxyXG5cclxuY2xhc3MgRm9ybVNhbGVQcm9wZXJ0eUFudE1vYmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGUgPSB7XHJcbiAgICBkYXRhOiBbXSxcclxuICAgIGNvbHM6IDEsXHJcbiAgICAvL3BpY2tlclZhbHVlOiBbXSxcclxuICAgIGFzeW5jVmFsdWU6IFtdLFxyXG4gICAgc1ZhbHVlOiBbJzIwMDEnLCAnMzAwMSddLFxyXG5cclxuICAgIC8vIGlucHV0IG5ldCBzaXplXHJcbiAgICBuZXRTaXplZm9jdXNlZDogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgb25DbGljayA9ICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBkYXRhOiBwcm92aW5jZSxcclxuICAgICAgfSk7XHJcbiAgICB9LCAxMjApO1xyXG4gIH07XHJcblxyXG4gIG9uUGlja2VyQ2hhbmdlID0gKHZhbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2codmFsKTtcclxuICAgIGxldCBjb2xOdW0gPSAxO1xyXG4gICAgY29uc3QgZCA9IFsuLi50aGlzLnN0YXRlLmRhdGFdO1xyXG4gICAgY29uc3QgYXN5bmNWYWx1ZSA9IFsuLi52YWxdO1xyXG4gICAgaWYgKHZhbFswXSA9PT0gJ3pqJykge1xyXG4gICAgICBkLmZvckVhY2goKGkpID0+IHtcclxuICAgICAgICBpZiAoaS52YWx1ZSA9PT0gJ3pqJykge1xyXG4gICAgICAgICAgY29sTnVtID0gMjtcclxuICAgICAgICAgIGlmICghaS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpLmNoaWxkcmVuID0gW3tcclxuICAgICAgICAgICAgICB2YWx1ZTogJ3pqLW5iJyxcclxuICAgICAgICAgICAgICBsYWJlbDogJ+WugeazoicsXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICB2YWx1ZTogJ3pqLWh6JyxcclxuICAgICAgICAgICAgICBsYWJlbDogJ+adreW3nicsXHJcbiAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICBhc3luY1ZhbHVlLnB1c2goJ3pqLW5iJyk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbFsxXSA9PT0gJ3pqLWh6Jykge1xyXG4gICAgICAgICAgICBpLmNoaWxkcmVuLmZvckVhY2goKGopID0+IHtcclxuICAgICAgICAgICAgICBpZiAoai52YWx1ZSA9PT0gJ3pqLWh6Jykge1xyXG4gICAgICAgICAgICAgICAgai5jaGlsZHJlbiA9IFt7XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnemotaHoteGgnLFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ+ilv+a5luWMuicsXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgICAgIGFzeW5jVmFsdWUucHVzaCgnemotaHoteGgnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb2xOdW0gPSAzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb2xOdW0gPSAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGRhdGE6IGQsXHJcbiAgICAgIGNvbHM6IGNvbE51bSxcclxuICAgICAgYXN5bmNWYWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxuICBhZGRQcm9wZXJ0eUZvclNhbGUgPSAoIHYgKSA9PlxyXG4gIHtcclxuICAgIHZhciBwID0gbmV3IFByb3BlcnR5KCk7XHJcblxyXG4gICAgLy8gcC5uZWFyQnlNdHJMaW5lID0gbmVhckJ5TXRyTGluZTtcclxuICAgIC8vIHAubmVhckJ5TXRyU3RvcCA9IG5lYXJCeU10clN0b3A7XHJcblxyXG4gICAgcC5uYW1lT2ZCdWlsZGluZyA9IHYubmFtZU9mQnVpbGRpbmdbMF1cclxuICAgIC8vIHAuZHVlRGF5ID0gdi5kdWVEYXkudG9KU09OKCk7XHJcbiAgICBwLmVhcmx5VGltZVRvVmlldyA9IHYuZWFybHlUaW1lVG9WaWV3LnRvSlNPTigpO1xyXG4gICAgLy9wLmxlYXNlUHJpY2UgPSBwYXJzZUludCh2LmxlYXNlUHJpY2UpO1xyXG4gICAgcC5uZXRTaXplID0gcGFyc2VJbnQodi5uZXRTaXplKTtcclxuICAgIHAuc2FsZVByaWNlID0gcGFyc2VJbnQodi5zYWxlUHJpY2UpO1xyXG4gICAgcC5udW1PZlJvb20gPSBwYXJzZUludCggdi5wYXJ0aXRpb25bMF0pO1xyXG4gICAgcC5udW1vZkJhdGhyb29tID0gcGFyc2VJbnQodi5wYXJ0aXRpb25bMV0pO1xyXG4gICAgcC5udW1vZkxpdmluZ3Jvb20gPSBwYXJzZUludCh2LnBhcnRpdGlvblsyXSk7XHJcbiAgICBwLmlzU2FsZVdJdGhMZWFzZSA9IHYuaXNTYWxlV0l0aExlYXNlO1xyXG4gICAgcC5pc05lZ290aWFibGUgPSB2LmlzTmVnb3RpYWJsZTtcclxuICAgIHAuaXNWaWV3QWJsZSA9IHYuaXNWaWV3QWJsZTtcclxuXHJcbiAgICAvL3AuaXNQcmVmZXJQYXlBbm51YWxseSA9IHYuaXNQcmVmZXJQYXlBbm51YWxseTtcclxuICAgIC8vcC5pc1JlbnRBYmxlTm93ID0gdi5pc1JlbnRBYmxlTm93O1xyXG4gICAgLy9wLmlzRnJlZUZvclNldmVuRGF5ID0gdi5pc0ZyZWVGb3JTZXZlbkRheTtcclxuXHJcbiAgICAvLyBwLmhhc0hvbWVIYXJkd2FyZSA9IHYuaGFzSG9tZUhhcmR3YXJlO1xyXG4gICAgcC5jb250YWN0TmFtZSA9IHYuY29udGFjdE5hbWU7XHJcbiAgICBwLmNvbnRhY3RQaG9uZSA9IHBhcnNlSW50KHYuY29udGFjdFBob25lKTtcclxuICAgIHAuY29udGFjdEVtYWlsID0gdi5jb250YWN0RW1haWw7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBpZCA9IEZiLmFwcC5wcm9wZXJ0eXNSZWYucHVzaCgpLmtleTtcclxuICAgIHAudHlwZUZvciA9IFwiYnV5XCJcclxuICAgIHAudHlwZVRvID0gXCJzYWxlXCJcclxuICAgIEZiLmFwcC5wcm9wZXJ0eXNSZWYudXBkYXRlKCB7W2lkXTogIHAuc2VyaWFsaXplKCkgfSk7XHJcbiAgICBNb2J4U3RvcmUucm91dGVyLmdvVG8oIHZpZXdzLm1hdGNoU2FsZSwgeyBrZXlJRCA6IGlkICB9IClcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgc3VibWl0ID0gKGUpID0+IHtcclxuICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzLmZvcm0uZ2V0RmllbGRzVmFsdWUoKTtcclxuXHJcbiAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgY29uc29sZS5sb2coICflnLDpkLXnt5onLCB2YWx1ZS5NVFIgKVxyXG4gIC8vICBjb25zb2xlLmxvZyggJ+WRjicsIHZhbHVlLm5ldFNpemUpXHJcbiAgLy8gIGNvbnNvbGUubG9nKCAn5ZSu5YO5JywgdmFsdWUuc2FsZVByaWNlIClcclxuICAvLyAgY29uc29sZS5sb2coICdOYW1lJywgdmFsdWUuY29udGFjdE5hbWUgKVxyXG4gIC8vICBjb25zb2xlLmxvZyggJ2VtYWlsJywgdmFsdWUuY29udGFjdEVtYWlsIClcclxuICAvLyAgY29uc29sZS5sb2coICfmiYsg5qmfJywgdmFsdWUuY29udGFjdFBob25lIClcclxuICAvLyAgY29uc29sZS5sb2coICfplpPpmpQnLCByb29tS2V5W3ZhbHVlLnJvb21bMF1dIClcclxuXHJcbiAgIHRoaXMuYWRkUHJvcGVydHlGb3JTYWxlKCB2YWx1ZSApXHJcbi8vICAgTW9ieFN0b3JlLnJvdXRlci5nb1RvKCB2aWV3cy5zZWNvbmQgKVxyXG5cclxuLy8gICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmZvcm0uZ2V0RmllbGRzVmFsdWUoKSk7XHJcbiAgfVxyXG5cclxuICBzYWxlID0gKCkgPT4ge1xyXG5cclxuICB9XHJcblxyXG4vLyAn5oi/5p2xJywgJ+enn+S6uicsJ+izo+WuticsJ+iyt+WutidcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGdldEZpZWxkUHJvcHMgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuXHJcbiAgICAvLyBGb3IgRGF0ZVBpY2tlclxyXG4gICAgY29uc3QgbWluRGF0ZSA9IG1vbWVudCgpLmxvY2FsZSgnemgtY24nKS51dGNPZmZzZXQoOCk7XHJcbiAgICBjb25zdCBtYXhEYXRlID0gbW9tZW50KG1pbkRhdGUpLmFkZCg2LCAnTScpO1xyXG5cclxuICAgIHJldHVybiAoIDxkaXY+XHJcbiAgICAgIDxMaXN0IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSBjbGFzc05hbWU9XCJwaWNrZXItbGlzdFwiPlxyXG4gICAgICAgIDxQaWNrZXIgZGF0YT17TmFtZU9mQnVpbGRpbmd9IGNvbHM9ezF9IHsuLi5nZXRGaWVsZFByb3BzKCduYW1lT2ZCdWlsZGluZycsIHtcclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBbJ01PU0RCQyddLFxyXG4gICAgICAgICAgfSl9IGNsYXNzTmFtZT1cImZvcnNzXCIgdGl0bGU9XCLoq4vpgbjmk4flpKflu4gv5bGL6IuRXCIgZXh0cmE9XCLoq4vpgbjmk4flpKflu4gv5bGL6IuRXCI+XHJcbiAgICAgICAgICA8TGlzdC5JdGVtIGFycm93PVwiaG9yaXpvbnRhbFwiPuWkp+W7iC/lsYvoi5E8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L1BpY2tlcj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEl0ZW1cclxuICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoJ25ldFNpemUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlIDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZTogKHYsIHByZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICYmICEvXigoWzEtOV1cXGQqKXwwKShcXC5cXGR7MCwyfT8pPyQvLnRlc3QodikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT09ICcuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnMC4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXRTaXplZm9jdXNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGZvY3VzZWQ9e3RoaXMuc3RhdGUubmV0U2l6ZWZvY3VzZWR9XHJcbiAgICAgICAgICAgICAgICAgIGNsZWFyXHJcbiAgICAgICAgICAgICAgICAgIGV4dHJhPVwi5ZGOXCJcclxuICAgICAgICAgICAgICAgID7lr6bnlKgg6Z2iIOepjTwvSW5wdXRJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgIG1vZGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCLpgbjmk4fml6XmnJ9cIlxyXG4gICAgICAgICAgICAgICAgICBleHRyYT1cIumBuOaTh+aXpeacnyzmnIDplbfljYrlubTkvoZcIlxyXG4gICAgICAgICAgICAgICAgICB7Li4uZ2V0RmllbGRQcm9wcygnZWFybHlUaW1lVG9WaWV3Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA6IG1pbkRhdGUsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICBtaW5EYXRlPXttaW5EYXRlfVxyXG4gICAgICAgICAgICAgICAgICBtYXhEYXRlPXttYXhEYXRlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBhcnJvdz1cImhvcml6b250YWxcIj7mnIDlv6vlub7mmYLmnInmqJPnnYc8L0xpc3QuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0RhdGVQaWNrZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFBpY2tlciAgZGF0YT17UEFSVElUSU9OfVxyXG4gICAgICAgICAgICAgICAgICBjb2xzPXszfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIumBuOaTh+mWk+malFwiXHJcbiAgICAgICAgICAgICAgICAgIGNhc2NhZGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICB7Li4uZ2V0RmllbGRQcm9wcygncGFydGl0aW9uJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBbJzAnLCAnMScsJzEnXSxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIGV4dHJhPVwi6YG45pOH6ZaT6ZqUXCJcclxuICAgICAgICAgICAgICAgICAgb25Paz17ZSA9PiBjb25zb2xlLmxvZygnb2snLCBlKX1cclxuICAgICAgICAgICAgICAgICAgb25EaXNtaXNzPXtlID0+IGNvbnNvbGUubG9nKCdkaXNtaXNzJywgZSl9XHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0gYXJyb3c9XCJob3Jpem9udGFsXCI+6ZaT6ZqUPC9MaXN0Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9QaWNrZXI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRJdGVtXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5nZXRGaWVsZFByb3BzKCdzYWxlUHJpY2UnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlIDogMzUwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZTogKHYsIHByZXYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmICh2ICYmICEvXigoWzEtOV1cXGQqKXwwKShcXC5cXGR7MCwyfT8pPyQvLnRlc3QodikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT09ICcuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnMC4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuiri+axguWFpeWgtOWDueagvC/mr4/okKxcIlxyXG4gICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBuZXRTaXplZm9jdXNlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGZvY3VzZWQ9e3RoaXMuc3RhdGUubmV0U2l6ZWZvY3VzZWR9XHJcbiAgICAgICAgICAgICAgICAgIGNsZWFyXHJcbiAgICAgICAgICAgICAgICAgIGV4dHJhPVwi6JCs5YWDXCJcclxuICAgICAgICAgICAgICAgID7llK7lg7k8L0lucHV0SXRlbT5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgIGV4dHJhPXs8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmdldEZpZWxkUHJvcHMoJ2lzU2FsZVdJdGhMZWFzZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlUHJvcE5hbWU6ICdjaGVja2VkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY2hlY2tlZCkgPT4geyBjb25zb2xlLmxvZyhjaGVja2VkKTsgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcblxyXG4gICAgICAgICAgICAgICAgPuWHuuWUrumAo+enn+izgzwvTGlzdC5JdGVtPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgZXh0cmE9ezxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2V0RmllbGRQcm9wcygnaXNOZWdvdGlhYmxlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wTmFtZTogJ2NoZWNrZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhjaGVja2VkKSA9PiB7IGNvbnNvbGUubG9nKGNoZWNrZWQpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICA+5Y+v6K2w5YO5PC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TGlzdC5JdGVtXHJcbiAgICAgICAgICAgICAgICBleHRyYT17PFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5nZXRGaWVsZFByb3BzKCdpc1ZpZXdBYmxlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wTmFtZTogJ2NoZWNrZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhjaGVja2VkKSA9PiB7IGNvbnNvbGUubG9nKGNoZWNrZWQpOyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuXHJcbiAgICAgICAgICAgICAgICA+5pyJ5qiT552HPC9MaXN0Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0SXRlbVxyXG4gICAgICAgICAgICAgICAgICB7Li4uZ2V0RmllbGRQcm9wcygnY29udGFjdE5hbWUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlIDogJ0plZmYgQ2hhbicsXHJcbiAgICAgICAgICAgICAgICAgIH0pIH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuiri+i8uOWFpeWnk+WQjVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsZWFyXHJcbiAgICAgICAgICAgICAgICA+5aeT5ZCNPC9JbnB1dEl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgPElucHV0SXRlbVxyXG4gICAgICAgICAgICAgICAgICBjbGVhclxyXG4gICAgICAgICAgICAgICAgICB7Li4uZ2V0RmllbGRQcm9wcygnY29udGFjdFBob25lJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZSA6ICc2Njk1ODg0NCdcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6KuL6Ly45YWl6Zu76KmxXCJcclxuICAgICAgICAgICAgICAgID7oga/ntaHmiYvmqZ88L0lucHV0SXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICA8SW5wdXRJdGVtXHJcbiAgICAgICAgICAgICAgICAgIHsuLi5nZXRGaWVsZFByb3BzKCdjb250YWN0RW1haWwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlIDogJ2gwMDRAeW1hdGNoeC5jb20nLFxyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgY2xlYXJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLoq4vovLjlhaXpm7vpg7XlnLDlnYBcIlxyXG4gICAgICAgICAgICAgICAgPuiBr+e1oembu+mDtTwvSW5wdXRJdGVtPlxyXG5cclxuXHJcbiAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICAgIGV4dHJhPXs8QnV0dG9uIHR5cGU9XCJnaG9zdFwiIHNpemU9XCJsYXJnZVwiIGlubGluZSBvbkNsaWNrPXt0aGlzLnN1Ym1pdH0+542y5b6X5Yy56YWNPC9CdXR0b24+fVxyXG4gICAgICAgICAgICAgIG11bHRpcGxlTGluZVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSG9NYXRjaGluZ1xyXG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uQnJpZWY+XHJcbiAgICAgICAgICAgICAg5bCK6YeN5oKo55qE56eB6Zqx5ZKM5L+h5oGv77yM5LiN5pyD6KKr5YWx5Lqr44CCXHJcbiAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0uQnJpZWY+XHJcbiAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGlzdD5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtU2FsZVByb3BlcnR5QW50TW9iaWxlV3JhcHBlciA9IGNyZWF0ZUZvcm0oKShGb3JtU2FsZVByb3BlcnR5QW50TW9iaWxlKTtcclxuXHJcbi8vIFJlYWN0RE9NLnJlbmRlcig8VGVzdFdyYXBwZXIgLz4sIG1vdW50Tm9kZSk7XHJcbi8vIC5waWNrZXItbGlzdCAuYW0tbGlzdC1pdGVtIC5hbS1saXN0LWxpbmUgLmFtLWxpc3QtZXh0cmEge1xyXG4vLyAgIGZsZXgtYmFzaXM6IGluaXRpYWw7XHJcbi8vIH1cclxuXHJcblxyXG4vLyA8Q2FyZD5cclxuLy8gICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiPjwvQnV0dG9uPlxyXG4vLyAgICA8Q2FyZC5IZWFkZXJcclxuLy8gICAgICB0aXRsZT1cIkRvdWJlIENvdmVcIlxyXG4vLyAgICAgIHRodW1iPVwiaHR0cHM6Ly9jbG91ZC5naXRodWJ1c2VyY29udGVudC5jb20vYXNzZXRzLzE2OTgxODUvMTgwMzk5MTYvZjAyNWMwOTAtNmRkOS0xMWU2LTlkODYtYTRkNDhhMWJmMDQ5LnBuZ1wiXHJcbi8vICAgICAgZXh0cmE9ezxzcGFuPkFzayBQcmljZTwvc3Bhbj59XHJcbi8vICAgIC8+XHJcbi8vICAgIDxDYXJkLkJvZHk+XHJcbi8vXHJcbi8vICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9pbWFnZXMvd2lyZWZyYW1lL2ltYWdlLnBuZ1wiIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBmbG9hdCA6ICdsZWZ0JyAsIGFsaWduIDogJ2xlZnQnfX0gYWx0PVwiZG91YmxlIGNvdmVcIi8+XHJcbi8vICAgICAgIDxMaXN0IHJlbmRlckhlYWRlcj17KCkgPT4gJ+WfuuacrOagt+W8jyd9IGNsYXNzTmFtZT1cIm15LWxpc3RcIj5cclxuLy8gPExpc3QuSXRlbSBleHRyYT17J+WGheWuueWGheWuuSd9Puagh+mimOaWh+WtlzwvTGlzdC5JdGVtPlxyXG4vLyA8L0xpc3Q+XHJcbi8vIDxiciBzdHlsZT17eyBjbGVhcjogJ2JvdGgnIH19IC8+XHJcbi8vXHJcbi8vICAgIDwvQ2FyZC5Cb2R5PlxyXG4vLyAgICA8Q2FyZC5Gb290ZXIgY29udGVudD17PEJ1dHRvbiB0eXBlPVwiZ2hvc3RcIiBpbmxpbmUgc2l6ZT1cInNtYWxsXCI+SGVsbG88L0J1dHRvbj59IGV4dHJhPXs8aDM+JDMwMOiQrOWFgzwvaDM+fSAvPlxyXG4vLyAgPC9DYXJkPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8g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");

/***/ })

})
webpackJsonp([6],{753:function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.default = undefined;\n\nvar _css = __webpack_require__(113);\n\nvar _noticeBar = __webpack_require__(112);\n\nvar _noticeBar2 = _interopRequireDefault(_noticeBar);\n\nvar _css2 = __webpack_require__(50);\n\nvar _icon = __webpack_require__(49);\n\nvar _icon2 = _interopRequireDefault(_icon);\n\nvar _css3 = __webpack_require__(184);\n\nvar _swipeAction = __webpack_require__(183);\n\nvar _swipeAction2 = _interopRequireDefault(_swipeAction);\n\nvar _css4 = __webpack_require__(29);\n\nvar _badge = __webpack_require__(28);\n\nvar _badge2 = _interopRequireDefault(_badge);\n\nvar _css5 = __webpack_require__(115);\n\nvar _toast = __webpack_require__(114);\n\nvar _toast2 = _interopRequireDefault(_toast);\n\nvar _css6 = __webpack_require__(21);\n\nvar _list = __webpack_require__(23);\n\nvar _list2 = _interopRequireDefault(_list);\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _class;\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _rcForm = __webpack_require__(30);\n\nvar _moment = __webpack_require__(174);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\n__webpack_require__(760);\n\nvar _userModelView = __webpack_require__(27);\n\nvar _mobxReact = __webpack_require__(13);\n\nvar _mobxStore = __webpack_require__(14);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _views = __webpack_require__(18);\n\nvar _views2 = _interopRequireDefault(_views);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Item = _list2.default.Item;\nvar Brief = Item.Brief;\n\n// const BUILDING_NAME\n//    \'MOSDBC\' : \'迎海\',\n//    \'MOSDBC\' : \'迎海\',\n//    \'MOSCTO\' : \'第一城\',\n//    \'MOSSSC\' : \'新港城\'\n// }\n// const NameOfBuilding = [\n//   { value: \'MOSDBC\', label: \'迎海\' },\n//   { value: \'MOSCTO\', label: \'第一城\' },\n//   { value: \'MOSSSC\', label: \'新港城\' },\n// ];\n\nvar ListOfPropertysView = (0, _mobxReact.observer)(_class = function (_React$Component) {\n  _inherits(ListOfPropertysView, _React$Component);\n\n  function ListOfPropertysView() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, ListOfPropertysView);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListOfPropertysView.__proto__ || Object.getPrototypeOf(ListOfPropertysView)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (key) {\n      console.log(key);\n    }, _this.hhc = function (keyID) {\n      _this.props.history.push("/front?", keyID);\n    }, _this.loadingToast = function () {\n      _toast2.default.loading("Loading...", 1, function () {\n        console.log("Load complete !!!");\n      });\n    }, _this.successToast = function () {\n      _toast2.default.success("成功刪除!!!", 1);\n    }, _this.renderPropertys = function (model, propertys, h) {\n      var list = propertys;\n\n      // Catched empty list, don\'t do anything!\n      if (list.size === 0) {\n        return null;\n      }\n\n      var that = _this;\n\n      console.log("list size ", list.size);\n      var element = [];\n      list.forEach(function (property, keyID) {\n        if (property.typeTo === "lease") {\n          element.push(_react2.default.createElement(\n            "div",\n            { key: keyID },\n            _react2.default.createElement(\n              _swipeAction2.default,\n              {\n                style: { backgroundColor: "gray" },\n                autoClose: true,\n                right: [{\n                  text: "Cancel",\n                  onPress: function onPress() {\n                    return console.log("cancel");\n                  },\n                  style: { backgroundColor: "#ddd", color: "white" }\n                }, {\n                  text: "Delete",\n                  onPress: function onPress() {\n                    _this.successToast();\n                    model.del(keyID);\n                  },\n                  style: { backgroundColor: "#F4333C", color: "white" }\n                }],\n                left: [{\n                  text: "Reply",\n                  onPress: function onPress() {\n                    return console.log("reply");\n                  },\n                  style: { backgroundColor: "#108ee9", color: "white" }\n                }, {\n                  text: "Cancel",\n                  onPress: function onPress() {\n                    return console.log("cancel");\n                  },\n                  style: { backgroundColor: "#ddd", color: "white" }\n                }],\n                onOpen: function onOpen() {\n                  return console.log("global open");\n                },\n                onClose: function onClose() {\n                  return console.log("global close");\n                }\n              },\n              _react2.default.createElement(\n                Item,\n                {\n                  thumb: "http://hair.losstreatment.com/icons/building-down.svg",\n                  arrow: "horizontal",\n                  onClick: function onClick() {\n                    return _mobxStore2.default.router.goTo(_views2.default.matchLease, { keyID: keyID });\n                  },\n                  multipleLine: true,\n                  extra: _react2.default.createElement(_badge2.default, { text: "回覆" + property.responsedPropertys.size })\n                },\n                property.typeToLabel,\n                ":",\n                property.addressLocationLabel,\n                "/",\n                property.nameOfBuildingLabel,\n                _react2.default.createElement(\n                  Brief,\n                  null,\n                  "\\u5BE6\\u7528\\u9762\\u7A4D",\n                  property.netSize,\n                  "\\u544E/\\u79DF\\u91D1$",\n                  property.leasePrice\n                ),\n                keyID\n              )\n            )\n          ));\n        } // end of lease\n\n        if (property.typeTo === "rent") {\n          element.push(_react2.default.createElement(\n            "div",\n            { key: keyID },\n            _react2.default.createElement(\n              _swipeAction2.default,\n              {\n                style: { backgroundColor: "gray" },\n                autoClose: true,\n                right: [{\n                  text: "Cancel",\n                  onPress: function onPress() {\n                    return console.log("cancel");\n                  },\n                  style: { backgroundColor: "#ddd", color: "white" }\n                }, {\n                  text: "Delete",\n                  onPress: function onPress() {\n                    _this.successToast();\n                    model.del(keyID);\n                  },\n                  style: { backgroundColor: "#F4333C", color: "white" }\n                }],\n                left: [{\n                  text: "Reply",\n                  onPress: function onPress() {\n                    return console.log("reply");\n                  },\n                  style: { backgroundColor: "#108ee9", color: "white" }\n                }, {\n                  text: "Cancel",\n                  onPress: function onPress() {\n                    return console.log("cancel");\n                  },\n                  style: { backgroundColor: "#ddd", color: "white" }\n                }],\n                onOpen: function onOpen() {\n                  return console.log("global open");\n                },\n                onClose: function onClose() {\n                  return console.log("global close");\n                }\n              },\n              _react2.default.createElement(\n                Item,\n                {\n                  thumb: "http://hair.losstreatment.com/icons/rent-up.svg",\n                  arrow: "horizontal",\n                  onClick: function onClick() {\n                    return _mobxStore2.default.router.goTo(_views2.default.matchRent, { keyID: keyID });\n                  },\n                  multipleLine: true,\n                  extra: _react2.default.createElement(_badge2.default, { text: "回覆" + property.responsedPropertys.size })\n                },\n                property.typeToLabel,\n                ":",\n                property.addressLocationLabel,\n                "/",\n                property.nameOfBuildingLabel,\n                _react2.default.createElement(\n                  Brief,\n                  null,\n                  "\\u6700\\u5C11",\n                  property.netSizeMin,\n                  "\\u544E\\u5BE6\\u7528\\u9762\\u7A4D/\\u79DF\\u91D1\\u4E0A\\u9650$",\n                  property.rentBudgetMax\n                ),\n                keyID\n              )\n            )\n          ));\n        } // end of rent\n        if (property.typeTo === "buy") {\n          element.push(_react2.default.createElement(\n            "div",\n            { key: keyID },\n            _react2.default.createElement(\n              _swipeAction2.default,\n              {\n                style: { backgroundColor: "gray" },\n                autoClose: true,\n                right: [{\n                  text: "Cancel",\n                  onPress: function onPress() {\n                    return console.log("cancel");\n                  },\n                  style: { backgroundColor: "#ddd", color: "white" }\n                }, {\n                  text: "Delete",\n                  onPress: function onPress() {\n                    _this.successToast();\n                    model.del(keyID);\n                  },\n                  style: { backgroundColor: "#F4333C", color: "white" }\n                }],\n                left: [{\n                  text: "Reply",\n                  onPress: function onPress() {\n                    return console.log("reply");\n                  },\n                  style: { backgroundColor: "#108ee9", color: "white" }\n                }, {\n                  text: "Cancel",\n                  onPress: function onPress() {\n                    return console.log("cancel");\n                  },\n                  style: { backgroundColor: "#ddd", color: "white" }\n                }],\n                onOpen: function onOpen() {\n                  return console.log("global open");\n                },\n                onClose: function onClose() {\n                  return console.log("global close");\n                }\n              },\n              _react2.default.createElement(\n                Item,\n                {\n                  thumb: "http://hair.losstreatment.com/icons/rent-up.svg",\n                  arrow: "horizontal",\n                  onClick: function onClick() {\n                    return _mobxStore2.default.router.goTo(_views2.default.matchBuy, { keyID: keyID });\n                  },\n                  multipleLine: true,\n                  extra: _react2.default.createElement(_badge2.default, { text: "回覆" + property.responsedPropertys.size })\n                },\n                property.typeToLabel,\n                ":",\n                property.addressLocationLabel,\n                "/",\n                property.nameOfBuildingLabel,\n                _react2.default.createElement(\n                  Brief,\n                  null,\n                  "\\u6700\\u5C11 ",\n                  property.netSizeMin,\n                  "\\u544E\\u5BE6\\u7528\\u9762\\u7A4D/\\u9810\\u7B97\\u4E0A\\u9650$",\n                  property.buyBudgetMax,\n                  "\\u842C"\n                ),\n                keyID\n              )\n            )\n          ));\n        } // end of buy\n\n        if (property.typeTo === "sale") {\n          element.push(_react2.default.createElement(\n            "div",\n            { key: keyID },\n            _react2.default.createElement(\n              _swipeAction2.default,\n              {\n                style: { backgroundColor: "gray" },\n                autoClose: true,\n                right: [{\n                  text: "Cancel",\n                  onPress: function onPress() {\n                    return console.log("cancel");\n                  },\n                  style: { backgroundColor: "#ddd", color: "white" }\n                }, {\n                  text: "Delete",\n                  onPress: function onPress() {\n                    _this.successToast();\n                    model.del(keyID);\n                  },\n                  style: { backgroundColor: "#F4333C", color: "white" }\n                }],\n                left: [{\n                  text: "Reply",\n                  onPress: function onPress() {\n                    return console.log("reply");\n                  },\n                  style: { backgroundColor: "#108ee9", color: "white" }\n                }, {\n                  text: "Cancel",\n                  onPress: function onPress() {\n                    return console.log("cancel");\n                  },\n                  style: { backgroundColor: "#ddd", color: "white" }\n                }],\n                onOpen: function onOpen() {\n                  return console.log("global open");\n                },\n                onClose: function onClose() {\n                  return console.log("global close");\n                }\n              },\n              _react2.default.createElement(\n                Item,\n                {\n                  thumb: "http://hair.losstreatment.com/icons/rent.svg",\n                  arrow: "horizontal",\n                  onClick: function onClick() {\n                    return _mobxStore2.default.router.goTo(_views2.default.matchSale, { keyID: keyID });\n                  },\n                  multipleLine: true,\n                  extra: _react2.default.createElement(_badge2.default, { text: "回覆" + property.responsedPropertys.size })\n                },\n                property.typeToLabel,\n                ":",\n                property.addressLocationLabel,\n                "/",\n                property.nameOfBuildingLabel,\n                _react2.default.createElement(\n                  Brief,\n                  null,\n                  "\\u5BE6\\u7528\\u9762\\u7A4D:",\n                  property.netSize,\n                  "\\u544E/\\u552E\\u50F9$",\n                  property.salePrice,\n                  "\\u842C"\n                ),\n                keyID\n              )\n            )\n          ));\n        } // end of sale\n      });\n      return _react2.default.createElement(\n        "div",\n        null,\n        element.reverse()\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  /**\r\n   * model is userModelView, use to handle all functions , e.g. del\r\n   * propertys is list of propertys for this user\r\n   * h is a callback to handle next route wiht keyID\r\n   */\n\n\n  _createClass(ListOfPropertysView, [{\n    key: "render",\n    value: function render() {\n      //console.log( "title", this.props.title)\n      var store = this.props.store;\n\n      //    console.log( \'list of properys view .store\', store)\n\n      var that = this;\n      var handleNextProperty = this.props.handleNextProperty;\n\n\n      return _react2.default.createElement(\n        "div",\n        null,\n        _react2.default.createElement(\n          _noticeBar2.default,\n          {\n            mode: "closable",\n            icon: _react2.default.createElement(_icon2.default, { type: "check-circle-o", size: "xxs" })\n          },\n          "\\u4EE5\\u4E0B\\u662F\\u4F60\\u7684\\u904E\\u5F80\\u914D\\u5C0D!"\n        ),\n        _react2.default.createElement(\n          _list2.default,\n          { renderHeader: function renderHeader() {\n              return "你搜尋嘅樓盤";\n            }, className: "my-list" },\n          that.renderPropertys(_userModelView.propertys, _userModelView.propertys.propertys, handleNextProperty)\n        )\n      );\n    }\n  }]);\n\n  return ListOfPropertysView;\n}(_react2.default.Component)) || _class;\n\nexports.default = ListOfPropertysView;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/components/listOfPropertysView.js\n// module id = 753\n// module chunks = 6\n\n//# sourceURL=webpack:///./src/components/listOfPropertysView.js?')},760:function(module,exports,__webpack_require__){eval("//! moment.js locale configuration\n//! locale : Chinese (China) [zh-cn]\n//! author : suupic : https://github.com/suupic\n//! author : Zeno Zeng : https://github.com/zenozeng\n\n;(function (global, factory) {\n    true ? factory(__webpack_require__(174)) :\n   typeof define === 'function' && define.amd ? define(['../moment'], factory) :\n   factory(global.moment)\n}(this, (function (moment) { 'use strict';\n\n\nvar zhCn = moment.defineLocale('zh-cn', {\n    months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),\n    monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),\n    weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),\n    weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),\n    weekdaysMin : '日_一_二_三_四_五_六'.split('_'),\n    longDateFormat : {\n        LT : 'HH:mm',\n        LTS : 'HH:mm:ss',\n        L : 'YYYY年MMMD日',\n        LL : 'YYYY年MMMD日',\n        LLL : 'YYYY年MMMD日Ah点mm分',\n        LLLL : 'YYYY年MMMD日ddddAh点mm分',\n        l : 'YYYY年MMMD日',\n        ll : 'YYYY年MMMD日',\n        lll : 'YYYY年MMMD日 HH:mm',\n        llll : 'YYYY年MMMD日dddd HH:mm'\n    },\n    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,\n    meridiemHour: function (hour, meridiem) {\n        if (hour === 12) {\n            hour = 0;\n        }\n        if (meridiem === '凌晨' || meridiem === '早上' ||\n                meridiem === '上午') {\n            return hour;\n        } else if (meridiem === '下午' || meridiem === '晚上') {\n            return hour + 12;\n        } else {\n            // '中午'\n            return hour >= 11 ? hour : hour + 12;\n        }\n    },\n    meridiem : function (hour, minute, isLower) {\n        var hm = hour * 100 + minute;\n        if (hm < 600) {\n            return '凌晨';\n        } else if (hm < 900) {\n            return '早上';\n        } else if (hm < 1130) {\n            return '上午';\n        } else if (hm < 1230) {\n            return '中午';\n        } else if (hm < 1800) {\n            return '下午';\n        } else {\n            return '晚上';\n        }\n    },\n    calendar : {\n        sameDay : '[今天]LT',\n        nextDay : '[明天]LT',\n        nextWeek : '[下]ddddLT',\n        lastDay : '[昨天]LT',\n        lastWeek : '[上]ddddLT',\n        sameElse : 'L'\n    },\n    dayOfMonthOrdinalParse: /\\d{1,2}(日|月|周)/,\n    ordinal : function (number, period) {\n        switch (period) {\n            case 'd':\n            case 'D':\n            case 'DDD':\n                return number + '日';\n            case 'M':\n                return number + '月';\n            case 'w':\n            case 'W':\n                return number + '周';\n            default:\n                return number;\n        }\n    },\n    relativeTime : {\n        future : '%s内',\n        past : '%s前',\n        s : '几秒',\n        m : '1 分钟',\n        mm : '%d 分钟',\n        h : '1 小时',\n        hh : '%d 小时',\n        d : '1 天',\n        dd : '%d 天',\n        M : '1 个月',\n        MM : '%d 个月',\n        y : '1 年',\n        yy : '%d 年'\n    },\n    week : {\n        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效\n        dow : 1, // Monday is the first day of the week.\n        doy : 4  // The week that contains Jan 4th is the first week of the year.\n    }\n});\n\nreturn zhCn;\n\n})));\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/moment/locale/zh-cn.js\n// module id = 760\n// module chunks = 0 1 2 3 4 5 6\n\n//# sourceURL=webpack:///./~/moment/locale/zh-cn.js?")}});
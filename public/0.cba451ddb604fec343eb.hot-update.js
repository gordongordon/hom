webpackHotUpdate(0,{

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mobxRouter = __webpack_require__(260);\n\nvar _listOfPropertysView = __webpack_require__(621);\n\nvar _frontPageView = __webpack_require__(946);\n\nvar _mobxStore = __webpack_require__(295);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _moment = __webpack_require__(764);\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _formSalePropertyAntMobile = __webpack_require__(978);\n\nvar _formLeasePropertyAntMobile = __webpack_require__(1046);\n\nvar _formBuyPropertyAntMobile = __webpack_require__(1049);\n\nvar _formRentPropertyAntMobile = __webpack_require__(1060);\n\nvar _formBuyAgentPropertyAntMobile = __webpack_require__(1061);\n\nvar _formSaleAgentPropertyAntMobile = __webpack_require__(1062);\n\nvar _formRentAgentPropertyAntMobile = __webpack_require__(1063);\n\nvar _formLeaseAgentPropertyAntMobile = __webpack_require__(1064);\n\nvar _matchLeasePanelView = __webpack_require__(1065);\n\nvar _matchRentPanelView = __webpack_require__(1086);\n\nvar _matchSalePanelView = __webpack_require__(1090);\n\nvar _matchBuyPanelView = __webpack_require__(1094);\n\nvar _matchAgentPanelView = __webpack_require__(1098);\n\nvar _agentAppView = __webpack_require__(1101);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// From chatbot\n//import FormSaleChatbot from 'chatbot/formSaleChatbot'\n//import BMIChatbot from 'chatbot/bmiChatbot'\n\n// testing\n// import TestListView from 'testListView'\n\n// Match Panel views\n\n// From for agents\n\n\n// Form\n\n\n//components\n//import {MatchPanelViewWrapper} from 'matchPanelView'\nvar save = false;\n//import FrontPage from 'frontPage'\n//import {MobxRouter} from 'mobx-router';\n\n//import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'\n\n\n//models\n\n\nvar views = {\n  home: new _mobxRouter.Route({\n    path: '/',\n    component: _react2.default.createElement(_frontPageView.FrontPageView, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('好 .. Matching');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  agent: new _mobxRouter.Route({\n    path: '/agent',\n    component: _react2.default.createElement(_agentAppView.AgentAppView, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('Agent App View');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  list: new _mobxRouter.Route({\n    path: '/list',\n    component: _react2.default.createElement(_listOfPropertysView.ListOfPropertysView, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n\n      console.log('entering ListOfPropertysView!');\n      _mobxStore2.default.app.title = \"你的儲存樓盤\";\n      if (save) {\n        _mobxStore2.default.app.previousView = _mobxStore2.default.app.viewHistory.get('second');\n      }\n      if (!save) {\n        _mobxStore2.default.app.viewHistory.set('list', _mobxStore2.default.app.previousView);\n        save = true;\n      }\n    },\n    beforeEnter: function beforeEnter(route, params, store) {\n      var userIsLoggedIn = _mobxStore2.default.app.user;\n      if (!userIsLoggedIn) {\n        alert('Only logged in users can enter this route!');\n        return false;\n      }\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    } }),\n  matchLease: new _mobxRouter.Route({\n    path: '/matchLease/:keyID',\n    // timeEnter for matching items only that time and after\n    component: _react2.default.createElement(_matchLeasePanelView.MatchLeasePanelViewWrapper, { timeEnter: (0, _moment2.default)('YYYY-MM-DD HH:mm:ss').utcOffset(9) }),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      console.log('third.current query params are -> ', queryParams);\n      console.log('third.current params are -> ', params);\n      _mobxStore2.default.app.setTitle('最新鮮配對 Lease');\n      console.log('route', route);\n      _mobxStore2.default.app.viewHistory.set('matchLease', _mobxStore2.default.app.previousView);\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting user profile!');\n      console.log('third. params', params);\n      //MobxStore.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    }\n  }),\n  matchRent: new _mobxRouter.Route({\n    path: '/matchRent/:keyID',\n    component: _react2.default.createElement(_matchRentPanelView.MatchRentPanelViewWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      console.log('third.current query params are -> ', queryParams);\n      console.log('third.current params are -> ', params);\n      _mobxStore2.default.app.setTitle('最新鮮配對 Rent');\n      console.log('route', route);\n      _mobxStore2.default.app.viewHistory.set('matchRent', _mobxStore2.default.app.previousView);\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting user profile!');\n      console.log('third. params', params);\n      //MobxStore.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    }\n  }),\n  matchSale: new _mobxRouter.Route({\n    path: '/matchSale/:keyID',\n    component: _react2.default.createElement(_matchSalePanelView.MatchSalePanelViewWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      console.log('third.current query params are -> ', queryParams);\n      console.log('third.current params are -> ', params);\n      _mobxStore2.default.app.setTitle('最新鮮配對 Sale');\n      console.log('route', route);\n      _mobxStore2.default.app.viewHistory.set('matchSale', _mobxStore2.default.app.previousView);\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting user profile!');\n      console.log('third. params', params);\n      //MobxStore.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    }\n  }),\n  matchBuy: new _mobxRouter.Route({\n    path: '/matchBuy/:keyID',\n    component: _react2.default.createElement(_matchBuyPanelView.MatchBuyPanelViewWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      console.log('third.current query params are -> ', queryParams);\n      console.log('third.current params are -> ', params);\n      _mobxStore2.default.app.setTitle('最新鮮配對 buy');\n      console.log('route', route);\n      _mobxStore2.default.app.viewHistory.set('matchBuy', _mobxStore2.default.app.previousView);\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting user profile!');\n      console.log('third. params', params);\n      //MobxStore.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    }\n  }),\n  matchAgent: new _mobxRouter.Route({\n    path: '/matchAgent',\n    component: _react2.default.createElement(_matchAgentPanelView.MatchAgentPanelViewWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      console.log('third.current query params are -> ', queryParams);\n      console.log('third.current params are -> ', params);\n      _mobxStore2.default.app.setTitle('Agent');\n      console.log('route', route);\n      _mobxStore2.default.app.viewHistory.set('matchBuy', _mobxStore2.default.app.previousView);\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting user profile!');\n      console.log('third. params', params);\n      //MobxStore.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    }\n  }),\n  lease: new _mobxRouter.Route({\n    path: '/lease',\n    component: _react2.default.createElement(_formLeasePropertyAntMobile.FormLeasePropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('放 租');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  rent: new _mobxRouter.Route({\n    path: '/rent',\n    component: _react2.default.createElement(_formRentPropertyAntMobile.FormRentPropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('租 屋');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  buy: new _mobxRouter.Route({\n    path: '/buy',\n    component: _react2.default.createElement(_formBuyPropertyAntMobile.FormBuyPropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('買 樓');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  sale: new _mobxRouter.Route({\n    path: '/sale',\n    component: _react2.default.createElement(_formSalePropertyAntMobile.FormSalePropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('賣 樓');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  buyAgentForm: new _mobxRouter.Route({\n    path: '/buyAgentForm',\n    component: _react2.default.createElement(_formBuyAgentPropertyAntMobile.FormBuyAgentPropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('地產代理回復 賣家');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  saleAgentForm: new _mobxRouter.Route({\n    path: '/SaleAgentForm',\n    component: _react2.default.createElement(_formSaleAgentPropertyAntMobile.FormSaleAgentPropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('地產代理回復 買家');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  rentAgentForm: new _mobxRouter.Route({\n    path: '/RentAgentForm',\n    component: _react2.default.createElement(_formRentAgentPropertyAntMobile.FormRentAgentPropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('地產代理回復 放 租');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  leaseAgentForm: new _mobxRouter.Route({\n    path: '/LeaseAgentForm',\n    component: _react2.default.createElement(_formLeaseAgentPropertyAntMobile.FormLeaseAgentPropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('地產代理回復 租 屋');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  })\n  // For Chat bot example\n  // formSaleChatbot : new Route({\n  //   path: '/FormSaleChatbox',\n  //   component: <FormSaleChatbot />,\n  //   onEnter: (route, params, store, queryParams) => {\n  //     MobxStore.app.setTitle( 'Chat Bot 賣 樓');\n  //   },\n  //   beforeExit: (route, params) => {\n  //     console.log('exiting ListOfPRoperysView!');\n  //     console.log('params changed to', params);\n  //     MobxStore.app.previousView = route;\n  //   }\n  // }),\n  // bmi : new Route({\n  //   path: '/bmi',\n  //   component: <BMIChatbot />,\n  //   onEnter: (route, params, store, queryParams) => {\n  //     MobxStore.app.setTitle( 'Chat Bot 賣 樓');\n  //\n  //   },\n  //   beforeExit: (route, params) => {\n  //     console.log('exiting ListOfPRoperysView!');\n  //     console.log('params changed to', params);\n  //     MobxStore.app.previousView = route;\n  //   }\n  // })\n\n\n};\nexports.default = views;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjIwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3ZpZXdzLmpzP2VmZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vbW9kZWxzXHJcbmltcG9ydCB7Um91dGV9IGZyb20gJ21vYngtcm91dGVyJztcclxuXHJcbi8vY29tcG9uZW50c1xyXG4vL2ltcG9ydCB7TWF0Y2hQYW5lbFZpZXdXcmFwcGVyfSBmcm9tICdtYXRjaFBhbmVsVmlldydcclxuaW1wb3J0IHtMaXN0T2ZQcm9wZXJ0eXNWaWV3fSBmcm9tICdsaXN0T2ZQcm9wZXJ0eXNWaWV3J1xyXG4vL2ltcG9ydCB7RnJvbnRQYXBlUGFuZWxWaWV3U2VnbWVudH0gZnJvbSAnZnJvbnRQYWdlUGFuZWxWaWV3U2VnbWVudCdcclxuaW1wb3J0IHtGcm9udFBhZ2VWaWV3fSBmcm9tICdmcm9udFBhZ2VWaWV3J1xyXG5pbXBvcnQgTW9ieFN0b3JlIGZyb20gJ21vYnhTdG9yZSc7XHJcbi8vaW1wb3J0IEZyb250UGFnZSBmcm9tICdmcm9udFBhZ2UnXHJcbi8vaW1wb3J0IHtNb2J4Um91dGVyfSBmcm9tICdtb2J4LXJvdXRlcic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcblxyXG4vLyBGb3JtXHJcbmltcG9ydCB7Rm9ybVNhbGVQcm9wZXJ0eUFudE1vYmlsZVdyYXBwZXJ9IGZyb20gJ2Zvcm0vZm9ybVNhbGVQcm9wZXJ0eUFudE1vYmlsZSc7XHJcbmltcG9ydCB7Rm9ybUxlYXNlUHJvcGVydHlBbnRNb2JpbGVXcmFwcGVyfSBmcm9tICdmb3JtL2Zvcm1MZWFzZVByb3BlcnR5QW50TW9iaWxlJztcclxuaW1wb3J0IHtGb3JtQnV5UHJvcGVydHlBbnRNb2JpbGVXcmFwcGVyfSBmcm9tICdmb3JtL2Zvcm1CdXlQcm9wZXJ0eUFudE1vYmlsZSc7XHJcbmltcG9ydCB7Rm9ybVJlbnRQcm9wZXJ0eUFudE1vYmlsZVdyYXBwZXJ9IGZyb20gJ2Zvcm0vZm9ybVJlbnRQcm9wZXJ0eUFudE1vYmlsZSc7XHJcbi8vIEZyb20gZm9yIGFnZW50c1xyXG5pbXBvcnQge0Zvcm1CdXlBZ2VudFByb3BlcnR5QW50TW9iaWxlV3JhcHBlcn0gZnJvbSAnZm9ybS9mb3JtQnV5QWdlbnRQcm9wZXJ0eUFudE1vYmlsZSc7XHJcbmltcG9ydCB7Rm9ybVNhbGVBZ2VudFByb3BlcnR5QW50TW9iaWxlV3JhcHBlcn0gZnJvbSAnZm9ybS9mb3JtU2FsZUFnZW50UHJvcGVydHlBbnRNb2JpbGUnO1xyXG5pbXBvcnQge0Zvcm1SZW50QWdlbnRQcm9wZXJ0eUFudE1vYmlsZVdyYXBwZXJ9IGZyb20gJ2Zvcm0vZm9ybVJlbnRBZ2VudFByb3BlcnR5QW50TW9iaWxlJztcclxuaW1wb3J0IHtGb3JtTGVhc2VBZ2VudFByb3BlcnR5QW50TW9iaWxlV3JhcHBlcn0gZnJvbSAnZm9ybS9mb3JtTGVhc2VBZ2VudFByb3BlcnR5QW50TW9iaWxlJztcclxuLy8gTWF0Y2ggUGFuZWwgdmlld3NcclxuaW1wb3J0IHtNYXRjaExlYXNlUGFuZWxWaWV3V3JhcHBlcn0gZnJvbSAnbWF0Y2hQYW5lbC9tYXRjaExlYXNlUGFuZWxWaWV3J1xyXG5pbXBvcnQge01hdGNoUmVudFBhbmVsVmlld1dyYXBwZXJ9IGZyb20gJ21hdGNoUGFuZWwvbWF0Y2hSZW50UGFuZWxWaWV3J1xyXG5pbXBvcnQge01hdGNoU2FsZVBhbmVsVmlld1dyYXBwZXJ9IGZyb20gJ21hdGNoUGFuZWwvbWF0Y2hTYWxlUGFuZWxWaWV3J1xyXG5pbXBvcnQge01hdGNoQnV5UGFuZWxWaWV3V3JhcHBlcn0gZnJvbSAnbWF0Y2hQYW5lbC9tYXRjaEJ1eVBhbmVsVmlldydcclxuaW1wb3J0IHtNYXRjaEFnZW50UGFuZWxWaWV3V3JhcHBlcn0gZnJvbSAnbWF0Y2hQYW5lbC9tYXRjaEFnZW50UGFuZWxWaWV3J1xyXG5cclxuaW1wb3J0IHtBZ2VudEFwcFZpZXd9IGZyb20gJ2FnZW50QXBwVmlldydcclxuXHJcbi8vIEZyb20gY2hhdGJvdFxyXG4vL2ltcG9ydCBGb3JtU2FsZUNoYXRib3QgZnJvbSAnY2hhdGJvdC9mb3JtU2FsZUNoYXRib3QnXHJcbi8vaW1wb3J0IEJNSUNoYXRib3QgZnJvbSAnY2hhdGJvdC9ibWlDaGF0Ym90J1xyXG5cclxuLy8gdGVzdGluZ1xyXG4vLyBpbXBvcnQgVGVzdExpc3RWaWV3IGZyb20gJ3Rlc3RMaXN0VmlldydcclxuXHJcbnZhciBzYXZlID0gZmFsc2U7XHJcblxyXG5jb25zdCB2aWV3cyA9IHtcclxuICBob21lOiBuZXcgUm91dGUoe1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgY29tcG9uZW50OiA8RnJvbnRQYWdlVmlldy8+LFxyXG4gICAgb25FbnRlcjogKHJvdXRlLCBwYXJhbXMsIHN0b3JlLCBxdWVyeVBhcmFtcykgPT4ge1xyXG4gICAgICBNb2J4U3RvcmUuYXBwLnNldFRpdGxlKCAn5aW9IC4uIE1hdGNoaW5nJyk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2V4aXRpbmcgTGlzdE9mUFJvcGVyeXNWaWV3IScpO1xyXG4gICAgICBjb25zb2xlLmxvZygncGFyYW1zIGNoYW5nZWQgdG8nLCBwYXJhbXMpO1xyXG4gICAgICBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IHJvdXRlO1xyXG4gICAgfVxyXG4gIH0pLFxyXG4gIGFnZW50OiBuZXcgUm91dGUoe1xyXG4gICAgcGF0aDogJy9hZ2VudCcsXHJcbiAgICBjb21wb25lbnQ6IDxBZ2VudEFwcFZpZXcvPixcclxuICAgIG9uRW50ZXI6IChyb3V0ZSwgcGFyYW1zLCBzdG9yZSwgcXVlcnlQYXJhbXMpID0+IHtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5zZXRUaXRsZSggJ0FnZW50IEFwcCBWaWV3Jyk7XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2V4aXRpbmcgTGlzdE9mUFJvcGVyeXNWaWV3IScpO1xyXG4gICAgICBjb25zb2xlLmxvZygncGFyYW1zIGNoYW5nZWQgdG8nLCBwYXJhbXMpO1xyXG4gICAgICBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IHJvdXRlO1xyXG4gICAgfVxyXG4gIH0pLFxyXG4gIGxpc3Q6IG5ldyBSb3V0ZSh7XHJcbiAgICBwYXRoOiAnL2xpc3QnLFxyXG4gICAgY29tcG9uZW50OiA8TGlzdE9mUHJvcGVydHlzVmlldyAvPixcclxuICAgIG9uRW50ZXI6ICggcm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zICkgPT4ge1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ2VudGVyaW5nIExpc3RPZlByb3BlcnR5c1ZpZXchJyk7XHJcbiAgICAgIE1vYnhTdG9yZS5hcHAudGl0bGUgPSBcIuS9oOeahOWEsuWtmOaok+ebpFwiXHJcbiAgICAgIGlmICggc2F2ZSApXHJcbiAgICAgIHtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSBNb2J4U3RvcmUuYXBwLnZpZXdIaXN0b3J5LmdldCggJ3NlY29uZCcpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCAhc2F2ZSApXHJcbiAgICAgIHsgTW9ieFN0b3JlLmFwcC52aWV3SGlzdG9yeS5zZXQoICdsaXN0JywgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgIClcclxuICAgICAgICBzYXZlID0gdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRW50ZXI6IChyb3V0ZSwgcGFyYW1zLCBzdG9yZSkgPT4ge1xyXG4gICAgICBjb25zdCB1c2VySXNMb2dnZWRJbiA9IE1vYnhTdG9yZS5hcHAudXNlcjtcclxuICAgICAgaWYgKCF1c2VySXNMb2dnZWRJbikge1xyXG4gICAgICAgIGFsZXJ0KCdPbmx5IGxvZ2dlZCBpbiB1c2VycyBjYW4gZW50ZXIgdGhpcyByb3V0ZSEnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiZWZvcmVFeGl0OiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXhpdGluZyBMaXN0T2ZQUm9wZXJ5c1ZpZXchJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMgY2hhbmdlZCB0bycsIHBhcmFtcyk7XHJcbiAgICAgIE1vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ID0gcm91dGU7XHJcbiAgICAgIE1vYnhTdG9yZS5hcHAucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgfSxcclxuICAgIG9uUGFyYW1zQ2hhbmdlOiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygncGFyYW1zIGNoYW5nZWQgdG8nLCBwYXJhbXMpO1xyXG4gICAgfX0pLFxyXG4gIG1hdGNoTGVhc2U6IG5ldyBSb3V0ZSh7XHJcbiAgICAgIHBhdGg6ICcvbWF0Y2hMZWFzZS86a2V5SUQnLFxyXG4gICAgICAvLyB0aW1lRW50ZXIgZm9yIG1hdGNoaW5nIGl0ZW1zIG9ubHkgdGhhdCB0aW1lIGFuZCBhZnRlclxyXG4gICAgICBjb21wb25lbnQ6IDxNYXRjaExlYXNlUGFuZWxWaWV3V3JhcHBlciB0aW1lRW50ZXI9e21vbWVudCgnWVlZWS1NTS1ERCBISDptbTpzcycpLnV0Y09mZnNldCg5KX0vPixcclxuICAgICAgb25FbnRlcjogKHJvdXRlLCBwYXJhbXMsIHN0b3JlLCBxdWVyeVBhcmFtcykgPT4ge1xyXG4gICAgICBcdGNvbnNvbGUubG9nKCd0aGlyZC5jdXJyZW50IHF1ZXJ5IHBhcmFtcyBhcmUgLT4gJywgcXVlcnlQYXJhbXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlyZC5jdXJyZW50IHBhcmFtcyBhcmUgLT4gJywgcGFyYW1zKTtcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnNldFRpdGxlKCAn5pyA5paw6a6u6YWN5bCNIExlYXNlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JvdXRlJywgcm91dGUpXHJcbiAgICAgICAgTW9ieFN0b3JlLmFwcC52aWV3SGlzdG9yeS5zZXQoICdtYXRjaExlYXNlJywgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgIClcclxuICAgICAgfSxcclxuICAgICAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXhpdGluZyB1c2VyIHByb2ZpbGUhJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXJkLiBwYXJhbXMnLCBwYXJhbXMpO1xyXG4gICAgICAgIC8vTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSByb3V0ZTtcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnBhcmFtcyA9IHBhcmFtcztcclxuICAgICAgfSxcclxuICAgICAgb25QYXJhbXNDaGFuZ2U6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtcyBjaGFuZ2VkIHRvJywgcGFyYW1zKTtcclxuICAgICAgfVxyXG4gIH0pLFxyXG4gIG1hdGNoUmVudDogbmV3IFJvdXRlKHtcclxuICAgICAgcGF0aDogJy9tYXRjaFJlbnQvOmtleUlEJyxcclxuICAgICAgY29tcG9uZW50OiA8TWF0Y2hSZW50UGFuZWxWaWV3V3JhcHBlciAvPixcclxuICAgICAgb25FbnRlcjogKHJvdXRlLCBwYXJhbXMsIHN0b3JlLCBxdWVyeVBhcmFtcykgPT4ge1xyXG4gICAgICBcdGNvbnNvbGUubG9nKCd0aGlyZC5jdXJyZW50IHF1ZXJ5IHBhcmFtcyBhcmUgLT4gJywgcXVlcnlQYXJhbXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlyZC5jdXJyZW50IHBhcmFtcyBhcmUgLT4gJywgcGFyYW1zKTtcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnNldFRpdGxlKCAn5pyA5paw6a6u6YWN5bCNIFJlbnQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncm91dGUnLCByb3V0ZSlcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnZpZXdIaXN0b3J5LnNldCggJ21hdGNoUmVudCcsIE1vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ICApXHJcbiAgICAgIH0sXHJcbiAgICAgIGJlZm9yZUV4aXQ6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2V4aXRpbmcgdXNlciBwcm9maWxlIScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlyZC4gcGFyYW1zJywgcGFyYW1zKTtcclxuICAgICAgICAvL01vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ID0gcm91dGU7XHJcbiAgICAgICAgTW9ieFN0b3JlLmFwcC5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uUGFyYW1zQ2hhbmdlOiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMgY2hhbmdlZCB0bycsIHBhcmFtcyk7XHJcbiAgICAgIH1cclxuICB9KSxcclxuICBtYXRjaFNhbGU6IG5ldyBSb3V0ZSh7XHJcbiAgICAgIHBhdGg6ICcvbWF0Y2hTYWxlLzprZXlJRCcsXHJcbiAgICAgIGNvbXBvbmVudDogPE1hdGNoU2FsZVBhbmVsVmlld1dyYXBwZXIgLz4sXHJcbiAgICAgIG9uRW50ZXI6IChyb3V0ZSwgcGFyYW1zLCBzdG9yZSwgcXVlcnlQYXJhbXMpID0+IHtcclxuICAgICAgXHRjb25zb2xlLmxvZygndGhpcmQuY3VycmVudCBxdWVyeSBwYXJhbXMgYXJlIC0+ICcsIHF1ZXJ5UGFyYW1zKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcmQuY3VycmVudCBwYXJhbXMgYXJlIC0+ICcsIHBhcmFtcyk7XHJcbiAgICAgICAgTW9ieFN0b3JlLmFwcC5zZXRUaXRsZSggJ+acgOaWsOmurumFjeWwjSBTYWxlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JvdXRlJywgcm91dGUpXHJcbiAgICAgICAgTW9ieFN0b3JlLmFwcC52aWV3SGlzdG9yeS5zZXQoICdtYXRjaFNhbGUnLCBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyAgKVxyXG4gICAgICB9LFxyXG4gICAgICBiZWZvcmVFeGl0OiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdleGl0aW5nIHVzZXIgcHJvZmlsZSEnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcmQuIHBhcmFtcycsIHBhcmFtcyk7XHJcbiAgICAgICAgLy9Nb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IHJvdXRlO1xyXG4gICAgICAgIE1vYnhTdG9yZS5hcHAucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgICB9LFxyXG4gICAgICBvblBhcmFtc0NoYW5nZTogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncGFyYW1zIGNoYW5nZWQgdG8nLCBwYXJhbXMpO1xyXG4gICAgICB9XHJcbiAgfSksXHJcbiAgbWF0Y2hCdXk6IG5ldyBSb3V0ZSh7XHJcbiAgICAgIHBhdGg6ICcvbWF0Y2hCdXkvOmtleUlEJyxcclxuICAgICAgY29tcG9uZW50OiA8TWF0Y2hCdXlQYW5lbFZpZXdXcmFwcGVyIC8+LFxyXG4gICAgICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICAgIFx0Y29uc29sZS5sb2coJ3RoaXJkLmN1cnJlbnQgcXVlcnkgcGFyYW1zIGFyZSAtPiAnLCBxdWVyeVBhcmFtcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXJkLmN1cnJlbnQgcGFyYW1zIGFyZSAtPiAnLCBwYXJhbXMpO1xyXG4gICAgICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICfmnIDmlrDprq7phY3lsI0gYnV5Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JvdXRlJywgcm91dGUpXHJcbiAgICAgICAgTW9ieFN0b3JlLmFwcC52aWV3SGlzdG9yeS5zZXQoICdtYXRjaEJ1eScsIE1vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ICApXHJcbiAgICAgIH0sXHJcbiAgICAgIGJlZm9yZUV4aXQ6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2V4aXRpbmcgdXNlciBwcm9maWxlIScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlyZC4gcGFyYW1zJywgcGFyYW1zKTtcclxuICAgICAgICAvL01vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ID0gcm91dGU7XHJcbiAgICAgICAgTW9ieFN0b3JlLmFwcC5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uUGFyYW1zQ2hhbmdlOiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMgY2hhbmdlZCB0bycsIHBhcmFtcyk7XHJcbiAgICAgIH1cclxuICB9KSxcclxuICBtYXRjaEFnZW50OiBuZXcgUm91dGUoe1xyXG4gICAgICBwYXRoOiAnL21hdGNoQWdlbnQnLFxyXG4gICAgICBjb21wb25lbnQ6IDxNYXRjaEFnZW50UGFuZWxWaWV3V3JhcHBlciAvPixcclxuICAgICAgb25FbnRlcjogKHJvdXRlLCBwYXJhbXMsIHN0b3JlLCBxdWVyeVBhcmFtcykgPT4ge1xyXG4gICAgICBcdGNvbnNvbGUubG9nKCd0aGlyZC5jdXJyZW50IHF1ZXJ5IHBhcmFtcyBhcmUgLT4gJywgcXVlcnlQYXJhbXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlyZC5jdXJyZW50IHBhcmFtcyBhcmUgLT4gJywgcGFyYW1zKTtcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnNldFRpdGxlKCAnQWdlbnQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncm91dGUnLCByb3V0ZSlcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnZpZXdIaXN0b3J5LnNldCggJ21hdGNoQnV5JywgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgIClcclxuICAgICAgfSxcclxuICAgICAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXhpdGluZyB1c2VyIHByb2ZpbGUhJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXJkLiBwYXJhbXMnLCBwYXJhbXMpO1xyXG4gICAgICAgIC8vTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSByb3V0ZTtcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnBhcmFtcyA9IHBhcmFtcztcclxuICAgICAgfSxcclxuICAgICAgb25QYXJhbXNDaGFuZ2U6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtcyBjaGFuZ2VkIHRvJywgcGFyYW1zKTtcclxuICAgICAgfVxyXG4gIH0pLFxyXG4gIGxlYXNlIDogbmV3IFJvdXRlKHtcclxuICAgIHBhdGg6ICcvbGVhc2UnLFxyXG4gICAgY29tcG9uZW50OiA8Rm9ybUxlYXNlUHJvcGVydHlBbnRNb2JpbGVXcmFwcGVyIC8+LFxyXG4gICAgb25FbnRlcjogKHJvdXRlLCBwYXJhbXMsIHN0b3JlLCBxdWVyeVBhcmFtcykgPT4ge1xyXG4gICAgICBNb2J4U3RvcmUuYXBwLnNldFRpdGxlKCAn5pS+IOennycpO1xyXG5cclxuICAgIH0sXHJcbiAgICBiZWZvcmVFeGl0OiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXhpdGluZyBMaXN0T2ZQUm9wZXJ5c1ZpZXchJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMgY2hhbmdlZCB0bycsIHBhcmFtcyk7XHJcbiAgICAgIE1vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ID0gcm91dGU7XHJcbiAgICB9XHJcbiAgfSksXHJcbiAgcmVudCA6IG5ldyBSb3V0ZSh7XHJcbiAgICBwYXRoOiAnL3JlbnQnLFxyXG4gICAgY29tcG9uZW50OiA8Rm9ybVJlbnRQcm9wZXJ0eUFudE1vYmlsZVdyYXBwZXIgLz4sXHJcbiAgICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICfnp58g5bGLJyk7XHJcblxyXG4gICAgfSxcclxuICAgIGJlZm9yZUV4aXQ6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdleGl0aW5nIExpc3RPZlBSb3BlcnlzVmlldyEnKTtcclxuICAgICAgY29uc29sZS5sb2coJ3BhcmFtcyBjaGFuZ2VkIHRvJywgcGFyYW1zKTtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSByb3V0ZTtcclxuICAgIH1cclxuICB9KSxcclxuICBidXkgOiBuZXcgUm91dGUoe1xyXG4gICAgcGF0aDogJy9idXknLFxyXG4gICAgY29tcG9uZW50OiA8Rm9ybUJ1eVByb3BlcnR5QW50TW9iaWxlV3JhcHBlciAvPixcclxuICAgIG9uRW50ZXI6IChyb3V0ZSwgcGFyYW1zLCBzdG9yZSwgcXVlcnlQYXJhbXMpID0+IHtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5zZXRUaXRsZSggJ+iytyDmqJMnKTtcclxuICAgIH0sXHJcbiAgICBiZWZvcmVFeGl0OiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXhpdGluZyBMaXN0T2ZQUm9wZXJ5c1ZpZXchJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMgY2hhbmdlZCB0bycsIHBhcmFtcyk7XHJcbiAgICAgIE1vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ID0gcm91dGU7XHJcbiAgICB9XHJcbiAgfSksXHJcbiAgc2FsZSA6IG5ldyBSb3V0ZSh7XHJcbiAgICBwYXRoOiAnL3NhbGUnLFxyXG4gICAgY29tcG9uZW50OiA8Rm9ybVNhbGVQcm9wZXJ0eUFudE1vYmlsZVdyYXBwZXIgLz4sXHJcbiAgICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICfos6Mg5qiTJyk7XHJcblxyXG4gICAgfSxcclxuICAgIGJlZm9yZUV4aXQ6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdleGl0aW5nIExpc3RPZlBSb3BlcnlzVmlldyEnKTtcclxuICAgICAgY29uc29sZS5sb2coJ3BhcmFtcyBjaGFuZ2VkIHRvJywgcGFyYW1zKTtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSByb3V0ZTtcclxuICAgIH1cclxuICB9KSxcclxuYnV5QWdlbnRGb3JtIDogbmV3IFJvdXRlKHtcclxuICBwYXRoOiAnL2J1eUFnZW50Rm9ybScsXHJcbiAgY29tcG9uZW50OiA8Rm9ybUJ1eUFnZW50UHJvcGVydHlBbnRNb2JpbGVXcmFwcGVyIC8+LFxyXG4gIG9uRW50ZXI6IChyb3V0ZSwgcGFyYW1zLCBzdG9yZSwgcXVlcnlQYXJhbXMpID0+IHtcclxuICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICflnLDnlKLku6PnkIblm57lvqkg6LOj5a62Jyk7XHJcblxyXG4gIH0sXHJcbiAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdleGl0aW5nIExpc3RPZlBSb3BlcnlzVmlldyEnKTtcclxuICAgIGNvbnNvbGUubG9nKCdwYXJhbXMgY2hhbmdlZCB0bycsIHBhcmFtcyk7XHJcbiAgICBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IHJvdXRlO1xyXG4gIH1cclxufSksXHJcbnNhbGVBZ2VudEZvcm0gOiBuZXcgUm91dGUoe1xyXG4gIHBhdGg6ICcvU2FsZUFnZW50Rm9ybScsXHJcbiAgY29tcG9uZW50OiA8Rm9ybVNhbGVBZ2VudFByb3BlcnR5QW50TW9iaWxlV3JhcHBlciAvPixcclxuICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICBNb2J4U3RvcmUuYXBwLnNldFRpdGxlKCAn5Zyw55Si5Luj55CG5Zue5b6pIOiyt+WuticpO1xyXG5cclxuICB9LFxyXG4gIGJlZm9yZUV4aXQ6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZXhpdGluZyBMaXN0T2ZQUm9wZXJ5c1ZpZXchJyk7XHJcbiAgICBjb25zb2xlLmxvZygncGFyYW1zIGNoYW5nZWQgdG8nLCBwYXJhbXMpO1xyXG4gICAgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSByb3V0ZTtcclxuICB9XHJcbn0pLFxyXG5yZW50QWdlbnRGb3JtIDogbmV3IFJvdXRlKHtcclxuICBwYXRoOiAnL1JlbnRBZ2VudEZvcm0nLFxyXG4gIGNvbXBvbmVudDogPEZvcm1SZW50QWdlbnRQcm9wZXJ0eUFudE1vYmlsZVdyYXBwZXIgLz4sXHJcbiAgb25FbnRlcjogKHJvdXRlLCBwYXJhbXMsIHN0b3JlLCBxdWVyeVBhcmFtcykgPT4ge1xyXG4gICAgTW9ieFN0b3JlLmFwcC5zZXRUaXRsZSggJ+WcsOeUouS7o+eQhuWbnuW+qSDmlL4g56efJyk7XHJcblxyXG4gIH0sXHJcbiAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdleGl0aW5nIExpc3RPZlBSb3BlcnlzVmlldyEnKTtcclxuICAgIGNvbnNvbGUubG9nKCdwYXJhbXMgY2hhbmdlZCB0bycsIHBhcmFtcyk7XHJcbiAgICBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IHJvdXRlO1xyXG4gIH1cclxufSksXHJcbmxlYXNlQWdlbnRGb3JtIDogbmV3IFJvdXRlKHtcclxuICBwYXRoOiAnL0xlYXNlQWdlbnRGb3JtJyxcclxuICBjb21wb25lbnQ6IDxGb3JtTGVhc2VBZ2VudFByb3BlcnR5QW50TW9iaWxlV3JhcHBlciAvPixcclxuICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICBNb2J4U3RvcmUuYXBwLnNldFRpdGxlKCAn5Zyw55Si5Luj55CG5Zue5b6pIOennyDlsYsnKTtcclxuXHJcbiAgfSxcclxuICBiZWZvcmVFeGl0OiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2V4aXRpbmcgTGlzdE9mUFJvcGVyeXNWaWV3IScpO1xyXG4gICAgY29uc29sZS5sb2coJ3BhcmFtcyBjaGFuZ2VkIHRvJywgcGFyYW1zKTtcclxuICAgIE1vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ID0gcm91dGU7XHJcbiAgfVxyXG59KSxcclxuICAvLyBGb3IgQ2hhdCBib3QgZXhhbXBsZVxyXG4gIC8vIGZvcm1TYWxlQ2hhdGJvdCA6IG5ldyBSb3V0ZSh7XHJcbiAgLy8gICBwYXRoOiAnL0Zvcm1TYWxlQ2hhdGJveCcsXHJcbiAgLy8gICBjb21wb25lbnQ6IDxGb3JtU2FsZUNoYXRib3QgLz4sXHJcbiAgLy8gICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgLy8gICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICdDaGF0IEJvdCDos6Mg5qiTJyk7XHJcbiAgLy8gICB9LFxyXG4gIC8vICAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ2V4aXRpbmcgTGlzdE9mUFJvcGVyeXNWaWV3IScpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygncGFyYW1zIGNoYW5nZWQgdG8nLCBwYXJhbXMpO1xyXG4gIC8vICAgICBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IHJvdXRlO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pLFxyXG4gIC8vIGJtaSA6IG5ldyBSb3V0ZSh7XHJcbiAgLy8gICBwYXRoOiAnL2JtaScsXHJcbiAgLy8gICBjb21wb25lbnQ6IDxCTUlDaGF0Ym90IC8+LFxyXG4gIC8vICAgb25FbnRlcjogKHJvdXRlLCBwYXJhbXMsIHN0b3JlLCBxdWVyeVBhcmFtcykgPT4ge1xyXG4gIC8vICAgICBNb2J4U3RvcmUuYXBwLnNldFRpdGxlKCAnQ2hhdCBCb3Qg6LOjIOaokycpO1xyXG4gIC8vXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ2V4aXRpbmcgTGlzdE9mUFJvcGVyeXNWaWV3IScpO1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygncGFyYW1zIGNoYW5nZWQgdG8nLCBwYXJhbXMpO1xyXG4gIC8vICAgICBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IHJvdXRlO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0pXHJcblxyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdmlld3M7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy92aWV3cy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFvQ0E7QUEvQkE7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQUNBO0FBd0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaFNBO0FBa1NBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
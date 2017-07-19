webpackHotUpdate(0,{

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(78);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _mobxRouter = __webpack_require__(260);\n\nvar _listOfPropertysView = __webpack_require__(506);\n\nvar _frontPagePanelViewSegment = __webpack_require__(838);\n\nvar _frontPageView = __webpack_require__(942);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _formSalePropertyAntMobile = __webpack_require__(852);\n\nvar _formLeasePropertyAntMobile = __webpack_require__(929);\n\nvar _formBuyPropertyAntMobile = __webpack_require__(925);\n\nvar _formRentPropertyAntMobile = __webpack_require__(932);\n\nvar _matchLeasePanelView = __webpack_require__(961);\n\nvar _matchRentPanelView = __webpack_require__(978);\n\nvar _matchSalePanelView = __webpack_require__(982);\n\nvar _matchBuyPanelView = __webpack_require__(986);\n\nvar _matchAgentPanelView = __webpack_require__(990);\n\nvar _bmiChatbot = __webpack_require__(993);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// testing\n// import TestListView from 'testListView'\n\n// Match Panel views\n\n\n// Form\n\n\n//models\nvar save = false;\n\n// From chatbot\n//import {FormSaleChatbot} from 'chatbot/formSaleChatbot'\n\n//import FrontPage from 'frontPage'\n\n\n//components\n//import {MatchPanelViewWrapper} from 'matchPanelView'\n\n\nvar views = {\n  home: new _mobxRouter.Route({\n    path: '/',\n    component: _react2.default.createElement(_frontPageView.FrontPageView, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('好 .. Matching');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  list: new _mobxRouter.Route({\n    path: '/list',\n    component: _react2.default.createElement(_listOfPropertysView.ListOfPropertysView, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n\n      console.log('entering ListOfPropertysView!');\n      _mobxStore2.default.app.title = \"你的儲存樓盤\";\n      if (save) {\n        _mobxStore2.default.app.previousView = _mobxStore2.default.app.viewHistory.get('second');\n      }\n      if (!save) {\n        _mobxStore2.default.app.viewHistory.set('list', _mobxStore2.default.app.previousView);\n        save = true;\n      }\n    },\n    beforeEnter: function beforeEnter(route, params, store) {\n      var userIsLoggedIn = _mobxStore2.default.app.user;\n      if (!userIsLoggedIn) {\n        alert('Only logged in users can enter this route!');\n        return false;\n      }\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    } }),\n  matchLease: new _mobxRouter.Route({\n    path: '/matchLease/:keyID',\n    component: _react2.default.createElement(_matchLeasePanelView.MatchLeasePanelViewWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      console.log('third.current query params are -> ', queryParams);\n      console.log('third.current params are -> ', params);\n      _mobxStore2.default.app.setTitle('最新鮮配對 Lease');\n      console.log('route', route);\n      _mobxStore2.default.app.viewHistory.set('matchLease', _mobxStore2.default.app.previousView);\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting user profile!');\n      console.log('third. params', params);\n      //MobxStore.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    }\n  }),\n  matchRent: new _mobxRouter.Route({\n    path: '/matchRent/:keyID',\n    component: _react2.default.createElement(_matchRentPanelView.MatchRentPanelViewWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      console.log('third.current query params are -> ', queryParams);\n      console.log('third.current params are -> ', params);\n      _mobxStore2.default.app.setTitle('最新鮮配對 Rent');\n      console.log('route', route);\n      _mobxStore2.default.app.viewHistory.set('matchRent', _mobxStore2.default.app.previousView);\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting user profile!');\n      console.log('third. params', params);\n      //MobxStore.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    }\n  }),\n  matchSale: new _mobxRouter.Route({\n    path: '/matchSale/:keyID',\n    component: _react2.default.createElement(_matchSalePanelView.MatchSalePanelViewWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      console.log('third.current query params are -> ', queryParams);\n      console.log('third.current params are -> ', params);\n      _mobxStore2.default.app.setTitle('最新鮮配對 Sale');\n      console.log('route', route);\n      _mobxStore2.default.app.viewHistory.set('matchSale', _mobxStore2.default.app.previousView);\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting user profile!');\n      console.log('third. params', params);\n      //MobxStore.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    }\n  }),\n  matchBuy: new _mobxRouter.Route({\n    path: '/matchBuy/:keyID',\n    component: _react2.default.createElement(_matchBuyPanelView.MatchBuyPanelViewWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      console.log('third.current query params are -> ', queryParams);\n      console.log('third.current params are -> ', params);\n      _mobxStore2.default.app.setTitle('最新鮮配對 buy');\n      console.log('route', route);\n      _mobxStore2.default.app.viewHistory.set('matchBuy', _mobxStore2.default.app.previousView);\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting user profile!');\n      console.log('third. params', params);\n      //MobxStore.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    }\n  }),\n  matchAgent: new _mobxRouter.Route({\n    path: '/matchAgent',\n    component: _react2.default.createElement(_matchAgentPanelView.MatchAgentPanelViewWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      console.log('third.current query params are -> ', queryParams);\n      console.log('third.current params are -> ', params);\n      _mobxStore2.default.app.setTitle('Agent');\n      console.log('route', route);\n      _mobxStore2.default.app.viewHistory.set('matchBuy', _mobxStore2.default.app.previousView);\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting user profile!');\n      console.log('third. params', params);\n      //MobxStore.app.previousView = route;\n      _mobxStore2.default.app.params = params;\n    },\n    onParamsChange: function onParamsChange(route, params) {\n      console.log('params changed to', params);\n    }\n  }),\n  lease: new _mobxRouter.Route({\n    path: '/lease',\n    component: _react2.default.createElement(_formLeasePropertyAntMobile.FormLeasePropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('放 租');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  rent: new _mobxRouter.Route({\n    path: '/rent',\n    component: _react2.default.createElement(_formRentPropertyAntMobile.FormRentPropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('租 屋');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  buy: new _mobxRouter.Route({\n    path: '/buy',\n    component: _react2.default.createElement(_formBuyPropertyAntMobile.FormBuyPropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('買 樓');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  sale: new _mobxRouter.Route({\n    path: '/sale',\n    component: _react2.default.createElement(_formSalePropertyAntMobile.FormSalePropertyAntMobileWrapper, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('賣 樓');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  }),\n  // saleFormChatbox : new Route({\n  //   path: '/saleFormChatbox',\n  //   component: <FormSaleChatbot />,\n  //   onEnter: (route, params, store, queryParams) => {\n  //     MobxStore.app.setTitle( 'Chat Bot 賣 樓');\n  //\n  //   },\n  //   beforeExit: (route, params) => {\n  //     console.log('exiting ListOfPRoperysView!');\n  //     console.log('params changed to', params);\n  //     MobxStore.app.previousView = route;\n  //   }\n  // }),\n  bmi: new _mobxRouter.Route({\n    path: '/bmi',\n    component: _react2.default.createElement(_bmiChatbot.BMIChatbot, null),\n    onEnter: function onEnter(route, params, store, queryParams) {\n      _mobxStore2.default.app.setTitle('Chat Bot 賣 樓');\n    },\n    beforeExit: function beforeExit(route, params) {\n      console.log('exiting ListOfPRoperysView!');\n      console.log('params changed to', params);\n      _mobxStore2.default.app.previousView = route;\n    }\n  })\n\n};\nexports.default = views;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTA1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL3ZpZXdzLmpzP2VmZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vbW9kZWxzXHJcbmltcG9ydCB7Um91dGV9IGZyb20gJ21vYngtcm91dGVyJztcclxuXHJcbi8vY29tcG9uZW50c1xyXG4vL2ltcG9ydCB7TWF0Y2hQYW5lbFZpZXdXcmFwcGVyfSBmcm9tICdtYXRjaFBhbmVsVmlldydcclxuaW1wb3J0IHtMaXN0T2ZQcm9wZXJ0eXNWaWV3fSBmcm9tICdsaXN0T2ZQcm9wZXJ0eXNWaWV3J1xyXG5pbXBvcnQge0Zyb250UGFwZVBhbmVsVmlld1NlZ21lbnR9IGZyb20gJ2Zyb250UGFnZVBhbmVsVmlld1NlZ21lbnQnXHJcbmltcG9ydCB7RnJvbnRQYWdlVmlld30gZnJvbSAnZnJvbnRQYWdlVmlldydcclxuaW1wb3J0IE1vYnhTdG9yZSBmcm9tICdtb2J4U3RvcmUnO1xyXG4vL2ltcG9ydCBGcm9udFBhZ2UgZnJvbSAnZnJvbnRQYWdlJ1xyXG5pbXBvcnQge01vYnhSb3V0ZXJ9IGZyb20gJ21vYngtcm91dGVyJztcclxuXHJcbi8vIEZvcm1cclxuaW1wb3J0IHtGb3JtU2FsZVByb3BlcnR5QW50TW9iaWxlV3JhcHBlcn0gZnJvbSAnZm9ybS9mb3JtU2FsZVByb3BlcnR5QW50TW9iaWxlJztcclxuaW1wb3J0IHtGb3JtTGVhc2VQcm9wZXJ0eUFudE1vYmlsZVdyYXBwZXJ9IGZyb20gJ2Zvcm0vZm9ybUxlYXNlUHJvcGVydHlBbnRNb2JpbGUnO1xyXG5pbXBvcnQge0Zvcm1CdXlQcm9wZXJ0eUFudE1vYmlsZVdyYXBwZXJ9IGZyb20gJ2Zvcm0vZm9ybUJ1eVByb3BlcnR5QW50TW9iaWxlJztcclxuaW1wb3J0IHtGb3JtUmVudFByb3BlcnR5QW50TW9iaWxlV3JhcHBlcn0gZnJvbSAnZm9ybS9mb3JtUmVudFByb3BlcnR5QW50TW9iaWxlJztcclxuXHJcbi8vIE1hdGNoIFBhbmVsIHZpZXdzXHJcbmltcG9ydCB7TWF0Y2hMZWFzZVBhbmVsVmlld1dyYXBwZXJ9IGZyb20gJ21hdGNoUGFuZWwvbWF0Y2hMZWFzZVBhbmVsVmlldydcclxuaW1wb3J0IHtNYXRjaFJlbnRQYW5lbFZpZXdXcmFwcGVyfSBmcm9tICdtYXRjaFBhbmVsL21hdGNoUmVudFBhbmVsVmlldydcclxuaW1wb3J0IHtNYXRjaFNhbGVQYW5lbFZpZXdXcmFwcGVyfSBmcm9tICdtYXRjaFBhbmVsL21hdGNoU2FsZVBhbmVsVmlldydcclxuaW1wb3J0IHtNYXRjaEJ1eVBhbmVsVmlld1dyYXBwZXJ9IGZyb20gJ21hdGNoUGFuZWwvbWF0Y2hCdXlQYW5lbFZpZXcnXHJcbmltcG9ydCB7TWF0Y2hBZ2VudFBhbmVsVmlld1dyYXBwZXJ9IGZyb20gJ21hdGNoUGFuZWwvbWF0Y2hBZ2VudFBhbmVsVmlldydcclxuXHJcbi8vIEZyb20gY2hhdGJvdFxyXG4vL2ltcG9ydCB7Rm9ybVNhbGVDaGF0Ym90fSBmcm9tICdjaGF0Ym90L2Zvcm1TYWxlQ2hhdGJvdCdcclxuaW1wb3J0IHtCTUlDaGF0Ym90fSBmcm9tICdjaGF0Ym90L2JtaUNoYXRib3QnXHJcblxyXG4vLyB0ZXN0aW5nXHJcbi8vIGltcG9ydCBUZXN0TGlzdFZpZXcgZnJvbSAndGVzdExpc3RWaWV3J1xyXG5cclxudmFyIHNhdmUgPSBmYWxzZTtcclxuXHJcbmNvbnN0IHZpZXdzID0ge1xyXG4gIGhvbWU6IG5ldyBSb3V0ZSh7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBjb21wb25lbnQ6IDxGcm9udFBhZ2VWaWV3Lz4sXHJcbiAgICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICflpb0gLi4gTWF0Y2hpbmcnKTtcclxuICAgIH0sXHJcbiAgICBiZWZvcmVFeGl0OiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXhpdGluZyBMaXN0T2ZQUm9wZXJ5c1ZpZXchJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMgY2hhbmdlZCB0bycsIHBhcmFtcyk7XHJcbiAgICAgIE1vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ID0gcm91dGU7XHJcbiAgICB9XHJcbiAgfSksXHJcbiAgbGlzdDogbmV3IFJvdXRlKHtcclxuICAgIHBhdGg6ICcvbGlzdCcsXHJcbiAgICBjb21wb25lbnQ6IDxMaXN0T2ZQcm9wZXJ0eXNWaWV3IC8+LFxyXG4gICAgb25FbnRlcjogKCByb3V0ZSwgcGFyYW1zLCBzdG9yZSwgcXVlcnlQYXJhbXMgKSA9PiB7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnZW50ZXJpbmcgTGlzdE9mUHJvcGVydHlzVmlldyEnKTtcclxuICAgICAgTW9ieFN0b3JlLmFwcC50aXRsZSA9IFwi5L2g55qE5YSy5a2Y5qiT55ukXCJcclxuICAgICAgaWYgKCBzYXZlIClcclxuICAgICAge1xyXG4gICAgICBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IE1vYnhTdG9yZS5hcHAudmlld0hpc3RvcnkuZ2V0KCAnc2Vjb25kJylcclxuICAgICAgfVxyXG4gICAgICBpZiAoICFzYXZlIClcclxuICAgICAgeyBNb2J4U3RvcmUuYXBwLnZpZXdIaXN0b3J5LnNldCggJ2xpc3QnLCBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyAgKVxyXG4gICAgICAgIHNhdmUgPSB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiZWZvcmVFbnRlcjogKHJvdXRlLCBwYXJhbXMsIHN0b3JlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHVzZXJJc0xvZ2dlZEluID0gTW9ieFN0b3JlLmFwcC51c2VyO1xyXG4gICAgICBpZiAoIXVzZXJJc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgYWxlcnQoJ09ubHkgbG9nZ2VkIGluIHVzZXJzIGNhbiBlbnRlciB0aGlzIHJvdXRlIScpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJlZm9yZUV4aXQ6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdleGl0aW5nIExpc3RPZlBSb3BlcnlzVmlldyEnKTtcclxuICAgICAgY29uc29sZS5sb2coJ3BhcmFtcyBjaGFuZ2VkIHRvJywgcGFyYW1zKTtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSByb3V0ZTtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICB9LFxyXG4gICAgb25QYXJhbXNDaGFuZ2U6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMgY2hhbmdlZCB0bycsIHBhcmFtcyk7XHJcbiAgICB9fSksXHJcbiAgbWF0Y2hMZWFzZTogbmV3IFJvdXRlKHtcclxuICAgICAgcGF0aDogJy9tYXRjaExlYXNlLzprZXlJRCcsXHJcbiAgICAgIGNvbXBvbmVudDogPE1hdGNoTGVhc2VQYW5lbFZpZXdXcmFwcGVyIC8+LFxyXG4gICAgICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICAgIFx0Y29uc29sZS5sb2coJ3RoaXJkLmN1cnJlbnQgcXVlcnkgcGFyYW1zIGFyZSAtPiAnLCBxdWVyeVBhcmFtcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXJkLmN1cnJlbnQgcGFyYW1zIGFyZSAtPiAnLCBwYXJhbXMpO1xyXG4gICAgICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICfmnIDmlrDprq7phY3lsI0gTGVhc2UnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncm91dGUnLCByb3V0ZSlcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnZpZXdIaXN0b3J5LnNldCggJ21hdGNoTGVhc2UnLCBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyAgKVxyXG4gICAgICB9LFxyXG4gICAgICBiZWZvcmVFeGl0OiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdleGl0aW5nIHVzZXIgcHJvZmlsZSEnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcmQuIHBhcmFtcycsIHBhcmFtcyk7XHJcbiAgICAgICAgLy9Nb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IHJvdXRlO1xyXG4gICAgICAgIE1vYnhTdG9yZS5hcHAucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgICB9LFxyXG4gICAgICBvblBhcmFtc0NoYW5nZTogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncGFyYW1zIGNoYW5nZWQgdG8nLCBwYXJhbXMpO1xyXG4gICAgICB9XHJcbiAgfSksXHJcbiAgbWF0Y2hSZW50OiBuZXcgUm91dGUoe1xyXG4gICAgICBwYXRoOiAnL21hdGNoUmVudC86a2V5SUQnLFxyXG4gICAgICBjb21wb25lbnQ6IDxNYXRjaFJlbnRQYW5lbFZpZXdXcmFwcGVyIC8+LFxyXG4gICAgICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICAgIFx0Y29uc29sZS5sb2coJ3RoaXJkLmN1cnJlbnQgcXVlcnkgcGFyYW1zIGFyZSAtPiAnLCBxdWVyeVBhcmFtcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXJkLmN1cnJlbnQgcGFyYW1zIGFyZSAtPiAnLCBwYXJhbXMpO1xyXG4gICAgICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICfmnIDmlrDprq7phY3lsI0gUmVudCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyb3V0ZScsIHJvdXRlKVxyXG4gICAgICAgIE1vYnhTdG9yZS5hcHAudmlld0hpc3Rvcnkuc2V0KCAnbWF0Y2hSZW50JywgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgIClcclxuICAgICAgfSxcclxuICAgICAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXhpdGluZyB1c2VyIHByb2ZpbGUhJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXJkLiBwYXJhbXMnLCBwYXJhbXMpO1xyXG4gICAgICAgIC8vTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSByb3V0ZTtcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnBhcmFtcyA9IHBhcmFtcztcclxuICAgICAgfSxcclxuICAgICAgb25QYXJhbXNDaGFuZ2U6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtcyBjaGFuZ2VkIHRvJywgcGFyYW1zKTtcclxuICAgICAgfVxyXG4gIH0pLFxyXG4gIG1hdGNoU2FsZTogbmV3IFJvdXRlKHtcclxuICAgICAgcGF0aDogJy9tYXRjaFNhbGUvOmtleUlEJyxcclxuICAgICAgY29tcG9uZW50OiA8TWF0Y2hTYWxlUGFuZWxWaWV3V3JhcHBlciAvPixcclxuICAgICAgb25FbnRlcjogKHJvdXRlLCBwYXJhbXMsIHN0b3JlLCBxdWVyeVBhcmFtcykgPT4ge1xyXG4gICAgICBcdGNvbnNvbGUubG9nKCd0aGlyZC5jdXJyZW50IHF1ZXJ5IHBhcmFtcyBhcmUgLT4gJywgcXVlcnlQYXJhbXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlyZC5jdXJyZW50IHBhcmFtcyBhcmUgLT4gJywgcGFyYW1zKTtcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnNldFRpdGxlKCAn5pyA5paw6a6u6YWN5bCNIFNhbGUnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncm91dGUnLCByb3V0ZSlcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnZpZXdIaXN0b3J5LnNldCggJ21hdGNoU2FsZScsIE1vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ICApXHJcbiAgICAgIH0sXHJcbiAgICAgIGJlZm9yZUV4aXQ6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2V4aXRpbmcgdXNlciBwcm9maWxlIScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlyZC4gcGFyYW1zJywgcGFyYW1zKTtcclxuICAgICAgICAvL01vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ID0gcm91dGU7XHJcbiAgICAgICAgTW9ieFN0b3JlLmFwcC5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uUGFyYW1zQ2hhbmdlOiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJhbXMgY2hhbmdlZCB0bycsIHBhcmFtcyk7XHJcbiAgICAgIH1cclxuICB9KSxcclxuICBtYXRjaEJ1eTogbmV3IFJvdXRlKHtcclxuICAgICAgcGF0aDogJy9tYXRjaEJ1eS86a2V5SUQnLFxyXG4gICAgICBjb21wb25lbnQ6IDxNYXRjaEJ1eVBhbmVsVmlld1dyYXBwZXIgLz4sXHJcbiAgICAgIG9uRW50ZXI6IChyb3V0ZSwgcGFyYW1zLCBzdG9yZSwgcXVlcnlQYXJhbXMpID0+IHtcclxuICAgICAgXHRjb25zb2xlLmxvZygndGhpcmQuY3VycmVudCBxdWVyeSBwYXJhbXMgYXJlIC0+ICcsIHF1ZXJ5UGFyYW1zKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcmQuY3VycmVudCBwYXJhbXMgYXJlIC0+ICcsIHBhcmFtcyk7XHJcbiAgICAgICAgTW9ieFN0b3JlLmFwcC5zZXRUaXRsZSggJ+acgOaWsOmurumFjeWwjSBidXknKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncm91dGUnLCByb3V0ZSlcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnZpZXdIaXN0b3J5LnNldCggJ21hdGNoQnV5JywgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgIClcclxuICAgICAgfSxcclxuICAgICAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXhpdGluZyB1c2VyIHByb2ZpbGUhJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXJkLiBwYXJhbXMnLCBwYXJhbXMpO1xyXG4gICAgICAgIC8vTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSByb3V0ZTtcclxuICAgICAgICBNb2J4U3RvcmUuYXBwLnBhcmFtcyA9IHBhcmFtcztcclxuICAgICAgfSxcclxuICAgICAgb25QYXJhbXNDaGFuZ2U6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3BhcmFtcyBjaGFuZ2VkIHRvJywgcGFyYW1zKTtcclxuICAgICAgfVxyXG4gIH0pLFxyXG4gIG1hdGNoQWdlbnQ6IG5ldyBSb3V0ZSh7XHJcbiAgICAgIHBhdGg6ICcvbWF0Y2hBZ2VudCcsXHJcbiAgICAgIGNvbXBvbmVudDogPE1hdGNoQWdlbnRQYW5lbFZpZXdXcmFwcGVyIC8+LFxyXG4gICAgICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICAgIFx0Y29uc29sZS5sb2coJ3RoaXJkLmN1cnJlbnQgcXVlcnkgcGFyYW1zIGFyZSAtPiAnLCBxdWVyeVBhcmFtcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXJkLmN1cnJlbnQgcGFyYW1zIGFyZSAtPiAnLCBwYXJhbXMpO1xyXG4gICAgICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICdBZ2VudCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyb3V0ZScsIHJvdXRlKVxyXG4gICAgICAgIE1vYnhTdG9yZS5hcHAudmlld0hpc3Rvcnkuc2V0KCAnbWF0Y2hCdXknLCBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyAgKVxyXG4gICAgICB9LFxyXG4gICAgICBiZWZvcmVFeGl0OiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdleGl0aW5nIHVzZXIgcHJvZmlsZSEnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcmQuIHBhcmFtcycsIHBhcmFtcyk7XHJcbiAgICAgICAgLy9Nb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IHJvdXRlO1xyXG4gICAgICAgIE1vYnhTdG9yZS5hcHAucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgICB9LFxyXG4gICAgICBvblBhcmFtc0NoYW5nZTogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncGFyYW1zIGNoYW5nZWQgdG8nLCBwYXJhbXMpO1xyXG4gICAgICB9XHJcbiAgfSksXHJcbiAgbGVhc2UgOiBuZXcgUm91dGUoe1xyXG4gICAgcGF0aDogJy9sZWFzZScsXHJcbiAgICBjb21wb25lbnQ6IDxGb3JtTGVhc2VQcm9wZXJ0eUFudE1vYmlsZVdyYXBwZXIgLz4sXHJcbiAgICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICfmlL4g56efJyk7XHJcblxyXG4gICAgfSxcclxuICAgIGJlZm9yZUV4aXQ6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdleGl0aW5nIExpc3RPZlBSb3BlcnlzVmlldyEnKTtcclxuICAgICAgY29uc29sZS5sb2coJ3BhcmFtcyBjaGFuZ2VkIHRvJywgcGFyYW1zKTtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSByb3V0ZTtcclxuICAgIH1cclxuICB9KSxcclxuICByZW50IDogbmV3IFJvdXRlKHtcclxuICAgIHBhdGg6ICcvcmVudCcsXHJcbiAgICBjb21wb25lbnQ6IDxGb3JtUmVudFByb3BlcnR5QW50TW9iaWxlV3JhcHBlciAvPixcclxuICAgIG9uRW50ZXI6IChyb3V0ZSwgcGFyYW1zLCBzdG9yZSwgcXVlcnlQYXJhbXMpID0+IHtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5zZXRUaXRsZSggJ+ennyDlsYsnKTtcclxuXHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2V4aXRpbmcgTGlzdE9mUFJvcGVyeXNWaWV3IScpO1xyXG4gICAgICBjb25zb2xlLmxvZygncGFyYW1zIGNoYW5nZWQgdG8nLCBwYXJhbXMpO1xyXG4gICAgICBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IHJvdXRlO1xyXG4gICAgfVxyXG4gIH0pLFxyXG4gIGJ1eSA6IG5ldyBSb3V0ZSh7XHJcbiAgICBwYXRoOiAnL2J1eScsXHJcbiAgICBjb21wb25lbnQ6IDxGb3JtQnV5UHJvcGVydHlBbnRNb2JpbGVXcmFwcGVyIC8+LFxyXG4gICAgb25FbnRlcjogKHJvdXRlLCBwYXJhbXMsIHN0b3JlLCBxdWVyeVBhcmFtcykgPT4ge1xyXG4gICAgICBNb2J4U3RvcmUuYXBwLnNldFRpdGxlKCAn6LK3IOaokycpO1xyXG4gICAgfSxcclxuICAgIGJlZm9yZUV4aXQ6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdleGl0aW5nIExpc3RPZlBSb3BlcnlzVmlldyEnKTtcclxuICAgICAgY29uc29sZS5sb2coJ3BhcmFtcyBjaGFuZ2VkIHRvJywgcGFyYW1zKTtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSByb3V0ZTtcclxuICAgIH1cclxuICB9KSxcclxuICBzYWxlIDogbmV3IFJvdXRlKHtcclxuICAgIHBhdGg6ICcvc2FsZScsXHJcbiAgICBjb21wb25lbnQ6IDxGb3JtU2FsZVByb3BlcnR5QW50TW9iaWxlV3JhcHBlciAvPixcclxuICAgIG9uRW50ZXI6IChyb3V0ZSwgcGFyYW1zLCBzdG9yZSwgcXVlcnlQYXJhbXMpID0+IHtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5zZXRUaXRsZSggJ+izoyDmqJMnKTtcclxuXHJcbiAgICB9LFxyXG4gICAgYmVmb3JlRXhpdDogKHJvdXRlLCBwYXJhbXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2V4aXRpbmcgTGlzdE9mUFJvcGVyeXNWaWV3IScpO1xyXG4gICAgICBjb25zb2xlLmxvZygncGFyYW1zIGNoYW5nZWQgdG8nLCBwYXJhbXMpO1xyXG4gICAgICBNb2J4U3RvcmUuYXBwLnByZXZpb3VzVmlldyA9IHJvdXRlO1xyXG4gICAgfVxyXG4gIH0pLFxyXG4gIC8vIHNhbGVGb3JtQ2hhdGJveCA6IG5ldyBSb3V0ZSh7XHJcbiAgLy8gICBwYXRoOiAnL3NhbGVGb3JtQ2hhdGJveCcsXHJcbiAgLy8gICBjb21wb25lbnQ6IDxGb3JtU2FsZUNoYXRib3QgLz4sXHJcbiAgLy8gICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgLy8gICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICdDaGF0IEJvdCDos6Mg5qiTJyk7XHJcbiAgLy9cclxuICAvLyAgIH0sXHJcbiAgLy8gICBiZWZvcmVFeGl0OiAocm91dGUsIHBhcmFtcykgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygnZXhpdGluZyBMaXN0T2ZQUm9wZXJ5c1ZpZXchJyk7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKCdwYXJhbXMgY2hhbmdlZCB0bycsIHBhcmFtcyk7XHJcbiAgLy8gICAgIE1vYnhTdG9yZS5hcHAucHJldmlvdXNWaWV3ID0gcm91dGU7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSksXHJcbiAgYm1pIDogbmV3IFJvdXRlKHtcclxuICAgIHBhdGg6ICcvYm1pJyxcclxuICAgIGNvbXBvbmVudDogPEJNSUNoYXRib3QgLz4sXHJcbiAgICBvbkVudGVyOiAocm91dGUsIHBhcmFtcywgc3RvcmUsIHF1ZXJ5UGFyYW1zKSA9PiB7XHJcbiAgICAgIE1vYnhTdG9yZS5hcHAuc2V0VGl0bGUoICdDaGF0IEJvdCDos6Mg5qiTJyk7XHJcblxyXG4gICAgfSxcclxuICAgIGJlZm9yZUV4aXQ6IChyb3V0ZSwgcGFyYW1zKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdleGl0aW5nIExpc3RPZlBSb3BlcnlzVmlldyEnKTtcclxuICAgICAgY29uc29sZS5sb2coJ3BhcmFtcyBjaGFuZ2VkIHRvJywgcGFyYW1zKTtcclxuICAgICAgTW9ieFN0b3JlLmFwcC5wcmV2aW91c1ZpZXcgPSByb3V0ZTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHZpZXdzO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvdmlld3MuanMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBQ0E7QUFkQTtBQWdDQTtBQUNBO0FBUkE7QUFDQTtBQUNBO0FBbEJBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUNBO0FBbE5BO0FBaU9BIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
webpackHotUpdate(0,{

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n     value: true\n});\nexports.Propertyhk = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;\n\nvar _mobx = __webpack_require__(274);\n\nvar _firebaseStore = __webpack_require__(769);\n\nvar _property = __webpack_require__(773);\n\nfunction _initDefineProp(target, property, descriptor, context) {\n     if (!descriptor) return;\n     Object.defineProperty(target, property, {\n          enumerable: descriptor.enumerable,\n          configurable: descriptor.configurable,\n          writable: descriptor.writable,\n          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n     });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n     var desc = {};\n     Object['ke' + 'ys'](descriptor).forEach(function (key) {\n          desc[key] = descriptor[key];\n     });\n     desc.enumerable = !!desc.enumerable;\n     desc.configurable = !!desc.configurable;\n\n     if ('value' in desc || desc.initializer) {\n          desc.writable = true;\n     }\n\n     desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n          return decorator(target, property, desc) || desc;\n     }, desc);\n\n     if (context && desc.initializer !== void 0) {\n          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n          desc.initializer = undefined;\n     }\n\n     if (desc.initializer === void 0) {\n          Object['define' + 'Property'](target, property, desc);\n          desc = null;\n     }\n\n     return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n     throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n// import moment from 'moment'\n\n\n// List of user properties, to be .on\n// propertyViewModel\nvar Propertyhk = exports.Propertyhk = (_class = function (_Property) {\n     _inherits(Propertyhk, _Property);\n\n     //@observable propertys = map({});\n     //@observable propertys = new Map();\n\n     // responsed propertys from agent only\n     function Propertyhk(props) {\n          _classCallCheck(this, Propertyhk);\n\n          var _this = _possibleConstructorReturn(this, (Propertyhk.__proto__ || Object.getPrototypeOf(Propertyhk)).call(this, props));\n\n          _initDefineProp(_this, 'matchedPropertys', _descriptor, _this);\n\n          _initDefineProp(_this, 'responsedPropertys', _descriptor2, _this);\n\n          _initDefineProp(_this, 'like', _descriptor3, _this);\n\n          _initDefineProp(_this, 'reject', _descriptor4, _this);\n\n          _initDefineProp(_this, 'view', _descriptor5, _this);\n\n          _this.buildMatchProperty = function (id, typeFor, location) {\n               var that = _this;\n\n               // Handle match propertys\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_added\", function (snap) {\n\n                    //debugger\n                    //           if ( (location === snap.val().nameOfBuilding ) && (that.uid !== snap.val().uid) )\n                    if (location === snap.val().nameOfBuilding) {\n\n                         var p = Propertyhk.deserialize(snap.val());\n                         // p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');\n\n                         that.matchedPropertys.set(snap.key, p);\n                         console.log('child_added - matchProperty.size', that.matchedPropertys.size);\n                    }\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on('child_changed', function (snapshot) {\n\n                    // Get an element with all functions, propertys\n                    // Recreate a new properts { ... }\n                    // otherwise propertys.responsedPropertys = undefined error\n                    var p = Propertyhk.deserialize(snapshot.val());\n                    that.matchedPropertys.set(snapshot.key, p);\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_removed\", function (snap) {\n\n                    that.matchedPropertys.delete(snap.key);\n                    console.log('child_removed - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               return that.matchedPropertys;\n          };\n\n          _this.buildResponseProperty = function (id, typeFor, location) {\n               var that = _this;\n\n               // Handle match propertys\n               _firebaseStore.Fb.agentPropertys.orderByChild('relatedFbid').equalTo(id).on(\"child_added\", function (snap) {\n\n                    // Fb.matchedPropertys.child( snap.key ).set( snap.val() )\n                    // Fb.propertys.update( { snap.key : { } })\n                    var p = Propertyhk.deserialize(snap.val());\n                    that.responsedPropertys.set(snap.key, p);\n\n                    console.log('child_added - responsedPropertys.size', that.responsedPropertys.size);\n               });\n\n               _firebaseStore.Fb.agentPropertys.orderByChild('relatedFbid').equalTo(typeFor).on('child_changed', function (snapshot) {\n\n                    // Get an element with all functions, propertys\n                    // Recreate a new properts { ... }\n                    // otherwise propertys.responsedPropertys = undefined error\n                    var p = Propertyhk.deserialize(snapshot.val());\n                    that.matchedPropertys.set(snapshot.key, p);\n                    //console.log('child_changed snapshot.val() ',  snapshot.val() )\n               });\n\n               _firebaseStore.Fb.agentPropertys.orderByChild('relatedFbid').equalTo(id).on(\"child_removed\", function (snap) {\n\n                    that.responsedPropertys.delete(snap.key);\n                    console.log('child_removed - responsedPropertys.size', that.responsedPropertys.size);\n               });\n\n               return that.responsedPropertys;\n          };\n\n          _this.buildMatchAgentProperty = function (id, typeFor, location) {\n               var that = _this;\n\n               // Handle match propertys\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_added\", function (snap) {\n\n                    // Fb.matchedPropertys.child( snap.key ).set( snap.val() )\n                    //          Fb.propertys.update( { snap.key : { } })\n                    that.matchedPropertys.set(snap.key, snap.val());\n                    console.log('child_added - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on('child_changed', function (snapshot) {\n\n                    // Get an element with all functions, propertys\n                    // Recreate a new properts { ... }\n                    // otherwise propertys.responsedPropertys = undefined error\n                    //                  const p = that.matchedPropertys.get( snapshot.key )\n                    var p = Propertyhk.deserialize(snapshot.val());\n                    that.matchedPropertys.set(snapshot.key, p);\n\n                    //                  that.matchedPropertys.set( snapshot.key, { ...p, ...snapshot.val() });\n                    //console.log('child_changed snapshot.val() ',  snapshot.val() )\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_removed\", function (snap) {\n\n                    that.matchedPropertys.delete(snap.key);\n                    console.log('child_removed - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               return that.matchedPropertys;\n          };\n\n          return _this;\n     }\n\n     // constructor( v ) {\n     //   super( v );\n     // }\n\n     // @observable matchedPropertys = new Map();\n\n     _createClass(Propertyhk, [{\n          key: 'json',\n          get: function get() {\n               return (0, _mobx.toJS)(this.matchedPropertys);\n          }\n\n          /**\r\n           * @compareTo is name of variable e.g. name, price, location\r\n           * @valueTo   is value equal to.  e.g. 'shatin'\r\n           * return\r\n           */\n\n\n          /**\r\n           * @compareTo is name of variable e.g. name, price, location\r\n           * @valueTo   is value equal to.  e.g. 'shatin'\r\n           * return\r\n           */\n\n\n          /**\r\n           * @compareTo is name of variable e.g. name, price, location\r\n           * @valueTo   is value equal to.  e.g. 'shatin'\r\n           * return\r\n           */\n\n     }], [{\n          key: 'deserialize',\n          value: function deserialize(n) {\n               var phk = new Propertyhk();\n\n               _get(Propertyhk.__proto__ || Object.getPrototypeOf(Propertyhk), 'deserializeObj', this).call(this, n, phk);\n               return phk;\n          }\n     }]);\n\n     return Propertyhk;\n}(_property.Property), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'matchedPropertys', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'responsedPropertys', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'like', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'reject', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'view', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _applyDecoratedDescriptor(_class.prototype, 'json', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'json'), _class.prototype)), _class); // End of class//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9wcm9wZXJ0eWhrLmpzPzgwYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtvYnNlcnZhYmxlLCBjb21wdXRlZCwgYWN0aW9ufSBmcm9tICdtb2J4JztcclxuaW1wb3J0IHtGYn0gZnJvbSAnZmlyZWJhc2Utc3RvcmUnO1xyXG5pbXBvcnQge3RvSlN9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQge1Byb3BlcnR5fSBmcm9tICdwcm9wZXJ0eSdcclxuLy8gaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5cclxuLy8gTGlzdCBvZiB1c2VyIHByb3BlcnRpZXMsIHRvIGJlIC5vblxyXG4vLyBwcm9wZXJ0eVZpZXdNb2RlbFxyXG5leHBvcnQgY2xhc3MgUHJvcGVydHloayBleHRlbmRzIFByb3BlcnR5IHtcclxuXHJcbiAgQG9ic2VydmFibGUgbWF0Y2hlZFByb3BlcnR5cyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICAvLyByZXNwb25zZWQgcHJvcGVydHlzIGZyb20gYWdlbnQgb25seVxyXG4gIEBvYnNlcnZhYmxlIHJlc3BvbnNlZFByb3BlcnR5cyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICAvLyBAb2JzZXJ2YWJsZSBtYXRjaGVkUHJvcGVydHlzID0gbmV3IE1hcCgpO1xyXG5cclxuICBAb2JzZXJ2YWJsZSBsaWtlID0gb2JzZXJ2YWJsZS5tYXAoe30pO1xyXG4gIEBvYnNlcnZhYmxlIHJlamVjdCA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICBAb2JzZXJ2YWJsZSB2aWV3ID0gb2JzZXJ2YWJsZS5tYXAoe30pO1xyXG5cclxuXHJcbiAgLy9Ab2JzZXJ2YWJsZSBwcm9wZXJ0eXMgPSBtYXAoe30pO1xyXG4gIC8vQG9ic2VydmFibGUgcHJvcGVydHlzID0gbmV3IE1hcCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvciggcHJvcHMgKSB7XHJcbiAgICBzdXBlciggcHJvcHMgKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnN0cnVjdG9yKCB2ICkge1xyXG4gIC8vICAgc3VwZXIoIHYgKTtcclxuICAvLyB9XHJcblxyXG4gIEBjb21wdXRlZCBnZXQganNvbigpIHtcclxuICAgIHJldHVybiB0b0pTKHRoaXMubWF0Y2hlZFByb3BlcnR5cyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAY29tcGFyZVRvIGlzIG5hbWUgb2YgdmFyaWFibGUgZS5nLiBuYW1lLCBwcmljZSwgbG9jYXRpb25cclxuICAgKiBAdmFsdWVUbyAgIGlzIHZhbHVlIGVxdWFsIHRvLiAgZS5nLiAnc2hhdGluJ1xyXG4gICAqIHJldHVyblxyXG4gICAqL1xyXG4gIGJ1aWxkTWF0Y2hQcm9wZXJ0eSA9IChpZCwgdHlwZUZvciwgbG9jYXRpb24gKSA9PiB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAvLyBIYW5kbGUgbWF0Y2ggcHJvcGVydHlzXHJcbiAgICAgRmIucHJvcGVydHlzLm9yZGVyQnlDaGlsZCgndHlwZVRvJykuZXF1YWxUbyh0eXBlRm9yKS5vbihcImNoaWxkX2FkZGVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuXHJcbiAgICAgICAgICAgLy9kZWJ1Z2dlclxyXG4vLyAgICAgICAgICAgaWYgKCAobG9jYXRpb24gPT09IHNuYXAudmFsKCkubmFtZU9mQnVpbGRpbmcgKSAmJiAodGhhdC51aWQgIT09IHNuYXAudmFsKCkudWlkKSApXHJcbiAgICAgICAgICAgaWYgKCBsb2NhdGlvbiA9PT0gc25hcC52YWwoKS5uYW1lT2ZCdWlsZGluZyApXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICBjb25zdCBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZSggc25hcC52YWwoKSApXHJcbiAgICAgICAgICAgLy8gcC5yZWFsVGltZSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG5cclxuICAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KCBzbmFwLmtleSwgcCApO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZF9hZGRlZCAtIG1hdGNoUHJvcGVydHkuc2l6ZScsIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplKVxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgfSk7XHJcblxyXG4gICAgIEZiLnByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3R5cGVUbycpLmVxdWFsVG8odHlwZUZvcikub24oJ2NoaWxkX2NoYW5nZWQnLCAoc25hcHNob3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIEdldCBhbiBlbGVtZW50IHdpdGggYWxsIGZ1bmN0aW9ucywgcHJvcGVydHlzXHJcbiAgICAgICAgICAgICAgICAgIC8vIFJlY3JlYXRlIGEgbmV3IHByb3BlcnRzIHsgLi4uIH1cclxuICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCBwICk7XHJcbiAgICAgfSk7XHJcblxyXG5cclxuICAgICBGYi5wcm9wZXJ0eXMub3JkZXJCeUNoaWxkKCd0eXBlVG8nKS5lcXVhbFRvKHR5cGVGb3IpLm9uKFwiY2hpbGRfcmVtb3ZlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLmRlbGV0ZSggc25hcC5rZXkgKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZF9yZW1vdmVkIC0gbWF0Y2hQcm9wZXJ0eS5zaXplJywgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemUpXHJcbiAgICAgfSk7XHJcblxyXG4gICAgIHJldHVybiB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXM7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbXBhcmVUbyBpcyBuYW1lIG9mIHZhcmlhYmxlIGUuZy4gbmFtZSwgcHJpY2UsIGxvY2F0aW9uXHJcbiAgICogQHZhbHVlVG8gICBpcyB2YWx1ZSBlcXVhbCB0by4gIGUuZy4gJ3NoYXRpbidcclxuICAgKiByZXR1cm5cclxuICAgKi9cclxuICBidWlsZFJlc3BvbnNlUHJvcGVydHkgPSAoaWQsIHR5cGVGb3IsIGxvY2F0aW9uICkgPT4ge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vIEhhbmRsZSBtYXRjaCBwcm9wZXJ0eXNcclxuICAgICBGYi5hZ2VudFByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3JlbGF0ZWRGYmlkJykuZXF1YWxUbyhpZCkub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICAgLy8gRmIubWF0Y2hlZFByb3BlcnR5cy5jaGlsZCggc25hcC5rZXkgKS5zZXQoIHNuYXAudmFsKCkgKVxyXG4gICAgICAgICAgLy8gRmIucHJvcGVydHlzLnVwZGF0ZSggeyBzbmFwLmtleSA6IHsgfSB9KVxyXG4gICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXAudmFsKCkgKVxyXG4gICAgICAgICAgdGhhdC5yZXNwb25zZWRQcm9wZXJ0eXMuc2V0KCBzbmFwLmtleSwgcCApO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZF9hZGRlZCAtIHJlc3BvbnNlZFByb3BlcnR5cy5zaXplJywgdGhhdC5yZXNwb25zZWRQcm9wZXJ0eXMuc2l6ZSlcclxuICAgICB9KTtcclxuXHJcbiAgICAgRmIuYWdlbnRQcm9wZXJ0eXMub3JkZXJCeUNoaWxkKCdyZWxhdGVkRmJpZCcpLmVxdWFsVG8odHlwZUZvcikub24oJ2NoaWxkX2NoYW5nZWQnLCAoc25hcHNob3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIEdldCBhbiBlbGVtZW50IHdpdGggYWxsIGZ1bmN0aW9ucywgcHJvcGVydHlzXHJcbiAgICAgICAgICAgICAgICAgIC8vIFJlY3JlYXRlIGEgbmV3IHByb3BlcnRzIHsgLi4uIH1cclxuICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCBwICk7XHJcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NoaWxkX2NoYW5nZWQgc25hcHNob3QudmFsKCkgJywgIHNuYXBzaG90LnZhbCgpIClcclxuICAgICB9KTtcclxuXHJcbiAgICAgRmIuYWdlbnRQcm9wZXJ0eXMub3JkZXJCeUNoaWxkKCdyZWxhdGVkRmJpZCcpLmVxdWFsVG8oaWQpLm9uKFwiY2hpbGRfcmVtb3ZlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICB0aGF0LnJlc3BvbnNlZFByb3BlcnR5cy5kZWxldGUoIHNuYXAua2V5ICk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZF9yZW1vdmVkIC0gcmVzcG9uc2VkUHJvcGVydHlzLnNpemUnLCB0aGF0LnJlc3BvbnNlZFByb3BlcnR5cy5zaXplKVxyXG4gICAgIH0pO1xyXG5cclxuICAgICByZXR1cm4gdGhhdC5yZXNwb25zZWRQcm9wZXJ0eXM7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbXBhcmVUbyBpcyBuYW1lIG9mIHZhcmlhYmxlIGUuZy4gbmFtZSwgcHJpY2UsIGxvY2F0aW9uXHJcbiAgICogQHZhbHVlVG8gICBpcyB2YWx1ZSBlcXVhbCB0by4gIGUuZy4gJ3NoYXRpbidcclxuICAgKiByZXR1cm5cclxuICAgKi9cclxuICBidWlsZE1hdGNoQWdlbnRQcm9wZXJ0eSA9IChpZCwgdHlwZUZvciwgbG9jYXRpb24gKSA9PiB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgLy8gSGFuZGxlIG1hdGNoIHByb3BlcnR5c1xyXG4gICAgIEZiLnByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3R5cGVUbycpLmVxdWFsVG8odHlwZUZvcikub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICAgLy8gRmIubWF0Y2hlZFByb3BlcnR5cy5jaGlsZCggc25hcC5rZXkgKS5zZXQoIHNuYXAudmFsKCkgKVxyXG4vLyAgICAgICAgICBGYi5wcm9wZXJ0eXMudXBkYXRlKCB7IHNuYXAua2V5IDogeyB9IH0pXHJcbiAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KCBzbmFwLmtleSwgc25hcC52YWwoKSApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkX2FkZGVkIC0gbWF0Y2hQcm9wZXJ0eS5zaXplJywgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemUpXHJcbiAgICAgfSk7XHJcblxyXG4gICAgIEZiLnByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3R5cGVUbycpLmVxdWFsVG8odHlwZUZvcikub24oJ2NoaWxkX2NoYW5nZWQnLCAoc25hcHNob3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIEdldCBhbiBlbGVtZW50IHdpdGggYWxsIGZ1bmN0aW9ucywgcHJvcGVydHlzXHJcbiAgICAgICAgICAgICAgICAgIC8vIFJlY3JlYXRlIGEgbmV3IHByb3BlcnRzIHsgLi4uIH1cclxuICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuLy8gICAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhhdC5tYXRjaGVkUHJvcGVydHlzLmdldCggc25hcHNob3Qua2V5IClcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCBwICk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zZXQoIHNuYXBzaG90LmtleSwgeyAuLi5wLCAuLi5zbmFwc2hvdC52YWwoKSB9KTtcclxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2hpbGRfY2hhbmdlZCBzbmFwc2hvdC52YWwoKSAnLCAgc25hcHNob3QudmFsKCkgKVxyXG4gICAgIH0pO1xyXG5cclxuXHJcbiAgICAgRmIucHJvcGVydHlzLm9yZGVyQnlDaGlsZCgndHlwZVRvJykuZXF1YWxUbyh0eXBlRm9yKS5vbihcImNoaWxkX3JlbW92ZWRcIiwgZnVuY3Rpb24oc25hcCkge1xyXG5cclxuICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLmRlbGV0ZSggc25hcC5rZXkgKTtcclxuICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkX3JlbW92ZWQgLSBtYXRjaFByb3BlcnR5LnNpemUnLCB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSlcclxuICAgICB9KTtcclxuXHJcbiAgICAgcmV0dXJuIHRoYXQubWF0Y2hlZFByb3BlcnR5cztcclxuXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVzZXJpYWxpemUoIG4gKSB7XHJcbiAgICB2YXIgcGhrID0gbmV3IFByb3BlcnR5aGsoKTtcclxuXHJcblxyXG4gICAgc3VwZXIuZGVzZXJpYWxpemVPYmoobiwgcGhrICk7XHJcbiAgICByZXR1cm4gcGhrO1xyXG4gIH1cclxuXHJcblxyXG59IC8vIEVuZCBvZiBjbGFzc1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0b3JlL3Byb3BlcnR5aGsuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFZQTtBQUNBO0FBQ0E7QUFYQTtBQVlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUF4REE7QUErREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQS9GQTtBQXNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUF4SUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQkE7QUFDQTs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUE2Q0E7Ozs7Ozs7QUF1Q0E7Ozs7Ozs7O0FBeUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQTVKQTs7Ozs7QUFFQTs7Ozs7QUFHQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7QUF3SkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
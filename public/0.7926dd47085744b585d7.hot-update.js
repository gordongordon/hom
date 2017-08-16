webpackHotUpdate(0,{

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n     value: true\n});\nexports.Propertyhk = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;\n\nvar _mobx = __webpack_require__(274);\n\nvar _firebaseStore = __webpack_require__(769);\n\nvar _property = __webpack_require__(773);\n\nfunction _initDefineProp(target, property, descriptor, context) {\n     if (!descriptor) return;\n     Object.defineProperty(target, property, {\n          enumerable: descriptor.enumerable,\n          configurable: descriptor.configurable,\n          writable: descriptor.writable,\n          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n     });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n     var desc = {};\n     Object['ke' + 'ys'](descriptor).forEach(function (key) {\n          desc[key] = descriptor[key];\n     });\n     desc.enumerable = !!desc.enumerable;\n     desc.configurable = !!desc.configurable;\n\n     if ('value' in desc || desc.initializer) {\n          desc.writable = true;\n     }\n\n     desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n          return decorator(target, property, desc) || desc;\n     }, desc);\n\n     if (context && desc.initializer !== void 0) {\n          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n          desc.initializer = undefined;\n     }\n\n     if (desc.initializer === void 0) {\n          Object['define' + 'Property'](target, property, desc);\n          desc = null;\n     }\n\n     return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n     throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n// import moment from 'moment'\n\n\n// List of user properties, to be .on\n// propertyViewModel\nvar Propertyhk = exports.Propertyhk = (_class = function (_Property) {\n     _inherits(Propertyhk, _Property);\n\n     //@observable propertys = map({});\n     //@observable propertys = new Map();\n\n     //@observable matchedPropertys = new Map();\n     // responsed propertys from agent only\n     function Propertyhk(props) {\n          _classCallCheck(this, Propertyhk);\n\n          var _this = _possibleConstructorReturn(this, (Propertyhk.__proto__ || Object.getPrototypeOf(Propertyhk)).call(this, props));\n\n          _initDefineProp(_this, 'matchedPropertys', _descriptor, _this);\n\n          _initDefineProp(_this, 'responsedPropertys', _descriptor2, _this);\n\n          _initDefineProp(_this, 'like', _descriptor3, _this);\n\n          _initDefineProp(_this, 'reject', _descriptor4, _this);\n\n          _initDefineProp(_this, 'view', _descriptor5, _this);\n\n          _this.buildMatchPropertyByRunTime = function (id, typeFor, location) {\n               var that = _this;\n\n               // Handle match propertys\n               _firebaseStore.Fb.propertys.orderByChild(_this.orderBy).equalTo(_this.equalTo).on(\"child_added\", function (snap) {\n\n                    var p = Propertyhk.deserialize(snap.val());\n                    //p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');\n\n                    that.matchedPropertys.set(snap.key, p);\n                    console.log('child_added - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild(_this.orderBy).equalTo(_this.equalTo).on('child_changed', function (snapshot) {\n\n                    // Get an element with all functions, propertys\n                    // Recreate a new properts { ... }\n                    // otherwise propertys.responsedPropertys = undefined error\n                    var p = Propertyhk.deserialize(snapshot.val());\n                    that.matchedPropertys.set(snapshot.key, p);\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild(_this.orderBy).equalTo(_this.equalTo).on(\"child_removed\", function (snap) {\n\n                    that.matchedPropertys.delete(snap.key);\n                    console.log('child_removed - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               return that.matchedPropertys;\n          };\n\n          _this.buildMatchProperty = function (id, typeFor, location) {\n               var that = _this;\n\n               // Handle match propertys\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_added\", function (snap) {\n\n                    //debugger\n                    //           if ( (location === snap.val().nameOfBuilding ) && (that.uid !== snap.val().uid) )\n                    if (location === snap.val().nameOfBuilding) {\n\n                         var p = Propertyhk.deserialize(snap.val());\n                         //p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');\n\n                         that.matchedPropertys.set(snap.key, p);\n                         console.log('child_added - matchProperty.size', that.matchedPropertys.size);\n                    }\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on('child_changed', function (snapshot) {\n\n                    // Get an element with all functions, propertys\n                    // Recreate a new properts { ... }\n                    // otherwise propertys.responsedPropertys = undefined error\n                    var p = Propertyhk.deserialize(snapshot.val());\n                    that.matchedPropertys.set(snapshot.key, p);\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_removed\", function (snap) {\n\n                    that.matchedPropertys.delete(snap.key);\n                    console.log('child_removed - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               return that.matchedPropertys;\n          };\n\n          _this.buildResponseProperty = function (id, typeFor, location) {\n               var that = _this;\n\n               // Handle match propertys\n               _firebaseStore.Fb.agentPropertys.orderByChild('relatedFbid').equalTo(id).on(\"child_added\", function (snap) {\n\n                    // Fb.matchedPropertys.child( snap.key ).set( snap.val() )\n                    // Fb.propertys.update( { snap.key : { } })\n                    var p = Propertyhk.deserialize(snap.val());\n                    that.responsedPropertys.set(snap.key, p);\n\n                    console.log('child_added - responsedPropertys.size', that.responsedPropertys.size);\n               });\n\n               _firebaseStore.Fb.agentPropertys.orderByChild('relatedFbid').equalTo(typeFor).on('child_changed', function (snapshot) {\n\n                    // Get an element with all functions, propertys\n                    // Recreate a new properts { ... }\n                    // otherwise propertys.responsedPropertys = undefined error\n                    var p = Propertyhk.deserialize(snapshot.val());\n                    that.matchedPropertys.set(snapshot.key, p);\n                    //console.log('child_changed snapshot.val() ',  snapshot.val() )\n               });\n\n               _firebaseStore.Fb.agentPropertys.orderByChild('relatedFbid').equalTo(id).on(\"child_removed\", function (snap) {\n\n                    that.responsedPropertys.delete(snap.key);\n                    console.log('child_removed - responsedPropertys.size', that.responsedPropertys.size);\n               });\n\n               return that.responsedPropertys;\n          };\n\n          _this.buildMatchAgentProperty = function (id, typeFor, location) {\n               var that = _this;\n\n               // Handle match propertys\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_added\", function (snap) {\n\n                    // Fb.matchedPropertys.child( snap.key ).set( snap.val() )\n                    //          Fb.propertys.update( { snap.key : { } })\n                    that.matchedPropertys.set(snap.key, snap.val());\n                    console.log('child_added - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on('child_changed', function (snapshot) {\n\n                    // Get an element with all functions, propertys\n                    // Recreate a new properts { ... }\n                    // otherwise propertys.responsedPropertys = undefined error\n                    //                  const p = that.matchedPropertys.get( snapshot.key )\n                    var p = Propertyhk.deserialize(snapshot.val());\n                    that.matchedPropertys.set(snapshot.key, p);\n\n                    //                  that.matchedPropertys.set( snapshot.key, { ...p, ...snapshot.val() });\n                    //console.log('child_changed snapshot.val() ',  snapshot.val() )\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_removed\", function (snap) {\n\n                    that.matchedPropertys.delete(snap.key);\n                    console.log('child_removed - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               return that.matchedPropertys;\n          };\n\n          return _this;\n     }\n\n     // constructor( v ) {\n     //   super( v );\n     // }\n\n     //@observable responsedPropertys = new Map();\n     // @observable matchedPropertys = new Map();\n\n     _createClass(Propertyhk, [{\n          key: 'json',\n          get: function get() {\n               return (0, _mobx.toJS)(this.matchedPropertys);\n          }\n\n          /**\r\n           * @compareTo is name of variable e.g. name, price, location\r\n           * @valueTo   is value equal to.  e.g. 'shatin'\r\n           * return\r\n           */\n\n\n          /**\r\n           * @compareTo is name of variable e.g. name, price, location\r\n           * @valueTo   is value equal to.  e.g. 'shatin'\r\n           * return\r\n           */\n\n\n          /**\r\n           * @compareTo is name of variable e.g. name, price, location\r\n           * @valueTo   is value equal to.  e.g. 'shatin'\r\n           * return\r\n           */\n\n\n          /**\r\n           * @compareTo is name of variable e.g. name, price, location\r\n           * @valueTo   is value equal to.  e.g. 'shatin'\r\n           * return\r\n           */\n\n     }], [{\n          key: 'deserialize',\n\n\n          // n is an object to be updated\n          value: function deserialize(n) {\n               var phk = new Propertyhk();\n\n               _get(Propertyhk.__proto__ || Object.getPrototypeOf(Propertyhk), 'deserializeObj', this).call(this, n, phk);\n               return phk;\n          }\n     }]);\n\n     return Propertyhk;\n}(_property.Property), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'matchedPropertys', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'responsedPropertys', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'like', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'reject', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'view', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _applyDecoratedDescriptor(_class.prototype, 'json', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'json'), _class.prototype)), _class); // End of class//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9wcm9wZXJ0eWhrLmpzPzgwYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtvYnNlcnZhYmxlLCBjb21wdXRlZCwgYWN0aW9ufSBmcm9tICdtb2J4JztcclxuaW1wb3J0IHtGYn0gZnJvbSAnZmlyZWJhc2Utc3RvcmUnO1xyXG5pbXBvcnQge3RvSlN9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQge1Byb3BlcnR5fSBmcm9tICdwcm9wZXJ0eSdcclxuLy8gaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5cclxuLy8gTGlzdCBvZiB1c2VyIHByb3BlcnRpZXMsIHRvIGJlIC5vblxyXG4vLyBwcm9wZXJ0eVZpZXdNb2RlbFxyXG5leHBvcnQgY2xhc3MgUHJvcGVydHloayBleHRlbmRzIFByb3BlcnR5IHtcclxuXHJcbiAgQG9ic2VydmFibGUgbWF0Y2hlZFByb3BlcnR5cyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICAvL0BvYnNlcnZhYmxlIG1hdGNoZWRQcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcbiAgLy8gcmVzcG9uc2VkIHByb3BlcnR5cyBmcm9tIGFnZW50IG9ubHlcclxuICBAb2JzZXJ2YWJsZSByZXNwb25zZWRQcm9wZXJ0eXMgPSBvYnNlcnZhYmxlLm1hcCh7fSk7XHJcbiAgLy9Ab2JzZXJ2YWJsZSByZXNwb25zZWRQcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcbiAgLy8gQG9ic2VydmFibGUgbWF0Y2hlZFByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgQG9ic2VydmFibGUgbGlrZSA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICBAb2JzZXJ2YWJsZSByZWplY3QgPSBvYnNlcnZhYmxlLm1hcCh7fSk7XHJcbiAgQG9ic2VydmFibGUgdmlldyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuXHJcblxyXG4gIC8vQG9ic2VydmFibGUgcHJvcGVydHlzID0gbWFwKHt9KTtcclxuICAvL0BvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xyXG4gICAgc3VwZXIoIHByb3BzICk7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdHJ1Y3RvciggdiApIHtcclxuICAvLyAgIHN1cGVyKCB2ICk7XHJcbiAgLy8gfVxyXG5cclxuICBAY29tcHV0ZWQgZ2V0IGpzb24oKSB7XHJcbiAgICByZXR1cm4gdG9KUyh0aGlzLm1hdGNoZWRQcm9wZXJ0eXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb21wYXJlVG8gaXMgbmFtZSBvZiB2YXJpYWJsZSBlLmcuIG5hbWUsIHByaWNlLCBsb2NhdGlvblxyXG4gICAqIEB2YWx1ZVRvICAgaXMgdmFsdWUgZXF1YWwgdG8uICBlLmcuICdzaGF0aW4nXHJcbiAgICogcmV0dXJuXHJcbiAgICovXHJcbiAgYnVpbGRNYXRjaFByb3BlcnR5QnlSdW5UaW1lID0gKGlkLCB0eXBlRm9yLCBsb2NhdGlvbiApID0+IHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vIEhhbmRsZSBtYXRjaCBwcm9wZXJ0eXNcclxuICAgICBGYi5wcm9wZXJ0eXMub3JkZXJCeUNoaWxkKHRoaXMub3JkZXJCeSkuZXF1YWxUbyh0aGlzLmVxdWFsVG8pLm9uKFwiY2hpbGRfYWRkZWRcIiwgZnVuY3Rpb24oc25hcCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXAudmFsKCkgKVxyXG4gICAgICAgICAgICAvL3AucmVhbFRpbWUgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcclxuXHJcbiAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcC5rZXksIHAgKTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGRfYWRkZWQgLSBtYXRjaFByb3BlcnR5LnNpemUnLCB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSlcclxuXHJcbiAgICAgfSk7XHJcblxyXG4gICAgIEZiLnByb3BlcnR5cy5vcmRlckJ5Q2hpbGQodGhpcy5vcmRlckJ5KS5lcXVhbFRvKHRoaXMuZXF1YWxUbykub24oJ2NoaWxkX2NoYW5nZWQnLCAoc25hcHNob3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIEdldCBhbiBlbGVtZW50IHdpdGggYWxsIGZ1bmN0aW9ucywgcHJvcGVydHlzXHJcbiAgICAgICAgICAgICAgICAgIC8vIFJlY3JlYXRlIGEgbmV3IHByb3BlcnRzIHsgLi4uIH1cclxuICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCBwICk7XHJcbiAgICAgfSk7XHJcblxyXG5cclxuICAgICBGYi5wcm9wZXJ0eXMub3JkZXJCeUNoaWxkKHRoaXMub3JkZXJCeSkuZXF1YWxUbyh0aGlzLmVxdWFsVG8pLm9uKFwiY2hpbGRfcmVtb3ZlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLmRlbGV0ZSggc25hcC5rZXkgKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZF9yZW1vdmVkIC0gbWF0Y2hQcm9wZXJ0eS5zaXplJywgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemUpXHJcbiAgICAgfSk7XHJcblxyXG4gICAgIHJldHVybiB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXM7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb21wYXJlVG8gaXMgbmFtZSBvZiB2YXJpYWJsZSBlLmcuIG5hbWUsIHByaWNlLCBsb2NhdGlvblxyXG4gICAqIEB2YWx1ZVRvICAgaXMgdmFsdWUgZXF1YWwgdG8uICBlLmcuICdzaGF0aW4nXHJcbiAgICogcmV0dXJuXHJcbiAgICovXHJcbiAgYnVpbGRNYXRjaFByb3BlcnR5ID0gKGlkLCB0eXBlRm9yLCBsb2NhdGlvbiApID0+IHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vIEhhbmRsZSBtYXRjaCBwcm9wZXJ0eXNcclxuICAgICBGYi5wcm9wZXJ0eXMub3JkZXJCeUNoaWxkKCd0eXBlVG8nKS5lcXVhbFRvKHR5cGVGb3IpLm9uKFwiY2hpbGRfYWRkZWRcIiwgZnVuY3Rpb24oc25hcCkge1xyXG5cclxuICAgICAgICAgICAvL2RlYnVnZ2VyXHJcbi8vICAgICAgICAgICBpZiAoIChsb2NhdGlvbiA9PT0gc25hcC52YWwoKS5uYW1lT2ZCdWlsZGluZyApICYmICh0aGF0LnVpZCAhPT0gc25hcC52YWwoKS51aWQpIClcclxuICAgICAgICAgICBpZiAoIGxvY2F0aW9uID09PSBzbmFwLnZhbCgpLm5hbWVPZkJ1aWxkaW5nIClcclxuICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgIGNvbnN0IHAgPSBQcm9wZXJ0eWhrLmRlc2VyaWFsaXplKCBzbmFwLnZhbCgpIClcclxuICAgICAgICAgICAgLy9wLnJlYWxUaW1lID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcblxyXG4gICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zZXQoIHNuYXAua2V5LCBwICk7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkX2FkZGVkIC0gbWF0Y2hQcm9wZXJ0eS5zaXplJywgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemUpXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICB9KTtcclxuXHJcbiAgICAgRmIucHJvcGVydHlzLm9yZGVyQnlDaGlsZCgndHlwZVRvJykuZXF1YWxUbyh0eXBlRm9yKS5vbignY2hpbGRfY2hhbmdlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gR2V0IGFuIGVsZW1lbnQgd2l0aCBhbGwgZnVuY3Rpb25zLCBwcm9wZXJ0eXNcclxuICAgICAgICAgICAgICAgICAgLy8gUmVjcmVhdGUgYSBuZXcgcHJvcGVydHMgeyAuLi4gfVxyXG4gICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgcHJvcGVydHlzLnJlc3BvbnNlZFByb3BlcnR5cyA9IHVuZGVmaW5lZCBlcnJvclxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZSggc25hcHNob3QudmFsKCkgKVxyXG4gICAgICAgICAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKTtcclxuICAgICB9KTtcclxuXHJcblxyXG4gICAgIEZiLnByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3R5cGVUbycpLmVxdWFsVG8odHlwZUZvcikub24oXCJjaGlsZF9yZW1vdmVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuXHJcbiAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuZGVsZXRlKCBzbmFwLmtleSApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkX3JlbW92ZWQgLSBtYXRjaFByb3BlcnR5LnNpemUnLCB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSlcclxuICAgICB9KTtcclxuXHJcbiAgICAgcmV0dXJuIHRoYXQubWF0Y2hlZFByb3BlcnR5cztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAY29tcGFyZVRvIGlzIG5hbWUgb2YgdmFyaWFibGUgZS5nLiBuYW1lLCBwcmljZSwgbG9jYXRpb25cclxuICAgKiBAdmFsdWVUbyAgIGlzIHZhbHVlIGVxdWFsIHRvLiAgZS5nLiAnc2hhdGluJ1xyXG4gICAqIHJldHVyblxyXG4gICAqL1xyXG4gIGJ1aWxkUmVzcG9uc2VQcm9wZXJ0eSA9IChpZCwgdHlwZUZvciwgbG9jYXRpb24gKSA9PiB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgLy8gSGFuZGxlIG1hdGNoIHByb3BlcnR5c1xyXG4gICAgIEZiLmFnZW50UHJvcGVydHlzLm9yZGVyQnlDaGlsZCgncmVsYXRlZEZiaWQnKS5lcXVhbFRvKGlkKS5vbihcImNoaWxkX2FkZGVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuXHJcbiAgICAgICAgICAvLyBGYi5tYXRjaGVkUHJvcGVydHlzLmNoaWxkKCBzbmFwLmtleSApLnNldCggc25hcC52YWwoKSApXHJcbiAgICAgICAgICAvLyBGYi5wcm9wZXJ0eXMudXBkYXRlKCB7IHNuYXAua2V5IDogeyB9IH0pXHJcbiAgICAgICAgICBjb25zdCBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZSggc25hcC52YWwoKSApXHJcbiAgICAgICAgICB0aGF0LnJlc3BvbnNlZFByb3BlcnR5cy5zZXQoIHNuYXAua2V5LCBwICk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkX2FkZGVkIC0gcmVzcG9uc2VkUHJvcGVydHlzLnNpemUnLCB0aGF0LnJlc3BvbnNlZFByb3BlcnR5cy5zaXplKVxyXG4gICAgIH0pO1xyXG5cclxuICAgICBGYi5hZ2VudFByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3JlbGF0ZWRGYmlkJykuZXF1YWxUbyh0eXBlRm9yKS5vbignY2hpbGRfY2hhbmdlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gR2V0IGFuIGVsZW1lbnQgd2l0aCBhbGwgZnVuY3Rpb25zLCBwcm9wZXJ0eXNcclxuICAgICAgICAgICAgICAgICAgLy8gUmVjcmVhdGUgYSBuZXcgcHJvcGVydHMgeyAuLi4gfVxyXG4gICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgcHJvcGVydHlzLnJlc3BvbnNlZFByb3BlcnR5cyA9IHVuZGVmaW5lZCBlcnJvclxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZSggc25hcHNob3QudmFsKCkgKVxyXG4gICAgICAgICAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKTtcclxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2hpbGRfY2hhbmdlZCBzbmFwc2hvdC52YWwoKSAnLCAgc25hcHNob3QudmFsKCkgKVxyXG4gICAgIH0pO1xyXG5cclxuICAgICBGYi5hZ2VudFByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3JlbGF0ZWRGYmlkJykuZXF1YWxUbyhpZCkub24oXCJjaGlsZF9yZW1vdmVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuXHJcbiAgICAgICAgIHRoYXQucmVzcG9uc2VkUHJvcGVydHlzLmRlbGV0ZSggc25hcC5rZXkgKTtcclxuICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkX3JlbW92ZWQgLSByZXNwb25zZWRQcm9wZXJ0eXMuc2l6ZScsIHRoYXQucmVzcG9uc2VkUHJvcGVydHlzLnNpemUpXHJcbiAgICAgfSk7XHJcblxyXG4gICAgIHJldHVybiB0aGF0LnJlc3BvbnNlZFByb3BlcnR5cztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAY29tcGFyZVRvIGlzIG5hbWUgb2YgdmFyaWFibGUgZS5nLiBuYW1lLCBwcmljZSwgbG9jYXRpb25cclxuICAgKiBAdmFsdWVUbyAgIGlzIHZhbHVlIGVxdWFsIHRvLiAgZS5nLiAnc2hhdGluJ1xyXG4gICAqIHJldHVyblxyXG4gICAqL1xyXG4gIGJ1aWxkTWF0Y2hBZ2VudFByb3BlcnR5ID0gKGlkLCB0eXBlRm9yLCBsb2NhdGlvbiApID0+IHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAvLyBIYW5kbGUgbWF0Y2ggcHJvcGVydHlzXHJcbiAgICAgRmIucHJvcGVydHlzLm9yZGVyQnlDaGlsZCgndHlwZVRvJykuZXF1YWxUbyh0eXBlRm9yKS5vbihcImNoaWxkX2FkZGVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuXHJcbiAgICAgICAgICAvLyBGYi5tYXRjaGVkUHJvcGVydHlzLmNoaWxkKCBzbmFwLmtleSApLnNldCggc25hcC52YWwoKSApXHJcbi8vICAgICAgICAgIEZiLnByb3BlcnR5cy51cGRhdGUoIHsgc25hcC5rZXkgOiB7IH0gfSlcclxuICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zZXQoIHNuYXAua2V5LCBzbmFwLnZhbCgpICk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGRfYWRkZWQgLSBtYXRjaFByb3BlcnR5LnNpemUnLCB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSlcclxuICAgICB9KTtcclxuXHJcbiAgICAgRmIucHJvcGVydHlzLm9yZGVyQnlDaGlsZCgndHlwZVRvJykuZXF1YWxUbyh0eXBlRm9yKS5vbignY2hpbGRfY2hhbmdlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gR2V0IGFuIGVsZW1lbnQgd2l0aCBhbGwgZnVuY3Rpb25zLCBwcm9wZXJ0eXNcclxuICAgICAgICAgICAgICAgICAgLy8gUmVjcmVhdGUgYSBuZXcgcHJvcGVydHMgeyAuLi4gfVxyXG4gICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgcHJvcGVydHlzLnJlc3BvbnNlZFByb3BlcnR5cyA9IHVuZGVmaW5lZCBlcnJvclxyXG4vLyAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuZ2V0KCBzbmFwc2hvdC5rZXkgKVxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZSggc25hcHNob3QudmFsKCkgKVxyXG4gICAgICAgICAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKTtcclxuXHJcbi8vICAgICAgICAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCB7IC4uLnAsIC4uLnNuYXBzaG90LnZhbCgpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGlsZF9jaGFuZ2VkIHNuYXBzaG90LnZhbCgpICcsICBzbmFwc2hvdC52YWwoKSApXHJcbiAgICAgfSk7XHJcblxyXG5cclxuICAgICBGYi5wcm9wZXJ0eXMub3JkZXJCeUNoaWxkKCd0eXBlVG8nKS5lcXVhbFRvKHR5cGVGb3IpLm9uKFwiY2hpbGRfcmVtb3ZlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuZGVsZXRlKCBzbmFwLmtleSApO1xyXG4gICAgICAgICBjb25zb2xlLmxvZygnY2hpbGRfcmVtb3ZlZCAtIG1hdGNoUHJvcGVydHkuc2l6ZScsIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplKVxyXG4gICAgIH0pO1xyXG5cclxuICAgICByZXR1cm4gdGhhdC5tYXRjaGVkUHJvcGVydHlzO1xyXG5cclxuICB9XHJcblxyXG4gIC8vIG4gaXMgYW4gb2JqZWN0IHRvIGJlIHVwZGF0ZWRcclxuICBzdGF0aWMgZGVzZXJpYWxpemUoIG4gKSB7XHJcbiAgICB2YXIgcGhrID0gbmV3IFByb3BlcnR5aGsoKTtcclxuXHJcblxyXG4gICAgc3VwZXIuZGVzZXJpYWxpemVPYmoobiwgcGhrICk7XHJcbiAgICByZXR1cm4gcGhrO1xyXG4gIH1cclxuXHJcblxyXG59IC8vIEVuZCBvZiBjbGFzc1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0b3JlL3Byb3BlcnR5aGsuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFjQTtBQUNBO0FBQ0E7QUFiQTtBQUNBO0FBYUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBcERBO0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFsR0E7QUF5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXpJQTtBQWdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFsTEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFDQTtBQUNBOzs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQXlDQTs7Ozs7OztBQTZDQTs7Ozs7OztBQXVDQTs7Ozs7Ozs7OztBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQXpNQTs7Ozs7QUFHQTs7Ozs7QUFJQTs7Ozs7QUFDQTs7Ozs7QUFDQTs7QUFtTUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
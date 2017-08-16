webpackHotUpdate(0,{

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n     value: true\n});\nexports.Propertyhk = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;\n\nvar _mobx = __webpack_require__(274);\n\nvar _firebaseStore = __webpack_require__(769);\n\nvar _property = __webpack_require__(773);\n\nfunction _initDefineProp(target, property, descriptor, context) {\n     if (!descriptor) return;\n     Object.defineProperty(target, property, {\n          enumerable: descriptor.enumerable,\n          configurable: descriptor.configurable,\n          writable: descriptor.writable,\n          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n     });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n     var desc = {};\n     Object['ke' + 'ys'](descriptor).forEach(function (key) {\n          desc[key] = descriptor[key];\n     });\n     desc.enumerable = !!desc.enumerable;\n     desc.configurable = !!desc.configurable;\n\n     if ('value' in desc || desc.initializer) {\n          desc.writable = true;\n     }\n\n     desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n          return decorator(target, property, desc) || desc;\n     }, desc);\n\n     if (context && desc.initializer !== void 0) {\n          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n          desc.initializer = undefined;\n     }\n\n     if (desc.initializer === void 0) {\n          Object['define' + 'Property'](target, property, desc);\n          desc = null;\n     }\n\n     return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n     throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n// import moment from 'moment'\n\n\n// List of user properties, to be .on\n// propertyViewModel\nvar Propertyhk = exports.Propertyhk = (_class = function (_Property) {\n     _inherits(Propertyhk, _Property);\n\n     //@observable propertys = map({});\n     //@observable propertys = new Map();\n\n     //@observable matchedPropertys = new Map();\n     // responsed propertys from agent only\n     function Propertyhk(props) {\n          _classCallCheck(this, Propertyhk);\n\n          var _this = _possibleConstructorReturn(this, (Propertyhk.__proto__ || Object.getPrototypeOf(Propertyhk)).call(this, props));\n\n          _initDefineProp(_this, 'matchedPropertys', _descriptor, _this);\n\n          _initDefineProp(_this, 'responsedPropertys', _descriptor2, _this);\n\n          _initDefineProp(_this, 'like', _descriptor3, _this);\n\n          _initDefineProp(_this, 'reject', _descriptor4, _this);\n\n          _initDefineProp(_this, 'view', _descriptor5, _this);\n\n          _this.buildMatchPropertyByAddressLocation = function (id, typeFor, location) {\n               var that = _this;\n\n               // Handle match propertys\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_added\", function (snap) {\n\n                    //debugger\n                    //           if ( (location === snap.val().nameOfBuilding ) && (that.uid !== snap.val().uid) )\n                    if (location === snap.val().nameOfBuilding) {\n\n                         var p = Propertyhk.deserialize(snap.val());\n                         //p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');\n\n                         that.matchedPropertys.set(snap.key, p);\n                         console.log('child_added - matchProperty.size', that.matchedPropertys.size);\n                    }\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on('child_changed', function (snapshot) {\n\n                    // Get an element with all functions, propertys\n                    // Recreate a new properts { ... }\n                    // otherwise propertys.responsedPropertys = undefined error\n                    var p = Propertyhk.deserialize(snapshot.val());\n                    that.matchedPropertys.set(snapshot.key, p);\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_removed\", function (snap) {\n\n                    that.matchedPropertys.delete(snap.key);\n                    console.log('child_removed - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               return that.matchedPropertys;\n          };\n\n          _this.buildMatchProperty = function (id, typeFor, location) {\n               var that = _this;\n\n               // Handle match propertys\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_added\", function (snap) {\n\n                    //debugger\n                    //           if ( (location === snap.val().nameOfBuilding ) && (that.uid !== snap.val().uid) )\n                    if (location === snap.val().nameOfBuilding) {\n\n                         var p = Propertyhk.deserialize(snap.val());\n                         //p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');\n\n                         that.matchedPropertys.set(snap.key, p);\n                         console.log('child_added - matchProperty.size', that.matchedPropertys.size);\n                    }\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on('child_changed', function (snapshot) {\n\n                    // Get an element with all functions, propertys\n                    // Recreate a new properts { ... }\n                    // otherwise propertys.responsedPropertys = undefined error\n                    var p = Propertyhk.deserialize(snapshot.val());\n                    that.matchedPropertys.set(snapshot.key, p);\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_removed\", function (snap) {\n\n                    that.matchedPropertys.delete(snap.key);\n                    console.log('child_removed - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               return that.matchedPropertys;\n          };\n\n          _this.buildResponseProperty = function (id, typeFor, location) {\n               var that = _this;\n\n               // Handle match propertys\n               _firebaseStore.Fb.agentPropertys.orderByChild('relatedFbid').equalTo(id).on(\"child_added\", function (snap) {\n\n                    // Fb.matchedPropertys.child( snap.key ).set( snap.val() )\n                    // Fb.propertys.update( { snap.key : { } })\n                    var p = Propertyhk.deserialize(snap.val());\n                    that.responsedPropertys.set(snap.key, p);\n\n                    console.log('child_added - responsedPropertys.size', that.responsedPropertys.size);\n               });\n\n               _firebaseStore.Fb.agentPropertys.orderByChild('relatedFbid').equalTo(typeFor).on('child_changed', function (snapshot) {\n\n                    // Get an element with all functions, propertys\n                    // Recreate a new properts { ... }\n                    // otherwise propertys.responsedPropertys = undefined error\n                    var p = Propertyhk.deserialize(snapshot.val());\n                    that.matchedPropertys.set(snapshot.key, p);\n                    //console.log('child_changed snapshot.val() ',  snapshot.val() )\n               });\n\n               _firebaseStore.Fb.agentPropertys.orderByChild('relatedFbid').equalTo(id).on(\"child_removed\", function (snap) {\n\n                    that.responsedPropertys.delete(snap.key);\n                    console.log('child_removed - responsedPropertys.size', that.responsedPropertys.size);\n               });\n\n               return that.responsedPropertys;\n          };\n\n          _this.buildMatchAgentProperty = function (id, typeFor, location) {\n               var that = _this;\n\n               // Handle match propertys\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_added\", function (snap) {\n\n                    // Fb.matchedPropertys.child( snap.key ).set( snap.val() )\n                    //          Fb.propertys.update( { snap.key : { } })\n                    that.matchedPropertys.set(snap.key, snap.val());\n                    console.log('child_added - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on('child_changed', function (snapshot) {\n\n                    // Get an element with all functions, propertys\n                    // Recreate a new properts { ... }\n                    // otherwise propertys.responsedPropertys = undefined error\n                    //                  const p = that.matchedPropertys.get( snapshot.key )\n                    var p = Propertyhk.deserialize(snapshot.val());\n                    that.matchedPropertys.set(snapshot.key, p);\n\n                    //                  that.matchedPropertys.set( snapshot.key, { ...p, ...snapshot.val() });\n                    //console.log('child_changed snapshot.val() ',  snapshot.val() )\n               });\n\n               _firebaseStore.Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on(\"child_removed\", function (snap) {\n\n                    that.matchedPropertys.delete(snap.key);\n                    console.log('child_removed - matchProperty.size', that.matchedPropertys.size);\n               });\n\n               return that.matchedPropertys;\n          };\n\n          return _this;\n     }\n\n     // constructor( v ) {\n     //   super( v );\n     // }\n\n     //@observable responsedPropertys = new Map();\n     // @observable matchedPropertys = new Map();\n\n     _createClass(Propertyhk, [{\n          key: 'json',\n          get: function get() {\n               return (0, _mobx.toJS)(this.matchedPropertys);\n          }\n\n          /**\r\n           * @compareTo is name of variable e.g. name, price, location\r\n           * @valueTo   is value equal to.  e.g. 'shatin'\r\n           * return\r\n           */\n\n\n          /**\r\n           * @compareTo is name of variable e.g. name, price, location\r\n           * @valueTo   is value equal to.  e.g. 'shatin'\r\n           * return\r\n           */\n\n\n          /**\r\n           * @compareTo is name of variable e.g. name, price, location\r\n           * @valueTo   is value equal to.  e.g. 'shatin'\r\n           * return\r\n           */\n\n\n          /**\r\n           * @compareTo is name of variable e.g. name, price, location\r\n           * @valueTo   is value equal to.  e.g. 'shatin'\r\n           * return\r\n           */\n\n     }], [{\n          key: 'deserialize',\n\n\n          // n is an object to be updated\n          value: function deserialize(n) {\n               var phk = new Propertyhk();\n\n               _get(Propertyhk.__proto__ || Object.getPrototypeOf(Propertyhk), 'deserializeObj', this).call(this, n, phk);\n               return phk;\n          }\n     }]);\n\n     return Propertyhk;\n}(_property.Property), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'matchedPropertys', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'responsedPropertys', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'like', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'reject', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'view', [_mobx.observable], {\n     enumerable: true,\n     initializer: function initializer() {\n          return _mobx.observable.map({});\n     }\n}), _applyDecoratedDescriptor(_class.prototype, 'json', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'json'), _class.prototype)), _class); // End of class//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9wcm9wZXJ0eWhrLmpzPzgwYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtvYnNlcnZhYmxlLCBjb21wdXRlZCwgYWN0aW9ufSBmcm9tICdtb2J4JztcclxuaW1wb3J0IHtGYn0gZnJvbSAnZmlyZWJhc2Utc3RvcmUnO1xyXG5pbXBvcnQge3RvSlN9IGZyb20gJ21vYngnO1xyXG5pbXBvcnQge1Byb3BlcnR5fSBmcm9tICdwcm9wZXJ0eSdcclxuLy8gaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcblxyXG5cclxuLy8gTGlzdCBvZiB1c2VyIHByb3BlcnRpZXMsIHRvIGJlIC5vblxyXG4vLyBwcm9wZXJ0eVZpZXdNb2RlbFxyXG5leHBvcnQgY2xhc3MgUHJvcGVydHloayBleHRlbmRzIFByb3BlcnR5IHtcclxuXHJcbiAgQG9ic2VydmFibGUgbWF0Y2hlZFByb3BlcnR5cyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICAvL0BvYnNlcnZhYmxlIG1hdGNoZWRQcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcbiAgLy8gcmVzcG9uc2VkIHByb3BlcnR5cyBmcm9tIGFnZW50IG9ubHlcclxuICBAb2JzZXJ2YWJsZSByZXNwb25zZWRQcm9wZXJ0eXMgPSBvYnNlcnZhYmxlLm1hcCh7fSk7XHJcbiAgLy9Ab2JzZXJ2YWJsZSByZXNwb25zZWRQcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcbiAgLy8gQG9ic2VydmFibGUgbWF0Y2hlZFByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgQG9ic2VydmFibGUgbGlrZSA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICBAb2JzZXJ2YWJsZSByZWplY3QgPSBvYnNlcnZhYmxlLm1hcCh7fSk7XHJcbiAgQG9ic2VydmFibGUgdmlldyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuXHJcblxyXG4gIC8vQG9ic2VydmFibGUgcHJvcGVydHlzID0gbWFwKHt9KTtcclxuICAvL0BvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoIHByb3BzICkge1xyXG4gICAgc3VwZXIoIHByb3BzICk7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdHJ1Y3RvciggdiApIHtcclxuICAvLyAgIHN1cGVyKCB2ICk7XHJcbiAgLy8gfVxyXG5cclxuICBAY29tcHV0ZWQgZ2V0IGpzb24oKSB7XHJcbiAgICByZXR1cm4gdG9KUyh0aGlzLm1hdGNoZWRQcm9wZXJ0eXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb21wYXJlVG8gaXMgbmFtZSBvZiB2YXJpYWJsZSBlLmcuIG5hbWUsIHByaWNlLCBsb2NhdGlvblxyXG4gICAqIEB2YWx1ZVRvICAgaXMgdmFsdWUgZXF1YWwgdG8uICBlLmcuICdzaGF0aW4nXHJcbiAgICogcmV0dXJuXHJcbiAgICovXHJcbiAgYnVpbGRNYXRjaFByb3BlcnR5QnlBZGRyZXNzTG9jYXRpb24gPSAoaWQsIHR5cGVGb3IsIGxvY2F0aW9uICkgPT4ge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgLy8gSGFuZGxlIG1hdGNoIHByb3BlcnR5c1xyXG4gICAgIEZiLnByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3R5cGVUbycpLmVxdWFsVG8odHlwZUZvcikub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICAgIC8vZGVidWdnZXJcclxuLy8gICAgICAgICAgIGlmICggKGxvY2F0aW9uID09PSBzbmFwLnZhbCgpLm5hbWVPZkJ1aWxkaW5nICkgJiYgKHRoYXQudWlkICE9PSBzbmFwLnZhbCgpLnVpZCkgKVxyXG4gICAgICAgICAgIGlmICggbG9jYXRpb24gPT09IHNuYXAudmFsKCkubmFtZU9mQnVpbGRpbmcgKVxyXG4gICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXAudmFsKCkgKVxyXG4gICAgICAgICAgICAvL3AucmVhbFRpbWUgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcclxuXHJcbiAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcC5rZXksIHAgKTtcclxuICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGRfYWRkZWQgLSBtYXRjaFByb3BlcnR5LnNpemUnLCB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSlcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgIH0pO1xyXG5cclxuICAgICBGYi5wcm9wZXJ0eXMub3JkZXJCeUNoaWxkKCd0eXBlVG8nKS5lcXVhbFRvKHR5cGVGb3IpLm9uKCdjaGlsZF9jaGFuZ2VkJywgKHNuYXBzaG90KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyBHZXQgYW4gZWxlbWVudCB3aXRoIGFsbCBmdW5jdGlvbnMsIHByb3BlcnR5c1xyXG4gICAgICAgICAgICAgICAgICAvLyBSZWNyZWF0ZSBhIG5ldyBwcm9wZXJ0cyB7IC4uLiB9XHJcbiAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBwcm9wZXJ0eXMucmVzcG9uc2VkUHJvcGVydHlzID0gdW5kZWZpbmVkIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBQcm9wZXJ0eWhrLmRlc2VyaWFsaXplKCBzbmFwc2hvdC52YWwoKSApXHJcbiAgICAgICAgICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zZXQoIHNuYXBzaG90LmtleSwgcCApO1xyXG4gICAgIH0pO1xyXG5cclxuXHJcbiAgICAgRmIucHJvcGVydHlzLm9yZGVyQnlDaGlsZCgndHlwZVRvJykuZXF1YWxUbyh0eXBlRm9yKS5vbihcImNoaWxkX3JlbW92ZWRcIiwgZnVuY3Rpb24oc25hcCkge1xyXG5cclxuICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5kZWxldGUoIHNuYXAua2V5ICk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGRfcmVtb3ZlZCAtIG1hdGNoUHJvcGVydHkuc2l6ZScsIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplKVxyXG4gICAgIH0pO1xyXG5cclxuICAgICByZXR1cm4gdGhhdC5tYXRjaGVkUHJvcGVydHlzO1xyXG5cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAY29tcGFyZVRvIGlzIG5hbWUgb2YgdmFyaWFibGUgZS5nLiBuYW1lLCBwcmljZSwgbG9jYXRpb25cclxuICAgKiBAdmFsdWVUbyAgIGlzIHZhbHVlIGVxdWFsIHRvLiAgZS5nLiAnc2hhdGluJ1xyXG4gICAqIHJldHVyblxyXG4gICAqL1xyXG4gIGJ1aWxkTWF0Y2hQcm9wZXJ0eSA9IChpZCwgdHlwZUZvciwgbG9jYXRpb24gKSA9PiB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAvLyBIYW5kbGUgbWF0Y2ggcHJvcGVydHlzXHJcbiAgICAgRmIucHJvcGVydHlzLm9yZGVyQnlDaGlsZCgndHlwZVRvJykuZXF1YWxUbyh0eXBlRm9yKS5vbihcImNoaWxkX2FkZGVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuXHJcbiAgICAgICAgICAgLy9kZWJ1Z2dlclxyXG4vLyAgICAgICAgICAgaWYgKCAobG9jYXRpb24gPT09IHNuYXAudmFsKCkubmFtZU9mQnVpbGRpbmcgKSAmJiAodGhhdC51aWQgIT09IHNuYXAudmFsKCkudWlkKSApXHJcbiAgICAgICAgICAgaWYgKCBsb2NhdGlvbiA9PT0gc25hcC52YWwoKS5uYW1lT2ZCdWlsZGluZyApXHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICBjb25zdCBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZSggc25hcC52YWwoKSApXHJcbiAgICAgICAgICAgIC8vcC5yZWFsVGltZSA9IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpO1xyXG5cclxuICAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KCBzbmFwLmtleSwgcCApO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZF9hZGRlZCAtIG1hdGNoUHJvcGVydHkuc2l6ZScsIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplKVxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgfSk7XHJcblxyXG4gICAgIEZiLnByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3R5cGVUbycpLmVxdWFsVG8odHlwZUZvcikub24oJ2NoaWxkX2NoYW5nZWQnLCAoc25hcHNob3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIEdldCBhbiBlbGVtZW50IHdpdGggYWxsIGZ1bmN0aW9ucywgcHJvcGVydHlzXHJcbiAgICAgICAgICAgICAgICAgIC8vIFJlY3JlYXRlIGEgbmV3IHByb3BlcnRzIHsgLi4uIH1cclxuICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCBwICk7XHJcbiAgICAgfSk7XHJcblxyXG5cclxuICAgICBGYi5wcm9wZXJ0eXMub3JkZXJCeUNoaWxkKCd0eXBlVG8nKS5lcXVhbFRvKHR5cGVGb3IpLm9uKFwiY2hpbGRfcmVtb3ZlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLmRlbGV0ZSggc25hcC5rZXkgKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZF9yZW1vdmVkIC0gbWF0Y2hQcm9wZXJ0eS5zaXplJywgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemUpXHJcbiAgICAgfSk7XHJcblxyXG4gICAgIHJldHVybiB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXM7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbXBhcmVUbyBpcyBuYW1lIG9mIHZhcmlhYmxlIGUuZy4gbmFtZSwgcHJpY2UsIGxvY2F0aW9uXHJcbiAgICogQHZhbHVlVG8gICBpcyB2YWx1ZSBlcXVhbCB0by4gIGUuZy4gJ3NoYXRpbidcclxuICAgKiByZXR1cm5cclxuICAgKi9cclxuICBidWlsZFJlc3BvbnNlUHJvcGVydHkgPSAoaWQsIHR5cGVGb3IsIGxvY2F0aW9uICkgPT4ge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vIEhhbmRsZSBtYXRjaCBwcm9wZXJ0eXNcclxuICAgICBGYi5hZ2VudFByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3JlbGF0ZWRGYmlkJykuZXF1YWxUbyhpZCkub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICAgLy8gRmIubWF0Y2hlZFByb3BlcnR5cy5jaGlsZCggc25hcC5rZXkgKS5zZXQoIHNuYXAudmFsKCkgKVxyXG4gICAgICAgICAgLy8gRmIucHJvcGVydHlzLnVwZGF0ZSggeyBzbmFwLmtleSA6IHsgfSB9KVxyXG4gICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXAudmFsKCkgKVxyXG4gICAgICAgICAgdGhhdC5yZXNwb25zZWRQcm9wZXJ0eXMuc2V0KCBzbmFwLmtleSwgcCApO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZF9hZGRlZCAtIHJlc3BvbnNlZFByb3BlcnR5cy5zaXplJywgdGhhdC5yZXNwb25zZWRQcm9wZXJ0eXMuc2l6ZSlcclxuICAgICB9KTtcclxuXHJcbiAgICAgRmIuYWdlbnRQcm9wZXJ0eXMub3JkZXJCeUNoaWxkKCdyZWxhdGVkRmJpZCcpLmVxdWFsVG8odHlwZUZvcikub24oJ2NoaWxkX2NoYW5nZWQnLCAoc25hcHNob3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIEdldCBhbiBlbGVtZW50IHdpdGggYWxsIGZ1bmN0aW9ucywgcHJvcGVydHlzXHJcbiAgICAgICAgICAgICAgICAgIC8vIFJlY3JlYXRlIGEgbmV3IHByb3BlcnRzIHsgLi4uIH1cclxuICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCBwICk7XHJcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NoaWxkX2NoYW5nZWQgc25hcHNob3QudmFsKCkgJywgIHNuYXBzaG90LnZhbCgpIClcclxuICAgICB9KTtcclxuXHJcbiAgICAgRmIuYWdlbnRQcm9wZXJ0eXMub3JkZXJCeUNoaWxkKCdyZWxhdGVkRmJpZCcpLmVxdWFsVG8oaWQpLm9uKFwiY2hpbGRfcmVtb3ZlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICB0aGF0LnJlc3BvbnNlZFByb3BlcnR5cy5kZWxldGUoIHNuYXAua2V5ICk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZF9yZW1vdmVkIC0gcmVzcG9uc2VkUHJvcGVydHlzLnNpemUnLCB0aGF0LnJlc3BvbnNlZFByb3BlcnR5cy5zaXplKVxyXG4gICAgIH0pO1xyXG5cclxuICAgICByZXR1cm4gdGhhdC5yZXNwb25zZWRQcm9wZXJ0eXM7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbXBhcmVUbyBpcyBuYW1lIG9mIHZhcmlhYmxlIGUuZy4gbmFtZSwgcHJpY2UsIGxvY2F0aW9uXHJcbiAgICogQHZhbHVlVG8gICBpcyB2YWx1ZSBlcXVhbCB0by4gIGUuZy4gJ3NoYXRpbidcclxuICAgKiByZXR1cm5cclxuICAgKi9cclxuICBidWlsZE1hdGNoQWdlbnRQcm9wZXJ0eSA9IChpZCwgdHlwZUZvciwgbG9jYXRpb24gKSA9PiB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgLy8gSGFuZGxlIG1hdGNoIHByb3BlcnR5c1xyXG4gICAgIEZiLnByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3R5cGVUbycpLmVxdWFsVG8odHlwZUZvcikub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICAgLy8gRmIubWF0Y2hlZFByb3BlcnR5cy5jaGlsZCggc25hcC5rZXkgKS5zZXQoIHNuYXAudmFsKCkgKVxyXG4vLyAgICAgICAgICBGYi5wcm9wZXJ0eXMudXBkYXRlKCB7IHNuYXAua2V5IDogeyB9IH0pXHJcbiAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KCBzbmFwLmtleSwgc25hcC52YWwoKSApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkX2FkZGVkIC0gbWF0Y2hQcm9wZXJ0eS5zaXplJywgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemUpXHJcbiAgICAgfSk7XHJcblxyXG4gICAgIEZiLnByb3BlcnR5cy5vcmRlckJ5Q2hpbGQoJ3R5cGVUbycpLmVxdWFsVG8odHlwZUZvcikub24oJ2NoaWxkX2NoYW5nZWQnLCAoc25hcHNob3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIEdldCBhbiBlbGVtZW50IHdpdGggYWxsIGZ1bmN0aW9ucywgcHJvcGVydHlzXHJcbiAgICAgICAgICAgICAgICAgIC8vIFJlY3JlYXRlIGEgbmV3IHByb3BlcnRzIHsgLi4uIH1cclxuICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuLy8gICAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhhdC5tYXRjaGVkUHJvcGVydHlzLmdldCggc25hcHNob3Qua2V5IClcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCBwICk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zZXQoIHNuYXBzaG90LmtleSwgeyAuLi5wLCAuLi5zbmFwc2hvdC52YWwoKSB9KTtcclxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2hpbGRfY2hhbmdlZCBzbmFwc2hvdC52YWwoKSAnLCAgc25hcHNob3QudmFsKCkgKVxyXG4gICAgIH0pO1xyXG5cclxuXHJcbiAgICAgRmIucHJvcGVydHlzLm9yZGVyQnlDaGlsZCgndHlwZVRvJykuZXF1YWxUbyh0eXBlRm9yKS5vbihcImNoaWxkX3JlbW92ZWRcIiwgZnVuY3Rpb24oc25hcCkge1xyXG5cclxuICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLmRlbGV0ZSggc25hcC5rZXkgKTtcclxuICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkX3JlbW92ZWQgLSBtYXRjaFByb3BlcnR5LnNpemUnLCB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSlcclxuICAgICB9KTtcclxuXHJcbiAgICAgcmV0dXJuIHRoYXQubWF0Y2hlZFByb3BlcnR5cztcclxuXHJcbiAgfVxyXG5cclxuICAvLyBuIGlzIGFuIG9iamVjdCB0byBiZSB1cGRhdGVkXHJcbiAgc3RhdGljIGRlc2VyaWFsaXplKCBuICkge1xyXG4gICAgdmFyIHBoayA9IG5ldyBQcm9wZXJ0eWhrKCk7XHJcblxyXG5cclxuICAgIHN1cGVyLmRlc2VyaWFsaXplT2JqKG4sIHBoayApO1xyXG4gICAgcmV0dXJuIHBoaztcclxuICB9XHJcblxyXG5cclxufSAvLyBFbmQgb2YgY2xhc3NcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdG9yZS9wcm9wZXJ0eWhrLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBY0E7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQWFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUF6REE7QUFpRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXZHQTtBQThHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBOUlBO0FBcUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXZMQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQUNBO0FBQ0E7OztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBOENBOzs7Ozs7O0FBNkNBOzs7Ozs7O0FBdUNBOzs7Ozs7Ozs7O0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FBOU1BOzs7OztBQUdBOzs7OztBQUlBOzs7OztBQUNBOzs7OztBQUNBOztBQXdNQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
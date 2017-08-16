webpackHotUpdate(0,{

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.propertys = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;\n\nvar _mobx = __webpack_require__(274);\n\nvar _firebaseStore = __webpack_require__(769);\n\nvar _propertyhk = __webpack_require__(772);\n\nvar _property = __webpack_require__(773);\n\nvar _mobxStore = __webpack_require__(275);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _firebase = __webpack_require__(277);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _initDefineProp(target, property, descriptor, context) {\n  if (!descriptor) return;\n  Object.defineProperty(target, property, {\n    enumerable: descriptor.enumerable,\n    configurable: descriptor.configurable,\n    writable: descriptor.writable,\n    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n  });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n//import moment from 'moment'\n\n\n// List of user properties, to be .on\n// propertyViewModel\nvar PropertysViewModel = (_class = function () {\n  // @observable propertys = new Map();\n  //@observable agentPropertys = new Map();\n\n  //@observable matchedPropertys = observable.map({});\n\n  //@observable propertys = map({});\n  //@observable propertys = new Map();\n\n  function PropertysViewModel() {\n    var _this = this;\n\n    _classCallCheck(this, PropertysViewModel);\n\n    _initDefineProp(this, 'propertys', _descriptor, this);\n\n    _initDefineProp(this, 'init', _descriptor2, this);\n\n    this.add = function (name) {\n      var id = _firebaseStore.Fb.app.usersRef.push().key;\n      _this.update(id, name);\n    };\n\n    this.update = function (id, name) {\n      _firebaseStore.Fb.app.usersRef.update(_defineProperty({}, id, { name: name }));\n    };\n\n    this.del = function (id) {\n      _firebaseStore.Fb.app.usersRef.child(id).remove();\n      _firebaseStore.Fb.propertys.child(id).remove();\n      //this.propertys.delete( id );\n    };\n\n    _initDefineProp(this, 'clear', _descriptor3, this);\n\n    var that = this;\n  }\n\n  _createClass(PropertysViewModel, [{\n    key: 'json',\n    get: function get() {\n      console.log('json', this.propertys);\n      return (0, _mobx.toJS)(this.propertys);\n    }\n\n    // init propertysViewModel, for mobx,\n    // can't be used inside constructor, otherwise error\n    // when app start will call an empty constructor\n    // End of if null\n\n    //}\n\n    /**\r\n     * @compareTo is name of variable e.g. name, price, location\r\n     * @valueTo   is value equal to.  e.g. 'shatin'\r\n     * return\r\n     */\n    //   getMatchProperty = (id, compareTo, valueTo ) => {\n    //     var that = this;\n    //     console.log('match')\n    //\n    //     //this.writeNewPost( 1233, 'gordon', 'picture', 'title', 'body')\n    //\n    //     // Handle match propertys\n    //      Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_added\", function(snap) {\n    //\n    //           Fb.app.matchedPropertysRef.child( snap.key ).set( snap.val() )\n    // //          Fb.app.propertysRef.update( { snap.key : { } })\n    //           that.matchedPropertys.set( snap.key, snap.val() );\n    //           console.log('matchProperty.size', that.matchedPropertys.size)\n    //      });\n    //\n    //      Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_removed\", function(snap) {\n    //\n    //          that.matchedPropertys.delete( snap.key );\n    //          console.log('matchProperty.size', that.matchedPropertys.size)\n    //      });\n    //\n    //\n    //   }\n\n  }]);\n\n  return PropertysViewModel;\n}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'propertys', [_mobx.observable], {\n  enumerable: true,\n  initializer: function initializer() {\n    return _mobx.observable.map({});\n  }\n}), _applyDecoratedDescriptor(_class.prototype, 'json', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'json'), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'init', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this2 = this;\n\n    return function () {\n      var that = _this2;\n      // Handle Child_added\n      //if ( Fb.app.propertysRef !== undefined ) {\n      _firebaseStore.Fb.app.usersRef.on('child_added', function (snapshot) {\n\n        //console.log( \"fire\", snapshot.val() )\n        // var p = new Propertyhk();\n        //\n        // // restore can be imppletemt  deserialize\n        // p.restore( snapshot.val() )\n        //console.log( 'p', p)\n        var p = _propertyhk.Propertyhk.deserialize(snapshot.val());\n        console.log('p', p);\n\n        // p.buildMatchProperty( snapshot.key, p.typeFor, p.location);\n        p.buildMatchProperty(snapshot.key, p.typeFor, p.nameOfBuilding);\n\n        // Matching agent's response only\n        p.buildResponseProperty(snapshot.key, p.typeFor, p.location);\n\n        // p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');\n\n        console.log('child_add - psvm.matchedPropertys.size', p.matchedPropertys.size);\n        that.propertys.set(snapshot.key, p);\n      });\n\n      _firebaseStore.Fb.app.usersRef.on('child_changed', function (snapshot) {\n\n        // Get an element with all functions, propertys\n        // Recreate a new properts { ... }\n        // otherwise propertys.responsedPropertys = undefined error\n\n        //var p = Propertyhk.deserialize( snapshot.val() )\n        // p.buildMatchProperty( snapshot.key, p.typeFor, p.nameOfBuilding);\n\n        //                 var p = that.propertys.get( snapshot.key )\n        // that.propertys.delete( snapshot.key );\n        //                 that.propertys.set( snapshot.key, { ...p, ...snapshot.val() });\n        // debugger\n        // that.propertys.delete( snapshot.key );\n        // console.log( 'fb update id', snapshot.key )\n\n        // Get the current copy of property\n        var p = that.propertys.get(snapshot.key);\n        // keep all the mobx computed function into p, copy the value only\n        //p.restore( snapshot.val() );\n        that.propertys.set(snapshot.key, p);\n        //that.propertys.get( snapshot.key ).nameOfBuilding = 'MOS0002'\n\n        console.log('property.nameOfBuilding', that.propertys.get(snapshot.key));\n        //console.log('child_changed snapshot.val() ',\n      });\n\n      // Handle child_removed\n      _firebaseStore.Fb.app.usersRef.on('child_removed', function (snapshot) {\n        that.propertys.delete(snapshot.key);\n        // console.log('that.propertys.size', that.propertys.size)\n      });\n\n      /**\r\n       * allocate agent's property public for display\r\n       */\n      //  Fb.agentPropertys.on('child_added', (snapshot) => {\n      //\n      //          //console.log( \"fire\", snapshot.val() )\n      //          var p = new Propertyhk();\n      //\n      //          // restore can be imppletemt  deserialize\n      //          p.restore( snapshot.val() )\n      //          //console.log( 'p', p)\n      //\n      //          p.buildResponseProperty( snapshot.key, p.typeFor, p.location);\n      //\n      //          console.log( 'child_add - psvm.matchedPropertys.size', p.responsedPropertys.size );\n      //          that.agentPropertys.set( snapshot.key, p );\n      //  });\n      //\n      // // Handle child_removed\n      // Fb.agentPropertys.on('child_removed', (snapshot) => {\n      //              that.agentPropertys.delete( snapshot.key );\n      //              // console.log('that.propertys.size', that.propertys.size)\n      // });\n    };\n  }\n}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'clear', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this3 = this;\n\n    return function () {\n      _this3.propertys.clear();\n      // May not need\n      //this.agentPropertys.clear();\n    };\n  }\n})), _class);\n\n\nvar propertys = new PropertysViewModel();\nexports.propertys = propertys;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzY4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9wcm9wZXJ0eXNWaWV3TW9kZWwuanM/YzQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29ic2VydmFibGUsIGNvbXB1dGVkLCBhY3Rpb259IGZyb20gJ21vYngnO1xyXG5pbXBvcnQge0ZifSBmcm9tICdmaXJlYmFzZS1zdG9yZSc7XHJcbmltcG9ydCB7dG9KU30gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCB7UHJvcGVydHloa30gZnJvbSAncHJvcGVydHloaydcclxuaW1wb3J0IHtQcm9wZXJ0eX0gZnJvbSAncHJvcGVydHknXHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuLy9pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcblxyXG4vLyBMaXN0IG9mIHVzZXIgcHJvcGVydGllcywgdG8gYmUgLm9uXHJcbi8vIHByb3BlcnR5Vmlld01vZGVsXHJcbmNsYXNzIFByb3BlcnR5c1ZpZXdNb2RlbCB7XHJcblxyXG4vLyAgQG9ic2VydmFibGUgcHJvcGVydHlzID0gb2JzZXJ2YWJsZS5tYXAoe30pO1xyXG4gIEBvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICAvLyBAb2JzZXJ2YWJsZSBwcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcbiAgLy9Ab2JzZXJ2YWJsZSBhZ2VudFByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgLy9Ab2JzZXJ2YWJsZSBtYXRjaGVkUHJvcGVydHlzID0gb2JzZXJ2YWJsZS5tYXAoe30pO1xyXG5cclxuICAvL0BvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG1hcCh7fSk7XHJcbiAgLy9Ab2JzZXJ2YWJsZSBwcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgIHZhciB0aGF0ID0gdGhpcztcclxuICB9XHJcblxyXG4gIEBjb21wdXRlZCBnZXQganNvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdqc29uJywgdGhpcy5wcm9wZXJ0eXMpXHJcbiAgICByZXR1cm4gdG9KUyh0aGlzLnByb3BlcnR5cyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gaW5pdCBwcm9wZXJ0eXNWaWV3TW9kZWwsIGZvciBtb2J4LFxyXG4gIC8vIGNhbid0IGJlIHVzZWQgaW5zaWRlIGNvbnN0cnVjdG9yLCBvdGhlcndpc2UgZXJyb3JcclxuICAvLyB3aGVuIGFwcCBzdGFydCB3aWxsIGNhbGwgYW4gZW1wdHkgY29uc3RydWN0b3JcclxuICBAYWN0aW9uXHJcbiAgaW5pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgLy8gSGFuZGxlIENoaWxkX2FkZGVkXHJcbiAgICAvL2lmICggRmIuYXBwLnByb3BlcnR5c1JlZiAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgRmIuYXBwLnVzZXJzUmVmLm9uKCdjaGlsZF9hZGRlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggXCJmaXJlXCIsIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgLy8gdmFyIHAgPSBuZXcgUHJvcGVydHloaygpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAvLyByZXN0b3JlIGNhbiBiZSBpbXBwbGV0ZW10ICBkZXNlcmlhbGl6ZVxyXG4gICAgICAgICAgICAvLyBwLnJlc3RvcmUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggJ3AnLCBwKVxyXG4gICAgICAgICAgICB2YXIgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdwJywgcClcclxuXHJcbiAgICAgICAgICAgIC8vIHAuYnVpbGRNYXRjaFByb3BlcnR5KCBzbmFwc2hvdC5rZXksIHAudHlwZUZvciwgcC5sb2NhdGlvbik7XHJcbiAgICAgICAgICAgIHAuYnVpbGRNYXRjaFByb3BlcnR5KCBzbmFwc2hvdC5rZXksIHAudHlwZUZvciwgcC5uYW1lT2ZCdWlsZGluZyk7XHJcblxyXG4gICAgICAgICAgICAvLyBNYXRjaGluZyBhZ2VudCdzIHJlc3BvbnNlIG9ubHlcclxuICAgICAgICAgICAgcC5idWlsZFJlc3BvbnNlUHJvcGVydHkoIHNuYXBzaG90LmtleSwgcC50eXBlRm9yLCBwLmxvY2F0aW9uICk7XHJcblxyXG4gICAgICAgICAgICAvLyBwLnJlYWxUaW1lID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ2NoaWxkX2FkZCAtIHBzdm0ubWF0Y2hlZFByb3BlcnR5cy5zaXplJywgcC5tYXRjaGVkUHJvcGVydHlzLnNpemUgKTtcclxuICAgICAgICAgICAgdGhhdC5wcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIEZiLmFwcC51c2Vyc1JlZi5vbignY2hpbGRfY2hhbmdlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAvLyBHZXQgYW4gZWxlbWVudCB3aXRoIGFsbCBmdW5jdGlvbnMsIHByb3BlcnR5c1xyXG4gICAgICAgICAgICAgICAgIC8vIFJlY3JlYXRlIGEgbmV3IHByb3BlcnRzIHsgLi4uIH1cclxuICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgcHJvcGVydHlzLnJlc3BvbnNlZFByb3BlcnR5cyA9IHVuZGVmaW5lZCBlcnJvclxyXG5cclxuICAgICAgICAgICAgICAgICAvL3ZhciBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZSggc25hcHNob3QudmFsKCkgKVxyXG4gICAgICAgICAgICAgICAgIC8vIHAuYnVpbGRNYXRjaFByb3BlcnR5KCBzbmFwc2hvdC5rZXksIHAudHlwZUZvciwgcC5uYW1lT2ZCdWlsZGluZyk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgdmFyIHAgPSB0aGF0LnByb3BlcnR5cy5nZXQoIHNuYXBzaG90LmtleSApXHJcbiAgICAgICAgICAgICAgICAgLy8gdGhhdC5wcm9wZXJ0eXMuZGVsZXRlKCBzbmFwc2hvdC5rZXkgKTtcclxuLy8gICAgICAgICAgICAgICAgIHRoYXQucHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCB7IC4uLnAsIC4uLnNuYXBzaG90LnZhbCgpIH0pO1xyXG4gICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgLy8gdGhhdC5wcm9wZXJ0eXMuZGVsZXRlKCBzbmFwc2hvdC5rZXkgKTtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coICdmYiB1cGRhdGUgaWQnLCBzbmFwc2hvdC5rZXkgKVxyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGNvcHkgb2YgcHJvcGVydHlcclxuICAgICAgICAgICAgICAgICAgdmFyIHAgPSB0aGF0LnByb3BlcnR5cy5nZXQoIHNuYXBzaG90LmtleSApXHJcbiAgICAgICAgICAgICAgICAgIC8vIGtlZXAgYWxsIHRoZSBtb2J4IGNvbXB1dGVkIGZ1bmN0aW9uIGludG8gcCwgY29weSB0aGUgdmFsdWUgb25seVxyXG4gICAgICAgICAgICAgICAgICAvL3AucmVzdG9yZSggc25hcHNob3QudmFsKCkgKTtcclxuICAgICAgICAgICAgICAgICAgdGhhdC5wcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKVxyXG4gICAgICAgICAgICAgICAgICAvL3RoYXQucHJvcGVydHlzLmdldCggc25hcHNob3Qua2V5ICkubmFtZU9mQnVpbGRpbmcgPSAnTU9TMDAwMidcclxuXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAncHJvcGVydHkubmFtZU9mQnVpbGRpbmcnLCB0aGF0LnByb3BlcnR5cy5nZXQoIHNuYXBzaG90LmtleSApICk7XHJcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NoaWxkX2NoYW5nZWQgc25hcHNob3QudmFsKCkgJyxcclxuICAgIH0pO1xyXG5cclxuICAgLy8gSGFuZGxlIGNoaWxkX3JlbW92ZWRcclxuICAgRmIuYXBwLnVzZXJzUmVmLm9uKCdjaGlsZF9yZW1vdmVkJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnByb3BlcnR5cy5kZWxldGUoIHNuYXBzaG90LmtleSApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoYXQucHJvcGVydHlzLnNpemUnLCB0aGF0LnByb3BlcnR5cy5zaXplKVxyXG4gICB9KTtcclxuXHJcbiAgIC8qKlxyXG4gICAgKiBhbGxvY2F0ZSBhZ2VudCdzIHByb3BlcnR5IHB1YmxpYyBmb3IgZGlzcGxheVxyXG4gICAgKi9cclxuICAvLyAgRmIuYWdlbnRQcm9wZXJ0eXMub24oJ2NoaWxkX2FkZGVkJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgLy9cclxuICAvLyAgICAgICAgICAvL2NvbnNvbGUubG9nKCBcImZpcmVcIiwgc25hcHNob3QudmFsKCkgKVxyXG4gIC8vICAgICAgICAgIHZhciBwID0gbmV3IFByb3BlcnR5aGsoKTtcclxuICAvL1xyXG4gIC8vICAgICAgICAgIC8vIHJlc3RvcmUgY2FuIGJlIGltcHBsZXRlbXQgIGRlc2VyaWFsaXplXHJcbiAgLy8gICAgICAgICAgcC5yZXN0b3JlKCBzbmFwc2hvdC52YWwoKSApXHJcbiAgLy8gICAgICAgICAgLy9jb25zb2xlLmxvZyggJ3AnLCBwKVxyXG4gIC8vXHJcbiAgLy8gICAgICAgICAgcC5idWlsZFJlc3BvbnNlUHJvcGVydHkoIHNuYXBzaG90LmtleSwgcC50eXBlRm9yLCBwLmxvY2F0aW9uKTtcclxuICAvL1xyXG4gIC8vICAgICAgICAgIGNvbnNvbGUubG9nKCAnY2hpbGRfYWRkIC0gcHN2bS5tYXRjaGVkUHJvcGVydHlzLnNpemUnLCBwLnJlc3BvbnNlZFByb3BlcnR5cy5zaXplICk7XHJcbiAgLy8gICAgICAgICAgdGhhdC5hZ2VudFByb3BlcnR5cy5zZXQoIHNuYXBzaG90LmtleSwgcCApO1xyXG4gIC8vICB9KTtcclxuICAvL1xyXG4gIC8vIC8vIEhhbmRsZSBjaGlsZF9yZW1vdmVkXHJcbiAgLy8gRmIuYWdlbnRQcm9wZXJ0eXMub24oJ2NoaWxkX3JlbW92ZWQnLCAoc25hcHNob3QpID0+IHtcclxuICAvLyAgICAgICAgICAgICAgdGhhdC5hZ2VudFByb3BlcnR5cy5kZWxldGUoIHNuYXBzaG90LmtleSApO1xyXG4gIC8vICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhhdC5wcm9wZXJ0eXMuc2l6ZScsIHRoYXQucHJvcGVydHlzLnNpemUpXHJcbiAgLy8gfSk7XHJcblxyXG4gfSAgLy8gRW5kIG9mIGlmIG51bGxcclxuXHJcbiAgLy99XHJcblxyXG4gIGFkZCA9IChuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IEZiLmFwcC51c2Vyc1JlZi5wdXNoKCkua2V5O1xyXG4gICAgdGhpcy51cGRhdGUoaWQsIG5hbWUgKTtcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBAY29tcGFyZVRvIGlzIG5hbWUgb2YgdmFyaWFibGUgZS5nLiBuYW1lLCBwcmljZSwgbG9jYXRpb25cclxuICAgKiBAdmFsdWVUbyAgIGlzIHZhbHVlIGVxdWFsIHRvLiAgZS5nLiAnc2hhdGluJ1xyXG4gICAqIHJldHVyblxyXG4gICAqL1xyXG4vLyAgIGdldE1hdGNoUHJvcGVydHkgPSAoaWQsIGNvbXBhcmVUbywgdmFsdWVUbyApID0+IHtcclxuLy8gICAgIHZhciB0aGF0ID0gdGhpcztcclxuLy8gICAgIGNvbnNvbGUubG9nKCdtYXRjaCcpXHJcbi8vXHJcbi8vICAgICAvL3RoaXMud3JpdGVOZXdQb3N0KCAxMjMzLCAnZ29yZG9uJywgJ3BpY3R1cmUnLCAndGl0bGUnLCAnYm9keScpXHJcbi8vXHJcbi8vICAgICAvLyBIYW5kbGUgbWF0Y2ggcHJvcGVydHlzXHJcbi8vICAgICAgRmIuYXBwLnVzZXJzUmVmLm9yZGVyQnlDaGlsZChjb21wYXJlVG8pLmVxdWFsVG8odmFsdWVUbykub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcbi8vXHJcbi8vICAgICAgICAgICBGYi5hcHAubWF0Y2hlZFByb3BlcnR5c1JlZi5jaGlsZCggc25hcC5rZXkgKS5zZXQoIHNuYXAudmFsKCkgKVxyXG4vLyAvLyAgICAgICAgICBGYi5hcHAucHJvcGVydHlzUmVmLnVwZGF0ZSggeyBzbmFwLmtleSA6IHsgfSB9KVxyXG4vLyAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcC5rZXksIHNuYXAudmFsKCkgKTtcclxuLy8gICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaFByb3BlcnR5LnNpemUnLCB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSlcclxuLy8gICAgICB9KTtcclxuLy9cclxuLy8gICAgICBGYi5hcHAudXNlcnNSZWYub3JkZXJCeUNoaWxkKGNvbXBhcmVUbykuZXF1YWxUbyh2YWx1ZVRvKS5vbihcImNoaWxkX3JlbW92ZWRcIiwgZnVuY3Rpb24oc25hcCkge1xyXG4vL1xyXG4vLyAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuZGVsZXRlKCBzbmFwLmtleSApO1xyXG4vLyAgICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hQcm9wZXJ0eS5zaXplJywgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemUpXHJcbi8vICAgICAgfSk7XHJcbi8vXHJcbi8vXHJcbi8vICAgfVxyXG5cclxuICB1cGRhdGUgPSAoaWQsIG5hbWUpID0+IHtcclxuICAgICBGYi5hcHAudXNlcnNSZWYudXBkYXRlKHtbaWRdOiB7IG5hbWUgfSB9ICApXHJcbiAgfTtcclxuXHJcbiAgZGVsID0gKGlkKSA9PiB7XHJcbiAgICBGYi5hcHAudXNlcnNSZWYuY2hpbGQoaWQpLnJlbW92ZSgpO1xyXG4gICAgRmIucHJvcGVydHlzLmNoaWxkKGlkKS5yZW1vdmUoKTtcclxuICAgIC8vdGhpcy5wcm9wZXJ0eXMuZGVsZXRlKCBpZCApO1xyXG4gIH07XHJcblxyXG4gIEBhY3Rpb25cclxuICBjbGVhciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcGVydHlzLmNsZWFyKCk7XHJcbiAgICAvLyBNYXkgbm90IG5lZWRcclxuICAgIC8vdGhpcy5hZ2VudFByb3BlcnR5cy5jbGVhcigpO1xyXG4gIH07XHJcblxyXG5cclxufVxyXG5cclxuY29uc3QgcHJvcGVydHlzID0gbmV3IFByb3BlcnR5c1ZpZXdNb2RlbCgpO1xyXG5leHBvcnQge3Byb3BlcnR5c307XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RvcmUvcHJvcGVydHlzVmlld01vZGVsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBdUdBO0FBQ0E7QUFDQTtBQUNBO0FBMUdBO0FBeUlBO0FBQ0E7QUFDQTtBQTNJQTtBQTZJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakpBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFzRkE7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFoSkE7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
webpackHotUpdate(0,{

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.propertys = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;\n\nvar _mobx = __webpack_require__(274);\n\nvar _firebaseStore = __webpack_require__(769);\n\nvar _propertyhk = __webpack_require__(772);\n\nvar _property = __webpack_require__(773);\n\nvar _mobxStore = __webpack_require__(275);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _firebase = __webpack_require__(277);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _initDefineProp(target, property, descriptor, context) {\n  if (!descriptor) return;\n  Object.defineProperty(target, property, {\n    enumerable: descriptor.enumerable,\n    configurable: descriptor.configurable,\n    writable: descriptor.writable,\n    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n  });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n//import moment from 'moment'\n\n\n// List of user properties, to be .on\n// propertyViewModel\nvar PropertysViewModel = (_class = function () {\n  // @observable propertys = new Map();\n  //@observable agentPropertys = new Map();\n\n  //@observable matchedPropertys = observable.map({});\n\n  //@observable propertys = map({});\n  //@observable propertys = new Map();\n\n  function PropertysViewModel() {\n    var _this = this;\n\n    _classCallCheck(this, PropertysViewModel);\n\n    _initDefineProp(this, 'propertys', _descriptor, this);\n\n    _initDefineProp(this, 'init', _descriptor2, this);\n\n    this.add = function (name) {\n      var id = _firebaseStore.Fb.app.usersRef.push().key;\n      _this.update(id, name);\n    };\n\n    this.update = function (id, name) {\n      _firebaseStore.Fb.app.usersRef.update(_defineProperty({}, id, { name: name }));\n    };\n\n    this.del = function (id) {\n      _firebaseStore.Fb.app.usersRef.child(id).remove();\n      _firebaseStore.Fb.propertys.child(id).remove();\n      //this.propertys.delete( id );\n    };\n\n    _initDefineProp(this, 'clear', _descriptor3, this);\n\n    var that = this;\n  }\n\n  _createClass(PropertysViewModel, [{\n    key: 'json',\n    get: function get() {\n      console.log('json', this.propertys);\n      return (0, _mobx.toJS)(this.propertys);\n    }\n\n    // init propertysViewModel, for mobx,\n    // can't be used inside constructor, otherwise error\n    // when app start will call an empty constructor\n    // End of if null\n\n    //}\n\n    /**\r\n     * @compareTo is name of variable e.g. name, price, location\r\n     * @valueTo   is value equal to.  e.g. 'shatin'\r\n     * return\r\n     */\n    //   getMatchProperty = (id, compareTo, valueTo ) => {\n    //     var that = this;\n    //     console.log('match')\n    //\n    //     //this.writeNewPost( 1233, 'gordon', 'picture', 'title', 'body')\n    //\n    //     // Handle match propertys\n    //      Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_added\", function(snap) {\n    //\n    //           Fb.app.matchedPropertysRef.child( snap.key ).set( snap.val() )\n    // //          Fb.app.propertysRef.update( { snap.key : { } })\n    //           that.matchedPropertys.set( snap.key, snap.val() );\n    //           console.log('matchProperty.size', that.matchedPropertys.size)\n    //      });\n    //\n    //      Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_removed\", function(snap) {\n    //\n    //          that.matchedPropertys.delete( snap.key );\n    //          console.log('matchProperty.size', that.matchedPropertys.size)\n    //      });\n    //\n    //\n    //   }\n\n  }]);\n\n  return PropertysViewModel;\n}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'propertys', [_mobx.observable], {\n  enumerable: true,\n  initializer: function initializer() {\n    return _mobx.observable.map({});\n  }\n}), _applyDecoratedDescriptor(_class.prototype, 'json', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'json'), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'init', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this2 = this;\n\n    return function () {\n      var that = _this2;\n      // Handle Child_added\n      //if ( Fb.app.propertysRef !== undefined ) {\n      _firebaseStore.Fb.app.usersRef.on('child_added', function (snapshot) {\n\n        //console.log( \"fire\", snapshot.val() )\n        // var p = new Propertyhk();\n        //\n        // // restore can be imppletemt  deserialize\n        // p.restore( snapshot.val() )\n        //console.log( 'p', p)\n        var p = _propertyhk.Propertyhk.deserialize(snapshot.val());\n        console.log('p', p);\n\n        // p.buildMatchProperty( snapshot.key, p.typeFor, p.location);\n        p.buildMatchProperty(snapshot.key, p.typeFor, p.nameOfBuilding);\n\n        // Matching agent's response only\n        p.buildResponseProperty(snapshot.key, p.typeFor, p.location);\n\n        // p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');\n\n        console.log('child_add - psvm.matchedPropertys.size', p.matchedPropertys.size);\n        that.propertys.set(snapshot.key, p);\n      });\n\n      _firebaseStore.Fb.app.usersRef.on('child_changed', function (snapshot) {\n\n        // Get an element with all functions, propertys\n        // Recreate a new properts { ... }\n        // otherwise propertys.responsedPropertys = undefined error\n\n        //var p = Propertyhk.deserialize( snapshot.val() )\n        // p.buildMatchProperty( snapshot.key, p.typeFor, p.nameOfBuilding);\n\n        //                 var p = that.propertys.get( snapshot.key )\n        // that.propertys.delete( snapshot.key );\n        //                 that.propertys.set( snapshot.key, { ...p, ...snapshot.val() });\n        // debugger\n        // that.propertys.delete( snapshot.key );\n        // console.log( 'fb update id', snapshot.key )\n        var p = that.propertys.get(snapshot.key);\n        p.restore(snapshot.val());\n        // p2.nameOfBuilding = 'MOS0005'\n        //console.log( 'p2', p2)\n        //var p = p2.deserialize( snapshot.val() )\n        // Gordon tobe fix!\n\n        // p.matchedPropertys.replace( dd )\n        //p.matchedPropertys = p2.matchedPropertys.values();\n        //p.responsedPropertys.replace( p2.responsedPropertys.values() )\n        //p.responsedProperty = p2.responsedPropertys.values();\n\n        //debugger\n        // that.propertys.set( snapshot.key, { ...(p.serialize()), ...p2} )\n        //that.propertys.delete( snapshot.key )\n        //const p2 = Propertyhk.deserialize( snapshot.val() )\n\n\n        //console.log( 'new obj', p  )\n        that.propertys.set(snapshot.key, p);\n        //that.propertys.get( snapshot.key ).nameOfBuilding = 'MOS0002'\n\n        console.log('property.nameOfBuilding', that.propertys.get(snapshot.key));\n        //console.log('child_changed snapshot.val() ',\n      });\n\n      // Handle child_removed\n      _firebaseStore.Fb.app.usersRef.on('child_removed', function (snapshot) {\n        that.propertys.delete(snapshot.key);\n        // console.log('that.propertys.size', that.propertys.size)\n      });\n\n      /**\r\n       * allocate agent's property public for display\r\n       */\n      //  Fb.agentPropertys.on('child_added', (snapshot) => {\n      //\n      //          //console.log( \"fire\", snapshot.val() )\n      //          var p = new Propertyhk();\n      //\n      //          // restore can be imppletemt  deserialize\n      //          p.restore( snapshot.val() )\n      //          //console.log( 'p', p)\n      //\n      //          p.buildResponseProperty( snapshot.key, p.typeFor, p.location);\n      //\n      //          console.log( 'child_add - psvm.matchedPropertys.size', p.responsedPropertys.size );\n      //          that.agentPropertys.set( snapshot.key, p );\n      //  });\n      //\n      // // Handle child_removed\n      // Fb.agentPropertys.on('child_removed', (snapshot) => {\n      //              that.agentPropertys.delete( snapshot.key );\n      //              // console.log('that.propertys.size', that.propertys.size)\n      // });\n    };\n  }\n}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'clear', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this3 = this;\n\n    return function () {\n      _this3.propertys.clear();\n      // May not need\n      //this.agentPropertys.clear();\n    };\n  }\n})), _class);\n\n\nvar propertys = new PropertysViewModel();\nexports.propertys = propertys;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzY4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9wcm9wZXJ0eXNWaWV3TW9kZWwuanM/YzQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29ic2VydmFibGUsIGNvbXB1dGVkLCBhY3Rpb259IGZyb20gJ21vYngnO1xyXG5pbXBvcnQge0ZifSBmcm9tICdmaXJlYmFzZS1zdG9yZSc7XHJcbmltcG9ydCB7dG9KU30gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCB7UHJvcGVydHloa30gZnJvbSAncHJvcGVydHloaydcclxuaW1wb3J0IHtQcm9wZXJ0eX0gZnJvbSAncHJvcGVydHknXHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuLy9pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcblxyXG4vLyBMaXN0IG9mIHVzZXIgcHJvcGVydGllcywgdG8gYmUgLm9uXHJcbi8vIHByb3BlcnR5Vmlld01vZGVsXHJcbmNsYXNzIFByb3BlcnR5c1ZpZXdNb2RlbCB7XHJcblxyXG4vLyAgQG9ic2VydmFibGUgcHJvcGVydHlzID0gb2JzZXJ2YWJsZS5tYXAoe30pO1xyXG4gIEBvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICAvLyBAb2JzZXJ2YWJsZSBwcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcbiAgLy9Ab2JzZXJ2YWJsZSBhZ2VudFByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgLy9Ab2JzZXJ2YWJsZSBtYXRjaGVkUHJvcGVydHlzID0gb2JzZXJ2YWJsZS5tYXAoe30pO1xyXG5cclxuICAvL0BvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG1hcCh7fSk7XHJcbiAgLy9Ab2JzZXJ2YWJsZSBwcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgIHZhciB0aGF0ID0gdGhpcztcclxuICB9XHJcblxyXG4gIEBjb21wdXRlZCBnZXQganNvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdqc29uJywgdGhpcy5wcm9wZXJ0eXMpXHJcbiAgICByZXR1cm4gdG9KUyh0aGlzLnByb3BlcnR5cyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gaW5pdCBwcm9wZXJ0eXNWaWV3TW9kZWwsIGZvciBtb2J4LFxyXG4gIC8vIGNhbid0IGJlIHVzZWQgaW5zaWRlIGNvbnN0cnVjdG9yLCBvdGhlcndpc2UgZXJyb3JcclxuICAvLyB3aGVuIGFwcCBzdGFydCB3aWxsIGNhbGwgYW4gZW1wdHkgY29uc3RydWN0b3JcclxuICBAYWN0aW9uXHJcbiAgaW5pdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgLy8gSGFuZGxlIENoaWxkX2FkZGVkXHJcbiAgICAvL2lmICggRmIuYXBwLnByb3BlcnR5c1JlZiAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgRmIuYXBwLnVzZXJzUmVmLm9uKCdjaGlsZF9hZGRlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggXCJmaXJlXCIsIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgLy8gdmFyIHAgPSBuZXcgUHJvcGVydHloaygpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyAvLyByZXN0b3JlIGNhbiBiZSBpbXBwbGV0ZW10ICBkZXNlcmlhbGl6ZVxyXG4gICAgICAgICAgICAvLyBwLnJlc3RvcmUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggJ3AnLCBwKVxyXG4gICAgICAgICAgICB2YXIgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdwJywgcClcclxuXHJcbiAgICAgICAgICAgIC8vIHAuYnVpbGRNYXRjaFByb3BlcnR5KCBzbmFwc2hvdC5rZXksIHAudHlwZUZvciwgcC5sb2NhdGlvbik7XHJcbiAgICAgICAgICAgIHAuYnVpbGRNYXRjaFByb3BlcnR5KCBzbmFwc2hvdC5rZXksIHAudHlwZUZvciwgcC5uYW1lT2ZCdWlsZGluZyk7XHJcblxyXG4gICAgICAgICAgICAvLyBNYXRjaGluZyBhZ2VudCdzIHJlc3BvbnNlIG9ubHlcclxuICAgICAgICAgICAgcC5idWlsZFJlc3BvbnNlUHJvcGVydHkoIHNuYXBzaG90LmtleSwgcC50eXBlRm9yLCBwLmxvY2F0aW9uICk7XHJcblxyXG4gICAgICAgICAgICAvLyBwLnJlYWxUaW1lID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ2NoaWxkX2FkZCAtIHBzdm0ubWF0Y2hlZFByb3BlcnR5cy5zaXplJywgcC5tYXRjaGVkUHJvcGVydHlzLnNpemUgKTtcclxuICAgICAgICAgICAgdGhhdC5wcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIEZiLmFwcC51c2Vyc1JlZi5vbignY2hpbGRfY2hhbmdlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAvLyBHZXQgYW4gZWxlbWVudCB3aXRoIGFsbCBmdW5jdGlvbnMsIHByb3BlcnR5c1xyXG4gICAgICAgICAgICAgICAgIC8vIFJlY3JlYXRlIGEgbmV3IHByb3BlcnRzIHsgLi4uIH1cclxuICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgcHJvcGVydHlzLnJlc3BvbnNlZFByb3BlcnR5cyA9IHVuZGVmaW5lZCBlcnJvclxyXG5cclxuICAgICAgICAgICAgICAgICAvL3ZhciBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZSggc25hcHNob3QudmFsKCkgKVxyXG4gICAgICAgICAgICAgICAgIC8vIHAuYnVpbGRNYXRjaFByb3BlcnR5KCBzbmFwc2hvdC5rZXksIHAudHlwZUZvciwgcC5uYW1lT2ZCdWlsZGluZyk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgdmFyIHAgPSB0aGF0LnByb3BlcnR5cy5nZXQoIHNuYXBzaG90LmtleSApXHJcbiAgICAgICAgICAgICAgICAgLy8gdGhhdC5wcm9wZXJ0eXMuZGVsZXRlKCBzbmFwc2hvdC5rZXkgKTtcclxuLy8gICAgICAgICAgICAgICAgIHRoYXQucHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCB7IC4uLnAsIC4uLnNuYXBzaG90LnZhbCgpIH0pO1xyXG4gICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgLy8gdGhhdC5wcm9wZXJ0eXMuZGVsZXRlKCBzbmFwc2hvdC5rZXkgKTtcclxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coICdmYiB1cGRhdGUgaWQnLCBzbmFwc2hvdC5rZXkgKVxyXG4gICAgICAgICAgICAgICAgICB2YXIgcCA9IHRoYXQucHJvcGVydHlzLmdldCggc25hcHNob3Qua2V5IClcclxuICAgICAgICAgICAgICAgICAgcC5yZXN0b3JlKCBzbmFwc2hvdC52YWwoKSApO1xyXG4gICAgICAgICAgICAgICAgICAvLyBwMi5uYW1lT2ZCdWlsZGluZyA9ICdNT1MwMDA1J1xyXG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCAncDInLCBwMilcclxuICAgICAgICAgICAgICAgICAgLy92YXIgcCA9IHAyLmRlc2VyaWFsaXplKCBzbmFwc2hvdC52YWwoKSApXHJcbiAgICAgICAgICAgICAgICAgIC8vIEdvcmRvbiB0b2JlIGZpeCFcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIHAubWF0Y2hlZFByb3BlcnR5cy5yZXBsYWNlKCBkZCApXHJcbiAgICAgICAgICAgICAgICAgIC8vcC5tYXRjaGVkUHJvcGVydHlzID0gcDIubWF0Y2hlZFByb3BlcnR5cy52YWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgLy9wLnJlc3BvbnNlZFByb3BlcnR5cy5yZXBsYWNlKCBwMi5yZXNwb25zZWRQcm9wZXJ0eXMudmFsdWVzKCkgKVxyXG4gICAgICAgICAgICAgICAgICAvL3AucmVzcG9uc2VkUHJvcGVydHkgPSBwMi5yZXNwb25zZWRQcm9wZXJ0eXMudmFsdWVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAvL2RlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgIC8vIHRoYXQucHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCB7IC4uLihwLnNlcmlhbGl6ZSgpKSwgLi4ucDJ9IClcclxuICAgICAgICAgICAgICAgICAgLy90aGF0LnByb3BlcnR5cy5kZWxldGUoIHNuYXBzaG90LmtleSApXHJcbiAgICAgICAgICAgICAgICAgIC8vY29uc3QgcDIgPSBQcm9wZXJ0eWhrLmRlc2VyaWFsaXplKCBzbmFwc2hvdC52YWwoKSApXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggJ25ldyBvYmonLCBwICApXHJcbiAgICAgICAgICAgICAgICAgIHRoYXQucHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCBwIClcclxuICAgICAgICAgICAgICAgICAgLy90aGF0LnByb3BlcnR5cy5nZXQoIHNuYXBzaG90LmtleSApLm5hbWVPZkJ1aWxkaW5nID0gJ01PUzAwMDInXHJcblxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ3Byb3BlcnR5Lm5hbWVPZkJ1aWxkaW5nJywgdGhhdC5wcm9wZXJ0eXMuZ2V0KCBzbmFwc2hvdC5rZXkgKSApO1xyXG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjaGlsZF9jaGFuZ2VkIHNuYXBzaG90LnZhbCgpICcsXHJcbiAgICB9KTtcclxuXHJcbiAgIC8vIEhhbmRsZSBjaGlsZF9yZW1vdmVkXHJcbiAgIEZiLmFwcC51c2Vyc1JlZi5vbignY2hpbGRfcmVtb3ZlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5wcm9wZXJ0eXMuZGVsZXRlKCBzbmFwc2hvdC5rZXkgKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGF0LnByb3BlcnR5cy5zaXplJywgdGhhdC5wcm9wZXJ0eXMuc2l6ZSlcclxuICAgfSk7XHJcblxyXG4gICAvKipcclxuICAgICogYWxsb2NhdGUgYWdlbnQncyBwcm9wZXJ0eSBwdWJsaWMgZm9yIGRpc3BsYXlcclxuICAgICovXHJcbiAgLy8gIEZiLmFnZW50UHJvcGVydHlzLm9uKCdjaGlsZF9hZGRlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG4gIC8vXHJcbiAgLy8gICAgICAgICAgLy9jb25zb2xlLmxvZyggXCJmaXJlXCIsIHNuYXBzaG90LnZhbCgpIClcclxuICAvLyAgICAgICAgICB2YXIgcCA9IG5ldyBQcm9wZXJ0eWhrKCk7XHJcbiAgLy9cclxuICAvLyAgICAgICAgICAvLyByZXN0b3JlIGNhbiBiZSBpbXBwbGV0ZW10ICBkZXNlcmlhbGl6ZVxyXG4gIC8vICAgICAgICAgIHAucmVzdG9yZSggc25hcHNob3QudmFsKCkgKVxyXG4gIC8vICAgICAgICAgIC8vY29uc29sZS5sb2coICdwJywgcClcclxuICAvL1xyXG4gIC8vICAgICAgICAgIHAuYnVpbGRSZXNwb25zZVByb3BlcnR5KCBzbmFwc2hvdC5rZXksIHAudHlwZUZvciwgcC5sb2NhdGlvbik7XHJcbiAgLy9cclxuICAvLyAgICAgICAgICBjb25zb2xlLmxvZyggJ2NoaWxkX2FkZCAtIHBzdm0ubWF0Y2hlZFByb3BlcnR5cy5zaXplJywgcC5yZXNwb25zZWRQcm9wZXJ0eXMuc2l6ZSApO1xyXG4gIC8vICAgICAgICAgIHRoYXQuYWdlbnRQcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKTtcclxuICAvLyAgfSk7XHJcbiAgLy9cclxuICAvLyAvLyBIYW5kbGUgY2hpbGRfcmVtb3ZlZFxyXG4gIC8vIEZiLmFnZW50UHJvcGVydHlzLm9uKCdjaGlsZF9yZW1vdmVkJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgLy8gICAgICAgICAgICAgIHRoYXQuYWdlbnRQcm9wZXJ0eXMuZGVsZXRlKCBzbmFwc2hvdC5rZXkgKTtcclxuICAvLyAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoYXQucHJvcGVydHlzLnNpemUnLCB0aGF0LnByb3BlcnR5cy5zaXplKVxyXG4gIC8vIH0pO1xyXG5cclxuIH0gIC8vIEVuZCBvZiBpZiBudWxsXHJcblxyXG4gIC8vfVxyXG5cclxuICBhZGQgPSAobmFtZSkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBGYi5hcHAudXNlcnNSZWYucHVzaCgpLmtleTtcclxuICAgIHRoaXMudXBkYXRlKGlkLCBuYW1lICk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbXBhcmVUbyBpcyBuYW1lIG9mIHZhcmlhYmxlIGUuZy4gbmFtZSwgcHJpY2UsIGxvY2F0aW9uXHJcbiAgICogQHZhbHVlVG8gICBpcyB2YWx1ZSBlcXVhbCB0by4gIGUuZy4gJ3NoYXRpbidcclxuICAgKiByZXR1cm5cclxuICAgKi9cclxuLy8gICBnZXRNYXRjaFByb3BlcnR5ID0gKGlkLCBjb21wYXJlVG8sIHZhbHVlVG8gKSA9PiB7XHJcbi8vICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbi8vICAgICBjb25zb2xlLmxvZygnbWF0Y2gnKVxyXG4vL1xyXG4vLyAgICAgLy90aGlzLndyaXRlTmV3UG9zdCggMTIzMywgJ2dvcmRvbicsICdwaWN0dXJlJywgJ3RpdGxlJywgJ2JvZHknKVxyXG4vL1xyXG4vLyAgICAgLy8gSGFuZGxlIG1hdGNoIHByb3BlcnR5c1xyXG4vLyAgICAgIEZiLmFwcC51c2Vyc1JlZi5vcmRlckJ5Q2hpbGQoY29tcGFyZVRvKS5lcXVhbFRvKHZhbHVlVG8pLm9uKFwiY2hpbGRfYWRkZWRcIiwgZnVuY3Rpb24oc25hcCkge1xyXG4vL1xyXG4vLyAgICAgICAgICAgRmIuYXBwLm1hdGNoZWRQcm9wZXJ0eXNSZWYuY2hpbGQoIHNuYXAua2V5ICkuc2V0KCBzbmFwLnZhbCgpIClcclxuLy8gLy8gICAgICAgICAgRmIuYXBwLnByb3BlcnR5c1JlZi51cGRhdGUoIHsgc25hcC5rZXkgOiB7IH0gfSlcclxuLy8gICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zZXQoIHNuYXAua2V5LCBzbmFwLnZhbCgpICk7XHJcbi8vICAgICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hQcm9wZXJ0eS5zaXplJywgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemUpXHJcbi8vICAgICAgfSk7XHJcbi8vXHJcbi8vICAgICAgRmIuYXBwLnVzZXJzUmVmLm9yZGVyQnlDaGlsZChjb21wYXJlVG8pLmVxdWFsVG8odmFsdWVUbykub24oXCJjaGlsZF9yZW1vdmVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuLy9cclxuLy8gICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLmRlbGV0ZSggc25hcC5rZXkgKTtcclxuLy8gICAgICAgICAgY29uc29sZS5sb2coJ21hdGNoUHJvcGVydHkuc2l6ZScsIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplKVxyXG4vLyAgICAgIH0pO1xyXG4vL1xyXG4vL1xyXG4vLyAgIH1cclxuXHJcbiAgdXBkYXRlID0gKGlkLCBuYW1lKSA9PiB7XHJcbiAgICAgRmIuYXBwLnVzZXJzUmVmLnVwZGF0ZSh7W2lkXTogeyBuYW1lIH0gfSAgKVxyXG4gIH07XHJcblxyXG4gIGRlbCA9IChpZCkgPT4ge1xyXG4gICAgRmIuYXBwLnVzZXJzUmVmLmNoaWxkKGlkKS5yZW1vdmUoKTtcclxuICAgIEZiLnByb3BlcnR5cy5jaGlsZChpZCkucmVtb3ZlKCk7XHJcbiAgICAvL3RoaXMucHJvcGVydHlzLmRlbGV0ZSggaWQgKTtcclxuICB9O1xyXG5cclxuICBAYWN0aW9uXHJcbiAgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BlcnR5cy5jbGVhcigpO1xyXG4gICAgLy8gTWF5IG5vdCBuZWVkXHJcbiAgICAvL3RoaXMuYWdlbnRQcm9wZXJ0eXMuY2xlYXIoKTtcclxuICB9O1xyXG5cclxuXHJcbn1cclxuXHJcbmNvbnN0IHByb3BlcnR5cyA9IG5ldyBQcm9wZXJ0eXNWaWV3TW9kZWwoKTtcclxuZXhwb3J0IHtwcm9wZXJ0eXN9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0b3JlL3Byb3BlcnR5c1ZpZXdNb2RlbC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQXFIQTtBQUNBO0FBQ0E7QUFDQTtBQXhIQTtBQXVKQTtBQUNBO0FBQ0E7QUF6SkE7QUEySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9KQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBb0dBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBOUpBOzs7Ozs7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
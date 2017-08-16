webpackHotUpdate(0,{

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.propertys = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;\n\nvar _mobx = __webpack_require__(274);\n\nvar _firebaseStore = __webpack_require__(769);\n\nvar _propertyhk = __webpack_require__(772);\n\nvar _property = __webpack_require__(773);\n\nvar _mobxStore = __webpack_require__(275);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _firebase = __webpack_require__(277);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _initDefineProp(target, property, descriptor, context) {\n  if (!descriptor) return;\n  Object.defineProperty(target, property, {\n    enumerable: descriptor.enumerable,\n    configurable: descriptor.configurable,\n    writable: descriptor.writable,\n    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n  });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n//import moment from 'moment'\n\n\n// List of user properties, to be .on\n// propertyViewModel\nvar PropertysViewModel = (_class = function () {\n  //@observable agentPropertys = new Map();\n\n  //@observable matchedPropertys = observable.map({});\n\n  //@observable propertys = map({});\n  //@observable propertys = new Map();\n\n  function PropertysViewModel() {\n    var _this = this;\n\n    _classCallCheck(this, PropertysViewModel);\n\n    _initDefineProp(this, 'propertys', _descriptor, this);\n\n    _initDefineProp(this, 'init', _descriptor2, this);\n\n    this.add = function (name) {\n      var id = _firebaseStore.Fb.app.usersRef.push().key;\n      _this.update(id, name);\n    };\n\n    this.update = function (id, name) {\n      _firebaseStore.Fb.app.usersRef.update(_defineProperty({}, id, { name: name }));\n    };\n\n    this.del = function (id) {\n      _firebaseStore.Fb.app.usersRef.child(id).remove();\n      _firebaseStore.Fb.propertys.child(id).remove();\n      //this.propertys.delete( id );\n    };\n\n    _initDefineProp(this, 'clear', _descriptor3, this);\n\n    var that = this;\n  }\n\n  _createClass(PropertysViewModel, [{\n    key: 'json',\n    get: function get() {\n      console.log('json', this.propertys);\n      return (0, _mobx.toJS)(this.propertys);\n    }\n\n    // init propertysViewModel, for mobx,\n    // can't be used inside constructor, otherwise error\n    // when app start will call an empty constructor\n    // End of if null\n\n    //}\n\n    /**\r\n     * @compareTo is name of variable e.g. name, price, location\r\n     * @valueTo   is value equal to.  e.g. 'shatin'\r\n     * return\r\n     */\n    //   getMatchProperty = (id, compareTo, valueTo ) => {\n    //     var that = this;\n    //     console.log('match')\n    //\n    //     //this.writeNewPost( 1233, 'gordon', 'picture', 'title', 'body')\n    //\n    //     // Handle match propertys\n    //      Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_added\", function(snap) {\n    //\n    //           Fb.app.matchedPropertysRef.child( snap.key ).set( snap.val() )\n    // //          Fb.app.propertysRef.update( { snap.key : { } })\n    //           that.matchedPropertys.set( snap.key, snap.val() );\n    //           console.log('matchProperty.size', that.matchedPropertys.size)\n    //      });\n    //\n    //      Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_removed\", function(snap) {\n    //\n    //          that.matchedPropertys.delete( snap.key );\n    //          console.log('matchProperty.size', that.matchedPropertys.size)\n    //      });\n    //\n    //\n    //   }\n\n  }]);\n\n  return PropertysViewModel;\n}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'propertys', [_mobx.observable], {\n  enumerable: true,\n  initializer: function initializer() {\n    return new Map();\n  }\n}), _applyDecoratedDescriptor(_class.prototype, 'json', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'json'), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'init', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this2 = this;\n\n    return function () {\n      var that = _this2;\n      // Handle Child_added\n      //if ( Fb.app.propertysRef !== undefined ) {\n      _firebaseStore.Fb.app.usersRef.on('child_added', function (snapshot) {\n\n        //console.log( \"fire\", snapshot.val() )\n        // var p = new Propertyhk();\n        //\n        // // restore can be imppletemt  deserialize\n        // p.restore( snapshot.val() )\n        //console.log( 'p', p)\n        var p = _propertyhk.Propertyhk.deserialize(snapshot.val());\n        console.log('p', p);\n\n        // p.buildMatchProperty( snapshot.key, p.typeFor, p.location);\n        p.buildMatchProperty(snapshot.key, p.typeFor, p.nameOfBuilding);\n\n        // Matching agent's response only\n        p.buildResponseProperty(snapshot.key, p.typeFor, p.location);\n\n        // p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');\n\n        console.log('child_add - psvm.matchedPropertys.size', p.matchedPropertys.size);\n        that.propertys.set(snapshot.key, p);\n      });\n\n      _firebaseStore.Fb.app.usersRef.on('child_changed', function (snapshot) {\n        // Get an element with all functions, propertys\n        // Recreate a new properts { ... }\n        // otherwise propertys.responsedPropertys = undefined error\n\n        //var p = Propertyhk.deserialize( snapshot.val() )\n        // p.buildMatchProperty( snapshot.key, p.typeFor, p.nameOfBuilding);\n\n        //                 var p = that.propertys.get( snapshot.key )\n        // that.propertys.delete( snapshot.key );\n        //                 that.propertys.set( snapshot.key, { ...p, ...snapshot.val() });\n        // debugger\n        // that.propertys.delete( snapshot.key );\n        console.log('fb update id', snapshot.key);\n        var p2 = that.propertys.get(snapshot.key);\n\n        p2.nameOfBuilding = 'MOS0002';\n        //console.log( 'p2', p2)\n        //var p = p2.deserialize( snapshot.val() )\n        // Gordon tobe fix!\n\n        // p.matchedPropertys.replace( dd )\n        //p.matchedPropertys = p2.matchedPropertys.values();\n        //p.responsedPropertys.replace( p2.responsedPropertys.values() )\n        //p.responsedProperty = p2.responsedPropertys.values();\n\n        //debugger\n        // that.propertys.set( snapshot.key, { ...(p.serialize()), ...p2} )\n        //that.propertys.delete( snapshot.key )\n        var p = _extends({}, p2, snapshot.val());\n        console.log('new obj', p);\n        that.propertys.set(snapshot.key, p2);\n        //that.propertys.get( snapshot.key ).nameOfBuilding = 'MOS0002'\n\n        console.log('property.nameOfBuilding', that.propertys.get(snapshot.key));\n        //console.log('child_changed snapshot.val() ',\n      });\n\n      // Handle child_removed\n      _firebaseStore.Fb.app.usersRef.on('child_removed', function (snapshot) {\n        that.propertys.delete(snapshot.key);\n        // console.log('that.propertys.size', that.propertys.size)\n      });\n\n      /**\r\n       * allocate agent's property public for display\r\n       */\n      //  Fb.agentPropertys.on('child_added', (snapshot) => {\n      //\n      //          //console.log( \"fire\", snapshot.val() )\n      //          var p = new Propertyhk();\n      //\n      //          // restore can be imppletemt  deserialize\n      //          p.restore( snapshot.val() )\n      //          //console.log( 'p', p)\n      //\n      //          p.buildResponseProperty( snapshot.key, p.typeFor, p.location);\n      //\n      //          console.log( 'child_add - psvm.matchedPropertys.size', p.responsedPropertys.size );\n      //          that.agentPropertys.set( snapshot.key, p );\n      //  });\n      //\n      // // Handle child_removed\n      // Fb.agentPropertys.on('child_removed', (snapshot) => {\n      //              that.agentPropertys.delete( snapshot.key );\n      //              // console.log('that.propertys.size', that.propertys.size)\n      // });\n    };\n  }\n}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'clear', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this3 = this;\n\n    return function () {\n      _this3.propertys.clear();\n      // May not need\n      //this.agentPropertys.clear();\n    };\n  }\n})), _class);\n\n\nvar propertys = new PropertysViewModel();\nexports.propertys = propertys;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzY4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9wcm9wZXJ0eXNWaWV3TW9kZWwuanM/YzQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29ic2VydmFibGUsIGNvbXB1dGVkLCBhY3Rpb259IGZyb20gJ21vYngnO1xyXG5pbXBvcnQge0ZifSBmcm9tICdmaXJlYmFzZS1zdG9yZSc7XHJcbmltcG9ydCB7dG9KU30gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCB7UHJvcGVydHloa30gZnJvbSAncHJvcGVydHloaydcclxuaW1wb3J0IHtQcm9wZXJ0eX0gZnJvbSAncHJvcGVydHknXHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuLy9pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcblxyXG4vLyBMaXN0IG9mIHVzZXIgcHJvcGVydGllcywgdG8gYmUgLm9uXHJcbi8vIHByb3BlcnR5Vmlld01vZGVsXHJcbmNsYXNzIFByb3BlcnR5c1ZpZXdNb2RlbCB7XHJcblxyXG4vLyAgQG9ic2VydmFibGUgcHJvcGVydHlzID0gb2JzZXJ2YWJsZS5tYXAoe30pO1xyXG4gIC8vQG9ic2VydmFibGUgcHJvcGVydHlzID0gb2JzZXJ2YWJsZS5tYXAoe30pO1xyXG4gIEBvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuICAvL0BvYnNlcnZhYmxlIGFnZW50UHJvcGVydHlzID0gbmV3IE1hcCgpO1xyXG5cclxuICAvL0BvYnNlcnZhYmxlIG1hdGNoZWRQcm9wZXJ0eXMgPSBvYnNlcnZhYmxlLm1hcCh7fSk7XHJcblxyXG4gIC8vQG9ic2VydmFibGUgcHJvcGVydHlzID0gbWFwKHt9KTtcclxuICAvL0BvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gIH1cclxuXHJcbiAgQGNvbXB1dGVkIGdldCBqc29uKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2pzb24nLCB0aGlzLnByb3BlcnR5cylcclxuICAgIHJldHVybiB0b0pTKHRoaXMucHJvcGVydHlzKTtcclxuICB9XHJcblxyXG5cclxuICAvLyBpbml0IHByb3BlcnR5c1ZpZXdNb2RlbCwgZm9yIG1vYngsXHJcbiAgLy8gY2FuJ3QgYmUgdXNlZCBpbnNpZGUgY29uc3RydWN0b3IsIG90aGVyd2lzZSBlcnJvclxyXG4gIC8vIHdoZW4gYXBwIHN0YXJ0IHdpbGwgY2FsbCBhbiBlbXB0eSBjb25zdHJ1Y3RvclxyXG4gIEBhY3Rpb25cclxuICBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAvLyBIYW5kbGUgQ2hpbGRfYWRkZWRcclxuICAgIC8vaWYgKCBGYi5hcHAucHJvcGVydHlzUmVmICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICBGYi5hcHAudXNlcnNSZWYub24oJ2NoaWxkX2FkZGVkJywgKHNuYXBzaG90KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBcImZpcmVcIiwgc25hcHNob3QudmFsKCkgKVxyXG4gICAgICAgICAgICAvLyB2YXIgcCA9IG5ldyBQcm9wZXJ0eWhrKCk7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIC8vIC8vIHJlc3RvcmUgY2FuIGJlIGltcHBsZXRlbXQgIGRlc2VyaWFsaXplXHJcbiAgICAgICAgICAgIC8vIHAucmVzdG9yZSggc25hcHNob3QudmFsKCkgKVxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCAncCcsIHApXHJcbiAgICAgICAgICAgIHZhciBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZSggc25hcHNob3QudmFsKCkgKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ3AnLCBwKVxyXG5cclxuICAgICAgICAgICAgLy8gcC5idWlsZE1hdGNoUHJvcGVydHkoIHNuYXBzaG90LmtleSwgcC50eXBlRm9yLCBwLmxvY2F0aW9uKTtcclxuICAgICAgICAgICAgcC5idWlsZE1hdGNoUHJvcGVydHkoIHNuYXBzaG90LmtleSwgcC50eXBlRm9yLCBwLm5hbWVPZkJ1aWxkaW5nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1hdGNoaW5nIGFnZW50J3MgcmVzcG9uc2Ugb25seVxyXG4gICAgICAgICAgICBwLmJ1aWxkUmVzcG9uc2VQcm9wZXJ0eSggc25hcHNob3Qua2V5LCBwLnR5cGVGb3IsIHAubG9jYXRpb24gKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHAucmVhbFRpbWUgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnY2hpbGRfYWRkIC0gcHN2bS5tYXRjaGVkUHJvcGVydHlzLnNpemUnLCBwLm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSApO1xyXG4gICAgICAgICAgICB0aGF0LnByb3BlcnR5cy5zZXQoIHNuYXBzaG90LmtleSwgcCApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgRmIuYXBwLnVzZXJzUmVmLm9uKCdjaGlsZF9jaGFuZ2VkJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgLy8gR2V0IGFuIGVsZW1lbnQgd2l0aCBhbGwgZnVuY3Rpb25zLCBwcm9wZXJ0eXNcclxuICAgICAgICAgICAgICAgICAvLyBSZWNyZWF0ZSBhIG5ldyBwcm9wZXJ0cyB7IC4uLiB9XHJcbiAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuXHJcbiAgICAgICAgICAgICAgICAgLy92YXIgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgICAgICAvLyBwLmJ1aWxkTWF0Y2hQcm9wZXJ0eSggc25hcHNob3Qua2V5LCBwLnR5cGVGb3IsIHAubmFtZU9mQnVpbGRpbmcpO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIHZhciBwID0gdGhhdC5wcm9wZXJ0eXMuZ2V0KCBzbmFwc2hvdC5rZXkgKVxyXG4gICAgICAgICAgICAgICAgIC8vIHRoYXQucHJvcGVydHlzLmRlbGV0ZSggc25hcHNob3Qua2V5ICk7XHJcbi8vICAgICAgICAgICAgICAgICB0aGF0LnByb3BlcnR5cy5zZXQoIHNuYXBzaG90LmtleSwgeyAuLi5wLCAuLi5zbmFwc2hvdC52YWwoKSB9KTtcclxuICAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAgICAgIC8vIHRoYXQucHJvcGVydHlzLmRlbGV0ZSggc25hcHNob3Qua2V5ICk7XHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdmYiB1cGRhdGUgaWQnLCBzbmFwc2hvdC5rZXkgKVxyXG4gICAgICAgICAgICAgICAgICB2YXIgcDIgPSB0aGF0LnByb3BlcnR5cy5nZXQoIHNuYXBzaG90LmtleSApXHJcblxyXG4gICAgICAgICAgICAgICAgICBwMi5uYW1lT2ZCdWlsZGluZyA9ICdNT1MwMDAyJ1xyXG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCAncDInLCBwMilcclxuICAgICAgICAgICAgICAgICAgLy92YXIgcCA9IHAyLmRlc2VyaWFsaXplKCBzbmFwc2hvdC52YWwoKSApXHJcbiAgICAgICAgICAgICAgICAgIC8vIEdvcmRvbiB0b2JlIGZpeCFcclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIHAubWF0Y2hlZFByb3BlcnR5cy5yZXBsYWNlKCBkZCApXHJcbiAgICAgICAgICAgICAgICAgIC8vcC5tYXRjaGVkUHJvcGVydHlzID0gcDIubWF0Y2hlZFByb3BlcnR5cy52YWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgLy9wLnJlc3BvbnNlZFByb3BlcnR5cy5yZXBsYWNlKCBwMi5yZXNwb25zZWRQcm9wZXJ0eXMudmFsdWVzKCkgKVxyXG4gICAgICAgICAgICAgICAgICAvL3AucmVzcG9uc2VkUHJvcGVydHkgPSBwMi5yZXNwb25zZWRQcm9wZXJ0eXMudmFsdWVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAvL2RlYnVnZ2VyXHJcbiAgICAgICAgICAgICAgICAgIC8vIHRoYXQucHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCB7IC4uLihwLnNlcmlhbGl6ZSgpKSwgLi4ucDJ9IClcclxuICAgICAgICAgICAgICAgICAgLy90aGF0LnByb3BlcnR5cy5kZWxldGUoIHNuYXBzaG90LmtleSApXHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB7IC4uLnAyLCAuLi5zbmFwc2hvdC52YWwoKSB9O1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ25ldyBvYmonLCBwICApXHJcbiAgICAgICAgICAgICAgICAgIHRoYXQucHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCBwMiApXHJcbiAgICAgICAgICAgICAgICAgIC8vdGhhdC5wcm9wZXJ0eXMuZ2V0KCBzbmFwc2hvdC5rZXkgKS5uYW1lT2ZCdWlsZGluZyA9ICdNT1MwMDAyJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coICdwcm9wZXJ0eS5uYW1lT2ZCdWlsZGluZycsIHRoYXQucHJvcGVydHlzLmdldCggc25hcHNob3Qua2V5ICkgKTtcclxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2hpbGRfY2hhbmdlZCBzbmFwc2hvdC52YWwoKSAnLFxyXG4gICAgfSk7XHJcblxyXG4gICAvLyBIYW5kbGUgY2hpbGRfcmVtb3ZlZFxyXG4gICBGYi5hcHAudXNlcnNSZWYub24oJ2NoaWxkX3JlbW92ZWQnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoYXQucHJvcGVydHlzLmRlbGV0ZSggc25hcHNob3Qua2V5ICk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhhdC5wcm9wZXJ0eXMuc2l6ZScsIHRoYXQucHJvcGVydHlzLnNpemUpXHJcbiAgIH0pO1xyXG5cclxuICAgLyoqXHJcbiAgICAqIGFsbG9jYXRlIGFnZW50J3MgcHJvcGVydHkgcHVibGljIGZvciBkaXNwbGF5XHJcbiAgICAqL1xyXG4gIC8vICBGYi5hZ2VudFByb3BlcnR5cy5vbignY2hpbGRfYWRkZWQnLCAoc25hcHNob3QpID0+IHtcclxuICAvL1xyXG4gIC8vICAgICAgICAgIC8vY29uc29sZS5sb2coIFwiZmlyZVwiLCBzbmFwc2hvdC52YWwoKSApXHJcbiAgLy8gICAgICAgICAgdmFyIHAgPSBuZXcgUHJvcGVydHloaygpO1xyXG4gIC8vXHJcbiAgLy8gICAgICAgICAgLy8gcmVzdG9yZSBjYW4gYmUgaW1wcGxldGVtdCAgZGVzZXJpYWxpemVcclxuICAvLyAgICAgICAgICBwLnJlc3RvcmUoIHNuYXBzaG90LnZhbCgpIClcclxuICAvLyAgICAgICAgICAvL2NvbnNvbGUubG9nKCAncCcsIHApXHJcbiAgLy9cclxuICAvLyAgICAgICAgICBwLmJ1aWxkUmVzcG9uc2VQcm9wZXJ0eSggc25hcHNob3Qua2V5LCBwLnR5cGVGb3IsIHAubG9jYXRpb24pO1xyXG4gIC8vXHJcbiAgLy8gICAgICAgICAgY29uc29sZS5sb2coICdjaGlsZF9hZGQgLSBwc3ZtLm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZScsIHAucmVzcG9uc2VkUHJvcGVydHlzLnNpemUgKTtcclxuICAvLyAgICAgICAgICB0aGF0LmFnZW50UHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCBwICk7XHJcbiAgLy8gIH0pO1xyXG4gIC8vXHJcbiAgLy8gLy8gSGFuZGxlIGNoaWxkX3JlbW92ZWRcclxuICAvLyBGYi5hZ2VudFByb3BlcnR5cy5vbignY2hpbGRfcmVtb3ZlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG4gIC8vICAgICAgICAgICAgICB0aGF0LmFnZW50UHJvcGVydHlzLmRlbGV0ZSggc25hcHNob3Qua2V5ICk7XHJcbiAgLy8gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGF0LnByb3BlcnR5cy5zaXplJywgdGhhdC5wcm9wZXJ0eXMuc2l6ZSlcclxuICAvLyB9KTtcclxuXHJcbiB9ICAvLyBFbmQgb2YgaWYgbnVsbFxyXG5cclxuICAvL31cclxuXHJcbiAgYWRkID0gKG5hbWUpID0+IHtcclxuICAgIGNvbnN0IGlkID0gRmIuYXBwLnVzZXJzUmVmLnB1c2goKS5rZXk7XHJcbiAgICB0aGlzLnVwZGF0ZShpZCwgbmFtZSApO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb21wYXJlVG8gaXMgbmFtZSBvZiB2YXJpYWJsZSBlLmcuIG5hbWUsIHByaWNlLCBsb2NhdGlvblxyXG4gICAqIEB2YWx1ZVRvICAgaXMgdmFsdWUgZXF1YWwgdG8uICBlLmcuICdzaGF0aW4nXHJcbiAgICogcmV0dXJuXHJcbiAgICovXHJcbi8vICAgZ2V0TWF0Y2hQcm9wZXJ0eSA9IChpZCwgY29tcGFyZVRvLCB2YWx1ZVRvICkgPT4ge1xyXG4vLyAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4vLyAgICAgY29uc29sZS5sb2coJ21hdGNoJylcclxuLy9cclxuLy8gICAgIC8vdGhpcy53cml0ZU5ld1Bvc3QoIDEyMzMsICdnb3Jkb24nLCAncGljdHVyZScsICd0aXRsZScsICdib2R5JylcclxuLy9cclxuLy8gICAgIC8vIEhhbmRsZSBtYXRjaCBwcm9wZXJ0eXNcclxuLy8gICAgICBGYi5hcHAudXNlcnNSZWYub3JkZXJCeUNoaWxkKGNvbXBhcmVUbykuZXF1YWxUbyh2YWx1ZVRvKS5vbihcImNoaWxkX2FkZGVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuLy9cclxuLy8gICAgICAgICAgIEZiLmFwcC5tYXRjaGVkUHJvcGVydHlzUmVmLmNoaWxkKCBzbmFwLmtleSApLnNldCggc25hcC52YWwoKSApXHJcbi8vIC8vICAgICAgICAgIEZiLmFwcC5wcm9wZXJ0eXNSZWYudXBkYXRlKCB7IHNuYXAua2V5IDogeyB9IH0pXHJcbi8vICAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KCBzbmFwLmtleSwgc25hcC52YWwoKSApO1xyXG4vLyAgICAgICAgICAgY29uc29sZS5sb2coJ21hdGNoUHJvcGVydHkuc2l6ZScsIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplKVxyXG4vLyAgICAgIH0pO1xyXG4vL1xyXG4vLyAgICAgIEZiLmFwcC51c2Vyc1JlZi5vcmRlckJ5Q2hpbGQoY29tcGFyZVRvKS5lcXVhbFRvKHZhbHVlVG8pLm9uKFwiY2hpbGRfcmVtb3ZlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcbi8vXHJcbi8vICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5kZWxldGUoIHNuYXAua2V5ICk7XHJcbi8vICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaFByb3BlcnR5LnNpemUnLCB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSlcclxuLy8gICAgICB9KTtcclxuLy9cclxuLy9cclxuLy8gICB9XHJcblxyXG4gIHVwZGF0ZSA9IChpZCwgbmFtZSkgPT4ge1xyXG4gICAgIEZiLmFwcC51c2Vyc1JlZi51cGRhdGUoe1tpZF06IHsgbmFtZSB9IH0gIClcclxuICB9O1xyXG5cclxuICBkZWwgPSAoaWQpID0+IHtcclxuICAgIEZiLmFwcC51c2Vyc1JlZi5jaGlsZChpZCkucmVtb3ZlKCk7XHJcbiAgICBGYi5wcm9wZXJ0eXMuY2hpbGQoaWQpLnJlbW92ZSgpO1xyXG4gICAgLy90aGlzLnByb3BlcnR5cy5kZWxldGUoIGlkICk7XHJcbiAgfTtcclxuXHJcbiAgQGFjdGlvblxyXG4gIGNsZWFyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wcm9wZXJ0eXMuY2xlYXIoKTtcclxuICAgIC8vIE1heSBub3QgbmVlZFxyXG4gICAgLy90aGlzLmFnZW50UHJvcGVydHlzLmNsZWFyKCk7XHJcbiAgfTtcclxuXHJcblxyXG59XHJcblxyXG5jb25zdCBwcm9wZXJ0eXMgPSBuZXcgUHJvcGVydHlzVmlld01vZGVsKCk7XHJcbmV4cG9ydCB7cHJvcGVydHlzfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdG9yZS9wcm9wZXJ0eXNWaWV3TW9kZWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFrSEE7QUFDQTtBQUNBO0FBQ0E7QUFySEE7QUFvSkE7QUFDQTtBQUNBO0FBdEpBO0FBd0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1SkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWlHQTtBQUNBO0FBQ0E7QUFDQTtBQU1BOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQTFKQTs7Ozs7OztBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})
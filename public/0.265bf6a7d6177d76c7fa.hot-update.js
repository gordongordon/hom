webpackHotUpdate(0,{

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.agentModel = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;\n\nvar _mobx = __webpack_require__(274);\n\nvar _firebaseStore = __webpack_require__(769);\n\nvar _propertyhk = __webpack_require__(772);\n\nvar _property = __webpack_require__(773);\n\nvar _mobxStore = __webpack_require__(275);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _initDefineProp(target, property, descriptor, context) {\n  if (!descriptor) return;\n  Object.defineProperty(target, property, {\n    enumerable: descriptor.enumerable,\n    configurable: descriptor.configurable,\n    writable: descriptor.writable,\n    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n  });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n//import firebase from 'firebase';\n\n// propertyViewModel\nvar AgentModelViewModel = (_class = function () {\n  // Agent's propertys Public\n\n\n  ////@observable agentPropertys = new Map();\n\n  //  @observable propertys = observable.map({});\n  //  @observable ownPropertys = observable.map({});\n  //@observable matchedPropertys = observable.map({});\n\n  //@observable propertys = map({});\n  //@observable propertys = new Map();\n\n  // Agent's propertys Private\n  function AgentModelViewModel() {\n    //    var that = this;\n\n    var _this = this;\n\n    _classCallCheck(this, AgentModelViewModel);\n\n    _initDefineProp(this, 'propertys', _descriptor, this);\n\n    _initDefineProp(this, 'ownPropertys', _descriptor2, this);\n\n    _initDefineProp(this, 'filters', _descriptor3, this);\n\n    _initDefineProp(this, 'init', _descriptor4, this);\n\n    this.add = function (name) {\n      var id = _firebaseStore.Fb.app.agentsRef.push().key;\n      _this.update(id, name);\n    };\n\n    this.getMatchProperty = function (id, compareTo, valueTo) {\n      var that = _this;\n      console.log('match');\n\n      //this.writeNewPost( 1233, 'gordon', 'picture', 'title', 'body')\n\n      // Handle match propertys\n      _firebaseStore.Fb.app.agentsRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_added\", function (snap) {\n\n        _firebaseStore.Fb.app.matchedPropertysRef.child(snap.key).set(snap.val());\n        //          Fb.app.propertysRef.update( { snap.key : { } })\n        that.matchedPropertys.set(snap.key, snap.val());\n        console.log('matchProperty.size', that.matchedPropertys.size);\n      });\n\n      _firebaseStore.Fb.app.agentsRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_removed\", function (snap) {\n\n        that.matchedPropertys.delete(snap.key);\n        console.log('matchProperty.size', that.matchedPropertys.size);\n      });\n    };\n\n    this.update = function (id, name) {\n      _firebaseStore.Fb.app.agentsRef.update(_defineProperty({}, id, { name: name }));\n    };\n\n    this.del = function (id) {\n      _firebaseStore.Fb.app.agentsRef.child(id).remove();\n      // Fb.propertys.child(id).remove();\n      //this.propertys.delete( id );\n    };\n\n    _initDefineProp(this, 'clear', _descriptor5, this);\n  }\n\n  _createClass(AgentModelViewModel, [{\n    key: 'json',\n    get: function get() {\n      console.log('json', this.propertys);\n      return (0, _mobx.toJS)(this.propertys);\n    }\n\n    // init propertysViewModel, for mobx,\n    // can't be used inside constructor, otherwise error\n    // when app start will call an empty constructor\n\n\n    /**\r\n     * @compareTo is name of variable e.g. name, price, location\r\n     * @valueTo   is value equal to.  e.g. 'shatin'\r\n     * return\r\n     */\n\n  }]);\n\n  return AgentModelViewModel;\n}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'propertys', [_mobx.observable], {\n  enumerable: true,\n  initializer: function initializer() {\n    return new Map();\n  }\n}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'ownPropertys', [_mobx.observable], {\n  enumerable: true,\n  initializer: function initializer() {\n    return new Map();\n  }\n}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'filters', [_mobx.observable], {\n  enumerable: true,\n  initializer: function initializer() {\n    return new Map();\n  }\n}), _applyDecoratedDescriptor(_class.prototype, 'json', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'json'), _class.prototype), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'init', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this2 = this;\n\n    return function () {\n      var that = _this2;\n\n      _firebaseStore.Fb.app.agentsFilterRef.on('child_added', function (snapshot) {\n\n        //console.log( \"fire\", snapshot.val() )\n        //var p = new Propertyhk();\n        var p = _propertyhk.Propertyhk.deserialize(snapshot.val());\n\n        // restore can be imppletemt  deserialize\n        //p.restore( snapshot.val() )\n        //console.log( 'p', p)\n        // p.matchedPropertys.clear();\n\n        // p.buildMatchProperty( snapshot.key, p.typeFor, p.location);\n        p.buildMatchPropertyByRunTime(snapshot.key, p.typeFor, p.typeBy);\n\n        console.log('agentModelView.child_add - filters.matchedPropertys.size', p.matchedPropertys.size);\n        that.filters.set(snapshot.key, p);\n      });\n\n      // Handle update\n      _firebaseStore.Fb.app.agentsFilterRef.on('child_changed', function (snapshot) {\n\n        console.log('agentModelView.child_changed');\n        var p = that.filters.get(snapshot.key);\n        p.restore(snapshot.val());\n        p.matchedPropertys.clear();\n        p.buildMatchPropertyByRunTime(snapshot.key, p.typeFor, p.typeBy);\n        that.filters.set(snapshot.key, p);\n      });\n\n      // Handle child_removed\n      _firebaseStore.Fb.app.agentsFilterRef.on('child_removed', function (snapshot) {\n        that.filters.delete(snapshot.key);\n        // console.log('that.propertys.size', that.propertys.size)\n      });\n\n      _firebaseStore.Fb.propertys.on('child_added', function (snapshot) {\n\n        //console.log( \"fire\", snapshot.val() )\n        var p = new _propertyhk.Propertyhk();\n\n        // restore can be imppletemt  deserialize\n        p.restore(snapshot.val());\n        //console.log( 'p', p)\n\n        // p.buildMatchProperty( snapshot.key, p.typeFor, p.location);\n\n        console.log('child_add - psvm.matchedPropertys.size', p.matchedPropertys.size);\n        that.propertys.set(snapshot.key, p);\n      });\n\n      // Handle update\n      _firebaseStore.Fb.propertys.on('child_changed', function (snapshot) {\n\n        var p = that.propertys.get(snapshot.key);\n        p.restore(snapshot.val());\n        that.propertys.set(snapshot.key, p);\n\n        //                 const p = that.propertys.get( snapshot.key )\n        //that.propertys.set( snapshot.key, { ...p, ...snapshot.val() });\n\n        //                 that.propertys.set( snapshot.key, snapshot.val() );\n        // console.log('that.propertys.size', that.propertys.size)\n      });\n\n      // Handle child_removed\n      _firebaseStore.Fb.propertys.on('child_removed', function (snapshot) {\n        that.propertys.delete(snapshot.key);\n        // console.log('that.propertys.size', that.propertys.size)\n      });\n\n      // Handle Child_added\n      //if ( Fb.app.propertysRef !== undefined ) {\n      _firebaseStore.Fb.app.agentsRef.on('child_added', function (snapshot) {\n\n        console.log(\"fire\", snapshot.val());\n        var p = new _propertyhk.Propertyhk();\n\n        // restore can be imppletemt  deserialize\n        p.restore(snapshot.val());\n        //console.log( 'p', p)\n        console.log('p.relatedFbid', p.relatedFbid);\n\n        p.buildMatchProperty(snapshot.key, p.typeFor, p.location);\n\n        console.log('child_add - psvm.matchedPropertys.size', p.matchedPropertys.size);\n        that.ownPropertys.set(snapshot.key, p);\n        // Make sure delete whose, hab been answered!\n        that.propertys.delete(p.relatedFbid);\n      });\n\n      _firebaseStore.Fb.app.agentsRef.on('child_changed', function (snapshot) {\n\n        var p = that.ownPropertys.get(snapshot.key);\n        p.restore(snapshot.val());\n        that.ownPropertys.set(snapshot.key, p);\n\n        // const p = that.ownPropertys.get( snapshot.key )\n        // that.ownPropertys.set( snapshot.key, { ...p, ...snapshot.val() });\n\n        //that.ownPropertys.set( snapshot.key, snapshot.val() );\n        // console.log('that.propertys.size', that.propertys.size)\n      });\n\n      // Handle child_removed\n      _firebaseStore.Fb.app.agentsRef.on('child_removed', function (snapshot) {\n        that.ownPropertys.delete(snapshot.key);\n        //                that.propertys.delete( snapshot.key );\n        // console.log('that.propertys.size', that.propertys.size)\n      });\n    };\n  }\n}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'clear', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this3 = this;\n\n    return function () {\n      _this3.propertys.clear();\n      _this3.ownPropertys.clear();\n    };\n  }\n})), _class);\n\n\nvar agentModel = new AgentModelViewModel();\nexports.agentModel = agentModel;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hZ2VudE1vZGVsVmlldy5qcz8wMmRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7b2JzZXJ2YWJsZSwgY29tcHV0ZWQsIGFjdGlvbn0gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCB7RmJ9IGZyb20gJ2ZpcmViYXNlLXN0b3JlJztcclxuaW1wb3J0IHt0b0pTfSBmcm9tICdtb2J4JztcclxuaW1wb3J0IHtQcm9wZXJ0eWhrfSBmcm9tICdwcm9wZXJ0eWhrJ1xyXG5pbXBvcnQge1Byb3BlcnR5fSBmcm9tICdwcm9wZXJ0eSdcclxuaW1wb3J0IE1vYnhTdG9yZSBmcm9tICdtb2J4U3RvcmUnO1xyXG4vL2ltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XHJcblxyXG4vLyBwcm9wZXJ0eVZpZXdNb2RlbFxyXG5jbGFzcyBBZ2VudE1vZGVsVmlld01vZGVsIHtcclxuXHJcbi8vICBAb2JzZXJ2YWJsZSBwcm9wZXJ0eXMgPSBvYnNlcnZhYmxlLm1hcCh7fSk7XHJcbi8vIFVzZXIgcHJvcGVydHlzIFB1YmxpY1xyXG5Ab2JzZXJ2YWJsZSBwcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcbi8vIEFnZW50J3MgcHJvcGVydHlzIFByaXZhdGVcclxuQG9ic2VydmFibGUgb3duUHJvcGVydHlzID0gbmV3IE1hcCgpO1xyXG5cclxuQG9ic2VydmFibGUgZmlsdGVycyA9IG5ldyBNYXAoKTtcclxuLy8gQWdlbnQncyBwcm9wZXJ0eXMgUHVibGljXHJcblxyXG5cclxuLy8vL0BvYnNlcnZhYmxlIGFnZW50UHJvcGVydHlzID0gbmV3IE1hcCgpO1xyXG5cclxuLy8gIEBvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuLy8gIEBvYnNlcnZhYmxlIG93blByb3BlcnR5cyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICAvL0BvYnNlcnZhYmxlIG1hdGNoZWRQcm9wZXJ0eXMgPSBvYnNlcnZhYmxlLm1hcCh7fSk7XHJcblxyXG4gIC8vQG9ic2VydmFibGUgcHJvcGVydHlzID0gbWFwKHt9KTtcclxuICAvL0BvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbi8vICAgIHZhciB0aGF0ID0gdGhpcztcclxuICB9XHJcblxyXG4gIEBjb21wdXRlZCBnZXQganNvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdqc29uJywgdGhpcy5wcm9wZXJ0eXMpXHJcbiAgICByZXR1cm4gdG9KUyh0aGlzLnByb3BlcnR5cyk7XHJcbiAgfVxyXG5cclxuICAvLyBpbml0IHByb3BlcnR5c1ZpZXdNb2RlbCwgZm9yIG1vYngsXHJcbiAgLy8gY2FuJ3QgYmUgdXNlZCBpbnNpZGUgY29uc3RydWN0b3IsIG90aGVyd2lzZSBlcnJvclxyXG4gIC8vIHdoZW4gYXBwIHN0YXJ0IHdpbGwgY2FsbCBhbiBlbXB0eSBjb25zdHJ1Y3RvclxyXG4gIEBhY3Rpb25cclxuICBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgRmIuYXBwLmFnZW50c0ZpbHRlclJlZi5vbignY2hpbGRfYWRkZWQnLCAoc25hcHNob3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coIFwiZmlyZVwiLCBzbmFwc2hvdC52YWwoKSApXHJcbiAgICAgICAgICAgIC8vdmFyIHAgPSBuZXcgUHJvcGVydHloaygpO1xyXG4gICAgICAgICAgICB2YXIgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoIHNuYXBzaG90LnZhbCgpIClcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc3RvcmUgY2FuIGJlIGltcHBsZXRlbXQgIGRlc2VyaWFsaXplXHJcbiAgICAgICAgICAgIC8vcC5yZXN0b3JlKCBzbmFwc2hvdC52YWwoKSApXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coICdwJywgcClcclxuICAgICAgICAgICAgLy8gcC5tYXRjaGVkUHJvcGVydHlzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBwLmJ1aWxkTWF0Y2hQcm9wZXJ0eSggc25hcHNob3Qua2V5LCBwLnR5cGVGb3IsIHAubG9jYXRpb24pO1xyXG4gICAgICAgICAgICBwLmJ1aWxkTWF0Y2hQcm9wZXJ0eUJ5UnVuVGltZSggc25hcHNob3Qua2V5LCBwLnR5cGVGb3IsIHAudHlwZUJ5KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnYWdlbnRNb2RlbFZpZXcuY2hpbGRfYWRkIC0gZmlsdGVycy5tYXRjaGVkUHJvcGVydHlzLnNpemUnLCBwLm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSApO1xyXG4gICAgICAgICAgICB0aGF0LmZpbHRlcnMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhhbmRsZSB1cGRhdGVcclxuICAgIEZiLmFwcC5hZ2VudHNGaWx0ZXJSZWYub24oJ2NoaWxkX2NoYW5nZWQnLCAoc25hcHNob3QpID0+IHtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdhZ2VudE1vZGVsVmlldy5jaGlsZF9jaGFuZ2VkJylcclxuICAgICAgdmFyIHAgPSB0aGF0LmZpbHRlcnMuZ2V0KCBzbmFwc2hvdC5rZXkgKVxyXG4gICAgICBwLnJlc3RvcmUoIHNuYXBzaG90LnZhbCgpICk7XHJcbiAgICAgIHAubWF0Y2hlZFByb3BlcnR5cy5jbGVhcigpO1xyXG4gICAgICBwLmJ1aWxkTWF0Y2hQcm9wZXJ0eUJ5UnVuVGltZSggc25hcHNob3Qua2V5LCBwLnR5cGVGb3IsIHAudHlwZUJ5KTtcclxuICAgICAgdGhhdC5maWx0ZXJzLnNldCggc25hcHNob3Qua2V5LCBwIClcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgIC8vIEhhbmRsZSBjaGlsZF9yZW1vdmVkXHJcbiAgIEZiLmFwcC5hZ2VudHNGaWx0ZXJSZWYub24oJ2NoaWxkX3JlbW92ZWQnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgIHRoYXQuZmlsdGVycy5kZWxldGUoIHNuYXBzaG90LmtleSApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoYXQucHJvcGVydHlzLnNpemUnLCB0aGF0LnByb3BlcnR5cy5zaXplKVxyXG4gICB9KTtcclxuXHJcblxyXG4gICAgRmIucHJvcGVydHlzLm9uKCdjaGlsZF9hZGRlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggXCJmaXJlXCIsIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgdmFyIHAgPSBuZXcgUHJvcGVydHloaygpO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVzdG9yZSBjYW4gYmUgaW1wcGxldGVtdCAgZGVzZXJpYWxpemVcclxuICAgICAgICAgICAgcC5yZXN0b3JlKCBzbmFwc2hvdC52YWwoKSApXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coICdwJywgcClcclxuXHJcbiAgICAgICAgICAgIC8vIHAuYnVpbGRNYXRjaFByb3BlcnR5KCBzbmFwc2hvdC5rZXksIHAudHlwZUZvciwgcC5sb2NhdGlvbik7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ2NoaWxkX2FkZCAtIHBzdm0ubWF0Y2hlZFByb3BlcnR5cy5zaXplJywgcC5tYXRjaGVkUHJvcGVydHlzLnNpemUgKTtcclxuICAgICAgICAgICAgdGhhdC5wcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhhbmRsZSB1cGRhdGVcclxuICAgIEZiLnByb3BlcnR5cy5vbignY2hpbGRfY2hhbmdlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG5cclxuICAgICAgdmFyIHAgPSB0aGF0LnByb3BlcnR5cy5nZXQoIHNuYXBzaG90LmtleSApXHJcbiAgICAgIHAucmVzdG9yZSggc25hcHNob3QudmFsKCkgKTtcclxuICAgICAgdGhhdC5wcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKVxyXG5cclxuXHJcbi8vICAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhhdC5wcm9wZXJ0eXMuZ2V0KCBzbmFwc2hvdC5rZXkgKVxyXG4gICAgICAgICAgICAgICAgIC8vdGhhdC5wcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHsgLi4ucCwgLi4uc25hcHNob3QudmFsKCkgfSk7XHJcblxyXG4vLyAgICAgICAgICAgICAgICAgdGhhdC5wcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHNuYXBzaG90LnZhbCgpICk7XHJcbiAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoYXQucHJvcGVydHlzLnNpemUnLCB0aGF0LnByb3BlcnR5cy5zaXplKVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgLy8gSGFuZGxlIGNoaWxkX3JlbW92ZWRcclxuICAgRmIucHJvcGVydHlzLm9uKCdjaGlsZF9yZW1vdmVkJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnByb3BlcnR5cy5kZWxldGUoIHNuYXBzaG90LmtleSApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoYXQucHJvcGVydHlzLnNpemUnLCB0aGF0LnByb3BlcnR5cy5zaXplKVxyXG4gICB9KTtcclxuXHJcblxyXG4gICAgLy8gSGFuZGxlIENoaWxkX2FkZGVkXHJcbiAgICAvL2lmICggRmIuYXBwLnByb3BlcnR5c1JlZiAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgRmIuYXBwLmFnZW50c1JlZi5vbignY2hpbGRfYWRkZWQnLCAoc25hcHNob3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImZpcmVcIiwgc25hcHNob3QudmFsKCkgKVxyXG4gICAgICAgICAgICB2YXIgcCA9IG5ldyBQcm9wZXJ0eWhrKCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXN0b3JlIGNhbiBiZSBpbXBwbGV0ZW10ICBkZXNlcmlhbGl6ZVxyXG4gICAgICAgICAgICBwLnJlc3RvcmUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggJ3AnLCBwKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ3AucmVsYXRlZEZiaWQnLCBwLnJlbGF0ZWRGYmlkKVxyXG5cclxuICAgICAgICAgICAgcC5idWlsZE1hdGNoUHJvcGVydHkoIHNuYXBzaG90LmtleSwgcC50eXBlRm9yLCBwLmxvY2F0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnY2hpbGRfYWRkIC0gcHN2bS5tYXRjaGVkUHJvcGVydHlzLnNpemUnLCBwLm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSApO1xyXG4gICAgICAgICAgICB0aGF0Lm93blByb3BlcnR5cy5zZXQoIHNuYXBzaG90LmtleSwgcCApO1xyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgZGVsZXRlIHdob3NlLCBoYWIgYmVlbiBhbnN3ZXJlZCFcclxuICAgICAgICAgICAgdGhhdC5wcm9wZXJ0eXMuZGVsZXRlKCBwLnJlbGF0ZWRGYmlkICk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgRmIuYXBwLmFnZW50c1JlZi5vbignY2hpbGRfY2hhbmdlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG5cclxuICAgICAgdmFyIHAgPSB0aGF0Lm93blByb3BlcnR5cy5nZXQoIHNuYXBzaG90LmtleSApXHJcbiAgICAgIHAucmVzdG9yZSggc25hcHNob3QudmFsKCkgKTtcclxuICAgICAgdGhhdC5vd25Qcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBwID0gdGhhdC5vd25Qcm9wZXJ0eXMuZ2V0KCBzbmFwc2hvdC5rZXkgKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhhdC5vd25Qcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHsgLi4ucCwgLi4uc25hcHNob3QudmFsKCkgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgIC8vdGhhdC5vd25Qcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHNuYXBzaG90LnZhbCgpICk7XHJcbiAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoYXQucHJvcGVydHlzLnNpemUnLCB0aGF0LnByb3BlcnR5cy5zaXplKVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgLy8gSGFuZGxlIGNoaWxkX3JlbW92ZWRcclxuICAgRmIuYXBwLmFnZW50c1JlZi5vbignY2hpbGRfcmVtb3ZlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5vd25Qcm9wZXJ0eXMuZGVsZXRlKCBzbmFwc2hvdC5rZXkgKTtcclxuLy8gICAgICAgICAgICAgICAgdGhhdC5wcm9wZXJ0eXMuZGVsZXRlKCBzbmFwc2hvdC5rZXkgKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGF0LnByb3BlcnR5cy5zaXplJywgdGhhdC5wcm9wZXJ0eXMuc2l6ZSlcclxuICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIGFkZCA9IChuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IEZiLmFwcC5hZ2VudHNSZWYucHVzaCgpLmtleTtcclxuICAgIHRoaXMudXBkYXRlKGlkLCBuYW1lICk7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbXBhcmVUbyBpcyBuYW1lIG9mIHZhcmlhYmxlIGUuZy4gbmFtZSwgcHJpY2UsIGxvY2F0aW9uXHJcbiAgICogQHZhbHVlVG8gICBpcyB2YWx1ZSBlcXVhbCB0by4gIGUuZy4gJ3NoYXRpbidcclxuICAgKiByZXR1cm5cclxuICAgKi9cclxuICBnZXRNYXRjaFByb3BlcnR5ID0gKGlkLCBjb21wYXJlVG8sIHZhbHVlVG8gKSA9PiB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZygnbWF0Y2gnKVxyXG5cclxuICAgIC8vdGhpcy53cml0ZU5ld1Bvc3QoIDEyMzMsICdnb3Jkb24nLCAncGljdHVyZScsICd0aXRsZScsICdib2R5JylcclxuXHJcbiAgICAvLyBIYW5kbGUgbWF0Y2ggcHJvcGVydHlzXHJcbiAgICAgRmIuYXBwLmFnZW50c1JlZi5vcmRlckJ5Q2hpbGQoY29tcGFyZVRvKS5lcXVhbFRvKHZhbHVlVG8pLm9uKFwiY2hpbGRfYWRkZWRcIiwgZnVuY3Rpb24oc25hcCkge1xyXG5cclxuICAgICAgICAgIEZiLmFwcC5tYXRjaGVkUHJvcGVydHlzUmVmLmNoaWxkKCBzbmFwLmtleSApLnNldCggc25hcC52YWwoKSApXHJcbi8vICAgICAgICAgIEZiLmFwcC5wcm9wZXJ0eXNSZWYudXBkYXRlKCB7IHNuYXAua2V5IDogeyB9IH0pXHJcbiAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KCBzbmFwLmtleSwgc25hcC52YWwoKSApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ21hdGNoUHJvcGVydHkuc2l6ZScsIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplKVxyXG4gICAgIH0pO1xyXG5cclxuICAgICBGYi5hcHAuYWdlbnRzUmVmLm9yZGVyQnlDaGlsZChjb21wYXJlVG8pLmVxdWFsVG8odmFsdWVUbykub24oXCJjaGlsZF9yZW1vdmVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuXHJcbiAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5kZWxldGUoIHNuYXAua2V5ICk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaFByb3BlcnR5LnNpemUnLCB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSlcclxuICAgICB9KTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgdXBkYXRlID0gKGlkLCBuYW1lKSA9PiB7XHJcbiAgICAgRmIuYXBwLmFnZW50c1JlZi51cGRhdGUoe1tpZF06IHsgbmFtZSB9IH0gIClcclxuICB9O1xyXG5cclxuICBkZWwgPSAoaWQpID0+IHtcclxuICAgIEZiLmFwcC5hZ2VudHNSZWYuY2hpbGQoaWQpLnJlbW92ZSgpO1xyXG4gICAgLy8gRmIucHJvcGVydHlzLmNoaWxkKGlkKS5yZW1vdmUoKTtcclxuICAgIC8vdGhpcy5wcm9wZXJ0eXMuZGVsZXRlKCBpZCApO1xyXG4gIH07XHJcblxyXG4gIEBhY3Rpb25cclxuICBjbGVhciA9ICgpID0+IHtcclxuICAgIHRoaXMucHJvcGVydHlzLmNsZWFyKCk7XHJcbiAgICB0aGlzLm93blByb3BlcnR5cy5jbGVhcigpO1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGFnZW50TW9kZWwgPSBuZXcgQWdlbnRNb2RlbFZpZXdNb2RlbCgpO1xyXG5leHBvcnQge2FnZW50TW9kZWx9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0b3JlL2FnZW50TW9kZWxWaWV3LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQWdCQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQTBJQTtBQUNBO0FBQ0E7QUFDQTtBQTdJQTtBQW9KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUExS0E7QUE0S0E7QUFDQTtBQUNBO0FBOUtBO0FBZ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwTEE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWlJQTs7Ozs7Ozs7Ozs7O0FBL0pBOzs7OztBQUVBOzs7OztBQUVBOzs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7QUErQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})
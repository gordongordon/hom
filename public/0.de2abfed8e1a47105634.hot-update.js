webpackHotUpdate(0,{

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Propertyhk = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _desc, _value, _class, _descriptor, _descriptor2;\n\nvar _mobx = __webpack_require__(274);\n\nvar _firebaseStore = __webpack_require__(769);\n\nvar _property = __webpack_require__(773);\n\nfunction _initDefineProp(target, property, descriptor, context) {\n  if (!descriptor) return;\n  Object.defineProperty(target, property, {\n    enumerable: descriptor.enumerable,\n    configurable: descriptor.configurable,\n    writable: descriptor.writable,\n    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n  });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n// import moment from 'moment'\n\n// List of user properties, to be .on\n// propertyViewModel\nvar Propertyhk = exports.Propertyhk = (_class = function (_Property) {\n  _inherits(Propertyhk, _Property);\n\n  //@observable responsedPropertys = new Map();\n  // @observable matchedPropertys = new Map();\n\n  // @observable like = observable.map({});\n  // @observable reject = observable.map({});\n  // @observable view = observable.map({});\n\n  //@observable propertys = map({});\n  //@observable propertys = new Map();\n\n  function Propertyhk(props) {\n    _classCallCheck(this, Propertyhk);\n\n    var _this = _possibleConstructorReturn(this, (Propertyhk.__proto__ || Object.getPrototypeOf(Propertyhk)).call(this, props));\n\n    _initDefineProp(_this, \"matchedPropertys\", _descriptor, _this);\n\n    _initDefineProp(_this, \"responsedPropertys\", _descriptor2, _this);\n\n    _this.buildMatchPropertyByRunTime = function (id, typeTo, typeBy) {\n      var that = _this;\n      var fb; // firebase ref;\n\n      if (typeBy === \"open\") {\n        switch (typeTo) {\n          case \"lease\":\n            fb = _firebaseStore.Fb.lease;\n            break;\n          case \"buy\":\n            fb = _firebaseStore.Fb.buy;\n            break;\n          case \"sale\":\n            fb = _firebaseStore.Fb.sale;\n            break;\n          case \"rent\":\n            fb = _firebaseStore.Fb.rent;\n            break;\n        }\n      } else if (typeBy === \"engage\") {\n        switch (typeTo) {\n          case \"lease\":\n            fb = _firebaseStore.Fb.app.agentLeaseRef;\n            break;\n          case \"buy\":\n            fb = _firebaseStore.Fb.app.agentBuyRef;\n            break;\n          case \"sale\":\n            fb = _firebaseStore.Fb.app.agentSaleRef;\n            break;\n          case \"rent\":\n            fb = _firebaseStore.Fb.app.agentRentRef;\n            break;\n        }\n      }\n\n      console.log(\"property.hk orderByChild \" + _this.orderByChild + \" equalTo \" + _this.equalTo + \" id \" + _this.fbid);\n      // Handle match propertys\n      fb.orderByChild(_this.orderByChild).equalTo(_this.equalTo).on(\"child_added\", function (snap) {\n        //          if ( that.uid !== snap.val().uid ) {\n\n        var p = Propertyhk.deserialize(snap.val());\n        //p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');\n\n        that.matchedPropertys.set(snap.key, p);\n        console.log(\"propertyhk.child_added - matchProperty.size\", that.matchedPropertys.size);\n        //         }\n      });\n\n      fb.orderByChild(_this.orderByChild).equalTo(_this.equalTo).on(\"child_changed\", function (snapshot) {\n        // Get an element with all functions, propertys\n        // Recreate a new properts { ... }\n        // otherwise propertys.responsedPropertys = undefined error\n        var p = Propertyhk.deserialize(snapshot.val());\n        that.matchedPropertys.set(snapshot.key, p);\n        console.log(\"propertyhk.child_changed - matchProperty.size\", that.matchedPropertys.size);\n      });\n\n      fb.orderByChild(_this.orderByChild).equalTo(_this.equalTo).on(\"child_removed\", function (snap) {\n        that.matchedPropertys.delete(snap.key);\n        console.log(\"child_removed - matchProperty.size\", that.matchedPropertys.size);\n      });\n\n      return that.matchedPropertys;\n    };\n\n    _this.buildMatchUserPropertyByRunTime = function (id, typeFor, location) {\n      var that = _this;\n      var fb; // firebase ref;\n\n      switch (typeFor) {\n        case \"lease\":\n          fb = _firebaseStore.Fb.lease;\n          break;\n        case \"buy\":\n          fb = _firebaseStore.Fb.buy;\n          break;\n        case \"sale\":\n          fb = _firebaseStore.Fb.sale;\n          break;\n        case \"rent\":\n          fb = _firebaseStore.Fb.rent;\n          break;\n      }\n\n      console.log(\"property.hk orderByChild \" + _this.orderByChild + \" equalTo \" + _this.equalTo + \" id \" + _this.fbid);\n      // Handle match propertys\n      fb.orderByChild(_this.orderByChild).equalTo(_this.equalTo).on(\"child_added\", function (snap) {\n        //          if ( that.uid !== snap.val().uid ) {\n\n        var p = Propertyhk.deserialize(snap.val());\n        //p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');\n\n        that.matchedPropertys.set(snap.key, p);\n        console.log(\"propertyhk.child_added - matchProperty.size\", that.matchedPropertys.size);\n        //         }\n      });\n\n      fb.orderByChild(_this.orderByChild).equalTo(_this.equalTo).on(\"child_changed\", function (snapshot) {\n        // Get an element with all functions, propertys\n        // Recreate a new properts { ... }\n        // otherwise propertys.responsedPropertys = undefined error\n        var p = Propertyhk.deserialize(snapshot.val());\n        that.matchedPropertys.set(snapshot.key, p);\n        console.log(\"propertyhk.child_changed - matchProperty.size\", that.matchedPropertys.size);\n      });\n\n      fb.orderByChild(_this.orderByChild).equalTo(_this.equalTo).on(\"child_removed\", function (snap) {\n        that.matchedPropertys.delete(snap.key);\n        console.log(\"child_removed - matchProperty.size\", that.matchedPropertys.size);\n      });\n\n      return that.matchedPropertys;\n    };\n\n    _this.buildMatchProperty = function (id, typeFor, location) {\n      var that = _this;\n\n      // Handle match propertys\n      _firebaseStore.Fb.propertys.orderByChild(\"typeTo\").equalTo(typeFor).on(\"child_added\", function (snap) {\n        //debugger\n        //           if ( (location === snap.val().nameOfBuilding ) && (that.uid !== snap.val().uid) )\n        if (location === snap.val().nameOfBuilding) {\n          var p = Propertyhk.deserialize(snap.val());\n          //p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');\n\n          that.matchedPropertys.set(snap.key, p);\n          console.log(\"child_added - matchProperty.size\", that.matchedPropertys.size);\n        }\n      });\n\n      _firebaseStore.Fb.propertys.orderByChild(\"typeTo\").equalTo(typeFor).on(\"child_changed\", function (snapshot) {\n        // Get an element with all functions, propertys\n        // Recreate a new properts { ... }\n        // otherwise propertys.responsedPropertys = undefined error\n        var p = Propertyhk.deserialize(snapshot.val());\n        that.matchedPropertys.set(snapshot.key, p);\n      });\n\n      _firebaseStore.Fb.propertys.orderByChild(\"typeTo\").equalTo(typeFor).on(\"child_removed\", function (snap) {\n        that.matchedPropertys.delete(snap.key);\n        console.log(\"child_removed - matchProperty.size\", that.matchedPropertys.size);\n      });\n\n      return that.matchedPropertys;\n    };\n\n    _this.buildResponseProperty = function (id, typeFor, location) {\n      var that = _this;\n\n      // Handle match propertys\n      _firebaseStore.Fb.agentPropertys.orderByChild(\"relatedFbid\").equalTo(id).on(\"child_added\", function (snap) {\n        // Fb.matchedPropertys.child( snap.key ).set( snap.val() )\n        // Fb.propertys.update( { snap.key : { } })\n        var p = Propertyhk.deserialize(snap.val());\n        that.responsedPropertys.set(snap.key, p);\n\n        console.log(\"child_added - responsedPropertys.size\", that.responsedPropertys.size);\n      });\n\n      _firebaseStore.Fb.agentPropertys.orderByChild(\"relatedFbid\").equalTo(typeFor).on(\"child_changed\", function (snapshot) {\n        // Get an element with all functions, propertys\n        // Recreate a new properts { ... }\n        // otherwise propertys.responsedPropertys = undefined error\n        var p = Propertyhk.deserialize(snapshot.val());\n        that.matchedPropertys.set(snapshot.key, p);\n        //console.log('child_changed snapshot.val() ',  snapshot.val() )\n      });\n\n      _firebaseStore.Fb.agentPropertys.orderByChild(\"relatedFbid\").equalTo(id).on(\"child_removed\", function (snap) {\n        that.responsedPropertys.delete(snap.key);\n        console.log(\"child_removed - responsedPropertys.size\", that.responsedPropertys.size);\n      });\n\n      return that.responsedPropertys;\n    };\n\n    _this.buildMatchAgentProperty = function (id, typeFor, location) {\n      var that = _this;\n\n      // Handle match propertys\n      _firebaseStore.Fb.propertys.orderByChild(\"typeTo\").equalTo(typeFor).on(\"child_added\", function (snap) {\n        // Fb.matchedPropertys.child( snap.key ).set( snap.val() )\n        //          Fb.propertys.update( { snap.key : { } })\n        that.matchedPropertys.set(snap.key, snap.val());\n        console.log(\"child_added - matchProperty.size\", that.matchedPropertys.size);\n      });\n\n      _firebaseStore.Fb.propertys.orderByChild(\"typeTo\").equalTo(typeFor).on(\"child_changed\", function (snapshot) {\n        // Get an element with all functions, propertys\n        // Recreate a new properts { ... }\n        // otherwise propertys.responsedPropertys = undefined error\n        //                  const p = that.matchedPropertys.get( snapshot.key )\n        var p = Propertyhk.deserialize(snapshot.val());\n        that.matchedPropertys.set(snapshot.key, p);\n\n        //                  that.matchedPropertys.set( snapshot.key, { ...p, ...snapshot.val() });\n        //console.log('child_changed snapshot.val() ',  snapshot.val() )\n      });\n\n      _firebaseStore.Fb.propertys.orderByChild(\"typeTo\").equalTo(typeFor).on(\"child_removed\", function (snap) {\n        that.matchedPropertys.delete(snap.key);\n        console.log(\"child_removed - matchProperty.size\", that.matchedPropertys.size);\n      });\n\n      return that.matchedPropertys;\n    };\n\n    return _this;\n  }\n\n  // constructor( v ) {\n  //   super( v );\n  // }\n\n  //@observable matchedPropertys = new Map();\n  // responsed propertys from agent only\n\n\n  _createClass(Propertyhk, [{\n    key: \"json\",\n    get: function get() {\n      return (0, _mobx.toJS)(this.matchedPropertys);\n    }\n\n    /**\r\n     * @compareTo is name of variable e.g. name, price, location\r\n     * @valueTo   is value equal to.  e.g. 'shatin'\r\n     * return\r\n     */\n\n\n    /**\r\n     * @id property id\r\n     * @typeFor is user to select firebase ref\r\n     * @location is no use\r\n     * return\r\n     */\n\n\n    /**\r\n     * @compareTo is name of variable e.g. name, price, location\r\n     * @valueTo   is value equal to.  e.g. 'shatin'\r\n     * return\r\n     */\n\n\n    /**\r\n     * @compareTo is name of variable e.g. name, price, location\r\n     * @valueTo   is value equal to.  e.g. 'shatin'\r\n     * return\r\n     */\n\n\n    /**\r\n     * @compareTo is name of variable e.g. name, price, location\r\n     * @valueTo   is value equal to.  e.g. 'shatin'\r\n     * return\r\n     */\n\n  }], [{\n    key: \"deserialize\",\n\n\n    // n is an object to be updated\n    value: function deserialize(n) {\n      var phk = new Propertyhk();\n\n      _get(Propertyhk.__proto__ || Object.getPrototypeOf(Propertyhk), \"deserializeObj\", this).call(this, n, phk);\n      return phk;\n    }\n  }]);\n\n  return Propertyhk;\n}(_property.Property), (_descriptor = _applyDecoratedDescriptor(_class.prototype, \"matchedPropertys\", [_mobx.observable], {\n  enumerable: true,\n  initializer: function initializer() {\n    return _mobx.observable.map({});\n  }\n}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, \"responsedPropertys\", [_mobx.observable], {\n  enumerable: true,\n  initializer: function initializer() {\n    return _mobx.observable.map({});\n  }\n}), _applyDecoratedDescriptor(_class.prototype, \"json\", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, \"json\"), _class.prototype)), _class); // End of class//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzcyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9wcm9wZXJ0eWhrLmpzPzgwYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIGFjdGlvbiB9IGZyb20gXCJtb2J4XCI7XHJcbmltcG9ydCB7IEZiIH0gZnJvbSBcImZpcmViYXNlLXN0b3JlXCI7XHJcbmltcG9ydCB7IHRvSlMgfSBmcm9tIFwibW9ieFwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eSB9IGZyb20gXCJwcm9wZXJ0eVwiO1xyXG4vLyBpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuXHJcbi8vIExpc3Qgb2YgdXNlciBwcm9wZXJ0aWVzLCB0byBiZSAub25cclxuLy8gcHJvcGVydHlWaWV3TW9kZWxcclxuZXhwb3J0IGNsYXNzIFByb3BlcnR5aGsgZXh0ZW5kcyBQcm9wZXJ0eSB7XHJcbiAgQG9ic2VydmFibGUgbWF0Y2hlZFByb3BlcnR5cyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICAvL0BvYnNlcnZhYmxlIG1hdGNoZWRQcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcbiAgLy8gcmVzcG9uc2VkIHByb3BlcnR5cyBmcm9tIGFnZW50IG9ubHlcclxuICBAb2JzZXJ2YWJsZSByZXNwb25zZWRQcm9wZXJ0eXMgPSBvYnNlcnZhYmxlLm1hcCh7fSk7XHJcbiAgLy9Ab2JzZXJ2YWJsZSByZXNwb25zZWRQcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcbiAgLy8gQG9ic2VydmFibGUgbWF0Y2hlZFByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgLy8gQG9ic2VydmFibGUgbGlrZSA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICAvLyBAb2JzZXJ2YWJsZSByZWplY3QgPSBvYnNlcnZhYmxlLm1hcCh7fSk7XHJcbiAgLy8gQG9ic2VydmFibGUgdmlldyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuXHJcbiAgLy9Ab2JzZXJ2YWJsZSBwcm9wZXJ0eXMgPSBtYXAoe30pO1xyXG4gIC8vQG9ic2VydmFibGUgcHJvcGVydHlzID0gbmV3IE1hcCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3RydWN0b3IoIHYgKSB7XHJcbiAgLy8gICBzdXBlciggdiApO1xyXG4gIC8vIH1cclxuXHJcbiAgQGNvbXB1dGVkXHJcbiAgZ2V0IGpzb24oKSB7XHJcbiAgICByZXR1cm4gdG9KUyh0aGlzLm1hdGNoZWRQcm9wZXJ0eXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbXBhcmVUbyBpcyBuYW1lIG9mIHZhcmlhYmxlIGUuZy4gbmFtZSwgcHJpY2UsIGxvY2F0aW9uXHJcbiAgICogQHZhbHVlVG8gICBpcyB2YWx1ZSBlcXVhbCB0by4gIGUuZy4gJ3NoYXRpbidcclxuICAgKiByZXR1cm5cclxuICAgKi9cclxuICBidWlsZE1hdGNoUHJvcGVydHlCeVJ1blRpbWUgPSAoaWQsIHR5cGVUbywgdHlwZUJ5KSA9PiB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIHZhciBmYjsgLy8gZmlyZWJhc2UgcmVmO1xyXG5cclxuICAgIGlmICh0eXBlQnkgPT09IFwib3BlblwiICkgIHtcclxuICAgICAgc3dpdGNoICh0eXBlVG8pIHtcclxuICAgICAgICBjYXNlIFwibGVhc2VcIjpcclxuICAgICAgICAgIGZiID0gRmIubGVhc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYnV5XCI6XHJcbiAgICAgICAgICBmYiA9IEZiLmJ1eTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzYWxlXCI6XHJcbiAgICAgICAgICBmYiA9IEZiLnNhbGU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicmVudFwiOlxyXG4gICAgICAgICAgZmIgPSBGYi5yZW50O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoIHR5cGVCeSA9PT0gXCJlbmdhZ2VcIikge1xyXG4gICAgICBzd2l0Y2ggKHR5cGVUbykge1xyXG4gICAgICAgIGNhc2UgXCJsZWFzZVwiOlxyXG4gICAgICAgICAgZmIgPSBGYi5hcHAuYWdlbnRMZWFzZVJlZjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJidXlcIjpcclxuICAgICAgICAgIGZiID0gRmIuYXBwLmFnZW50QnV5UmVmO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBcInNhbGVcIjpcclxuICAgICAgICAgIGZiID0gRmIuYXBwLmFnZW50U2FsZVJlZjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJyZW50XCI6XHJcbiAgICAgICAgICBmYiA9IEZiLmFwcC5hZ2VudFJlbnRSZWY7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYHByb3BlcnR5LmhrIG9yZGVyQnlDaGlsZCAke3RoaXMub3JkZXJCeUNoaWxkfSBlcXVhbFRvICR7dGhpcy5lcXVhbFRvfSBpZCAke3RoaXMuZmJpZH1gXHJcbiAgICApO1xyXG4gICAgLy8gSGFuZGxlIG1hdGNoIHByb3BlcnR5c1xyXG4gICAgZmIub3JkZXJCeUNoaWxkKHRoaXMub3JkZXJCeUNoaWxkKVxyXG4gICAgICAuZXF1YWxUbyh0aGlzLmVxdWFsVG8pXHJcbiAgICAgIC5vbihcImNoaWxkX2FkZGVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuICAgICAgICAvLyAgICAgICAgICBpZiAoIHRoYXQudWlkICE9PSBzbmFwLnZhbCgpLnVpZCApIHtcclxuXHJcbiAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoc25hcC52YWwoKSk7XHJcbiAgICAgICAgLy9wLnJlYWxUaW1lID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcblxyXG4gICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zZXQoc25hcC5rZXksIHApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgXCJwcm9wZXJ0eWhrLmNoaWxkX2FkZGVkIC0gbWF0Y2hQcm9wZXJ0eS5zaXplXCIsXHJcbiAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGZiXHJcbiAgICAgIC5vcmRlckJ5Q2hpbGQodGhpcy5vcmRlckJ5Q2hpbGQpXHJcbiAgICAgIC5lcXVhbFRvKHRoaXMuZXF1YWxUbylcclxuICAgICAgLm9uKFwiY2hpbGRfY2hhbmdlZFwiLCBzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgLy8gR2V0IGFuIGVsZW1lbnQgd2l0aCBhbGwgZnVuY3Rpb25zLCBwcm9wZXJ0eXNcclxuICAgICAgICAvLyBSZWNyZWF0ZSBhIG5ldyBwcm9wZXJ0cyB7IC4uLiB9XHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICBjb25zdCBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZShzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldChzbmFwc2hvdC5rZXksIHApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgXCJwcm9wZXJ0eWhrLmNoaWxkX2NoYW5nZWQgLSBtYXRjaFByb3BlcnR5LnNpemVcIixcclxuICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZmJcclxuICAgICAgLm9yZGVyQnlDaGlsZCh0aGlzLm9yZGVyQnlDaGlsZClcclxuICAgICAgLmVxdWFsVG8odGhpcy5lcXVhbFRvKVxyXG4gICAgICAub24oXCJjaGlsZF9yZW1vdmVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuZGVsZXRlKHNuYXAua2V5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIFwiY2hpbGRfcmVtb3ZlZCAtIG1hdGNoUHJvcGVydHkuc2l6ZVwiLFxyXG4gICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemVcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhhdC5tYXRjaGVkUHJvcGVydHlzO1xyXG4gIH07XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAaWQgcHJvcGVydHkgaWRcclxuICAgKiBAdHlwZUZvciBpcyB1c2VyIHRvIHNlbGVjdCBmaXJlYmFzZSByZWZcclxuICAgKiBAbG9jYXRpb24gaXMgbm8gdXNlXHJcbiAgICogcmV0dXJuXHJcbiAgICovXHJcbiAgYnVpbGRNYXRjaFVzZXJQcm9wZXJ0eUJ5UnVuVGltZSA9IChpZCwgdHlwZUZvciwgbG9jYXRpb24pID0+IHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgdmFyIGZiOyAvLyBmaXJlYmFzZSByZWY7XHJcblxyXG4gICAgICBzd2l0Y2ggKHR5cGVGb3IpIHtcclxuICAgICAgICBjYXNlIFwibGVhc2VcIjpcclxuICAgICAgICAgIGZiID0gRmIubGVhc2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwiYnV5XCI6XHJcbiAgICAgICAgICBmYiA9IEZiLmJ1eTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzYWxlXCI6XHJcbiAgICAgICAgICBmYiA9IEZiLnNhbGU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicmVudFwiOlxyXG4gICAgICAgICAgZmIgPSBGYi5yZW50O1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcclxuICAgICAgYHByb3BlcnR5LmhrIG9yZGVyQnlDaGlsZCAke3RoaXMub3JkZXJCeUNoaWxkfSBlcXVhbFRvICR7dGhpcy5lcXVhbFRvfSBpZCAke3RoaXMuZmJpZH1gXHJcbiAgICApO1xyXG4gICAgLy8gSGFuZGxlIG1hdGNoIHByb3BlcnR5c1xyXG4gICAgZmIub3JkZXJCeUNoaWxkKHRoaXMub3JkZXJCeUNoaWxkKVxyXG4gICAgICAuZXF1YWxUbyh0aGlzLmVxdWFsVG8pXHJcbiAgICAgIC5vbihcImNoaWxkX2FkZGVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuICAgICAgICAvLyAgICAgICAgICBpZiAoIHRoYXQudWlkICE9PSBzbmFwLnZhbCgpLnVpZCApIHtcclxuXHJcbiAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoc25hcC52YWwoKSk7XHJcbiAgICAgICAgLy9wLnJlYWxUaW1lID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyk7XHJcblxyXG4gICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zZXQoc25hcC5rZXksIHApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgXCJwcm9wZXJ0eWhrLmNoaWxkX2FkZGVkIC0gbWF0Y2hQcm9wZXJ0eS5zaXplXCIsXHJcbiAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGZiXHJcbiAgICAgIC5vcmRlckJ5Q2hpbGQodGhpcy5vcmRlckJ5Q2hpbGQpXHJcbiAgICAgIC5lcXVhbFRvKHRoaXMuZXF1YWxUbylcclxuICAgICAgLm9uKFwiY2hpbGRfY2hhbmdlZFwiLCBzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgLy8gR2V0IGFuIGVsZW1lbnQgd2l0aCBhbGwgZnVuY3Rpb25zLCBwcm9wZXJ0eXNcclxuICAgICAgICAvLyBSZWNyZWF0ZSBhIG5ldyBwcm9wZXJ0cyB7IC4uLiB9XHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICBjb25zdCBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZShzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldChzbmFwc2hvdC5rZXksIHApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgXCJwcm9wZXJ0eWhrLmNoaWxkX2NoYW5nZWQgLSBtYXRjaFByb3BlcnR5LnNpemVcIixcclxuICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZmJcclxuICAgICAgLm9yZGVyQnlDaGlsZCh0aGlzLm9yZGVyQnlDaGlsZClcclxuICAgICAgLmVxdWFsVG8odGhpcy5lcXVhbFRvKVxyXG4gICAgICAub24oXCJjaGlsZF9yZW1vdmVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuZGVsZXRlKHNuYXAua2V5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIFwiY2hpbGRfcmVtb3ZlZCAtIG1hdGNoUHJvcGVydHkuc2l6ZVwiLFxyXG4gICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemVcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhhdC5tYXRjaGVkUHJvcGVydHlzO1xyXG4gIH07XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAY29tcGFyZVRvIGlzIG5hbWUgb2YgdmFyaWFibGUgZS5nLiBuYW1lLCBwcmljZSwgbG9jYXRpb25cclxuICAgKiBAdmFsdWVUbyAgIGlzIHZhbHVlIGVxdWFsIHRvLiAgZS5nLiAnc2hhdGluJ1xyXG4gICAqIHJldHVyblxyXG4gICAqL1xyXG4gIGJ1aWxkTWF0Y2hQcm9wZXJ0eSA9IChpZCwgdHlwZUZvciwgbG9jYXRpb24pID0+IHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vIEhhbmRsZSBtYXRjaCBwcm9wZXJ0eXNcclxuICAgIEZiLnByb3BlcnR5c1xyXG4gICAgICAub3JkZXJCeUNoaWxkKFwidHlwZVRvXCIpXHJcbiAgICAgIC5lcXVhbFRvKHR5cGVGb3IpXHJcbiAgICAgIC5vbihcImNoaWxkX2FkZGVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuICAgICAgICAvL2RlYnVnZ2VyXHJcbiAgICAgICAgLy8gICAgICAgICAgIGlmICggKGxvY2F0aW9uID09PSBzbmFwLnZhbCgpLm5hbWVPZkJ1aWxkaW5nICkgJiYgKHRoYXQudWlkICE9PSBzbmFwLnZhbCgpLnVpZCkgKVxyXG4gICAgICAgIGlmIChsb2NhdGlvbiA9PT0gc25hcC52YWwoKS5uYW1lT2ZCdWlsZGluZykge1xyXG4gICAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoc25hcC52YWwoKSk7XHJcbiAgICAgICAgICAvL3AucmVhbFRpbWUgPSBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKTtcclxuXHJcbiAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KHNuYXAua2V5LCBwKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBcImNoaWxkX2FkZGVkIC0gbWF0Y2hQcm9wZXJ0eS5zaXplXCIsXHJcbiAgICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgRmIucHJvcGVydHlzXHJcbiAgICAgIC5vcmRlckJ5Q2hpbGQoXCJ0eXBlVG9cIilcclxuICAgICAgLmVxdWFsVG8odHlwZUZvcilcclxuICAgICAgLm9uKFwiY2hpbGRfY2hhbmdlZFwiLCBzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgLy8gR2V0IGFuIGVsZW1lbnQgd2l0aCBhbGwgZnVuY3Rpb25zLCBwcm9wZXJ0eXNcclxuICAgICAgICAvLyBSZWNyZWF0ZSBhIG5ldyBwcm9wZXJ0cyB7IC4uLiB9XHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICBjb25zdCBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZShzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldChzbmFwc2hvdC5rZXksIHApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBGYi5wcm9wZXJ0eXNcclxuICAgICAgLm9yZGVyQnlDaGlsZChcInR5cGVUb1wiKVxyXG4gICAgICAuZXF1YWxUbyh0eXBlRm9yKVxyXG4gICAgICAub24oXCJjaGlsZF9yZW1vdmVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuZGVsZXRlKHNuYXAua2V5KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIFwiY2hpbGRfcmVtb3ZlZCAtIG1hdGNoUHJvcGVydHkuc2l6ZVwiLFxyXG4gICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemVcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhhdC5tYXRjaGVkUHJvcGVydHlzO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb21wYXJlVG8gaXMgbmFtZSBvZiB2YXJpYWJsZSBlLmcuIG5hbWUsIHByaWNlLCBsb2NhdGlvblxyXG4gICAqIEB2YWx1ZVRvICAgaXMgdmFsdWUgZXF1YWwgdG8uICBlLmcuICdzaGF0aW4nXHJcbiAgICogcmV0dXJuXHJcbiAgICovXHJcbiAgYnVpbGRSZXNwb25zZVByb3BlcnR5ID0gKGlkLCB0eXBlRm9yLCBsb2NhdGlvbikgPT4ge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vIEhhbmRsZSBtYXRjaCBwcm9wZXJ0eXNcclxuICAgIEZiLmFnZW50UHJvcGVydHlzXHJcbiAgICAgIC5vcmRlckJ5Q2hpbGQoXCJyZWxhdGVkRmJpZFwiKVxyXG4gICAgICAuZXF1YWxUbyhpZClcclxuICAgICAgLm9uKFwiY2hpbGRfYWRkZWRcIiwgZnVuY3Rpb24oc25hcCkge1xyXG4gICAgICAgIC8vIEZiLm1hdGNoZWRQcm9wZXJ0eXMuY2hpbGQoIHNuYXAua2V5ICkuc2V0KCBzbmFwLnZhbCgpIClcclxuICAgICAgICAvLyBGYi5wcm9wZXJ0eXMudXBkYXRlKCB7IHNuYXAua2V5IDogeyB9IH0pXHJcbiAgICAgICAgY29uc3QgcCA9IFByb3BlcnR5aGsuZGVzZXJpYWxpemUoc25hcC52YWwoKSk7XHJcbiAgICAgICAgdGhhdC5yZXNwb25zZWRQcm9wZXJ0eXMuc2V0KHNuYXAua2V5LCBwKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBcImNoaWxkX2FkZGVkIC0gcmVzcG9uc2VkUHJvcGVydHlzLnNpemVcIixcclxuICAgICAgICAgIHRoYXQucmVzcG9uc2VkUHJvcGVydHlzLnNpemVcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBGYi5hZ2VudFByb3BlcnR5c1xyXG4gICAgICAub3JkZXJCeUNoaWxkKFwicmVsYXRlZEZiaWRcIilcclxuICAgICAgLmVxdWFsVG8odHlwZUZvcilcclxuICAgICAgLm9uKFwiY2hpbGRfY2hhbmdlZFwiLCBzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgLy8gR2V0IGFuIGVsZW1lbnQgd2l0aCBhbGwgZnVuY3Rpb25zLCBwcm9wZXJ0eXNcclxuICAgICAgICAvLyBSZWNyZWF0ZSBhIG5ldyBwcm9wZXJ0cyB7IC4uLiB9XHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICBjb25zdCBwID0gUHJvcGVydHloay5kZXNlcmlhbGl6ZShzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldChzbmFwc2hvdC5rZXksIHApO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NoaWxkX2NoYW5nZWQgc25hcHNob3QudmFsKCkgJywgIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgfSk7XHJcblxyXG4gICAgRmIuYWdlbnRQcm9wZXJ0eXNcclxuICAgICAgLm9yZGVyQnlDaGlsZChcInJlbGF0ZWRGYmlkXCIpXHJcbiAgICAgIC5lcXVhbFRvKGlkKVxyXG4gICAgICAub24oXCJjaGlsZF9yZW1vdmVkXCIsIGZ1bmN0aW9uKHNuYXApIHtcclxuICAgICAgICB0aGF0LnJlc3BvbnNlZFByb3BlcnR5cy5kZWxldGUoc25hcC5rZXkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgXCJjaGlsZF9yZW1vdmVkIC0gcmVzcG9uc2VkUHJvcGVydHlzLnNpemVcIixcclxuICAgICAgICAgIHRoYXQucmVzcG9uc2VkUHJvcGVydHlzLnNpemVcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhhdC5yZXNwb25zZWRQcm9wZXJ0eXM7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbXBhcmVUbyBpcyBuYW1lIG9mIHZhcmlhYmxlIGUuZy4gbmFtZSwgcHJpY2UsIGxvY2F0aW9uXHJcbiAgICogQHZhbHVlVG8gICBpcyB2YWx1ZSBlcXVhbCB0by4gIGUuZy4gJ3NoYXRpbidcclxuICAgKiByZXR1cm5cclxuICAgKi9cclxuICBidWlsZE1hdGNoQWdlbnRQcm9wZXJ0eSA9IChpZCwgdHlwZUZvciwgbG9jYXRpb24pID0+IHtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAvLyBIYW5kbGUgbWF0Y2ggcHJvcGVydHlzXHJcbiAgICBGYi5wcm9wZXJ0eXNcclxuICAgICAgLm9yZGVyQnlDaGlsZChcInR5cGVUb1wiKVxyXG4gICAgICAuZXF1YWxUbyh0eXBlRm9yKVxyXG4gICAgICAub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcbiAgICAgICAgLy8gRmIubWF0Y2hlZFByb3BlcnR5cy5jaGlsZCggc25hcC5rZXkgKS5zZXQoIHNuYXAudmFsKCkgKVxyXG4gICAgICAgIC8vICAgICAgICAgIEZiLnByb3BlcnR5cy51cGRhdGUoIHsgc25hcC5rZXkgOiB7IH0gfSlcclxuICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KHNuYXAua2V5LCBzbmFwLnZhbCgpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIFwiY2hpbGRfYWRkZWQgLSBtYXRjaFByb3BlcnR5LnNpemVcIixcclxuICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgRmIucHJvcGVydHlzXHJcbiAgICAgIC5vcmRlckJ5Q2hpbGQoXCJ0eXBlVG9cIilcclxuICAgICAgLmVxdWFsVG8odHlwZUZvcilcclxuICAgICAgLm9uKFwiY2hpbGRfY2hhbmdlZFwiLCBzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgLy8gR2V0IGFuIGVsZW1lbnQgd2l0aCBhbGwgZnVuY3Rpb25zLCBwcm9wZXJ0eXNcclxuICAgICAgICAvLyBSZWNyZWF0ZSBhIG5ldyBwcm9wZXJ0cyB7IC4uLiB9XHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHByb3BlcnR5cy5yZXNwb25zZWRQcm9wZXJ0eXMgPSB1bmRlZmluZWQgZXJyb3JcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuZ2V0KCBzbmFwc2hvdC5rZXkgKVxyXG4gICAgICAgIGNvbnN0IHAgPSBQcm9wZXJ0eWhrLmRlc2VyaWFsaXplKHNuYXBzaG90LnZhbCgpKTtcclxuICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KHNuYXBzaG90LmtleSwgcCk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCB7IC4uLnAsIC4uLnNuYXBzaG90LnZhbCgpIH0pO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NoaWxkX2NoYW5nZWQgc25hcHNob3QudmFsKCkgJywgIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgfSk7XHJcblxyXG4gICAgRmIucHJvcGVydHlzXHJcbiAgICAgIC5vcmRlckJ5Q2hpbGQoXCJ0eXBlVG9cIilcclxuICAgICAgLmVxdWFsVG8odHlwZUZvcilcclxuICAgICAgLm9uKFwiY2hpbGRfcmVtb3ZlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcbiAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLmRlbGV0ZShzbmFwLmtleSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBcImNoaWxkX3JlbW92ZWQgLSBtYXRjaFByb3BlcnR5LnNpemVcIixcclxuICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoYXQubWF0Y2hlZFByb3BlcnR5cztcclxuICB9O1xyXG5cclxuICAvLyBuIGlzIGFuIG9iamVjdCB0byBiZSB1cGRhdGVkXHJcbiAgc3RhdGljIGRlc2VyaWFsaXplKG4pIHtcclxuICAgIHZhciBwaGsgPSBuZXcgUHJvcGVydHloaygpO1xyXG5cclxuICAgIHN1cGVyLmRlc2VyaWFsaXplT2JqKG4sIHBoayk7XHJcbiAgICByZXR1cm4gcGhrO1xyXG4gIH1cclxufSAvLyBFbmQgb2YgY2xhc3NcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9c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");

/***/ })

})
webpackHotUpdate(0,{

/***/ 881:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.propertys = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _class2, _temp, _initialiseProps;\n\nvar _mobx = __webpack_require__(294);\n\nvar _firebaseStore = __webpack_require__(882);\n\nvar _propertyhk = __webpack_require__(885);\n\nvar _property = __webpack_require__(886);\n\nvar _mobxStore = __webpack_require__(295);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _firebase = __webpack_require__(297);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _initDefineProp(target, property, descriptor, context) {\n  if (!descriptor) return;\n  Object.defineProperty(target, property, {\n    enumerable: descriptor.enumerable,\n    configurable: descriptor.configurable,\n    writable: descriptor.writable,\n    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n  });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n// List of user properties, to be .on\n// propertyViewModel\nvar PropertysViewModel = (_class = (_temp = _class2 = function () {\n  //@observable propertys = new Map();\n\n  //@observable matchedPropertys = observable.map({});\n\n  //@observable propertys = map({});\n  //@observable propertys = new Map();\n\n  function PropertysViewModel() {\n    _classCallCheck(this, PropertysViewModel);\n\n    _initialiseProps.call(this);\n\n    var that = this;\n    //var uid = MobxStore.app.uid;\n    // Mayn't need that\n    //that.propertys.clear();\n\n    //console.log('size b', this.propertys.size )\n    // Fb.app.propertysRef.on('value', (snapshot) => {\n    //   console.log( 'snapshot.val', snapshot.val());\n    //   this.propertys = snapshot.val();\n    //\n    //   console.log('size', this.propertys.size )\n    //   console.log( 'snapshot.size ', snapshot.numChildren() );\n    // });\n\n    // Fb.app.propertysRef.orderByChild(\"price\").on('child_added', (snapshot) => {\n    //   console.log( 'snapshot.val', snapshot.val());\n    //   this.propertys = snapshot.val();\n    //\n    //   //console.log('size', this.propertys.size )\n    //   console.log( 'snapshot.size ', snapshot.numChildren() );\n    // });\n\n\n    // Fb.app.matchedPropertysRef.on('value',function(snap) {\n    //      snap.forEach(function(item) {\n    //         that.matchedPropertys.set( item.key, item.val() );\n    //         //console.log( item.key, item.val() )\n    //         console.log('that.propertys.size', that.matchPpropertys.size)\n    //     });\n    // });\n\n\n    //     // Handle Child_added\n    //     if ( Fb.app.propertysRef !== undefined ) {\n    //     Fb.app.propertysRef.on('child_added', (snapshot) => {\n    //\n    //             console.log( \"fire\", snapshot.val() )\n    //             var p = new Propertyhk();\n    //\n    //            // Tobe Testing.\n    //             // p = { ...p, ...snapshot.val() }\n    //\n    //             // restore can be imppletemt  deserialize\n    //             p.restore( snapshot.val() )\n    //             console.log( 'p', p)\n    // //            console.log( 'snapddd', snapshot.val() )\n    //             // p.done = snapshot.val().done\n    //             // p.contactName = snapshot.val().contactName\n    //             // p.nameOfBuilding = snapshot.val().nameOfBuilding;\n    //             // p.location = snapshot.val().location\n    //             // p.nearByMtrLine = snapshot.val().nearByMtrLine\n    //             // p.nearByMtrStop = snapshot.val().nearByMtrStop\n    //             // p.salePrice = snapshot.val().salePrice\n    //             // p.typeTo = snapshot.val().typeTo\n    //             // p.typeBy = snapshot.val().typeBy\n    //             // p.typeFor = snapshot.val().typeFor\n    //\n    //             p.buildMatchProperty( snapshot.key, p.typeFor, p.location);\n    //\n    //             console.log( 'child_add - psvm.matchedPropertys.size', p.matchedPropertys.size );\n    //             that.propertys.set( snapshot.key, p );\n    //     });\n    //\n    //    // Handle child_removed\n    //    Fb.app.propertysRef.on('child_removed', (snapshot) => {\n    //                 that.propertys.delete( snapshot.key );\n    //                 // console.log('that.propertys.size', that.propertys.size)\n    //    });\n    //  }  // End of if null\n\n  }\n\n  _createClass(PropertysViewModel, [{\n    key: 'json',\n    get: function get() {\n      console.log('json', this.propertys);\n      return (0, _mobx.toJS)(this.propertys);\n    }\n\n    // init propertysViewModel, for mobx,\n    // can't be used inside constructor, otherwise error\n    // when app start will call an empty constructor\n\n    //\n    // addPropertyForSale = ( nearByMtrLine, nearByMtrStop, netSize, salePrice, numOfRoom, numofBathroom, contactName, contactPhone, contactEmail) =>\n    // {\n    //   var p = new Property();\n    //\n    //\n    //   p.nearByMtrLine = nearByMtrLine;\n    //   p.nearByMtrStop = nearByMtrStop;\n    //   p.netSize = parseInt(netSize);\n    //   p.salePrice = parseInt(salePrice);\n    //   p.numOfRoom = parseInt(numOfRoom);\n    //   p.numofBathroom = parseInt(numofBathroom);\n    //   p.contactName = contactName;\n    //   p.contactPhone = parseInt(contactPhone);\n    //   p.contactEmail = contactEmail;\n    //\n    //   const id = Fb.app.propertysRef.push().key;\n    //   Fb.app.propertysRef.update( {[id]:  p.serialize() });\n    // }\n    //\n    //\n    // // For testing only must create first\n    // addProperty(userName, nameOfBuilding, location, typeTo, typeBy, typeFor, price ){\n    //     var p = this.property = new Propertyhk();\n    //     p.done = false\n    //     p.contactName = userName\n    //     p.nameOfBuilding = nameOfBuilding\n    //     p.location = location\n    //     p.salePrice = parseInt(price)\n    //     p.typeTo = typeTo\n    //     p.typeBy = typeBy\n    //     p.typeFor = typeFor\n    //\n    //     const id = Fb.app.propertysRef.push().key;\n    //     Fb.app.propertysRef.update( {[id]:  p.serialize() });\n    // }\n    //\n    // writeNewPost = (uid, username, picture, title, body) => {\n    //   // A post entry.\n    //   var postData = {\n    //     author: username,\n    //     uid: uid,\n    //     body: body,\n    //     title: title,\n    //     starCount: 0,\n    //     authorPic: picture\n    //   };\n\n    // Get a key for a new Post.\n    // var newPostKey = Fb.app.propertysRef.child('posts').push().key;\n\n    // Write the new post's data simultaneously in the posts list and the user's post list.\n    //   var updates = {};\n    //   updates['/posts/' + newPostKey] = postData;\n    //   updates['/user-posts/' + uid + '/' + newPostKey] = postData;\n    //\n    //   return Fb.app.propertysRef.update(updates);\n    // }\n\n    /**\r\n     * @compareTo is name of variable e.g. name, price, location\r\n     * @valueTo   is value equal to.  e.g. 'shatin'\r\n     * return\r\n     */\n\n  }]);\n\n  return PropertysViewModel;\n}(), _initialiseProps = function _initialiseProps() {\n  var _this = this;\n\n  _initDefineProp(this, 'propertys', _descriptor, this);\n\n  _initDefineProp(this, 'init', _descriptor2, this);\n\n  this.add = function (name) {\n    var id = _firebaseStore.Fb.app.usersRef.push().key;\n    _this.update(id, name);\n  };\n\n  this.getMatchProperty = function (id, compareTo, valueTo) {\n    var that = _this;\n    console.log('match');\n\n    //this.writeNewPost( 1233, 'gordon', 'picture', 'title', 'body')\n\n    // Handle match propertys\n    _firebaseStore.Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_added\", function (snap) {\n\n      _firebaseStore.Fb.app.matchedPropertysRef.child(snap.key).set(snap.val());\n      //          Fb.app.propertysRef.update( { snap.key : { } })\n      that.matchedPropertys.set(snap.key, snap.val());\n      console.log('matchProperty.size', that.matchedPropertys.size);\n    });\n\n    _firebaseStore.Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_removed\", function (snap) {\n\n      that.matchedPropertys.delete(snap.key);\n      console.log('matchProperty.size', that.matchedPropertys.size);\n    });\n  };\n\n  this.update = function (id, name) {\n    _firebaseStore.Fb.app.propertysRef.update(_defineProperty({}, id, { name: name }));\n  };\n\n  this.del = function (id) {\n    _firebaseStore.Fb.app.propertysRef.child(id).remove();\n    _firebaseStore.Fb.propertys.child(id).remove();\n    //this.propertys.delete( id );\n  };\n\n  _initDefineProp(this, 'clear', _descriptor3, this);\n}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'propertys', [_mobx.observable], {\n  enumerable: true,\n  initializer: function initializer() {\n    return _mobx.observable.map({});\n  }\n}), _applyDecoratedDescriptor(_class.prototype, 'json', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'json'), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'init', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this2 = this;\n\n    return function () {\n      var that = _this2;\n      // Handle Child_added\n      //if ( Fb.app.propertysRef !== undefined ) {\n      _firebaseStore.Fb.app.usersRef.on('child_added', function (snapshot) {\n\n        //console.log( \"fire\", snapshot.val() )\n        var p = new _propertyhk.Propertyhk();\n\n        // restore can be imppletemt  deserialize\n        p.restore(snapshot.val());\n        //console.log( 'p', p)\n\n        p.buildMatchProperty(snapshot.key, p.typeFor, p.location);\n\n        console.log('child_add - psvm.matchedPropertys.size', p.matchedPropertys.size);\n        that.propertys.set(snapshot.key, p);\n      });\n\n      // Handle child_removed\n      _firebaseStore.Fb.app.usersRef.on('child_removed', function (snapshot) {\n        that.propertys.delete(snapshot.key);\n        // console.log('that.propertys.size', that.propertys.size)\n      });\n      //}  // End of if null\n    };\n  }\n}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'clear', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this3 = this;\n\n    return function () {\n      _this3.propertys.clear();\n    };\n  }\n})), _class);\n\n\nvar propertys = new PropertysViewModel();\nexports.propertys = propertys;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODgxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9wcm9wZXJ0eXNWaWV3TW9kZWwuanM/YzQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29ic2VydmFibGUsIGNvbXB1dGVkLCBhY3Rpb259IGZyb20gJ21vYngnO1xyXG5pbXBvcnQge0ZifSBmcm9tICdmaXJlYmFzZS1zdG9yZSc7XHJcbmltcG9ydCB7dG9KU30gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCB7UHJvcGVydHloa30gZnJvbSAncHJvcGVydHloaydcclxuaW1wb3J0IHtQcm9wZXJ0eX0gZnJvbSAncHJvcGVydHknXHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuXHJcblxyXG4vLyBMaXN0IG9mIHVzZXIgcHJvcGVydGllcywgdG8gYmUgLm9uXHJcbi8vIHByb3BlcnR5Vmlld01vZGVsXHJcbmNsYXNzIFByb3BlcnR5c1ZpZXdNb2RlbCB7XHJcblxyXG4vLyAgQG9ic2VydmFibGUgcHJvcGVydHlzID0gb2JzZXJ2YWJsZS5tYXAoe30pO1xyXG4gIEBvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICAvL0BvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgLy9Ab2JzZXJ2YWJsZSBtYXRjaGVkUHJvcGVydHlzID0gb2JzZXJ2YWJsZS5tYXAoe30pO1xyXG5cclxuICAvL0BvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG1hcCh7fSk7XHJcbiAgLy9Ab2JzZXJ2YWJsZSBwcm9wZXJ0eXMgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgLy92YXIgdWlkID0gTW9ieFN0b3JlLmFwcC51aWQ7XHJcbiAgICAvLyBNYXluJ3QgbmVlZCB0aGF0XHJcbiAgICAvL3RoYXQucHJvcGVydHlzLmNsZWFyKCk7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZygnc2l6ZSBiJywgdGhpcy5wcm9wZXJ0eXMuc2l6ZSApXHJcbiAgICAvLyBGYi5hcHAucHJvcGVydHlzUmVmLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyggJ3NuYXBzaG90LnZhbCcsIHNuYXBzaG90LnZhbCgpKTtcclxuICAgIC8vICAgdGhpcy5wcm9wZXJ0eXMgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgIC8vXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdzaXplJywgdGhpcy5wcm9wZXJ0eXMuc2l6ZSApXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCAnc25hcHNob3Quc2l6ZSAnLCBzbmFwc2hvdC5udW1DaGlsZHJlbigpICk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBGYi5hcHAucHJvcGVydHlzUmVmLm9yZGVyQnlDaGlsZChcInByaWNlXCIpLm9uKCdjaGlsZF9hZGRlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyggJ3NuYXBzaG90LnZhbCcsIHNuYXBzaG90LnZhbCgpKTtcclxuICAgIC8vICAgdGhpcy5wcm9wZXJ0eXMgPSBzbmFwc2hvdC52YWwoKTtcclxuICAgIC8vXHJcbiAgICAvLyAgIC8vY29uc29sZS5sb2coJ3NpemUnLCB0aGlzLnByb3BlcnR5cy5zaXplIClcclxuICAgIC8vICAgY29uc29sZS5sb2coICdzbmFwc2hvdC5zaXplICcsIHNuYXBzaG90Lm51bUNoaWxkcmVuKCkgKTtcclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICAvLyBGYi5hcHAubWF0Y2hlZFByb3BlcnR5c1JlZi5vbigndmFsdWUnLGZ1bmN0aW9uKHNuYXApIHtcclxuICAgIC8vICAgICAgc25hcC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgIC8vICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNldCggaXRlbS5rZXksIGl0ZW0udmFsKCkgKTtcclxuICAgIC8vICAgICAgICAgLy9jb25zb2xlLmxvZyggaXRlbS5rZXksIGl0ZW0udmFsKCkgKVxyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygndGhhdC5wcm9wZXJ0eXMuc2l6ZScsIHRoYXQubWF0Y2hQcHJvcGVydHlzLnNpemUpXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4vLyAgICAgLy8gSGFuZGxlIENoaWxkX2FkZGVkXHJcbi8vICAgICBpZiAoIEZiLmFwcC5wcm9wZXJ0eXNSZWYgIT09IHVuZGVmaW5lZCApIHtcclxuLy8gICAgIEZiLmFwcC5wcm9wZXJ0eXNSZWYub24oJ2NoaWxkX2FkZGVkJywgKHNuYXBzaG90KSA9PiB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImZpcmVcIiwgc25hcHNob3QudmFsKCkgKVxyXG4vLyAgICAgICAgICAgICB2YXIgcCA9IG5ldyBQcm9wZXJ0eWhrKCk7XHJcbi8vXHJcbi8vICAgICAgICAgICAgLy8gVG9iZSBUZXN0aW5nLlxyXG4vLyAgICAgICAgICAgICAvLyBwID0geyAuLi5wLCAuLi5zbmFwc2hvdC52YWwoKSB9XHJcbi8vXHJcbi8vICAgICAgICAgICAgIC8vIHJlc3RvcmUgY2FuIGJlIGltcHBsZXRlbXQgIGRlc2VyaWFsaXplXHJcbi8vICAgICAgICAgICAgIHAucmVzdG9yZSggc25hcHNob3QudmFsKCkgKVxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ3AnLCBwKVxyXG4vLyAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnc25hcGRkZCcsIHNuYXBzaG90LnZhbCgpIClcclxuLy8gICAgICAgICAgICAgLy8gcC5kb25lID0gc25hcHNob3QudmFsKCkuZG9uZVxyXG4vLyAgICAgICAgICAgICAvLyBwLmNvbnRhY3ROYW1lID0gc25hcHNob3QudmFsKCkuY29udGFjdE5hbWVcclxuLy8gICAgICAgICAgICAgLy8gcC5uYW1lT2ZCdWlsZGluZyA9IHNuYXBzaG90LnZhbCgpLm5hbWVPZkJ1aWxkaW5nO1xyXG4vLyAgICAgICAgICAgICAvLyBwLmxvY2F0aW9uID0gc25hcHNob3QudmFsKCkubG9jYXRpb25cclxuLy8gICAgICAgICAgICAgLy8gcC5uZWFyQnlNdHJMaW5lID0gc25hcHNob3QudmFsKCkubmVhckJ5TXRyTGluZVxyXG4vLyAgICAgICAgICAgICAvLyBwLm5lYXJCeU10clN0b3AgPSBzbmFwc2hvdC52YWwoKS5uZWFyQnlNdHJTdG9wXHJcbi8vICAgICAgICAgICAgIC8vIHAuc2FsZVByaWNlID0gc25hcHNob3QudmFsKCkuc2FsZVByaWNlXHJcbi8vICAgICAgICAgICAgIC8vIHAudHlwZVRvID0gc25hcHNob3QudmFsKCkudHlwZVRvXHJcbi8vICAgICAgICAgICAgIC8vIHAudHlwZUJ5ID0gc25hcHNob3QudmFsKCkudHlwZUJ5XHJcbi8vICAgICAgICAgICAgIC8vIHAudHlwZUZvciA9IHNuYXBzaG90LnZhbCgpLnR5cGVGb3JcclxuLy9cclxuLy8gICAgICAgICAgICAgcC5idWlsZE1hdGNoUHJvcGVydHkoIHNuYXBzaG90LmtleSwgcC50eXBlRm9yLCBwLmxvY2F0aW9uKTtcclxuLy9cclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coICdjaGlsZF9hZGQgLSBwc3ZtLm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZScsIHAubWF0Y2hlZFByb3BlcnR5cy5zaXplICk7XHJcbi8vICAgICAgICAgICAgIHRoYXQucHJvcGVydHlzLnNldCggc25hcHNob3Qua2V5LCBwICk7XHJcbi8vICAgICB9KTtcclxuLy9cclxuLy8gICAgLy8gSGFuZGxlIGNoaWxkX3JlbW92ZWRcclxuLy8gICAgRmIuYXBwLnByb3BlcnR5c1JlZi5vbignY2hpbGRfcmVtb3ZlZCcsIChzbmFwc2hvdCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgdGhhdC5wcm9wZXJ0eXMuZGVsZXRlKCBzbmFwc2hvdC5rZXkgKTtcclxuLy8gICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGF0LnByb3BlcnR5cy5zaXplJywgdGhhdC5wcm9wZXJ0eXMuc2l6ZSlcclxuLy8gICAgfSk7XHJcbi8vICB9ICAvLyBFbmQgb2YgaWYgbnVsbFxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgQGNvbXB1dGVkIGdldCBqc29uKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2pzb24nLCB0aGlzLnByb3BlcnR5cylcclxuICAgIHJldHVybiB0b0pTKHRoaXMucHJvcGVydHlzKTtcclxuICB9XHJcblxyXG5cclxuICAvLyBpbml0IHByb3BlcnR5c1ZpZXdNb2RlbCwgZm9yIG1vYngsXHJcbiAgLy8gY2FuJ3QgYmUgdXNlZCBpbnNpZGUgY29uc3RydWN0b3IsIG90aGVyd2lzZSBlcnJvclxyXG4gIC8vIHdoZW4gYXBwIHN0YXJ0IHdpbGwgY2FsbCBhbiBlbXB0eSBjb25zdHJ1Y3RvclxyXG4gIEBhY3Rpb25cclxuICBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAvLyBIYW5kbGUgQ2hpbGRfYWRkZWRcclxuICAgIC8vaWYgKCBGYi5hcHAucHJvcGVydHlzUmVmICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICBGYi5hcHAudXNlcnNSZWYub24oJ2NoaWxkX2FkZGVkJywgKHNuYXBzaG90KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBcImZpcmVcIiwgc25hcHNob3QudmFsKCkgKVxyXG4gICAgICAgICAgICB2YXIgcCA9IG5ldyBQcm9wZXJ0eWhrKCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXN0b3JlIGNhbiBiZSBpbXBwbGV0ZW10ICBkZXNlcmlhbGl6ZVxyXG4gICAgICAgICAgICBwLnJlc3RvcmUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggJ3AnLCBwKVxyXG5cclxuICAgICAgICAgICAgcC5idWlsZE1hdGNoUHJvcGVydHkoIHNuYXBzaG90LmtleSwgcC50eXBlRm9yLCBwLmxvY2F0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnY2hpbGRfYWRkIC0gcHN2bS5tYXRjaGVkUHJvcGVydHlzLnNpemUnLCBwLm1hdGNoZWRQcm9wZXJ0eXMuc2l6ZSApO1xyXG4gICAgICAgICAgICB0aGF0LnByb3BlcnR5cy5zZXQoIHNuYXBzaG90LmtleSwgcCApO1xyXG4gICAgfSk7XHJcblxyXG4gICAvLyBIYW5kbGUgY2hpbGRfcmVtb3ZlZFxyXG4gICBGYi5hcHAudXNlcnNSZWYub24oJ2NoaWxkX3JlbW92ZWQnLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoYXQucHJvcGVydHlzLmRlbGV0ZSggc25hcHNob3Qua2V5ICk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhhdC5wcm9wZXJ0eXMuc2l6ZScsIHRoYXQucHJvcGVydHlzLnNpemUpXHJcbiAgIH0pO1xyXG4gLy99ICAvLyBFbmQgb2YgaWYgbnVsbFxyXG5cclxuICB9XHJcblxyXG4gIGFkZCA9IChuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IEZiLmFwcC51c2Vyc1JlZi5wdXNoKCkua2V5O1xyXG4gICAgdGhpcy51cGRhdGUoaWQsIG5hbWUgKTtcclxuICB9O1xyXG4gIC8vXHJcbiAgLy8gYWRkUHJvcGVydHlGb3JTYWxlID0gKCBuZWFyQnlNdHJMaW5lLCBuZWFyQnlNdHJTdG9wLCBuZXRTaXplLCBzYWxlUHJpY2UsIG51bU9mUm9vbSwgbnVtb2ZCYXRocm9vbSwgY29udGFjdE5hbWUsIGNvbnRhY3RQaG9uZSwgY29udGFjdEVtYWlsKSA9PlxyXG4gIC8vIHtcclxuICAvLyAgIHZhciBwID0gbmV3IFByb3BlcnR5KCk7XHJcbiAgLy9cclxuICAvL1xyXG4gIC8vICAgcC5uZWFyQnlNdHJMaW5lID0gbmVhckJ5TXRyTGluZTtcclxuICAvLyAgIHAubmVhckJ5TXRyU3RvcCA9IG5lYXJCeU10clN0b3A7XHJcbiAgLy8gICBwLm5ldFNpemUgPSBwYXJzZUludChuZXRTaXplKTtcclxuICAvLyAgIHAuc2FsZVByaWNlID0gcGFyc2VJbnQoc2FsZVByaWNlKTtcclxuICAvLyAgIHAubnVtT2ZSb29tID0gcGFyc2VJbnQobnVtT2ZSb29tKTtcclxuICAvLyAgIHAubnVtb2ZCYXRocm9vbSA9IHBhcnNlSW50KG51bW9mQmF0aHJvb20pO1xyXG4gIC8vICAgcC5jb250YWN0TmFtZSA9IGNvbnRhY3ROYW1lO1xyXG4gIC8vICAgcC5jb250YWN0UGhvbmUgPSBwYXJzZUludChjb250YWN0UGhvbmUpO1xyXG4gIC8vICAgcC5jb250YWN0RW1haWwgPSBjb250YWN0RW1haWw7XHJcbiAgLy9cclxuICAvLyAgIGNvbnN0IGlkID0gRmIuYXBwLnByb3BlcnR5c1JlZi5wdXNoKCkua2V5O1xyXG4gIC8vICAgRmIuYXBwLnByb3BlcnR5c1JlZi51cGRhdGUoIHtbaWRdOiAgcC5zZXJpYWxpemUoKSB9KTtcclxuICAvLyB9XHJcbiAgLy9cclxuICAvL1xyXG4gIC8vIC8vIEZvciB0ZXN0aW5nIG9ubHkgbXVzdCBjcmVhdGUgZmlyc3RcclxuICAvLyBhZGRQcm9wZXJ0eSh1c2VyTmFtZSwgbmFtZU9mQnVpbGRpbmcsIGxvY2F0aW9uLCB0eXBlVG8sIHR5cGVCeSwgdHlwZUZvciwgcHJpY2UgKXtcclxuICAvLyAgICAgdmFyIHAgPSB0aGlzLnByb3BlcnR5ID0gbmV3IFByb3BlcnR5aGsoKTtcclxuICAvLyAgICAgcC5kb25lID0gZmFsc2VcclxuICAvLyAgICAgcC5jb250YWN0TmFtZSA9IHVzZXJOYW1lXHJcbiAgLy8gICAgIHAubmFtZU9mQnVpbGRpbmcgPSBuYW1lT2ZCdWlsZGluZ1xyXG4gIC8vICAgICBwLmxvY2F0aW9uID0gbG9jYXRpb25cclxuICAvLyAgICAgcC5zYWxlUHJpY2UgPSBwYXJzZUludChwcmljZSlcclxuICAvLyAgICAgcC50eXBlVG8gPSB0eXBlVG9cclxuICAvLyAgICAgcC50eXBlQnkgPSB0eXBlQnlcclxuICAvLyAgICAgcC50eXBlRm9yID0gdHlwZUZvclxyXG4gIC8vXHJcbiAgLy8gICAgIGNvbnN0IGlkID0gRmIuYXBwLnByb3BlcnR5c1JlZi5wdXNoKCkua2V5O1xyXG4gIC8vICAgICBGYi5hcHAucHJvcGVydHlzUmVmLnVwZGF0ZSgge1tpZF06ICBwLnNlcmlhbGl6ZSgpIH0pO1xyXG4gIC8vIH1cclxuICAvL1xyXG4gIC8vIHdyaXRlTmV3UG9zdCA9ICh1aWQsIHVzZXJuYW1lLCBwaWN0dXJlLCB0aXRsZSwgYm9keSkgPT4ge1xyXG4gIC8vICAgLy8gQSBwb3N0IGVudHJ5LlxyXG4gIC8vICAgdmFyIHBvc3REYXRhID0ge1xyXG4gIC8vICAgICBhdXRob3I6IHVzZXJuYW1lLFxyXG4gIC8vICAgICB1aWQ6IHVpZCxcclxuICAvLyAgICAgYm9keTogYm9keSxcclxuICAvLyAgICAgdGl0bGU6IHRpdGxlLFxyXG4gIC8vICAgICBzdGFyQ291bnQ6IDAsXHJcbiAgLy8gICAgIGF1dGhvclBpYzogcGljdHVyZVxyXG4gIC8vICAgfTtcclxuXHJcbiAgICAvLyBHZXQgYSBrZXkgZm9yIGEgbmV3IFBvc3QuXHJcbiAgICAvLyB2YXIgbmV3UG9zdEtleSA9IEZiLmFwcC5wcm9wZXJ0eXNSZWYuY2hpbGQoJ3Bvc3RzJykucHVzaCgpLmtleTtcclxuXHJcbiAgICAvLyBXcml0ZSB0aGUgbmV3IHBvc3QncyBkYXRhIHNpbXVsdGFuZW91c2x5IGluIHRoZSBwb3N0cyBsaXN0IGFuZCB0aGUgdXNlcidzIHBvc3QgbGlzdC5cclxuICAvLyAgIHZhciB1cGRhdGVzID0ge307XHJcbiAgLy8gICB1cGRhdGVzWycvcG9zdHMvJyArIG5ld1Bvc3RLZXldID0gcG9zdERhdGE7XHJcbiAgLy8gICB1cGRhdGVzWycvdXNlci1wb3N0cy8nICsgdWlkICsgJy8nICsgbmV3UG9zdEtleV0gPSBwb3N0RGF0YTtcclxuICAvL1xyXG4gIC8vICAgcmV0dXJuIEZiLmFwcC5wcm9wZXJ0eXNSZWYudXBkYXRlKHVwZGF0ZXMpO1xyXG4gIC8vIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbXBhcmVUbyBpcyBuYW1lIG9mIHZhcmlhYmxlIGUuZy4gbmFtZSwgcHJpY2UsIGxvY2F0aW9uXHJcbiAgICogQHZhbHVlVG8gICBpcyB2YWx1ZSBlcXVhbCB0by4gIGUuZy4gJ3NoYXRpbidcclxuICAgKiByZXR1cm5cclxuICAgKi9cclxuICBnZXRNYXRjaFByb3BlcnR5ID0gKGlkLCBjb21wYXJlVG8sIHZhbHVlVG8gKSA9PiB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZygnbWF0Y2gnKVxyXG5cclxuICAgIC8vdGhpcy53cml0ZU5ld1Bvc3QoIDEyMzMsICdnb3Jkb24nLCAncGljdHVyZScsICd0aXRsZScsICdib2R5JylcclxuXHJcbiAgICAvLyBIYW5kbGUgbWF0Y2ggcHJvcGVydHlzXHJcbiAgICAgRmIuYXBwLnVzZXJzUmVmLm9yZGVyQnlDaGlsZChjb21wYXJlVG8pLmVxdWFsVG8odmFsdWVUbykub24oXCJjaGlsZF9hZGRlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICAgRmIuYXBwLm1hdGNoZWRQcm9wZXJ0eXNSZWYuY2hpbGQoIHNuYXAua2V5ICkuc2V0KCBzbmFwLnZhbCgpIClcclxuLy8gICAgICAgICAgRmIuYXBwLnByb3BlcnR5c1JlZi51cGRhdGUoIHsgc25hcC5rZXkgOiB7IH0gfSlcclxuICAgICAgICAgIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zZXQoIHNuYXAua2V5LCBzbmFwLnZhbCgpICk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hQcm9wZXJ0eS5zaXplJywgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemUpXHJcbiAgICAgfSk7XHJcblxyXG4gICAgIEZiLmFwcC51c2Vyc1JlZi5vcmRlckJ5Q2hpbGQoY29tcGFyZVRvKS5lcXVhbFRvKHZhbHVlVG8pLm9uKFwiY2hpbGRfcmVtb3ZlZFwiLCBmdW5jdGlvbihzbmFwKSB7XHJcblxyXG4gICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuZGVsZXRlKCBzbmFwLmtleSApO1xyXG4gICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hQcm9wZXJ0eS5zaXplJywgdGhhdC5tYXRjaGVkUHJvcGVydHlzLnNpemUpXHJcbiAgICAgfSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIHVwZGF0ZSA9IChpZCwgbmFtZSkgPT4ge1xyXG4gICAgIEZiLmFwcC5wcm9wZXJ0eXNSZWYudXBkYXRlKHtbaWRdOiB7IG5hbWUgfSB9ICApXHJcbiAgfTtcclxuXHJcbiAgZGVsID0gKGlkKSA9PiB7XHJcbiAgICBGYi5hcHAucHJvcGVydHlzUmVmLmNoaWxkKGlkKS5yZW1vdmUoKTtcclxuICAgIEZiLnByb3BlcnR5cy5jaGlsZChpZCkucmVtb3ZlKCk7XHJcbiAgICAvL3RoaXMucHJvcGVydHlzLmRlbGV0ZSggaWQgKTtcclxuICB9O1xyXG5cclxuICBAYWN0aW9uXHJcbiAgY2xlYXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnByb3BlcnR5cy5jbGVhcigpO1xyXG4gIH07XHJcblxyXG59XHJcblxyXG5jb25zdCBwcm9wZXJ0eXMgPSBuZXcgUHJvcGVydHlzVmlld01vZGVsKCk7XHJcbmV4cG9ydCB7cHJvcGVydHlzfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zdG9yZS9wcm9wZXJ0eXNWaWV3TW9kZWwuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUEvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQTlOQTs7Ozs7OztBQTZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBeUdBO0FBQ0E7QUFDQTs7Ozs7QUFJQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
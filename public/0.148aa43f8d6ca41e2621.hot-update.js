webpackHotUpdate(0,{

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.propertys = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _desc, _value, _class, _descriptor, _descriptor2, _class2, _temp, _initialiseProps;\n\nvar _mobx = __webpack_require__(440);\n\nvar _firebaseStore = __webpack_require__(808);\n\nvar _propertyhk = __webpack_require__(811);\n\nvar _property = __webpack_require__(812);\n\nvar _mobxStore = __webpack_require__(441);\n\nvar _mobxStore2 = _interopRequireDefault(_mobxStore);\n\nvar _firebase = __webpack_require__(443);\n\nvar _firebase2 = _interopRequireDefault(_firebase);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _initDefineProp(target, property, descriptor, context) {\n  if (!descriptor) return;\n  Object.defineProperty(target, property, {\n    enumerable: descriptor.enumerable,\n    configurable: descriptor.configurable,\n    writable: descriptor.writable,\n    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0\n  });\n}\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nfunction _initializerWarningHelper(descriptor, context) {\n  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');\n}\n\n// List of user properties, to be .on\n// propertyViewModel\nvar PropertysViewModel = (_class = (_temp = _class2 = function () {\n  //@observable matchedPropertys = observable.map({});\n\n  //@observable propertys = map({});\n  //@observable propertys = new Map();\n\n  function PropertysViewModel() {\n    _classCallCheck(this, PropertysViewModel);\n\n    _initialiseProps.call(this);\n\n    var that = this;\n    //var uid = MobxStore.app.uid;\n    // Mayn't need that\n    //that.propertys.clear();\n\n    //console.log('size b', this.propertys.size )\n    // Fb.app.propertysRef.on('value', (snapshot) => {\n    //   console.log( 'snapshot.val', snapshot.val());\n    //   this.propertys = snapshot.val();\n    //\n    //   console.log('size', this.propertys.size )\n    //   console.log( 'snapshot.size ', snapshot.numChildren() );\n    // });\n\n    // Fb.app.propertysRef.orderByChild(\"price\").on('child_added', (snapshot) => {\n    //   console.log( 'snapshot.val', snapshot.val());\n    //   this.propertys = snapshot.val();\n    //\n    //   //console.log('size', this.propertys.size )\n    //   console.log( 'snapshot.size ', snapshot.numChildren() );\n    // });\n\n\n    // Fb.app.matchedPropertysRef.on('value',function(snap) {\n    //      snap.forEach(function(item) {\n    //         that.matchedPropertys.set( item.key, item.val() );\n    //         //console.log( item.key, item.val() )\n    //         console.log('that.propertys.size', that.matchPpropertys.size)\n    //     });\n    // });\n\n\n    //     // Handle Child_added\n    //     if ( Fb.app.propertysRef !== undefined ) {\n    //     Fb.app.propertysRef.on('child_added', (snapshot) => {\n    //\n    //             console.log( \"fire\", snapshot.val() )\n    //             var p = new Propertyhk();\n    //\n    //            // Tobe Testing.\n    //             // p = { ...p, ...snapshot.val() }\n    //\n    //             // restore can be imppletemt  deserialize\n    //             p.restore( snapshot.val() )\n    //             console.log( 'p', p)\n    // //            console.log( 'snapddd', snapshot.val() )\n    //             // p.done = snapshot.val().done\n    //             // p.contactName = snapshot.val().contactName\n    //             // p.nameOfBuilding = snapshot.val().nameOfBuilding;\n    //             // p.location = snapshot.val().location\n    //             // p.nearByMtrLine = snapshot.val().nearByMtrLine\n    //             // p.nearByMtrStop = snapshot.val().nearByMtrStop\n    //             // p.salePrice = snapshot.val().salePrice\n    //             // p.typeTo = snapshot.val().typeTo\n    //             // p.typeBy = snapshot.val().typeBy\n    //             // p.typeFor = snapshot.val().typeFor\n    //\n    //             p.buildMatchProperty( snapshot.key, p.typeFor, p.location);\n    //\n    //             console.log( 'child_add - psvm.matchedPropertys.size', p.matchedPropertys.size );\n    //             that.propertys.set( snapshot.key, p );\n    //     });\n    //\n    //    // Handle child_removed\n    //    Fb.app.propertysRef.on('child_removed', (snapshot) => {\n    //                 that.propertys.delete( snapshot.key );\n    //                 // console.log('that.propertys.size', that.propertys.size)\n    //    });\n    //  }  // End of if null\n\n  }\n\n  _createClass(PropertysViewModel, [{\n    key: 'json',\n    get: function get() {\n      console.log('json', this.propertys);\n      return (0, _mobx.toJS)(this.propertys);\n    }\n\n    // init propertysViewModel, for mobx,\n    // can't be used inside constructor, otherwise error\n    // when app start will call an empty constructor\n\n    //\n    // addPropertyForSale = ( nearByMtrLine, nearByMtrStop, netSize, salePrice, numOfRoom, numofBathroom, contactName, contactPhone, contactEmail) =>\n    // {\n    //   var p = new Property();\n    //\n    //\n    //   p.nearByMtrLine = nearByMtrLine;\n    //   p.nearByMtrStop = nearByMtrStop;\n    //   p.netSize = parseInt(netSize);\n    //   p.salePrice = parseInt(salePrice);\n    //   p.numOfRoom = parseInt(numOfRoom);\n    //   p.numofBathroom = parseInt(numofBathroom);\n    //   p.contactName = contactName;\n    //   p.contactPhone = parseInt(contactPhone);\n    //   p.contactEmail = contactEmail;\n    //\n    //   const id = Fb.app.propertysRef.push().key;\n    //   Fb.app.propertysRef.update( {[id]:  p.serialize() });\n    // }\n    //\n    //\n    // // For testing only must create first\n    // addProperty(userName, nameOfBuilding, location, typeTo, typeBy, typeFor, price ){\n    //     var p = this.property = new Propertyhk();\n    //     p.done = false\n    //     p.contactName = userName\n    //     p.nameOfBuilding = nameOfBuilding\n    //     p.location = location\n    //     p.salePrice = parseInt(price)\n    //     p.typeTo = typeTo\n    //     p.typeBy = typeBy\n    //     p.typeFor = typeFor\n    //\n    //     const id = Fb.app.propertysRef.push().key;\n    //     Fb.app.propertysRef.update( {[id]:  p.serialize() });\n    // }\n    //\n    // writeNewPost = (uid, username, picture, title, body) => {\n    //   // A post entry.\n    //   var postData = {\n    //     author: username,\n    //     uid: uid,\n    //     body: body,\n    //     title: title,\n    //     starCount: 0,\n    //     authorPic: picture\n    //   };\n\n    // Get a key for a new Post.\n    // var newPostKey = Fb.app.propertysRef.child('posts').push().key;\n\n    // Write the new post's data simultaneously in the posts list and the user's post list.\n    //   var updates = {};\n    //   updates['/posts/' + newPostKey] = postData;\n    //   updates['/user-posts/' + uid + '/' + newPostKey] = postData;\n    //\n    //   return Fb.app.propertysRef.update(updates);\n    // }\n\n    /**\r\n     * @compareTo is name of variable e.g. name, price, location\r\n     * @valueTo   is value equal to.  e.g. 'shatin'\r\n     * return\r\n     */\n\n  }]);\n\n  return PropertysViewModel;\n}(), _initialiseProps = function _initialiseProps() {\n  var _this = this;\n\n  _initDefineProp(this, 'propertys', _descriptor, this);\n\n  _initDefineProp(this, 'init', _descriptor2, this);\n\n  this.add = function (name) {\n    var id = _firebaseStore.Fb.app.usersRef.push().key;\n    _this.update(id, name);\n  };\n\n  this.getMatchProperty = function (id, compareTo, valueTo) {\n    var that = _this;\n    console.log('match');\n\n    //this.writeNewPost( 1233, 'gordon', 'picture', 'title', 'body')\n\n    // Handle match propertys\n    _firebaseStore.Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_added\", function (snap) {\n\n      _firebaseStore.Fb.app.matchedPropertysRef.child(snap.key).set(snap.val());\n      //          Fb.app.propertysRef.update( { snap.key : { } })\n      that.matchedPropertys.set(snap.key, snap.val());\n      console.log('matchProperty.size', that.matchedPropertys.size);\n    });\n\n    _firebaseStore.Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on(\"child_removed\", function (snap) {\n\n      that.matchedPropertys.delete(snap.key);\n      console.log('matchProperty.size', that.matchedPropertys.size);\n    });\n  };\n\n  this.update = function (id, name) {\n    _firebaseStore.Fb.app.propertysRef.update(_defineProperty({}, id, { name: name }));\n  };\n\n  this.del = function (id) {\n    _firebaseStore.Fb.app.propertysRef.child(id).remove();\n    _firebaseStore.Fb.propertys.child(id).remove();\n    //this.propertys.delete( id );\n  };\n}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'propertys', [_mobx.observable], {\n  enumerable: true,\n  initializer: function initializer() {\n    return _mobx.observable.map({});\n  }\n}), _applyDecoratedDescriptor(_class.prototype, 'json', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'json'), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'init', [_mobx.action], {\n  enumerable: true,\n  initializer: function initializer() {\n    var _this2 = this;\n\n    return function () {\n      var that = _this2;\n      // Handle Child_added\n      //if ( Fb.app.propertysRef !== undefined ) {\n      _firebaseStore.Fb.app.usersRef.on('child_added', function (snapshot) {\n\n        console.log(\"fire\", snapshot.val());\n        var p = new _propertyhk.Propertyhk();\n\n        // restore can be imppletemt  deserialize\n        p.restore(snapshot.val());\n        console.log('p', p);\n\n        p.buildMatchProperty(snapshot.key, p.typeFor, p.location);\n\n        console.log('child_add - psvm.matchedPropertys.size', p.matchedPropertys.size);\n        that.propertys.set(snapshot.key, p);\n      });\n\n      // Handle child_removed\n      _firebaseStore.Fb.app.usersRef.on('child_removed', function (snapshot) {\n        that.propertys.delete(snapshot.key);\n        // console.log('that.propertys.size', that.propertys.size)\n      });\n      //}  // End of if null\n    };\n  }\n})), _class);\n\n\nvar propertys = new PropertysViewModel();\nexports.propertys = propertys;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODA3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9wcm9wZXJ0eXNWaWV3TW9kZWwuanM/YzQ0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge29ic2VydmFibGUsIGNvbXB1dGVkLCBhY3Rpb259IGZyb20gJ21vYngnO1xyXG5pbXBvcnQge0ZifSBmcm9tICdmaXJlYmFzZS1zdG9yZSc7XHJcbmltcG9ydCB7dG9KU30gZnJvbSAnbW9ieCc7XHJcbmltcG9ydCB7UHJvcGVydHloa30gZnJvbSAncHJvcGVydHloaydcclxuaW1wb3J0IHtQcm9wZXJ0eX0gZnJvbSAncHJvcGVydHknXHJcbmltcG9ydCBNb2J4U3RvcmUgZnJvbSAnbW9ieFN0b3JlJztcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlJztcclxuXHJcblxyXG4vLyBMaXN0IG9mIHVzZXIgcHJvcGVydGllcywgdG8gYmUgLm9uXHJcbi8vIHByb3BlcnR5Vmlld01vZGVsXHJcbmNsYXNzIFByb3BlcnR5c1ZpZXdNb2RlbCB7XHJcblxyXG4vLyAgQG9ic2VydmFibGUgcHJvcGVydHlzID0gb2JzZXJ2YWJsZS5tYXAoe30pO1xyXG4gIEBvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG9ic2VydmFibGUubWFwKHt9KTtcclxuICAvL0BvYnNlcnZhYmxlIG1hdGNoZWRQcm9wZXJ0eXMgPSBvYnNlcnZhYmxlLm1hcCh7fSk7XHJcblxyXG4gIC8vQG9ic2VydmFibGUgcHJvcGVydHlzID0gbWFwKHt9KTtcclxuICAvL0BvYnNlcnZhYmxlIHByb3BlcnR5cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAvL3ZhciB1aWQgPSBNb2J4U3RvcmUuYXBwLnVpZDtcclxuICAgIC8vIE1heW4ndCBuZWVkIHRoYXRcclxuICAgIC8vdGhhdC5wcm9wZXJ0eXMuY2xlYXIoKTtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKCdzaXplIGInLCB0aGlzLnByb3BlcnR5cy5zaXplIClcclxuICAgIC8vIEZiLmFwcC5wcm9wZXJ0eXNSZWYub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCAnc25hcHNob3QudmFsJywgc25hcHNob3QudmFsKCkpO1xyXG4gICAgLy8gICB0aGlzLnByb3BlcnR5cyA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgLy9cclxuICAgIC8vICAgY29uc29sZS5sb2coJ3NpemUnLCB0aGlzLnByb3BlcnR5cy5zaXplIClcclxuICAgIC8vICAgY29uc29sZS5sb2coICdzbmFwc2hvdC5zaXplICcsIHNuYXBzaG90Lm51bUNoaWxkcmVuKCkgKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIEZiLmFwcC5wcm9wZXJ0eXNSZWYub3JkZXJCeUNoaWxkKFwicHJpY2VcIikub24oJ2NoaWxkX2FkZGVkJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCAnc25hcHNob3QudmFsJywgc25hcHNob3QudmFsKCkpO1xyXG4gICAgLy8gICB0aGlzLnByb3BlcnR5cyA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgLy9cclxuICAgIC8vICAgLy9jb25zb2xlLmxvZygnc2l6ZScsIHRoaXMucHJvcGVydHlzLnNpemUgKVxyXG4gICAgLy8gICBjb25zb2xlLmxvZyggJ3NuYXBzaG90LnNpemUgJywgc25hcHNob3QubnVtQ2hpbGRyZW4oKSApO1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuICAgIC8vIEZiLmFwcC5tYXRjaGVkUHJvcGVydHlzUmVmLm9uKCd2YWx1ZScsZnVuY3Rpb24oc25hcCkge1xyXG4gICAgLy8gICAgICBzbmFwLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgLy8gICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KCBpdGVtLmtleSwgaXRlbS52YWwoKSApO1xyXG4gICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKCBpdGVtLmtleSwgaXRlbS52YWwoKSApXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aGF0LnByb3BlcnR5cy5zaXplJywgdGhhdC5tYXRjaFBwcm9wZXJ0eXMuc2l6ZSlcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbi8vICAgICAvLyBIYW5kbGUgQ2hpbGRfYWRkZWRcclxuLy8gICAgIGlmICggRmIuYXBwLnByb3BlcnR5c1JlZiAhPT0gdW5kZWZpbmVkICkge1xyXG4vLyAgICAgRmIuYXBwLnByb3BlcnR5c1JlZi5vbignY2hpbGRfYWRkZWQnLCAoc25hcHNob3QpID0+IHtcclxuLy9cclxuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coIFwiZmlyZVwiLCBzbmFwc2hvdC52YWwoKSApXHJcbi8vICAgICAgICAgICAgIHZhciBwID0gbmV3IFByb3BlcnR5aGsoKTtcclxuLy9cclxuLy8gICAgICAgICAgICAvLyBUb2JlIFRlc3RpbmcuXHJcbi8vICAgICAgICAgICAgIC8vIHAgPSB7IC4uLnAsIC4uLnNuYXBzaG90LnZhbCgpIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgLy8gcmVzdG9yZSBjYW4gYmUgaW1wcGxldGVtdCAgZGVzZXJpYWxpemVcclxuLy8gICAgICAgICAgICAgcC5yZXN0b3JlKCBzbmFwc2hvdC52YWwoKSApXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCAncCcsIHApXHJcbi8vIC8vICAgICAgICAgICAgY29uc29sZS5sb2coICdzbmFwZGRkJywgc25hcHNob3QudmFsKCkgKVxyXG4vLyAgICAgICAgICAgICAvLyBwLmRvbmUgPSBzbmFwc2hvdC52YWwoKS5kb25lXHJcbi8vICAgICAgICAgICAgIC8vIHAuY29udGFjdE5hbWUgPSBzbmFwc2hvdC52YWwoKS5jb250YWN0TmFtZVxyXG4vLyAgICAgICAgICAgICAvLyBwLm5hbWVPZkJ1aWxkaW5nID0gc25hcHNob3QudmFsKCkubmFtZU9mQnVpbGRpbmc7XHJcbi8vICAgICAgICAgICAgIC8vIHAubG9jYXRpb24gPSBzbmFwc2hvdC52YWwoKS5sb2NhdGlvblxyXG4vLyAgICAgICAgICAgICAvLyBwLm5lYXJCeU10ckxpbmUgPSBzbmFwc2hvdC52YWwoKS5uZWFyQnlNdHJMaW5lXHJcbi8vICAgICAgICAgICAgIC8vIHAubmVhckJ5TXRyU3RvcCA9IHNuYXBzaG90LnZhbCgpLm5lYXJCeU10clN0b3BcclxuLy8gICAgICAgICAgICAgLy8gcC5zYWxlUHJpY2UgPSBzbmFwc2hvdC52YWwoKS5zYWxlUHJpY2VcclxuLy8gICAgICAgICAgICAgLy8gcC50eXBlVG8gPSBzbmFwc2hvdC52YWwoKS50eXBlVG9cclxuLy8gICAgICAgICAgICAgLy8gcC50eXBlQnkgPSBzbmFwc2hvdC52YWwoKS50eXBlQnlcclxuLy8gICAgICAgICAgICAgLy8gcC50eXBlRm9yID0gc25hcHNob3QudmFsKCkudHlwZUZvclxyXG4vL1xyXG4vLyAgICAgICAgICAgICBwLmJ1aWxkTWF0Y2hQcm9wZXJ0eSggc25hcHNob3Qua2V5LCBwLnR5cGVGb3IsIHAubG9jYXRpb24pO1xyXG4vL1xyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyggJ2NoaWxkX2FkZCAtIHBzdm0ubWF0Y2hlZFByb3BlcnR5cy5zaXplJywgcC5tYXRjaGVkUHJvcGVydHlzLnNpemUgKTtcclxuLy8gICAgICAgICAgICAgdGhhdC5wcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKTtcclxuLy8gICAgIH0pO1xyXG4vL1xyXG4vLyAgICAvLyBIYW5kbGUgY2hpbGRfcmVtb3ZlZFxyXG4vLyAgICBGYi5hcHAucHJvcGVydHlzUmVmLm9uKCdjaGlsZF9yZW1vdmVkJywgKHNuYXBzaG90KSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICB0aGF0LnByb3BlcnR5cy5kZWxldGUoIHNuYXBzaG90LmtleSApO1xyXG4vLyAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoYXQucHJvcGVydHlzLnNpemUnLCB0aGF0LnByb3BlcnR5cy5zaXplKVxyXG4vLyAgICB9KTtcclxuLy8gIH0gIC8vIEVuZCBvZiBpZiBudWxsXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBAY29tcHV0ZWQgZ2V0IGpzb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnanNvbicsIHRoaXMucHJvcGVydHlzKVxyXG4gICAgcmV0dXJuIHRvSlModGhpcy5wcm9wZXJ0eXMpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIGluaXQgcHJvcGVydHlzVmlld01vZGVsLCBmb3IgbW9ieCxcclxuICAvLyBjYW4ndCBiZSB1c2VkIGluc2lkZSBjb25zdHJ1Y3Rvciwgb3RoZXJ3aXNlIGVycm9yXHJcbiAgLy8gd2hlbiBhcHAgc3RhcnQgd2lsbCBjYWxsIGFuIGVtcHR5IGNvbnN0cnVjdG9yXHJcbiAgQGFjdGlvblxyXG4gIGluaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIC8vIEhhbmRsZSBDaGlsZF9hZGRlZFxyXG4gICAgLy9pZiAoIEZiLmFwcC5wcm9wZXJ0eXNSZWYgIT09IHVuZGVmaW5lZCApIHtcclxuICAgIEZiLmFwcC51c2Vyc1JlZi5vbignY2hpbGRfYWRkZWQnLCAoc25hcHNob3QpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCBcImZpcmVcIiwgc25hcHNob3QudmFsKCkgKVxyXG4gICAgICAgICAgICB2YXIgcCA9IG5ldyBQcm9wZXJ0eWhrKCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXN0b3JlIGNhbiBiZSBpbXBwbGV0ZW10ICBkZXNlcmlhbGl6ZVxyXG4gICAgICAgICAgICBwLnJlc3RvcmUoIHNuYXBzaG90LnZhbCgpIClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdwJywgcClcclxuXHJcbiAgICAgICAgICAgIHAuYnVpbGRNYXRjaFByb3BlcnR5KCBzbmFwc2hvdC5rZXksIHAudHlwZUZvciwgcC5sb2NhdGlvbik7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ2NoaWxkX2FkZCAtIHBzdm0ubWF0Y2hlZFByb3BlcnR5cy5zaXplJywgcC5tYXRjaGVkUHJvcGVydHlzLnNpemUgKTtcclxuICAgICAgICAgICAgdGhhdC5wcm9wZXJ0eXMuc2V0KCBzbmFwc2hvdC5rZXksIHAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgLy8gSGFuZGxlIGNoaWxkX3JlbW92ZWRcclxuICAgRmIuYXBwLnVzZXJzUmVmLm9uKCdjaGlsZF9yZW1vdmVkJywgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnByb3BlcnR5cy5kZWxldGUoIHNuYXBzaG90LmtleSApO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoYXQucHJvcGVydHlzLnNpemUnLCB0aGF0LnByb3BlcnR5cy5zaXplKVxyXG4gICB9KTtcclxuIC8vfSAgLy8gRW5kIG9mIGlmIG51bGxcclxuXHJcbiAgfVxyXG5cclxuICBhZGQgPSAobmFtZSkgPT4ge1xyXG4gICAgY29uc3QgaWQgPSBGYi5hcHAudXNlcnNSZWYucHVzaCgpLmtleTtcclxuICAgIHRoaXMudXBkYXRlKGlkLCBuYW1lICk7XHJcbiAgfTtcclxuICAvL1xyXG4gIC8vIGFkZFByb3BlcnR5Rm9yU2FsZSA9ICggbmVhckJ5TXRyTGluZSwgbmVhckJ5TXRyU3RvcCwgbmV0U2l6ZSwgc2FsZVByaWNlLCBudW1PZlJvb20sIG51bW9mQmF0aHJvb20sIGNvbnRhY3ROYW1lLCBjb250YWN0UGhvbmUsIGNvbnRhY3RFbWFpbCkgPT5cclxuICAvLyB7XHJcbiAgLy8gICB2YXIgcCA9IG5ldyBQcm9wZXJ0eSgpO1xyXG4gIC8vXHJcbiAgLy9cclxuICAvLyAgIHAubmVhckJ5TXRyTGluZSA9IG5lYXJCeU10ckxpbmU7XHJcbiAgLy8gICBwLm5lYXJCeU10clN0b3AgPSBuZWFyQnlNdHJTdG9wO1xyXG4gIC8vICAgcC5uZXRTaXplID0gcGFyc2VJbnQobmV0U2l6ZSk7XHJcbiAgLy8gICBwLnNhbGVQcmljZSA9IHBhcnNlSW50KHNhbGVQcmljZSk7XHJcbiAgLy8gICBwLm51bU9mUm9vbSA9IHBhcnNlSW50KG51bU9mUm9vbSk7XHJcbiAgLy8gICBwLm51bW9mQmF0aHJvb20gPSBwYXJzZUludChudW1vZkJhdGhyb29tKTtcclxuICAvLyAgIHAuY29udGFjdE5hbWUgPSBjb250YWN0TmFtZTtcclxuICAvLyAgIHAuY29udGFjdFBob25lID0gcGFyc2VJbnQoY29udGFjdFBob25lKTtcclxuICAvLyAgIHAuY29udGFjdEVtYWlsID0gY29udGFjdEVtYWlsO1xyXG4gIC8vXHJcbiAgLy8gICBjb25zdCBpZCA9IEZiLmFwcC5wcm9wZXJ0eXNSZWYucHVzaCgpLmtleTtcclxuICAvLyAgIEZiLmFwcC5wcm9wZXJ0eXNSZWYudXBkYXRlKCB7W2lkXTogIHAuc2VyaWFsaXplKCkgfSk7XHJcbiAgLy8gfVxyXG4gIC8vXHJcbiAgLy9cclxuICAvLyAvLyBGb3IgdGVzdGluZyBvbmx5IG11c3QgY3JlYXRlIGZpcnN0XHJcbiAgLy8gYWRkUHJvcGVydHkodXNlck5hbWUsIG5hbWVPZkJ1aWxkaW5nLCBsb2NhdGlvbiwgdHlwZVRvLCB0eXBlQnksIHR5cGVGb3IsIHByaWNlICl7XHJcbiAgLy8gICAgIHZhciBwID0gdGhpcy5wcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eWhrKCk7XHJcbiAgLy8gICAgIHAuZG9uZSA9IGZhbHNlXHJcbiAgLy8gICAgIHAuY29udGFjdE5hbWUgPSB1c2VyTmFtZVxyXG4gIC8vICAgICBwLm5hbWVPZkJ1aWxkaW5nID0gbmFtZU9mQnVpbGRpbmdcclxuICAvLyAgICAgcC5sb2NhdGlvbiA9IGxvY2F0aW9uXHJcbiAgLy8gICAgIHAuc2FsZVByaWNlID0gcGFyc2VJbnQocHJpY2UpXHJcbiAgLy8gICAgIHAudHlwZVRvID0gdHlwZVRvXHJcbiAgLy8gICAgIHAudHlwZUJ5ID0gdHlwZUJ5XHJcbiAgLy8gICAgIHAudHlwZUZvciA9IHR5cGVGb3JcclxuICAvL1xyXG4gIC8vICAgICBjb25zdCBpZCA9IEZiLmFwcC5wcm9wZXJ0eXNSZWYucHVzaCgpLmtleTtcclxuICAvLyAgICAgRmIuYXBwLnByb3BlcnR5c1JlZi51cGRhdGUoIHtbaWRdOiAgcC5zZXJpYWxpemUoKSB9KTtcclxuICAvLyB9XHJcbiAgLy9cclxuICAvLyB3cml0ZU5ld1Bvc3QgPSAodWlkLCB1c2VybmFtZSwgcGljdHVyZSwgdGl0bGUsIGJvZHkpID0+IHtcclxuICAvLyAgIC8vIEEgcG9zdCBlbnRyeS5cclxuICAvLyAgIHZhciBwb3N0RGF0YSA9IHtcclxuICAvLyAgICAgYXV0aG9yOiB1c2VybmFtZSxcclxuICAvLyAgICAgdWlkOiB1aWQsXHJcbiAgLy8gICAgIGJvZHk6IGJvZHksXHJcbiAgLy8gICAgIHRpdGxlOiB0aXRsZSxcclxuICAvLyAgICAgc3RhckNvdW50OiAwLFxyXG4gIC8vICAgICBhdXRob3JQaWM6IHBpY3R1cmVcclxuICAvLyAgIH07XHJcblxyXG4gICAgLy8gR2V0IGEga2V5IGZvciBhIG5ldyBQb3N0LlxyXG4gICAgLy8gdmFyIG5ld1Bvc3RLZXkgPSBGYi5hcHAucHJvcGVydHlzUmVmLmNoaWxkKCdwb3N0cycpLnB1c2goKS5rZXk7XHJcblxyXG4gICAgLy8gV3JpdGUgdGhlIG5ldyBwb3N0J3MgZGF0YSBzaW11bHRhbmVvdXNseSBpbiB0aGUgcG9zdHMgbGlzdCBhbmQgdGhlIHVzZXIncyBwb3N0IGxpc3QuXHJcbiAgLy8gICB2YXIgdXBkYXRlcyA9IHt9O1xyXG4gIC8vICAgdXBkYXRlc1snL3Bvc3RzLycgKyBuZXdQb3N0S2V5XSA9IHBvc3REYXRhO1xyXG4gIC8vICAgdXBkYXRlc1snL3VzZXItcG9zdHMvJyArIHVpZCArICcvJyArIG5ld1Bvc3RLZXldID0gcG9zdERhdGE7XHJcbiAgLy9cclxuICAvLyAgIHJldHVybiBGYi5hcHAucHJvcGVydHlzUmVmLnVwZGF0ZSh1cGRhdGVzKTtcclxuICAvLyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBjb21wYXJlVG8gaXMgbmFtZSBvZiB2YXJpYWJsZSBlLmcuIG5hbWUsIHByaWNlLCBsb2NhdGlvblxyXG4gICAqIEB2YWx1ZVRvICAgaXMgdmFsdWUgZXF1YWwgdG8uICBlLmcuICdzaGF0aW4nXHJcbiAgICogcmV0dXJuXHJcbiAgICovXHJcbiAgZ2V0TWF0Y2hQcm9wZXJ0eSA9IChpZCwgY29tcGFyZVRvLCB2YWx1ZVRvICkgPT4ge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coJ21hdGNoJylcclxuXHJcbiAgICAvL3RoaXMud3JpdGVOZXdQb3N0KCAxMjMzLCAnZ29yZG9uJywgJ3BpY3R1cmUnLCAndGl0bGUnLCAnYm9keScpXHJcblxyXG4gICAgLy8gSGFuZGxlIG1hdGNoIHByb3BlcnR5c1xyXG4gICAgIEZiLmFwcC51c2Vyc1JlZi5vcmRlckJ5Q2hpbGQoY29tcGFyZVRvKS5lcXVhbFRvKHZhbHVlVG8pLm9uKFwiY2hpbGRfYWRkZWRcIiwgZnVuY3Rpb24oc25hcCkge1xyXG5cclxuICAgICAgICAgIEZiLmFwcC5tYXRjaGVkUHJvcGVydHlzUmVmLmNoaWxkKCBzbmFwLmtleSApLnNldCggc25hcC52YWwoKSApXHJcbi8vICAgICAgICAgIEZiLmFwcC5wcm9wZXJ0eXNSZWYudXBkYXRlKCB7IHNuYXAua2V5IDogeyB9IH0pXHJcbiAgICAgICAgICB0aGF0Lm1hdGNoZWRQcm9wZXJ0eXMuc2V0KCBzbmFwLmtleSwgc25hcC52YWwoKSApO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ21hdGNoUHJvcGVydHkuc2l6ZScsIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplKVxyXG4gICAgIH0pO1xyXG5cclxuICAgICBGYi5hcHAudXNlcnNSZWYub3JkZXJCeUNoaWxkKGNvbXBhcmVUbykuZXF1YWxUbyh2YWx1ZVRvKS5vbihcImNoaWxkX3JlbW92ZWRcIiwgZnVuY3Rpb24oc25hcCkge1xyXG5cclxuICAgICAgICAgdGhhdC5tYXRjaGVkUHJvcGVydHlzLmRlbGV0ZSggc25hcC5rZXkgKTtcclxuICAgICAgICAgY29uc29sZS5sb2coJ21hdGNoUHJvcGVydHkuc2l6ZScsIHRoYXQubWF0Y2hlZFByb3BlcnR5cy5zaXplKVxyXG4gICAgIH0pO1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICB1cGRhdGUgPSAoaWQsIG5hbWUpID0+IHtcclxuICAgICBGYi5hcHAucHJvcGVydHlzUmVmLnVwZGF0ZSh7W2lkXTogeyBuYW1lIH0gfSAgKVxyXG4gIH07XHJcblxyXG4gIGRlbCA9IChpZCkgPT4ge1xyXG4gICAgRmIuYXBwLnByb3BlcnR5c1JlZi5jaGlsZChpZCkucmVtb3ZlKCk7XHJcbiAgICBGYi5wcm9wZXJ0eXMuY2hpbGQoaWQpLnJlbW92ZSgpO1xyXG4gICAgLy90aGlzLnByb3BlcnR5cy5kZWxldGUoIGlkICk7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgcHJvcGVydHlzID0gbmV3IFByb3BlcnR5c1ZpZXdNb2RlbCgpO1xyXG5leHBvcnQge3Byb3BlcnR5c307XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RvcmUvcHJvcGVydHlzVmlld01vZGVsLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUEvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQTNOQTs7Ozs7OztBQTJGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQXlHQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})
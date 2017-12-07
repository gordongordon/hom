import { useStrict, observable, computed, action } from "mobx";
import { Fb } from "firebase-store";
import { toJS } from "mobx";
import { Property } from "property";
import MobxStore from "mobxStore";
import Status from "status";

// import moment from 'moment'

//useStrict( true );

// List of user properties, to be .on
// propertyViewModel
export class Propertyhk extends Property {
  @observable matchedPropertys = observable.map({});
  //@observable matchedPropertys = new Map();
  // responsed propertys from agent only
  @observable saleRequest = observable.map({});
  @observable buyRequest = observable.map({});
  @observable leaseRequest = observable.map({});
  @observable rentRequest = observable.map({});

  @observable saleFollow = observable.map({});
  @observable buyFollow = observable.map({});
  @observable leaseFollow = observable.map({});
  @observable rentFollow = observable.map({});
  // Use for display into the followup panel
  @observable saleCase = observable.map({});
  @observable buyCase = observable.map({});
  @observable leaseCase = observable.map({});
  @observable rentCase = observable.map({});
  @observable inDirectCall = observable.map({});

  @observable responsedPropertys = observable.map({});
  @observable showPhone = false;
  matchID;
  //@observable responsedPropertys = new Map();
  // @observable matchedPropertys = new Map();

  // @observable like = observable.map({});
  // @observable reject = observable.map({});
  // @observable view = observable.map({});

  //@observable propertys = map({});
  //@observable propertys = new Map();

  constructor(props) {
    super(props);
    this.displayPhoneNumber.bind(this);
  }

  // constructor( v ) {
  //   super( v );
  // }

  @computed
  get json() {
    return toJS(this.matchedPropertys);
  }

  @computed
  get sizeLabel() {
    if (this.typeBy === "engage") {
      // Engage we use opposite size buy vs sale, ..
      switch (this.typeTo) {
        case "buy":
          return this.saleFollow.size;
        case "sale":
          return this.buyFollow.size;
        case "lease":
          return this.rentFollow.size;
        case "rent":
          return this.leaseFollow.size;
      }
    } else {
      switch (this.typeTo) {
        case "buy":
          return this.buyRequest.size;
        case "sale":
          return this.saleRequest.size;
        case "lease":
          return this.leaseRequest.size;
        case "rent":
          return this.rentRequest.size;
      }
    }

    return 0;
  }

  /**
   * @fb firebase ref
   * @request this.saleReqeust, or rent, lease, buy
   * @typeTo
   * @typeBy 
   * return request // can be removed!since, input request
   */
  buildRequest = (fb, request, orderByChild, equalTo, id, typeTo, typeBy) => {
    const that = this;

    //debugger
    // Handle match propertys
    fb
      .orderByChild(orderByChild)
      .equalTo(equalTo)
      .on("child_added", function(snap) {
        const p = Propertyhk.deserialize(snap.val());

        request.set(snap.key, p);
        //console.log("propertyhk.child_added - request.size", request.size);
      });

    fb
      .orderByChild(orderByChild)
      .equalTo(equalTo)
      .on("child_changed", snapshot => {
        // Get an element with all functions, propertys
        // Recreate a new properts { ... }
        // otherwise propertys.responsedPropertys = undefined error

        // THis one doesn't work for this update
        // Get and
        // var p = request.get(snapshot.key);
        // p.restore(snapshot.val());
        // request.set(snapshot.key, p);

        const p = Propertyhk.deserialize(snapshot.val());
        request.set(snapshot.key, p);

        //console.log("propertyhk.child_changed - request.size", request.size);
      });

    fb
      .orderByChild(orderByChild)
      .equalTo(equalTo)
      .on("child_removed", function(snap) {
        request.delete(snap.key);
        console.log("child_removed - request.size", request.size);
      });

    return request;
  };

  @action
  buildCase() {
    const isUndefinedProperty = element =>
      element === undefined ? true : false;

    // this is filter in here
    this.saleFollow.forEach((element, key) => {
      const relatedFbid = element.relatedFbid;
      const p = this.buyRequest.get(relatedFbid);

      // Catch undefined since, you may call buildCase everywhere
      if (isUndefinedProperty(p)) {
        console.log("buyRequest undefined with key ", relatedFbid);
      } else {
        // Setup ref
        const np = Propertyhk.deserialize(p);
        np.relatedFbid = key;

        // Testing for showPhoneByCase, Case Only
        // Having to call, before any call of showPhoneByCase
        //        np.buildInDirectCallAgent( np.typeFor )
        np.buildInDirectCall();

        // p.contactName = 'kky'
        this.buyCase.set(key, np);

        // console.log( 'saleCase.size ', this.saleCase.size )
        // console.log( 'saleCase object',this.buyRequest.get( relatedFbid ) )
        // console.log( 'saleCase key', key )
      }
      // Remove followed request
      this.buyRequest.delete(relatedFbid);
      // debugger
    });

    this.buyFollow.forEach((element, key) => {
      const relatedFbid = element.relatedFbid;
      const p = this.saleRequest.get(relatedFbid);
      //p.relatedFbid = key;
      const np = Propertyhk.deserialize(p);
      np.relatedFbid = key;

      // Testing for showPhoneByCase, Case Only
      //np.buildInDirectCallAgent( np.typeFor )
      np.buildInDirectCall();

      this.saleCase.set(key, np);
      console.log("saleCase key", key);
      // Remove followed request
      this.saleRequest.delete(relatedFbid);
    });

    this.rentFollow.forEach((element, key) => {
      const relatedFbid = element.relatedFbid;
      const p = this.leaseRequest.get(relatedFbid);

      if (isUndefinedProperty(p)) {
        console.log("leaseRequest undefined with key ", relatedFbid);
      } else {
        const np = Propertyhk.deserialize(p);
        np.relatedFbid = key;

        // Testing for showPhoneByCase, Case Only
        //        np.buildInDirectCallAgent( np.typeFor )
        np.buildInDirectCall();

        this.leaseCase.set(key, np);
        console.log("leaseCase key", key);
      }
      // Remove followed request
      this.leaseRequest.delete(relatedFbid);
    });

    this.leaseFollow.forEach((element, key) => {
      const relatedFbid = element.relatedFbid;
      const p = this.rentRequest.get(relatedFbid);
      if (isUndefinedProperty(p)) {
        console.log("rentRequest undefined with key ", relatedFbid);
      } else {
        const np = Propertyhk.deserialize(p);
        np.relatedFbid = key;

        // Testing for showPhoneByCase, Case Only
        //        np.buildInDirectCallAgent( np.typeFor )
        np.buildInDirectCall();

        this.rentCase.set(key, np);
        console.log("rentCase key", key);
      }
      // Remove followed request
      this.rentRequest.delete(relatedFbid);
    });
  }

  /**
   * Let Follow is list of follow up property , e.g. saleFollow
   * Let Request is list of request property  , e.g. saleRequest
   * Let Case is list of request which was followed e.g. saleCase
   * Follow contains object which was followed from request objects
   * in order to find out all cases, I have to look over follow objects
   * and find a related fbid key in each element, then get and sign into Case Objects
   * 
   *     so, Follow.forEach( (element, key) => {
   *         Case.set( key, BuyRequest.get( element.relatedFBid)  );
   *     } ) 
   * return
   */
  @action
  buildMatchPropertyByRunTime = (id, typeTo, typeBy) => {
    const that = this;
    //var fb; // firebase ref;

    // if (typeBy === "open") {
    //   switch (typeTo) {
    //     case "lease":
    //       fb = Fb.lease;
    //       break;
    //     case "buy":
    //       fb = Fb.buy;
    //       break;
    //     case "sale":
    //       fb = Fb.sale;
    //       break;
    //     case "rent":
    //       fb = Fb.rent;
    //       break;
    //   }
    // } else if (typeBy === "engage") {
    //   switch (typeTo) {
    //     case "lease":
    //       fb = Fb.app.agentLeaseRef;
    //       break;
    //     case "buy":
    //       fb = Fb.app.agentBuyRef;
    //       break;
    //     case "sale":
    //       fb = Fb.app.agentSaleRef;
    //       break;
    //     case "rent":
    //       fb = Fb.app.agentRentRef;
    //       break;
    //   }
    // }

    console.log(
      `property.hk orderByChild ${this.orderByChild} equalTo ${this
        .equalTo} id ${this.fbid}`
    );

    // this.buildRequest( fb, that.matchedPropertys, this.orderByChild, this.equalTo, id, typeTo, typeBy );
    // Make sale request
    this.buildRequest(
      Fb.sale,
      that.saleRequest,
      this.orderByChild,
      this.equalTo,
      id,
      typeTo,
      typeBy
    );
    // Make buyt request
    this.buildRequest(
      Fb.buy,
      that.buyRequest,
      this.orderByChild,
      this.equalTo,
      id,
      typeTo,
      typeBy
    );
    // Make rent request
    this.buildRequest(
      Fb.rent,
      that.rentRequest,
      this.orderByChild,
      this.equalTo,
      id,
      typeTo,
      typeBy
    );
    // Make lease request
    this.buildRequest(
      Fb.lease,
      that.leaseRequest,
      this.orderByChild,
      this.equalTo,
      id,
      typeTo,
      typeBy
    );

    // Make sale request
    this.buildRequest(
      Fb.app.agentSaleRef,
      that.saleFollow,
      this.orderByChild,
      this.equalTo,
      id,
      typeTo,
      typeBy
    );
    // Make buyt request
    this.buildRequest(
      Fb.app.agentBuyRef,
      that.buyFollow,
      this.orderByChild,
      this.equalTo,
      id,
      typeTo,
      typeBy
    );
    // Make rent request
    this.buildRequest(
      Fb.app.agentRentRef,
      that.rentFollow,
      this.orderByChild,
      this.equalTo,
      id,
      typeTo,
      typeBy
    );
    // Make lease request
    this.buildRequest(
      Fb.app.agentLeaseRef,
      that.leaseFollow,
      this.orderByChild,
      this.equalTo,
      id,
      typeTo,
      typeBy
    );

    // Building case, once, we have request and follow
    this.buildCase();

    // // Handle match propertys
    // fb
    //   .orderByChild(this.orderByChild)
    //   .equalTo(this.equalTo)
    //   .on("child_added", function(snap) {
    //     //          if ( that.uid !== snap.val().uid ) {

    //     const p = Propertyhk.deserialize(snap.val());
    //     //p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');

    //     that.matchedPropertys.set(snap.key, p);
    //     console.log(
    //       "propertyhk.child_added - matchProperty.size",
    //       that.matchedPropertys.size
    //     );
    //     //         }
    //   });

    // fb
    //   .orderByChild(this.orderByChild)
    //   .equalTo(this.equalTo)
    //   .on("child_changed", snapshot => {
    //     // Get an element with all functions, propertys
    //     // Recreate a new properts { ... }
    //     // otherwise propertys.responsedPropertys = undefined error
    //     const p = Propertyhk.deserialize(snapshot.val());
    //     that.matchedPropertys.set(snapshot.key, p);
    //     console.log(
    //       "propertyhk.child_changed - matchProperty.size",
    //       that.matchedPropertys.size
    //     );
    //   });

    // fb
    //   .orderByChild(this.orderByChild)
    //   .equalTo(this.equalTo)
    //   .on("child_removed", function(snap) {
    //     that.matchedPropertys.delete(snap.key);
    //     console.log(
    //       "child_removed - matchProperty.size",
    //       that.matchedPropertys.size
    //     );
    //   });

    return that.matchedPropertys;
  };

  /**
   * @id property id
   * @typeFor is user to select firebase ref
   * @location is no use
   * return
   */
  @action
  buildMatchUserPropertyByRunTime = (id, typeFor, location) => {
    const that = this;
    var fb; // firebase ref;

    switch (typeFor) {
      case "lease":
        fb = Fb.lease;
        break;
      case "buy":
        fb = Fb.buy;
        break;
      case "sale":
        fb = Fb.sale;
        break;
      case "rent":
        fb = Fb.rent;
        break;
    }

    console.log(
      `property.hk orderByChild ${this.orderByChild} equalTo ${this
        .equalTo} id ${this.fbid}`
    );

    // Handle match propertys
    fb
      .orderByChild(this.orderByChild)
      .equalTo(this.equalTo)
      .on("child_added", function(snap) {
        //          if ( that.uid !== snap.val().uid ) {

        const p = Propertyhk.deserialize(snap.val());
        //p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');

        /**
         * hide it first
         */
        //console.log(`this.uid ${that.uid}, p.uid ${p.uid}`);

        // Testing set Matchid
        // set up the user filter, as matchID, so that
        // property can be found who is browsering!
        // in order to make use of status in display phone ##
        //this.setMatchID( this.fbid );
        p.buildInDirectCall();

        // skep own property, don't match it
        if (that.uid != p.uid) {
          that.matchedPropertys.set(snap.key, p);
          //           console.log( `this.uid ${that.uid}, p.uid ${p.uid}`)
        }

        /**
         * Hide it first
         */
        // console.log(
        //   "propertyhk.child_added - matchProperty.size",
        //   that.matchedPropertys.size
        // );
        //         }
      });

    fb
      .orderByChild(this.orderByChild)
      .equalTo(this.equalTo)
      .on("child_changed", snapshot => {
        // Get an element with all functions, propertys
        // Recreate a new properts { ... }
        // otherwise propertys.responsedPropertys = undefined error
        const p = Propertyhk.deserialize(snapshot.val());

        // p.buildInDirectCall();

        that.matchedPropertys.set(snapshot.key, p);
        console.log(
          "propertyhk.child_changed - matchProperty.size",
          that.matchedPropertys.size
        );
      });

    fb
      .orderByChild(this.orderByChild)
      .equalTo(this.equalTo)
      .on("child_removed", function(snap) {
        that.matchedPropertys.delete(snap.key);
        console.log(
          "child_removed - matchProperty.size",
          that.matchedPropertys.size
        );
      });

    return that.matchedPropertys;
  };

  /**
   * @compareTo is name of variable e.g. name, price, location
   * @valueTo   is value equal to.  e.g. 'shatin'
   * return
   */
  @action
  buildMatchProperty = (id, typeFor, location) => {
    const that = this;

    // Handle match propertys
    Fb.propertys
      .orderByChild("typeTo")
      .equalTo(typeFor)
      .on("child_added", function(snap) {
        //debugger
        //           if ( (location === snap.val().nameOfBuilding ) && (that.uid !== snap.val().uid) )
        if (location === snap.val().nameOfBuilding) {
          const p = Propertyhk.deserialize(snap.val());
          //p.realTime = moment().format('YYYY-MM-DD HH:mm:ss');

          that.matchedPropertys.set(snap.key, p);
          console.log(
            "child_added - matchProperty.size",
            that.matchedPropertys.size
          );
        }
      });

    Fb.propertys
      .orderByChild("typeTo")
      .equalTo(typeFor)
      .on("child_changed", snapshot => {
        // Get an element with all functions, propertys
        // Recreate a new properts { ... }
        // otherwise propertys.responsedPropertys = undefined error
        const p = Propertyhk.deserialize(snapshot.val());
        that.matchedPropertys.set(snapshot.key, p);
      });

    Fb.propertys
      .orderByChild("typeTo")
      .equalTo(typeFor)
      .on("child_removed", function(snap) {
        that.matchedPropertys.delete(snap.key);
        console.log(
          "child_removed - matchProperty.size",
          that.matchedPropertys.size
        );
      });

    return that.matchedPropertys;
  };

  /**
   * @compareTo is name of variable e.g. name, price, location
   * @valueTo   is value equal to.  e.g. 'shatin'
   * return
   */
  @action
  buildResponseProperty = (id, typeFor, location) => {
    var that = this;

    // Handle match propertys
    Fb.agentPropertys
      .orderByChild("relatedFbid")
      .equalTo(id)
      .on("child_added", function(snap) {
        // Fb.matchedPropertys.child( snap.key ).set( snap.val() )
        // Fb.propertys.update( { snap.key : { } })
        const p = Propertyhk.deserialize(snap.val());
        that.responsedPropertys.set(snap.key, p);

        console.log(
          "child_added - responsedPropertys.size",
          that.responsedPropertys.size
        );
      });

    Fb.agentPropertys
      .orderByChild("relatedFbid")
      .equalTo(typeFor)
      .on("child_changed", snapshot => {
        // Get an element with all functions, propertys
        // Recreate a new properts { ... }
        // otherwise propertys.responsedPropertys = undefined error
        const p = Propertyhk.deserialize(snapshot.val());
        that.matchedPropertys.set(snapshot.key, p);
        //console.log('child_changed snapshot.val() ',  snapshot.val() )
      });

    Fb.agentPropertys
      .orderByChild("relatedFbid")
      .equalTo(id)
      .on("child_removed", function(snap) {
        that.responsedPropertys.delete(snap.key);
        console.log(
          "child_removed - responsedPropertys.size",
          that.responsedPropertys.size
        );
      });

    return that.responsedPropertys;
  };

  /**
   * fbid is agent id
   * relatedFbid is buyer id
   * showPhone is bool of show phone
   * asssign a reference to fbid with relatedFbid, so that can be indicated a phone from other user has grant. 
   */
  @action
  setBuyInDirectCall = (fbid, relatedFbid, showPhone) => {
    let status = new Status(relatedFbid, fbid, !showPhone);

    // by using [fbid], catch all different propertys
    // Fb.root.ref('propertys/buy/' + relatedFbid + '/inDirectCall').update({ [fbid]: { fbid, relatedFbid, inDirectCall : true } });
    //  Fb.root.ref('inDirectCall/sale/').update({ [relatedFbid + '_call_'+fbid]: { subjectID : relatedFbid, objectID : fbid, inDirectCall : true } });

    Fb.root.ref("inDirectCall/buy/" + fbid).update({ [relatedFbid]: status });

    //status = this.inDirectCall.get(fbid);

    // if ( showPhone ) {
    //   let status = this.inDirectCall.get(fbid);
    //   // debugger
    //   // this.inDirectCall.delete( fbid );
    //   status.isShowPhone = !status.isShowPhone;
    //   this.inDirectCall.set(fbid, status);
    // } else {
    //   // debugger
    //   let status = new Status(relatedFbid, fbid, !showPhone);
    //   this.inDirectCall.set(fbid, status);
    // }

    // by using [fbid], catch all different propertys
    // Fb.root.ref('propertys/buy/' + relatedFbid + '/inDirectCall').update({ [fbid]: { fbid, relatedFbid, inDirectCall : true } });
    //        Fb.root.ref('inDirectCall/buy/').update({ [relatedFbid + '_call_'+fbid]: { subjectID : relatedFbid, objectID : fbid, inDirectCall : true } });

    // Fb.root.ref('inDirectCall/buy/'+ relatedFbid).update({ [fbid]: { subjectID : relatedFbid, objectID : fbid, inDirectCall : !showPhone } });
    // if ( showPhone ) {
    //           this.inDirectCall.delete( fbid );
    //         } else {

    //           this.inDirectCall.set( fbid, { subjectID : relatedFbid, objectID : fbid, inDirectCall : !showPhone });
    //         }
  };

  /**
   * fbid is agent id
   * relatedFbid is buyer id
   */
  @action
  setSaleInDirectCall = (fbid, relatedFbid, showPhone) => {
    let status = new Status(relatedFbid, fbid, !showPhone);

    // by using [fbid], catch all different propertys
    // Fb.root.ref('propertys/buy/' + relatedFbid + '/inDirectCall').update({ [fbid]: { fbid, relatedFbid, inDirectCall : true } });
    //  Fb.root.ref('inDirectCall/sale/').update({ [relatedFbid + '_call_'+fbid]: { subjectID : relatedFbid, objectID : fbid, inDirectCall : true } });

    //    Fb.root.ref("inDirectCall/sale/" + relatedFbid).update({ [fbid]: status });
    Fb.root.ref("inDirectCall/sale/" + fbid).update({ [relatedFbid]: status });

    // console.log(`inDirectCall setSaleInDirecTCall this.fbid ${this.fbid}`);
    // if (showPhone ) {
    //   let status = this.inDirectCall.get(fbid);
    //   //debugger
    //   // this.inDirectCall.delete( fbid );
    //   status.isShowPhone = !status.isShowPhone;
    //   this.inDirectCall.set(fbid, status);
    // } else {
    //   // debugger
    //   let status = new Status(relatedFbid, fbid, !showPhone);
    //   this.inDirectCall.set(fbid, status);
    // }

    // let saveStatus = this.inDirectCall.get( fbid );
  };

  // Gordno doing here
  /**
   * make sure call this before this.buildInDirectCallAgent(this.typeFor) 
   * somewehere if use showPhoneByCase();
   */
  // @computed
  // get showPhoneByCase() {
  //    const p = this.inDirectCall.get( this.fbid );
  //    if ( p && p.isShowPhone ) {
  //      return this.contactPhone;
  //    }
  //   return "no share phone"
  // }

  // @computed
  // get showPhoneStatus(){
  //   const p = this.inDirectCall.get( this.fbid );
  //   if ( p && p.isShowPhone ) {
  //     return { status : "已留電話", color : "#000", isShowPhone :  true, contactPhone : this.contactPhone };
  //   }
  //   return { status : "等待聯絡" , color : "#E67E22", isShowPhone : false, contactPhone : "no share phone"};
  // }

  // @computed
  // get showPhoneStatusMatchID(){
  //   const p = this.inDirectCall.get( this.matchID );
  //   if ( p && p.isShowPhone ) {
  //     return { status : "已留電話", color : "#000", isShowPhone :  true, contactPhone : this.contactPhone };
  //   }
  //   return { status : "等待聯絡" , color : "#E67E22", isShowPhone : false, contactPhone : "no share phone"};
  // }

  /**
   * Get Status by giving and id
   * id the property, you are matching at the inDirectCall/typeTo/selfid/id
   * this is for display single view
   */
  getStatus(id) {
    //debugger
    const that = this;
    return computed(() => {
      const p = that.inDirectCall.get(id);
      const messageWithPhone = {
        status: "已留電話",
        message: "停止! 顯示電話給對方!",
        color: "#000",
        isShowPhone: true,
        contactPhone: this.contactPhone,
        roleName: this.roleName
      };
      const messageWithOutPhone = {
        status: '留電話..',
        message: '顯示我的電話！要對方打俾我',
        color: '#E67E22',
        isShowPhone: false,
        contactPhone: 'no share phone',
        roleName: this.roleName
      };
      const isShowPhone = p => p && p.isShowPhone;
      
      //debugger
      return isShowPhone(p) ? messageWithPhone : messageWithOutPhone;
    }); // End o Computed
  }
  //@action
  /**
   * use for setting, before calling showPhoneStatusMatchID
   * this funnction should be called on every matched property
   */
  // setMatchID( id ) {
  //   this.matchID = id;
  // }

  // // used by filter
  // isShowPhone(id) {
  //   //this.buildInDirectCall();
  //   //let object;

  // //  Fb.root.ref("inDirectCall/sale/" + fbid).update({ [relatedFbid]: status });
  //   if ( this.inDirectCall.size > 0) {
  //     let object = this.inDirectCall.get(id);

  //     if ( object && object.isShowPhone )
  //      return this.showPhone = true;
  //   }

  //   return this.showPhone = false;
  // }

  /**
   * May be use later for display phone number
   * 
   */
  displayPhoneNumber = subjectID => {
    let object = this.inDirectCall.get(subjectID);

    console.log(
      `displayPhoneNumber this.fbid ${this.fbid}, typeTo ${this
        .typeTo}, inDirectCall.size ${this.inDirectCall
        .size}, subjectID ${subjectID} object ${object}`
    );
    if (object) {
      return this.contactPhone;
    }

    return "0000-0000";
  };

  /**
   * fbid is agent id
   * relatedFbid is buyer id
   */
  @action
  setRentInDirectCall = (fbid, relatedFbid, showPhone) => {
    let status = new Status(relatedFbid, fbid, !showPhone);

    // by using [fbid], catch all different propertys
    // Fb.root.ref('propertys/buy/' + relatedFbid + '/inDirectCall').update({ [fbid]: { fbid, relatedFbid, inDirectCall : true } });
    //    Fb.root.ref('inDirectCall/rent/').update({ [relatedFbid + '_call_'+fbid]: { subjectID : relatedFbid, objectID : fbid, inDirectCall : true } });
    Fb.root.ref("inDirectCall/rent/" + fbid).update({ [relatedFbid]: status });

    console.log(`inDirectCall setSaleInDirecTCall this.fbid ${this.fbid}`);
    // if (showPhone) {
    //   let status = this.inDirectCall.get(fbid);
    //   //debugger
    //   // this.inDirectCall.delete( fbid );
    //   status.isShowPhone = !status.isShowPhone;
    //   this.inDirectCall.set(fbid, status);
    // } else {
    //   //debugger
    //   let status = new Status(relatedFbid, fbid, !showPhone);
    //   this.inDirectCall.set(fbid, status);
    // }
  };

  /**
   * fbid is agent id
   * relatedFbid is buyer id
   */
  @action
  setLeaseInDirectCall = (fbid, relatedFbid, showPhone) => {
    let status = new Status(relatedFbid, fbid, !showPhone);

    // by using [fbid], catch all different propertys
    // Fb.root.ref('propertys/buy/' + relatedFbid + '/inDirectCall').update({ [fbid]: { fbid, relatedFbid, inDirectCall : true } });
    //    Fb.root.ref('inDirectCall/lease/').update({ [relatedFbid + '_call_'+fbid]: { subjectID : relatedFbid, objectID : fbid, inDirectCall : true } });
    Fb.root.ref("inDirectCall/lease/" + fbid).update({ [relatedFbid]: status });

    console.log(`inDirectCall setSaleInDirecTCall this.fbid ${this.fbid}`);
    // if (showPhone) {
    //   let status = this.inDirectCall.get(fbid);
    //   //debugger
    //   // this.inDirectCall.delete( fbid );
    //   status.isShowPhone = !status.isShowPhone;
    //   this.inDirectCall.set(fbid, status);
    // } else {
    //   //debugger
    //   let status = new Status(relatedFbid, fbid, !showPhone);
    //   this.inDirectCall.set(fbid, status);
    // }
  };

  /**
   * id is the matched property id
   */
  // setView( id ) {
  //   Fb.root.ref("inDirectCall/" + this.typeTo + "/" + this.fbid).update({ [relatedFbid]: status });
  // }

  //   setSaleInDirectCall = ( fbid, relatedFbid ) => {
  // //     id = Fb.app.usersRef.push().key;
  //     //Fb.app.usersRef.update({ [id]: p.serialize() });
  //     // Fb.sale.child('agentLeaseRef.push().key;
  //     //Fb.saleIndirectCallRef.set( { fbid, relatedFbid } );
  //     Fb.root.ref('propertys/sale/' + fbid + '/inDirectCall').update({ [fbid]: { fbid, relatedFbid } });
  //     if ( !showPhone ) {
  //       this.inDirectCall.delete( fbid );
  //     } else {
  //       this.inDirectCall.set( fbid, { subjectID : relatedFbid, objectID : fbid, inDirectCall : !showPhone });
  //     }

  //   }

  //   setInDirectCallForBuy = ( fbid, relatedFbid ) => {

  //     //const id = Fb.root.ref('propertys/buy/inDirectCall/').push().key;
  //     // working
  // //    Fb.root.ref('propertys/buy/inDirectCall/').update({ [fbid]: { fbid : fbid } });
  //     Fb.root.ref('propertys/buy/' + fbid + '/inDirectCall').update({ [fbid]: { fbid : fbid } });

  //         //Fb.root.ref('propertys/buy/inDirectCall/').child(fbid).set( { fbid, relatedFbid} )
  //             //const id = Fb.buyIndirectCallRef.push().key;
  //         // Fb.sale.child('agentLeaseRef.push().key;
  //         //Fb.buyIndirectCallRef.child(id).set( { fbid, relatedFbid } );

  //         //Fb.root.ref('inDirectCall/')
  //       }

  //  /**
  //    * Building all inDirectCall list
  //    * It read his's own firebase data at inDirectCall
  //    * this was called by user filter only.
  //    * it would't call at single view component
  //    */
  //   buildInDirectCallAgent(type) {
  //     const that = this;
  //     //this.inDirectCall.clear();
  //     // var userId = firebase.auth().currentUser.uid;
  //     // return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
  //     //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  //     //   // ...
  //     // });
  //     console.log(
  //       `inDirectCall typeFor ${type}, that.fbid ${that.fbid}, inDirectCall.size ${that
  //         .inDirectCall.size}`
  //     );

  //     Fb.root
  //     .ref("inDirectCall/" + type + "/" + this.relatedFbid)
  //     .on("child_added", function(data) {

  //       const status = new Status(
  //         data.val().subjectID,
  //         data.val().objectID,
  //         data.val().isShowPhone
  //       );
  //       that.inDirectCall.set(data.key, status);
  //       console.log(
  //         `inDirectCall typeFor ${type}, that.fbid ${that.fbid}, inDirectCall.size ${that
  //           .inDirectCall.size}`
  //       );
  //       });

  //       Fb.root
  //       .ref("inDirectCall/" + type + "/" + this.relatedFbid)
  //       .on("child_changed", function(data) {
  //         // Get an element with all functions, propertys
  //         // Recreate a new properts { ... }
  //         // otherwise propertys.responsedPropertys = undefined error
  //         //                  const p = that.matchedPropertys.get( snapshot.key )
  //         // const p = Propertyhk.deserialize(snapshot.val());
  //         // that.matchedPropertys.set(snapshot.key, p);

  //         const status = new Status(
  //           data.val().subjectID,
  //           data.val().objectID,
  //           data.val().isShowPhone
  //         );
  //         that.inDirectCall.set(data.key, status);

  //         //                  that.matchedPropertys.set( snapshot.key, { ...p, ...snapshot.val() });
  //         //console.log('child_changed snapshot.val() ',  snapshot.val() )
  //       });

  //       Fb.root
  //       .ref("inDirectCall/" + this.typeTo + "/" + this.relatedFbid)
  //       .on("child_removed", function(data) {
  //         that.inDirectCall.delete(data.key);
  //       });

  //     // Fb.root
  //     //   .ref("inDirectCall/" + this.typeTo + "/" + this.fbid)
  //     //   .once("value")
  //     //   .then(function(snapshot) {
  //     //     snapshot.forEach(data => {
  //     //       console.log(
  //     //         `inDirectCall ${data.key}, subID ${data.val()
  //     //           .subjectID}, objID ${data.val().objectID}`
  //     //       );
  //     //       const status = new Status(
  //     //         data.val().subjectID,
  //     //         data.val().objectID,
  //     //         data.val().isShowPhone
  //     //       );
  //     //       that.inDirectCall.set(data.key, status);
  //     //       console.log(
  //     //         `inDirectCall typeFor ${that.typeFor}, that.fbid ${that.fbid}, inDirectCall.size ${that
  //     //           .inDirectCall.size}`
  //     //       );
  //     //     });
  //     //     //this.inDirectCall.set( )
  //     //     //console.log( 'inDirecal', snapshot.val() );
  //     //     // this.inDirectCall.set( snapshot.val().fbid, snapshot.val() );
  //     //   });
  //     //    console.log( `inDirectCall typeFor ${this.typeFor}, key ${this.fbid}, inDirectCall.size ${that.inDirectCall.size}` );
  //   }

  /**
   * Building all inDirectCall list
   * It read his's own firebase data at inDirectCall
   * this is beginning called by user filter only. 
   * it would't call at single view component
   */
  @action
  buildInDirectCall() {
    const that = this;
    this.inDirectCall.clear();
    // var userId = firebase.auth().currentUser.uid;
    // return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    //   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   // ...
    // });
    console.log(
      `inDirectCall typeFor ${that.typeTo}, that.fbid ${that.fbid}, inDirectCall.size ${that
        .inDirectCall.size}`
    );

    Fb.root
      .ref("inDirectCall/" + this.typeTo + "/" + this.fbid)
      .on("child_added", function(data) {
        const status = new Status(
          data.val().subjectID,
          data.val().objectID,
          data.val().isShowPhone
        );
        that.inDirectCall.set(data.key, status);
        // console.log(
        //   `inDirectCall typeFor ${that.typeTo}, that.fbid ${that.fbid}, inDirectCall.size ${that
        //     .inDirectCall.size}`
        // );
      });

    Fb.root
      .ref("inDirectCall/" + this.typeTo + "/" + this.fbid)
      .on("child_changed", function(data) {
        // Get an element with all functions, propertys
        // Recreate a new properts { ... }
        // otherwise propertys.responsedPropertys = undefined error
        //                  const p = that.matchedPropertys.get( snapshot.key )
        // const p = Propertyhk.deserialize(snapshot.val());
        // that.matchedPropertys.set(snapshot.key, p);

        let status = that.inDirectCall.get(data.key);

        //status.subjectID = data.val().subjectID;
        //status.objectID = data.val().objectID;
        status.isShowPhone = data.val().isShowPhone;
        // const status = new Status(
        //   data.val().subjectID,
        //   data.val().objectID,
        //   data.val().isShowPhone
        // );

        that.inDirectCall.set(data.key, status);

        //                  that.matchedPropertys.set( snapshot.key, { ...p, ...snapshot.val() });
        //console.log('child_changed snapshot.val() ',  snapshot.val() )
      });

    Fb.root
      .ref("inDirectCall/" + this.typeTo + "/" + this.fbid)
      .on("child_removed", function(data) {
        that.inDirectCall.delete(data.key);
      });

    // Fb.root
    //   .ref("inDirectCall/" + this.typeTo + "/" + this.fbid)
    //   .once("value")
    //   .then(function(snapshot) {
    //     snapshot.forEach(data => {
    //       console.log(
    //         `inDirectCall ${data.key}, subID ${data.val()
    //           .subjectID}, objID ${data.val().objectID}`
    //       );
    //       const status = new Status(
    //         data.val().subjectID,
    //         data.val().objectID,
    //         data.val().isShowPhone
    //       );
    //       that.inDirectCall.set(data.key, status);
    //       console.log(
    //         `inDirectCall typeFor ${that.typeFor}, that.fbid ${that.fbid}, inDirectCall.size ${that
    //           .inDirectCall.size}`
    //       );
    //     });
    //     //this.inDirectCall.set( )
    //     //console.log( 'inDirecal', snapshot.val() );
    //     // this.inDirectCall.set( snapshot.val().fbid, snapshot.val() );
    //   });
    //    console.log( `inDirectCall typeFor ${this.typeFor}, key ${this.fbid}, inDirectCall.size ${that.inDirectCall.size}` );
  }

  /**
   * @compareTo is name of variable e.g. name, price, location
   * @valueTo   is value equal to.  e.g. 'shatin'
   * return
   */
  @action
  buildMatchAgentProperty = (id, typeFor, location) => {
    var that = this;

    // Handle match propertys
    Fb.propertys
      .orderByChild("typeTo")
      .equalTo(typeFor)
      .on("child_added", function(snap) {
        // Fb.matchedPropertys.child( snap.key ).set( snap.val() )
        //          Fb.propertys.update( { snap.key : { } })
        that.matchedPropertys.set(snap.key, snap.val());
        // console.log(
        //   "child_added - matchProperty.size",
        //   that.matchedPropertys.size
        // );
      });

    Fb.propertys
      .orderByChild("typeTo")
      .equalTo(typeFor)
      .on("child_changed", snapshot => {
        // Get an element with all functions, propertys
        // Recreate a new properts { ... }
        // otherwise propertys.responsedPropertys = undefined error
        //                  const p = that.matchedPropertys.get( snapshot.key )
        const p = Propertyhk.deserialize(snapshot.val());
        that.matchedPropertys.set(snapshot.key, p);

        //                  that.matchedPropertys.set( snapshot.key, { ...p, ...snapshot.val() });
        //console.log('child_changed snapshot.val() ',  snapshot.val() )
      });

    Fb.propertys
      .orderByChild("typeTo")
      .equalTo(typeFor)
      .on("child_removed", function(snap) {
        that.matchedPropertys.delete(snap.key);
        console.log(
          "child_removed - matchProperty.size",
          that.matchedPropertys.size
        );
      });

    return that.matchedPropertys;
  };

  // n is an object to be updated
  static deserialize(n) {
    var phk = new Propertyhk();

    super.deserializeObj(n, phk);
    return phk;
  }
} // End of class

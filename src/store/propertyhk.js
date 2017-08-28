import { observable, computed, action } from "mobx";
import { Fb } from "firebase-store";
import { toJS } from "mobx";
import { Property } from "property";

// import moment from 'moment'

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
  
  @observable responsedPropertys = observable.map({});
  //@observable responsedPropertys = new Map();
  // @observable matchedPropertys = new Map();

  // @observable like = observable.map({});
  // @observable reject = observable.map({});
  // @observable view = observable.map({});

  //@observable propertys = map({});
  //@observable propertys = new Map();

  constructor(props) {
    super(props);
  }

  // constructor( v ) {
  //   super( v );
  // }

  @computed
  get json() {
    return toJS(this.matchedPropertys);
  }

  /**
   * @fb firebase ref
   * @request this.saleReqeust, or rent, lease, buy
   * @typeTo
   * @typeBy 
   * return request // can be removed!since, input request
   */
  buildRequest = ( fb, request, orderByChild, equalTo, id, typeTo, typeBy) => {
    const that = this;
    
    // Handle match propertys
    fb
      .orderByChild(orderByChild)
      .equalTo(equalTo)
      .on("child_added", function(snap) {

        const p = Propertyhk.deserialize(snap.val());

        request.set(snap.key, p);
        console.log(
          "propertyhk.child_added - request.size",
          request.size
        );
      });
  
    fb
      .orderByChild(orderByChild)
      .equalTo(equalTo)
      .on("child_changed", snapshot => {
        // Get an element with all functions, propertys
        // Recreate a new properts { ... }
        // otherwise propertys.responsedPropertys = undefined error
        const p = Propertyhk.deserialize(snapshot.val());
        request.set(snapshot.key, p);
        console.log(
          "propertyhk.child_changed - request.size",
          request.size
        );
      });

    fb
      .orderByChild(orderByChild)
      .equalTo(equalTo)
      .on("child_removed", function(snap) {
        request.delete(snap.key);
        console.log(
          "child_removed - request.size",
          request.size
        );
      });

    return request;
  };

  buildCase(){
    
    this.saleFollow.forEach( (element, key) => {
      const relatedFbid = element.relatedFbid;
      const p = this.buyRequest.get( relatedFbid)

    
      if ( p === undefined ) {
        console.log('saleCase undefined with key ', relatedFbid);
      } else {
      // Setup ref
      const np = Propertyhk.deserialize(p);
      np.relatedFbid = key;   
      // p.contactName = 'kky'
      this.buyCase.set( key, np );
      // console.log( 'saleCase.size ', this.saleCase.size )
      // console.log( 'saleCase object',this.buyRequest.get( relatedFbid ) )
      // console.log( 'saleCase key', key )
      }
    });

    this.buyFollow.forEach( (element, key) => {
      const relatedFbid = element.relatedFbid;
      const p = this.saleRequest.get( relatedFbid)
      //p.relatedFbid = key;   
      const np = Propertyhk.deserialize(p);
      np.relatedFbid = key;   
      
      this.saleCase.set( key, np );
      console.log( 'buyCase key', key )
    });
    this.rentFollow.forEach( (element, key) => {
      const relatedFbid = element.relatedFbid;
      const p = this.leaseRequest.get( relatedFbid)
      const np = Propertyhk.deserialize(p);
      np.relatedFbid = key;   
      
      this.leaseCase.set( key, np );
      console.log( 'rentCase key', key )
    });
    this.leaseFollow.forEach( (element, key) => {
      const relatedFbid = element.relatedFbid;
      const p = this.rentRequest.get( relatedFbid)
      const np = Propertyhk.deserialize(p);
      np.relatedFbid = key;   
      
      this.rentCase.set( key, np );
      console.log( 'leaseCase key', key )
    });

  }

  /**
   * @compareTo is name of variable e.g. name, price, location
   * @valueTo   is value equal to.  e.g. 'shatin'
   * return
   */
  buildMatchPropertyByRunTime = (id, typeTo, typeBy) => {
    const that = this;
    var fb; // firebase ref;

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
      `property.hk orderByChild ${this.orderByChild} equalTo ${this.equalTo} id ${this.fbid}`
    );

    // this.buildRequest( fb, that.matchedPropertys, this.orderByChild, this.equalTo, id, typeTo, typeBy );
    // Make sale request
    this.buildRequest( Fb.sale, that.saleRequest, this.orderByChild, this.equalTo, id, typeTo, typeBy );
    // Make buyt request
    this.buildRequest( Fb.buy, that.buyRequest, this.orderByChild, this.equalTo, id, typeTo, typeBy );
    // Make rent request
    this.buildRequest( Fb.rent, that.rentRequest, this.orderByChild, this.equalTo, id, typeTo, typeBy );
    // Make lease request
    this.buildRequest( Fb.lease, that.leaseRequest, this.orderByChild, this.equalTo, id, typeTo, typeBy );

    // Make sale request
    this.buildRequest(  Fb.app.agentSaleRef, that.saleFollow, this.orderByChild, this.equalTo, id, typeTo, typeBy );
    // Make buyt request
    this.buildRequest(  Fb.app.agentBuyRef, that.buyFollow, this.orderByChild, this.equalTo, id, typeTo, typeBy );
    // Make rent request
    this.buildRequest(  Fb.app.agentRentRef, that.rentFollow, this.orderByChild, this.equalTo, id, typeTo, typeBy );
    // Make lease request
    this.buildRequest(  Fb.app.agentLeaseRef, that.leaseFollow, this.orderByChild, this.equalTo, id, typeTo, typeBy );
    
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

        that.matchedPropertys.set(snap.key, p);
        console.log(
          "propertyhk.child_added - matchProperty.size",
          that.matchedPropertys.size
        );
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
   * @compareTo is name of variable e.g. name, price, location
   * @valueTo   is value equal to.  e.g. 'shatin'
   * return
   */
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
        console.log(
          "child_added - matchProperty.size",
          that.matchedPropertys.size
        );
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

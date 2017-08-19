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
   * @compareTo is name of variable e.g. name, price, location
   * @valueTo   is value equal to.  e.g. 'shatin'
   * return
   */
  buildMatchPropertyByRunTime = (id, typeFor, typeBy) => {
    const that = this;
    var fb; // firebase ref;

    if (typeBy === "open" )  {
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
    } else if ( typeBy === "engage") {
      switch (typeFor) {
        case "lease":
          fb = Fb.app.agentLeaseRef;
          break;
        case "buy":
          fb = Fb.app.agentBuyRef;
          break;
        case "sale":
          fb = Fb.app.agentSaleRef;
          break;
        case "rent":
          fb = Fb.app.agentRentRef;
          break;
      }
    } 

    console.log(
      `property.hk orderByChild ${this.orderByChild} equalTo ${this.equalTo} id ${this.fbid}`
    );
    // Handle match propertys
    fb.orderByChild(this.orderByChild)
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
      `property.hk orderByChild ${this.orderByChild} equalTo ${this.equalTo} id ${this.fbid}`
    );
    // Handle match propertys
    fb.orderByChild(this.orderByChild)
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

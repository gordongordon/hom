import {observable, computed, action} from 'mobx';
import {Fb} from 'firebase-store';
import {toJS} from 'mobx';
import {Property} from 'property'

// List of user properties, to be .on
// propertyViewModel
export class Propertyhk extends Property {

  @observable matchedPropertys = observable.map({});
  // @observable matchedPropertys = new Map();

  @observable like = observable.map({});
  @observable reject = observable.map({});
  @observable view = observable.map({});


  //@observable propertys = map({});
  //@observable propertys = new Map();

  constructor() {
    super();
  }

  // constructor( v ) {
  //   super( v );
  // }

  @computed get json() {
    return toJS(this.matchedPropertys);
  }

  /**
   * @compareTo is name of variable e.g. name, price, location
   * @valueTo   is value equal to.  e.g. 'shatin'
   * return
   */
  buildMatchProperty = (id, typeFor, location ) => {
    var that = this;

    // Handle match propertys
     Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on("child_added", function(snap) {

          // Fb.matchedPropertys.child( snap.key ).set( snap.val() )
//          Fb.propertys.update( { snap.key : { } })
          that.matchedPropertys.set( snap.key, snap.val() );
          console.log('child_added - matchProperty.size', that.matchedPropertys.size)
     });

     Fb.propertys.orderByChild('typeTo').equalTo(typeFor).on("child_removed", function(snap) {

         that.matchedPropertys.delete( snap.key );
         console.log('child_removed - matchProperty.size', that.matchedPropertys.size)
     });

     return that.matchedPropertys;

  }

}

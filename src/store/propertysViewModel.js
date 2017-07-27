import {observable, computed, action} from 'mobx';
import {Fb} from 'firebase-store';
import {toJS} from 'mobx';
import {Propertyhk} from 'propertyhk'
import {Property} from 'property'
import MobxStore from 'mobxStore';
import firebase from 'firebase';


// List of user properties, to be .on
// propertyViewModel
class PropertysViewModel {

//  @observable propertys = observable.map({});
  //@observable propertys = observable.map({});
  @observable propertys = new Map();
  //@observable agentPropertys = new Map();

  //@observable matchedPropertys = observable.map({});

  //@observable propertys = map({});
  //@observable propertys = new Map();

  constructor() {
     var that = this;
  }

  @computed get json() {
    console.log('json', this.propertys)
    return toJS(this.propertys);
  }


  // init propertysViewModel, for mobx,
  // can't be used inside constructor, otherwise error
  // when app start will call an empty constructor
  @action
  init = () => {
    const that = this;
    // Handle Child_added
    //if ( Fb.app.propertysRef !== undefined ) {
    Fb.app.usersRef.on('child_added', (snapshot) => {

            //console.log( "fire", snapshot.val() )
            // var p = new Propertyhk();
            //
            // // restore can be imppletemt  deserialize
            // p.restore( snapshot.val() )
            //console.log( 'p', p)
            var p = Propertyhk.deserialize( snapshot.val() )
            console.log( 'p', p)

            p.buildMatchProperty( snapshot.key, p.typeFor, p.location);
            // Matching agent's response only
            p.buildResponseProperty( snapshot.key, p.typeFor, p.location );

            console.log( 'child_add - psvm.matchedPropertys.size', p.matchedPropertys.size );
            that.propertys.set( snapshot.key, p );
    });

   // Handle child_removed
   Fb.app.usersRef.on('child_removed', (snapshot) => {
                that.propertys.delete( snapshot.key );
                // console.log('that.propertys.size', that.propertys.size)
   });

   /**
    * allocate agent's property public for display
    */
  //  Fb.agentPropertys.on('child_added', (snapshot) => {
  //
  //          //console.log( "fire", snapshot.val() )
  //          var p = new Propertyhk();
  //
  //          // restore can be imppletemt  deserialize
  //          p.restore( snapshot.val() )
  //          //console.log( 'p', p)
  //
  //          p.buildResponseProperty( snapshot.key, p.typeFor, p.location);
  //
  //          console.log( 'child_add - psvm.matchedPropertys.size', p.responsedPropertys.size );
  //          that.agentPropertys.set( snapshot.key, p );
  //  });
  //
  // // Handle child_removed
  // Fb.agentPropertys.on('child_removed', (snapshot) => {
  //              that.agentPropertys.delete( snapshot.key );
  //              // console.log('that.propertys.size', that.propertys.size)
  // });

 }  // End of if null

  //}

  add = (name) => {
    const id = Fb.app.usersRef.push().key;
    this.update(id, name );
  };

  /**
   * @compareTo is name of variable e.g. name, price, location
   * @valueTo   is value equal to.  e.g. 'shatin'
   * return
   */
  getMatchProperty = (id, compareTo, valueTo ) => {
    var that = this;
    console.log('match')

    //this.writeNewPost( 1233, 'gordon', 'picture', 'title', 'body')

    // Handle match propertys
     Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on("child_added", function(snap) {

          Fb.app.matchedPropertysRef.child( snap.key ).set( snap.val() )
//          Fb.app.propertysRef.update( { snap.key : { } })
          that.matchedPropertys.set( snap.key, snap.val() );
          console.log('matchProperty.size', that.matchedPropertys.size)
     });

     Fb.app.usersRef.orderByChild(compareTo).equalTo(valueTo).on("child_removed", function(snap) {

         that.matchedPropertys.delete( snap.key );
         console.log('matchProperty.size', that.matchedPropertys.size)
     });


  }

  update = (id, name) => {
     Fb.app.usersRef.update({[id]: { name } }  )
  };

  del = (id) => {
    Fb.app.usersRef.child(id).remove();
    Fb.propertys.child(id).remove();
    //this.propertys.delete( id );
  };

  @action
  clear = () => {
    this.propertys.clear();
    // May not need
    //this.agentPropertys.clear();
  };


}

const propertys = new PropertysViewModel();
export {propertys};

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
  @observable propertys = observable.map({});
  //@observable matchedPropertys = observable.map({});

  //@observable propertys = map({});
  //@observable propertys = new Map();

  constructor() {
    var that = this;
    //var uid = MobxStore.app.uid;
    // Mayn't need that
    //that.propertys.clear();

    //console.log('size b', this.propertys.size )
    // Fb.app.propertysRef.on('value', (snapshot) => {
    //   console.log( 'snapshot.val', snapshot.val());
    //   this.propertys = snapshot.val();
    //
    //   console.log('size', this.propertys.size )
    //   console.log( 'snapshot.size ', snapshot.numChildren() );
    // });

    // Fb.app.propertysRef.orderByChild("price").on('child_added', (snapshot) => {
    //   console.log( 'snapshot.val', snapshot.val());
    //   this.propertys = snapshot.val();
    //
    //   //console.log('size', this.propertys.size )
    //   console.log( 'snapshot.size ', snapshot.numChildren() );
    // });


    // Fb.app.matchedPropertysRef.on('value',function(snap) {
    //      snap.forEach(function(item) {
    //         that.matchedPropertys.set( item.key, item.val() );
    //         //console.log( item.key, item.val() )
    //         console.log('that.propertys.size', that.matchPpropertys.size)
    //     });
    // });


//     // Handle Child_added
//     if ( Fb.app.propertysRef !== undefined ) {
//     Fb.app.propertysRef.on('child_added', (snapshot) => {
//
//             console.log( "fire", snapshot.val() )
//             var p = new Propertyhk();
//
//            // Tobe Testing.
//             // p = { ...p, ...snapshot.val() }
//
//             // restore can be imppletemt  deserialize
//             p.restore( snapshot.val() )
//             console.log( 'p', p)
// //            console.log( 'snapddd', snapshot.val() )
//             // p.done = snapshot.val().done
//             // p.contactName = snapshot.val().contactName
//             // p.nameOfBuilding = snapshot.val().nameOfBuilding;
//             // p.location = snapshot.val().location
//             // p.nearByMtrLine = snapshot.val().nearByMtrLine
//             // p.nearByMtrStop = snapshot.val().nearByMtrStop
//             // p.salePrice = snapshot.val().salePrice
//             // p.typeTo = snapshot.val().typeTo
//             // p.typeBy = snapshot.val().typeBy
//             // p.typeFor = snapshot.val().typeFor
//
//             p.buildMatchProperty( snapshot.key, p.typeFor, p.location);
//
//             console.log( 'child_add - psvm.matchedPropertys.size', p.matchedPropertys.size );
//             that.propertys.set( snapshot.key, p );
//     });
//
//    // Handle child_removed
//    Fb.app.propertysRef.on('child_removed', (snapshot) => {
//                 that.propertys.delete( snapshot.key );
//                 // console.log('that.propertys.size', that.propertys.size)
//    });
//  }  // End of if null



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

            console.log( "fire", snapshot.val() )
            var p = new Propertyhk();

            // restore can be imppletemt  deserialize
            p.restore( snapshot.val() )
            console.log( 'p', p)

            p.buildMatchProperty( snapshot.key, p.typeFor, p.location);

            console.log( 'child_add - psvm.matchedPropertys.size', p.matchedPropertys.size );
            that.propertys.set( snapshot.key, p );
    });

   // Handle child_removed
   Fb.app.usersRef.on('child_removed', (snapshot) => {
                that.propertys.delete( snapshot.key );
                // console.log('that.propertys.size', that.propertys.size)
   });
 //}  // End of if null

  }

  add = (name) => {
    const id = Fb.app.usersRef.push().key;
    this.update(id, name );
  };
  //
  // addPropertyForSale = ( nearByMtrLine, nearByMtrStop, netSize, salePrice, numOfRoom, numofBathroom, contactName, contactPhone, contactEmail) =>
  // {
  //   var p = new Property();
  //
  //
  //   p.nearByMtrLine = nearByMtrLine;
  //   p.nearByMtrStop = nearByMtrStop;
  //   p.netSize = parseInt(netSize);
  //   p.salePrice = parseInt(salePrice);
  //   p.numOfRoom = parseInt(numOfRoom);
  //   p.numofBathroom = parseInt(numofBathroom);
  //   p.contactName = contactName;
  //   p.contactPhone = parseInt(contactPhone);
  //   p.contactEmail = contactEmail;
  //
  //   const id = Fb.app.propertysRef.push().key;
  //   Fb.app.propertysRef.update( {[id]:  p.serialize() });
  // }
  //
  //
  // // For testing only must create first
  // addProperty(userName, nameOfBuilding, location, typeTo, typeBy, typeFor, price ){
  //     var p = this.property = new Propertyhk();
  //     p.done = false
  //     p.contactName = userName
  //     p.nameOfBuilding = nameOfBuilding
  //     p.location = location
  //     p.salePrice = parseInt(price)
  //     p.typeTo = typeTo
  //     p.typeBy = typeBy
  //     p.typeFor = typeFor
  //
  //     const id = Fb.app.propertysRef.push().key;
  //     Fb.app.propertysRef.update( {[id]:  p.serialize() });
  // }
  //
  // writeNewPost = (uid, username, picture, title, body) => {
  //   // A post entry.
  //   var postData = {
  //     author: username,
  //     uid: uid,
  //     body: body,
  //     title: title,
  //     starCount: 0,
  //     authorPic: picture
  //   };

    // Get a key for a new Post.
    // var newPostKey = Fb.app.propertysRef.child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
  //   var updates = {};
  //   updates['/posts/' + newPostKey] = postData;
  //   updates['/user-posts/' + uid + '/' + newPostKey] = postData;
  //
  //   return Fb.app.propertysRef.update(updates);
  // }

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
     Fb.app.propertysRef.update({[id]: { name } }  )
  };

  del = (id) => {
    Fb.app.propertysRef.child(id).remove();
    Fb.propertys.child(id).remove();
    //this.propertys.delete( id );
  };
}

const propertys = new PropertysViewModel();
export {propertys};

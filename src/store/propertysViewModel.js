import {observable, computed, action} from 'mobx';
import {Fb} from 'firebase-store';
import {toJS} from 'mobx';
import {Propertyhk} from 'propertyhk'
import {Property} from 'property'

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

    // Mayn't need that
    //that.propertys.clear();

    //console.log('size b', this.propertys.size )
    // Fb.propertys.on('value', (snapshot) => {
    //   console.log( 'snapshot.val', snapshot.val());
    //   this.propertys = snapshot.val();
    //
    //   console.log('size', this.propertys.size )
    //   console.log( 'snapshot.size ', snapshot.numChildren() );
    // });

    // Fb.propertys.orderByChild("price").on('child_added', (snapshot) => {
    //   console.log( 'snapshot.val', snapshot.val());
    //   this.propertys = snapshot.val();
    //
    //   //console.log('size', this.propertys.size )
    //   console.log( 'snapshot.size ', snapshot.numChildren() );
    // });


    // Fb.matchedPropertys.on('value',function(snap) {
    //      snap.forEach(function(item) {
    //         that.matchedPropertys.set( item.key, item.val() );
    //         //console.log( item.key, item.val() )
    //         console.log('that.propertys.size', that.matchPpropertys.size)
    //     });
    // });

    // Handle Child_added
    Fb.propertys.on('child_added', (snapshot) => {

            console.log( "fire", snapshot.val() )
            var p = new Propertyhk();

           // Tobe Testing.
            p = { ...p, ...snapshot.val() }
            //console.log( 'p', p)
//            console.log( 'snapddd', snapshot.val() )
            // p.done = snapshot.val().done
            // p.contactName = snapshot.val().contactName
            // p.nameOfBuilding = snapshot.val().nameOfBuilding;
            // p.location = snapshot.val().location
            // p.nearByMtrLine = snapshot.val().nearByMtrLine
            // p.nearByMtrStop = snapshot.val().nearByMtrStop
            // p.salePrice = snapshot.val().salePrice
            // p.typeTo = snapshot.val().typeTo
            // p.typeBy = snapshot.val().typeBy
            // p.typeFor = snapshot.val().typeFor

            p.buildMatchProperty( snapshot.key, p.typeFor, p.location);
            that.propertys.set( snapshot.key, p );
    });

   // Handle child_removed
   Fb.propertys.on('child_removed', (snapshot) => {
                that.propertys.delete( snapshot.key );
                // console.log('that.propertys.size', that.propertys.size)
   });

  // Fb.propertys.orderByChild('location').equalTo('shatin').on("child_added", function(snap) {
  //                that.matchedPropertys.set( snap.key, snap.val() );
  //                console.log('matchProperty.size', that.matchedPropertys.size)
  // });
  //
  // Fb.propertys.orderByChild('location').equalTo('shatin').on("child_removed", function(snap) {
  //                that.matchedPropertys.set( snap.key, snap.val() );
  //                console.log('matchProperty.size', that.matchedPropertys.size)
  // });


   //
  //  // Handle match propertys
  //  Fb.propertys.on('value',function(snap) {
  //       snap.forEach(function(item) {
  //       that.matchedPropertys.set( item.key, item.val() );
  //       //console.log( item.key, item.val() )
  //       console.log('that.propertys.size', that.matchPpropertys.size)
  //       });
  // });


    // // Handle child_removedw
    // Fb.propertys.orderByChild("price").on('child_removed', (snapshot) => {
    //           //snap.forEach(function(item) {
    //          that.propertys.delete( snapshot.key );
    //                      //console.log( item.key, item.val() )
    //                      console.log('that.propertys.size', that.propertys.size)
    //                  });


    // Fb.propertys.on('value',function(snap) {
    //     snap.forEach(function(item) {
    //         that.propertys.set( item.key, item.val() );
    //         //console.log( item.key, item.val() )
    //         console.log('that.propertys.size', that.propertys.size)
    //     });
    // });

    // setTimeout(function(){
    //      console.log('this.propertys.size', that.propertys.size)
    // }, 5000);

    // var Todos = observable.map({
    //     'rf8r4': {id: 'rf8r4', description: 'Get milk'},
    //     '543w4': {id: '543w4', description: 'Code in MobX'},
    //     '099i0': {id: '099i0', description: 'Sleep'}
    // })
    //
    // console.log('todos.size', Todos.size)
  }

  @computed get json() {
    console.log('json', this.propertys)
    return toJS(this.propertys);
  }


  add = (name) => {
    const id = Fb.propertys.push().key;
    this.update(id, name );
  };

  addPropertyForSale = ( nearByMtrLine, nearByMtrStop, netSize, salePrice, numOfRoom, numofBathroom, contactName, contactPhone, contactEmail) =>
  {
    var p = new Property();


    p.nearByMtrLine = nearByMtrLine;
    p.nearByMtrStop = nearByMtrStop;
    p.netSize = parseInt(netSize);
    p.salePrice = parseInt(salePrice);
    p.numOfRoom = parseInt(numOfRoom);
    p.numofBathroom = parseInt(numofBathroom);
    p.contactName = contactName;
    p.contactPhone = parseInt(contactPhone);
    p.contactEmail = contactEmail;

    const id = Fb.propertys.push().key;
    Fb.propertys.update( {[id]:  p.serialize() });
  }


  // For testing only must create first
  addProperty(userName, nameOfBuilding, location, typeTo, typeBy, typeFor, price ){
      var p = this.property = new Propertyhk();
      p.done = false
      p.contactName = userName
      p.nameOfBuilding = nameOfBuilding
      p.location = location
      p.salePrice = parseInt(price)
      p.typeTo = typeTo
      p.typeBy = typeBy
      p.typeFor = typeFor

      const id = Fb.propertys.push().key;
      Fb.propertys.update( {[id]:  p.serialize() });
  }

  writeNewPost = (uid, username, picture, title, body) => {
    // A post entry.
    var postData = {
      author: username,
      uid: uid,
      body: body,
      title: title,
      starCount: 0,
      authorPic: picture
    };

    // Get a key for a new Post.
    var newPostKey = Fb.propertys.child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return Fb.propertys.update(updates);
  }




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
     Fb.propertys.orderByChild(compareTo).equalTo(valueTo).on("child_added", function(snap) {

          Fb.matchedPropertys.child( snap.key ).set( snap.val() )
//          Fb.propertys.update( { snap.key : { } })
          that.matchedPropertys.set( snap.key, snap.val() );
          console.log('matchProperty.size', that.matchedPropertys.size)
     });

     Fb.propertys.orderByChild(compareTo).equalTo(valueTo).on("child_removed", function(snap) {

         that.matchedPropertys.delete( snap.key );
         console.log('matchProperty.size', that.matchedPropertys.size)
     });


  }


  // likeProperty = (id)
  // rejectProperty()
  // viewProperty()

  update = (id, name) => {
     Fb.propertys.update({[id]: { name } }  )
  };

  del = (id) => {
    Fb.propertys.child(id).remove();
    //this.propertys.delete( id );
  };
}

const propertys = new PropertysViewModel();
export {propertys};

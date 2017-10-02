import React from 'react'
//import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
//import { createForm } from 'rc-form';
 import moment from 'moment';
// import 'moment/locale/zh-cn';
//import {propertys} from 'userModelView'
import SingleLeasePropertyForMatchView from '../singlePropertyView/singleLeasePropertyForMatchView'

import { observer } from 'mobx-react';
//const Item = List.Item;
//const Brief = Item.Brief;

const NameOfBuilding = [
  { value: 'MOSDBC', label: '迎海' },
  { value: 'MOSCTO', label: '第一城' },
  { value: 'MOSSSC', label: '新港城' },
];

@observer
export class ListOfMatchLeasePropertys extends React.Component {

  constructor(props) {
    super(props)
  }

  display = ( propertys ) => {
    const list = propertys;
    
    const isListEmpty = list => list.size === 0 ? true : null ; 
    
    // Catched empty list, don't do anything!
    if ( isListEmpty( list ) ) {
       return null;
    }
    

     // Try to show most uptoday item only
     var element = [];

     const timeEnter = this.props.timeEnter;
     const c = moment( timeEnter );

    list.forEach( (property, keyID) => {
       //var c = moment.utc().format('YYYY-MM-DD HH:mm:ss');
       const a = moment( property.createdAt,'YYYY-MM-DD HH:mm:ss' );
       const b = moment(a, 'YYYY-MM-DD HH:mm:ss');

       console.log( 'a ', a)
       console.log( 'b ', b)
       console.log( 'c ', c)

       if ( b >= c ) {
         //console.log( b > c)
       element.push(
           <SingleLeasePropertyForMatchView property={property} key={keyID}/>
         )
       }

    })

     return <div>{element.reverse()}</div>
  }


  render() {
        const {propertys} = this.props;
        const that = this;

    return (
      <div>
      {
         that.display( propertys )
      }
     </div>);
  }
}

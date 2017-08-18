import React from 'react'
//import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
//import { createForm } from 'rc-form';
import moment from 'moment';
//import 'moment/locale/zh-cn';
//import {propertys} from 'propertysViewModel'
import {SingleSalePropertyForMatchViewWrapper} from '../singlePropertyView/singleSalePropertyForMatchView'
import { observer } from 'mobx-react';
//const Item = List.Item;
//const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
export class ListOfMatchOldSalePropertys extends React.Component {

  constructor(props) {
    super(props)
  }

  display = ( propertys ) => {
     const list = propertys;
     // Catched empty list, don't do anything!
     if ( list.size === 0 )
     {
        return null;
     }

     const timeEnter = this.props.timeEnter;
     // Try to show most uptoday item only
     var element = [];

    list.forEach( (property, keyID) => {

       element.push(
           <SingleSalePropertyForMatchViewWrapper property={property} key={keyID} timeEnter={timeEnter}/>
         )
       } );

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
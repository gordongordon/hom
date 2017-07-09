import React from 'react'
import { List , Card, SwipeAction, Stepper, Picker, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl } from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {propertys} from 'propertysViewModel'
import { observer } from 'mobx-react';

const Item = List.Item;
const Brief = Item.Brief;

const BUILDING_NAME = {
   'MOSDBC' : '迎海',
   'MOSCTO' : '第一城',
   'MOSSSC' : '新港城'
}
const NameOfBuilding = [
  { value: 'MOSDBC', label: '迎海' },
  { value: 'MOSCTO', label: '第一城' },
  { value: 'MOSSSC', label: '新港城' },
];

@observer
export class ListOfPropertysView extends React.Component {

  onClick = ( key ) => {
    console.log( key )
  }


  /**
   * model is propertysViewModel, use to handle all functions , e.g. del
   * propertys is list of propertys for this user
   * h is a callback to handle next route wiht keyID
   */
  renderPropertys = ( model, propertys, h ) => {

    var list = propertys;
    const that = this;

    console.log( 'list size ', list.size )
     var element= [];
     list.forEach( (property, keyID) => element.push(
       <SwipeAction
         style={{ backgroundColor: 'gray' }}
         autoClose
         right={[
           {
             text: 'Cancel',
             onPress: () => console.log('cancel'),
             style: { backgroundColor: '#ddd', color: 'white' },
           },
           {
             text: 'Delete',
             onPress: () => model.del(keyID) ,
             style: { backgroundColor: '#F4333C', color: 'white' },
           },
         ]}
         left={[
           {
             text: 'Reply',
             onPress: () => console.log('reply'),
             style: { backgroundColor: '#108ee9', color: 'white' },
           },
           {
             text: 'Cancel',
             onPress: () => console.log('cancel'),
             style: { backgroundColor: '#ddd', color: 'white' },
           },
         ]}
         onOpen={() => console.log('global open')}
         onClose={() => console.log('global close')}
       >
       <Item  arrow="horizontal" onClick={ () => { h( keyID) } } multipleLine extra={<div>租金${property.leasePrice}</div>}租金>
          { BUILDING_NAME[property.nameOfBuilding] }<Brief>實用面積{ property.netSize }</Brief>
       </Item>
     </SwipeAction>
     ) )
     return <div>{element}</div>
  }

  render() {

    const that = this;
    var {handleNextProperty} = this.props;

    return (
      <List renderHeader={() => '你搜尋嘅樓盤'} className="my-list">
         { that.renderPropertys( propertys, propertys.propertys, handleNextProperty) }
      </List>
    )
  }
}

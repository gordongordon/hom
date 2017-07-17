import React from 'react'
import { List , NoticeBar , Icon, Card, SwipeAction, Stepper, Picker, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl } from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {propertys} from 'propertysViewModel'
import { observer } from 'mobx-react';
import {withRouter} from "react-router-dom";
import MobxStore from 'mobxStore';
import views from 'views';

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

  hhc = ( keyID ) => {
      this.props.history.push("/front?", keyID);
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
     list.forEach( (property, keyID) => {
           if ( property.typeTo === 'lease' ) {
       element.push(
         <div key={keyID}>
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
       <Item  arrow="horizontal" onClick={ () => MobxStore.router.goTo( views.matchLease, {keyID} ) } multipleLine extra={<div>租金${property.leasePrice}</div>}>
          { BUILDING_NAME[property.nameOfBuilding] }/{property.typeTo}<Brief>實用面積{ property.netSize }呎</Brief> {keyID}
       </Item>
       </SwipeAction>
     </div>
     ) }  // end of lease


     if ( property.typeTo === 'rent' ) {
 element.push(
   <div key={keyID}>
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
 <Item  arrow="horizontal" onClick={  () => MobxStore.router.goTo( views.matchRent, {keyID} ) } multipleLine extra={<div>租金上限${property.rentBudgetMax}</div>} >
    { BUILDING_NAME[property.nameOfBuilding] }/{property.typeTo}<Brief>最少{ property.netSizeMin }呎實用面積</Brief> {keyID}
 </Item>
 </SwipeAction></div>
) }  // end of rent
if ( property.typeTo === 'buy' ) {
element.push(
<div key={keyID}>
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
<Item  arrow="horizontal" onClick={  () => MobxStore.router.goTo( views.matchBuy, {keyID} ) } multipleLine extra={<div>預算上限${property.buyBudgetMax}萬</div>} >
  { BUILDING_NAME[property.nameOfBuilding] }/{property.typeTo}<Brief>最少 {property.netSizeMin }呎實用面積</Brief> {keyID}
</Item>
</SwipeAction></div>
) }  // end of buy

if ( property.typeTo === 'sale' ) {
element.push(
<div key={keyID}>
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
<Item  arrow="horizontal" onClick={  () => MobxStore.router.goTo( views.matchSale, {keyID} ) } multipleLine extra={<div>售價${property.salePrice}萬</div>} >
{ BUILDING_NAME[property.nameOfBuilding] }/{property.typeTo}<Brief>實用面積:{ property.netSize }呎</Brief> {keyID}
</Item>
</SwipeAction></div>
) }  // end of sale




     })
     return <div>{element}</div>
  }

  render() {

    //console.log( "title", this.props.title)
    const {store} = this.props;

    console.log( 'list of properys view .store', store)


    const that = this;
    var {handleNextProperty} = this.props;

    return (
      <div>
        <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
          以下是你的過往配對!
        </NoticeBar>
      <List renderHeader={() => '你搜尋嘅樓盤'} className="my-list">
         { that.renderPropertys( propertys, propertys.propertys, handleNextProperty) }
      </List>
    </div>
    )
  }
}

import React from 'react'
import {  NoticeBar,List , Card, Stepper, Icon, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import {propertys} from 'userModelView'
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
import {ControlLeaseViewWrapper} from '../control/controlLeaseView'
//import {SingleRentPropertyForMatchViewWrapper} from 'singleRentPropertyForMatchView'
//import {ListOfMatchPropertys} from 'listOfMatch/listOfMatchPropertys'
import ListOfMatchAgentRentPropertys from '../listOfMatch/listOfMatchAgentRentPropertys'
import {ListOfMatchOldRentPropertys} from '../listOfMatch/listOfMatchOldRentPropertys'
import { observer } from 'mobx-react';
import MobxStore from 'mobxStore';

// const Item = List.Item;
// const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
export default class MatchLeasePanelView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
    }
  }

  onChange = (e) => {
    console.log( 'onChange in matchRentPanelView')
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    this.setState( {
      selectedSegmentIndex : e.nativeEvent.selectedSegmentIndex
    })

  }

  // onValueChange = (value) => {
  //   console.log(value);
  // }

  renderList = ( property ) => {
    if ( this.state.selectedSegmentIndex === 0 ) {
      return <ListOfMatchAgentRentPropertys segment="response" filter={property} propertys={property.responsedPropertys} timeEnter={this.props.timeEnter}/>
    } else {
        // testing calling this at running time.
        //property.buildMatchProperty( property.fbid, property.typeFor, property.nameOfBuilding);
      return  <ListOfMatchOldRentPropertys filter={property} inDirectCall={property.inDirectCall}  propertys={property.matchedPropertys}/>
    }
  }

  renderNoticeBarMessage = () => {
    if ( this.state.selectedSegmentIndex === 0 ) {
      return <div>群發信息現正開始: 以下是 Mr.House ... 超新鮮回覆請等待!</div>
    } else {
      return <div>  以下是 Mr.House 為你配對嘅客!</div>
    }
  }

  render() {
        var property = propertys.propertys.get(MobxStore.router.params.keyID );

        console.log( 'store.params.keyID', MobxStore.router.params.keyID )
        console.log( 'matchLeasePanelView property', property )

        if ( propertys === undefined ) {
          console.log( 'check error in userModelView without reference after has been modified')
        }


    return (
      <div>
        <ControlLeaseViewWrapper property={property} selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange.bind(this)} />
    <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
      { this.renderNoticeBarMessage() }
    </NoticeBar>
    <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
      所有查詢即時回覆! 保證最新鮮...
    </NoticeBar>

    <WhiteSpace size="sm" />
      {this.renderList( property )}

    </div>);
  }
}
  // <ListOfMatchPropertys propertys={property.matchedPropertys} />
//export const MatchLeasePanelViewWrapper = createForm()(MatchLeasePanelView);

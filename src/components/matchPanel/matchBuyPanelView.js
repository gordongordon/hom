import React from 'react'
import {  NoticeBar,List , Card, Stepper, Icon, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import {propertys} from 'userModelView';
import {agentModel} from 'agentModelView';
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
//import {SingleRentPropertyForMatchViewWrapper} from 'singleRentPropertyForMatchView'
import {ControlBuyViewWrapper} from '../control/controlBuyView';

//import {ListOfMatchSalePropertys} from '../listOfMatch/listOfMatchSalePropertys'
import {ListOfMatchOldSalePropertys} from '../listOfMatch/listOfMatchOldSalePropertys';
import ListOfMatchAgentSalePropertys from '../listOfMatch/listOfMatchAgentSalePropertys';
import { observer } from 'mobx-react';
import MobxStore from 'mobxStore';
//import FormSaleChatbot from '../chatbot/formSaleChatbot';

// const Item = List.Item;
// const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
export default class MatchBuyPanelView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
    }
  }

  onChange = (e) => {
    console.log( 'onChange in matchSalePanelView')
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    this.setState( {
      selectedSegmentIndex : e.nativeEvent.selectedSegmentIndex
    })

  }

  // onValueChange = (value) => {
  //   console.log(value);
  // }
//  <ListOfMatchSalePropertys propertys={property.matchedPropertys} timeEnter={this.props.timeEnter}/>

  renderList = ( property ) => {
    if ( this.state.selectedSegmentIndex === 0 ) {
      return <div>
               <ListOfMatchAgentSalePropertys segment="response" filter={property} propertys={property.responsedPropertys}/>
            </div>
    } else {
      return   <ListOfMatchOldSalePropertys filter={property} inDirectCall={property.inDirectCall} propertys={property.matchedPropertys}/>
    }
  }

  renderNoticeBarMessage = () => {
    if ( this.state.selectedSegmentIndex === 0 ) {
      return <div>群發信息現正開始: 以下是 HoMatching ... 超新鮮回覆請等待!</div>
    } else {
      return <div>  以下是 HoMatching 為你配對嘅客!</div>
    }
  }


  render() {
//        var property = propertys.propertys.get(this.props.keyID);
//        var property = propertys.propertys.get("-Kof2Ki5bbvt5MS2QJMG");
    var property = propertys.propertys.get(MobxStore.router.params.keyID );

    //console.log( 'keyID', this.props.keyID )
    // console.log( 'store.queryParams.keyID', store.router.queryParams.keyID )
    console.log( 'store.params.keyID', MobxStore.router.params.keyID )

    console.log( 'matchPanelView property', property )
    // console.log( 'matchPanelView propertys.size', propertys.propertys.size )
    // console.log( 'matchPanelView matched propertys', property.matchedPropertys.size)
    // const that = this;
    // const { getFieldProps } = this.props.form;
    // const minDate = moment().locale('zh-cn').utcOffset(8);
    // const maxDate = moment(minDate).add(6, 'M');
    if ( propertys === undefined ) {
      console.log( 'check error in userModelView without reference after has been modified')
    }


    return (
      <div>
        <ControlBuyViewWrapper property={property} selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange.bind(this)} />

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
// export const MatchBuyPanelViewWrapper = createForm()(MatchBuyPanelView);

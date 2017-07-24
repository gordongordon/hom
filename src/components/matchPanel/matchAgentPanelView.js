import React from 'react'
import {  NoticeBar,List , Card, Stepper, Icon, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import {propertysAgent} from 'propertysAgentViewModel'
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
//import {SingleRentPropertyForMatchViewWrapper} from 'singleRentPropertyForMatchView'
//import {ControlAgentViewWrapper} from '../control/controlAgentView'

import {ListOfMatchAgentPropertyView} from '../listOfMatch/listOfMatchAgentPropertyView'
import {ListOfAgentPropertysView} from '../listOfMatch/listOfAgentPropertysView'
import { observer } from 'mobx-react';
import MobxStore from 'mobxStore';

const Item = List.Item;
const Brief = Item.Brief;

const NameOfBuilding = [
  { value: 'MOSDBC', label: '迎海' },
  { value: 'MOSCTO', label: '第一城' },
  { value: 'MOSSSC', label: '新港城' },
];

@observer
class MatchAgentPanelView extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
    }
  }



  onChange = (e) => {
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    this.setState( {
      selectedSegmentIndex : e.nativeEvent.selectedSegmentIndex
    })

  }

  onValueChange = (value) => {
    console.log(value);
  }

  renderList = () => {
    if ( this.state.selectedSegmentIndex === 1 ) {
      return <ListOfAgentPropertysView />
    } else {
      return     <ListOfMatchAgentPropertyView />
    }
  }

  render() {
    const { getFieldProps } = this.props.form;
    //var property = propertysAgent.propertys.get(MobxStore.router.params.keyID );

    //console.log( 'keyID', this.props.keyID )
    // console.log( 'store.queryParams.keyID', store.router.queryParams.keyID )
    //console.log( 'store.params.keyID', MobxStore.router.params.keyID )

    //console.log( 'matchPanelView property', property )

    return (
      <div>
    <SegmentedControl values={['等待回覆樓盤','已跟進']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />
      <List>
            <Picker data={NameOfBuilding} cols={1} {...getFieldProps('nameOfBuilding', {
                initialValue: ['MOSDBC'],
              })} className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑">
              <List.Item arrow="horizontal">購買物業</List.Item>
            </Picker>
            <List.Item extra={
             <Stepper
               style={{ width: '100%', minWidth: '2rem' }}
               {...getFieldProps('buyBudgetMax', {
                 initialValue: 300
               })}
               showNumber
               max={100000}
               min={100}
               step={5}
             />}
           >
           預算上限/萬
           </List.Item>
          </List>


    <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
      以下是 HoMatching 為你配對嘅客!
    </NoticeBar>
    <WhiteSpace size="sm" />
    {this.renderList()}
    </div>);
  }
}
  // <ListOfMatchPropertys propertys={property.matchedPropertys} />
export const MatchAgentPanelViewWrapper = createForm()(MatchAgentPanelView);
    // <ListOfMatchSalePropertys propertys={property.matchedPropertys} />

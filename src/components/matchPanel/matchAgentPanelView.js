import React from 'react'
import {  NoticeBar,List , Card, Stepper, Icon, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import {agentModel} from 'agentModelView'
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
//import {SingleRentPropertyForMatchViewWrapper} from 'singleRentPropertyForMatchView'
//import {ControlAgentViewWrapper} from '../control/controlAgentView'

import {ListOfMatchAgentPropertyView} from '../listOfMatch/listOfMatchAgentPropertyView'
import {ListOfAgentPropertysView} from '../listOfMatch/listOfAgentPropertysView'
import { observer } from 'mobx-react';
import MobxStore from 'mobxStore';
import {DISTRICK} from 'DISTRICK'
//
// const Item = List.Item;
// const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', padding: '0 0.3rem' }}
  >
    <div style={{ display: 'flex', height: '0.9rem', lineHeight: '0.9rem' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888' }}>{props.extra}</div>
    </div>
  </div>
);

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
    //var property = agentModel.propertys.get(MobxStore.router.params.keyID );

    //console.log( 'keyID', this.props.keyID )
    // console.log( 'store.queryParams.keyID', store.router.queryParams.keyID )
    //console.log( 'store.params.keyID', MobxStore.router.params.keyID )

    //console.log( 'matchPanelView property', property )

//    <List.Item arrow="horizontal">大廈/屋苑</List.Item>


    return (
      <div>
    <SegmentedControl values={['等待回覆樓盤','已跟進']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />
      <List>
        <Picker data={DISTRICK} cols={3} {...getFieldProps('districk', {
            initialValue: ['NTTV','MOS','MOS0001'],
          })} className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑"
            onChange={ () => console.log('Picker on change') }
          >
          <CustomChildren>大廈/屋苑</CustomChildren>
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
      以下是 HoMatching ... 超新鮮回覆請等待嘅客!
    </NoticeBar>
    <WhiteSpace size="sm" />
    {this.renderList()}
    </div>);
  }
}
  // <ListOfMatchPropertys propertys={property.matchedPropertys} />
export const MatchAgentPanelViewWrapper = createForm()(MatchAgentPanelView);
    // <ListOfMatchSalePropertys propertys={property.matchedPropertys} />

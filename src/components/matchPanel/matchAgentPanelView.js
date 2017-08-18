import React from 'react'
import { TabBar, NoticeBar, List, Card, Stepper, Icon, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl } from 'antd-mobile';
import { createForm } from 'rc-form';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import { agentModel } from 'agentModelView'
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
//import {SingleRentPropertyForMatchViewWrapper} from 'singleRentPropertyForMatchView'
import { ControlAgentViewWrapper } from '../control/controlAgentView'

import { ListOfMatchAgentBuyPropertys } from '../listOfMatch/listOfMatchAgentBuyPropertys'
import { ListOfMatchAgentSalePropertys } from '../listOfMatch/listOfMatchAgentSalePropertys'
import { ListOfMatchAgentRentPropertys } from '../listOfMatch/listOfMatchAgentRentPropertys'
import { ListOfMatchAgentLeasePropertys } from '../listOfMatch/listOfMatchAgentLeasePropertys'

import { ListOfAgentPropertysView } from '../listOfMatch/listOfAgentPropertysView'
import { ListOfMatchAgentPropertysView } from '../listOfMatch/listOfMatchAgentPropertysView'
import { observer } from 'mobx-react';
import MobxStore from 'mobxStore';
import { DISTRICK } from 'DISTRICK'
import { Fb } from 'firebase-store'
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


const typeForString = {
  '0': 'sale',
  '1': 'buy',
  '2': 'lease',
  '3': 'rent',
}

@observer
class MatchAgentPanelView extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
      id: MobxStore.router.params.keyID,
      selectedTab: 'redTab',
      hidden: false
    };

    this.onChange = this.onChange.bind(this);
    // this.onChangeEarlyTimeToView = this.onChangeEarlyTimeToView.bind(this);

  } // End of constructor



  onChange = (e) => {
    e.preventDefault();
    const index = e.nativeEvent.selectedSegmentIndex;
    console.log(`MatchAgentPanelView. selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
    this.setState({
      selectedSegmentIndex: index
    })

    console.log('MatchAgentPanelView typeForString', typeForString[index]);
    if (index <= 3) {
      Fb.app.agentsFilterRef.child(this.state.id).update({ typeFor: typeForString[index] });
    }

  }

  onValueChange = (value) => {
    console.log(value);
  }

  renderList = (property) => {

    const index = this.state.selectedSegmentIndex;

    if (index === 0) {
      return <ListOfMatchAgentSalePropertys propertys={property.matchedPropertys} />
    } else if (index === 1) {
      return <ListOfMatchAgentBuyPropertys propertys={property.matchedPropertys} />
    } else if (index === 2) {
      return <ListOfMatchAgentLeasePropertys propertys={property.matchedPropertys} />
    } else if (index === 3) {
      return <ListOfMatchAgentRentPropertys propertys={property.matchedPropertys} />
    }

    return <ListOfMatchAgentPropertysView />
  }




  render() {

    var property = agentModel.filters.get(MobxStore.router.params.keyID);

    console.log('matchAgentPanelView->store.params.keyID', MobxStore.router.params.keyID)
    console.log('matchAgentPanelView property', property)

    return (
      <div>
        <ControlAgentViewWrapper property={property} selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />

        <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
          以下是 HoMatching ... 超新鮮回覆請等待嘅客!
       </NoticeBar>
        <WhiteSpace size="sm" />

        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Buy"
            key="生活"
            icon={<div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat'
            }}
            />
            }

            selectedIcon={<div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderList(property)}
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type="koubei-o" size="md" />}
            selectedIcon={<Icon type="koubei" size="md" />}
            title="Sale"
            key="口碑"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderList(property)}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat'
              }}
              />
            }
            title="Lease"
            key="朋友"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderList(property)}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="Rent"
            key="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderList(property)}

          </TabBar.Item>
        </TabBar>



      </div>);


  }
}
// <ListOfMatchPropertys propertys={property.matchedPropertys} />
export const MatchAgentPanelViewWrapper = createForm()(MatchAgentPanelView);
    // <ListOfMatchSalePropertys propertys={property.matchedPropertys} />

import React from "react";
import {
  TabBar,
  NoticeBar,
  List,
  Card,
  Stepper,
  Icon,
  Picker,
  SwipeAction,
  DatePicker,
  Badge,
  Flex,
  InputItem,
  WhiteSpace,
  Button,
  SegmentedControl
} from "antd-mobile";
import { createForm } from "rc-form";
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import { agentModel } from "agentModelView";
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
//import {SingleRentPropertyForMatchViewWrapper} from 'singleRentPropertyForMatchView'
import { ControlAgentViewWrapper } from "../control/controlAgentView";

import { ListOfMatchAgentBuyPropertys } from "../listOfMatch/listOfMatchAgentBuyPropertys";
import { ListOfMatchAgentSalePropertys } from "../listOfMatch/listOfMatchAgentSalePropertys";
import { ListOfMatchAgentRentPropertys } from "../listOfMatch/listOfMatchAgentRentPropertys";
import { ListOfMatchAgentLeasePropertys } from "../listOfMatch/listOfMatchAgentLeasePropertys";

import { ListOfAgentPropertysView } from "../listOfMatch/listOfAgentPropertysView";
import { ListOfMatchAgentPropertysView } from "../listOfMatch/listOfMatchAgentPropertysView";
import { observer } from "mobx-react";
import MobxStore from "mobxStore";
import { DISTRICK } from "DISTRICK";
import { Fb } from "firebase-store";
import views from "views";

// const Item = List.Item;
// const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

// 如果不是使用 List.Item 作为 children
const CustomChildren = props =>
  <div
    onClick={props.onClick}
    style={{ backgroundColor: "#fff", padding: "0 0.3rem" }}
  >
    <div style={{ display: "flex", height: "0.9rem", lineHeight: "0.9rem" }}>
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}
      >
        {props.children}
      </div>
      <div style={{ textAlign: "right", color: "#888" }}>
        {props.extra}
      </div>
    </div>
  </div>;

const typeForString = {
  "0": "sale",
  "1": "buy",
  "2": "lease",
  "3": "rent"
};

@observer
class MatchAgentPanelView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
      selectedTabBar: 0,
      id: MobxStore.router.params.keyID,
      selectedTab: "buy",
      hidden: false
    };

    this.onChange = this.onChange.bind(this);
    this.renderList = this.renderList.bind(this);
    // this.onChangeEarlyTimeToView = this.onChangeEarlyTimeToView.bind(this);
  } // End of constructor

  onChange = e => {
    e.preventDefault();
    const index = e.nativeEvent.selectedSegmentIndex;
    console.log(
      `MatchAgentPanelView. selectedIndex:${e.nativeEvent.selectedSegmentIndex}`
    );
    this.setState({
      selectedSegmentIndex: index
    });

    // console.log('MatchAgentPanelView typeForString', typeForString[index]);
     if (index === 1) {
       Fb.app.agentsFilterRef.child(this.state.id).update({ typeTo: 'engage'});
     } else {
       Fb.app.agentsFilterRef.child(this.state.id).update({ typeTo: 'open'});
     }
  };

  onValueChange = value => {
    console.log(value);
  };

  renderList = property => {
    const index = this.state.selectedTabBar;

    // debugger
    // Fb.app.agentsFilterRef.child(this.state.id).update({ typeFor: typeForString[index] });

    if (index === 0) {
      return (
        <ListOfMatchAgentSalePropertys propertys={property.matchedPropertys} />
      );
    } else if (index === 1) {
      return (
        <ListOfMatchAgentBuyPropertys propertys={property.matchedPropertys} />
      );
    } else if (index === 2) {
      return (
        <ListOfMatchAgentLeasePropertys propertys={property.matchedPropertys} />
      );
    } else if (index === 3) {
      return (
        <ListOfMatchAgentRentPropertys propertys={property.matchedPropertys} />
      );
    }

    return <ListOfMatchAgentPropertysView />;
  };

  render() {
    var property = agentModel.filters.get(MobxStore.router.params.keyID);

    console.log(
      "matchAgentPanelView->store.params.keyID",
      MobxStore.router.params.keyID
    );
    console.log("matchAgentPanelView property", property);
    // this.setState({
    //   selectedTab : property.typeFor
    // })

    return (
      <div>
        <ControlAgentViewWrapper
          property={property}
          selectedIndex={this.state.selectedSegmentIndex}
          onChange={this.onChange}
        />

        <NoticeBar
          mode="closable"
          icon={<Icon type="check-circle-o" size="xxs" />}
        >
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
            title="Filter"
            key="kkyr"
            icon={{
              uri: "http://hair.losstreatment.com/icons/filter-up.svg"
            }}
            selectedIcon={{
              uri: "http://hair.losstreatment.com/icons/filter-down.svg"
            }}
            selected={this.state.selectedTab === "filter"}
            badge={agentModel.filters.size}
            onPress={() => {
              this.setState({
                selectedTab: "filter"
              });
              MobxStore.router.goTo(views.listAgent);
            }}
            data-seed="logId0"
          />

          <TabBar.Item
            title="搵買盤"
            key="生活"
            icon={{
              uri: "http://hair.losstreatment.com/icons/building-up.svg"
            }}
            selectedIcon={{
              uri: "http://hair.losstreatment.com/icons/building-blue-down.svg"
            }}
            selected={this.state.selectedTab === "buy"}
            badge={property.matchedPropertys.size}
            onPress={() => {
              this.setState({
                selectedTab: "buy",
                selectedTabBar: 0
              });
              Fb.app.agentsFilterRef
                .child(this.state.id)
                .update({ typeFor: typeForString[0] });
            }}
            data-seed="logId"
          >
            {this.renderList(property)}
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type="koubei-o" />}
            selectedIcon={<Icon type="koubei" />}
            title="放賣盤"
            key="口碑"
            badge={"new"}
            selected={this.state.selectedTab === "sale"}
            onPress={() => {
              this.setState({
                selectedTab: "sale",
                selectedTabBar: 1
              });
              Fb.app.agentsFilterRef
                .child(this.state.id)
                .update({ typeFor: typeForString[1] });
            }}
            data-seed="logId1"
          >
            {this.renderList(property)}
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri: "http://hair.losstreatment.com/icons/rent-down.svg"
            }}
            selectedIcon={{
              uri: "http://hair.losstreatment.com/icons/rent-up.svg"
            }}
            title="搵租盤"
            key="朋友"
            dot
            selected={this.state.selectedTab === "lease"}
            onPress={() => {
              this.setState({
                selectedTab: "lease",
                selectedTabBar: 2
              });
              Fb.app.agentsFilterRef
                .child(this.state.id)
                .update({ typeFor: typeForString[2] });
            }}
          >
            {this.renderList(property)}
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
            }}
            selectedIcon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
            }}
            title="'放租盤"
            key="我的"
            selected={this.state.selectedTab === "rent"}
            onPress={() => {
              this.setState({
                selectedTab: "rent",
                selectedTabBar: 3
              });
              Fb.app.agentsFilterRef
                .child(this.state.id)
                .update({ typeFor: typeForString[3] });
            }}
          >
            {this.renderList(property)}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
// <ListOfMatchPropertys propertys={property.matchedPropertys} />
export const MatchAgentPanelViewWrapper = createForm()(MatchAgentPanelView);
// <ListOfMatchSalePropertys propertys={property.matchedPropertys} />

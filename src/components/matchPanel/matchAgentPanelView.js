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
} from 'antd-mobile';
import { createForm } from 'rc-form';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import { agentModel } from 'agentModelView';
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
//import {SingleRentPropertyForMatchViewWrapper} from 'singleRentPropertyForMatchView'
import { ControlAgentViewWrapper } from "../control/controlAgentView";

import ListOfMatchAgentBuyPropertys from "../listOfMatch/listOfMatchAgentBuyPropertys";
import ListOfMatchAgentSalePropertys from "../listOfMatch/listOfMatchAgentSalePropertys";
import ListOfMatchAgentRentPropertys from "../listOfMatch/listOfMatchAgentRentPropertys";
import ListOfMatchAgentLeasePropertys from "../listOfMatch/listOfMatchAgentLeasePropertys";

import ListOfAgentPropertysView from "../listOfMatch/listOfAgentPropertysView";
import { ListOfMatchAgentPropertysView } from "../listOfMatch/listOfMatchAgentPropertysView";
import { observer } from "mobx-react";
import MobxStore from "mobxStore";
import { DISTRICK } from "DISTRICK";
import { Fb } from "firebase-store";
import views from "views";

// import Loadable from 'react-loadable';

// function MyLoadingComponent() {
//   return <div>Loading...</div>;
// }

// const LoadableAnotherComponent = Loadable({
//   loader: () => import('../singlePropertyView/singleSaleUserMatchView'),
//   LoadingComponent: MyLoadingComponent
// });



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

// const typeForString = {
//   "0": "sale",
//   "1": "buy",
//   "2": "lease",
//   "3": "rent"
// };

const typeForString = ["sale","buy","lease", "rent" ];

@observer
class MatchAgentPanelView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      selectedSegmentIndex: MobxStore.router.params.selectedSegmentIndex,
//      selectedTabBar: 0,
      id: MobxStore.router.params.keyID,
      selectedTab: MobxStore.router.params.typeTo,
      hidden: false,
      saleCounter : 0,
      buyCounter : 0,
      leaseCounter : 0,
      rentCounter : 0
    };

    // Handle when goTo with selectedSegmentIndex been changed, other wise out of syn
    // console.log('MatchAgentPanelView typeForString', typeForString[index]);
    if ( this.state.selectedSegmentIndex === 1 ) {
      Fb.app.agentsFilterRef.child(this.state.id).update({ typeBy: 'engage'});
    } else {
      Fb.app.agentsFilterRef.child(this.state.id).update({ typeBy: 'open'});
    }
 
    // Fb.app.agentsFilterRef
    // .child(this.state.id)
    // .update({ typeFor: typeForString[0],
    //           typeTo : "buy" 
    //         });


    // Handle goTo From any form 
    switch ( this.state.selectedTab ) {
      case 'buy'  :  Fb.app.agentsFilterRef.child(this.state.id).update({ typeFor: typeForString[0], typeTo : "buy" });
      break;
      case 'sale' :  Fb.app.agentsFilterRef.child(this.state.id).update({ typeFor: typeForString[1], typeTo : "sale" });
      break;
      case 'rent' :  Fb.app.agentsFilterRef.child(this.state.id).update({ typeFor: typeForString[2], typeTo : "rent" });
      break;
      case 'lease' :  Fb.app.agentsFilterRef.child(this.state.id).update({ typeFor: typeForString[3], typeTo : "lease" });
      break;
    }    
    

    //debugger
    this.onChange = this.onChange.bind(this);
    this.renderList = this.renderList.bind(this);
    // this.onChangeEarlyTimeToView = this.onChangeEarlyTimeToView.bind(this);
  } // End of constructor

  onChange = e => {
    e.preventDefault();
    const index = e.nativeEvent.selectedSegmentIndex;
    // console.log(
    //   `MatchAgentPanelView. selectedIndex:${e.nativeEvent.selectedSegmentIndex}`
    // );
    this.setState({
      selectedSegmentIndex: index
    });

    // console.log('MatchAgentPanelView typeForString', typeForString[index]);
     if (index === 1) {
       Fb.app.agentsFilterRef.child(this.state.id).update({ typeBy: 'engage'});
     } else {
       Fb.app.agentsFilterRef.child(this.state.id).update({ typeBy: 'open'});
     }
  };

  onValueChange = value => {
    console.log(value);
  };


  /**
   * Render Match list of agent propertys
   */
  renderList = filter => {
    const selectedTab = this.state.selectedTab;
    //debugger
    // debugger
    // Fb.app.agentsFilterRef.child(this.state.id).update({ typeFor: typeForString[index] });
    if (this.state.selectedSegmentIndex === 0 ) {
    switch ( selectedTab ) {
      case 'buy' : return <ListOfMatchAgentBuyPropertys segment="filter" filter={filter} propertys={filter.buyRequest} filterID={MobxStore.router.params.keyID}/>;
      break;
      case 'sale': return <ListOfMatchAgentSalePropertys  segment="filter" filter={filter} propertys={filter.saleRequest} filterID={MobxStore.router.params.keyID}/>;
      break;
      case 'rent': return <ListOfMatchAgentRentPropertys segment="filter" filter={filter} propertys={filter.rentRequest} filterID={MobxStore.router.params.keyID}/>;
      break;
      case 'lease': return <ListOfMatchAgentLeasePropertys segment="filter" filter={filter} propertys={filter.leaseRequest} filterID={MobxStore.router.params.keyID}/>;
      break;
    } } else {
      switch ( selectedTab ) {
        case 'buy' : return <ListOfMatchAgentBuyPropertys segment="case" filter={filter} propertys={filter.buyCase} filterID={MobxStore.router.params.keyID}/>;
        break;
        case 'sale': return <ListOfMatchAgentSalePropertys segment="case" filter={filter} propertys={filter.saleCase} filterID={MobxStore.router.params.keyID}/>;
        break;
        case 'rent': return <ListOfMatchAgentRentPropertys segment="case" filter={filter} propertys={filter.rentCase} filterID={MobxStore.router.params.keyID}/>;
        break;
        case 'lease': return <ListOfMatchAgentLeasePropertys segment="case" filter={filter} propertys={filter.leaseCase} filterID={MobxStore.router.params.keyID}/>;
        break;
      }  
      // switch ( selectedTab ) {
      //   case 'buy' : return <ListOfMatchAgentBuyPropertys propertys={filter.buyFollow} filterID={MobxStore.router.params.keyID}/>;
      //   break;
      //   case 'sale': return <ListOfMatchAgentSalePropertys propertys={filter.saleFollow} filterID={MobxStore.router.params.keyID}/>;
      //   break;
      //   case 'rent': return <ListOfMatchAgentRentPropertys propertys={filter.rentFollow} filterID={MobxStore.router.params.keyID}/>;
      //   break;
      //   case 'lease': return <ListOfMatchAgentLeasePropertys propertys={filter.leaseFollow} filterID={MobxStore.router.params.keyID}/>;
      //   break;
      // }  
    }

    // while out this , which means switch dont' matched! 
    return <ListOfMatchAgentPropertysView />;
  };

  render() {
    const filter = agentModel.filters.get(MobxStore.router.params.keyID);

    /**
     * Try to catch the delay whle Follow beginning update. 
     * without this, engage propertys, wan't be display
     * 
     */
    // filter.buildCase();

    // console.log(
    //   "matchAgentPanelView->store.params.keyID",
    //   MobxStore.router.params.keyID
    // );
//    console.log("matchAgentPanelView property", filter);
    // this.setState({
    //   selectedTab : property.typeFor
    // })

    return (
      <div>
        <ControlAgentViewWrapper
          property={filter}
          selectedIndex={this.state.selectedSegmentIndex}
          onChange={this.onChange}
        />
        <WhiteSpace size="sm" />
        
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
          barTintColor="white"npm 
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="篩 選"
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
            title="買 家"
            key="生活"
            icon={{
              uri: "http://hair.losstreatment.com/icons/building-up.svg"
            }}
            selectedIcon={{
              uri: "http://hair.losstreatment.com/icons/building-blue-down.svg"
            }}
            selected={this.state.selectedTab === "buy"}
            badge={ this.state.selectedSegmentIndex === 0? filter.buyRequest.size : filter.saleFollow.size }
            onPress={() => {
              this.setState({
                selectedTab: "buy",
 //               selectedTabBar: 0
              });
              Fb.app.agentsFilterRef
                .child(this.state.id)
                .update({ typeFor: typeForString[0],
                          typeTo : "buy" 
                        });
            }}
            data-seed="logId"
          >
            {this.renderList(filter)}
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type="koubei-o" />}
            selectedIcon={<Icon type="koubei" />}
            title="業 主"
            key="口碑"
            badge={ this.state.selectedSegmentIndex === 0? filter.saleRequest.size : filter.buyFollow.size }
            selected={this.state.selectedTab === "sale"}
            onPress={() => {
              this.setState({
                selectedTab: "sale",
                //selectedTabBar: 1
              });
              Fb.app.agentsFilterRef
                .child(this.state.id)
                .update({ typeFor: typeForString[1],
                  typeTo : "sale"  });
            }}
            data-seed="logId1"
          >
            {this.renderList(filter)}
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri: "http://hair.losstreatment.com/icons/rent-down.svg"
            }}
            selectedIcon={{
              uri: "http://hair.losstreatment.com/icons/rent-up.svg"
            }}
            title="租 客"
            key="朋友"
            badge={ this.state.selectedSegmentIndex === 0? filter.rentRequest.size : filter.leaseFollow.size }
            selected={this.state.selectedTab === "rent"}
            onPress={() => {
              this.setState({
                selectedTab: "rent",
              //  selectedTabBar: 2
              });
              Fb.app.agentsFilterRef
                .child(this.state.id)
                .update({ typeFor: typeForString[2],
                  typeTo : "rent" 
                 });
            }}
          >
            {this.renderList(filter)}
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
            title="房 東"
            key="我的"
            selected={this.state.selectedTab === 'lease'}
            badge={ this.state.selectedSegmentIndex === 0? filter.leaseRequest.size : filter.rentFollow.size }
            onPress={() => {
              this.setState({
                selectedTab: 'lease',
            //    selectedTabBar: 3
              });
              Fb.app.agentsFilterRef
                .child(this.state.id)
                .update({ typeFor: typeForString[3],
                  typeTo : 'lease'  });
            }}
          >
            {this.renderList(filter)}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
// <ListOfMatchPropertys propertys={property.matchedPropertys} />
export const MatchAgentPanelViewWrapper = createForm()(MatchAgentPanelView);
// <ListOfMatchSalePropertys propertys={property.matchedPropertys} />

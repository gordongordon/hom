import React from "react";
//import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
//import { createForm } from 'rc-form';
//import moment from "moment";
//import 'moment/locale/zh-cn';
//import {propertys} from 'userModelView'
//import SingleSalePropertyForMatchView from '../singlePropertyView/singleSalePropertyForMatchView'
import { SingleSaleUserMatchViewWrapper } from "../singlePropertyView/singleSaleUserMatchView";
import { inject, observer } from "mobx-react";
//const Item = List.Item;
//const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@inject("store")
@observer
export class ListOfMatchOldSalePropertys extends React.Component {
  constructor(props) {
    super(props);
  }

  display = propertys => {
    const list = propertys;
    // Catched empty list, don't do anything!
    if (list.size === 0) {
      return null;
    }

    //const timeEnter = this.props.timeEnter;
    // Try to show most uptoday item only
    var element = [];
    //           <SingleSalePropertyForMatchView property={property} key={keyID} timeEnter={timeEnter}/>
    //           <SingleSaleAgentPropertyForRespondView property={property} key={keyID} timeEnter={timeEnter}/>

    list.forEach((property, keyID) => {
      let status = this.props.inDirectCall.get(keyID);
      // console.log( 'this.props.store.router.params.keyID',this.props.store.router.params.keyID )
      // let showPhone = false;
      // if (status) {
      //   console.log("call ", status.isShowPhone);
      //   showPhone = status.isShowPhone;
      // }

      //     debugger
      element.push(
        <SingleSaleUserMatchViewWrapper
          filter={this.props.filter}
          status={status}
          property={property}
          key={keyID}
        />
      );
    });

  return (<div>{element.reverse()}</div>);
  };

  render() {
    const { propertys } = this.props;
    const that = this;

  return (<div>{that.display(propertys)}</div>);
  }

  // render() {
  //   const { propertys } = this.props;
  //   const that = this;

  //   return <div>{that.display(propertys)}</div>;
  // }
}

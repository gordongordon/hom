import React from "react";
//import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
//import { createForm } from 'rc-form';
//import moment from 'moment';
//import 'moment/locale/zh-cn';
//import {propertys} from 'userModelView'
import { SingleSaleUserMatchViewWrapper } from "../singlePropertyView/singleSaleUserMatchView";
import SingleSaleAgentFilterView from "../singlePropertyView/singleSaleAgentFilterView";
import SingleSaleCaseView from "../singlePropertyView/singleSaleCaseView";
import { SingleSaleAgentRespondViewWrapper } from "../singlePropertyView/singleSaleAgentRespondView";

import { observer } from "mobx-react";
//const Item = List.Item;
//const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
export class ListOfMatchAgentSalePropertys extends React.Component {
  constructor(props) {
    super(props);
  }

  display = propertys => {
    const list = propertys;
    // Catched empty list, don't do anything!
    if (list.size === 0) {
      return null;
    }

    // Try to show most uptoday item only
    var element = [];

    //  const timeEnter = this.props.timeEnter;
    //  const c = moment( timeEnter );

    list.forEach((p, keyID) => {
      const segment = this.props.segment;

      if (segment === "case") {
        element.push(
          <SingleSaleCaseView
            property={p}
            key={keyID}
            filterID={this.props.filterID}
          />
        );
      } else if (segment === "filter") {
        element.push(
          <SingleSaleAgentFilterView
            property={p}
            key={keyID}
            filterID={this.props.filterID}
          />
        );
      } else if (segment === "response") {
        element.push(
          <SingleSaleAgentRespondViewWrapper
            filter={this.props.filter}
            property={p}
            key={keyID}
            filterID={this.props.filterID}
          />
        );
      } else {
        element.push(
          <SingleSaleUserMatchViewWrapper
            filter={this.props.filter}
            property={p}
            key={keyID}
            filterID={this.props.filterID}
          />
        );
      }
    });

    return <div>{element.reverse()}</div>;
  };

  render() {
    const { propertys } = this.props;
    const that = this;

  return (<div>{that.display(propertys)}</div>);
  }
}

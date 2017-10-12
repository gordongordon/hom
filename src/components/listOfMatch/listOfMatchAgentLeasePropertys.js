import React from "react";
//import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
//import { createForm } from 'rc-form';
//import moment from 'moment';
//import 'moment/locale/zh-cn';
//import {propertys} from 'userModelView'
import { SingleLeaseUserMatchViewWrapper } from "../singlePropertyView/singleLeaseUserMatchView";
import SingleLeaseAgentFilterView from "../singlePropertyView/singleLeaseAgentFilterView";
import SingleLeaseCaseView from "../singlePropertyView/singleLeaseCaseView";
import { observer } from "mobx-react";
import { SingleLeaseAgentRespondViewWrapper } from "../singlePropertyView/singleLeaseAgentRespondView";
import PropTypes from 'prop-types';

//const Item = List.Item;
//const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
export default class ListOfMatchAgentLeasePropertys extends React.Component {
  constructor(props) {
    super(props);
  }

  display = propertys => {
    // debugger
    const list = propertys;
    // Catched empty list, don't do anything!
    if (list.size === 0) {
      return null;
    }

    // Try to show most uptoday item only
    var element = [];

    console.log("list.size", list.size);
    list.forEach((p, keyID) => {
      const segment = this.props.segment;

      if (segment === "case") {
        element.push(
          <SingleLeaseCaseView
            property={p}
            filter={this.props.filter}
            key={keyID}
            filterID={this.props.filterID}
          />
        );
      } else if (segment === "filter") {
        element.push(
          <SingleLeaseAgentFilterView
            property={p}
            key={keyID}
            filterID={this.props.filterID}
          />
        );
      } else if (segment === "response") {
        element.push(
          <SingleLeaseAgentRespondViewWrapper
            filter={this.props.filter}
            property={p}
            key={keyID}
            filterID={this.props.filterID}
          />
        );
      } else {
        element.push(
          <SingleLeaseUserMatchViewWrapper
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

    if (propertys === undefined) {
      console.log(
        "check error in userModelView without reference after has been modified"
      );
    }

  return (<div>{this.display(propertys)}</div>);
  }
}


ListOfMatchAgentLeasePropertys.propTypes = {
  segment : PropTypes.oneOf( ['case', 'filter', 'response'] ),
  filter  : PropTypes.object.isRequired,
  filterID : PropTypes.string,
  propertys : PropTypes.object.isRequired
};
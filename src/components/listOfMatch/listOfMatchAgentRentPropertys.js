import React from "react";
//import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
//import { createForm } from 'rc-form';
//import moment from 'moment';
//import 'moment/locale/zh-cn';
//import {propertys} from 'userModelView'
import { SingleRentUserMatchViewWrapper } from "../singlePropertyView/SingleRentUserMatchView";
import SingleRentAgentFilterView from "../singlePropertyView/SingleRentAgentFilterView";
import SingleRentCaseView from "../singlePropertyView/SingleRentCaseView";
import { observer } from "mobx-react";
import { SingleRentAgentRespondViewWrapper } from "../singlePropertyView/singleRentAgentRespondView";
import PropTypes from 'prop-types';

//const Item = List.Item;
//const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
export default class ListOfMatchAgentRentPropertys extends React.Component {
  constructor(props) {
    super(props);
  }

  display = propertys => {
    const list = propertys;
    // Catched empty list, don't do anything!
    if (list.size === 0) {
      // debugger
      return null;
    }

    const segment = this.props.segment;
    const isSegmentType = type => segment => (segment === type ? true : false);
    const array = [...list.values()]; // Convert Map into array
    const filter = this.props.filter;
    const filterID = this.props.filterID;

    if (isSegmentType("case", segment)) {
      const getSingleRentCaseView = p => (
        <SingleRentCaseView
          property={p}
          filter={filter}
          key={p.fbid}
          filterID={filterID}
        />
      );

      const element = array.map(getSingleRentCaseView);
      return <div>{element.reverse()}</div>;
    }
    if (isSegmentType("filter", segment)) {
      const getSingleRentAgentFilterView = p => (
        <SingleRentAgentFilterView
          property={p}
          key={p.fbid}
          filterID={filterID}
        />
      );

      const element = array.map(getSingleRentAgentFilterView);
      return <div>{element.reverse()}</div>;
    }
    if (isSegmentType("response", segment)) {
      const getSingleRentAgentRespondViewWrapper = p => (
        <SingleRentAgentRespondViewWrapper
          filter={filter}
          property={p}
          key={p.fbid}
          filterID={filterID}
        />
      );

      const element = array.map(getSingleRentAgentRespondViewWrapper);
      return <div>{element.reverse()}</div>;
    }
    const getSingleRentUserMatchViewWrapper = p => (
      <SingleRentUserMatchViewWrapper
        filter={filter}
        property={p}
        key={p.fbid}
        filterID={filterID}
      />
    );

    const element = array.map(getSingleRentUserMatchViewWrapper);
    return <div>{element.reverse()}</div>;
  };

  render() {
    const { propertys } = this.props;

  return (<div>{this.display(propertys)}</div>);
  }
}

ListOfMatchAgentRentPropertys.propTypes = {
  segment : PropTypes.oneOf( ['case', 'filter', 'response'] ),
  filter  : PropTypes.object.isRequired,
  filterID : PropTypes.string,
  propertys : PropTypes.object.isRequired
};

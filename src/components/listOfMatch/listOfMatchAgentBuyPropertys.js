import React from 'react';
//import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';

//import { createForm } from 'rc-form';
import moment from 'moment';
//import 'moment/locale/zh-cn';
//import {propertys} from 'userModelView'
import { SingleBuyUserMatchViewWrapper } from "../singlePropertyView/singleBuyUserMatchView";
import SingleBuyAgentFilterView from "../singlePropertyView/SingleBuyAgentFilterView";
import SingleBuyCaseView from "../singlePropertyView/singleBuyCaseView";
import { SingleBuyAgentRespondViewWrapper } from "../singlePropertyView/singleBuyAgentRespondView";

import { observer } from "mobx-react";
import { Accordion, List } from "antd-mobile";
import PropTypes from 'prop-types';


//const Item = List.Item;
//const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
class ListOfMatchAgentBuyPropertys
 extends React.Component {
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
      const getSingleBuyCaseView = p => { 
        //console.log( `p.keyID ${p.keyID}, p.fbid ${p.fbid}, filter ${filter}`)
        return (
        <SingleBuyCaseView
          property={p}
          filter={filter}
          key={p.fbid}
          filterID={filterID}
        />
      )};

      const element = array.map(getSingleBuyCaseView);
      return <div key='3'>{element.reverse()}</div>;
    }
    if (isSegmentType("filter", segment)) {
      const getSingleBuyAgentFilterView = p => (
        <SingleBuyAgentFilterView
          property={p}
          key={p.fbid}
          filterID={filterID}
        />
      );

      const element = array.map(getSingleBuyAgentFilterView);
      return <div>{element.reverse()}</div>;
    }
    if (isSegmentType("response", segment)) {
      const getSingleBuyAgentRespondViewWrapper = p => (
        <SingleBuyAgentRespondViewWrapper
          filter={filter}
          property={p}
          key={p.fbid}
          filterID={filterID}
        />
      );

      const element = array.map(getSingleBuyAgentRespondViewWrapper);
      return <div>{element.reverse()}</div>;
    }
    const getSingleBuyUserMatchViewWrapper = p => (
      <SingleBuyUserMatchViewWrapper
        filter={filter}
        property={p}
        key={p.fbid}
        filterID={filterID}
      />
    );

    const element = array.map(getSingleBuyUserMatchViewWrapper);
    return <div>{element.reverse()}</div>;
  };

  render() {
    const { propertys } = this.props;
    // debugger
    return <div>{this.display(propertys)}</div>;
  }
}

ListOfMatchAgentBuyPropertys.propTypes = {
  segment : PropTypes.oneOf( ['case', 'filter', 'response'] ),
  filter  : PropTypes.object.isRequired,
  filterID : PropTypes.string,
  propertys : PropTypes.object.isRequired
};

export default ListOfMatchAgentBuyPropertys;
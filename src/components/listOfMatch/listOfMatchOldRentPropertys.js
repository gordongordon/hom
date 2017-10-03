import React from "react";
//import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
//import { createForm } from 'rc-form';
// import moment from "moment";
// import "moment/locale/zh-cn";
//import {propertys} from 'userModelView'
//import SingleRentPropertyForMatchView from '../singlePropertyView/singleRentPropertyForMatchView'
import { inject, observer } from "mobx-react";
//import SingleRentAgentPropertyForRespondView from '../singlePropertyView/singleRentAgentPropertyForRespondView';
// Note Problem of sing vs Sing file name
import { SingleRentUserMatchViewWrapper } from "../singlePropertyView/SingleRentUserMatchView";
import PropTypes from 'prop-types';

//const Item = List.Item;
//const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@inject("store")
@observer
export class ListOfMatchOldRentPropertys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastUpdate: false
    };
  }

  display = propertys => {
    const list = propertys;
    // Catched empty list, don't do anything!
    if (list.size === 0) {
      return null;
    }

    // Try to show most uptoday item only
    var element = [];
    //           <SingleRentPropertyForMatchView property={property} key={keyID}/>

    list.forEach((property, keyID) => {
      let call = this.props.inDirectCall.get(
        this.props.store.router.params.keyID
      );
      let showPhone = false;
      if (call) {
        console.log("call ", call.isShowPhone);
        showPhone = call.isShowPhone;
      }

      element.push(
        <SingleRentUserMatchViewWrapper
          filter={this.props.filter}
          status={status}
          property={property}
          key={keyID}
        />
      );
    });

    return <div>{element.reverse()}</div>;
  };

  render() {
    const { propertys } = this.props;
    const that = this;

    return <div>{that.display(propertys)}</div>;
  }
}

ListOfMatchOldRentPropertys.propTypes = {
  inDirectCall : PropTypes.object.isRequired,
  filter  : PropTypes.object.isRequired,
  propertys : PropTypes.object.isRequired
};
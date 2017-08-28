import React from "react";
import {
  List,
  Card,
  Stepper,
  Picker,
  SwipeAction,
  DatePicker,
  Badge,
  Flex,
  InputItem,
  WhiteSpace,
  Button,
  SegmentedControl,
  Accordion
} from "antd-mobile";
// import { createForm } from "rc-form";
//import moment from 'moment';
//import 'moment/locale/zh-cn';
import { propertys } from "userModelView";
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
import MobxStore from "mobxStore";
import views from "views";

const Item = List.Item;
const Brief = Item.Brief;

export default class SingleBuyCaseView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      selectedSegmentIndex: 0
    };
  }

  componentWillMount() {
    //const p = this.props;
    //    const t = moment().format('YYYY-MM-DD HH:mm:ss');
    //  this.props.property.realTime = moment( t );
    this.props.property.setTimeStamp();

    //    console.log( 'realTime will mount', this.props.property.realTime)
  }

  render() {
    const { property } = this.props;
    const that = this;
    //        const { getFieldProps } = this.props.form;

    //debugger
    // onClick={() =>
    //     MobxStore.router.goTo(views.saleAgentForm,
    //          {
    //       keyID: property.fbid,
    //       typeTo: property.typeTo
    //     }
    // )}

    // repair goTo by passing property
    MobxStore.app.lastProperty = property;
        
    return (
      <div>
        <Item
          extra={<Badge text="edit" />}
          arrow="horizontal"
          onClick={() =>
            MobxStore.router.goTo(views.saleAgentForm, {
              keyID: property.fbid,
              typeTo: property.typeTo,
              filterID: this.props.filterID

            })}
          thumb="http://hair.losstreatment.com/icons/building-up.svg"
          multipleLine
        >
        {property.addressLocationLabel}/{property.nameOfBuildingLabel}/{property.contactNameLabel}
          <Brief>
            {property.partitionLabel}{property.buyBudgetMaxLabel}
            <br />
            {property.earlyTimeToViewLabel}
            <br />
            <Badge
              text={property.roleName}
              style={{
                marginLeft: 12,
                padding: "0 0.06rem",
                backgroundColor: property.colorByRoleName,
                borderRadius: 2
              }}
            />
            <Badge
              text={property.howFresh}
              style={{
                marginLeft: 12,
                padding: "0 0.06rem",
                backgroundColor: property.colorByFresh,
                borderRadius: 2
              }}
            />
            <Badge
              text={property.dayListed}
              style={{
                marginLeft: 12,
                padding: "0 0.06rem",
                backgroundColor: "#fff",
                borderRadius: 2,
                color: "#f19736",
                border: "1px solid #f19736"
              }}
            />
            </Brief>f:{property.fbid} <br />r:{property.relatedFbid}
            </Item>
            <WhiteSpace size="sm" />
            </div>
                  
    );
  }
}

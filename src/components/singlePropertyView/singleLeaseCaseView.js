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
  ActionSheet
} from "antd-mobile";
//import moment from 'moment';
//import 'moment/locale/zh-cn';
import { propertys } from "userModelView";
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
import MobxStore from "mobxStore";
import views from "views";

const Item = List.Item;
const Brief = Item.Brief;

// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

export default class SingleLeaseCaseView extends React.Component {
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

    /**
   * Implement ActionSheet which to handle multi actions
   */
  showActionSheet = () => {
    const p = this.props.property;
    const BUTTONS = ['直接打俾對方', 'edit', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      // title: '标题',
      message: 'singleLeaseCaseView',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
      if ( buttonIndex === 0 ) {
        window.location.href="tel://"+ p.contactPhone;
      }
      if ( buttonIndex === 1 ) {
         this.props.store.app.passByRef = p;
         this.props.store.router.goTo(views.rentAgentForm, {
           keyID: p.fbid,
           typeTo: p.typeTo,
           filterID: this.props.filterID
        })
      }
      
    });
  }


  render() {
    const { property } = this.props;
    const that = this;
    //        const { getFieldProps } = this.props.form;
    // repair goTo by passing property
    //MobxStore.app.lastProperty = property
    
    return (
      <div>
        <Item
        extra={
            <Badge
              text={property.showPhoneStatus.status}
              style={{
                marginLeft: 12,
                padding: "0 0.06rem",
                backgroundColor: property.showPhoneStatus.color,
                borderRadius: 2
              }}
            />
          }
        arrow="horizontal"
        onClick={this.showActionSheet }
        thumb="http://hair.losstreatment.com/icons/rent-up.svg"
          multipleLine
        >
       {property.addressLocationLabel}/{property.nameOfBuildingLabel}/{property.contactNameLabel}
          <Brief>
            {property.leasePriceLabel}
            {property.partitionLabel}
            <br />
            {property.isFreeForSevenDayLabel}
            {property.earlyTimeToViewLabel}
            {property.hasHomeHardwareLabel}
            <br />
            <Badge
            text={property.leasingPeriodLabel}
            style={{
              marginLeft: 12,
              padding: "0 0.06rem",
              backgroundColor: property.colorByFresh,
              borderRadius: 2
            }}      
            />                
            <Badge
            text={property.isPetAllowedLabel}
            style={{
              marginLeft: 12,
              padding: "0 0.06rem",
              backgroundColor: property.colorByFresh,
              borderRadius: 2
            }}      
            />    
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

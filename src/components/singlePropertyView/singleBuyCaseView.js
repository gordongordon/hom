import React from 'react';
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
  Accordion,
  ActionSheet
} from 'antd-mobile';
// import { createForm } from "rc-form";
//import moment from 'moment';
//import 'moment/locale/zh-cn';
import { propertys } from 'userModelView';
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
// import MobxStore from "mobxStore";
import views from 'views';
import {inject, observer} from "mobx-react";
import PropTypes from 'prop-types';



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

@inject("store") @observer
class SingleBuyCaseView extends React.Component {

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
    const status = p.getStatus(p.relatedFbid).get();
    const f = this.props.filter;
    const isStatusShowPhone = status => status && status.isShowPhone;

    var BUTTONS; 


//    if ( status.isShowPhone ) {
    isStatusShowPhone( status ) ? BUTTONS = [ `直接致電(${f.roleName}):  ${status.contactPhone}`, '更新回覆內容', "取消"] 
                                : BUTTONS = [ `直接致電(${f.roleName}):  ${status.contactPhone}`, '更新回覆內容', "取消"];

    // if ( isStatusShowPhone( status ) ) {
    //   BUTTONS = [ `直接致電(${f.roleName}):  ${status.contactPhone}`, '更新回覆內容', "取消"];
    // } else {
    //   BUTTONS = [ `直接致電(${f.roleName}):  ${status.contactPhone}`, '更新回覆內容', "取消"];
    // }
    // const BUTTONS = ['Call '+ p.showPhoneByCase, 'edit', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      // title: '标题',
      message: 'singleBuyCaseView',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
      // if ( buttonIndex === 0 ) {
      //   p.setInDirectCallForBuy( p.fbid, p.relatedFbid );         
      // }
      if ( buttonIndex === 0 && status.isShowPhone ) {
        window.location.href = "tel://" + status.contactPhone;
      }
      if ( buttonIndex === 1 ) {
         this.props.store.app.passByRef = p;
         this.props.store.router.goTo(views.saleAgentForm, {
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
    const status = property.getStatus(property.relatedFbid).get();    
    
    //debugger
    // onClick={() =>
    //     MobxStore.router.goTo(views.saleAgentForm,
    //          {
    //       keyID: property.fbid,
    //       typeTo: property.typeTo
    //     }
    // )}

    // repair goTo by passing property
    //MobxStore.app.lastProperty = property;
        
    return (
      <div>
        <Item
        extra={
          <Badge
            text={status.status}
            style={{
              marginLeft: 12,
              padding: "0 0.06rem",
              backgroundColor: status.color,
              borderRadius: 2
            }}
          />
        }
          arrow="horizontal"
          onClick={this.showActionSheet }
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
            text={property.isPetAllowedLabel}
            style={{
              marginLeft: 12,
              padding: '0 0.06rem',
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
            <Item>
        Tel : {status.contactPhone}
        </Item>            
            <WhiteSpace size="sm" />
            </div>
                  
    );
  }
}

SingleBuyCaseView.propTypes = {
  property : PropTypes.object.isRequired,
  filterID : PropTypes.string.isRequired,
  filter : PropTypes.object.isRequired
}


export default SingleBuyCaseView;
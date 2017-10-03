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
  Switch,
  ActionSheet
} from "antd-mobile";
import { createForm } from "rc-form";
//import moment from 'moment';
//import 'moment/locale/zh-cn';
import { propertys } from "userModelView";
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
import MobxStore from "mobxStore";
import views from "views";
//import {Modal} from 'antd';
import {observer} from 'mobx-react';
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
// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];
//
// const BUILDING_NAME = {
//    'MOSDBC' : '迎海',
//    'MOSCTO' : '第一城',
//    'MOSSSC' : '新港城'
// }

//@observer
class SingleSaleAgentRespondView extends React.Component {
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
    const f = this.props.filter;
    const status = p.getStatus(f.fbid).get();
    const fStatus = f.getStatus(p.fbid).get();
    const BUTTONS = [fStatus.message, "致電(地產代理): "  + p.contactPhone, "取消"];
    
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      // title: '标题',
      message: 'SingleBuyAgentRespondView',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] });
      if ( buttonIndex === 0 ) {
        this.props.filter.setBuyInDirectCall( 
          MobxStore.router.params.keyID, 
          p.fbid, 
          fStatus.isShowPhone
         );  
      }
      if (buttonIndex === 1 ) {
        window.location.href = "tel://" + p.contactPhone;
      }
    });
  }

  render() {
    const { property , filter } = this.props;
    const that = this;
    const { getFieldProps } = this.props.form;    
    const fStatus = filter.getStatus(property.fbid).get();
    
    //        const { getFieldProps } = this.props.form;

    //onClick={() => MobxStore.router.goTo(views.leaseAgentForm, { keyID : property.fbid, typeTo : property.typeTo})}

    // repair goTo by passing property
    //MobxStore.app.lastProperty = property;
    
    return (
      <div>
        <Item
        extra={
          <Badge
          text={fStatus.status}
          style={{
              marginLeft: 12,
              padding: "0 0.06rem",
              backgroundColor: fStatus.color,
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
            {property.partitionLabel}
            {property.salePriceLabel}
            <br />
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
            text={property.isViewAbleLabel}
            style={{
              marginLeft: 6,
              padding: "0 0.06rem",
              backgroundColor: property.colorByFresh,
              borderRadius: 5
            }}
          />
            
            <Badge
            text={property.levelLabel}
            style={{
              marginLeft: 6,
              padding: "0 0.06rem",
              backgroundColor: property.colorByRoleName,
              borderRadius: 5
            }}
          />            
            <Badge
              text={property.roleName}
              style={{
                marginLeft: 6,
                padding: "0 0.06rem",
                backgroundColor: property.colorByRoleName,
                borderRadius: 5
              }}
            />
            <Badge
              text={property.howFresh}
              style={{
                marginLeft: 6,
                padding: "0 0.06rem",
                backgroundColor: property.colorByFresh,
                borderRadius: 5
              }}
            />
            <br />
            <Badge
            text={property.netSizeLabel}
            style={{
              marginLeft: 6,
              padding: "0 0.06rem",
              backgroundColor: property.colorByFresh,
              borderRadius: 5
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
          <Badge
          text={property.isSaleWithLeaseLabel}
          style={{
            marginLeft: 6,
            padding: "0 0.06rem",
            backgroundColor: property.colorByFresh,
            borderRadius: 5
          }}
        />
        <br />
        <Badge
        text={property.dueDayLabel}
        style={{
          marginLeft: 6,
          padding: "0 0.06rem",
          backgroundColor: property.colorByFresh,
          borderRadius: 5
        }}
      />
      <Badge
      text={property.earlyTimeToViewLabel}
      style={{
        marginLeft: 6,
        padding: "0 0.06rem",
        backgroundColor: property.colorByFresh,
        borderRadius: 5
      }}
      />
            </Brief>f:{property.fbid} <br />r:{property.relatedFbid}
            </Item>
            <List.Item
            extra={<Switch
              {...getFieldProps('isShowPhone', {
                initialValue: fStatus.isShowPhone,
                valuePropName: 'checked',
              })}
              onClick={(checked) => {    
                filter.setBuyInDirectCall( 
                   MobxStore.router.params.keyID, 
                   property.fbid, 
                   fStatus.isShowPhone );  
                   console.log( `checked ${checked}, isShowPhone ${fStatus.isShowPhone}`); }} 
                   />}
    
            >Tel: {property.contactPhone}
            </List.Item>
        <WhiteSpace size="sm" />
        </div>
    );
  }
}

SingleSaleAgentRespondView.propTypes = {
  property : PropTypes.object.isRequired,
  filterID : PropTypes.string.isRequired,
  keyID : PropTypes.string.isRequired,
  form : PropTypes.object.isRequired

}

export const SingleSaleAgentRespondViewWrapper = createForm()(SingleSaleAgentRespondView);

//>Tel: {property.displayPhoneNumber(filter.fbid)} </List.Item>

// {/* <div>
// <SwipeAction
//   style={{ backgroundColor: 'gray' }}
//   autoClose
//   right={[
//     {
//       text: 'Cancel',
//       onPress: () => console.log('cancel'),
//       style: { backgroundColor: '#ddd', color: 'white' },
//     },
//     {
//       text: 'Delete',
//       onPress: () => console.log('delete'),
//       style: { backgroundColor: '#F4333C', color: 'white' },
//     },
//   ]}
//   left={[
//     {
//       text: 'Reply',
//       onPress: () => console.log('reply'),
//       style: { backgroundColor: '#108ee9', color: 'white' },
//     },
//     {
//       text: 'Cancel',
//       onPress: () => console.log('cancel'),
//       style: { backgroundColor: '#ddd', color: 'white' },
//     },
//   ]}
//   onOpen={() => console.log('global open')}
//   onClose={() => console.log('global close')}
// >
// <Card full>
//  <Badge text={'平'} corner>
//   <Card.Header
//     title={ property.contactNameLabel }
//     thumb="http://via.placeholder.com/140x100"
//     extra={<div>尋找:{property.nameOfBuildingLabel}</div>}
//   />
//   </Badge>
//   <Card.Body>
//       <div>{property.leasePriceLabel}{property.isFreeForSevenDayLabel}{property.dueDayLabel}{property.hasHomeHardwareLabel}
//       </div>
//   </Card.Body>
//   <Card.Footer content={<div><Button type="ghost" inline size="small">請打俾我</Button>
//   <Button type="ghost" inline size="small">直接聯絡</Button></div>} extra={          <Flex style={{ marginBottom: '1rem' }}>
//             <Badge text={property.roleName} style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: property.colorByRoleName, borderRadius: 2 }} />
//             <Badge text={property.howFresh}  style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: property.colorByFresh, borderRadius: 2 }} />
//             <Badge text={property.dayListed}
//               style={{
//                 marginLeft: 12,
//                 padding: '0 0.06rem',
//                 backgroundColor: '#fff',
//                 borderRadius: 2,
//                 color: '#f19736',
//                 border: '1px solid #f19736',
//               }}
//             />
//           </Flex>} />
// </Card>
// </SwipeAction>
// <WhiteSpace size="sm" />
// </div> */}

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
  SegmentedControl
} from "antd-mobile";
//import { createForm } from "rc-form";
//import moment from 'moment';
//import 'moment/locale/zh-cn';
import { propertys } from "userModelView";
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
import MobxStore from "mobxStore";
import views from "views";

const Item = List.Item;
const Brief = Item.Brief;

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

export default class SingleSaleAgentPropertyForRespondView extends React.Component {
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

    //onClick={() => MobxStore.router.goTo(views.leaseAgentForm, { keyID : property.fbid, typeTo : property.typeTo})}

    // repair goTo by passing property
    MobxStore.app.lastProperty = property;
    
    return (
      <div>
        <Item
        extra={<Badge text={property.typeByFollowUpLabel} />}
        arrow="horizontal"
          onClick={() => 
            MobxStore.router.goTo(views.buyAgentForm, {
                keyID: property.fbid,
                typeTo: property.typeTo,
                filterID: this.props.filterID
              })} 
          thumb="http://hair.losstreatment.com/icons/rent-up.svg"
          multipleLine
        >
       {property.addressLocationLabel}/{property.nameOfBuildingLabel}/{property.contactNameLabel}
          <Brief>
            {property.partitionLabel}
            {property.salePriceLabel}
            <br />
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
            <Badge
              text={property.dayListed}
              style={{
                marginLeft: 6,
                padding: "0 0.06rem",
                backgroundColor: "#fff",
                borderRadius: 5,
                color: "#f19736",
                border: "2px solid #f19736"
              }}
            />
            </Brief>f:{property.fbid} <br />r:{property.relatedFbid}
            </Item>
        <WhiteSpace size="sm" />
      </div>
    );
  }
}

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

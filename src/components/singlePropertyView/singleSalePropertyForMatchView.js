import React from 'react';
import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
//import { createForm } from 'rc-form';
import moment from 'moment';
////import 'moment/locale/zh-cn';
import {propertys} from 'userModelView';
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'

// const Item = List.Item;
// const Brief = Item.Brief;

// const LABEL_JOBNATURE = {
//  '0' : '私人企業',
//  '1' : '政府工',
//  '2' : '自僱人士',
//  '3' : '學生',
//  '4' : '海外人士',
// }
//
// const jobNature = [
//   {
//     label : '私人企業',
//     value : '0'
//   },   {
//     label : '政府工',
//     value : '1'
//   },   {
//     label : '自僱人士',
//     value : '2'
//   },   {
//     label : '學生',
//     value : '3'
//   },  {
//     label : '海外人士',
//     value : '4'
//   },
// ]

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

export default class SingleSalePropertyForMatchView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
    };
  }

  componentWillMount() {
    //const p = this.props;
    // const t = moment().format('YYYY-MM-DD HH:mm:ss');
    // this.props.property.realTime = moment( t );
     this.props.property.setTimeStamp();
    //    console.log( 'realTime will mount', this.props.property.realTime)
  }

  render() {
        const {property} = this.props;

        console.log( 'SingleRentPropertyForMatch', property );
        const that = this;
        // const { getFieldProps } = this.props.form;
        // For DatePicker
        //const minDate = moment().locale('zh-cn').utcOffset(8);
        // const maxDate = moment(minDate).add(6, 'M');

        // console.log( 'property', property )
        // console.log( 'roleName', property.roleName );
        // console.log( 'dayListed', property.dayListed )
        // console.log( 'timeEnter', this.props.timeEnter )
        //property.reatTime = moment( this.props.timeEnter );

    return (
      <div>
  <Card full="true">
   <Badge text={'平'} corner>
    <Card.Header
      title={ property.contactNameLabel }
      thumb="http://via.placeholder.com/140x100"
      extra={<div>尋找:{property.nameOfBuildingLabel} </div>}
    />
    </Badge>
    <Card.Body>
        <div>{property.partitionLabel}
        </div>
    </Card.Body>
    <Card.Footer content={<div>
                               <Button type="ghost" inline size="small">Chat</Button>
                               <Button type="ghost" inline size="small">直接電話聯絡</Button>
                           </div>} extra={          <Flex style={{ marginBottom: '1rem' }}>
              <Badge text={property.roleName} style={{ marginLeft: 6, padding: '0 0.06rem', backgroundColor: property.colorByRoleName, borderRadius: 5 }} />
              <Badge text={property.howFresh} style={{ marginLeft: 6, padding: '0 0.06rem', backgroundColor: property.colorByFresh, borderRadius: 5 }} />
              <Badge text={property.dayListed}
                style={{
                  marginLeft: 6,
                  padding: '0 0.06rem',
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  color: '#f19736',
                  border: '2px solid #f19736',
                }}
              />
                      </Flex>} />
  </Card>
  {"sale"+property.fbid}
  <WhiteSpace size="sm" />
</div>
);

} };

//export const SingleSalePropertyForMatchViewWrapper = createForm()(SingleSalePropertyForMatchView);

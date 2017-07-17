import React from 'react'
import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {propertys} from 'propertysViewModel'
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'

const Item = List.Item;
const Brief = Item.Brief;

const LABEL_JOBNATURE = {
 '0' : '私人企業',
 '1' : '政府工',
 '2' : '自僱人士',
 '3' : '學生',
 '4' : '海外人士',
}

const jobNature = [
  {
    label : '私人企業',
    value : '0'
  },   {
    label : '政府工',
    value : '1'
  },   {
    label : '自僱人士',
    value : '2'
  },   {
    label : '學生',
    value : '3'
  },  {
    label : '海外人士',
    value : '4'
  },
]

const NameOfBuilding = [
  { value: 'MOSDBC', label: '迎海' },
  { value: 'MOSCTO', label: '第一城' },
  { value: 'MOSSSC', label: '新港城' },
];

const BUILDING_NAME = {
   'MOSDBC' : '迎海',
   'MOSCTO' : '第一城',
   'MOSSSC' : '新港城'
}

class SingleRentPropertyForMatchView extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
    }
  }


  render() {
        const {property} = this.props

        console.log( 'SingleRentPropertyForMatch', property )
        const that = this;
        const { getFieldProps } = this.props.form;
        // For DatePicker
        const minDate = moment().locale('zh-cn').utcOffset(8);
        const maxDate = moment(minDate).add(6, 'M');


    return (
      <div>
  <SwipeAction
    style={{ backgroundColor: 'gray' }}
    autoClose
    right={[
      {
        text: 'Cancel',
        onPress: () => console.log('cancel'),
        style: { backgroundColor: '#ddd', color: 'white' },
      },
      {
        text: 'Delete',
        onPress: () => console.log('delete'),
        style: { backgroundColor: '#F4333C', color: 'white' },
      },
    ]}
    left={[
      {
        text: 'Reply',
        onPress: () => console.log('reply'),
        style: { backgroundColor: '#108ee9', color: 'white' },
      },
      {
        text: 'Cancel',
        onPress: () => console.log('cancel'),
        style: { backgroundColor: '#ddd', color: 'white' },
      },
    ]}
    onOpen={() => console.log('global open')}
    onClose={() => console.log('global close')}
  >
  <Card full>
   <Badge text={'平'} corner>
    <Card.Header
      title={ property.contactName +"/租金上限$"+property.rentBudgetMax}
      thumb="http://via.placeholder.com/140x100"
      extra={<div>最快可樓睇/尋找:{BUILDING_NAME[property.nameOfBuilding]} </div>}
    />
    </Badge>
    <Card.Body>
        <div>收入:${property.income}/職業:{LABEL_JOBNATURE[property.jobNature]}/{property.numOfPeopleLiving}人住
        </div>
    </Card.Body>
    <Card.Footer content={<div><Button type="ghost" inline size="small">Chat</Button><Button type="ghost" inline size="small">直接電話聯絡</Button></div>} extra={          <Flex style={{ marginBottom: '1rem' }}>
              <Badge text="券" style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: '#f19736', borderRadius: 2 }} />
              <Badge text="NEW" style={{ marginLeft: 12, padding: '0 0.06rem', backgroundColor: '#21b68a', borderRadius: 2 }} />
              <Badge text="自动缴费"
                style={{
                  marginLeft: 12,
                  padding: '0 0.06rem',
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  color: '#f19736',
                  border: '1px solid #f19736',
                }}
              />
              $3800
            </Flex>} />
  </Card>
  </SwipeAction>
  <WhiteSpace size="sm" />
</div>
);

} };

export const SingleRentPropertyForMatchViewWrapper = createForm()(SingleRentPropertyForMatchView);
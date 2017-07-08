import React from 'react'
import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {propertys} from 'propertysViewModel'

const Item = List.Item;
const Brief = Item.Brief;

const NameOfBuilding = [
  { value: 'MOSDBC', label: '迎海' },
  { value: 'MOSCTO', label: '第一城' },
  { value: 'MOSSSC', label: '新港城' },
];

class MatchPanelView extends React.Component {

  constructor(props) {
    super(props)

    // property = propertys.propertys.get(this.props.keyID);
    // console.log('p', property)
    // console.log('p.nameOfBuilding', property.nameOfBuilding)
  }

  state = {
    disabled: false,
    selectedSegmentIndex: 0,
  }
  render() {
        var property = propertys.propertys.get(this.props.keyID);
        const that = this;
        const { getFieldProps } = this.props.form;
        // For DatePicker
        const minDate = moment().locale('zh-cn').utcOffset(8);
        const maxDate = moment(minDate).add(6, 'M');
    return (
      <div>
      <div>
      <SegmentedControl values={['現在比較樓盤', '聯絡通訊', '系統登入', '個人資料']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />
<List>
      <Picker data={NameOfBuilding} cols={1} {...getFieldProps('nameOfBuilding', {
          initialValue: [property.nameOfBuilding],
        })} className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑">
        <List.Item arrow="horizontal">大廈/屋苑</List.Item>
      </Picker>

      <List.Item extra={
       <Stepper
         style={{ width: '100%', minWidth: '2rem' }}
         {...getFieldProps('numOfPeopleLiving', {
           initialValue: property.leasePrice
         })}
         showNumber
         max={100000}
         min={1000}
         defaultValue={8000}
         step={500}
       />}
     >
     租金/元
     </List.Item>

      <DatePicker
        mode="date"
        title="選擇日期"
        extra="選擇日期,最長半年來"
        {...getFieldProps('earlyTimeToView', {
          initialValue : minDate,
        })}
        minDate={minDate}
        maxDate={maxDate}
      >
      <List.Item arrow="horizontal">最快幾時有樓睇</List.Item>
      </DatePicker>
    </List>
      <SegmentedControl tintColor={'#ff0000'} values={['最貴', '最平', '最快', '最滿意']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />
      </div>

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
      title="Mr Gordon / $38000"
      thumb="http://via.placeholder.com/140x100"
      extra={<div>最快可樓睇:7月8號/尋找:迎海 </div>}
    />
    </Badge>
    <Card.Body>
        <div>收入:$15,000/職業:政府工/2人住
        </div>
    </Card.Body>
    <Card.Footer content={<div><Button type="primary" inline size="small">Chat Now!</Button><Button type="primary" inline size="small">Call Now!</Button></div>} extra={          <Flex style={{ marginBottom: '1rem' }}>
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
  <WhiteSpace />
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
   <Badge text={'人氣'} corner>
    <Card.Header
      title="Mr Gordon / $38000"
      thumb="http://via.placeholder.com/140x100"
      extra={<div>最快可樓睇:7月8號/尋找:迎海 </div>}
    />
    </Badge>
    <Card.Body>
        <div>收入:$15,000/職業:政府工/2人住
        </div>
    </Card.Body>
    <Card.Footer content={<div><Button type="primary" inline size="small">Chat Now!</Button><Button type="primary" inline size="small">Call Now!</Button></div>} extra={          <Flex style={{ marginBottom: '1rem' }}>
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

      <div>

  <WhiteSpace size="lg" />

  <Card full>
   <Badge text={'快'} corner>
    <Card.Header
      title="Mr Gordon / $38000"
      thumb="http://via.placeholder.com/140x100"
      extra={<div>最快可樓睇:7月8號/尋找:迎海 </div>}
    />
    </Badge>
    <Card.Body>
        <div>收入:$15,000/職業:政府工/2人住
        </div>
    </Card.Body>
    <Card.Footer content={<div><Button type="primary" inline size="small">Chat Now!</Button><Button type="primary" inline size="small">Call Now!</Button></div>} extra={          <Flex style={{ marginBottom: '1rem' }}>
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

</div>
<div>

<WhiteSpace size="lg" />
<Card full>
<Card.Header
title="Mr Gordon"
thumb="http://via.placeholder.com/140x100"
extra={<div>最快可樓睇:7月8號/尋找:迎海</div>}
/>
<Card.Body>
  <div>收入:$15,000/職業:政府工/2人住
  </div>
</Card.Body>
<Card.Footer content={<div><Button type="primary" inline size="small">Chat Now!</Button><Button type="primary" inline size="small">Call Now!</Button></div>} extra={          <Flex style={{ marginBottom: '1rem' }}>
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
</div>
    </div>);
  }
}

export const MatchPanelViewWrapper = createForm()(MatchPanelView);

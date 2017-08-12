import React from 'react'
import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, Button, WhiteSpace, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
//import {propertys} from 'propertysViewModel'
import {Fb} from 'firebase-store'


const Item = List.Item;
const Brief = Item.Brief;

const NameOfBuilding = [
  { value: 'MOSDBC', label: '迎海' },
  { value: 'MOSCTO', label: '第一城' },
  { value: 'MOSSSC', label: '新港城' },
];

class ControlBuyView extends React.Component {

  constructor(props) {
    super(props)

    // property = propertys.propertys.get(this.props.keyID);
    // console.log('p', property)
    // console.log('p.nameOfBuilding', property.nameOfBuilding)


    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
    }

    }

  render() {
        const {property} = this.props;

        const that = this;
        const { getFieldProps } = this.props.form;
        // For DatePicker
        const minDate = moment().locale('zh-cn').utcOffset(8);
        const maxDate = moment(minDate).add(6, 'M');

        // console.log( 'SingleLeaseProperty property', this.props.property )

        console.log( 'SingleLeaseProperty property', property )
        var selectedIndex = this.props.selectedIndex;
        const onChange = this.props.onChange;

    return (

      <div>

      <SegmentedControl values={['超新鮮 即時回覆', '全部配對']}  selectedIndex={this.selectedIndex} onChange={onChange}/>
<List>
      <Picker data={NameOfBuilding} cols={1} {...getFieldProps('nameOfBuilding', {
          initialValue: [property.nameOfBuilding],
        })} className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑">
        <List.Item arrow="horizontal">購買物業</List.Item>
      </Picker>

      <List.Item extra={
       <Stepper
         style={{ width: '100%', minWidth: '2rem' }}
         {...getFieldProps('buyBudgetMax', {
           initialValue: property.buyBudgetMax
         })}
         showNumber
         max={100000}
         min={100}
         step={5}
       />}
     >
     預算上限/萬
     </List.Item>

      <DatePicker
        mode="date"
        title="選擇日期"
        extra="選擇日期,最長半年來"
        {...getFieldProps('earlyTimeToView', {
          initialValue : moment( property.earlyTimeToView ),
        })}
        minDate={minDate}
        maxDate={maxDate}
      >
      <List.Item arrow="horizontal">最快幾時有樓睇</List.Item>
      </DatePicker>
    </List>
      <WhiteSpace size="sm" />
      </div>

      );
  }
}
//       <SegmentedControl tintColor={'#ff0000'} values={['最貴', '最平', '最快', '最滿意']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />

export const ControlBuyViewWrapper = createForm()(ControlBuyView);

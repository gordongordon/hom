import React from 'react'
import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
//import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
//import {propertys} from 'propertysViewModel'
import {SingleRentPropertyForMatchViewWrapper} from 'singleRentPropertyForMatchView'

const Item = List.Item;
const Brief = Item.Brief;

const NameOfBuilding = [
  { value: 'MOSDBC', label: '迎海' },
  { value: 'MOSCTO', label: '第一城' },
  { value: 'MOSSSC', label: '新港城' },
];

export class ListOfMatchPropertys extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
    }
  }


  render() {
        const {property} = this.props;

        console.log( 'ListOfPropertys property', property )
//         const that = this;
// //         const { getFieldProps } = this.props.form;
//         // For DatePicker
//         const minDate = moment().locale('zh-cn').utcOffset(8);
//         const maxDate = moment(minDate).add(6, 'M');


    return (
      <div>
      {
      <SingleRentPropertyForMatchViewWrapper property={property} />
      }
     </div>);
  }
}

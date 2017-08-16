import React from 'react'
import { WhiteSpace, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';

import {Fb} from 'firebase-store';
import { observer } from 'mobx-react';


// import moment from 'moment';
// import 'moment/locale/zh-cn';
//import {propertys} from 'propertysViewModel'

// const Item = List.Item;
// const Brief = Item.Brief;
//
// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
class ControlAgentView extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
    }

 }
 onChange = (e) => {
   console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
 }
 onValueChange = (value) => {
   console.log(value);
 }

render() {
        const {property} = this.props;

        const that = this;
        const { getFieldProps } = this.props.form;
        // // For DatePicker
        // const minDate = moment().locale('zh-cn').utcOffset(8);
        // const maxDate = moment(minDate).add(6, 'M');

        // console.log( 'SingleLeaseProperty property', this.props.property )

        console.log( 'SingleLeaseProperty property', property )
    return (

      <div>
      <SegmentedControl values={['等待回覆樓盤','已跟進']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />
      <WhiteSpace size="sm" />
      </div>
      );
  }
}
//       <SegmentedControl tintColor={'#ff0000'} values={['最貴', '最平', '最快', '最滿意']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />

export const ControlAgentViewWrapper = createForm()(ControlAgentView);

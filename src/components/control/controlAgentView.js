import React from 'react'
import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, Button, WhiteSpace, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';

import {Fb} from 'firebase-store';
import { observer } from 'mobx-react';
import {DISTRICK} from 'DISTRICK'


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
      id : this.props.property.fbid
    }

    this.onChangeAddress = this.onChangeAddress.bind(this);
    // this.onChangeEarlyTimeToView = this.onChangeEarlyTimeToView.bind(this);

  } // End of constructor

  //
  onChangeAddress = ( value ) => {

    const id = this.state.id;
    // var value = this.props.form.getFieldsValue();

    const addressRegion   = value[0]
    const addressLocation = value[1]
    const addressBuilding = value[2]

    console.log( `location ${addressLocation}, building ${addressBuilding} with ${id} ${value}`)
//     console.log( 'address ${}')

    if ( addressBuilding === 'ALL') {
      // console.log( 'MOS0000')
      Fb.app.agentsFilterRef.child( id ).update( { orderByChild : 'addressLocation',
        addressRegion : addressRegion,
        addressLocation: addressLocation,
        nameOfBuilding : addressBuilding
      } );
    } else {
      Fb.app.agentsFilterRef.child( id ).update( { orderByChild : 'nameOfBuilding',
                                                   addressRegion : addressRegion,
                                                   addressLocation: addressLocation,
                                                   nameOfBuilding : addressBuilding
                                                 } );
    }

  }


 onChange = (e) => {
   console.log(`ControlAgentView.selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
 }
 onValueChange = (value) => {
   console.log(value);
 }

render() {

        const {property} = this.props;
        const that = this;
        const { getFieldProps } = this.props.form;
        // For DatePicker
        //const minDate = moment().locale('zh-cn').utcOffset(8);
        // const maxDate = moment(minDate).add(6, 'M');

        const region = property.addressRegion;
        const location = property.addressLocation;
        const building = property.nameOfBuilding;
        const address = [region,location,building]

        console.log( `address ${address}`)
        console.log( 'Single Agent Property property', property )
        var selectedIndex = this.props.selectedIndex;
        const onChange = this.props.onChange;

        if ( property.nameOfBuildingLabel === undefined ) {
          console.log('*nameOfBuildingLabel undefined')
        }

    return (

      <div>
        <SegmentedControl values={['B搵買盤', 'S放賣盤', 'R搵租盤', 'L放租盤','已跟進/回覆']}  selectedIndex={this.props.selectedIndex} onChange={onChange} />
          <List>
            <Picker data={DISTRICK} cols={3} {...getFieldProps('districk', {
                initialValue: address,
               })}
                className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑"
                onChange={ this.onChangeAddress }
              >
             <List.Item arrow="horizontal">大廈/屋苑</List.Item>
            </Picker>
                <List.Item extra={
                 <Stepper
                   style={{ width: '100%', minWidth: '2rem' }}
                   {...getFieldProps('buyBudgetMax', {
                     initialValue: 300
                   })}
                   showNumber
                   max={100000}
                   min={100}
                   step={5}
                 />}
               >
               預算上限/萬
               </List.Item>
              </List>
              <h5>{property.fbid}</h5>
      <WhiteSpace size="sm" />
      </div>
      );
  }
}
//       <SegmentedControl tintColor={'#ff0000'} values={['最貴', '最平', '最快', '最滿意']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />

export const ControlAgentViewWrapper = createForm()(ControlAgentView);

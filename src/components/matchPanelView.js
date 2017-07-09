import React from 'react'
import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {propertys} from 'propertysViewModel'
import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
import {SingleRentPropertyForMatchViewWrapper} from 'singleRentPropertyForMatchView'
import {ListOfMatchPropertys} from 'listOfMatchPropertys'
import { observer } from 'mobx-react';


const Item = List.Item;
const Brief = Item.Brief;

const NameOfBuilding = [
  { value: 'MOSDBC', label: '迎海' },
  { value: 'MOSCTO', label: '第一城' },
  { value: 'MOSSSC', label: '新港城' },
];

@observer
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

        console.log( 'matchPanelView property', property )
        console.log( 'matchPanelView matched propertys', property.matchedPropertys )
        const that = this;
        const { getFieldProps } = this.props.form;
        // For DatePicker
        const minDate = moment().locale('zh-cn').utcOffset(8);
        const maxDate = moment(minDate).add(6, 'M');


    return (
      <div>

  <SingleLeasePropertyForMatchViewWrapper property={property} />
  <ListOfMatchPropertys property={property.matchedPropertys} />

    </div>);
  }
}

export const MatchPanelViewWrapper = createForm()(MatchPanelView);

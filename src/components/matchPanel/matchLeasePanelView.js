import React from 'react'
import {  NoticeBar,List , Card, Stepper, Icon, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import {propertys} from 'propertysViewModel'
//import {SingleLeasePropertyForMatchViewWrapper} from 'singleLeasePropertyForMatchView'
import {ControlLeaseViewWrapper} from '../control/controlLeaseView'
//import {SingleRentPropertyForMatchViewWrapper} from 'singleRentPropertyForMatchView'
//import {ListOfMatchPropertys} from 'listOfMatch/listOfMatchPropertys'
import {ListOfMatchRentPropertys} from '../listOfMatch/listOfMatchRentPropertys'
import { observer } from 'mobx-react';
import MobxStore from 'mobxStore';

// const Item = List.Item;
// const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
class MatchLeasePanelView extends React.Component {

  constructor(props) {
    super(props)

  }

  state = {
    disabled: false,
    selectedSegmentIndex: 0,
  }

  render() {
        var property = propertys.propertys.get(MobxStore.router.params.keyID );

        console.log( 'store.params.keyID', MobxStore.router.params.keyID )
        console.log( 'matchLeasePanelView property', property )

    return (
      <div>
    <ControlLeaseViewWrapper property={property} />
    <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
      以下是 HoMatching 為你配對嘅客!
    </NoticeBar>
    <WhiteSpace size="sm" />
    <ListOfMatchRentPropertys propertys={property.matchedPropertys} timeEnter={this.props.timeEnter} />

    </div>);
  }
}
  // <ListOfMatchPropertys propertys={property.matchedPropertys} />
export const MatchLeasePanelViewWrapper = createForm()(MatchLeasePanelView);

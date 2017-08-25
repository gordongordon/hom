import React from 'react'
import {  NoticeBar,List , Card, Stepper, Icon, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
import { createForm } from 'rc-form';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import {propertys} from 'userModelView'
import {SingleLeasePropertyForMatchViewWrapper} from '../singlePropertyView/singleLeasePropertyForMatchView'
//import {SingleRentPropertyForMatchViewWrapper} from '../singlePropertyView/singleRentPropertyForMatchView'
import {ListOfMatchPropertys} from '../listOfMatch/listOfMatchPropertys'
import {observer} from 'mobx-react';
import MobxStore from 'mobxStore';

const Item = List.Item;
const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
class MatchPanelView extends React.Component {

  constructor(props) {
    super(props)

  }

  state = {
    disabled: false,
    selectedSegmentIndex: 0,
  }
  render() {
//        var property = propertys.propertys.get(this.props.keyID);
//        var property = propertys.propertys.get("-Kof2Ki5bbvt5MS2QJMG");
        var property = propertys.propertys.get(MobxStore.router.params.keyID );

        //console.log( 'keyID', this.props.keyID )
        // console.log( 'store.queryParams.keyID', store.router.queryParams.keyID )
        console.log( 'store.params.keyID', MobxStore.router.params.keyID )


        console.log( 'matchPanelView property', property )
        //console.log( 'matchPanelView propertys.size', propertys.propertys.size )
        //console.log( 'matchPanelView matched propertys', property.matchedPropertys.size)
        // const that = this;
        // const { getFieldProps } = this.props.form;
        // const minDate = moment().locale('zh-cn').utcOffset(8);
        // const maxDate = moment(minDate).add(6, 'M');


    return (
      <div>

    <SingleLeasePropertyForMatchViewWrapper property={property} />
    <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
      以下是 HoMatching 為你配對嘅客!
    </NoticeBar>
    <WhiteSpace size="sm" />
    <ListOfMatchPropertys propertys={property.matchedPropertys} />
    </div>);
  }
}
  // <ListOfMatchPropertys propertys={property.matchedPropertys} />
export const MatchPanelViewWrapper = createForm()(MatchPanelView);

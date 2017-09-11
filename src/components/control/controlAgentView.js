import React from "react";
import {
  List,
  TabBar,
  Tabs,
  Card,
  Stepper,
  Picker,
  SwipeAction,
  DatePicker,
  Badge,
  Flex,
  InputItem,
  Button,
  WhiteSpace,
  SegmentedControl
} from "antd-mobile";
import { createForm } from "rc-form";

import { Fb } from "firebase-store";
import { observer } from "mobx-react";
import { DISTRICK } from "DISTRICK";

const TabPane = Tabs.TabPane;

// import moment from 'moment';
// import 'moment/locale/zh-cn';
//import {propertys} from 'userModelView'

// const Item = List.Item;
// const Brief = Item.Brief;
//
// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: "#fff", padding: "0.2rem 0.2rem" }}
  >
    <div style={{ display: "flex", height: "0.9rem", lineHeight: "0.9rem" }}>
      <div
        style={{
          padding: "0.1rem",
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}
      >
        {props.children}
      </div>
      <div style={{ textAlign: "right", color: "#888" }}>{props.extra} ></div>
    </div>
  </div>
);

@observer
class ControlAgentView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
      id: this.props.property.fbid
    };

    this.onChangeAddress = this.onChangeAddress.bind(this);
    // this.onChangeEarlyTimeToView = this.onChangeEarlyTimeToView.bind(this);
  } // End of constructor

  //
  onChangeAddress = value => {
    const id = this.state.id;
    // var value = this.props.form.getFieldsValue();

    const addressRegion = value[0];
    const addressLocation = value[1];
    const addressBuilding = value[2];

    console.log(
      `location ${addressLocation}, building ${addressBuilding} with ${id} ${value}`
    );
    //     console.log( 'address ${}')

    if (addressBuilding === "ALL") {
      // console.log( 'MOS0000')
      Fb.app.agentsFilterRef.child(id).update({
        orderByChild: "addressLocation",
        addressRegion: addressRegion,
        addressLocation: addressLocation,
        nameOfBuilding: addressBuilding
      });
    } else {
      Fb.app.agentsFilterRef.child(id).update({
        orderByChild: "nameOfBuilding",
        addressRegion: addressRegion,
        addressLocation: addressLocation,
        nameOfBuilding: addressBuilding
      });
    }
  };

  // onChange = (e) => {
  //   console.log(`ControlAgentView.selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  // }
  //
  // onValueChange = (value) => {
  //   console.log(value);
  // }

  render() {
    const { property } = this.props;
    const that = this;
    const { getFieldProps } = this.props.form;
    // For DatePicker
    //const minDate = moment().locale('zh-cn').utcOffset(8);
    // const maxDate = moment(minDate).add(6, 'M');

    // const region = property.addressRegion;
    // const location = property.addressLocation;
    // const building = property.nameOfBuilding;
    // const address = [region, location, building]
    //const address = property.addressToArray;

    //console.log(`address ${address}`)

    const address = property.addressToArray;
    //    console.log('Single Agent Property property', property)
    var selectedIndex = this.props.selectedIndex;
    const onChange = this.props.onChange;

    if (property.nameOfBuildingLabel === undefined) {
      console.log("*nameOfBuildingLabel undefined");
    }

    //     <SegmentedControl values={['B搵買盤', 'S放賣盤', 'R搵租盤', 'L放租盤', '已跟進/回覆']} selectedIndex={this.props.selectedIndex} onChange={onChange} />

    /* <List.Item extra={
  <Stepper
    style={{ width: '100%', minWidth: '2rem' }}
    {...getFieldProps('buyBudgetMax', {
      initialValue: 300
    }) }
    showNumber
    max={100000}
    min={100}
    step={5}
  />}
>
  預算上限/萬
     </List.Item> */

    return (
      <div>
        <SegmentedControl
          values={[property.roleName+"-查詢", "已跟進-"+property.roleName]}
          selectedIndex={this.props.selectedIndex}
          onChange={onChange}
        />
        <List>
          <Picker
            data={DISTRICK}
            cols={3}
            {...getFieldProps("districk", {
              initialValue: address
            })}
            className="forss"
            title="請選擇大廈/屋苑"
            extra="請選擇大廈/屋苑"
            onChange={this.onChangeAddress}
          >
            <CustomChildren>大廈/屋苑</CustomChildren>
          </Picker>
        </List>
        <WhiteSpace size="sm" />
      </div>
    );
  }
}
//       <SegmentedControl tintColor={'#ff0000'} values={['最貴', '最平', '最快', '最滿意']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />

export const ControlAgentViewWrapper = createForm()(ControlAgentView);

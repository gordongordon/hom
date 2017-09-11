import React from "react";
import {
  List,
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
import moment from "moment";
import "moment/locale/zh-cn";
import { Fb } from "firebase-store";
import { observer } from "mobx-react";

//import {propertys} from 'userModelView'

const Item = List.Item;
const Brief = Item.Brief;

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
class ControlLeaseView extends React.Component {
  constructor(props) {
    super(props);

    // property = propertys.propertys.get(this.props.keyID);
    // console.log('p', property)
    // console.log('p.nameOfBuilding', property.nameOfBuilding)

    this.state = {
      disabled: false,
      selectedSegmentIndex: 0,
      id: this.props.property.fbid
    };
  }

  onChangeLeasePrice = val => {
    const id = this.state.id;

    Fb.app.usersRef.child(id).update({ leasePrice: parseInt(val) });
    Fb.propertys.child(id).update({ leasePrice: parseInt(val) });
    Fb.lease.child(id).update({ leasePrice: parseInt(val) });
  };

  onChangeEarlyTimeToView = () => {
    const id = this.state.id;
    const v = this.props.form.getFieldsValue();

    //// debugger
    Fb.app.usersRef
      .child(id)
      .update({ earlyTimeToView: v.earlyTimeToView.toJSON() });
    Fb.propertys
      .child(id)
      .update({ earlyTimeToView: v.earlyTimeToView.toJSON() });
    Fb.lease.child(id).update({ earlyTimeToView: v.earlyTimeToView.toJSON() });
  };

  render() {
    const { property } = this.props;

    const that = this;
    const { getFieldProps } = this.props.form;
    // For DatePicker
    const minDate = moment()
      .locale("zh-cn")
      .utcOffset(8);
    const maxDate = moment(minDate).add(6, "M");

    // console.log( 'SingleLeaseProperty property', this.props.property )

    console.log(
      `ControlLeaseView fbid ${property.fbid}, matched.size ${property
        .matchedPropertys.size}`
    );
    var selectedIndex = this.props.selectedIndex;
    const onChange = this.props.onChange;

    // <Picker data={NameOfBuilding} cols={1} {...getFieldProps('nameOfBuilding', {
    //     initialValue: [property.nameOfBuilding],
    //   })} className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑">
    //   <List.Item arrow="horizontal">出租物業</List.Item>
    // </Picker>

    return (
      <div>
        <SegmentedControl
          values={["地產經紀-即時回覆", "租客-配對"]}
          selectedIndex={this.props.selectedIndex}
          onChange={onChange}
        />
        <List>
          <List.Item arrow="empty" extra={property.nameOfBuildingLabel}>
            Leaser物業
          </List.Item>

          <List.Item
            extra={
              <Stepper
                style={{ width: "100%", minWidth: "2rem" }}
                value={property.leasePrice}
                showNumber
                max={100000}
                min={1000}
                defaultValue={8000}
                step={500}
                onChange={that.onChangeLeasePrice}
              />
            }
          >
            租金/元
          </List.Item>

          <DatePicker
            mode="date"
            title="選擇日期"
            extra="選擇日期,最長半年來"
            {...getFieldProps("earlyTimeToView", {
              initialValue: moment(property.earlyTimeToView)
            })}
            minDate={minDate}
            maxDate={maxDate}
            onOk={that.onChangeEarlyTimeToView}
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

export const ControlLeaseViewWrapper = createForm()(ControlLeaseView);

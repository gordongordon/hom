import React from "react";
import {
  Card,
  Picker,
  List,
  WhiteSpace,
  InputItem,
  Button,
  SegmentedControl,
  Checkbox,
  Switch,
  Stepper,
  DatePicker
} from "antd-mobile";
import { createForm } from "rc-form";
import { MTR } from "MTR";
import { PARTITION } from "PARTITION";
import { DISTRICK } from "DISTRICK";

import { Fb } from "firebase-store";
import { Property } from "property";
import { Propertyhk } from "propertyhk";
import { propertys } from "userModelView";

import moment from "moment";
import "moment/locale/zh-cn";
import { observer } from "mobx-react";
import MobxStore from "mobxStore";
import views from "views";
// 如果不是使用 List.Item 作为 children

const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: "#fff", padding: "0 0.3rem" }}
  >
    <div style={{ display: "flex", height: "0.9rem", lineHeight: "0.9rem" }}>
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}
      >
        {props.children}
      </div>
      <div style={{ textAlign: "right", color: "#888" }}>{props.extra}</div>
    </div>
  </div>
);

const CheckboxItem = Checkbox.CheckboxItem;

// const roomKey = {
//   '0' : '開放式',
//   '1' : '1房',
//   '2' : '2房',
//   '3' : '3房',
//   '4' : '4房',
//   '5' : '5房',
// }

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

@observer
class FormLeaseAgentPropertyAntMobile extends React.Component {
  state = {
    // data: [],
    // cols: 1,
    // //pickerValue: [],
    // asyncValue: [],
    // sValue: ["2001", "3001"],

    // // input net size
    // netSizefocused: false
  };

  // onClick = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       data: province,
  //     });
  //   }, 120);
  // };
  //
  // onChange = (val) => {
  //   console.log(val);
  // }

  // onPickerChange = (val) => {
  //   console.log(val);
  //   let colNum = 1;
  //   const d = [...this.state.data];
  //   const asyncValue = [...val];
  //   if (val[0] === 'zj') {
  //     d.forEach((i) => {
  //       if (i.value === 'zj') {
  //         colNum = 2;
  //         if (!i.children) {
  //           i.children = [{
  //             value: 'zj-nb',
  //             label: '宁波',
  //           }, {
  //             value: 'zj-hz',
  //             label: '杭州',
  //           }];
  //           asyncValue.push('zj-nb');
  //         } else if (val[1] === 'zj-hz') {
  //           i.children.forEach((j) => {
  //             if (j.value === 'zj-hz') {
  //               j.children = [{
  //                 value: 'zj-hz-xh',
  //                 label: '西湖区',
  //               }];
  //               asyncValue.push('zj-hz-xh');
  //             }
  //           });
  //           colNum = 3;
  //         }
  //       }
  //     });
  //   } else {
  //     colNum = 1;
  //   }
  //   this.setState({
  //     data: d,
  //     cols: colNum,
  //     asyncValue,
  //   });
  // };

  addPropertyForLease = v => {
    var p = new Property();

    //p.nearByMtrLine = v.nearByMtrLine;
    //p.nearByMtrStop = v.nearByMtrStop;
    p.uid = MobxStore.app.uid;

    p.addressRegion = v.districk[0];
    p.addressLocation = v.districk[1];
    p.nameOfBuilding = v.districk[2];

    p.dueDay = v.dueDay.toJSON();
    p.earlyTimeToView = v.earlyTimeToView.toJSON();
    p.leasePrice = parseInt(v.leasePrice);
    p.netSize = parseInt(v.netSize);
    p.numOfRoom = parseInt(v.partition[0]);
    p.numOfBathroom = parseInt(v.partition[1]);
    p.numOfLivingroom = parseInt(v.partition[2]);
    // p.isPreferPayAnnually = v.isPreferPayAnnually;
    //p.isRentAbleNow = v.isRentAbleNow;
    p.isFreeForSevenDay = v.isFreeForSevenDay;
    p.hasHomeHardware = v.hasHomeHardware;
    // p.isViewAble = v.isViewAble;
    p.contactName = v.contactName;
    p.contactPhone = parseInt(v.contactPhone);
    p.contactEmail = v.contactEmail;

    p.isPetAllowed = v.isPetAllowed;
//    p.leasingPeriod = v.leasingPeriod;

    const id = Fb.app.agentLeaseRef.push().key;
    p.typeFor = "rent";
    p.typeTo = "lease";
    p.fbid = id;
    p.typeBy = "engage";

    p.relatedFbid = MobxStore.router.params.keyID;

    Fb.app.agentLeaseRef.update({ [id]: p.serialize() });

    Fb.agentPropertys.child(id).set(p.serialize());

    MobxStore.router.goTo(views.matchAgent, {
      keyID: MobxStore.router.params.filterID,
      typeTo: "rent",
      selectedSegmentIndex: 1
    });
  };

  submit = e => {
    const value = this.props.form.getFieldsValue();

    console.log("value", value);

    e.preventDefault();
    this.addPropertyForLease(value);
    //  console.log( '地鐵線', value.MTR )
    //  console.log( '呎', value.netSize)
    //  console.log( '租金', value.leasePrice )
    //  console.log( 'Name', value.contactName )
    //  console.log( '聯絡電郵', value.contactEmail )
    //  console.log( '聯絡手機', value.contactPhone )
    //  console.log( '間隔', roomKey[value.room[0]] )
    //
    //  this.addPropertyForLease( '1001', '2001', value.netSize, value.leasePrice, value.room[0], value.room[1],
    //                       value.contactName, value.contactPhone, value.contactEmail)
    //  console.log(this.props.form.getFieldsValue());

    //MobxStore.router.goTo( views.second )
  };

  sale = () => {};

  // '房東', '租人','賣家','買家'
  render() {
    const { getFieldProps } = this.props.form;
    const leaseWith = [
      { value: 0, label: "包差餉" },
      { value: 1, label: "包地租/稅" },
      { value: 2, label: "包管理費" }
    ];

    // Get the last property to generate default form values
    const property = MobxStore.app.passByRef;
    const addressArray = property.addressToArray;
    const partitionArray = property.partitionToArray;

    // For DatePicker
    const minDate = moment()
      .locale("zh-cn")
      .utcOffset(8);
    const maxDate = moment(minDate).add(6, "M");

    //moment().format('L');

    return (
      <div>
        <List style={{ backgroundColor: "white" }} className="picker-list">
          <Picker
            data={DISTRICK}
            cols={3}
            {...getFieldProps("districk", {
              initialValue: addressArray
            })}
            className="forss"
            title="請選擇大廈/屋苑"
            extra="請選擇大廈/屋苑"
          >
            <List.Item arrow="horizontal">大廈/屋苑</List.Item>
          </Picker>

          <DatePicker
            mode="date"
            title="選擇日期"
            extra="選擇日期,最長半年來"
            {...getFieldProps("dueDay", {
              initialValue : moment( property.dueDay ),
            })}
            minDate={minDate}
            maxDate={maxDate}
          >
            <List.Item arrow="horizontal">最快交吉日期</List.Item>
          </DatePicker>

          <DatePicker
            mode="date"
            title="選擇日期"
            extra="選擇日期,最長半年來"
            {...getFieldProps("earlyTimeToView", {
              initialValue : moment( property.earlyTimeToView ),
            })}
            minDate={minDate}
            maxDate={maxDate}
          >
            <List.Item arrow="horizontal">最快幾時有樓睇</List.Item>
          </DatePicker>
          <InputItem
            {...getFieldProps("netSize", {
              initialValue: property.netSize,
              normalize: (v, prev) => {
                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                  if (v === ".") {
                    return "0.";
                  }
                  return prev;
                }
                return v;
              }
            })}
            type="number"
            placeholder="請輸入實用面積"
            extra="呎"
          >
            實用面 積
          </InputItem>

          <Picker
            data={PARTITION}
            cols={2}
            title="選擇間隔"
            cascade={false}
            {...getFieldProps("partition", {
              initialValue: partitionArray
            })}
            extra="選擇間隔"
            onOk={e => console.log("ok", e)}
            onDismiss={e => console.log("dismiss", e)}
          >
            <List.Item arrow="horizontal">間隔</List.Item>
          </Picker>

          <InputItem
            {...getFieldProps("leasePrice", {
              initialValue: property.leasePrice,
              normalize: (v, prev) => {
                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                  if (v === ".") {
                    return "0.";
                  }
                  return prev;
                }
                return v;
              }
            })}
            type="number"
            placeholder="請輸入租金月"
            extra="元"
          >
            租金
          </InputItem>

          <List>
            <List.Item
              extra={
                <Switch
                  {...getFieldProps("isPetAllowed", {
                    initialValue: property.isPetAllowed,
                    valuePropName: "checked"
                  })}
                  onClick={checked => {
                    console.log(checked);
                  }}
                />
              }
            >
              可養寵物
            </List.Item>

            <List.Item
              extra={
                <Switch
                  {...getFieldProps("isFreeForSevenDay", {
                    initialValue: property.isFreeForSevenDay,
                    valuePropName: "checked"
                  })}
                  onClick={checked => {
                    console.log(checked);
                  }}
                />
              }
            >
              可提供七日免租期
            </List.Item>
            <List.Item
              extra={
                <Switch
                  {...getFieldProps("hasHomeHardware", {
                    initialValue: property.hasHomeHardware,
                    valuePropName: "checked"
                  })}
                  onClick={checked => {
                    console.log(checked);
                  }}
                />
              }
            >
              提供家俬設備
            </List.Item>

          </List>

          <InputItem
            {...getFieldProps("contactName", {
              initialValue: property.contactName
            })}
            type="text"
            placeholder="請輸入姓名"
            clear
          >
            姓名
          </InputItem>

          <InputItem
            clear
            {...getFieldProps("contactPhone", {
              initialValue: property.contactPhone
            })}
            type="phone"
            placeholder="請輸入電話"
          >
            聯絡手機
          </InputItem>

          <InputItem
            {...getFieldProps("contactEmail", {
              initialValue: property.contactEmail
            })}
            clear
            placeholder="請輸入電郵地址"
          >
            聯絡電郵
          </InputItem>

          <List.Item
            extra={
              <Button type="ghost" size="large" inline onClick={this.submit}>
                獲得匹配
              </Button>
            }
            multipleLine
          >
            HoMatching
            <List.Item.Brief>尊重您的私隱和信息，不會被共享。</List.Item.Brief>
          </List.Item>
        </List>
      </div>
    );
  }
}

export default createForm()(FormLeaseAgentPropertyAntMobile);


            // <List.Item
            //   extra={
            //     <Switch
            //       {...getFieldProps("isViewAble", {
            //         initialValue: property.isViewAble,
            //         valuePropName: "checked"
            //       })}
            //       onClick={checked => {
            //         console.log(checked);
            //       }}
            //     />
            //   }
            // >
            //   有樓睇
            // </List.Item>
// ReactDOM.render(<TestWrapper />, mountNode);
// .picker-list .am-list-item .am-list-line .am-list-extra {
//   flex-basis: initial;
// }

// <Card>
//    <Button type="primary"></Button>
//    <Card.Header
//      title="Doube Cove"
//      thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
//      extra={<span>Ask Price</span>}
//    />
//    <Card.Body>
//
//       <img src="http://semantic-ui.com/images/wireframe/image.png" style={{ width: '200px', float : 'left' , align : 'left'}} alt="double cove"/>
//       <List renderHeader={() => '基本样式'} className="my-list">
// <List.Item extra={'内容内容'}>标题文字</List.Item>
// </List>
// <br style={{ clear: 'both' }} />
//
//    </Card.Body>
//    <Card.Footer content={<Button type="ghost" inline size="small">Hello</Button>} extra={<h3>$300萬元</h3>} />
//  </Card>

/// 區域"
// <Picker cols={3} extra="區域"
//   data={DISTRICK}
//   title="區域"
//    {...getFieldProps('MTR', {
//       initialValue: ['HKNT', 'MOS', 'MOSDBC'],
//     })}
//   onOk={e => console.log('ok', e)}
//   onDismiss={e => console.log('dismiss', e)}
// >
// <List.Item arrow="horizontal">區域</List.Item>
// </Picker>

// <List renderHeader={() => '租金包含'}>
//
//   {leaseWith.map(i => (
//     <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
//       {i.label}
//     </CheckboxItem>
//   ))}
//
//   <List.Item
//   extra={<Switch
//             {...getFieldProps('isPreferPayAnnually', {
//               initialValue: false,
//               valuePropName: 'checked',
//             })}
//             onClick={(checked) => { console.log(checked); }}
//           />}
//
//   >較喜歡預繳一年租金</List.Item>
//   <List.Item
//   extra={<Switch
//             {...getFieldProps('isNegotiable', {
//               initialValue: false,
//               valuePropName: 'checked',
//             })}
//             onClick={(checked) => { console.log(checked); }}
//           />}
//
//   >有價講</List.Item>
//   <List.Item
//   extra={<Switch
//             {...getFieldProps('isViewAbleNow', {
//               initialValue: false,
//               valuePropName: 'checked',
//             })}
//             onClick={(checked) => { console.log(checked); }}
//           />}
//
//   >可即時睇樓</List.Item>
//   <List.Item
//   extra={<Switch
//             {...getFieldProps('isRentAbleNow', {
//               initialValue: false,
//               valuePropName: 'checked',
//             })}
//             onClick={(checked) => { console.log(checked); }}
//           />}
//
//   >可即時租住</List.Item>
//
// <List.Item
// extra={<Switch
//           {...getFieldProps('isFreeForSevenDay', {
//             initialValue: false,
//             valuePropName: 'checked',
//           })}
//           onClick={(checked) => { console.log(checked); }}
//         />}
//
// >可提供七日免租期</List.Item>
// <List.Item
// extra={<Switch
//           {...getFieldProps('hasHomeHardware', {
//             initialValue: false,
//             valuePropName: 'checked',
//           })}
//           onClick={(checked) => { console.log(checked); }}
//         />}
//
// >提供家俬設備</List.Item>
//
// <List.Item
// extra={<Switch
//           {...getFieldProps('isViewAble', {
//             initialValue: true,
//             valuePropName: 'checked',
//           })}
//           onClick={(checked) => { console.log(checked); }}
//         />}
//
// >有樓睇</List.Item>
//
// </List>

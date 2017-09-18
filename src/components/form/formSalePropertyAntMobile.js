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
  DatePicker
} from "antd-mobile";
import { createForm } from "rc-form";
import { MTR } from "MTR";
import { PARTITION } from "PARTITION";
import { DISTRICK } from "DISTRICK";

import { Fb } from "firebase-store";
import { Property } from "property";
import moment from "moment";
import "moment/locale/zh-cn";
import MobxStore from "mobxStore";
import views from "views";
import { LEVEL } from "LEVEL";

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

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

const CheckboxItem = Checkbox.CheckboxItem;

const roomKey = {
  "0": "開放式",
  "1": "1房",
  "2": "2房",
  "3": "3房",
  "4": "4房",
  "5": "5房"
};

class FormSalePropertyAntMobile extends React.Component {
  state = {
    // data: [],
    //cols: 1,
    //pickerValue: [],
    //asyncValue: [],
    //sValue: ["2001", "3001"],

    // input net size
    //netSizefocused: false
  };

  // onClick = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       data: province
  //     });
  //   }, 120);
  // };
  //
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

  addPropertyForSale = v => {
    var p = new Property();
    var id;
    // p.nearByMtrLine = nearByMtrLine;
    // p.nearByMtrStop = nearByMtrStop;
    //p.uid = MobxStore.app.uid;

    p.addressRegion = v.districk[0];
    p.addressLocation = v.districk[1];
    p.nameOfBuilding = v.districk[2];

    // p.dueDay = v.dueDay.toJSON();
    p.earlyTimeToView = v.earlyTimeToView.toJSON();
    //p.leasePrice = parseInt(v.leasePrice);
    p.netSize = parseInt(v.netSize);
    p.salePrice = parseInt(v.salePrice);
    p.numOfRoom = parseInt(v.partition[0]);
    p.numOfBathroom = parseInt(v.partition[1]);
    p.numOfLivingroom = parseInt(v.partition[2]);
    p.isSaleWithLease = v.isSaleWithLease;
    // p.isNegotiable = v.isNegotiable;
    p.isViewAble = v.isViewAble;

    //p.isPreferPayAnnually = v.isPreferPayAnnually;
    //p.isRentAbleNow = v.isRentAbleNow;
    //p.isFreeForSevenDay = v.isFreeForSevenDay;

    // p.hasHomeHardware = v.hasHomeHardware;
    p.contactName = v.contactName;
    p.contactPhone = parseInt(v.contactPhone);
    p.contactEmail = v.contactEmail;

    p.level = v.level[0];
    p.isPetAllowed = v.isPetAllowed;

    debugger

    // Catch none user syn method wait to be true
    if (MobxStore.app.uid === null) {
      if (Fb.startLoginAnonyhmously()) {
        id = Fb.app.usersRef.push().key;
      }
    } else {
      id = Fb.app.usersRef.push().key;
    }
    p.uid = MobxStore.app.uid;
    p.typeFor = "buy";
    p.typeTo = "sale";
    p.fbid = id;
    Fb.app.usersRef.update({ [id]: p.serialize() });

    //    const id2 = Fb.propertys.push().key;
    Fb.propertys.child(id).set(p.serialize());
    Fb.sale.child(id).set(p.serialize());

    MobxStore.router.goTo(views.matchSale, { keyID: id });
  };

  submit = e => {
    const value = this.props.form.getFieldsValue();

    e.preventDefault();
    //  console.log( '地鐵線', value.MTR )
    //  console.log( '呎', value.netSize)
    //  console.log( '售價', value.salePrice )
    //  console.log( 'Name', value.contactName )
    //  console.log( 'email', value.contactEmail )
    //  console.log( '手 機', value.contactPhone )
    //  console.log( '間隔', roomKey[value.room[0]] )

    this.addPropertyForSale(value);
    //   MobxStore.router.goTo( views.second )

    //   console.log(this.props.form.getFieldsValue());
  };

  sale = () => {};

  toNumber = (v) => {
    if (v === undefined) {
      return v;
    }
    if (v === '') {
      return undefined;
    }
    if (v && v.trim() === '') {
      return NaN;
    }
    return Number(v);
  }

  // '房東', '租人','賣家','買家'
  render() {
    const that = this;
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;    
    const errorContactPhone = getFieldError('contactPhone');
    const errorContactEmail = getFieldError('contactEmail');
    const errorContactName = getFieldError('contactName');
    const errorNetSize = getFieldError('netSize');
    const errorSalePrice = getFieldError('salePrice');
  

    // For DatePicker
    const minDate = moment()
      .locale("zh-cn")
      .utcOffset(8);
    const maxDate = moment(minDate).add(6, "M");

    return (
      <div>
        <List style={{ backgroundColor: "white" }} className="picker-list">
          <Picker
            data={DISTRICK}
            cols={3}
            {...getFieldProps("districk", {
              initialValue: ["NTTV", "MOS", "MOS0001"]
            })}
            className="forss"
            title="請選擇大廈/屋苑"
            extra="請選擇大廈/屋苑"
          >
            <List.Item arrow="horizontal">大廈/屋苑</List.Item>
          </Picker>

          <InputItem
          error={errorNetSize ? true : false}
          {...getFieldProps('netSize', {
            initialValue: '50',
            validate: [{
              trigger: 'onBlur',
              rules: [
              {
                required : true,
                transform: that.toNumber,
                type : 'number',
                min : 50
              }
             ],
            }],
          })}
            type="number"
            placeholder="0"
            clear
            extra="呎"
          >
            實用 面 積
          </InputItem>

          <DatePicker
            mode="date"
            title="選擇日期"
            extra="選擇日期,最長半年來"
            {...getFieldProps("earlyTimeToView", {
              initialValue: minDate
            })}
            minDate={minDate}
            maxDate={maxDate}
          >
            <List.Item arrow="horizontal">最快幾時有樓睇</List.Item>
          </DatePicker>

          <Picker
            data={PARTITION}
            cols={3}
            title="選擇間隔"
            cascade={false}
            {...getFieldProps("partition", {
              initialValue: ["0", "1", "1"]
            })}
            extra="選擇間隔"
            onOk={e => console.log("ok", e)}
            onDismiss={e => console.log("dismiss", e)}
          >
            <List.Item arrow="horizontal">間隔</List.Item>
          </Picker>

          <List.Item
            extra={
              <Switch
                {...getFieldProps("isPetAllowed", {
                  initialValue: false,
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

          <Picker  data={LEVEL}
          cols={1}
          title="選擇層數"
          cascade={false}
          {...getFieldProps('level', {
              initialValue: ['1'],
          })}
          extra="選擇層數"
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
         >
         <List.Item arrow="horizontal">層數</List.Item>
        </Picker>

        
          <InputItem
          error={errorSalePrice ? true : false}
          {...getFieldProps('salePrice', {
            initialValue: '1',
            validate: [{
              trigger: 'onBlur',
              rules: [
              {
                required : true,
                transform: that.toNumber,
                type : 'number',
                min : 1
              }
             ],
            }],
          })}
            type="number"
            placeholder="請求入場價格/每萬"

            clear
            extra="萬元"
          >
            售價
          </InputItem>

          <List.Item
            extra={
              <Switch
                {...getFieldProps("isSaleWithLease", {
                  initialValue: false,
                  valuePropName: "checked"
                })}
                onClick={checked => {
                  console.log(checked);
                }}
              />
            }
          >
            出售連租賃
          </List.Item>

          <List.Item
            extra={
              <Switch
                {...getFieldProps("isViewAble", {
                  initialValue: true,
                  valuePropName: "checked"
                })}
                onClick={checked => {
                  console.log(checked);
                }}
              />
            }
          >
            有樓睇
          </List.Item>
          </List>

          <List renderHeader={() => 'Contact Info'} >
          <InputItem
            clear
            error={errorContactPhone ? true : false}
            {...getFieldProps('contactPhone', {
              initialValue: '96181448',
              validate: [{
                trigger: 'onBlur',
                rules: [
                {
                  required : true,
                  transform: that.toNumber,
                  type : 'number',
                  min : 10000000
                }
               ],
              }],
            })}
            type="number"
            maxLength={8}
            placeholder="請輸入電話"
            >
            聯絡手機
          </InputItem>
          <InputItem
          {...getFieldProps('contactEmail', {
            validate: [{
              trigger: 'onBlur',
              rules: [{
                required: true,
              }],
            }, {
              trigger: ['onBlur'],
              rules: [{
                type: 'email',
                message: '错误格式',
              }],
            }],
          })}
            clear
            placeholder="請輸入電郵地址"
            error={errorContactEmail ? true : false}
          >
            電郵
          </InputItem>
          <InputItem
            clear
            error={errorContactName ? true : false}
            {...getFieldProps('contactName', {
              initialValue: 'Gordon',
              validate: [{
                trigger: 'onBlur',
                rules: [
                {
                  required : true,
                  type : 'string',
                }
               ],
              }],
            })}
            type="text"
            placeholder="請輸入姓名"
            >
            姓名
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

export default createForm()(FormSalePropertyAntMobile);

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

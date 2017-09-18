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
  DatePicker,
  Stepper
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

const jobNature = [
  {
    label: "私人企業",
    value: "0"
  },
  {
    label: "政府工",
    value: "1"
  },
  {
    label: "自僱人士",
    value: "2"
  },
  {
    label: "學生",
    value: "3"
  },
  {
    label: "海外人士",
    value: "4"
  }
];

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

class FormRentPropertyAntMobile extends React.Component {


  state = {
    hasError: false,
    value : ''
    //data: [],
    //cols: 1,
    //pickerValue: [],
    //asyncValue: [],
    //sValue: ["2001", "3001"],
    // incomeFocus: false,
    // phoneFocus : false,
    // secondFocus : false,
    // nameFocus: true,
    // emailFocus: false,
    // type: 'money',
    // input net size
    //netSizefocused: false
  };

  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: province
      });
    }, 120);
  };

  onChange = val => {
    console.log(val);
  };

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

  addPropertyForRent = v => {
    var p = new Property();
    var id;
    //p.nearByMtrLine = v.nearByMtrLine;
    //p.nearByMtrStop = v.nearByMtrStop;
    //    p.uid = MobxStore.app.uid;

    //    p.nameOfBuilding = v.nameOfBuilding[0]

    p.addressRegion = v.districk[0];
    p.addressLocation = v.districk[1];
    p.nameOfBuilding = v.districk[2];

    p.jobNature = parseInt(v.jobNature[0]);
    p.income = parseInt(v.income);

    p.earlyTimeToView = v.earlyTimeToView.toJSON();
    p.rentBudgetMax = parseInt(v.rentBudgetMax);
    p.numOfPeopleLiving = parseInt(v.numOfPeopleLiving);

    p.netSizeMin = parseInt(v.netSizeMin);

    p.numOfRoom = parseInt(v.partition[0]);
    p.numOfBathroom = parseInt(v.partition[1]);
    p.numOfLivingroom = parseInt(v.partition[2]);
    // p.isPreferPayAnnually = v.isPreferPayAnnually;
    //p.isRentAbleNow = v.isRentAbleNow;
    //p.isFreeForSevenDay = v.isFreeForSevenDay;

    p.hasHomeHardware = v.hasHomeHardware;
    // p.isViewAble = v.isViewAble;
    p.contactName = v.contactName;
    p.contactPhone = parseInt(v.contactPhone);
    p.contactEmail = v.contactEmail;

    p.isPetAllowed = v.isPetAllowed;
    p.leasingPeriod = v.leasingPeriod;

    // catch non user
    if (MobxStore.app.uid === null) {
      if (Fb.startLoginAnonyhmously()) {
        id = Fb.app.usersRef.push().key;
      }
    } else {
      id = Fb.app.usersRef.push().key;
    }
    p.uid = MobxStore.app.uid;

    p.typeFor = "lease";
    p.typeTo = "rent";
    p.fbid = id;

    Fb.app.usersRef.update({ [id]: p.serialize() });

    Fb.propertys.child(id).set(p.serialize());
    Fb.rent.child(id).set(p.serialize());

    MobxStore.router.goTo(views.matchRent, { keyID: id });
  };

  submit = e => {
    const value = this.props.form.getFieldsValue();
    e.preventDefault();

    this.props.form.validateFields((error, values) => {
      if (!error) {
        console.log('ok', values);
      } else {
        console.log('error', error, values);
      }
    });    

    //  console.log( '地鐵線', value.MTR )
    //  console.log( '呎', value.netSize)
    //  console.log( '租金', value.leasePrice )
    //  console.log( 'Name', value.contactName )
    //  console.log( '聯絡電郵', value.contactEmail )
    //  console.log( '聯絡手機', value.contactPhone )
    //  console.log( '間隔', roomKey[value.room[0]] )

    this.addPropertyForRent(value);
    //console.log(this.props.form.getFieldsValue());
    //    MobxStore.router.goTo( views.second )
  };

  // checkContactPhone = (value) => {
  //   if (value.replace(/\s/g, '').length < 8) {
  //     this.setState({
  //       hasError: true,
  //     });
  //   } else {
  //     this.setState({
  //       hasError: false,
  //     });
  //   }
  //   this.setState({
  //     value,
  //   });
  // }

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
    //const { getFieldProps, setFieldsInitialValue } = this.props.form;
    const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;    
    const errorContactPhone = getFieldError('contactPhone');
    const errorContactEmail = getFieldError('contactEmail');
    const errorContactName = getFieldError('contactName');
    const errorIncome = getFieldError('income');
    
    const leaseWith = [
      { value: 0, label: "包差餉" },
      { value: 1, label: "包地租/稅" },
      { value: 2, label: "包管理費" }
    ];
    const { type } = this.state;

    // For DatePicker
    const minDate = moment()
      .locale("zh-cn")
      .utcOffset(8);
    const maxDate = moment(minDate).add(6, "M");

    return (
      <div>
        <List renderHeader={() => 'Rent Form'}>
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

          <Picker
            data={jobNature}
            cols={1}
            {...getFieldProps("jobNature", {
              initialValue: ["3"]
            })}
            className="forss"
            title="請選擇職業"
            extra="請選擇職業"
          >
            <List.Item arrow="horizontal">職業</List.Item>
          </Picker>

          <InputItem
          {...getFieldProps('income', {
            initialValue: '0',
            validate: [{
              trigger: 'onBlur',
              rules: [
              {
                required : true,
                transform: that.toNumber,
                type : 'number',
                min : 0
              }
             ],
            }],
          })}
          error={errorIncome ? true : false}
            maxLength={7}            
            type="number"
            placeholder=""
            extra="元"
            auto
          >
          任何收入
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
            <List.Item arrow="horizontal">最快幾時可樓睇</List.Item>
          </DatePicker>

          <List.Item
            extra={
              <Stepper
                style={{ width: "100%", minWidth: "2rem" }}
                {...getFieldProps("numOfPeopleLiving", {
                  initialValue: 2
                })}
                showNumber
                max={10}
                min={1}
                defaultValue={1}
                step={1}
              />
            }
          >
            同居人數
          </List.Item>

          <List.Item
            extra={
              <Stepper
                style={{ width: "100%", minWidth: "2rem" }}
                {...getFieldProps("netSizeMin", {
                  initialValue: 500
                })}
                showNumber
                max={3000}
                min={100}
                step={200}
              />
            }
          >
            最少實用面積/呎
          </List.Item>

          <Picker
            data={PARTITION}
            cols={2}
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
              <Stepper
                {...getFieldProps("rentBudgetMax", {
                  initialValue: 10000
                })}
                style={{ width: "100%", minWidth: "2rem" }}
                showNumber
                max={100000}
                min={2000}
                step={1000}
              />
            }
          >
            付出租金上限/元
          </List.Item>
          <List.Item
            extra={
              <Stepper
                style={{ width: "100%", minWidth: "2rem" }}
                {...getFieldProps("leasingPeriod", {
                  initialValue: 12
                })}
                showNumber
                max={60}
                min={1}
                step={1}
              />
            }
          >
            租賃期/月
          </List.Item>

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
            要求可養寵物
          </List.Item>

          <List.Item
            extra={
              <Switch
                {...getFieldProps("hasHomeHardware", {
                  initialValue: false,
                  valuePropName: "checked"
                })}
                onClick={checked => {
                  console.log(checked);
                }}
              />
            }
          >
            較喜歡有家俬設備提供
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
            type="email"
            autocomplete="email"
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

export default createForm()(
  FormRentPropertyAntMobile
);

// <List.Item
// extra={<Switch
//           {...getFieldProps('isRentAbleNow', {
//             initialValue: false,
//             valuePropName: 'checked',
//           })}
//           onClick={(checked) => { console.log(checked); }}
//         />}
// >我想即刻租住</List.Item>

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

// <List.Item
// extra={<Switch
//           {...getFieldProps('isPreferPayAnnually', {
//             initialValue: false,
//             valuePropName: 'checked',
//           })}
//           onClick={(checked) => { console.log(checked); }}
//         />}
//
// >可以預繳一年租金</List.Item>
//
// <List.Item
// extra={<Switch
//         {...getFieldProps('isNegotiable', {
//           initialValue: true,
//           valuePropName: 'checked',
//         })}
//         onClick={(checked) => { console.log(checked); }}
//       />}
//
// >有價講</List.Item>

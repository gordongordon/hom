import React from 'react';
import { Card, Picker, List, WhiteSpace, InputItem,
         Button,
         SegmentedControl,
         Checkbox,
         Switch,
         WingBlank,
         Range,
         Stepper,
         DatePicker,
       } from 'antd-mobile';
import { createForm } from 'rc-form';
import { MTR } from 'MTR';
import { PARTITION } from 'PARTITION';
import {HOWTOCONTACT} from 'HOWTOCONTACT';
import {DISTRICK} from 'DISTRICK';

import {Fb} from 'firebase-store'
import {Property} from 'property'
import { propertys } from "userModelView";

import moment from 'moment';
import 'moment/locale/zh-cn';
import MobxStore from 'mobxStore'
import views from 'views'
//import ChatBot from 'react-simple-chatbot';
//import {FormSaleChatbot} from '../chatbot/formSaleChatbot'

// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', padding: '0 0.3rem' }}
  >
    <div style={{ display: 'flex', height: '0.9rem', lineHeight: '0.9rem' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888' }}>{props.extra}</div>
    </div>
  </div>
);

// const NameOfBuilding = [
//   { value: 'MOSDBC', label: '迎海' },
//   { value: 'MOSCTO', label: '第一城' },
//   { value: 'MOSSSC', label: '新港城' },
// ];

const CheckboxItem = Checkbox.CheckboxItem;

// const roomKey = {
//   '0' : '開放式',
//   '1' : '1房',
//   '2' : '2房',
//   '3' : '3房',
//   '4' : '4房',
//   '5' : '5房',
// }

class FormBuyAgentPropertyAntMobile extends React.Component {

  state = {
    // data: [],
    // cols: 1,
    // //pickerValue: [],
    // asyncValue: [],
    // sValue: ['2001', '3001'],

    // // input net size
    // netSizefocused: false,
  };

  // onClick = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       data: province,
  //     });
  //   }, 120);
  // };


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


  addPropertyForBuy = ( v ) =>
  {
    var p = new Property();

    p.uid = MobxStore.app.uid;

//    p.nameOfBuilding = v.nameOfBuilding[0]

   p.addressRegion = v.districk[0];
   p.addressLocation = v.districk[1];
   p.nameOfBuilding = v.districk[2]


    // p.dueDay = v.dueDay.toJSON();
    p.earlyTimeToView = v.earlyTimeToView.toJSON();
    // p.salePriceMax = parseInt( v.salePriceMax )


    //p.leasePrice = parseInt(v.leasePrice);
    p.numOfRoom = parseInt( v.partition[0]);
    p.numOfBathroom = parseInt(v.partition[1]);
    p.numOfLivingroom = parseInt(v.partition[2]);

    p.isBuyWithLease = v.isBuyWithLease
    //p.netSizeMin = parseInt( v.netSizeMin )
    //p.buyBudgetMax = parseInt( v.buyBudgetMax )

    //p.isPreferPayAnnually = v.isPreferPayAnnually;
    //p.isRentAbleNow = v.isRentAbleNow;
    //p.isFreeForSevenDay = v.isFreeForSevenDay;

    //p.hasHomeHardware = v.hasHomeHardware;
    p.isViewAble = v.isViewAble;
//    p.howToContact = parseInt( howToContact[0] );
    p.contactName = v.contactName;
    p.contactPhone = parseInt(v.contactPhone);
    p.contactEmail = v.contactEmail;
    p.isPetAllowed = v.isPetAllowed;

    const id = Fb.app.agentBuyRef.push().key;
    p.typeFor = "sale"
    p.typeTo = "buy"
    p.fbid = id;
    p.typeBy = "engage";
    p.relatedFbid = MobxStore.router.params.keyID;

    Fb.app.agentBuyRef.update( {[id]:  p.serialize() });

    // Should be Fb.agentPropertys. to be countinu..
    Fb.agentPropertys.child( id ).set( p.serialize() );


    // Make an update first, since, selectedSegmentIndex has been changed from 0 to 1
    //Fb.app.agentsFilterRef.child(MobxStore.router.params.filterID).update({ typeBy: 'engage'});
    
    // const id2 = Fb.propertys.push().key;
    // Fb.propertys.update( {[id2]:  p.serialize() })
    MobxStore.router.goTo(views.matchAgent, {
      keyID: MobxStore.router.params.filterID,
      typeTo: "sale",
      selectedSegmentIndex: 1
    });

    


    return id;

  }


  submit = (e) => {
   const value = this.props.form.getFieldsValue();

   e.preventDefault();
  //  console.log( '地鐵線', value.MTR )
  //  console.log( '呎', value.netSize)
  //  console.log( '售價', value.salePrice )
  //  console.log( 'Name', value.contactName )
  //  console.log( 'email', value.contactEmail )
  //  console.log( '手 機', value.contactPhone )
  //  console.log( '間隔', roomKey[value.room[0]] )

  this.addPropertyForBuy( value )
  //MobxStore.router.goTo( views.matchBuy, { keyID } )

//   MobxStore.router.goTo( views.second )

//   console.log(this.props.form.getFieldsValue());
  }

  sale = () => {

  }

// '房東', '租人','賣家','買家'
  render() {
    const { getFieldProps } = this.props.form;
 
    const log = (name) => {
      return (value) => {
        console.log(`${name}: ${value}`);
      }; }

    // Get the last property to generate default form values
      // it is a case
    const property = MobxStore.app.passByRef;
      
      // Don't use this, because, all proeprtys located in differet fb ref, sale, buy. 
      // this may be out of syn 
      // const property = propertys.propertys.get(MobxStore.router.params.keyID);
    const addressArray = property.addressToArray;
    const partitionArray = property.partitionToArray;
  
    // For DatePicker
    const minDate = moment().locale('zh-cn').utcOffset(8);
    const maxDate = moment(minDate).add(6, 'M');

      //return <ChatBot steps={FormSaleChatbot} />;
    // debugger
    return ( <div>
      <List style={{ backgroundColor: 'white' }} className="picker-list">

        <Picker data={DISTRICK} cols={3} {...getFieldProps('districk', {
            initialValue: addressArray,
          })} className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑">
          <List.Item arrow="horizontal">大廈/屋苑</List.Item>
        </Picker>

        <DatePicker
          mode="date"
          title="選擇日期"
          extra="選擇日期,最長半年來"
          {...getFieldProps('earlyTimeToView', {
            initialValue : moment( property.earlyTimeToView ),
          })}
          minDate={minDate}
          maxDate={maxDate}
        >
        <List.Item arrow="horizontal">最快幾時可以樓睇</List.Item>


       </DatePicker>

       <Picker  data={PARTITION}
       cols={2}
       title="選擇間隔"
       cascade={false}
       {...getFieldProps('partition', {
           initialValue: partitionArray,
       })}
       extra="選擇間隔"
       onOk={e => console.log('ok', e)}
       onDismiss={e => console.log('dismiss', e)}
      >
      <List.Item arrow="horizontal">間隔</List.Item>
     </Picker>



                <List.Item
                extra={<Switch
                          {...getFieldProps('isBuyWithLease', {
                            initialValue: property.isSaleWithLease,
                            valuePropName: 'checked',
                          })}
                          onClick={(checked) => { console.log(checked); }}
                        />}

                >我可以賣買連租賃</List.Item>


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
                extra={<Switch
                          {...getFieldProps('isViewAble', {
                            initialValue: property.isViewAble,
                            valuePropName: 'checked',
                          })}
                          onClick={(checked) => { console.log(checked); }}
                        />}

                >要求有樓睇</List.Item>

                <InputItem
                  {...getFieldProps('contactName', {
                    initialValue : property.contactName,
                  }) }
                  type="text"
                  placeholder="請輸入姓名"
                  clear
                >姓名</InputItem>

                <InputItem
                  clear
                  {...getFieldProps('contactPhone', {
                    initialValue : property.contactPhone
                  })}
                  type="phone"
                  placeholder="請輸入電話"
                >聯絡手機</InputItem>

                <InputItem
                  {...getFieldProps('contactEmail', {
                    initialValue : property.contactEmail,
                  })}
                  clear
                  placeholder="請輸入電郵地址"
                  type="email"
                >聯絡電郵</InputItem>



        <List.Item
              extra={<Button type="ghost" size="large" inline onClick={this.submit}>獲得匹配</Button>}
              multipleLine
            >
              HoMatching
              <List.Item.Brief>
              尊重您的私隱和信息，不會被共享。
              </List.Item.Brief>
            </List.Item>
        </List>

    </div>
    )
  }
}

export default createForm()(FormBuyAgentPropertyAntMobile);

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
// <WingBlank size="lg">
// <p className="title">面 積, 呎</p>
// <Range
//   min={1}
//   max={30}
//   defaultValue={[1, 30]}
//   onChange={log('change')}
//   onAfterChange={log('afterChange')}
//   disabled
// />
// </WingBlank>

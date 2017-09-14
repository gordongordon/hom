import React from 'react';
import {
  Card, Picker, List, WhiteSpace, InputItem,
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
import { HOWTOCONTACT } from 'HOWTOCONTACT';
import { DISTRICK } from 'DISTRICK';

import { Fb } from 'firebase-store';
import { Property } from 'property';
import moment from 'moment';
import 'moment/locale/zh-cn';
import MobxStore from 'mobxStore';
import views from 'views';
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

const roomKey = {
  '0': '開放式',
  '1': '1房',
  '2': '2房',
  '3': '3房',
  '4': '4房',
  '5': '5房',
}


//var FormAgentFilterWrapper = createForm( class extends React.Component {

// function FormAgentFilterWrapper() {
//     return 
class FormAgentFilter extends React.Component {

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


  addFilter = (v) => {
    var p = new Property();

    p.uid = MobxStore.app.uid;

    //    p.nameOfBuilding = v.nameOfBuilding[0]

    p.addressRegion = v.districk[0];
    p.addressLocation = v.districk[1];
    p.nameOfBuilding = v.districk[2];


    // p.dueDay = v.dueDay.toJSON();
    p.earlyTimeToView = v.earlyTimeToView.toJSON();
    // p.salePriceMax = parseInt( v.salePriceMax )


    //p.leasePrice = parseInt(v.leasePrice);
    p.numOfRoom = parseInt(v.partition[0]);
    p.numOfBathroom = parseInt(v.partition[1]);
    p.numOfLivingroom = parseInt(v.partition[2]);

    p.isBuyWithLease = v.isBuyWithLease;
    p.netSizeMin = parseInt(v.netSizeMin);
    p.buyBudgetMax = parseInt(v.buyBudgetMax);

    //p.isPreferPayAnnually = v.isPreferPayAnnually;
    //p.isRentAbleNow = v.isRentAbleNow;
    //p.isFreeForSevenDay = v.isFreeForSevenDay;

    //p.hasHomeHardware = v.hasHomeHardware;
    p.isViewAble = v.isViewAble;
    //    p.howToContact = parseInt( howToContact[0] );
    p.contactName = v.contactName;
    p.contactPhone = parseInt(v.contactPhone);
    p.contactEmail = v.contactEmail;


    const id = Fb.app.agentsFilterRef.push().key;
    p.typeFor = "sale";
    // Can be either open or engage (Engage responed )
    p.typeTo = "buy";
    p.typeBy = "open";
    p.fbid = id;
    // p.relatedFbid = MobxStore.router.params.keyID;

    Fb.app.agentsFilterRef.update({ [id]: p.serialize() });

    // Should be Fb.agentPropertys. to be countinu..
    //    Fb.agentPropertys.child( id ).set( p.serialize() );

    // const id2 = Fb.propertys.push().key;
    // Fb.propertys.update( {[id2]:  p.serialize() })
    //MobxStore.router.goTo(views.matchAgent, { keyID: id })

    MobxStore.router.goTo(views.matchAgent, {
      keyID: id,
      typeTo: "buy",
      selectedSegmentIndex: 0  // Default typeBy Open
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

    this.addFilter(value);
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
      };
    }

    // For DatePicker
    const minDate = moment().locale('zh-cn').utcOffset(8);
    const maxDate = moment(minDate).add(6, 'M');

    //return <ChatBot steps={FormSaleChatbot} />;

    return (<div>
      <List style={{ backgroundColor: 'white' }} className="picker-list">

        <Picker data={DISTRICK} cols={3} {...getFieldProps('districk', {
          initialValue: ['NTTV', 'MOS', 'MOS0001'],
        }) } className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑">
          <List.Item arrow="horizontal">大廈/屋苑</List.Item>
        </Picker>

        <Picker data={HOWTOCONTACT}
          cols={3}
          title="如何聯絡"
          cascade={false}
          {...getFieldProps('howToContact', {
            initialValue: ['0', '0', '1'],
          }) }
          extra="如何聯絡"
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
          style={{ flexbasis: '60%' }} >
          <List.Item arrow="horizontal">點樣搵你</List.Item>
        </Picker>


        <DatePicker
          mode="date"
          title="選擇日期"
          extra="選擇日期,最長半年來"
          {...getFieldProps('earlyTimeToView', {
            initialValue: minDate,
          }) }
          minDate={minDate}
          maxDate={maxDate}
        >
          <List.Item arrow="horizontal">最快幾時可以樓睇</List.Item>

        </DatePicker>

        <InputItem
          {...getFieldProps('buyBudgetMax', {
            initialValue: 380,
            normalize: (v, prev) => {
              if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                if (v === '.') {
                  return '0.';
                }
                return prev;
              }
              return v;
            },
          }) }
          type="number"
          placeholder="請輸入預算上限"
          onFocus={() => {
            this.setState({
              netSizefocused: false,
            });
          }}

          focused={this.state.netSizefocused}
          extra="萬"
          clear
          labelNumber="7"
          maxLength="4"
        >付出預算上限</InputItem>



        <List.Item
          extra={<Switch
            {...getFieldProps('isBuyWithLease', {
              initialValue: true,
              valuePropName: 'checked',
            }) }
            onClick={(checked) => { console.log(checked); }}
          />}

        >我可以賣買連租賃</List.Item>

        <List.Item extra={
          <Stepper
            style={{ width: '100%', minWidth: '2rem' }}
            {...getFieldProps('netSizeMin', {
              initialValue: 500
            }) }
            showNumber
            max={3000}
            min={100}
            step={100}
          />}
        >
          最少實用面積/呎
               </List.Item>


        <Picker data={PARTITION}
          cols={2}
          title="選擇間隔"
          cascade={false}
          {...getFieldProps('partition', {
            initialValue: ['0', '1', '1'],
          }) }
          extra="選擇間隔"
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal">間隔</List.Item>
        </Picker>


        <List.Item
          extra={<Switch
            {...getFieldProps('isNegotiable', {
              initialValue: true,
              valuePropName: 'checked',
            }) }
            onClick={(checked) => { console.log(checked); }}
          />}

        >可議價</List.Item>
        <List.Item
          extra={<Switch
            {...getFieldProps('isViewAble', {
              initialValue: true,
              valuePropName: 'checked',
            }) }
            onClick={(checked) => { console.log(checked); }}
          />}

        >要求有樓睇</List.Item>

        <InputItem
          {...getFieldProps('contactName', {
            initialValue: 'John Lee',
          }) }
          type="text"
          placeholder="請輸入姓名"
          clear
        >姓名</InputItem>

        <InputItem
          clear
          {...getFieldProps('contactPhone', {
            initialValue: '66896696'
          }) }
          type="phone"
          placeholder="請輸入電話"
        >聯絡手機</InputItem>

        <InputItem
          {...getFieldProps('contactEmail', {
            initialValue: 'h002@ymatchx.com',
          }) }
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
    );
  }
}
//export default FormAgentFilterWrapper;
export default createForm()(FormAgentFilter);
//export const FormAgentFilterWrapper = createForm()(FormAgentFilter);

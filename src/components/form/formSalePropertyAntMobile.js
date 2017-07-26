import React from 'react'
import { Card, Picker, List, WhiteSpace, InputItem,
         Button,
         SegmentedControl,
         Checkbox,
         Switch,
         DatePicker,
       } from 'antd-mobile';
import { createForm } from 'rc-form';
import { MTR } from 'MTR';
import {PARTITION} from 'PARTITION';
import {Fb} from 'firebase-store'
import {Property} from 'property'
import moment from 'moment';
import 'moment/locale/zh-cn';
import MobxStore from 'mobxStore'
import views from 'views'

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

const NameOfBuilding = [
  { value: 'MOSDBC', label: '迎海' },
  { value: 'MOSCTO', label: '第一城' },
  { value: 'MOSSSC', label: '新港城' },
];

const CheckboxItem = Checkbox.CheckboxItem;

const roomKey = {
  '0' : '開放式',
  '1' : '1房',
  '2' : '2房',
  '3' : '3房',
  '4' : '4房',
  '5' : '5房',
}


class FormSalePropertyAntMobile extends React.Component {
  state = {
    data: [],
    cols: 1,
    //pickerValue: [],
    asyncValue: [],
    sValue: ['2001', '3001'],

    // input net size
    netSizefocused: false,
  };

  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: province,
      });
    }, 120);
  };

  onPickerChange = (val) => {
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    const asyncValue = [...val];
    if (val[0] === 'zj') {
      d.forEach((i) => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [{
              value: 'zj-nb',
              label: '宁波',
            }, {
              value: 'zj-hz',
              label: '杭州',
            }];
            asyncValue.push('zj-nb');
          } else if (val[1] === 'zj-hz') {
            i.children.forEach((j) => {
              if (j.value === 'zj-hz') {
                j.children = [{
                  value: 'zj-hz-xh',
                  label: '西湖区',
                }];
                asyncValue.push('zj-hz-xh');
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.setState({
      data: d,
      cols: colNum,
      asyncValue,
    });
  };


  addPropertyForSale = ( v ) =>
  {
    var p = new Property();
    var id;
    // p.nearByMtrLine = nearByMtrLine;
    // p.nearByMtrStop = nearByMtrStop;
    //p.uid = MobxStore.app.uid;

    p.nameOfBuilding = v.nameOfBuilding[0]
    // p.dueDay = v.dueDay.toJSON();
    p.earlyTimeToView = v.earlyTimeToView.toJSON();
    //p.leasePrice = parseInt(v.leasePrice);
    p.netSize = parseInt(v.netSize);
    p.salePrice = parseInt(v.salePrice);
    p.numOfRoom = parseInt( v.partition[0]);
    p.numofBathroom = parseInt(v.partition[1]);
    p.numofLivingroom = parseInt(v.partition[2]);
    p.isSaleWIthLease = v.isSaleWIthLease;
    p.isNegotiable = v.isNegotiable;
    p.isViewAble = v.isViewAble;

    //p.isPreferPayAnnually = v.isPreferPayAnnually;
    //p.isRentAbleNow = v.isRentAbleNow;
    //p.isFreeForSevenDay = v.isFreeForSevenDay;

    // p.hasHomeHardware = v.hasHomeHardware;
    p.contactName = v.contactName;
    p.contactPhone = parseInt(v.contactPhone);
    p.contactEmail = v.contactEmail;


    // Catch none user syn method wait to be true
    if ( MobxStore.app.uid === null) {
      if ( Fb.startLoginAnonyhmously() ) {
         id = Fb.app.usersRef.push().key;
      }
    } else {
         id = Fb.app.usersRef.push().key;
    }
    p.uid = MobxStore.app.uid;
    p.typeFor = "buy"
    p.typeTo = "sale"
    p.fbid = id;
    Fb.app.usersRef.update( {[id]:  p.serialize() });

//    const id2 = Fb.propertys.push().key;
    Fb.propertys.child( id ).set( p.serialize() );

    MobxStore.router.goTo( views.matchSale, { keyID : id  } )

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

   this.addPropertyForSale( value )
//   MobxStore.router.goTo( views.second )

//   console.log(this.props.form.getFieldsValue());
  }

  sale = () => {

  }

// '房東', '租人','賣家','買家'
  render() {
    const { getFieldProps } = this.props.form;

    // For DatePicker
    const minDate = moment().locale('zh-cn').utcOffset(8);
    const maxDate = moment(minDate).add(6, 'M');

    return ( <div>
      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker data={NameOfBuilding} cols={1} {...getFieldProps('nameOfBuilding', {
            initialValue: ['MOSDBC'],
          })} className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑">
          <List.Item arrow="horizontal">大廈/屋苑</List.Item>
        </Picker>
                <InputItem
                  {...getFieldProps('netSize', {
                    initialValue : 300,
                    normalize: (v, prev) => {
                      if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                        if (v === '.') {
                          return '0.';
                        }
                        return prev;
                      }
                      return v;
                    },
                  })}
                  type="number"
                  placeholder="0"
                  onFocus={() => {
                    this.setState({
                      netSizefocused: false,
                    });
                  }}
                  focused={this.state.netSizefocused}
                  clear
                  extra="呎"
                >實用 面 積</InputItem>

                <DatePicker
                  mode="date"
                  title="選擇日期"
                  extra="選擇日期,最長半年來"
                  {...getFieldProps('earlyTimeToView', {
                    initialValue : minDate,
                  })}
                  minDate={minDate}
                  maxDate={maxDate}
                >
                <List.Item arrow="horizontal">最快幾時有樓睇</List.Item>

                </DatePicker>

                <Picker  data={PARTITION}
                  cols={3}
                  title="選擇間隔"
                  cascade={false}
                  {...getFieldProps('partition', {
                      initialValue: ['0', '1','1'],
                  })}
                  extra="選擇間隔"
                  onOk={e => console.log('ok', e)}
                  onDismiss={e => console.log('dismiss', e)}
                 >
                 <List.Item arrow="horizontal">間隔</List.Item>

                </Picker>
                <InputItem
                  {...getFieldProps('salePrice', {
                    initialValue : 350,
                    normalize: (v, prev) => {
                      if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                        if (v === '.') {
                          return '0.';
                        }
                        return prev;
                      }
                      return v;
                    },
                  })}
                  type="number"
                  placeholder="請求入場價格/每萬"
                  onFocus={() => {
                    this.setState({
                      netSizefocused: false,
                    });
                  }}
                  focused={this.state.netSizefocused}
                  clear
                  extra="萬元"
                >售價</InputItem>



                <List.Item
                extra={<Switch
                          {...getFieldProps('isSaleWIthLease', {
                            initialValue: true,
                            valuePropName: 'checked',
                          })}
                          onClick={(checked) => { console.log(checked); }}
                        />}

                >出售連租賃</List.Item>



                <List.Item
                extra={<Switch
                          {...getFieldProps('isNegotiable', {
                            initialValue: true,
                            valuePropName: 'checked',
                          })}
                          onClick={(checked) => { console.log(checked); }}
                        />}

                >可議價</List.Item>
                <List.Item
                extra={<Switch
                          {...getFieldProps('isViewAble', {
                            initialValue: true,
                            valuePropName: 'checked',
                          })}
                          onClick={(checked) => { console.log(checked); }}
                        />}

                >有樓睇</List.Item>

                <InputItem
                  {...getFieldProps('contactName', {
                    initialValue : 'Jeff Chan',
                  }) }
                  type="text"
                  placeholder="請輸入姓名"
                  clear
                >姓名</InputItem>

                <InputItem
                  clear
                  {...getFieldProps('contactPhone', {
                    initialValue : '66958844'
                  })}
                  type="phone"
                  placeholder="請輸入電話"
                >聯絡手機</InputItem>

                <InputItem
                  {...getFieldProps('contactEmail', {
                    initialValue : 'h004@ymatchx.com',
                  })}
                  clear
                  placeholder="請輸入電郵地址"
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

export const FormSalePropertyAntMobileWrapper = createForm()(FormSalePropertyAntMobile);

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

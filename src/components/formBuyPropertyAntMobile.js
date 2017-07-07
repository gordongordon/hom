import React from 'react'
import { Card, Picker, List, WhiteSpace, InputItem,
         Button,
         SegmentedControl,
         Checkbox,
         Switch,
         WingBlank,
         Range,
         Stepper,
       } from 'antd-mobile';
import { createForm } from 'rc-form';
import { MTR } from 'MTR';
import { PARTITION } from 'PARTITION';
import {HOWTOCONTACT} from 'HOWTOCONTACT';
import {Fb} from 'firebase-store'
import {Property} from 'property'


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

const CheckboxItem = Checkbox.CheckboxItem;

const roomKey = {
  '0' : '開放式',
  '1' : '1房',
  '2' : '2房',
  '3' : '3房',
  '4' : '4房',
  '5' : '5房',
}

class FormBuyPropertyAntMobile extends React.Component {

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


  addPropertyForSale = ( nearByMtrLine, nearByMtrStop, netSize, salePrice, numOfRoom, numofBathroom, contactName, contactPhone, contactEmail) =>
  {
    var p = new Property();


    p.nearByMtrLine = nearByMtrLine;
    p.nearByMtrStop = nearByMtrStop;
    p.netSize = parseInt(netSize);
    p.salePrice = parseInt(salePrice);
    p.numOfRoom = parseInt(numOfRoom);
    p.numofBathroom = parseInt(numofBathroom);
    p.contactName = contactName;
    p.contactPhone = parseInt(contactPhone);
    p.contactEmail = contactEmail;

    const id = Fb.propertys.push().key;
    Fb.propertys.update( {[id]:  p.serialize() });
  }


  submit = (e) => {
   const value = this.props.form.getFieldsValue();

   e.preventDefault();
   console.log( '地鐵線', value.MTR )
   console.log( '呎', value.netSize)
   console.log( '售價', value.salePrice )
   console.log( 'Name', value.contactName )
   console.log( 'email', value.contactEmail )
   console.log( '手 機', value.contactPhone )
   console.log( '間隔', roomKey[value.room[0]] )

   this.addPropertyForSale( '1001', '2001', value.netSize, value.salePrice, value.room[0], value.room[1],
                        value.contactName, value.contactPhone, value.contactEmail)
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

    return ( <div>



      <List style={{ backgroundColor: 'white' }} className="picker-list">
        <Picker  data={HOWTOCONTACT}
          cols={3}
          title="如何聯絡"
          cascade={false}
          {...getFieldProps('kkk', {
              initialValue: ['0', '0','1'],
          })}
          extra="如何聯絡"
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
          style={{ flexbasis : '60%'}}
         >
         <List.Item arrow="horizontal">點樣搵你</List.Item>
        </Picker>

      <Picker cols={2} extra="地鐵線"
        data={MTR}
        title="地鐵線"
         {...getFieldProps('MTR', {
            initialValue: ['HKL', 'CWB'],
          })}
        onOk={e => console.log('ok', e)}
        onDismiss={e => console.log('dismiss', e)}
      >
        <List.Item arrow="horizontal">地鐵線</List.Item>
      </Picker>

                <InputItem
                  {...getFieldProps('salePrice', {
                    initialValue : 380,
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

                >我可以賣買連租賃</List.Item>

                <List.Item extra={
                 <Stepper
                   style={{ width: '100%', minWidth: '2rem' }}
                   {...getFieldProps('netSizeMin', {
                     initialValue: 500
                   })}
                   showNumber
                   max={3000}
                   min={100}
                   step={100}
                 />}
               >
               最少實用面積/呎
               </List.Item>


              <Picker  data={PARTITION}
                cols={2}
                title="選擇間隔"
                cascade={false}
                {...getFieldProps('room', {
                    initialValue: ['0', '1','1'],
                })}
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

                >要求有樓睇</List.Item>

                <InputItem
                  {...getFieldProps('contactName', {
                    initialValue : 'Gordon',
                  }) }
                  type="text"
                  clear
                >姓名</InputItem>

                <InputItem
                  clear
                  {...getFieldProps('contactPhone', {
                    initialValue : '96181448'
                  })}
                  type="phone"
                  placeholder="9618 1448"
                >聯絡手機</InputItem>

                <InputItem
                  {...getFieldProps('contactEmail', {
                    initialValue : 'h001@ymatchx.com',
                  })}
                  clear
                  placeholder="YourEmail@gmail.com"
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

export const FormBuyPropertyAntMobileWrapper = createForm()(FormBuyPropertyAntMobile);

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

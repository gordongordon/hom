import React from 'react'
import { Card, Picker, List, WhiteSpace, InputItem,
         Button,
         SegmentedControl,
         Checkbox,
         Switch,
         DatePicker,
         Stepper
       } from 'antd-mobile';
import { createForm } from 'rc-form';
import { MTR } from 'MTR';
import {PARTITION} from 'PARTITION';
import {Fb} from 'firebase-store'
import {Property} from 'property'
import moment from 'moment';
import 'moment/locale/zh-cn';

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

const jobNature = [
  {
    label : '私人企業',
    value : '0'
  },   {
    label : '政府工',
    value : '1'
  },   {
    label : '自僱人士',
    value : '2'
  },   {
    label : '學生',
    value : '3'
  },  {
    label : '海外人士',
    value : '4'
  },
]

const roomKey = {
  '0' : '開放式',
  '1' : '1房',
  '2' : '2房',
  '3' : '3房',
  '4' : '4房',
  '5' : '5房',
}

const NameOfBuilding = [
  { value: 'MOSDBC', label: '迎海' },
  { value: 'MOSCTO', label: '第一城' },
  { value: 'MOSSSC', label: '新港城' },
];

class FormRentPropertyAntMobile extends React.Component {
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

  onChange = (val) => {
    console.log(val);
  }

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


  addPropertyForRent = ( v ) =>
  {
    var p = new Property();

    //p.nearByMtrLine = v.nearByMtrLine;
    //p.nearByMtrStop = v.nearByMtrStop;

    // p.nameOfBuilding = v.nameOfBuilding[0]
    p.jobNature = parseInt(v.jobNature[0]);
    p.income = parseInt(v.income);


    p.earlyTimeToView = v.earlyTimeToView.toJSON();
    p.rentBudgetMax = parseInt(v.rentBudgetMax);
    p.numOfPeopleLiving = parseInt( v.numOfPeopleLiving );

    p.netSizeMin = parseInt( v.netSizeMin );


    p.numOfRoom = parseInt( v.partition[0]);
    p.numofBathroom = parseInt(v.partition[1]);
    p.numofLivingroom = parseInt(v.partition[2]);
    // p.isPreferPayAnnually = v.isPreferPayAnnually;
    p.isRentAbleNow = v.isRentAbleNow;
    //p.isFreeForSevenDay = v.isFreeForSevenDay;

    p.hasHomeHardware = v.hasHomeHardware;
    p.isViewAble = v.isViewAble;
    p.contactName = v.contactName;
    p.contactPhone = parseInt(v.contactPhone);
    p.contactEmail = v.contactEmail;

    const id = Fb.propertys.push().key;
    Fb.propertysForRent.update( {[id]:  p.serialize() });
  }


  submit = (e) => {
   const value = this.props.form.getFieldsValue();

   e.preventDefault();
  //  console.log( '地鐵線', value.MTR )
  //  console.log( '呎', value.netSize)
  //  console.log( '租金', value.leasePrice )
  //  console.log( 'Name', value.contactName )
  //  console.log( '聯絡電郵', value.contactEmail )
  //  console.log( '聯絡手機', value.contactPhone )
  //  console.log( '間隔', roomKey[value.room[0]] )

   this.addPropertyForRent( value )
   //console.log(this.props.form.getFieldsValue());
  }

  sale = () => {

  }

// '房東', '租人','賣家','買家'
  render() {
    const { getFieldProps } = this.props.form;
    const leaseWith = [
      { value: 0, label: '包差餉' },
      { value: 1, label: '包地租/稅' },
      { value: 2, label: '包管理費' },
    ];


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

      <Picker data={jobNature} cols={1} {...getFieldProps('jobNature', {
          initialValue: ['3'],
        })} className="forss" title="請選擇職業" extra="請選擇職業">
        <List.Item arrow="horizontal">職業</List.Item>
      </Picker>


      <InputItem
        {...getFieldProps('income', {
                    initialValue : 13000,
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
        placeholder=""
        onFocus={() => {
          this.setState({
            netSizefocused: false,
          });
        }}
        focused={this.state.netSizefocused}
        clear
        extra="元"
      >收入</InputItem>

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
      <List.Item arrow="horizontal">最快幾時可樓睇</List.Item>

      </DatePicker>

      <List.Item extra={
       <Stepper
         style={{ width: '100%', minWidth: '2rem' }}
         {...getFieldProps('numOfPeopleLiving', {
           initialValue: 2
         })}
         showNumber
         max={10}
         min={1}
         defaultValue={1}
         step={1}
       />}
     >
     同居的人數
     </List.Item>


                <List.Item extra={
                 <Stepper
                   style={{ width: '100%', minWidth: '2rem' }}
                   {...getFieldProps('netSizeMin', {
                     initialValue: 500
                   })}
                   showNumber
                   max={3000}
                   min={100}
                   step={200}
                 />}
               >
               最少實用面積/呎
               </List.Item>

               <Picker  data={PARTITION}
                 cols={2}
                 title="選擇間隔"
                 cascade={false}
                 {...getFieldProps('partition', {
                     initialValue: ['0','1', '1'],
                 })}
                 extra="選擇間隔"
                 onOk={e => console.log('ok', e)}
                 onDismiss={e => console.log('dismiss', e)}
                >
                <List.Item arrow="horizontal">間隔</List.Item>
               </Picker>

               <List.Item extra={
                <Stepper

                  {...getFieldProps('rentBudgetMax', {
                    initialValue: 10000
                  })}
                  style={{ width: '100%', minWidth: '2rem' }}
                  showNumber
                  max={100000}
                  min={2000}
                  step={1000}
                />}
              >
              付出租金上限/元
              </List.Item>



                <List.Item
                extra={<Switch
                          {...getFieldProps('isRentAbleNow', {
                            initialValue: false,
                            valuePropName: 'checked',
                          })}
                          onClick={(checked) => { console.log(checked); }}
                        />}
                >我想即刻租住</List.Item>
                <List.Item
                extra={<Switch
                          {...getFieldProps('hasHomeHardware', {
                            initialValue: false,
                            valuePropName: 'checked',
                          })}
                          onClick={(checked) => { console.log(checked); }}
                        />}

                >較喜歡有家俬設備提供</List.Item>

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

export const FormRentPropertyAntMobileWrapper = createForm()(FormRentPropertyAntMobile);

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

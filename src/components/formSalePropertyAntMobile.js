import React from 'react'
import { Card, Picker, List, WhiteSpace, InputItem, Button} from 'antd-mobile';
import { createForm } from 'rc-form';
import { district, provinceLite as province } from 'formSaleData';

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

const roomSelection = [
  [
  {
    label : '開放式',
    value:  '2001',
  }, {
    label : '1房',
    value:  '2002',
  }, {
    label : '2房',
    value:  '2003',
  }, {
    value:  '2004',
    label : '3房',
  }, {
    label : '4房',
    value:  '2005',
  }, {
    label : '5房',
    value:  '2006',
  }
],  [
  {
    label : '1浴室',
    value:  '3001',
  }, {
    label : '2浴室',
    value:  '4002',
  }, {
    label : '3浴室',
    value:  '5003',
  }, {
    value:  '5004',
    label : '4浴室',
  }, {
    label : '5浴室',
    value:  '5005',
  }
],

]

class FormSalePropertyAntMobile extends React.Component {
  state = {
    data: [],
    cols: 1,
    pickerValue: [],
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

  render() {
    const { getFieldProps } = this.props.form;

    return ( <div>
      <WhiteSpace size="lg" />
      <List style={{ backgroundColor: 'white' }} className="picker-list">

      <Picker cols={2} extra="地鐵線"
        data={district}
        title="地鐵線"
        {...getFieldProps('district', {
          initialValue: ['340000', '341500', '341502'],
        })}
        onOk={e => console.log('ok', e)}
        onDismiss={e => console.log('dismiss', e)}
      >
        <List.Item arrow="horizontal">地鐵線</List.Item>
      </Picker>
                <InputItem
                  {...getFieldProps('netSize', {
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
                >面 積</InputItem>
                <InputItem
                  {...getFieldProps('salePrice', {
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
                <InputItem
                  clear
                  {...getFieldProps('phone')}
                  type="phone"
                  placeholder="9618 1448"
                >手 機</InputItem>

                <InputItem
                  {...getFieldProps('inputclear')}
                  clear
                  placeholder="YourEmail@gmail.com"
                >Email</InputItem>

      <Picker  data={roomSelection}
        title="选择季节"
        cascade={false}
        extra="请选择(可选)"
        value={this.state.sValue}
        onChange={v => this.setState({ sValue: v })}
        >
          <List.Item arrow="horizontal">間隔</List.Item>
        </Picker>

        <List.Item
              extra={<Button type="ghost" size="large" inline>獲得匹配</Button>}
              multipleLine
            >
              HoMatching
              <List.Item.Brief>
              尊重您的私隱和信息，不會被共享。
              </List.Item.Brief>
            </List.Item>
        </List>
        <Card>
           <Button type="primary"></Button>
           <Card.Header
             title="Doube Cove"
             thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
             extra={<span>Ask Price</span>}
           />
           <Card.Body>

              <img src="http://semantic-ui.com/images/wireframe/image.png" style={{ width: '200px', float : 'left' , align : 'left'}} alt="double cove"/>
              <List renderHeader={() => '基本样式'} className="my-list">
        <List.Item extra={'内容内容'}>标题文字</List.Item>
        </List>
        <br style={{ clear: 'both' }} />

           </Card.Body>
           <Card.Footer content={<Button type="ghost" inline size="small">Hello</Button>} extra={<h3>$300萬元</h3>} />
         </Card>
    </div>
    )
  }
}

export const FormSalePropertyAntMobileWrapper = createForm()(FormSalePropertyAntMobile);

// ReactDOM.render(<TestWrapper />, mountNode);
// .picker-list .am-list-item .am-list-line .am-list-extra {
//   flex-basis: initial;
// }

import { Picker, List } from 'antd-mobile';
import React, { Component } from 'react';
import { DISTRICK } from 'DISTRICK';

import { createForm } from 'rc-form';

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '春',
      value: '春',
    },
    {
      label: '夏',
      value: '夏',
    },
  ],
];

class Chatpicker extends Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  };
  render() {
    const { getFieldProps } = this.props.form;
    return (
        <Picker data={DISTRICK} cols={3} {...getFieldProps('districk', {
          initialValue: ['NTTV', 'MOS', 'MOS0001'],
        }) } className="forss" title="請選擇大廈/屋苑" extra="請選擇大廈/屋苑">
          <List.Item arrow="horizontal" style={{    width: '16rem' }} >大廈/屋苑</List.Item>
        </Picker>
    );
  }
}

//export default Chatpicker;
export default createForm()(Chatpicker);
import { PickerView,SegmentedControl } from 'antd-mobile';
import React, { Component } from 'react';

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

class SegmentExample extends Component {
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
    return (
      <SegmentedControl
      values={['買家', '房東', '業主','租客']}
      onChange={this.onChange}
      style={{ height: '2rem', width: '5rem' }}
    />
    );
  }
}

export default SegmentExample;
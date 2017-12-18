import { Picker, List } from "antd-mobile";
import React, { Component } from 'react';
import { DISTRICK } from 'DISTRICK';

import { createForm } from 'rc-form';
import PropTypes from 'prop-types';


const seasons = [
  [
    {
      label: "2013",
      value: "2013"
    },
    {
      label: "2014",
      value: "2014"
    }
  ],
  [
    {
      label: "春",
      value: "春"
    },
    {
      label: "夏",
      value: "夏"
    }
  ]
];

class Chatpicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
      trigger: false
    };
      

    this.triggetNext = this.triggetNext.bind(this);
    //this.nameOfBuildingLabel = this.nameOfBuildingLabel.bind(this);
    this.getPickerLabel = this.getPickerLabel.bind(this);
  }

  onChange = value => {
    console.log(value);
    this.setState({
      value
    });
  };

  // nameOfBuildingLabel = ( region, location, building ) => {
  //   // debugger
  //   var region = DISTRICK.find(element => element.value === region);
  //   // console.log( 'region', region)
  //   if (region === undefined) {
  //     return "region doesn't exist!";
  //   }
  //   var location = region.children.find(
  //     element => element.value === location
  //   );
  //   if (location === undefined) {
  //     return "location doesn't exist!";
  //   }
  //   // console.log( 'location', location )
  //   var building = location.children.find(
  //     element => element.value === building
  //   );
  //   return building.label;
  // }


  getPickerLabel = (data, first, second, third) => {
    // debugger
    //var region = DISTRICK.find(element => element.value === region);

    first = data.find(element => element.value === first);
    // console.log( 'region', region)
    if (first === undefined) {
      return 'first doesn\'t exist!';
    }

    second = first.children.find(element => element.value === second);
    
    if (second === undefined) {
      return 'second doesn\'t exist!';
    }

    // console.log( 'location', location )
    third = second.children.find(element => element.value === third);

    return third.label + ' , ' + second.label;
  };

  triggetNext() {
    const v = this.props.form.getFieldsValue();
    const region = v.districk[0];
    const location = v.districk[1];
    const building = v.districk[2];
    const label =  this.getPickerLabel( DISTRICK, region, location, building );
    const address = region + ',' + location + ',' + building;
    // const obj = {
    //   location : location,
    //   building : building
    // }
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep( { value: address, label : label });
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
//    大廈/屋苑
    
    return (
      <Picker
        data={DISTRICK}
        onOk={ () => this.triggetNext() }
        cols={3}
        {...getFieldProps("districk", {
          initialValue: ["NTTV", "MOS", "MOS0001"]
        })}
        className="forss"
        title="請選擇大廈/屋苑"
        extra="請選擇大廈/屋苑"
        itemStyle={ {overflow: 'unset'} }
      >
        <List.Item arrow="horizontal" >
        </List.Item>
      </Picker>
    );
  }
}

Chatpicker.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

Chatpicker.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

//export default Chatpicker;
export default createForm()(Chatpicker);

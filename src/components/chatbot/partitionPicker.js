import { PARTITION } from "PARTITION";
import { Picker, List } from "antd-mobile";
import React, { Component } from "react";
import { createForm } from "rc-form";
import PropTypes from "prop-types";

class PartitionPicker extends Component {
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

  //   nameOfBuildingLabel = (region, location, building) => {
  //     // debugger
  //     var region = DISTRICK.find(element => element.value === region);
  //     // console.log( 'region', region)
  //     if (region === undefined) {
  //       return "region doesn't exist!";
  //     }
  //     var location = region.children.find(element => element.value === location);
  //     if (location === undefined) {
  //       return "location doesn't exist!";
  //     }
  //     // console.log( 'location', location )
  //     var building = location.children.find(
  //       element => element.value === building
  //     );
  //     return building.label;
  //   };

  getPickerLabel = (data, first, second, third) => {
    // debugger
    //var region = DISTRICK.find(element => element.value === region);

    const f = data[0].find(element => element.value === first);
    // console.log( 'region', region)
    if (f === undefined) {
      return 'first doesn\'t exist!';
    }
    const s = data[1].find(element => element.value === second);
    
    if (s === undefined) {
      return 'second doesn\'t exist!';
    }

    // console.log( 'location', location )
    const t = data[2].find(element => element.value === third);

    return f.label + ' ' + s.label + ' ' + t.label;
  };

  triggetNext() {
    const v = this.props.form.getFieldsValue();
    const numOfRoom = v.partition[0];
    const numOfLivingroom = v.partition[1];
    const numOfBathroom = v.partition[2];
    const label = this.getPickerLabel(
      PARTITION,
      numOfRoom,
      numOfLivingroom,
      numOfBathroom
    );

    //debugger
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep({ value: label, label: label });
    });
  }


  render() {
    const { getFieldProps } = this.props.form;

    return (
      <Picker
        data={PARTITION}
        onOk={() => this.triggetNext()}
        cols={2}
        title="選擇間隔"
        cascade={false}
        {...getFieldProps("partition", {
          initialValue: ["0", "1", "1"]
        })}
        extra="選擇間隔"
        onDismiss={e => console.log("dismiss", e)}
      >
        <List.Item arrow="horizontal">間隔</List.Item>
      </Picker>
    );
  }
}

PartitionPicker.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func
};

PartitionPicker.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined
};
//export default Chatpicker;
export default createForm()(PartitionPicker);

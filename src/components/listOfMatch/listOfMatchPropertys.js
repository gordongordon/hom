import React from 'react'
//import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
//import { createForm } from 'rc-form';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
//import {propertys} from 'userModelView'
import SingleRentPropertyForMatchView from '../singlePropertyView/singleRentPropertyForMatchView'
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
//const Item = List.Item;
//const Brief = Item.Brief;

const NameOfBuilding = [
  { value: 'MOSDBC', label: '迎海' },
  { value: 'MOSCTO', label: '第一城' },
  { value: 'MOSSSC', label: '新港城' },
];

@observer
export class ListOfMatchPropertys extends React.Component {

  constructor(props) {
    super(props)
  }

  display = ( propertys ) => {
    const list = propertys;

     var element = [];
     list.forEach( (property, keyID) => element.push(
       <SingleRentPropertyForMatchView property={property} key={keyID}/>
     ) )
     return <div>{element}</div>
  }


  render() {
        const {propertys} = this.props;
        
    return (
      <div>
      {
         this.display( propertys )
      }
     </div>);
  }
}

ListOfMatchPropertys.propTypes = {
  propertys : PropTypes.object.isRequired
};

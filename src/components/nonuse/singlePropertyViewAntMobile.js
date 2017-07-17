import React from 'react'
import {observer} from 'mobx-react'
import { InputItem, Button, List } from 'antd-mobile';


// Since putting observer only on the TodoView will result in re-rendering all the todos
// any time a single todo is updated, we create a subcomponent that handles the editing for a single todo
// and decorate it with observer. This way updates in the single todo will result in an update of the SingleTodoView.
@observer
export class SinglePropertyView extends React.Component{

    render(){
        //const model = this.props.model
        const {property, keyId , propertys } = this.props;

        //console.log( 'propertys ', propertys, keyId)

        //const key = this.props.key
        //console.log( 'key ', key )

        return ( <div>
                <List renderHeader={() => 'Single Property'}>
                  <InputItem type="checkbox" checked={property.done} onChange={e => {property.done = e.target.checked}} > Check </InputItem>
                  <InputItem type="text" value={property.nameOfBuilding} onChange={e => {property.nameOfBuilding = e.target.value}} > Building </InputItem>
                  <InputItem type="text" value={property.contactName} onChange={e => {property.contactName = e.target.value}} > Name </InputItem>
                  <InputItem type="text" value={property.nearByMtrLine} onChange={e => {property.nearByMtrStop = e.target.value}} > MTR Line </InputItem>
                  <InputItem type="text" value={property.nearByMtrStop} onChange={e => {property.nearByMtrStop = e.target.value}} > MTR Stop </InputItem>
                  <InputItem type="text" value={property.typeTo} onChange={e => {property.typeTo = e.target.value}} > typeTo </InputItem>
                  <InputItem type="text" value={property.salePrice} onChange={e => {property.salePrice = e.target.value}} > sale Price </InputItem>
                  <Button type="ghost" onClick={() => propertys.del( keyId )}>Delete</Button>
                </List>
                </div>
              )
    }
}

//export default SinglePropertyView;
// <button onClick={() => models.delete(modelKey)}>Delete</button>

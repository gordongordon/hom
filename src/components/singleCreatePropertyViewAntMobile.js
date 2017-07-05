import React from 'react'
import {observer} from 'mobx-react'
import { InputItem, Button, List } from 'antd-mobile';


@observer
export class SingleCreatePropertyView extends React.Component{

    render(){
        //const model = this.props.model
        var {userName, nameOfBuilding, location, typeTo, typeBy, typeFor, salePrice, model} = this.props;
//        <input size="10" type="text" value={userName} onChange={e => { userName = e.target.value}} />

        return (<div>

                    <InputItem type="text" value={nameOfBuilding} onChange={e => { nameOfBuilding = e.target.value}} />
                    <InputItem type="text" value={location} onChange={e => { location = e.target.value}} />
                    <InputItem type="text" value={typeTo} onChange={e => { typeTo = e.target.value}} />
                    <InputItem type="text" value={typeBy} onChange={e => { typeBy = e.target.value}} />
                    <InputItem type="text" value={typeFor} onChange={e => { typeFor = e.target.value}} />
                    <InputItem type="text" value={ salePrice} onChange={e => { salePrice = e.target.value}} />
                    <Button type="primary" onClick={() => model.addProperty(userName, nameOfBuilding, location, typeTo, typeBy, typeFor, salePrice )}>Create Case</Button>
           </div>)
    }
}

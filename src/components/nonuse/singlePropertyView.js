import React from 'react'
import {observer} from 'mobx-react'

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

        return <div>  <h4>-------- Single Property ------</h4>
                <p>
                  <input size="10" type="checkbox" checked={property.done} onChange={e => {property.done = e.target.checked}} />
                  <input size="10" type="text" value={property.text} onChange={e => {property.text = e.target.value}} />
                  <input size="10" type="text" value={property.name} onChange={e => {property.name = e.target.value}} />
                  <input size="10" type="text" value={property.location} onChange={e => {property.location = e.target.value}} />
                  <input size="10" type="text" value={property.typeTo} onChange={e => {property.typeTo = e.target.value}} />
                  <input size="10" type="text" value={property.price} onChange={e => {property.price = e.target.value}} />
                  <button onClick={() => propertys.del( keyId )}>Delete</button>
                </p>
        </div>
    }
}

//export default SinglePropertyView;
// <button onClick={() => models.delete(modelKey)}>Delete</button>

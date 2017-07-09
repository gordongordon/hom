import React from 'react'
import {
  observer
} from 'mobx-react'

@observer
export class SingleCreatePropertyView extends React.Component {

    render() {
      //const model = this.props.model
      var {
        userName,
        name,
        location,
        typeTo,
        typeBy,
        typeFor,
        price,
        model
      } = this.props;
      //        <input size="10" type="text" value={userName} onChange={e => { userName = e.target.value}} />

      return ( < div >
        <
        input size = "10"
        type = "text"
        value = {
          name
        }
        onChange = {
          e => {
            name = e.target.value
          }
        }
        /> <
        input size = "10"
        type = "text"
        value = {
          location
        }
        onChange = {
          e => {
            location = e.target.value
          }
        }
        /> <
        input size = "10"
        type = "text"
        value = {
          typeTo
        }
        onChange = {
          e => {
            typeTo = e.target.value
          }
        }
        /> <
        input size = "10"
        type = "text"
        value = {
          typeBy
        }
        onChange = {
          e => {
            typeBy = e.target.value
          }
        }
        /> <
        input size = "10"
        type = "text"
        value = {
          typeFor
        }
        onChange = {
          e => {
            typeFor = e.target.value
          }
        }
        /> <
        input size = "10"
        type = "text"
        value = {
          price
        }
        onChange = {
          e => {
            price = e.target.value
          }
        }
        /> <
        button onClick = {
          () => model.addProperty(userName, name, location, typeTo, typeBy, typeFor, price)
        } > Create Case < /button> <
        /div>)
      }
    }
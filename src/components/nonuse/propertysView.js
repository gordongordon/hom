import React from 'react';
// import {map} from 'lodash';
import { observer } from 'mobx-react';
import {propertys} from 'userModelView';
//import {SinglePropertyView} from 'singlePropertyView';
import {SinglePropertyView} from 'singlePropertyViewAntMobile';
import {SingleCreatePropertyView} from 'singleCreatePropertyViewAntMobile'
//import {SingleMatchPropertyView} from 'singleMatchPropertyView'
//import PaperPropertyView from 'paperPropertyView'
//import PaperMatchPropertyView from 'paperMatchPropertyView'
//import CardPropertyView from 'cardPropertyView'
//import {SinglePropertyViewSMUI} from 'singlePropertyViewSMUI'

@observer
export class PropertysView extends React.Component {

  del = (id) => {
    propertys.del(id)
  };

  update = (id, name ) => {
    propertys.update( id, name)
  };

  handleOnClick = ( key ) => {
    //this.del(key);
    //this.update( key, 'jeff ')
    propertys.del(key)
//    propertys.update( key, 'jeff')
    console.log( 'handleOnClick')
  };

  renderPropertys = ( propertys ) => {
    var list = propertys.propertys;

    const that = this;
     var element= [];
     list.forEach( (property, keyID) => element.push(

       <div key={keyID}>
       <SinglePropertyView keyId={keyID} property={property} propertys={propertys} />
       {
          that.renderMatchedList( property.matchedPropertys )
       }
       </div>

     ) )
     return <div>{element}</div>
  }
//  <SinglePropertyView keyId={keyID} property={property} propertys={propertys}/>

  renderMatchedList = ( propertys ) => {
     var element= [];
     //propertys.forEach( (property, keyID) => element.push(
     //) )
     return <div>{element}</div>
  }
  //<SingleMatchPropertyView key={keyID} keyId={keyID} property={property} propertys={propertys}/>
//  <PaperMatchPropertyView property={property}/>



  render() {
    var that = this;

    console.log( propertys.propertys.size )

    // return (
    //     <ul>
    //       {  map( propertys.json, (it, key) => (
    //                 <li onClick={this.handleOnClick.bind(this,key)}
    //                   key={key}>{it.name} : {key}</li>)
    //          )
    //       }
    //     </ul>
    // )
    return (
        <div>

          {
            that.renderPropertys( propertys )
          }


      </div>

    )
  }
}


// <SingleCreatePropertyView key='1' model={propertys}   userName={'gordon'} nameOfBuilding={'#01'} location={'shatin'} typeTo={'sell'} typeBy={'forSellBy'} typeFor={'buy'} salePrice={'100'} />
// <SingleCreatePropertyView key='2' model={propertys}   userName={'jeff'} name={'#02'} location={'ma on sha'} typeTo={'buy'} typeBy={'forBuyBy'} typeFor={'sell'} price={'200'} />
// <SingleCreatePropertyView  key='3' model={propertys}  userName={'lala'} name={'#03'} location={'shatin'} typeTo={'buy'} typeBy={'forBuyBy'} typeFor={'sell'} price={'300'} />
// <SingleCreatePropertyView  key='4' model={propertys}  userName={'peter'} name={'#04'} location={'shatin'} typeTo={'buy'} typeBy={'forBuyBy'} typeFor={'sell'} price={'400'} />
// <SingleCreatePropertyView  key='5' model={propertys}  userName={'mac'} name={'#05'} location={'shatin'} typeTo={'lease'} typeBy={'forLeaseBy'} typeFor={'rent'} price={'500'} />
// <SingleCreatePropertyView  key='6' model={propertys}  userName={'Machel'} name={'#06'} location={'shatin'} typeTo={'rent'} typeBy={'forRentBy'} typeFor={'lease'} price={'600'} />
// <SingleCreatePropertyView  key='7' model={propertys}  userName={'gordon'} name={'#07'} location={'shatin'} typeTo={'sell'} typeBy={'forSellBy'} typeFor={'buy'} price={'700'} />
// <SingleCreatePropertyView  key='8' model={propertys}  userName={'jeff'} name={'#08'} location={'ma on sha'} typeTo={'buy'} typeBy={'forBuyBy'} typeFor={'sell'} price={'900'} />
// <SingleCreatePropertyView  key='9' model={propertys}  userName={'lala'} name={'#09'} location={'shatin'} typeTo={'buy'} typeBy={'forBuyBy'} typeFor={'sell'} price={'900'} />
// <SingleCreatePropertyView  key='10' model={propertys} userName={'peter'} name={'#10'} location={'shatin'} typeTo={'buy'} typeBy={'forBuyBy'} typeFor={'sell'} price={'1000'} />


// {  map( propertys.json, (it, key) => (
//      <div key={key}>
//      <SinglePropertyView keyId={key} property={it} propertys={propertys}/>
//     <SingleMatchPropertyView keyId={key} property={it} propertys={propertys}/>
//      </div>
//      )
//   )
// }

// {
//   propertys.propertys.forEach( (it, key) => (
//        <div key={key}>
//        <SinglePropertyView keyId={key} property={it} propertys={propertys}/>
//        <SingleMatchPropertyView keyId={key} property={it} propertys={propertys}/>
//        </div>
//        )
//     )
//   }




//<SinglePropertyView keyId={key} property={it}/>
//<li onClick={this.handleOnClick.bind(this,key)}
//  key={key}>{it.name} : {key}</li>)

//key={key}><input type='text' value={it.name}></input></li>)

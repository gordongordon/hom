import React from 'react'
import {observer} from 'mobx-react'
import { NavBar, Icon, Button} from 'antd-mobile';
import MobxStore from 'mobxStore'
import views from 'views'

@observer
export default class NavigationBar extends React.Component {

   constructor( props ){
     super( props )
     this.state = {
       isLeftIcon : false
     }
   }


   onLogin = ( e ) => {
      e.preventDefault();
      console.log( 'onLogin ... ')
      MobxStore.app.startLogin();
   }


   onLogout = ( e ) => {
      e.preventDefault();
      console.log( 'onLogin ... ')
      MobxStore.app.startLogout();
   }

render() {
   var title = this.props.title;
   var leftContentLabel = "上一頁";
//    var flag = false;
//
//    if ( MobxStore.app.previousView !== undefined )
//    {
// //      this.setState( { isLeftIcon : true })
//        flag = true;
//    }
   if ( title === "好 .. Matching")
   {
       leftContentLabel = ""
   } else {
     leftContentLabel = "上一頁"
   }

   return (
     <div>
       <NavBar leftContent="登出"
         mode="light"
         onLeftClick={ this.onLogout }
         rightContent={[
           <Icon key="0" type="plus" style={{ marginRight: '0.32rem' }} onClick={  this.onLogin }/>
         ]}
       >{MobxStore.app.title}</NavBar>
     </div>
   )

  }
}

//onLeftClick={ () => MobxStore.router.goTo( MobxStore.app.previousView, MobxStore.app.params, MobxStore ) }

// onLeftClick={ () => MobxStore.router.goTo( views.first ) }

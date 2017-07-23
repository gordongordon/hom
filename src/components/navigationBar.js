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

   loginItem  = () => {

     const isLogin = MobxStore.app.user;

     if ( isLogin ) {
       return <span key="2" onClick={ this.onLogout }>logout</span>;
    } else {
       return <span key="2" onClick={ this.onLogin }>login</span>;
     }
   }


render() {
   const title = this.props.title;
   var leftContentLabel = "上一頁";
//   const that = this;

   if ( title === "好 .. Matching")
   {
       leftContentLabel = ""
   } else {
     leftContentLabel = "上一頁"
   }

   return (
     <div>
       <NavBar leftContent=""
         mode="light"
         rightContent={[
           <div key="1">{this.loginItem()}</div>
         ]}
       >{MobxStore.app.title}</NavBar>
     </div>
   )

  }
}

//<Icon key="0" type="plus" style={{ marginRight: '0.32rem' }} onClick={  this.onLogin }/>,
//onLeftClick={ () => MobxStore.router.goTo( MobxStore.app.previousView, MobxStore.app.params, MobxStore ) }

// onLeftClick={ () => MobxStore.router.goTo( views.first ) }

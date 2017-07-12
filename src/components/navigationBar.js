import React from 'react'
import {observer} from 'mobx-react'
import { NavBar, Icon } from 'antd-mobile';
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
       <NavBar leftContent="上一頁"

         mode="light"
         onLeftClick={ () => MobxStore.router.goTo( MobxStore.app.previousView, MobxStore.app.params ) }
         rightContent={[
           <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
           <Icon key="1" type="ellipsis" />,
         ]}
       >{MobxStore.app.title}</NavBar>
     </div>
   )

  }
}

// onLeftClick={ () => MobxStore.router.goTo( views.first ) }
import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import MobxStore from 'mobxStore'
import views from 'views'

export default class NavigationBar extends React.Component {

render() {

   return (
     <div>
       <NavBar leftContent="back"
         mode="light"
         onLeftClick={ () => MobxStore.router.goTo( views.first ) }
         rightContent={[
           <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
           <Icon key="1" type="ellipsis" />,
         ]}
       >HoMatching</NavBar>
     </div>
   )

  }
}

// onLeftClick={ () => MobxStore.router.goTo( views.first ) }

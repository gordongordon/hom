import React from 'react'
import {observer} from 'mobx-react'
import {  Popover, NavBar, Icon, Button} from 'antd-mobile';
import MobxStore from 'mobxStore'
import views from 'views'
import {Fb} from 'firebase-store'

const Item = Popover.Item;

@observer
export default class NavigationBar extends React.Component {

   constructor( props ){
     super( props )
     this.state = {
       loginName : 'none',
       isLeftIcon : false,
       visible: false,
       selected: ''
     }
   }

   onSelect = (opt) => {
     console.log(opt.props.value);

     if ( opt.props.value === 'google') {
       Fb.startLoginGoogle();
       this.setState( {
         loginName  : 'google'
       })
     }
     if ( opt.props.value === 'github') {
       Fb.startLogin();
       this.setState( {
         loginName  : 'github'
       })
     }
     if ( opt.props.value === 'facebook') {
       Fb.startLoginFacebook();
       this.setState( {
         loginName  : 'fb'
       })
     }
     if ( opt.props.value === 'Anonymous') {
       Fb.startLoginAnonyhmously()
       this.setState( {
         loginName  : 'Guest'
       })
     }


     this.setState({
       visible: false,
       selected: opt.props.value,
     });
   };
   handleVisibleChange = (visible) => {
     this.setState({
       visible,
     });
   };


   onLogin = ( e ) => {
      e.preventDefault();
      console.log( 'onLogin ... ')
      Fb.startLogin();
   }


   onLogout = ( e ) => {
      e.preventDefault();
      console.log( 'onLogin ... ')
      Fb.startLogout();
   }

   loginItem  = () => {

     const isLogin = MobxStore.app.user;
     let offsetX = -10; // just for pc demo
     if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
       offsetX = -26;
     }

     if ( isLogin ) {
       return <span key="2" onClick={ this.onLogout }>logout</span>;
    } else {
       // For different user login
       return  <Popover mask
          overlayClassName="fortest"
          overlayStyle={{ color: 'currentColor' }}
          visible={this.state.visible}
          overlay={[
            (<Item key="3" value="google" data-seed="logId">google</Item>),
            (<Item key="4" value="github" data-seed="logId">Github</Item>),
            (<Item key="5" value="facebook" style={{ whiteSpace: 'nowrap' }}>Facebook</Item>),
            (<Item key="6" value="Anonymous">
              <span style={{ marginRight: 5 }}>Anonymous</span>
            </Item>),
          ]}
          align={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [offsetX, 15],
          }}
          onVisibleChange={this.handleVisibleChange}
          onSelect={this.onSelect}
        >
          <div style={{
            height: '100%',
            padding: '0 0.3rem',
            marginRight: '-0.3rem',
            display: 'flex',
            alignItems: 'center',
          }}
          >
            <span>login</span>
          </div>
        </Popover>;
     }
   }


render() {
   const title = this.props.title;

   var leftContentLabel = "上一頁";
  //  let offsetX = -10; // just for pc demo
  //  if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
  //    offsetX = -26;
  //  }
//   const that = this;

   if ( title === "好 .. Matching")
   {
       leftContentLabel = ""
   } else {
     leftContentLabel = "上一頁"
   }

   return (
     <div>
       <NavBar iconName="false"
         mode="light"
         rightContent={[
           <div key="1">{this.loginItem()}</div>
         ]}
       >{this.state.loginName}{MobxStore.app.title}</NavBar>
     </div>
   )

  }
}

//<Icon key="0" type="plus" style={{ marginRight: '0.32rem' }} onClick={  this.onLogin }/>,
//onLeftClick={ () => MobxStore.router.goTo( MobxStore.app.previousView, MobxStore.app.params, MobxStore ) }

// onLeftClick={ () => MobxStore.router.goTo( views.first ) }

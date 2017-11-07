import {
     Toast,
     WhiteSpace,
      WingBlank,
      Button } from 'antd-mobile';
import React from 'react';
// import MobxStore from 'mobxStore'
import views from 'views';
//import FrontPageDisplay from 'frontPageDisplay'
//import {FrontPageTabBar} from 'frontPageTabBar'
import {inject, observer} from 'mobx-react';
// import MrHouse from 'chatbot/mrHouse';

//import Generic from 'chatbot/chatbot-message-ui';


@inject("store") @observer
export class FrontPageView extends React.Component {

  constructor( props ) {
    super( props )
  }

showToast = () => {
  Toast.info('This is a toast tips !!!', 1);
}

showToastNoMask = () => {
  Toast.info('Toast without mask !!!', 2, null, false);
}

successToast = () => {
  Toast.success('Load success !!!', 1);
}

failToast = () =>  {
  Toast.fail('Load failed !!!', 1);
}

offline = () => {
  Toast.offline('Network connection failed !!!', 1);
}

loadingToast = (store, goTo) => {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
    goTo( views.buy ,  store.app.params)
  });
}

onLogin = ( store ) => {
   console.log( 'onLogin ... ')
   store.app.startLogin();
}

renderHistoryButton = ( store ) => {
  if ( store.app.user ) {
    return (<div>
            <WhiteSpace />
            <Button type="ghost" onClick={ () => store.router.goTo( views.list, store.app.params, store )}>過往配對如有></Button>
            </div>
  ) }
}


render ()  {
  const {store} = this.props;
  const {router: {goTo}} = store;



    //console.log( 'store', store)
/* eslint global-require: 0 */
  return  (
    <div>
  <WingBlank>
    <WhiteSpace />
    <WhiteSpace />
    <WhiteSpace />
    <Button type="primary" onClick={ () => this.loadingToast( store, goTo ) }>買 家</Button>
    <WhiteSpace />
    <Button type="primary" onClick={ () => goTo( views.sale, store.app.params, store )}>業 主</Button>
  <WhiteSpace />
  <WhiteSpace />
  <Button type="primary" onClick={ () => goTo( views.rent,  store.app.params, store )}>租 客</Button>
<WhiteSpace />

    <WhiteSpace />
      <Button type="primary" onClick={ () => goTo( views.lease, store.app.params, store )}>房 東</Button>
    <WhiteSpace />
    { this.renderHistoryButton( store )  }
    <WhiteSpace />
       <Button type="ghost" onClick={ () => goTo( views.filter, store.app.params, store )}> 3 Questions </Button>
    <WhiteSpace />
    <WhiteSpace />
        <Button type="ghost" onClick={ () => goTo( views.createAgentFilter, store.app.params, store )}> 增加 地產代理篩選 </Button>
    <WhiteSpace />
    <WhiteSpace />
       <Button type="ghost" onClick={ () => goTo( views.listAgent, store.app.params, store )}> 地產代理篩選</Button>
    <WhiteSpace />
    <WhiteSpace />
       <Button type="ghost" onClick={ () => goTo( views.actionSheetExample, store.app.params, store )}> actionSheet </Button>
    <WhiteSpace />
    <WhiteSpace />
       <Button type="primary" onClick={ () => goTo( views.chatMatching, store.app.params, store )}> ChatMatching </Button>
    <WhiteSpace />
    <WhiteSpace />
       <Button type="primary" onClick={ () => goTo( views.mrHouse, store.app.params, store )}> Mr.House Chatbot </Button>
    <WhiteSpace />
    <WhiteSpace />
    <WhiteSpace />
    </WingBlank>
    </div>

  );
} // End of Render

}

//<FrontPageTabBar/>

//<Button type="ghost" onClick={ this.onLogin( store ) }>Log in </Button>

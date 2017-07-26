import {
      Toast,
      WhiteSpace,
      WingBlank,
      Button } from 'antd-mobile';
import React from 'react'
// import MobxStore from 'mobxStore'
import views from 'views'
import {inject, observer} from 'mobx-react';

@inject("store") @observer
export class AgentAppView extends React.Component {

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

render ()  {
  const {store} = this.props;
  const {router: {goTo}} = store;
    //console.log( 'store', store)
/* eslint global-require: 0 */
  return  (
    <div>
      <Button type="ghost" onClick={ () => goTo( views.matchAgent, store.app.params, store )}> Agent </Button>
    <WhiteSpace />
    </div>

  );
} // End of Render

}

//<FrontPageTabBar/>

//<Button type="ghost" onClick={ this.onLogin( store ) }>Log in </Button>

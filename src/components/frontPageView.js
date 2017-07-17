import {
     Toast,
     WhiteSpace,
      WingBlank,
      Button } from 'antd-mobile';
import React from 'react'
// import MobxStore from 'mobxStore'
import views from 'views'
import FrontPageDisplay from 'frontPageDisplay'
import {FrontPageTabBar} from 'frontPageTabBar'
import {inject, observer} from 'mobx-react';

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

loadingToast = () => {
  Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
    MobxStore.router.goTo( views.buy ,  MobxStore.app.params)
  });
}

render ()  {
  const {store} = this.props;
  const {router: {goTo}} = store;


    console.log( 'store', store)
/* eslint global-require: 0 */
  return  (
    <div>
  <WingBlank>
    <WhiteSpace />
      <WhiteSpace />
        <WhiteSpace />
    <Button type="primary" onClick={ () => goTo( views.lease, store.app.params, store )}>放 租></Button>
    <WhiteSpace />
      <WhiteSpace />
      <Button type="primary" onClick={ () => goTo( views.rent,  store.app.params, store )}>租 屋></Button>
      <WhiteSpace />
        <WhiteSpace />
        <Button type="primary" onClick={ () => goTo( views.sale, store.app.params, store )}>賣 樓></Button>
        <WhiteSpace />
          <WhiteSpace />
          <Button type="primary" onClick={ () => this.loadingToast() }>買 樓></Button>
            <WhiteSpace />
            <Button type="ghost" onClick={ () => goTo( views.list, store.app.params, store )}>過往配對如有></Button>
            <WhiteSpace />
        </WingBlank>
        <FrontPageTabBar/>
        </div>

  );
} // End of Render

}

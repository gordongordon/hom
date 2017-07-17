import {
     Toast,
     WhiteSpace,
      WingBlank,
      Button } from 'antd-mobile';
import React from 'react'
import MobxStore from 'mobxStore'
import views from 'views'
import FrontPageDisplay from 'frontPageDisplay'
import {FrontPageTabBar} from 'frontPageTabBar'

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
/* eslint global-require: 0 */
  return  (
    <div>
  <WingBlank>
    <WhiteSpace />
      <WhiteSpace />
        <WhiteSpace />
    <Button type="primary" onClick={ () => MobxStore.router.goTo( views.lease, MobxStore.app.params )}>放 租></Button>
    <WhiteSpace />
      <WhiteSpace />
      <Button type="primary" onClick={ () => MobxStore.router.goTo( views.rent,  MobxStore.app.params )}>租 屋></Button>
      <WhiteSpace />
        <WhiteSpace />
        <Button type="primary" onClick={ () => MobxStore.router.goTo( views.sale, MobxStore.app.params )}>賣 樓></Button>
        <WhiteSpace />
          <WhiteSpace />
          <Button type="primary" onClick={ () => this.loadingToast() }>買 樓></Button>
            <WhiteSpace />
            <Button type="ghost" onClick={ () => MobxStore.router.goTo( views.list, MobxStore.app.params )}>過往配對如有></Button>
            <WhiteSpace />
        </WingBlank>
        <FrontPageTabBar/>
        </div>

  );
} // End of Render

}

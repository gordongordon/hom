import React from 'react';
import {FormSalePropertyAntMobileWrapper} from 'formSalePropertyAntMobile';
import {FormLeasePropertyAntMobileWrapper} from 'formLeasePropertyAntMobile';
import {FormBuyPropertyAntMobileWrapper} from 'formBuyPropertyAntMobile';

import {Tabs, WhiteSpace } from 'antd-mobile'

const TabPane = Tabs.TabPane;

export class FrontPapePanelView extends React.Component {

  callback = (key) =>  {
    console.log('onChange', key);
  }

  handleTabClick = (key) => {
    console.log('onTabClick', key);
  }

  render() {
     return (
       <div>
    <Tabs defaultActiveKey="2" onChange={this.callback} onTabClick={this.handleTabClick}>
      <TabPane tab="房東" key="1">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25rem', backgroundColor: '#fff' }}>
           <FormLeasePropertyAntMobileWrapper />
        </div>
      </TabPane>
      <TabPane tab="租人" key="2">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25rem', backgroundColor: '#fff' }}>
          render
        </div>
      </TabPane>
      <TabPane tab="賣家" key="3">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '25rem', backgroundColor: '#fff' }}>
        <FormSalePropertyAntMobileWrapper />
        </div>
      </TabPane>
      <TabPane tab="買家" key="4">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '27rem', backgroundColor: '#fff' }}>
          <FormBuyPropertyAntMobileWrapper />
        </div>
      </TabPane>
    </Tabs>
    <WhiteSpace />
  </div>

     )
  }

}

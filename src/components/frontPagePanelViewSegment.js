import React from 'react';
import {FormSalePropertyAntMobileWrapper} from 'form/formSalePropertyAntMobile';
import {FormBuyPropertyAntMobileWrapper} from 'form/formBuyPropertyAntMobile';
import {FormLeasePropertyAntMobileWrapper} from 'form/formLeasePropertyAntMobile';
import {FormRentPropertyAntMobileWrapper} from 'form/formRentPropertyAntMobile';

import {Tabs, WhiteSpace, SegmentedControl } from 'antd-mobile'

const TabPane = Tabs.TabPane;

export class FrontPapePanelViewSegment extends React.Component {

  state = {
    selectedSegmentIndex : 1,
  }

  onChange = (e) => {
    this.setState( {
       selectedSegmentIndex :  e.nativeEvent.selectedSegmentIndex
    })
    console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`);
  }
  onValueChange = (value) => {
    console.log(value);
  }

  form = () => {
    const selectedIndex = this.state.selectedSegmentIndex;

    console.log( 'form() ')
    if ( selectedIndex === 0 ) {
       return <FormLeasePropertyAntMobileWrapper />
    }
    if ( selectedIndex === 1) {
       return <FormRentPropertyAntMobileWrapper />
    }
    if ( selectedIndex === 2 ) {
       return <FormSalePropertyAntMobileWrapper />
    }
    if ( selectedIndex === 3 ) {
       return <FormBuyPropertyAntMobileWrapper />
    }
  }

  render() {

    // const {store} = this.props;
    //
    // console.log( 'store', this.props)

     return (
       <div>
       <SegmentedControl values={['想放租', '想租屋', '想賣樓', '想買樓']}  selectedIndex={this.state.selectedSegmentIndex} onChange={this.onChange} />
        {this.form()}
        </div>
     )
  }

}


// <Tabs defaultActiveKey="2" onChange={this.callback} onTabClick={this.handleTabClick}>
//   <TabPane tab="想放 租" key="1">
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem', backgroundColor: '#fff' }}>
//        <FormLeasePropertyAntMobileWrapper />
//     </div>
//   </TabPane>
//   <TabPane tab="想租 屋" key="2">
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40rem', backgroundColor: '#fff' }}>
//       <FormRentPropertyAntMobileWrapper />
//     </div>
//   </TabPane>
//   <TabPane tab="想賣 樓" key="3">
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '23rem', backgroundColor: '#fff' }}>
//     <FormSalePropertyAntMobileWrapper />
//     </div>
//   </TabPane>
//   <TabPane tab="想買 樓" key="4">
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '23rem', backgroundColor: '#fff' }}>
//       <FormBuyPropertyAntMobileWrapper />
//     </div>
//   </TabPane>
// </Tabs>
// <WhiteSpace />

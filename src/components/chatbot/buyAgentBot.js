import React from 'react';
import { Modal, Toast , Carousel, WhiteSpace, WingBlank, Button } from 'antd-mobile';
//import { Generic } from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import {propertys} from 'userModelView';
import {ListOfMatchOldSalePropertys} from '../listOfMatch/listOfMatchOldSalePropertys';
import { SingleSaleUserMatchViewWrapper } from "../singlePropertyView/singleSaleUserMatchView";
import {observer } from "mobx-react";
import {Generic} from "react-simple-chatbot";


const prompt = Modal.prompt;

@observer
export default class BuyAgentBot extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      data: ['', '', ''],
      initialHeight: 450,
        value: null,
      trigger: false
    };
    this.triggetNext = this.triggetNext.bind(this);
    this.onSharePhone = this.onSharePhone.bind(this);
    this.onCall = this.onCall.bind(this);
    this.display = this.display.bind(this);
  }


  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep( { value: 'building', label : 'matching' });
    });
  }

  onSharePhone() {
    return <Button onClick={() => prompt('請輸入您的電話號碼', '這個號碼只會顯示給這個用戶',
    [
      { text: '取消' },
      {
        text: '提交',
        onPress: value => new Promise((resolve) => {
          Toast.info('onPress promise', 1);
          setTimeout(() => {
            resolve();
            console.log(`value:${value}`);
          }, 1000);
        }),
      },
    ], 'default', null, ['96181448'])}
  >留電話給對方</Button>
  }

  onCall(phone) {
////
      //window.location.href = "tel://" + status.contactPhone;
      window.location.href = "tel://" + phone;
      console.log( `onCall(${phone});`);
   // }
  }

  display( propertys, filter, inDirectCall ) {
    const list = propertys;
    
//    const p = this.props.property;
//    const f = this.props.filter;
    //const status = p.getStatus(f.fbid).get();

    // const status = property.getStatus(filter.fbid).get();
    // const fStatus = filter.getStatus(property.fbid).get();

    // Catched empty list, don't do anything!
    if (list.size === 0) {
      return null;
    }

    //const timeEnter = this.props.timeEnter;
    // Try to show most uptoday item only
    var element = [];
    //           <SingleSalePropertyForMatchView property={property} key={keyID} timeEnter={timeEnter}/>
    //           <SingleSaleAgentPropertyForRespondView property={property} key={keyID} timeEnter={timeEnter}/>

    var count = 0;
    list.forEach((property, keyID) => {
      //let status = inDirectCall.get( keyID);
//      let status = property.getStatus(filter.fbid).get();      
      const fStatus = filter.getStatus(property.fbid).get();
      const status = property.getStatus(filter.fbid).get();
      // let status = this.props.inDirectCall.get(keyID);
      // console.log( 'this.props.store.router.params.keyID',this.props.store.router.params.keyID )
      // let showPhone = false;
      // if (status) {
      //   console.log("call ", status.isShowPhone);
      //   showPhone = status.isShowPhone;
      // }
      // if ( status === undefined ) {
      //    status = new Status( this., 0, false)
      // }

      // debugger
      // element.push(
      //   <SingleSaleUserMatchViewWrapper
      //     filter={filter}
      //     status={status}
      //     property={property}
      //     key={keyID}
      //   />
      // );

      if ( count == 0 ) {
      element.push(
        <Generic key={keyID}
          status={status}
          filter={filter}
          property={property}
          fStatus={fStatus}
          onCall={this.onCall}
          onTriggetNext={this.triggetNext}
          onSharePhone={this.onSharePhone}
          isFirst={true}
          isLast={false}
        />
      );      
    } else 
    {
  
      element.push(
        <Generic key={keyID}
          status={status}
          filter={filter}
          property={property}
          fStatus={fStatus}
          onCall={this.onCall}
          onTriggetNext={this.triggetNext}
          onSharePhone={this.onSharePhone}
          isFirst={false}
          isLast={false}
          
        />
      );      

    }
    count++;
    });

  return (element);
  };

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    const keyID = this.props.keyID;  

    //filter={property} inDirectCall={property.inDirectCall} propertys={property.matchedPropertys}

    // Buy Property ID
    const property = propertys.propertys.get( keyID );
//    const property = propertys.propertys.get( '-Ktw-IOu3RDyKZybeB-A' );
    const localpropertys = property.matchedPropertys;
    const filter = property;
    const inDirectCall = property.inDirectCall;    
    // Sell Property ID
    //const property = propertys.propertys.get( '-Kte6f8sOgZ0gsVWwv2k' );
    // return (
    //     <ListOfMatchOldSalePropertys filter={property} inDirectCall={property.inDirectCall} propertys={property.matchedPropertys}/>
    // )

    return (
        <Carousel
          className="my-carousel"
          autoplay={false}
          dots={true}
          selectedIndex={0}
          swipeSpeed={3}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
        {this.display(localpropertys, filter, inDirectCall)}
      </Carousel>

     );
  }
}

BuyAgentBot.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

BuyAgentBot.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};
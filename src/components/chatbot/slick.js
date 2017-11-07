import React from 'react';
import { Carousel, WhiteSpace, WingBlank, Button } from 'antd-mobile';
//import { Generic } from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import {propertys} from 'userModelView';
import {ListOfMatchOldSalePropertys} from '../listOfMatch/listOfMatchOldSalePropertys';
import { SingleSaleUserMatchViewWrapper } from "../singlePropertyView/singleSaleUserMatchView";
import {observer } from "mobx-react";
import {Generic} from "react-simple-chatbot";


@observer
export default class Slick extends React.Component {
  constructor( props ) {
    super( props )
    this.state = {
      data: ['', '', ''],
      initialHeight: 450,
        value: null,
      trigger: false
    };
    this.triggetNext = this.triggetNext.bind(this);
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

  display( propertys, filter, inDirectCall ) {
    const list = propertys;
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

    list.forEach((property, keyID) => {
      let status = inDirectCall.get( keyID);
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

      element.push(
        <Generic key={keyID}
          property={property}
        />
      );      
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

Slick.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

Slick.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};
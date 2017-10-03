import React from "react";
//import { List , Card, Stepper, Picker, SwipeAction, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl} from 'antd-mobile';
//import { createForm } from 'rc-form';
//import moment from 'moment';
//import 'moment/locale/zh-cn';
//import {propertys} from 'userModelView'
import { SingleSaleUserMatchViewWrapper } from "../singlePropertyView/singleSaleUserMatchView";
//import SingleSaleAgentFilterView from "../singlePropertyView/singleSaleAgentFilterView";
//import SingleSaleCaseView from "../singlePropertyView/singleSaleCaseView";
import { SingleSaleAgentRespondViewWrapper } from "../singlePropertyView/singleSaleAgentRespondView";

import { observer } from "mobx-react";
import PropTypes from 'prop-types';
//import Loadable from 'react-loadable';
import LoadableVisibility from 'react-loadable-visibility/react-loadable';
//import Loading from  'loading'

function MyLoadingComponent(props) {
  if (props.isLoading) {
    // While our other component is loading...
    if (props.timedOut) {
      // In case we've timed out loading our other component.
      return <div>Loader timed out!</div>;
    } else if (props.pastDelay) {
      // Display a loading screen after a set delay.
      return <div>Loading...</div>;
    } else {
      // Don't flash "Loading..." when we don't need to.
      return null;
    }
  } else if (props.error) {
    // If we aren't loading, maybe
    return <div>Error! Component failed to load</div>;
  } else {
    // This case shouldn't happen... but we'll return null anyways.
    return null;
  }
}

const SingleSaleCaseViewLoader = LoadableVisibility({
 loader: () => import('../singlePropertyView/singleSaleCaseView'),
 loading: MyLoadingComponent,
});

const SingleSaleAgentFilterViewLoader = LoadableVisibility({
  loader: () => import('../singlePropertyView/singleSaleAgentFilterView'),
  loading: MyLoadingComponent,
 });

//  const SingleSaleCaseViewLoader = Loadable({
//   loader: () => import('../singlePropertyView/singleSaleCaseView'),
//   loading: MyLoadingComponent,
//  });

//  const SingleSaleCaseViewLoader = Loadable({
//   loader: () => import('../singlePropertyView/singleSaleCaseView'),
//   loading: MyLoadingComponent,
//  });
 

@observer
export default class ListOfMatchAgentSalePropertys extends React.Component {
  constructor(props) {
    super(props);
  }

  display = propertys => {
    const list = propertys;
    // Catched empty list, don't do anything!
    if (list.size === 0) {
      return null;
    }

    // Try to show most uptoday item only
    var element = [];

    //  const timeEnter = this.props.timeEnter;
    //  const c = moment( timeEnter );

    list.forEach((p, keyID) => {
      const segment = this.props.segment;

      if (segment === "case") {
        element.push(
          <SingleSaleCaseViewLoader
            property={p}
            filter={this.props.filter}
            key={keyID}
            filterID={this.props.filterID}
          />
        );
      } else if (segment === "filter") {
        element.push(
          <SingleSaleAgentFilterViewLoader
            property={p}
            key={keyID}
            filterID={this.props.filterID}
          />
        );
      } else if (segment === "response") {
        element.push(
          <SingleSaleAgentRespondViewWrapper
            filter={this.props.filter}
            property={p}
            key={keyID}
            filterID={this.props.filterID}
          />
        );
      } else {
        element.push(
          <SingleSaleUserMatchViewWrapper
            filter={this.props.filter}
            property={p}
            key={keyID}
            filterID={this.props.filterID}
          />
        );
      }
    });

    return <div>{element.reverse()}</div>;
  };

  render() {
    const { propertys } = this.props;

  return (<div>{this.display(propertys)}</div>);
  }
}

ListOfMatchAgentSalePropertys.propTypes = {
  segment : PropTypes.oneOf( ['case', 'filter', 'response'] ),
  filter  : PropTypes.object.isRequired,
  filterID : PropTypes.string,
  propertys : PropTypes.object.isRequired
};
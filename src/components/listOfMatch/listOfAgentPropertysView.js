import React from 'react'
import { List, Toast, NoticeBar, Icon, Card, SwipeAction, Stepper, Picker, DatePicker, Badge, Flex, InputItem, WhiteSpace, Button, SegmentedControl } from 'antd-mobile';
import { createForm } from 'rc-form';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import { agentModel } from 'agentModelView'
import { observer } from 'mobx-react';
import MobxStore from 'mobxStore';
import views from 'views';
import Proptypes from 'prop-types';

const Item = List.Item;
const Brief = Item.Brief;


@observer
export default class ListOfAgentPropertysView extends React.Component {

  onClick = (key) => {
    console.log(key)
  }

  hhc = (keyID) => {
    this.props.history.push("/front?", keyID);
  }

  loadingToast = () => {
    Toast.loading('Loading...', 1, () => {
      console.log('Load complete !!!');
    });
  }


  successToast = () => {
    Toast.success('成功刪除!!!', 1);
  }

  /**
   * model is userModelView, use to handle all functions , e.g. del
   * propertys is list of propertys for this user
   * h is a callback to handle next route wiht keyID
   */
  renderPropertys = (model, propertys, h) => {

    const list = propertys;

    const isListEmpty = list => list.size === 0 ? true : null ; 

    // Catched empty list, don't do anything!
    if ( isListEmpty( list ) ) {
      return null;
    }

    // if (list.size === 0 ) {
    //   return null;
    // }

    const that = this;

    console.log('list size ', list.size)
    var element = [];

    list.forEach((property, keyID) => {
      // var p;    // property from matched property, if any
      // var info; // Message

      // Try to render more info before go into matching pages! 
      // if ( property.matchedPropertys.size > 0) {
      //   p = property.matchedPropertys.entries().next().value[1];
      //   info = "";
      // } else {
      //   console.log( 'p.matchedPropertys.size === 0 ', keyID );
      //   info = "沒有任何更新鮮配對,請更改篩選!"
      // }

      //}
  
     if (property.typeTo === 'buy') {
        element.push(
          <div key={keyID}>
            <SwipeAction
              style={{ backgroundColor: 'gray' }}
              autoClose
              right={[
                {
                  text: 'Cancel',
                  onPress: () => console.log('cancel'),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
                {
                  text: 'Delete',
                  onPress: () => { this.successToast(); model.del(keyID); },
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
              left={[
                {
                  text: 'Reply',
                  onPress: () => console.log('reply'),
                  style: { backgroundColor: '#108ee9', color: 'white' },
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('cancel'),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
              ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}
            >
              <Item 
              extra={<Badge size="large" text={ property.typeByLabel + property.sizeLabel} 
              overflowCount={99} />} 
                arrow="horizontal" 
                onClick={() => MobxStore.router.goTo(views.matchAgent, { keyID, 
                  typeTo : property.typeTo,
                  // Routing either Open or engage
                  selectedSegmentIndex : property.typeBy === "open"? 0 : 1
                  
                })} 
                thumb="http://hair.losstreatment.com/icons/building-up.svg"
                wrap="true"
                multipleLine >
                {property.typeToLabel}:{property.addressLocationLabel}/{property.nameOfBuildingLabel}<Brief>
                </Brief>
              </Item>
            </SwipeAction>
            
            </div>
        )
      }  // end of buy

      if (property.typeTo === 'sale') {
        element.push(
          <div key={keyID}>
            <SwipeAction
              style={{ backgroundColor: 'gray' }}
              autoClose
              right={[
                {
                  text: 'Cancel',
                  onPress: () => console.log('cancel'),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
                {
                  text: 'Delete',
                  onPress: () => { this.successToast(); model.del(keyID); },
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
              left={[
                {
                  text: 'Reply',
                  onPress: () => console.log('reply'),
                  style: { backgroundColor: '#108ee9', color: 'white' },
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('cancel'),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
              ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}
            >
              <Item extra={<Badge size="large" text={property.typeByLabel + property.sizeLabel} overflowCount={99} />} 
              thumb="http://hair.losstreatment.com/icons/rent.svg"
              arrow="horizontal" 
              onClick={() => MobxStore.router.goTo(views.matchAgent, { keyID, typeTo : property.typeTo,
                selectedSegmentIndex : property.typeBy === "open"? 0 : 1
                
              })} 
              multipleLine >
              {property.typeToLabel}:{property.addressLocationLabel}/{property.nameOfBuildingLabel}<Brief>
              </Brief>
           
              </Item>
            </SwipeAction>
            
            </div>
        )
      }  // end of sale

      

      if (property.typeTo === 'rent') {
        element.push(
          <div key={keyID}>
            <SwipeAction
              style={{ backgroundColor: 'gray' }}
              autoClose
              right={[
                {
                  text: 'Cancel',
                  onPress: () => console.log('cancel'),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
                {
                  text: 'Delete',
                  onPress: () => { this.successToast(); model.del(keyID); },
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
              left={[
                {
                  text: 'Reply',
                  onPress: () => console.log('reply'),
                  style: { backgroundColor: '#108ee9', color: 'white' },
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('cancel'),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
              ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}
            >
              <Item extra={<Badge size="lg" text={property.typeByLabel + property.sizeLabel} overflowCount={99} />} 
              arrow="horizontal" 
              onClick={() => MobxStore.router.goTo(views.matchAgent, { keyID, 
                typeTo : property.typeTo,
                selectedSegmentIndex : property.typeBy === "open"? 0 : 1
                
              })} 
            thumb="http://hair.losstreatment.com/icons/building-down.svg"
              multipleLine
              >
              {property.typeToLabel}:{property.addressLocationLabel}/{property.nameOfBuildingLabel}<Brief>
              </Brief>
            </Item>
            </SwipeAction>
            </div>
        )
      }  // end of rent

      if (property.typeTo === 'lease') {
        element.push(
          <div key={keyID}>
            <SwipeAction
              style={{ backgroundColor: 'gray' }}
              autoClose
              right={[
                {
                  text: 'Cancel',
                  onPress: () => console.log('cancel'),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
                {
                  text: 'Delete',
                  onPress: () => { this.successToast(); model.del(keyID); },
                  style: { backgroundColor: '#F4333C', color: 'white' },
                },
              ]}
              left={[
                {
                  text: 'Reply',
                  onPress: () => console.log('reply'),
                  style: { backgroundColor: '#108ee9', color: 'white' },
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('cancel'),
                  style: { backgroundColor: '#ddd', color: 'white' },
                },
              ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}
            >
              <Item 
                 extra={<Badge size="large" text={property.typeByLabel + property.sizeLabel} overflowCount={99} />} 
                 arrow="horizontal" 
                 onClick={() => MobxStore.router.goTo(views.matchAgent, { keyID , 
                  typeTo : property.typeTo,
                  selectedSegmentIndex : property.typeBy === "open"? 0 : 1
                })} 
                 thumb="http://hair.losstreatment.com/icons/rent-up.svg"
                
                 multipleLine >
                 {property.typeToLabel}:{property.addressLocationLabel}/{property.nameOfBuildingLabel}<Brief>
                 </Brief>
               </Item>
            </SwipeAction>
          </div>
        )
      }  // end of lease



    })
    return <div>{element.reverse()}</div>
  }

  render() {

    //console.log( "title", this.props.title)
    const { store } = this.props;

    //  console.log( 'list of properys view .store', store)
    const that = this;
    var { handleNextProperty } = this.props;

    return (
      <div>
        <NoticeBar mode="closable" icon={<Icon type="check-circle-o" size="xxs" />}>
          以下是你的過往配對!
        </NoticeBar>
        <List renderHeader={() => '你搜尋嘅樓盤'} className="my-list">
          {that.renderPropertys(agentModel, agentModel.filters, handleNextProperty)}
        </List>
      </div>
    )
  }
}

ListOfAgentPropertysView.propTypes = {
  handleNextProperty : Proptypes.object.isRequired,
  store : Proptypes.object
};

import React from 'react'
import { Drawer, List, NavBar , Icon, WhiteSpace} from 'antd-mobile';
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'

const Item = List.Item;
const Brief = Item.Brief;

export class FrontPageView extends React.Component {
  state = {
    open: false,
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  render() {
    const sidebar = (<List>
      {[...Array(6).keys()].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
          thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    return (<div>

      <WhiteSpace size="lg" />

      <List className="my-list">
      <Item
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
        onClick={() => {}}
      >
        想放租 <Brief>副标题</Brief>
      </Item>
      </List>
      <WhiteSpace size="sm" />
      <List className="my-list">

      <Item
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
        onClick={() => {}}
      >
        想租屋 <Brief>副标题</Brief>
      </Item>
      </List>
      <WhiteSpace size="sm" />
      <List className="my-list">

      <Item
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
        onClick={() => {}}
      >
        想買樓 <Brief></Brief>
      </Item>
      </List>
      <WhiteSpace size="sm" />
      <List className="my-list">

      <Item
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
        onClick={() => {}}
      >
        标题文字 <Brief>副标题</Brief>
      </Item>
    </List>
    </div>);
  }
}

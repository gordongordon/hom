import React from 'react'
import { Drawer, List, NavBar , Icon} from 'antd-mobile';
import {FrontPapePanelViewSegment} from 'frontPagePanelViewSegment'

export class MenuBar extends React.Component {
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
      <NavBar  className="top-nav-bar" iconName="ellipsis" onLeftClick={this.onOpenChange}   rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}>HoMatching.<small>com</small></NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight - 200 }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 0 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
      </Drawer>
    </div>);
  }
}

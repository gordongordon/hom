import React from 'react'
import { Drawer, List, NavBar } from 'antd-mobile';

export class MenuBar extends React.Component {
  state = {
    open: true,
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }


  handleClick = (e) => {
  e.preventDefault(); // Fix event propagation on Android
  console.log("handleclick")

}

  render() {
    const sidebar = (<List>
      {[...Array(20).keys()].map((i, index) => {
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
      <NavBar
            leftContent="Menu"
            mode="light"
            iconName="hello"
            onLeftClick={ this.handleClick }
            className="top-nav-bar"
          >
            Here is title
          </NavBar>
    </div>);
  }
}

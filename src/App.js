import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { Button, List } from 'antd-mobile';

@observer
class App extends Component {

  render() {
    return (
      <div style={{ margin: 100 }}>
        <h1>Welcome to mobx-react-ant-boilerplate :)</h1>
          <List style={{ margin: '0.1rem 0', backgroundColor: 'white' }}>
            <List.Item
              extra={<Button type="ghost" size="small" inline>small</Button>}
              multipleLine
            >
              regional manager
              <List.Item.Brief>
                Can be collected, refund, discount management, view data and other operations
              </List.Item.Brief>
            </List.Item>
            <List.Item
              extra={<Button type="primary" size="small" inline>small</Button>}
              multipleLine
            >
              regional manager
              <List.Item.Brief>
                Can be collected, refund, discount management, view data and other operations
              </List.Item.Brief>
            </List.Item>
          </List>
        <DevTools />
      </div>
    );
  }
};

export default App;

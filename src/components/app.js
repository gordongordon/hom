import React from 'react';
import {Provider} from 'mobx-react';
import MobxStore from 'mobxStore';
import {MobxRouter} from 'mobx-router';
import NavigationBar from 'navigationBar';

const App = () => ( <Provider store={MobxStore}>
    <div>
      <NavigationBar />
      <MobxRouter />
    </div>
    </Provider>);

export default App;

//const Username = ({ username }) => <p>The logged in user is: {username}</p>
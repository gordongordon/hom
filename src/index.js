import React from 'react';
import ReactDOM from 'react-dom';
import {MobxRouter, startRouter} from 'mobx-router';

//mobx
import {Provider} from 'mobx-react';
import MobxStore from 'mobxStore';

//router
import views from 'views';
startRouter(views, MobxStore);

ReactDOM.render(
  <Provider store={MobxStore}>
    <div>
      <h1>{MobxStore.app.title}</h1>
      <button onClick={() => MobxStore.router.goTo(views.second)}>Go First</button>
      <MobxRouter/>
    </div>
  </Provider>, document.getElementById('root')
)

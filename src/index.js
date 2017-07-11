import React from 'react';
import ReactDOM from 'react-dom';
import {MobxRouter, startRouter} from 'mobx-router';

//mobx
import {Provider} from 'mobx-react';
import store from 'store';

//router
import views from 'views';
startRouter(views, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>{store.app.title}</h1>
      <button onClick={() => store.router.goTo(views.second)}>Go First</button>
      <MobxRouter/>
    </div>
  </Provider>, document.getElementById('root')
)

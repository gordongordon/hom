import AppStore from 'stores/app-store';
import {RouterStore} from 'mobx-router';

const MobxStore = {
  app: new AppStore(),
  router: new RouterStore()
};

export default MobxStore;

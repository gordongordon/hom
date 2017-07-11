import {extendObservable, action} from 'mobx';

class AppStore {
  constructor() {
    extendObservable(this, {
      title: 'HoMatching',
      user: undefined
    });
  }

  setTitle = action(title => {
    this.title = title;
  });
}

export default AppStore;
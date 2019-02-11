import { autorun, observable } from 'mobx';
import { observer } from "mobx-react"

class mainStore {
  @observable test = "HUB !"
}

const store = new mainStore;

export default store;

autorun(() => {
  console.log(store.test);
})
import { observable } from "mobx";

class RootStore {
  constructor() {
    this.userStore = new UserStore(this)
  }
}

class UserStore {
  @observable name = "Hub"
}



export default RootStore;
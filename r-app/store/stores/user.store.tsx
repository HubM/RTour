import { observable, action } from "mobx";

export default class UserStore {
  @observable isLoggedIn = false
  @observable name = "Hub"


  @action.bound
  setLoggedStatusToTrue() {
    this.isLoggedIn = true;
  }
}
import { observable, action } from "mobx";

export default class UserStore {
  @observable isLoggedIn = false
  @observable user = {
    firstname: "",
    lastname: "",
    age: undefined,
    email: "",
    username: "",
    profilePic: "",
    city: "",
    trips: [],
    music: []
  }

  @action.bound
  setLoggedStatusToTrue() {
    this.isLoggedIn = true;
  }

  @action.bound
  setUser(user: object) {
    Object.assign(this.user, { ...user })
  }
}
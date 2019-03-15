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
  }

  @action.bound
  setLoggedStatusToTrue() {
    this.isLoggedIn = true;
  }

  @action.bound
  setUser(user: object) {
    const { firstname, lastname, age, email, username, profilePic, city, trips } = user;
    Object.assign(this.user, { firstname, lastname, age, email, username, profilePic, city, trips })
  }
}
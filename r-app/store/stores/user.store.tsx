import { observable, action } from "mobx";

const user = observable({
  user: {
    id: 0,
    firstname: "",
    lastname: "",
    age: 0,
    email: "",
    username: "",
    profilePic: "",
    city: "",
    trips: [],
  },

  setUser(user: object) {
    this.user.id = user.id;
    this.user.firstname = user.firstname;
    this.user.lastname = user.lastname;
    this.user.age = user.age;
    this.user.email = user.email;
    this.user.username = user.username;
    this.user.profilePic = user.profilePic;
    this.user.city = user.city;
    this.user.trips = user.trips;
  }
}, {
    setUser: action
  })

export default class UserStore {
  @observable isLoggedIn = false
  @observable user = user

  @action.bound
  setLoggedStatusToTrue() {
    this.isLoggedIn = true;
  }
  @action setUser = user.setUser
}
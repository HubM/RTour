import { observable, action } from "mobx";
import { getRoadtripsByUserNameAPI } from '../R-Profile/_api';

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
  getRoadtripsByUserName(username: string) {
    getRoadtripsByUserNameAPI(username)
      .then((roadtrips: object) => {
        this.user.trips.push(roadtrips[0]);
      })
      .catch((error: string) => {
        throw error;
      })
  }

  @action.bound
  setUser(user: object) {
    Object.assign(this.user, { ...user })
  }
}
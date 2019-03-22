import { observable, action } from "mobx";
import getUserByUserName from "./_api";


export default class UserProfileStore {
  @observable userProfile = {
    firstname: "",
    lastname: "",
    age: undefined,
    email: "",
    username: "",
    city: "",
    trips: [],
    music: []
  }

  @action.bound
  setUserProfileInfos(user: object) {
    Object.assign(this.userProfile, { ...user })
  }

  @action.bound
  fetchUserProfileInfos(username: string) {
    getUserByUserName(username)
      .then((user: object) => {
        this.setUserProfileInfos(user.data)
      })
      .catch(error => {
        throw error;
      })
  }
}
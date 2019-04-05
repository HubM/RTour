import { observable, action } from "mobx";
import { getUserByIdAPI, getRoadtripsByUserAPI } from "./_api";


export default class UserProfileStore {
  @observable userProfile = {
    user: {
      firstname: "",
      lastname: "",
      age: undefined,
      email: "",
      username: "",
      city: "",
      music: []
    },
    roadtrips: []
  }

  @action.bound
  setUserProfileInfos(user: object) {
    getRoadtripsByUserAPI(user._id)
      .then((roadtrips: any) => {
        const loggedUserObject = {
          user,
          roadtrips: roadtrips.length > 0 ? roadtrips : []
        }


        Object.assign(this.userProfile, loggedUserObject)

        console.log("USER PROFILE =>", this.userProfile);
      })
      .catch(error => {
        throw error
      })
  }

  @action.bound
  fetchUserProfileInfos(id: string) {
    getUserByIdAPI(id)
      .then((user: object) => {
        this.setUserProfileInfos(user);
      })
      .catch(error => {
        throw error;
      })
  }
}
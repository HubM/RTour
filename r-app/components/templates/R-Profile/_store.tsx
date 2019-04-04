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
        if (roadtrips.length > 0) {
          const loggedUserObjectWithRoadtrips = {
            user,
            roadtrips
          }
          Object.assign(this.userProfile, loggedUserObjectWithRoadtrips)
        } else {
          const loggedUserObjectWithoutRoadtrips = {
            user,
            roadtrips: []
          }
          Object.assign(this.userProfile, loggedUserObjectWithoutRoadtrips);
        }
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
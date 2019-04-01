import { observable, action } from "mobx";
import { getUserByUserNameAPI, getRoadtripsByUserNameAPI } from "./_api";


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
    getRoadtripsByUserNameAPI(user.username)
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
  fetchUserProfileInfos(username: string) {
    getUserByUserNameAPI(username)
      .then((user: object) => {
        this.setUserProfileInfos(user);
      })
      .catch(error => {
        throw error;
      })
  }
}
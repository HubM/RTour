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
          Object.assign(this.userProfile, {
            user,
            roadtrips
          })
        } else {
          Object.assign(this.userProfile.user, { ...user });
        }
      })
      .catch(error => {
        throw error
      })
  }

  @action.bound
  fetchUserProfileInfos(username: string) {
    console.log(username)
    getUserByUserNameAPI(username)
      .then((user: object) => {
        console.log("Fetched profile user", user);
        this.setUserProfileInfos(user);
        // getRoadtripsByUserNameAPI(user.trips)
        //   .then((roadtrips: object) => {
        //     this.setUserProfileInfos(user)
        //   })
        //   .catch(error => {
        //     throw error;
        //   })
      })
      .catch(error => {
        throw error;
      })
  }
}
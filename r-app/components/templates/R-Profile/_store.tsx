import { observable, action } from "mobx";
import { getUserByUserNameAPI, getRoadtripsByUserNameAPI } from "./_api";


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
  setLoggedUserInfos(user: object) {
    Object.assign(this.userProfile, {
      ...user
    })
  }

  @action.bound
  setUserProfileInfos(user: object, roadtrips: object) {
    Object.assign(this.userProfile, {
      ...user,
      roadtrips
    })
  }

  @action.bound
  fetchUserProfileInfos(username: string) {
    getUserByUserNameAPI(username)
      .then((user: object) => {
        getRoadtripsByUserNameAPI(username)
          .then((roadtrips: object) => {
            // Object.assign(this.userProfile, {
            //   ...user,
            //   roadtrips
            // })
            console.log("USER =>", user.data);
            console.log("HIS ROADTRIPS => ", roadtrips.data)
            // this.setUserProfileInfos(user.data, roadtrips.data)
          })
          .catch(error => {
            throw error;
          })
      })
      .catch(error => {
        throw error;
      })
  }
}
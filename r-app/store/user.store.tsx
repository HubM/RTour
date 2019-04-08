import { observable, action, set } from "mobx";
import { checkUsernameOrEmailAPI } from "../components/templates/R-Login/_api";
import { getUserByIdAPI, getRoadtripsByUserAPI } from "../components/templates/R-Profile/_api";

export default class UserStore {
  @observable isLoggedIn = false
  
  @observable user = {
    _id: "",
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

  @observable userLoginMessageContainer = {}

   @action.bound
  setUserProfileInfos(user: object) {
    getRoadtripsByUserAPI(user._id)
      .then((roadtrips: any) => {
        const loggedUserObject = {
          user,
          roadtrips: roadtrips.length > 0 ? roadtrips : []
        }

        Object.assign(this.userProfile, loggedUserObject)
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

  @action.bound
  checkUsernameOrEmail(usernameOrEmail: string) {
    checkUsernameOrEmailAPI(usernameOrEmail)
      .then((user: object) => {
        if (user) {
          this.setUser(user);
          this.setLoggedStatusToTrue(true);
          this.setErrorMessage({
            status: "success",
            message: `Hello back ${user.username} 😎`
          })
        }

        this.setErrorMessage({
          status: "error",
          message: `No ${usernameOrEmail} are register in RTour app`
        })
      })
      .catch((error: string) => {
        throw error;
      })
  }

  @action.bound
  setLoggedStatusToTrue(value: boolean) {
    this.isLoggedIn = value;
  }

  @action.bound
  setUser(user: object) {
    Object.assign(this.user, { ...user })
  }

  @action.bound
  setErrorMessage(message: object) {
    Object.assign(this.userLoginMessageContainer, { ...message })
  }
}
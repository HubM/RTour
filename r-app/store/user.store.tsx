import { observable, action } from "mobx";
import { checkUsernameAPI } from "../components/templates/R-Login/_api";
import { getUserByIdAPI, getRoadtripsByUserAPI } from "../components/templates/R-Profile/_api";
import { createUserAPI } from '../components/templates/R-Register/_api';

export default class UserStore {
  /**
   * MAIN USER CONNECTION
  */
  @observable isLoggedIn = false

  @observable user = {
    _id: "",
    firstname: "",
    lastname: "",
    age: undefined,
    username: "",
    profilePic: "",
    city: "",
    trips: [],
    music: []
  }

  @observable userLoginMessageContainer = {}

  @action.bound
  checkUsername(usernameOrEmail: string) {
    return new Promise(resolve => {
      checkUsernameAPI(usernameOrEmail)
        .then((response: object) => {
          if (response.user) {
            this.setUser(response.user);
            this.setLoggedStatusToTrue(true);
          }

          resolve(response)
        })
        .catch((error: string) => {
          throw error;
        })
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


  @action.bound
  disconnectUser() {
    const initialUser = {
      _id: "",
      firstname: "",
      lastname: "",
      age: undefined,
      username: "",
      profilePic: "",
      city: "",
      trips: [],
      music: []
    }

    Object.assign(this.user, { ...initialUser });
  }

  @action
  createUser(user: object) {
    return new Promise(resolve => {
      createUserAPI(user)
      .then((response: object) => {
        resolve(response)
      })
      .catch((error: string) => {
        throw error;
      })
    })
  }


  /**
   * GET USER PROFILE PAGE (OWN OR NOT)
   */
  @observable userProfile = {
    user: {
      firstname: "",
      lastname: "",
      age: undefined,
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

  // RIDER REQUEST INFOS 
  @observable riderProfile = {
    _id: "",
    firstname: "",
    lastname: "",
    age: undefined,
    username: "",
    profilePic: "",
    city: "",
    trips: [],
    music: []
  };


  @action.bound
  fetchRiderProfileInfos(id: string) {
    getUserByIdAPI(id)
      .then((rider: object) => {
        Object.assign(this.riderProfile, rider)
      })
      .catch(error => {
        throw error;
      })
  }


}
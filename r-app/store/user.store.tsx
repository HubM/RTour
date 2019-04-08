import { observable, action, set } from "mobx";
import { checkUsernameOrEmailAPI } from "../components/templates/R-Login/_api";

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

  @observable userLoginMessageContainer = {}

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
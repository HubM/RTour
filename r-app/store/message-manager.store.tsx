import { observable, action } from "mobx";

const initialState = {
  status: "",
  text: ""
}

export default class MessageManagerStore {

  @observable messageManagerContainer = initialState;

  @action.bound
  setMessage(message: object) {
    Object.assign(this.messageManagerContainer, message);
  }

  @action.bound
  clearMessageManager() {
    Object.assign(this.messageManagerContainer, initialState)
  }
}
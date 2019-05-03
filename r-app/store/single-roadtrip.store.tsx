import { observable, action } from "mobx";

export default class SingleRoadtripStore {
  /**
   * Single roadtrip
  */
  @observable singleRoadtrip = {
    startCity: "",
    endCity: "",
    owner: {
      firstname: "",
      lastname: "",
      username: "",
      calendar: {
        startingDate: "",
        duration: 1
      },
      hour: "",
      roadtripType: "",
      seats: 1,
      riders: []
    }
  }


  @action.bound
  setSingleRoadtrip(roadtrip: object) {
    Object.assign(this.singleRoadtrip, { ...roadtrip })
  }

  //   if(riders && riders.length > 0) {
  //   if (isOwner) {
  //     ridersDisplayed = riders;
  //   } else {
  //     ridersDisplayed = riders.filter((rider: object) => rider.isValidated);
  //   }

  //   if (ridersDisplayed.length > 0) {
  //     ridersSection =

  //       }
  // }
}
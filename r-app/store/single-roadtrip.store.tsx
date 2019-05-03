import { observable, action } from "mobx";
import { refuseRiderToRoadtripAPI } from "../components/templates/R-ManageRider/_api";

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

  @action.bound
  refuseRiderToRoadtrip(userId: string, roadtripId: string) {
    refuseRiderToRoadtripAPI(userId, roadtripId)
      .then(deletedUser => {
        console.log(deletedUser);
      })
      .catch(error => {
        console.log(error)
      })
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
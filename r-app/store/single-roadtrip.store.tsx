import { observable, action } from "mobx";
import { refuseRiderToRoadtripAPI, getRoadtripById } from "../components/templates/R-ManageRider/_api";

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
    this.singleRoadtrip = roadtrip;
  }

  @action.bound
  refuseRiderToRoadtrip(userId: string, roadtripId: string) {
    refuseRiderToRoadtripAPI(userId, roadtripId)
      .then(deletedUser => {
        getRoadtripById(roadtripId)
          .then(roadtrip => {
            this.setSingleRoadtrip(roadtrip)
          })
          .catch(errorRoadtrip => {
            console.log(errorRoadtrip);
          })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
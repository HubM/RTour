import { observable, action } from "mobx";
import { refusedOrCanceledRiderToRoadtripAPI, getRoadtripById } from "../components/templates/R-ManageRider/_api";

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
  refuseRiderToRoadtrip(userId: string, roadtripId: string, type: string) {
    refusedOrCanceledRiderToRoadtripAPI(userId, roadtripId, type)
      .then(refusedUser => {
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

  @action.bound
  cancelRiderToRoadtrip(userId: string, roadtripId: string, type: string) {
    refusedOrCanceledRiderToRoadtripAPI(userId, roadtripId, type)
      .then(canceledUser => {
        console.log("CANCELED USER", canceledUser)
      })
      .catch(errorCanceledUser => {
        console.log(errorCanceledUser);
      })
  }
}
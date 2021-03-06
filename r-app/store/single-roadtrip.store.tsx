import { observable, action } from "mobx";
import { refusedOrCanceledRiderToRoadtripAPI, acceptRiderToRoadtripAPI, getRoadtripById } from "../components/templates/R-ManageRider/_api";
import { addRiderToRoadtripAPI } from '../components/templates/R-SingleRoadtrip/_api';

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

  //Add a rider to a roadtrip
  @action.bound
  addRiderToRoadtrip(roadtripId: string, rider: object) {
    addRiderToRoadtripAPI(roadtripId, rider)
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

  @action
  cancelRiderToRoadtrip(user: object, roadtripId: string, type: string) {
    const {_id, deviceToken } = user;
    refusedOrCanceledRiderToRoadtripAPI({
      _id,
      deviceToken
    }, roadtripId, type)
      .then(canceledRider => {
        console.log("CANCELED RIDER", canceledRider)
      })
      .catch(errorCanceledRider => {
        console.log(errorCanceledRider);
      })
  }

  @action
  acceptRiderToRoadtrip(userId: string, roadtripId: string) {
    acceptRiderToRoadtripAPI(userId, roadtripId)
      .then(acceptedRider => {
        console.log("ACCEPTED RIDER", acceptedRider)
      })
      .catch(errorAcceptedRider => {
        console.log(errorAcceptedRider)
      })
  }
}
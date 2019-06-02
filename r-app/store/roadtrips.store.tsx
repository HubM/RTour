import { action, observable } from 'mobx';
import { addRoadtripAPI } from "../components/templates/R-AddARoadtrip/_api";
import { getRoadtripsByDateAPI } from "../components/templates/R-ListRoadtrips/_api";
import { deleteOwnRoadtripAPI } from "../components/templates/R-SingleRoadtrip/_api";


export default class roadtripStore {
  @observable roadtrips = [];
  @observable isFetchingRoadtrips = false;

  // Get roadtrips by date
  @action
  getRoadtrips(date: string) {
    return new Promise((resolve, reject) => {
      this.isFetchingRoadtrips = true;

      getRoadtripsByDateAPI(date)
        .then(newRoadtrips => {
          this.isFetchingRoadtrips = false;
          resolve(newRoadtrips);
        })
        .catch(error => {
          reject(error);
        })
    })
  }

  //Add a new roadtrip
  @action.bound
  addANewRoadtrip(roadtrip: object) {
    addRoadtripAPI(roadtrip)
      .then(roadtrip => {
        this.roadtrips.push(roadtrip.data);
      })
      .catch(error => {
        console.log("Error while adding a new roadtrip => ",error);
      })
  }

  // Delete roadtrip
  @action.bound
  deleteOwnRoadtrip(id: string) {
    deleteOwnRoadtripAPI(id)
      .then(deletedRoadtrip => {
        this.roadtrips.forEach((roadtrip, index) => {
          if (roadtrip._id === id) {
            this.roadtrips.splice(index, 1);
          }
        })
      })
      .catch(error => {
        console.log("Error while deleting own roadtrip", error);
      })
  }


}

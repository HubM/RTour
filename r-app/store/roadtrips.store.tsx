import { action, observable } from 'mobx';
import { addRoadtripAPI } from "../components/templates/R-AddARoadtrip/_api";
import { getRoadtripsByDateAPI } from "../components/templates/R-ListRoadtrips/_api";
import { deleteOwnRoadtripAPI } from "../components/templates/R-SingleRoadtrip/_api";

export default class roadtripStore {
  @observable roadtrips = [];
  @observable isFetchingRoadtrips = false;

  // Get roadtrips by date
  @action
  getRoadtrips = (date: string) => {
    this.roadtrips = [];
    this.isFetchingRoadtrips = true;

    getRoadtripsByDateAPI(date)
      .then(newRoadtrips => {
        if (newRoadtrips.length > 0) {
          newRoadtrips.forEach(roadtrip => {
            this.roadtrips.push(roadtrip)
          })
        }
        this.isFetchingRoadtrips = false;
      })
      .catch(error => {
        console.log(error);
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
        console.log(error);
      })  
  }

  // Delete roadtrip
  @action.bound
  deleteOwnRoadtrip(id: string) {
    deleteOwnRoadtripAPI(id)
      .then(deletedRoadtrip => {
        this.roadtrips.forEach((roadtrip, index)=> {
          if (roadtrip._id === id) {
            this.roadtrips.splice(index, 1);
          }
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
}

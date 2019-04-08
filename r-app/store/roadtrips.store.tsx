import { action, observable } from 'mobx';
import { addRoadtripAPI } from "../components/templates/R-AddARoadtrip/_api";
import { getRoadtripsByDateAPI } from "../components/templates/R-ListRoadtrips/_api";

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
  @action
  addANewRoadtrip(roadtrip: object) {
    addRoadtripAPI(roadtrip)
      .then(message => {
        console.log(message);
      })
      .catch(error => {
        console.log(error);
      })
  }
}

import { observable, action } from "mobx";
import { getRoadtripsByDateAPI } from './_api';


export default class RoadtripsStore {
  @observable roadtrips = [];
  @observable isFetchingRoadtrips = false;

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
}

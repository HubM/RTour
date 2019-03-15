import { observable, action } from "mobx";

import { getRoadtripsByDate } from '../../components/templates/R-ListRoadtrips/_api';


export default class RoadtripsStore {
  @observable roadtrips = [];
  @observable isFetchingRoadtrips = false;

  @action
  getRoadtrips = (date: string) => {
    this.roadtrips = [];
    this.isFetchingRoadtrips = true;

    getRoadtripsByDate(date)
      .then(newRoadtrips => {
        this.roadtrips.push(newRoadtrips);
        this.isFetchingRoadtrips = false;
      })
      .catch(error => {
        console.log(error);
      })
  }
}

import { observable, action } from "mobx";
import { getRoadtripsByDate } from '../../components/templates/R-ListRoadtrips/_api';

export default class RoadtripsStore {
  @observable newRoadtrip = {
    address: "",
    startCity: "",
    endCity: "",
    calendar: {
      startingDate: "",
      duration: 1
    },
    hour: 0,
    seats: 0,
    roadtripType: "twoWays",
  }

  @observable roadtrips = []

  @action
  setNewRoadtrip(roadtrip: object) {
    const { address, startCity, endCity, calendar, seats, hour, roadtripType } = roadtrip;
    Object.assign(this.newRoadtrip, { address, startCity, endCity, calendar, seats, hour, roadtripType })
  }

  @action
  getRoadtrips(date: string) {
    getRoadtripsByDate(date)
      .then(roadtrips => {
        this.roadtrips.push(roadtrips);
      })
      .catch(error => {
        console.log(error);
      })
  }
}

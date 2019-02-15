import { observable, action } from "mobx";


const newRoadtrip = observable({
  newRoadtrip: {
    startingCity: "",
    endingCity: "",
    startingDate: "",
    endingDate: "",
    startingHour: 0,
    seatAvailable: 0,
    hourStateValue: "",
    seatStateValue: "",
    roadtripType: "twoWays",
    isTwoWaysTrip: false,
    isOneWayTrip: false,
  },
  setNewRoadtrip(roadtrip: object) {
    const {
      startingCity,
      endingCity,
      startingDate,
      endingDate,
      seatAvailable,
      hourStateValue,
      seatStateValue,
      roadtripType,
      isTwoWaysTrip,
      isOneWayTrip
    } = roadtrip;

    this.newRoadtrip.startingCity = startingCity;
    this.newRoadtrip.endingCity = endingCity;
    this.newRoadtrip.startingDate = startingDate;
    this.newRoadtrip.endingDate = endingDate;
    this.newRoadtrip.seatAvailable = seatAvailable;
    this.newRoadtrip.hourStateValue = hourStateValue;
    this.newRoadtrip.seatStateValue = seatStateValue;
    this.newRoadtrip.roadtripType = roadtripType;
    this.newRoadtrip.isOneWayTrip = isOneWayTrip;
    this.newRoadtrip.isTwoWaysTrip = isTwoWaysTrip;
  }
}, {
    setNewRoadtrip: action
  })

export default class RoadtripsStore {
  @observable newRoadtrip = newRoadtrip
  @action setNewRoadtrip = newRoadtrip.setNewRoadtrip
}
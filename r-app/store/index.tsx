import UserStore from "./user.store";
import RoadtripsStore from "./roadtrips.store";
import singleRoadtripStore from "./single-roadtrip.store";

export default class RootStore {
  public userStore: UserStore
  public roadtripsStore: RoadtripsStore
  public singleRoadtripStore: singleRoadtripStore

  constructor() {
    this.userStore = new UserStore();
    this.roadtripsStore = new RoadtripsStore();
    this.singleRoadtripStore = new singleRoadtripStore();
  }
}
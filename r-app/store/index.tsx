import UserStore from "./stores/user.store";
import RoadtripsStore from "./stores/roadtrips.store";
import newRoadtripStore from "./stores/new-roadtrip.store";

export default class RootStore {
  public userStore: UserStore
  public roadtripsStore: RoadtripsStore
  public newRoadtripStore: newRoadtripStore

  constructor() {
    this.userStore = new UserStore()
    this.roadtripsStore = new RoadtripsStore()
    this.newRoadtripStore = new newRoadtripStore();
  }
}
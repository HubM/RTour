import UserStore from "./user.store";
import RoadtripsStore from "./roadtrips.store";

export default class RootStore {
  public userStore: UserStore
  public roadtripsStore: RoadtripsStore

  constructor() {
    this.userStore = new UserStore();
    this.roadtripsStore = new RoadtripsStore();
  }
}
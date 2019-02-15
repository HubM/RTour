import UserStore from "./stores/user.store";
import RoadtripsStore from "./stores/roadtrips.store";

class RootStore {
  public userStore: UserStore
  public roadtripsStore: RoadtripsStore

  constructor() {
    this.userStore = new UserStore()
    this.roadtripsStore = new RoadtripsStore()
  }
}

export default RootStore;
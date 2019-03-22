import UserStore from "./stores/user.store";
import UserProfileStore from "../components/templates/R-Profile/_store";
import RoadtripsStore from "./stores/roadtrips.store";
import newRoadtripStore from "./stores/new-roadtrip.store";

export default class RootStore {
  public userStore: UserStore
  public roadtripsStore: RoadtripsStore
  public newRoadtripStore: newRoadtripStore
  public userProfileStore: UserProfileStore

  constructor() {
    this.userStore = new UserStore()
    this.roadtripsStore = new RoadtripsStore()
    this.newRoadtripStore = new newRoadtripStore();
    this.userProfileStore = new UserProfileStore();
  }
}